const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./fonts-BAz77WgK.css"])))=>i.map(i=>d[i]);
import{_ as ec}from"./preload-helper-Du-ZIQLl.js";import{D as nc,i as ic,j as sc,g as rc,m as ac,o as oc,r as lc}from"./tokenizer-2esH2ihD.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="180",An={ROTATE:0,DOLLY:1,PAN:2},Bn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cc=0,Lo=1,hc=2,Y0=1,Z0=2,yn=3,Hn=0,Fe=1,En=2,zn=0,Ci=1,Do=2,Uo=3,Io=4,uc=5,ti=100,dc=101,fc=102,pc=103,mc=104,gc=200,_c=201,vc=202,xc=203,oa=204,la=205,Mc=206,Sc=207,yc=208,Ec=209,Tc=210,bc=211,Ac=212,wc=213,Rc=214,ca=0,ha=1,ua=2,Li=3,da=4,fa=5,pa=6,ma=7,io=0,Cc=1,Pc=2,kn=0,Lc=1,Dc=2,Uc=3,Ic=4,Nc=5,Fc=6,Oc=7,K0=300,Di=301,Ui=302,ga=303,_a=304,dr=306,sr=1e3,ni=1001,va=1002,en=1003,Bc=1004,Ss=1005,an=1006,Mr=1007,ii=1008,dn=1009,$0=1010,J0=1011,rs=1012,so=1013,ri=1014,Tn=1015,fs=1016,ro=1017,ao=1018,as=1020,j0=35902,Q0=35899,tl=1021,el=1022,je=1023,os=1026,ls=1027,nl=1028,oo=1029,il=1030,lo=1031,co=1033,Zs=33776,Ks=33777,$s=33778,Js=33779,xa=35840,Ma=35841,Sa=35842,ya=35843,Ea=36196,Ta=37492,ba=37496,Aa=37808,wa=37809,Ra=37810,Ca=37811,Pa=37812,La=37813,Da=37814,Ua=37815,Ia=37816,Na=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,ka=36492,Ha=36494,Va=36495,Ga=36283,Wa=36284,Xa=36285,qa=36286,zc=3200,kc=3201,sl=0,Hc=1,On="",Ue="srgb",Ii="srgb-linear",rr="linear",ne="srgb",fi=7680,No=519,Vc=512,Gc=513,Wc=514,rl=515,Xc=516,qc=517,Yc=518,Zc=519,Fo=35044,Oo="300 es",on=2e3,ar=2001;class ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,Ya=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Kc(i,t){return(i%t+t)%t}function Sr(i,t,e){return(1-e)*i+e*t}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $c={DEG2RAD:js};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*v,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const C=Math.sqrt(T),w=Math.atan2(C,d*A);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const M=o*A;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yr.copy(this).projectOnVector(t),this.sub(yr)}reflect(t){return this.sub(yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new P,Bo=new ai;class kt{constructor(t,e,n,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],A=s[1],T=s[4],M=s[7],C=s[2],w=s[5],L=s[8];return r[0]=a*v+o*A+l*C,r[3]=a*m+o*T+l*w,r[6]=a*d+o*M+l*L,r[1]=c*v+h*A+u*C,r[4]=c*m+h*T+u*w,r[7]=c*d+h*M+u*L,r[2]=f*v+p*A+g*C,r[5]=f*m+p*T+g*w,r[8]=f*d+p*M+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new kt;function al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jc(){const i=or("canvas");return i.style.display="block",i}const zo={};function cs(i){i in zo||(zo[i]=!0,console.warn(i))}function jc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ko=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qc(){const i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:ko,fromXYZ:Ho,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:ko,fromXYZ:Ho,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const $t=Qc();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class th{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pi===void 0&&(pi=or("canvas")),pi.width=t.width,pi.height=t.height;const s=pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eh=0;class ho{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tr(s[a].image)):r.push(Tr(s[a]))}else r=Tr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nh=0;const br=new P;class Ce extends ci{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=ni,s=ni,r=an,a=ii,o=je,l=dn,c=Ce.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Oi(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(br).x}get height(){return this.source.getSize(br).y}get depth(){return this.source.getSize(br).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==K0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=K0;Ce.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,M=(p+1)/2,C=(d+1)/2,w=(h+f)/4,L=(u+v)/4,N=(g+m)/4;return T>M&&T>C?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=L/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=N/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=L/r,s=N/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ce(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ho(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends ih{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ol extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sh extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),Es.subVectors(this.max,Gi),mi.subVectors(t.a,Gi),gi.subVectors(t.b,Gi),_i.subVectors(t.c,Gi),Pn.subVectors(gi,mi),Ln.subVectors(_i,gi),qn.subVectors(mi,_i);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-qn.z,qn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,qn.z,0,-qn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-qn.y,qn.x,0];return!Ar(e,mi,gi,_i,Es)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,mi,gi,_i,Es))?!1:(Ts.crossVectors(Pn,Ln),e=[Ts.x,Ts.y,Ts.z],Ar(e,mi,gi,_i,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _n=[new P,new P,new P,new P,new P,new P,new P,new P],Ze=new P,ys=new ps,mi=new P,gi=new P,_i=new P,Pn=new P,Ln=new P,qn=new P,Gi=new P,Es=new P,Ts=new P,Yn=new P;function Ar(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);const o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const rh=new ps,Wi=new P,wr=new P;class fr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(wr)),this.expandByPoint(Wi.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const vn=new P,Rr=new P,bs=new P,Dn=new P,Cr=new P,As=new P,Pr=new P;class uo{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rr.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Rr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Dn.dot(this.direction),l=-Dn.dot(bs),c=Dn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Rr).addScaledVector(bs,f),p}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){Cr.subVectors(e,t),As.subVectors(n,t),Pr.crossVectors(Cr,As);let a=this.direction.dot(Pr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,t);const l=o*this.direction.dot(As.crossVectors(Dn,As));if(l<0)return null;const c=o*this.direction.dot(Cr.cross(Dn));if(c<0||l+c>a)return null;const h=-o*Dn.dot(Pr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ah,t,oh)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Un.crossVectors(n,ze),Un.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Un.crossVectors(n,ze)),Un.normalize(),ws.crossVectors(ze,Un),s[0]=Un.x,s[4]=ws.x,s[8]=ze.x,s[1]=Un.y,s[5]=ws.y,s[9]=ze.y,s[2]=Un.z,s[6]=ws.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],A=n[3],T=n[7],M=n[11],C=n[15],w=s[0],L=s[4],N=s[8],y=s[12],S=s[1],R=s[5],B=s[9],V=s[13],q=s[2],X=s[6],W=s[10],j=s[14],H=s[3],ot=s[7],ft=s[11],_t=s[15];return r[0]=a*w+o*S+l*q+c*H,r[4]=a*L+o*R+l*X+c*ot,r[8]=a*N+o*B+l*W+c*ft,r[12]=a*y+o*V+l*j+c*_t,r[1]=h*w+u*S+f*q+p*H,r[5]=h*L+u*R+f*X+p*ot,r[9]=h*N+u*B+f*W+p*ft,r[13]=h*y+u*V+f*j+p*_t,r[2]=g*w+v*S+m*q+d*H,r[6]=g*L+v*R+m*X+d*ot,r[10]=g*N+v*B+m*W+d*ft,r[14]=g*y+v*V+m*j+d*_t,r[3]=A*w+T*S+M*q+C*H,r[7]=A*L+T*R+M*X+C*ot,r[11]=A*N+T*B+M*W+C*ft,r[15]=A*y+T*V+M*j+C*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],A=u*m*c-v*f*c+v*l*p-o*m*p-u*l*d+o*f*d,T=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,M=h*v*c-g*u*c+g*o*p-a*v*p-h*o*d+a*u*d,C=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,w=e*A+n*T+s*M+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/w;return t[0]=A*L,t[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*L,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*L,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*L,t[4]=T*L,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*L,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*L,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*L,t[8]=M*L,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*d-e*u*d)*L,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*d+e*o*d)*L,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*L,t[12]=C*L,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*L,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*L,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,v=a*h,m=a*u,d=o*u,A=l*c,T=l*h,M=l*u,C=n.x,w=n.y,L=n.z;return s[0]=(1-(v+d))*C,s[1]=(p+M)*C,s[2]=(g-T)*C,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(f+d))*w,s[6]=(m+A)*w,s[7]=0,s[8]=(g+T)*L,s[9]=(m-A)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,h=1/a,u=1/o;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=u,Ke.elements[9]*=u,Ke.elements[10]*=u,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=on,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===on)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ar)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=on,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===on)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ar)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new P,Ke=new de,ah=new P(0,0,0),oh=new P(1,1,1),Un=new P,ws=new P,ze=new P,Vo=new de,Go=new ai;class fn{constructor(t=0,e=0,n=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Go.setFromEuler(this),this.setFromQuaternion(Go,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lh=0;const Wo=new P,xi=new ai,xn=new de,Rs=new P,Xi=new P,ch=new P,hh=new ai,Xo=new P(1,0,0),qo=new P(0,1,0),Yo=new P(0,0,1),Zo={type:"added"},uh={type:"removed"},Mi={type:"childadded",child:null},Lr={type:"childremoved",child:null};class Se extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new P,e=new fn,n=new ai,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new kt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis(Yo,t)}translateOnAxis(t,e){return Wo.copy(t).applyQuaternion(this.quaternion),this.position.add(Wo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis(Yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Xi,Rs,this.up):xn.lookAt(Rs,Xi,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(xn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zo),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uh),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zo),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,hh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new P(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new P,Mn=new P,Dr=new P,Sn=new P,Si=new P,yi=new P,Ko=new P,Ur=new P,Ir=new P,Nr=new P,Fr=new pe,Or=new pe,Br=new pe;class Je{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$e.subVectors(t,e),s.cross($e);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$e.subVectors(s,e),Mn.subVectors(n,e),Dr.subVectors(t,e);const a=$e.dot($e),o=$e.dot(Mn),l=$e.dot(Dr),c=Mn.dot(Mn),h=Mn.dot(Dr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fr.setScalar(0),Or.setScalar(0),Br.setScalar(0),Fr.fromBufferAttribute(t,e),Or.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fr,r.x),a.addScaledVector(Or,r.y),a.addScaledVector(Br,r.z),a}static isFrontFacing(t,e,n,s){return $e.subVectors(n,e),Mn.subVectors(t,e),$e.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),$e.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),yi.subVectors(r,n),Ur.subVectors(t,n);const l=Si.dot(Ur),c=yi.dot(Ur);if(l<=0&&c<=0)return e.copy(n);Ir.subVectors(t,s);const h=Si.dot(Ir),u=yi.dot(Ir);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Si,a);Nr.subVectors(t,r);const p=Si.dot(Nr),g=yi.dot(Nr);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(yi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ko.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Ko,o);const d=1/(m+v+f);return a=v*d,o=f*d,e.copy(n).addScaledVector(Si,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Kc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zr(a,r,t+1/3),this.g=zr(a,r,t),this.b=zr(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return $t.workingToColorSpace(be.copy(this),t),Math.round(Wt(be.r*255,0,255))*65536+Math.round(Wt(be.g*255,0,255))*256+Math.round(Wt(be.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ue){$t.workingToColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Cs);const n=Sr(In.h,Cs.h,e),s=Sr(In.s,Cs.s,e),r=Sr(In.l,Cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Xt;Xt.NAMES=cl;let dh=0;class Bi extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Ci,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=la,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hl extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new P,Ps=new ct;let fh=0;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fo&&(t.usage=this.usage),t}}class ul extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dl extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ye extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ph=0;const We=new de,kr=new Se,Ei=new P,ke=new ps,qi=new ps,Me=new P;class pn extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(al(t)?dl:ul)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(ke.min,qi.min),ke.expandByPoint(Me),Me.addVectors(ke.max,qi.max),ke.expandByPoint(Me)):(ke.expandByPoint(qi.min),ke.expandByPoint(qi.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),Me.add(Ei)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new P,l[N]=new P;const c=new P,h=new P,u=new P,f=new ct,p=new ct,g=new ct,v=new P,m=new P;function d(N,y,S){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[N].add(v),o[y].add(v),o[S].add(v),l[N].add(m),l[y].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let N=0,y=A.length;N<y;++N){const S=A[N],R=S.start,B=S.count;for(let V=R,q=R+B;V<q;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const T=new P,M=new P,C=new P,w=new P;function L(N){C.fromBufferAttribute(s,N),w.copy(C);const y=o[N];T.copy(y),T.sub(C.multiplyScalar(C.dot(y))).normalize(),M.crossVectors(w,y);const R=M.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,R)}for(let N=0,y=A.length;N<y;++N){const S=A[N],R=S.start,B=S.count;for(let V=R,q=R+B;V<q;V+=3)L(t.getX(V+0)),L(t.getX(V+1)),L(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new ln(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new de,Zn=new uo,Ls=new fr,Jo=new P,Ds=new P,Us=new P,Is=new P,Hr=new P,Ns=new P,jo=new P,Fs=new P;class Qe extends Se{constructor(t=new pn,e=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Hr.fromBufferAttribute(u,t),a?Ns.addScaledVector(Hr,h):Ns.addScaledVector(Hr.sub(e),h))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Ls.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Ls,Jo)===null||Zn.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&($o.copy(r).invert(),Zn.copy(t.ray).applyMatrix4($o),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,C=T;M<C;M+=3){const w=o.getX(M),L=o.getX(M+1),N=o.getX(M+2);s=Os(this,d,t,n,c,h,u,w,L,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const A=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=Os(this,a,t,n,c,h,u,A,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,C=T;M<C;M+=3){const w=M,L=M+1,N=M+2;s=Os(this,d,t,n,c,h,u,w,L,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const A=m,T=m+1,M=m+2;s=Os(this,a,t,n,c,h,u,A,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mh(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Hn,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:i}}function Os(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ds),i.getVertexPosition(l,Us),i.getVertexPosition(c,Is);const h=mh(i,t,e,n,Ds,Us,Is,jo);if(h){const u=new P;Je.getBarycoord(jo,Ds,Us,Is,u),s&&(h.uv=Je.getInterpolatedAttribute(s,o,l,c,u,new ct)),r&&(h.uv1=Je.getInterpolatedAttribute(r,o,l,c,u,new ct)),a&&(h.normal=Je.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};Je.getNormal(Ds,Us,Is,f.normal),h.face=f,h.barycoord=u}return h}class ms extends pn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function g(v,m,d,A,T,M,C,w,L,N,y){const S=M/L,R=C/N,B=M/2,V=C/2,q=w/2,X=L+1,W=N+1;let j=0,H=0;const ot=new P;for(let ft=0;ft<W;ft++){const _t=ft*R-V;for(let Lt=0;Lt<X;Lt++){const Ht=Lt*S-B;ot[v]=Ht*A,ot[m]=_t*T,ot[d]=q,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[m]=0,ot[d]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Lt/L),u.push(1-ft/N),j+=1}}for(let ft=0;ft<N;ft++)for(let _t=0;_t<L;_t++){const Lt=f+_t+X*ft,Ht=f+_t+X*(ft+1),Zt=f+(_t+1)+X*(ft+1),Gt=f+(_t+1)+X*ft;l.push(Lt,Ht,Gt),l.push(Ht,Zt,Gt),H+=6}o.addGroup(p,H,y),p+=H,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){const t={};for(let e=0;e<i.length;e++){const n=Ni(i[e]);for(const s in n)t[s]=n[s]}return t}function gh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const _h={clone:Ni,merge:we};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=gh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pl extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new P,Qo=new ct,t0=new ct;class qe extends pl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Qo,t0),e.subVectors(t0,Qo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,bi=1;class Mh extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(Ti,bi,t,e);s.layers=this.layers,this.add(s);const r=new qe(Ti,bi,t,e);r.layers=this.layers,this.add(r);const a=new qe(Ti,bi,t,e);a.layers=this.layers,this.add(a);const o=new qe(Ti,bi,t,e);o.layers=this.layers,this.add(o);const l=new qe(Ti,bi,t,e);l.layers=this.layers,this.add(l);const c=new qe(Ti,bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ml extends Ce{constructor(t=[],e=Di,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sh extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ml(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ms(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:zn});r.uniforms.tEquirect.value=e;const a=new Qe(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=an),new Mh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Ki extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yh={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class fo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eh extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gr=new P,Th=new P,bh=new kt;class Fn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Gr.subVectors(n,e).cross(Th.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bh.getNormalMatrix(t),s=this.coplanarPoint(Gr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new fr,Ah=new ct(.5,.5),Bs=new P;class po{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],v=r[9],m=r[10],d=r[11],A=r[12],T=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,p-h,d-g,C-A).normalize(),s[1].setComponents(c+a,p+h,d+g,C+A).normalize(),s[2].setComponents(c+o,p+u,d+v,C+T).normalize(),s[3].setComponents(c-o,p-u,d-v,C-T).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,p-f,d-m,C-M).normalize();else if(s[4].setComponents(c-l,p-f,d-m,C-M).normalize(),e===on)s[5].setComponents(c+l,p+f,d+m,C+M).normalize();else if(e===ar)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){Kn.center.set(0,0,0);const e=Ah.distanceTo(t.center);return Kn.radius=.7071067811865476+e,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Bs.x=s.normal.x>0?t.max.x:t.min.x,Bs.y=s.normal.y>0?t.max.y:t.min.y,Bs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gl extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lr=new P,cr=new P,e0=new de,Yi=new uo,zs=new fr,Wr=new P,n0=new P;class wh extends Se{constructor(t=new pn,e=new gl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)lr.fromBufferAttribute(e,s-1),cr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=lr.distanceTo(cr);t.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;e0.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(e0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const d=h.getX(v),A=h.getX(v+1),T=ks(this,t,Yi,l,d,A,v);T&&e.push(T)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),d=ks(this,t,Yi,l,v,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const d=ks(this,t,Yi,l,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){const v=ks(this,t,Yi,l,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ks(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(lr.fromBufferAttribute(o,s),cr.fromBufferAttribute(o,r),e.distanceSqToSegment(lr,cr,Wr,n0)>n)return;Wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wr);if(!(c<t.near||c>t.far))return{distance:c,point:n0.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const i0=new P,s0=new P;class Rh extends wh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)i0.fromBufferAttribute(e,s),s0.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+i0.distanceTo(s0);t.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ch extends Ce{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _l extends Ce{constructor(t,e,n=ri,s,r,a,o=en,l=en,c,h=os,u=1){if(h!==os&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ho(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vl extends Ce{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new de;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Wt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mo extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ph extends mo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function go(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Hs=new P,Xr=new go,qr=new go,Yr=new go;class Lh extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Hs.subVectors(s[0],s[1]).add(s[0]),c=Hs);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Hs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Xr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),qr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Yr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Xr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),qr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Yr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Xr.calc(l),qr.calc(l),Yr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function r0(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Dh(i,t){const e=1-i;return e*e*t}function Uh(i,t){return 2*(1-i)*i*t}function Ih(i,t){return i*i*t}function ns(i,t,e,n){return Dh(i,t)+Uh(i,e)+Ih(i,n)}function Nh(i,t){const e=1-i;return e*e*e*t}function Fh(i,t){const e=1-i;return 3*e*e*i*t}function Oh(i,t){return 3*(1-i)*i*i*t}function Bh(i,t){return i*i*i*t}function is(i,t,e,n,s){return Nh(i,t)+Fh(i,e)+Oh(i,n)+Bh(i,s)}class xl extends mn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(t,s.x,r.x,a.x,o.x),is(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zh extends mn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(t,s.x,r.x,a.x,o.x),is(t,s.y,r.y,a.y,o.y),is(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ml extends mn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sl extends mn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ns(t,s.x,r.x,a.x),ns(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ns(t,s.x,r.x,a.x),ns(t,s.y,r.y,a.y),ns(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yl extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(r0(o,l.x,c.x,h.x,u.x),r0(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:Ph,CatmullRomCurve3:Lh,CubicBezierCurve:xl,CubicBezierCurve3:zh,EllipseCurve:mo,LineCurve:Ml,LineCurve3:kh,QuadraticBezierCurve:Sl,QuadraticBezierCurve3:Hh,SplineCurve:yl});class Vh extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Za[s.type]().fromJSON(s))}return this}}class a0 extends Vh{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ml(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Sl(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new xl(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new mo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class El extends a0{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new a0().fromJSON(s))}return this}}function Gh(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Tl(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Zh(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return hs(r,a,e,o,l,c,0),a}function Tl(i,t,e,n,s){let r;if(s===ru(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=o0(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=o0(a/n|0,i[a],i[a+1],r);return r&&Fi(r,r.next)&&(ds(r),r=r.next),r}function li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fi(e,e.next)||ue(e.prev,e,e.next)===0)){if(ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Qh(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Xh(i,n,s,r):Wh(i)){t.push(l.i,i.i,c.i),ds(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=qh(li(i),t),hs(i,t,e,n,s,r,2)):a===2&&Yh(i,t,e,n,s,r):hs(li(i),t,e,n,s,r,1);break}}}function Wh(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&$i(s,o,r,l,a,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xh(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ue(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),v=Math.max(o,l,c),m=Math.max(h,u,f),d=Ka(p,g,t,e,n),A=Ka(v,m,t,e,n);let T=i.prevZ,M=i.nextZ;for(;T&&T.z>=d&&M&&M.z<=A;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&$i(o,h,l,u,c,f,T.x,T.y)&&ue(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&$i(o,h,l,u,c,f,M.x,M.y)&&ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=d;){if(T.x>=p&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&$i(o,h,l,u,c,f,T.x,T.y)&&ue(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=A;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&$i(o,h,l,u,c,f,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function qh(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Fi(n,s)&&Al(n,e,e.next,s)&&us(n,s)&&us(s,n)&&(t.push(n.i,e.i,s.i),ds(e),ds(e.next),e=i=s),e=e.next}while(e!==i);return li(e)}function Yh(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nu(a,o)){let l=wl(a,o);a=li(a,a.next),l=li(l,l.next),hs(a,t,e,n,s,r,0),hs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zh(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Tl(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(eu(c))}s.sort(Kh);for(let r=0;r<s.length;r++)e=$h(s[r],e);return e}function Kh(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function $h(i,t){const e=Jh(i,t);if(!e)return t;const n=wl(e,i);return li(n,n.next),li(e,e.next)}function Jh(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Fi(i,e))return e;do{if(Fi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&bl(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);us(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&jh(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function jh(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function Qh(i,t,e,n){let s=i;do s.z===0&&(s.z=Ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tu(s)}function tu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function eu(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bl(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function $i(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&bl(i,t,e,n,s,r,a,o)}function nu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!iu(i,t)&&(us(i,t)&&us(t,i)&&su(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Fi(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fi(i,t){return i.x===t.x&&i.y===t.y}function Al(i,t,e,n){const s=Gs(ue(i,t,e)),r=Gs(ue(i,t,n)),a=Gs(ue(e,n,i)),o=Gs(ue(e,n,t));return!!(s!==r&&a!==o||s===0&&Vs(i,e,t)||r===0&&Vs(i,n,t)||a===0&&Vs(e,i,n)||o===0&&Vs(e,t,n))}function Vs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Gs(i){return i>0?1:i<0?-1:0}function iu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Al(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function us(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function su(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wl(i,t){const e=$a(i.i,i.x,i.y),n=$a(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function o0(i,t,e,n){const s=$a(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $a(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ru(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class au{static triangulate(t,e,n=2){return Gh(t,e,n)}}class wi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return wi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];l0(t),c0(n,t);let a=t.length;e.forEach(l0);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,c0(n,e[l]);const o=au.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function l0(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function c0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class _o extends pn{constructor(t=new El([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:ou;let T,M=!1,C,w,L,N;d&&(T=d.getSpacedPoints(h),M=!0,f=!1,C=d.computeFrenetFrames(h,!1),w=new P,L=new P,N=new P),f||(m=0,p=0,g=0,v=0);const y=o.extractPoints(c);let S=y.shape;const R=y.holes;if(!wi.isClockWise(S)){S=S.reverse();for(let et=0,$=R.length;et<$;et++){const K=R[et];wi.isClockWise(K)&&(R[et]=K.reverse())}}function V(et){const K=10000000000000001e-36;let Z=et[0];for(let ht=1;ht<=et.length;ht++){const nt=ht%et.length,ut=et[nt],Ot=ut.x-Z.x,Ft=ut.y-Z.y,E=Ot*Ot+Ft*Ft,_=Math.max(Math.abs(ut.x),Math.abs(ut.y),Math.abs(Z.x),Math.abs(Z.y)),F=K*_*_;if(E<=F){et.splice(nt,1),ht--;continue}Z=ut}}V(S),R.forEach(V);const q=R.length,X=S;for(let et=0;et<q;et++){const $=R[et];S=S.concat($)}function W(et,$,K){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector($,K)}const j=S.length;function H(et,$,K){let Z,ht,nt;const ut=et.x-$.x,Ot=et.y-$.y,Ft=K.x-et.x,E=K.y-et.y,_=ut*ut+Ot*Ot,F=ut*E-Ot*Ft;if(Math.abs(F)>Number.EPSILON){const k=Math.sqrt(_),tt=Math.sqrt(Ft*Ft+E*E),G=$.x-Ot/k,wt=$.y+ut/k,lt=K.x-E/tt,Tt=K.y+Ft/tt,bt=((lt-G)*E-(Tt-wt)*Ft)/(ut*E-Ot*Ft);Z=G+ut*bt-et.x,ht=wt+Ot*bt-et.y;const it=Z*Z+ht*ht;if(it<=2)return new ct(Z,ht);nt=Math.sqrt(it/2)}else{let k=!1;ut>Number.EPSILON?Ft>Number.EPSILON&&(k=!0):ut<-Number.EPSILON?Ft<-Number.EPSILON&&(k=!0):Math.sign(Ot)===Math.sign(E)&&(k=!0),k?(Z=-Ot,ht=ut,nt=Math.sqrt(_)):(Z=ut,ht=Ot,nt=Math.sqrt(_/2))}return new ct(Z/nt,ht/nt)}const ot=[];for(let et=0,$=X.length,K=$-1,Z=et+1;et<$;et++,K++,Z++)K===$&&(K=0),Z===$&&(Z=0),ot[et]=H(X[et],X[K],X[Z]);const ft=[];let _t,Lt=ot.concat();for(let et=0,$=q;et<$;et++){const K=R[et];_t=[];for(let Z=0,ht=K.length,nt=ht-1,ut=Z+1;Z<ht;Z++,nt++,ut++)nt===ht&&(nt=0),ut===ht&&(ut=0),_t[Z]=H(K[Z],K[nt],K[ut]);ft.push(_t),Lt=Lt.concat(_t)}let Ht;if(m===0)Ht=wi.triangulateShape(X,R);else{const et=[],$=[];for(let K=0;K<m;K++){const Z=K/m,ht=p*Math.cos(Z*Math.PI/2),nt=g*Math.sin(Z*Math.PI/2)+v;for(let ut=0,Ot=X.length;ut<Ot;ut++){const Ft=W(X[ut],ot[ut],nt);Ct(Ft.x,Ft.y,-ht),Z===0&&et.push(Ft)}for(let ut=0,Ot=q;ut<Ot;ut++){const Ft=R[ut];_t=ft[ut];const E=[];for(let _=0,F=Ft.length;_<F;_++){const k=W(Ft[_],_t[_],nt);Ct(k.x,k.y,-ht),Z===0&&E.push(k)}Z===0&&$.push(E)}}Ht=wi.triangulateShape(et,$)}const Zt=Ht.length,Gt=g+v;for(let et=0;et<j;et++){const $=f?W(S[et],Lt[et],Gt):S[et];M?(L.copy(C.normals[0]).multiplyScalar($.x),w.copy(C.binormals[0]).multiplyScalar($.y),N.copy(T[0]).add(L).add(w),Ct(N.x,N.y,N.z)):Ct($.x,$.y,0)}for(let et=1;et<=h;et++)for(let $=0;$<j;$++){const K=f?W(S[$],Lt[$],Gt):S[$];M?(L.copy(C.normals[et]).multiplyScalar(K.x),w.copy(C.binormals[et]).multiplyScalar(K.y),N.copy(T[et]).add(L).add(w),Ct(N.x,N.y,N.z)):Ct(K.x,K.y,u/h*et)}for(let et=m-1;et>=0;et--){const $=et/m,K=p*Math.cos($*Math.PI/2),Z=g*Math.sin($*Math.PI/2)+v;for(let ht=0,nt=X.length;ht<nt;ht++){const ut=W(X[ht],ot[ht],Z);Ct(ut.x,ut.y,u+K)}for(let ht=0,nt=R.length;ht<nt;ht++){const ut=R[ht];_t=ft[ht];for(let Ot=0,Ft=ut.length;Ot<Ft;Ot++){const E=W(ut[Ot],_t[Ot],Z);M?Ct(E.x,E.y+T[h-1].y,T[h-1].x+K):Ct(E.x,E.y,u+K)}}}Y(),Q();function Y(){const et=s.length/3;if(f){let $=0,K=j*$;for(let Z=0;Z<Zt;Z++){const ht=Ht[Z];Et(ht[2]+K,ht[1]+K,ht[0]+K)}$=h+m*2,K=j*$;for(let Z=0;Z<Zt;Z++){const ht=Ht[Z];Et(ht[0]+K,ht[1]+K,ht[2]+K)}}else{for(let $=0;$<Zt;$++){const K=Ht[$];Et(K[2],K[1],K[0])}for(let $=0;$<Zt;$++){const K=Ht[$];Et(K[0]+j*h,K[1]+j*h,K[2]+j*h)}}n.addGroup(et,s.length/3-et,0)}function Q(){const et=s.length/3;let $=0;xt(X,$),$+=X.length;for(let K=0,Z=R.length;K<Z;K++){const ht=R[K];xt(ht,$),$+=ht.length}n.addGroup(et,s.length/3-et,1)}function xt(et,$){let K=et.length;for(;--K>=0;){const Z=K;let ht=K-1;ht<0&&(ht=et.length-1);for(let nt=0,ut=h+m*2;nt<ut;nt++){const Ot=j*nt,Ft=j*(nt+1),E=$+Z+Ot,_=$+ht+Ot,F=$+ht+Ft,k=$+Z+Ft;qt(E,_,F,k)}}}function Ct(et,$,K){l.push(et),l.push($),l.push(K)}function Et(et,$,K){re(et),re($),re(K);const Z=s.length/3,ht=A.generateTopUV(n,s,Z-3,Z-2,Z-1);b(ht[0]),b(ht[1]),b(ht[2])}function qt(et,$,K,Z){re(et),re($),re(Z),re($),re(K),re(Z);const ht=s.length/3,nt=A.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);b(nt[0]),b(nt[1]),b(nt[3]),b(nt[1]),b(nt[2]),b(nt[3])}function re(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function b(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Za[s.type]().fromJSON(s)),new _o(n,t.options)}}const ou={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,a),new ct(o,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ct(a,1-l),new ct(c,1-u),new ct(f,1-g),new ct(v,1-d)]:[new ct(o,1-l),new ct(h,1-u),new ct(p,1-g),new ct(m,1-d)]}};function lu(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gs extends pn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const A=d*f-a;for(let T=0;T<c;T++){const M=T*u-r;g.push(M,-A,0),v.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const T=A+c*d,M=A+c*(d+1),C=A+1+c*(d+1),w=A+1+c*d;p.push(T,M,w),p.push(M,C,w)}this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zr extends Bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cu extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hu extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Rl extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class uu extends Rl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Kr=new de,h0=new P,u0=new P;class du{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;h0.setFromMatrixPosition(t.matrixWorld),e.position.copy(h0),u0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(u0),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Cl extends pl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fu extends du{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pu extends Rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new fu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mu extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class d0{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gu extends ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function f0(i,t,e,n){const s=_u(n);switch(e){case tl:return i*t;case nl:return i*t/s.components*s.byteLength;case oo:return i*t/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case lo:return i*t*2/s.components*s.byteLength;case el:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case co:return i*t*4/s.components*s.byteLength;case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case ya:return Math.max(i,16)*Math.max(t,8)/4;case xa:case Sa:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ka:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ga:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _u(i){switch(i){case dn:case $0:return{byteLength:1,components:1};case rs:case J0:case fs:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case ri:case so:case Tn:return{byteLength:4,components:1};case j0:case Q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vu(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mu=`#ifdef USE_ALPHAHASH
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
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
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
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu=`#ifdef USE_BATCHING
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
#endif`,Ru=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Du=`#ifdef USE_IRIDESCENCE
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
#endif`,Uu=`#ifdef USE_BUMPMAP
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vu=`#define PI 3.141592653589793
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
} // validated`,Gu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wu=`vec3 transformedNormal = objectNormal;
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
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",$u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ju=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
#endif`,ld=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hd=`uniform bool receiveShadow;
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
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
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
#endif`,_d=`struct PhysicalMaterial {
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
}`,vd=`
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
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rd=`#if defined( USE_POINTS_UV )
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
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
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
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bd=`#ifndef FLAT_SHADED
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
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
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
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sf=`float getShadowMask() {
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
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,df=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mf=`uniform sampler2D t2D;
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`#include <common>
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
}`,Af=`#if DEPTH_PACKING == 3200
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
}`,wf=`#define DISTANCE
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
}`,Rf=`#define DISTANCE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,If=`uniform vec3 diffuse;
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
}`,Nf=`#define LAMBERT
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
}`,Ff=`#define LAMBERT
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
}`,Of=`#define MATCAP
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
}`,Bf=`#define MATCAP
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
}`,zf=`#define NORMAL
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
}`,kf=`#define NORMAL
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
}`,Hf=`#define PHONG
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
}`,Vf=`#define PHONG
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
}`,Gf=`#define STANDARD
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
}`,Wf=`#define STANDARD
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
}`,Xf=`#define TOON
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
}`,qf=`#define TOON
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
}`,Yf=`uniform float size;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Kf=`#include <common>
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
}`,$f=`uniform vec3 color;
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
}`,Jf=`uniform float rotation;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:xu,alphahash_pars_fragment:Mu,alphamap_fragment:Su,alphamap_pars_fragment:yu,alphatest_fragment:Eu,alphatest_pars_fragment:Tu,aomap_fragment:bu,aomap_pars_fragment:Au,batching_pars_vertex:wu,batching_vertex:Ru,begin_vertex:Cu,beginnormal_vertex:Pu,bsdfs:Lu,iridescence_fragment:Du,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Nu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Ou,color_fragment:Bu,color_pars_fragment:zu,color_pars_vertex:ku,color_vertex:Hu,common:Vu,cube_uv_reflection_fragment:Gu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Xu,displacementmap_vertex:qu,emissivemap_fragment:Yu,emissivemap_pars_fragment:Zu,colorspace_fragment:Ku,colorspace_pars_fragment:$u,envmap_fragment:Ju,envmap_common_pars_fragment:ju,envmap_pars_fragment:Qu,envmap_pars_vertex:td,envmap_physical_pars_fragment:ud,envmap_vertex:ed,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:hd,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:_d,lights_fragment_begin:vd,lights_fragment_maps:xd,lights_fragment_end:Md,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Td,map_fragment:bd,map_pars_fragment:Ad,map_particle_fragment:wd,map_particle_pars_fragment:Rd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Pd,morphinstance_vertex:Ld,morphcolor_vertex:Dd,morphnormal_vertex:Ud,morphtarget_pars_vertex:Id,morphtarget_vertex:Nd,normal_fragment_begin:Fd,normal_fragment_maps:Od,normal_pars_fragment:Bd,normal_pars_vertex:zd,normal_vertex:kd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Yd,premultiplied_alpha_fragment:Zd,project_vertex:Kd,dithering_fragment:$d,dithering_pars_fragment:Jd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:tf,shadowmap_pars_vertex:ef,shadowmap_vertex:nf,shadowmask_pars_fragment:sf,skinbase_vertex:rf,skinning_pars_vertex:af,skinning_vertex:of,skinnormal_vertex:lf,specularmap_fragment:cf,specularmap_pars_fragment:hf,tonemapping_fragment:uf,tonemapping_pars_fragment:df,transmission_fragment:ff,transmission_pars_fragment:pf,uv_pars_fragment:mf,uv_pars_vertex:gf,uv_vertex:_f,worldpos_vertex:vf,background_vert:xf,background_frag:Mf,backgroundCube_vert:Sf,backgroundCube_frag:yf,cube_vert:Ef,cube_frag:Tf,depth_vert:bf,depth_frag:Af,distanceRGBA_vert:wf,distanceRGBA_frag:Rf,equirect_vert:Cf,equirect_frag:Pf,linedashed_vert:Lf,linedashed_frag:Df,meshbasic_vert:Uf,meshbasic_frag:If,meshlambert_vert:Nf,meshlambert_frag:Ff,meshmatcap_vert:Of,meshmatcap_frag:Bf,meshnormal_vert:zf,meshnormal_frag:kf,meshphong_vert:Hf,meshphong_frag:Vf,meshphysical_vert:Gf,meshphysical_frag:Wf,meshtoon_vert:Xf,meshtoon_frag:qf,points_vert:Yf,points_frag:Zf,shadow_vert:Kf,shadow_frag:$f,sprite_vert:Jf,sprite_frag:jf},pt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},rn={basic:{uniforms:we([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:we([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:we([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:we([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:we([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:we([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:we([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:we([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:we([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:we([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:we([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:we([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:we([pt.lights,pt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};rn.physical={uniforms:we([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ws={r:0,b:0,g:0},$n=new fn,Qf=new de;function tp(i,t,e,n,s,r,a){const o=new Xt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function v(T){let M=!1;const C=g(T);C===null?d(o,l):C&&C.isColor&&(d(C,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===dr)?(h===void 0&&(h=new Qe(new ms(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Ni(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(M.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler($n)),h.material.toneMapped=$t.getTransfer(C.colorSpace)!==ne,(u!==C||f!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Qe(new gs(2,2),new Vn({name:"BackgroundMaterial",uniforms:Ni(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$t.getTransfer(C.colorSpace)!==ne,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,M){T.getRGB(Ws,fl(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,M,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:v,addToRenderList:m,dispose:A}}function ep(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,R,B,V,q){let X=!1;const W=u(V,B,R);r!==W&&(r=W,c(r.object)),X=p(S,V,B,q),X&&g(S,V,B,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(S,R,B,V),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,R,B){const V=B.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let X=q[R.id];X===void 0&&(X={},q[R.id]=X);let W=X[V];return W===void 0&&(W=f(l()),X[V]=W),W}function f(S){const R=[],B=[],V=[];for(let q=0;q<e;q++)R[q]=0,B[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,R,B,V){const q=r.attributes,X=R.attributes;let W=0;const j=B.getAttributes();for(const H in j)if(j[H].location>=0){const ft=q[H];let _t=X[H];if(_t===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(S,R,B,V){const q={},X=R.attributes;let W=0;const j=B.getAttributes();for(const H in j)if(j[H].location>=0){let ft=X[H];ft===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));const _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),q[H]=_t,W++}r.attributes=q,r.attributesNum=W,r.index=V}function v(){const S=r.newAttributes;for(let R=0,B=S.length;R<B;R++)S[R]=0}function m(S){d(S,0)}function d(S,R){const B=r.newAttributes,V=r.enabledAttributes,q=r.attributeDivisors;B[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),q[S]!==R&&(i.vertexAttribDivisor(S,R),q[S]=R)}function A(){const S=r.newAttributes,R=r.enabledAttributes;for(let B=0,V=R.length;B<V;B++)R[B]!==S[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function T(S,R,B,V,q,X,W){W===!0?i.vertexAttribIPointer(S,R,B,q,X):i.vertexAttribPointer(S,R,B,V,q,X)}function M(S,R,B,V){v();const q=V.attributes,X=B.getAttributes(),W=R.defaultAttributeValues;for(const j in X){const H=X[j];if(H.location>=0){let ot=q[j];if(ot===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const ft=ot.normalized,_t=ot.itemSize,Lt=t.get(ot);if(Lt===void 0)continue;const Ht=Lt.buffer,Zt=Lt.type,Gt=Lt.bytesPerElement,Y=Zt===i.INT||Zt===i.UNSIGNED_INT||ot.gpuType===so;if(ot.isInterleavedBufferAttribute){const Q=ot.data,xt=Q.stride,Ct=ot.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<H.locationSize;Et++)d(H.location+Et,Q.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<H.locationSize;Et++)m(H.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Et=0;Et<H.locationSize;Et++)T(H.location+Et,_t/H.locationSize,Zt,ft,xt*Gt,(Ct+_t/H.locationSize*Et)*Gt,Y)}else{if(ot.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)d(H.location+Q,ot.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Q=0;Q<H.locationSize;Q++)T(H.location+Q,_t/H.locationSize,Zt,ft,_t*Gt,_t/H.locationSize*Q*Gt,Y)}}else if(W!==void 0){const ft=W[j];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(H.location,ft);break;case 3:i.vertexAttrib3fv(H.location,ft);break;case 4:i.vertexAttrib4fv(H.location,ft);break;default:i.vertexAttrib1fv(H.location,ft)}}}}A()}function C(){N();for(const S in n){const R=n[S];for(const B in R){const V=R[B];for(const q in V)h(V[q].object),delete V[q];delete R[B]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const B in R){const V=R[B];for(const q in V)h(V[q].object),delete V[q];delete R[B]}delete n[S.id]}function L(S){for(const R in n){const B=n[R];if(B[S.id]===void 0)continue;const V=B[S.id];for(const q in V)h(V[q].object),delete V[q];delete B[S.id]}}function N(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function np(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ip(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==je&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const N=L===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==dn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Tn&&!N)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:C,maxSamples:w}}function sp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Fn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const A=r?0:n,T=A*4;let M=d.clippingState||null;l.value=M,M=h(g,f,T,p);for(let C=0;C!==T;++C)M[C]=e[C];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,M=p;T!==v;++T,M+=4)a.copy(u[T]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function rp(i){let t=new WeakMap;function e(a,o){return o===ga?a.mapping=Di:o===_a&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ga||o===_a)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ri=4,p0=[.125,.215,.35,.446,.526,.582],ei=20,$r=new Cl,m0=new Xt;let Jr=null,jr=0,Qr=0,ta=!1;const Qn=(1+Math.sqrt(5))/2,Ai=1/Qn,g0=[new P(-Qn,Ai,0),new P(Qn,Ai,0),new P(-Ai,0,Qn),new P(Ai,0,Qn),new P(0,Qn,-Ai),new P(0,Qn,Ai),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ap=new P;class _0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=ap}=r;Jr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jr,jr,Qr),this._renderer.xr.enabled=ta,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:fs,format:je,colorSpace:Ii,depthBuffer:!1},s=v0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(r)),this._blurMaterial=lp(r,t,e)}return s}_compileMaterial(t){const e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,n,s,r){const l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(m0),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new hl({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new Qe(new ms,v);let d=!1;const A=t.background;A?A.isColor&&(v.color.copy(A),t.background=null,d=!0):(v.color.copy(m0),d=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const C=this._cubeSize;Xs(s,M*C,T>2?C:0,C,C),u.setRenderTarget(s),d&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=A}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Di||t.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=g0[(s-r-1)%g0.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ei-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ei;m>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);const d=[];let A=0;for(let L=0;L<ei;++L){const N=L/v,y=Math.exp(-N*N/2);d.push(y),L===0?A+=y:L<m&&(A+=2*y)}for(let L=0;L<d.length;L++)d[L]=d[L]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const M=this._sizeLods[s],C=3*M*(s>T-Ri?s-T+Ri:0),w=4*(this._cubeSize-M);Xs(e,C,w,3*M,2*M),l.setRenderTarget(e),l.render(u,$r)}}function op(i){const t=[],e=[],n=[];let s=i;const r=i-Ri+1+p0.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ri?l=p0[a-i+Ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,A=new Float32Array(v*g*p),T=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let w=0;w<p;w++){const L=w%3*2/3-1,N=w>2?0:-1,y=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];A.set(y,v*g*w),T.set(f,m*g*w);const S=[w,w,w,w,w,w];M.set(S,d*g*w)}const C=new pn;C.setAttribute("position",new ln(A,v)),C.setAttribute("uv",new ln(T,m)),C.setAttribute("faceIndex",new ln(M,d)),t.push(C),s>Ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function v0(i,t,e){const n=new oi(i,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lp(i,t,e){const n=new Float32Array(ei),s=new P(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function x0(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function M0(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function cp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ga||l===_a,h=l===Di||l===Ui;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new _0(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new _0(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function up(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let T=0,M=A.length;T<M;T+=3){const C=A[T+0],w=A[T+1],L=A[T+2];f.push(C,w,w,L,L,C)}}else if(g!==void 0){const A=g.array;v=g.version;for(let T=0,M=A.length/3-1;T<M;T+=3){const C=T+0,w=T+1,L=T+2;f.push(C,w,w,L,L,C)}}else return;const m=new(al(f)?dl:ul)(f,1);m.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function dp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*v[A];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pp(i,t,e){const n=new WeakMap,s=new pe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let M=o.attributes.position.count*T,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*C*4*u),L=new ol(w,M,C,u);L.type=Tn,L.needsUpdate=!0;const N=T*4;for(let S=0;S<u;S++){const R=m[S],B=d[S],V=A[S],q=M*C*4*S;for(let X=0;X<R.count;X++){const W=X*N;p===!0&&(s.fromBufferAttribute(R,X),w[q+W+0]=s.x,w[q+W+1]=s.y,w[q+W+2]=s.z,w[q+W+3]=0),g===!0&&(s.fromBufferAttribute(B,X),w[q+W+4]=s.x,w[q+W+5]=s.y,w[q+W+6]=s.z,w[q+W+7]=0),v===!0&&(s.fromBufferAttribute(V,X),w[q+W+8]=s.x,w[q+W+9]=s.y,w[q+W+10]=s.z,w[q+W+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new ct(M,C)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function mp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Ll=new Ce,S0=new _l(1,1),Dl=new ol,Ul=new sh,Il=new ml,y0=[],E0=[],T0=new Float32Array(16),b0=new Float32Array(9),A0=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=y0[s];if(r===void 0&&(r=new Float32Array(s),y0[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pr(i,t){let e=E0[t];e===void 0&&(e=new Int32Array(t),E0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;A0.set(n),i.uniformMatrix2fv(this.addr,!1,A0),xe(e,n)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;b0.set(n),i.uniformMatrix3fv(this.addr,!1,b0),xe(e,n)}}function yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;T0.set(n),i.uniformMatrix4fv(this.addr,!1,T0),xe(e,n)}}function Ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(S0.compareFunction=rl,r=S0):r=Ll,e.setTexture2D(t||r,s)}function Dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ul,s)}function Up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Il,s)}function Ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dl,s)}function Np(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return xp;case 35674:return Mp;case 35675:return Sp;case 35676:return yp;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return bp;case 35669:case 35673:return Ap;case 5125:return wp;case 36294:return Rp;case 36295:return Cp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Ip}}function Fp(i,t){i.uniform1fv(this.addr,t)}function Op(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Bp(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function zp(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function kp(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hp(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vp(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gp(i,t){i.uniform1iv(this.addr,t)}function Wp(i,t){i.uniform2iv(this.addr,t)}function Xp(i,t){i.uniform3iv(this.addr,t)}function qp(i,t){i.uniform4iv(this.addr,t)}function Yp(i,t){i.uniform1uiv(this.addr,t)}function Zp(i,t){i.uniform2uiv(this.addr,t)}function Kp(i,t){i.uniform3uiv(this.addr,t)}function $p(i,t){i.uniform4uiv(this.addr,t)}function Jp(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ll,r[a])}function jp(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ul,r[a])}function Qp(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Il,r[a])}function t1(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dl,r[a])}function e1(i){switch(i){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return zp;case 35674:return kp;case 35675:return Hp;case 35676:return Vp;case 5124:case 35670:return Gp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return Zp;case 36295:return Kp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return t1}}class n1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Np(e.type)}}class i1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e1(e.type)}}class s1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function w0(i,t){i.seq.push(t),i.map[t.id]=t}function r1(i,t,e){const n=i.name,s=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),a=ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){w0(e,c===void 0?new n1(o,i,t):new i1(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new s1(o),w0(e,u)),e=u}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);r1(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function R0(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const a1=37297;let o1=0;function l1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const C0=new kt;function c1(i){$t._getMatrix(C0,$t.workingColorSpace,i);const t=`mat3( ${C0.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function P0(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+l1(i.getShaderSource(t),o)}else return r}function h1(i,t){const e=c1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function u1(i,t){let e;switch(t){case Lc:e="Linear";break;case Dc:e="Reinhard";break;case Uc:e="Cineon";break;case Ic:e="ACESFilmic";break;case Fc:e="AgX";break;case Oc:e="Neutral";break;case Nc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qs=new P;function d1(){$t.getLuminanceCoefficients(qs);const i=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function p1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ji(i){return i!==""}function L0(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function D0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(g1,v1)}const _1=new Map;function v1(i,t){let e=Vt[t];if(e===void 0){const n=_1.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(i){return i.replace(x1,M1)}function M1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function I0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function S1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Y0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Z0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function y1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Ui:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function T1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case io:t="ENVMAP_BLENDING_MULTIPLY";break;case Cc:t="ENVMAP_BLENDING_MIX";break;case Pc:t="ENVMAP_BLENDING_ADD";break}return t}function b1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function A1(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=S1(e),c=y1(e),h=E1(e),u=T1(e),f=b1(e),p=f1(e),g=p1(r),v=s.createProgram();let m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),d.length>0&&(d+=`
`)):(m=[I0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),d=[I0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==kn?u1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,h1("linearToOutputTexel",e.outputColorSpace),d1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),a=Ja(a),a=L0(a,e),a=D0(a,e),o=Ja(o),o=L0(o,e),o=D0(o,e),a=U0(a),o=U0(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+m+a,M=A+d+o,C=R0(s,s.VERTEX_SHADER,T),w=R0(s,s.FRAGMENT_SHADER,M);s.attachShader(v,C),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(R){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(C)||"",q=s.getShaderInfoLog(w)||"",X=B.trim(),W=V.trim(),j=q.trim();let H=!0,ot=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,w);else{const ft=P0(s,C,"vertex"),_t=P0(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+ft+`
`+_t)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||j==="")&&(ot=!1);ot&&(R.diagnostics={runnable:H,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:j,prefix:d}})}s.deleteShader(C),s.deleteShader(w),N=new Qs(s,v),y=m1(s,v)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,a1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let w1=0;class R1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new C1(t),e.set(t,n)),n}}class C1{constructor(t){this.id=w1++,this.code=t,this.usedTimes=0}}function P1(i,t,e,n,s,r,a){const o=new ll,l=new R1,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,B,V){const q=B.fog,X=V.geometry,W=y.isMeshStandardMaterial?B.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),H=j&&j.mapping===dr?j.image.height:null,ot=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=ft!==void 0?ft.length:0;let Lt=0;X.morphAttributes.position!==void 0&&(Lt=1),X.morphAttributes.normal!==void 0&&(Lt=2),X.morphAttributes.color!==void 0&&(Lt=3);let Ht,Zt,Gt,Y;if(ot){const jt=rn[ot];Ht=jt.vertexShader,Zt=jt.fragmentShader}else Ht=y.vertexShader,Zt=y.fragmentShader,l.update(y),Gt=l.getVertexShaderID(y),Y=l.getFragmentShaderID(y);const Q=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ct=V.isInstancedMesh===!0,Et=V.isBatchedMesh===!0,qt=!!y.map,re=!!y.matcap,b=!!j,et=!!y.aoMap,$=!!y.lightMap,K=!!y.bumpMap,Z=!!y.normalMap,ht=!!y.displacementMap,nt=!!y.emissiveMap,ut=!!y.metalnessMap,Ot=!!y.roughnessMap,Ft=y.anisotropy>0,E=y.clearcoat>0,_=y.dispersion>0,F=y.iridescence>0,k=y.sheen>0,tt=y.transmission>0,G=Ft&&!!y.anisotropyMap,wt=E&&!!y.clearcoatMap,lt=E&&!!y.clearcoatNormalMap,Tt=E&&!!y.clearcoatRoughnessMap,bt=F&&!!y.iridescenceMap,it=F&&!!y.iridescenceThicknessMap,vt=k&&!!y.sheenColorMap,It=k&&!!y.sheenRoughnessMap,Rt=!!y.specularMap,mt=!!y.specularColorMap,zt=!!y.specularIntensityMap,D=tt&&!!y.transmissionMap,at=tt&&!!y.thicknessMap,dt=!!y.gradientMap,St=!!y.alphaMap,st=y.alphaTest>0,J=!!y.alphaHash,At=!!y.extensions;let Bt=kn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const ae={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:Ht,fragmentShader:Zt,defines:y.defines,customVertexShaderID:Gt,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Et,batchingColor:Et&&V._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&V.instanceColor!==null,instancingMorph:Ct&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ii,alphaToCoverage:!!y.alphaToCoverage,map:qt,matcap:re,envMap:b,envMapMode:b&&j.mapping,envMapCubeUVHeight:H,aoMap:et,lightMap:$,bumpMap:K,normalMap:Z,displacementMap:f&&ht,emissiveMap:nt,normalMapObjectSpace:Z&&y.normalMapType===Hc,normalMapTangentSpace:Z&&y.normalMapType===sl,metalnessMap:ut,roughnessMap:Ot,anisotropy:Ft,anisotropyMap:G,clearcoat:E,clearcoatMap:wt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:_,iridescence:F,iridescenceMap:bt,iridescenceThicknessMap:it,sheen:k,sheenColorMap:vt,sheenRoughnessMap:It,specularMap:Rt,specularColorMap:mt,specularIntensityMap:zt,transmission:tt,transmissionMap:D,thicknessMap:at,gradientMap:dt,opaque:y.transparent===!1&&y.blending===Ci&&y.alphaToCoverage===!1,alphaMap:St,alphaTest:st,alphaHash:J,combine:y.combine,mapUv:qt&&v(y.map.channel),aoMapUv:et&&v(y.aoMap.channel),lightMapUv:$&&v(y.lightMap.channel),bumpMapUv:K&&v(y.bumpMap.channel),normalMapUv:Z&&v(y.normalMap.channel),displacementMapUv:ht&&v(y.displacementMap.channel),emissiveMapUv:nt&&v(y.emissiveMap.channel),metalnessMapUv:ut&&v(y.metalnessMap.channel),roughnessMapUv:Ot&&v(y.roughnessMap.channel),anisotropyMapUv:G&&v(y.anisotropyMap.channel),clearcoatMapUv:wt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&v(y.sheenRoughnessMap.channel),specularMapUv:Rt&&v(y.specularMap.channel),specularColorMapUv:mt&&v(y.specularColorMap.channel),specularIntensityMapUv:zt&&v(y.specularIntensityMap.channel),transmissionMapUv:D&&v(y.transmissionMap.channel),thicknessMapUv:at&&v(y.thicknessMap.channel),alphaMapUv:St&&v(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Z||Ft),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(qt||St),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:qt&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&$t.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===En,flipSided:y.side===Fe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(S,y),T(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function A(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function T(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const S=g[y.type];let R;if(S){const B=rn[S];R=_h.clone(B.uniforms)}else R=y.uniforms;return R}function C(y,S){let R;for(let B=0,V=h.length;B<V;B++){const q=h[B];if(q.cacheKey===S){R=q,++R.usedTimes;break}}return R===void 0&&(R=new A1(i,S,y,r),h.push(R)),R}function w(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function L(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:N}}function L1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function D1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function N0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function F0(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function o(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||D1),n.length>1&&n.sort(f||N0),s.length>1&&s.sort(f||N0)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function U1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new F0,i.set(n,[a])):s>=r.length?(a=new F0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function I1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Xt};break;case"SpotLight":e={position:new P,direction:new P,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function N1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let F1=0;function O1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B1(i){const t=new I1,e=N1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new de,a=new de;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,A=0,T=0,M=0,C=0,w=0,L=0;c.sort(O1);for(let y=0,S=c.length;y<S;y++){const R=c[y],B=R.color,V=R.intensity,q=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*V,u+=B.g*V,f+=B.b*V;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],V);L++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,A++}n.directional[p]=W,p++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(B).multiplyScalar(V),W.distance=q,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[v]=W;const j=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,j.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=j.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=X,M++}v++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(B).multiplyScalar(V),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(V),W.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==M||N.numSpotMaps!==C||N.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=M,N.numSpotMaps=C,N.numLightProbes=L,n.version=F1++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const T=c[d];if(T.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(T.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function O0(i){const t=new B1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function z1(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new O0(i),t.set(s,[o])):r>=a.length?(o=new O0(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const k1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
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
}`;function V1(i,t,e){let n=new po;const s=new ct,r=new ct,a=new pe,o=new cu({depthPacking:kc}),l=new hu,c={},h=e.maxTextureSize,u={[Hn]:Fe,[Fe]:Hn,[En]:En},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:k1,fragmentShader:H1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let d=this.type;this.render=function(w,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(zn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=d!==yn&&this.type===yn,q=d===yn&&this.type!==yn;for(let X=0,W=w.length;X<W;X++){const j=w[X],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||V===!0||q===!0){const _t=this.type!==yn?{minFilter:en,magFilter:en}:{};H.map!==null&&H.map.dispose(),H.map=new oi(s.x,s.y,_t),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ft=H.getViewportCount();for(let _t=0;_t<ft;_t++){const Lt=H.getViewport(_t);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),B.viewport(a),H.updateMatrices(j,_t),n=H.getFrustum(),M(L,N,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===yn&&A(H,N),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,R)};function A(w,L){const N=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,N,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,N,p,v,null)}function T(w,L,N,y){let S=null;const R=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=N.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=S.uuid,V=L.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let X=q[V];X===void 0&&(X=S.clone(),q[V]=X,L.addEventListener("dispose",C)),S=X}if(S.visible=L.visible,S.wireframe=L.wireframe,y===yn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:u[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=i.properties.get(S);B.light=N}return S}function M(w,L,N,y,S){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===yn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const V=t.update(w),q=w.material;if(Array.isArray(q)){const X=V.groups;for(let W=0,j=X.length;W<j;W++){const H=X[W],ot=q[H.materialIndex];if(ot&&ot.visible){const ft=T(w,ot,y,S);w.onBeforeShadow(i,w,L,N,V,ft,H),i.renderBufferDirect(N,null,V,ft,w,H),w.onAfterShadow(i,w,L,N,V,ft,H)}}}else if(q.visible){const X=T(w,q,y,S);w.onBeforeShadow(i,w,L,N,V,X,null),i.renderBufferDirect(N,null,V,X,w,null),w.onAfterShadow(i,w,L,N,V,X,null)}}const B=w.children;for(let V=0,q=B.length;V<q;V++)M(B[V],L,N,y,S)}function C(w){w.target.removeEventListener("dispose",C);for(const N in c){const y=c[N],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const G1={[ca]:ha,[ua]:pa,[da]:ma,[Li]:fa,[ha]:ca,[pa]:ua,[ma]:da,[fa]:Li};function W1(i,t){function e(){let D=!1;const at=new pe;let dt=null;const St=new pe(0,0,0,0);return{setMask:function(st){dt!==st&&!D&&(i.colorMask(st,st,st,st),dt=st)},setLocked:function(st){D=st},setClear:function(st,J,At,Bt,ae){ae===!0&&(st*=Bt,J*=Bt,At*=Bt),at.set(st,J,At,Bt),St.equals(at)===!1&&(i.clearColor(st,J,At,Bt),St.copy(at))},reset:function(){D=!1,dt=null,St.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,dt=null,St=null,st=null;return{setReversed:function(J){if(at!==J){const At=t.get("EXT_clip_control");J?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),at=J;const Bt=st;st=null,this.setClear(Bt)}},getReversed:function(){return at},setTest:function(J){J?Q(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(J){dt!==J&&!D&&(i.depthMask(J),dt=J)},setFunc:function(J){if(at&&(J=G1[J]),St!==J){switch(J){case ca:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case da:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=J}},setLocked:function(J){D=J},setClear:function(J){st!==J&&(at&&(J=1-J),i.clearDepth(J),st=J)},reset:function(){D=!1,dt=null,St=null,st=null,at=!1}}}function s(){let D=!1,at=null,dt=null,St=null,st=null,J=null,At=null,Bt=null,ae=null;return{setTest:function(jt){D||(jt?Q(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(jt){at!==jt&&!D&&(i.stencilMask(jt),at=jt)},setFunc:function(jt,gn,sn){(dt!==jt||St!==gn||st!==sn)&&(i.stencilFunc(jt,gn,sn),dt=jt,St=gn,st=sn)},setOp:function(jt,gn,sn){(J!==jt||At!==gn||Bt!==sn)&&(i.stencilOp(jt,gn,sn),J=jt,At=gn,Bt=sn)},setLocked:function(jt){D=jt},setClear:function(jt){ae!==jt&&(i.clearStencil(jt),ae=jt)},reset:function(){D=!1,at=null,dt=null,St=null,st=null,J=null,At=null,Bt=null,ae=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,T=null,M=null,C=null,w=null,L=new Xt(0,0,0),N=0,y=!1,S=null,R=null,B=null,V=null,q=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=j>=2);let ot=null,ft={};const _t=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Ht=new pe().fromArray(_t),Zt=new pe().fromArray(Lt);function Gt(D,at,dt,St){const st=new Uint8Array(4),J=i.createTexture();i.bindTexture(D,J),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<dt;At++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(at+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return J}const Y={};Y[i.TEXTURE_2D]=Gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Li),K(!1),Z(Lo),Q(i.CULL_FACE),et(zn);function Q(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function xt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ct(D,at){return u[D]!==at?(i.bindFramebuffer(D,at),u[D]=at,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Et(D,at){let dt=p,St=!1;if(D){dt=f.get(at),dt===void 0&&(dt=[],f.set(at,dt));const st=D.textures;if(dt.length!==st.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let J=0,At=st.length;J<At;J++)dt[J]=i.COLOR_ATTACHMENT0+J;dt.length=st.length,St=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,St=!0);St&&i.drawBuffers(dt)}function qt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const re={[ti]:i.FUNC_ADD,[dc]:i.FUNC_SUBTRACT,[fc]:i.FUNC_REVERSE_SUBTRACT};re[pc]=i.MIN,re[mc]=i.MAX;const b={[gc]:i.ZERO,[_c]:i.ONE,[vc]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[Tc]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[Mc]:i.DST_ALPHA,[xc]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[Ec]:i.ONE_MINUS_DST_COLOR,[Sc]:i.ONE_MINUS_DST_ALPHA,[bc]:i.CONSTANT_COLOR,[Ac]:i.ONE_MINUS_CONSTANT_COLOR,[wc]:i.CONSTANT_ALPHA,[Rc]:i.ONE_MINUS_CONSTANT_ALPHA};function et(D,at,dt,St,st,J,At,Bt,ae,jt){if(D===zn){v===!0&&(xt(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),D!==uc){if(D!==m||jt!==y){if((d!==ti||M!==ti)&&(i.blendEquation(i.FUNC_ADD),d=ti,M=ti),jt)switch(D){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Io:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,T=null,C=null,w=null,L.set(0,0,0),N=0,m=D,y=jt}return}st=st||at,J=J||dt,At=At||St,(at!==d||st!==M)&&(i.blendEquationSeparate(re[at],re[st]),d=at,M=st),(dt!==A||St!==T||J!==C||At!==w)&&(i.blendFuncSeparate(b[dt],b[St],b[J],b[At]),A=dt,T=St,C=J,w=At),(Bt.equals(L)===!1||ae!==N)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ae),L.copy(Bt),N=ae),m=D,y=!1}function $(D,at){D.side===En?xt(i.CULL_FACE):Q(i.CULL_FACE);let dt=D.side===Fe;at&&(dt=!dt),K(dt),D.blending===Ci&&D.transparent===!1?et(zn):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const St=D.stencilWrite;o.setTest(St),St&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function Z(D){D!==cc?(Q(i.CULL_FACE),D!==R&&(D===Lo?i.cullFace(i.BACK):D===hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),R=D}function ht(D){D!==B&&(W&&i.lineWidth(D),B=D)}function nt(D,at,dt){D?(Q(i.POLYGON_OFFSET_FILL),(V!==at||q!==dt)&&(i.polygonOffset(at,dt),V=at,q=dt)):xt(i.POLYGON_OFFSET_FILL)}function ut(D){D?Q(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ot(D){D===void 0&&(D=i.TEXTURE0+X-1),ot!==D&&(i.activeTexture(D),ot=D)}function Ft(D,at,dt){dt===void 0&&(ot===null?dt=i.TEXTURE0+X-1:dt=ot);let St=ft[dt];St===void 0&&(St={type:void 0,texture:void 0},ft[dt]=St),(St.type!==D||St.texture!==at)&&(ot!==dt&&(i.activeTexture(dt),ot=dt),i.bindTexture(D,at||Y[D]),St.type=D,St.texture=at)}function E(){const D=ft[ot];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(D){Ht.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ht.copy(D))}function It(D){Zt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Zt.copy(D))}function Rt(D,at){let dt=c.get(at);dt===void 0&&(dt=new WeakMap,c.set(at,dt));let St=dt.get(D);St===void 0&&(St=i.getUniformBlockIndex(at,D.name),dt.set(D,St))}function mt(D,at){const St=c.get(at).get(D);l.get(at)!==St&&(i.uniformBlockBinding(at,St,D.__bindingPointIndex),l.set(at,St))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,ft={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,T=null,M=null,C=null,w=null,L=new Xt(0,0,0),N=0,y=!1,S=null,R=null,B=null,V=null,q=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xt,bindFramebuffer:Ct,drawBuffers:Et,useProgram:qt,setBlending:et,setMaterial:$,setFlipSided:K,setCullFace:Z,setLineWidth:ht,setPolygonOffset:nt,setScissorTest:ut,activeTexture:Ot,bindTexture:Ft,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:bt,texImage3D:it,updateUBOMapping:Rt,uniformBlockBinding:mt,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:k,texSubImage3D:tt,compressedTexSubImage2D:G,compressedTexSubImage3D:wt,scissor:vt,viewport:It,reset:zt}}function X1(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):or("canvas")}function v(E,_,F){let k=1;const tt=Ft(E);if((tt.width>F||tt.height>F)&&(k=F/Math.max(tt.width,tt.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const G=Math.floor(k*tt.width),wt=Math.floor(k*tt.height);u===void 0&&(u=g(G,wt));const lt=_?g(G,wt):u;return lt.width=G,lt.height=wt,lt.getContext("2d").drawImage(E,0,0,G,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+G+"x"+wt+")."),lt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,F,k,tt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=_;if(_===i.RED&&(F===i.FLOAT&&(G=i.R32F),F===i.HALF_FLOAT&&(G=i.R16F),F===i.UNSIGNED_BYTE&&(G=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.R8UI),F===i.UNSIGNED_SHORT&&(G=i.R16UI),F===i.UNSIGNED_INT&&(G=i.R32UI),F===i.BYTE&&(G=i.R8I),F===i.SHORT&&(G=i.R16I),F===i.INT&&(G=i.R32I)),_===i.RG&&(F===i.FLOAT&&(G=i.RG32F),F===i.HALF_FLOAT&&(G=i.RG16F),F===i.UNSIGNED_BYTE&&(G=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RG8UI),F===i.UNSIGNED_SHORT&&(G=i.RG16UI),F===i.UNSIGNED_INT&&(G=i.RG32UI),F===i.BYTE&&(G=i.RG8I),F===i.SHORT&&(G=i.RG16I),F===i.INT&&(G=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGB8UI),F===i.UNSIGNED_SHORT&&(G=i.RGB16UI),F===i.UNSIGNED_INT&&(G=i.RGB32UI),F===i.BYTE&&(G=i.RGB8I),F===i.SHORT&&(G=i.RGB16I),F===i.INT&&(G=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),F===i.UNSIGNED_INT&&(G=i.RGBA32UI),F===i.BYTE&&(G=i.RGBA8I),F===i.SHORT&&(G=i.RGBA16I),F===i.INT&&(G=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),_===i.RGBA){const wt=tt?rr:$t.getTransfer(k);F===i.FLOAT&&(G=i.RGBA32F),F===i.HALF_FLOAT&&(G=i.RGBA16F),F===i.UNSIGNED_BYTE&&(G=wt===ne?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function M(E,_){let F;return E?_===null||_===ri||_===as?F=i.DEPTH24_STENCIL8:_===Tn?F=i.DEPTH32F_STENCIL8:_===rs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ri||_===as?F=i.DEPTH_COMPONENT24:_===Tn?F=i.DEPTH_COMPONENT32F:_===rs&&(F=i.DEPTH_COMPONENT16),F}function C(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),N(_),_.isVideoTexture&&h.delete(_)}function L(E){const _=E.target;_.removeEventListener("dispose",L),S(_)}function N(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,k=f.get(F);if(k){const tt=k[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(E),Object.keys(k).length===0&&f.delete(F)}n.remove(E)}function y(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const F=E.source,k=f.get(F);delete k[_.__cacheKey],a.memory.textures--}function S(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let tt=0;tt<_.__webglFramebuffer[k].length;tt++)i.deleteFramebuffer(_.__webglFramebuffer[k][tt]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let k=0,tt=F.length;k<tt;k++){const G=n.get(F[k]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(E)}let R=0;function B(){R=0}function V(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function q(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){const F=n.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,E,_);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function W(E,_){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Y(F,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function j(E,_){const F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Y(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function H(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Q(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ot={[sr]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},ft={[en]:i.NEAREST,[Bc]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},_t={[Vc]:i.NEVER,[Zc]:i.ALWAYS,[Gc]:i.LESS,[rl]:i.LEQUAL,[Wc]:i.EQUAL,[Yc]:i.GEQUAL,[Xc]:i.GREATER,[qc]:i.NOTEQUAL};function Lt(E,_){if(_.type===Tn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===Mr||_.magFilter===Ss||_.magFilter===ii||_.minFilter===an||_.minFilter===Mr||_.minFilter===Ss||_.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ot[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ot[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ot[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ft[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ft[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,_t[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===en||_.minFilter!==Ss&&_.minFilter!==ii||_.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ht(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const k=_.source;let tt=f.get(k);tt===void 0&&(tt={},f.set(k,tt));const G=q(_);if(G!==E.__cacheKey){tt[G]===void 0&&(tt[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),tt[G].usedTimes++;const wt=tt[E.__cacheKey];wt!==void 0&&(tt[E.__cacheKey].usedTimes--,wt.usedTimes===0&&y(_)),E.__cacheKey=G,E.__webglTexture=tt[G].texture}return F}function Zt(E,_,F){return Math.floor(Math.floor(E/F)/_)}function Gt(E,_,F,k){const G=E.updateRanges;if(G.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,k,_.data);else{G.sort((it,vt)=>it.start-vt.start);let wt=0;for(let it=1;it<G.length;it++){const vt=G[wt],It=G[it],Rt=vt.start+vt.count,mt=Zt(It.start,_.width,4),zt=Zt(vt.start,_.width,4);It.start<=Rt+1&&mt===zt&&Zt(It.start+It.count-1,_.width,4)===mt?vt.count=Math.max(vt.count,It.start+It.count-vt.start):(++wt,G[wt]=It)}G.length=wt+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let it=0,vt=G.length;it<vt;it++){const It=G[it],Rt=Math.floor(It.start/4),mt=Math.ceil(It.count/4),zt=Rt%_.width,D=Math.floor(Rt/_.width),at=mt,dt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,zt,D,at,dt,F,k,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function Y(E,_,F){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const tt=Ht(E,_),G=_.source;e.bindTexture(k,E.__webglTexture,i.TEXTURE0+F);const wt=n.get(G);if(G.version!==wt.__version||tt===!0){e.activeTexture(i.TEXTURE0+F);const lt=$t.getPrimaries($t.workingColorSpace),Tt=_.colorSpace===On?null:$t.getPrimaries(_.colorSpace),bt=_.colorSpace===On||lt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let it=v(_.image,!1,s.maxTextureSize);it=Ot(_,it);const vt=r.convert(_.format,_.colorSpace),It=r.convert(_.type);let Rt=T(_.internalFormat,vt,It,_.colorSpace,_.isVideoTexture);Lt(k,_);let mt;const zt=_.mipmaps,D=_.isVideoTexture!==!0,at=wt.__version===void 0||tt===!0,dt=G.dataReady,St=C(_,it);if(_.isDepthTexture)Rt=M(_.format===ls,_.type),at&&(D?e.texStorage2D(i.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,vt,It,null));else if(_.isDataTexture)if(zt.length>0){D&&at&&e.texStorage2D(i.TEXTURE_2D,St,Rt,zt[0].width,zt[0].height);for(let st=0,J=zt.length;st<J;st++)mt=zt[st],D?dt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,vt,It,mt.data):e.texImage2D(i.TEXTURE_2D,st,Rt,mt.width,mt.height,0,vt,It,mt.data);_.generateMipmaps=!1}else D?(at&&e.texStorage2D(i.TEXTURE_2D,St,Rt,it.width,it.height),dt&&Gt(_,it,vt,It)):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,vt,It,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,zt[0].width,zt[0].height,it.depth);for(let st=0,J=zt.length;st<J;st++)if(mt=zt[st],_.format!==je)if(vt!==null)if(D){if(dt)if(_.layerUpdates.size>0){const At=f0(mt.width,mt.height,_.format,_.type);for(const Bt of _.layerUpdates){const ae=mt.data.subarray(Bt*At/mt.data.BYTES_PER_ELEMENT,(Bt+1)*At/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Bt,mt.width,mt.height,1,vt,ae)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,it.depth,vt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Rt,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,it.depth,vt,It,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Rt,mt.width,mt.height,it.depth,0,vt,It,mt.data)}else{D&&at&&e.texStorage2D(i.TEXTURE_2D,St,Rt,zt[0].width,zt[0].height);for(let st=0,J=zt.length;st<J;st++)mt=zt[st],_.format!==je?vt!==null?D?dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,vt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?dt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,vt,It,mt.data):e.texImage2D(i.TEXTURE_2D,st,Rt,mt.width,mt.height,0,vt,It,mt.data)}else if(_.isDataArrayTexture)if(D){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,it.width,it.height,it.depth),dt)if(_.layerUpdates.size>0){const st=f0(it.width,it.height,_.format,_.type);for(const J of _.layerUpdates){const At=it.data.subarray(J*st/it.data.BYTES_PER_ELEMENT,(J+1)*st/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,vt,It,At)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,It,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,vt,It,it.data);else if(_.isData3DTexture)D?(at&&e.texStorage3D(i.TEXTURE_3D,St,Rt,it.width,it.height,it.depth),dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,It,it.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,vt,It,it.data);else if(_.isFramebufferTexture){if(at)if(D)e.texStorage2D(i.TEXTURE_2D,St,Rt,it.width,it.height);else{let st=it.width,J=it.height;for(let At=0;At<St;At++)e.texImage2D(i.TEXTURE_2D,At,Rt,st,J,0,vt,It,null),st>>=1,J>>=1}}else if(zt.length>0){if(D&&at){const st=Ft(zt[0]);e.texStorage2D(i.TEXTURE_2D,St,Rt,st.width,st.height)}for(let st=0,J=zt.length;st<J;st++)mt=zt[st],D?dt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,vt,It,mt):e.texImage2D(i.TEXTURE_2D,st,Rt,vt,It,mt);_.generateMipmaps=!1}else if(D){if(at){const st=Ft(it);e.texStorage2D(i.TEXTURE_2D,St,Rt,st.width,st.height)}dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,It,it)}else e.texImage2D(i.TEXTURE_2D,0,Rt,vt,It,it);m(_)&&d(k),wt.__version=G.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Q(E,_,F){if(_.image.length!==6)return;const k=Ht(E,_),tt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const G=n.get(tt);if(tt.version!==G.__version||k===!0){e.activeTexture(i.TEXTURE0+F);const wt=$t.getPrimaries($t.workingColorSpace),lt=_.colorSpace===On?null:$t.getPrimaries(_.colorSpace),Tt=_.colorSpace===On||wt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const bt=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!bt&&!it?vt[J]=v(_.image[J],!0,s.maxCubemapSize):vt[J]=it?_.image[J].image:_.image[J],vt[J]=Ot(_,vt[J]);const It=vt[0],Rt=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),zt=T(_.internalFormat,Rt,mt,_.colorSpace),D=_.isVideoTexture!==!0,at=G.__version===void 0||k===!0,dt=tt.dataReady;let St=C(_,It);Lt(i.TEXTURE_CUBE_MAP,_);let st;if(bt){D&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,zt,It.width,It.height);for(let J=0;J<6;J++){st=vt[J].mipmaps;for(let At=0;At<st.length;At++){const Bt=st[At];_.format!==je?Rt!==null?D?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At,0,0,Bt.width,Bt.height,Rt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At,zt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At,0,0,Bt.width,Bt.height,Rt,mt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At,zt,Bt.width,Bt.height,0,Rt,mt,Bt.data)}}}else{if(st=_.mipmaps,D&&at){st.length>0&&St++;const J=Ft(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,zt,J.width,J.height)}for(let J=0;J<6;J++)if(it){D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Rt,mt,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,vt[J].width,vt[J].height,0,Rt,mt,vt[J].data);for(let At=0;At<st.length;At++){const ae=st[At].image[J].image;D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At+1,0,0,ae.width,ae.height,Rt,mt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At+1,zt,ae.width,ae.height,0,Rt,mt,ae.data)}}else{D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Rt,mt,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,Rt,mt,vt[J]);for(let At=0;At<st.length;At++){const Bt=st[At];D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At+1,0,0,Rt,mt,Bt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,At+1,zt,Rt,mt,Bt.image[J])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),G.__version=tt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xt(E,_,F,k,tt,G){const wt=r.convert(F.format,F.colorSpace),lt=r.convert(F.type),Tt=T(F.internalFormat,wt,lt,F.colorSpace),bt=n.get(_),it=n.get(F);if(it.__renderTarget=_,!bt.__hasExternalTextures){const vt=Math.max(1,_.width>>G),It=Math.max(1,_.height>>G);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,G,Tt,vt,It,_.depth,0,wt,lt,null):e.texImage2D(tt,G,Tt,vt,It,0,wt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,tt,it.__webglTexture,0,ht(_)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,tt,it.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const k=_.depthTexture,tt=k&&k.isDepthTexture?k.type:null,G=M(_.stencilBuffer,tt),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=ht(_);nt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,G,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,G,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,G,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,E)}else{const k=_.textures;for(let tt=0;tt<k.length;tt++){const G=k[tt],wt=r.convert(G.format,G.colorSpace),lt=r.convert(G.type),Tt=T(G.internalFormat,wt,lt,G.colorSpace),bt=ht(_);F&&nt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Tt,_.width,_.height):nt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,Tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(_.depthTexture);k.__renderTarget=_,(!k.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const tt=k.__webglTexture,G=ht(_);if(_.depthTexture.format===os)nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(_.depthTexture.format===ls)nt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function qt(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",tt)};k.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=k}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const k=E.texture.mipmaps;k&&k.length>0?Et(_.__webglFramebuffer[0],E):Et(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),Ct(_.__webglDepthbuffer[k],E,!1);else{const tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,G)}}else{const k=E.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ct(_.__webglDepthbuffer,E,!1);else{const tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,G)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(E,_,F){const k=n.get(E);_!==void 0&&xt(k.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&qt(E)}function b(E){const _=E.texture,F=n.get(E),k=n.get(_);E.addEventListener("dispose",L);const tt=E.textures,G=E.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let Tt=0;Tt<_.mipmaps.length;Tt++)F.__webglFramebuffer[lt][Tt]=i.createFramebuffer()}else F.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)F.__webglFramebuffer[lt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(wt)for(let lt=0,Tt=tt.length;lt<Tt;lt++){const bt=n.get(tt[lt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&nt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const Tt=tt[lt];F.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const bt=r.convert(Tt.format,Tt.colorSpace),it=r.convert(Tt.type),vt=T(Tt.internalFormat,bt,it,Tt.colorSpace,E.isXRRenderTarget===!0),It=ht(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,vt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,_);for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)xt(F.__webglFramebuffer[lt][Tt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt);else xt(F.__webglFramebuffer[lt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let lt=0,Tt=tt.length;lt<Tt;lt++){const bt=tt[lt],it=n.get(bt);let vt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(vt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,it.__webglTexture),Lt(vt,bt),xt(F.__webglFramebuffer,E,bt,i.COLOR_ATTACHMENT0+lt,vt,0),m(bt)&&d(vt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(lt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,k.__webglTexture),Lt(lt,_),_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)xt(F.__webglFramebuffer[Tt],E,_,i.COLOR_ATTACHMENT0,lt,Tt);else xt(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,lt,0);m(_)&&d(lt),e.unbindTexture()}E.depthBuffer&&qt(E)}function et(E){const _=E.textures;for(let F=0,k=_.length;F<k;F++){const tt=_[F];if(m(tt)){const G=A(E),wt=n.get(tt).__webglTexture;e.bindTexture(G,wt),d(G),e.unbindTexture()}}}const $=[],K=[];function Z(E){if(E.samples>0){if(nt(E)===!1){const _=E.textures,F=E.width,k=E.height;let tt=i.COLOR_BUFFER_BIT;const G=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(E),lt=_.length>1;if(lt)for(let bt=0;bt<_.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Tt=E.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let bt=0;bt<_.length;bt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const it=n.get(_[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,tt,i.NEAREST),l===!0&&($.length=0,K.length=0,$.push(i.COLOR_ATTACHMENT0+bt),E.depthBuffer&&E.resolveDepthBuffer===!1&&($.push(G),K.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let bt=0;bt<_.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const it=n.get(_[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ht(E){return Math.min(s.maxSamples,E.samples)}function nt(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ut(E){const _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ot(E,_){const F=E.colorSpace,k=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Ii&&F!==On&&($t.getTransfer(F)===ne?(k!==je||tt!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Ft(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=re,this.setupRenderTarget=b,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=nt}function q1(i,t){function e(n,s=On){let r;const a=$t.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===j0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Q0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$0)return i.BYTE;if(n===J0)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===fs)return i.HALF_FLOAT;if(n===tl)return i.ALPHA;if(n===el)return i.RGB;if(n===je)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===il)return i.RG;if(n===lo)return i.RG_INTEGER;if(n===co)return i.RGBA_INTEGER;if(n===Zs||n===Ks||n===$s||n===Js)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===Ma||n===Sa||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ua||n===Ia||n===Na||n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===Ha||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ga||n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
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

}`;class K1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new vl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:Y1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $1 extends ci{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new K1,d={},A=e.getContextAttributes();let T=null,M=null;const C=[],w=[],L=new ct;let N=null;const y=new qe;y.viewport=new pe;const S=new qe;S.viewport=new pe;const R=[y,S],B=new mu;let V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=C[Y];return Q===void 0&&(Q=new Vr,C[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=C[Y];return Q===void 0&&(Q=new Vr,C[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=C[Y];return Q===void 0&&(Q=new Vr,C[Y]=Q),Q.getHandSpace()};function X(Y){const Q=w.indexOf(Y.inputSource);if(Q===-1)return;const xt=C[Q];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<C.length;Y++){const Q=w[Y];Q!==null&&(w[Y]=null,C[Y].disconnect(Q))}V=null,q=null,m.reset();for(const Y in d)delete d[Y];t.setRenderTarget(T),p=null,f=null,u=null,s=null,M=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),A.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ct=null,Et=null;A.depth&&(Et=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=A.stencil?ls:os,Ct=A.stencil?as:ri);const qt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new oi(f.textureWidth,f.textureHeight,{format:je,type:dn,depthTexture:new _l(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new oi(p.framebufferWidth,p.framebufferHeight,{format:je,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Y){for(let Q=0;Q<Y.removed.length;Q++){const xt=Y.removed[Q],Ct=w.indexOf(xt);Ct>=0&&(w[Ct]=null,C[Ct].disconnect(xt))}for(let Q=0;Q<Y.added.length;Q++){const xt=Y.added[Q];let Ct=w.indexOf(xt);if(Ct===-1){for(let qt=0;qt<C.length;qt++)if(qt>=w.length){w.push(xt),Ct=qt;break}else if(w[qt]===null){w[qt]=xt,Ct=qt;break}if(Ct===-1)break}const Et=C[Ct];Et&&Et.connect(xt)}}const H=new P,ot=new P;function ft(Y,Q,xt){H.setFromMatrixPosition(Q.matrixWorld),ot.setFromMatrixPosition(xt.matrixWorld);const Ct=H.distanceTo(ot),Et=Q.projectionMatrix.elements,qt=xt.projectionMatrix.elements,re=Et[14]/(Et[10]-1),b=Et[14]/(Et[10]+1),et=(Et[9]+1)/Et[5],$=(Et[9]-1)/Et[5],K=(Et[8]-1)/Et[0],Z=(qt[8]+1)/qt[0],ht=re*K,nt=re*Z,ut=Ct/(-K+Z),Ot=ut*-K;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ot),Y.translateZ(ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ft=re+ut,E=b+ut,_=ht-Ot,F=nt+(Ct-Ot),k=et*b/E*Ft,tt=$*b/E*Ft;Y.projectionMatrix.makePerspective(_,F,k,tt,Ft,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function _t(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,xt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),B.near=S.near=y.near=Q,B.far=S.far=y.far=xt,(V!==B.near||q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,q=B.far),B.layers.mask=Y.layers.mask|6,y.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Ct=Y.parent,Et=B.cameras;_t(B,Ct);for(let qt=0;qt<Et.length;qt++)_t(Et[qt],Ct);Et.length===2?ft(B,y,S):B.projectionMatrix.copy(y.projectionMatrix),Lt(Y,B,Ct)};function Lt(Y,Q,xt){xt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ya*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return d[Y]};let Ht=null;function Zt(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ct=!1;xt.length!==B.cameras.length&&(B.cameras.length=0,Ct=!0);for(let b=0;b<xt.length;b++){const et=xt[b];let $=null;if(p!==null)$=p.getViewport(et);else{const Z=u.getViewSubImage(f,et);$=Z.viewport,b===0&&(t.setRenderTargetTextures(M,Z.colorTexture,Z.depthStencilTexture),t.setRenderTarget(M))}let K=R[b];K===void 0&&(K=new qe,K.layers.enable(b),K.viewport=new pe,R[b]=K),K.matrix.fromArray(et.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(et.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set($.x,$.y,$.width,$.height),b===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ct===!0&&B.cameras.push(K)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const b=u.getDepthInformation(xt[0]);b&&b.isValid&&b.texture&&m.init(b,s.renderState)}if(Et&&Et.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let b=0;b<xt.length;b++){const et=xt[b].camera;if(et){let $=d[et];$||($=new vl,d[et]=$);const K=u.getCameraImage(et);$.sourceTexture=K}}}}for(let xt=0;xt<C.length;xt++){const Ct=w[xt],Et=C[xt];Ct!==null&&Et!==void 0&&Et.update(Ct,Q,c||a)}Ht&&Ht(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Gt=new Pl;Gt.setAnimationLoop(Zt),this.setAnimationLoop=function(Y){Ht=Y},this.dispose=function(){}}}const Jn=new fn,J1=new de;function j1(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,fl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,T,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Fe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Fe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=t.get(d),T=A.envMap,M=A.envMapRotation;T&&(m.envMap.value=T,Jn.copy(M),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4(J1.makeRotationFromEuler(Jn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Fe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q1(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const M=T.program;n.uniformBlockBinding(A,M)}function c(A,T){let M=s[A.id];M===void 0&&(g(A),M=h(A),s[A.id]=M,A.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(A,C);const w=t.render.frame;r[A.id]!==w&&(f(A),r[A.id]=w)}function h(A){const T=u();A.__bindingPointIndex=T;const M=i.createBuffer(),C=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=s[A.id],M=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,L=M.length;w<L;w++){const N=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,S=N.length;y<S;y++){const R=N[y];if(p(R,w,y,C)===!0){const B=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let X=0;X<V.length;X++){const W=V[X],j=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+q,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,T,M,C){const w=A.value,L=T+"_"+M;if(C[L]===void 0)return typeof w=="number"||typeof w=="boolean"?C[L]=w:C[L]=w.clone(),!0;{const N=C[L];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return C[L]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(A){const T=A.uniforms;let M=0;const C=16;for(let L=0,N=T.length;L<N;L++){const y=Array.isArray(T[L])?T[L]:[T[L]];for(let S=0,R=y.length;S<R;S++){const B=y[S],V=Array.isArray(B.value)?B.value:[B.value];for(let q=0,X=V.length;q<X;q++){const W=V[q],j=v(W),H=M%C,ot=H%j.boundary,ft=H+ot;M+=ot,ft!==0&&C-ft<j.storage&&(M+=C-ft),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=j.storage}}}const w=M%C;return w>0&&(M+=C-w),A.__size=M,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class tm{constructor(t={}){const{canvas:e=Jc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Ue;let w=0,L=0,N=null,y=-1,S=null;const R=new pe,B=new pe;let V=null;const q=new Xt(0);let X=0,W=e.width,j=e.height,H=1,ot=null,ft=null;const _t=new pe(0,0,W,j),Lt=new pe(0,0,W,j);let Ht=!1;const Zt=new po;let Gt=!1,Y=!1;const Q=new de,xt=new P,Ct=new pe,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function re(){return N===null?H:1}let b=n;function et(x,U){return e.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${no}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",st,!1),b===null){const U="webgl2";if(b=et(U,x),b===null)throw et(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let $,K,Z,ht,nt,ut,Ot,Ft,E,_,F,k,tt,G,wt,lt,Tt,bt,it,vt,It,Rt,mt,zt;function D(){$=new hp(b),$.init(),Rt=new q1(b,$),K=new ip(b,$,t,Rt),Z=new W1(b,$),K.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),ht=new fp(b),nt=new L1,ut=new X1(b,$,Z,nt,K,Rt,ht),Ot=new rp(M),Ft=new cp(M),E=new vu(b),mt=new ep(b,E),_=new up(b,E,ht,mt),F=new mp(b,_,E,ht),it=new pp(b,K,ut),lt=new sp(nt),k=new P1(M,Ot,Ft,$,K,mt,lt),tt=new j1(M,nt),G=new U1,wt=new z1($),bt=new tp(M,Ot,Ft,Z,F,p,l),Tt=new V1(M,F,K),zt=new Q1(b,ht,K,Z),vt=new np(b,$,ht),It=new dp(b,$,ht),ht.programs=k.programs,M.capabilities=K,M.extensions=$,M.properties=nt,M.renderLists=G,M.shadowMap=Tt,M.state=Z,M.info=ht}D();const at=new $1(M,b);this.xr=at,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const x=$.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=$.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(W,j,!1))},this.getSize=function(x){return x.set(W,j)},this.setSize=function(x,U,O=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,j=U,e.width=Math.floor(x*H),e.height=Math.floor(U*H),O===!0&&(e.style.width=x+"px",e.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(W*H,j*H).floor()},this.setDrawingBufferSize=function(x,U,O){W=x,j=U,H=O,e.width=Math.floor(x*O),e.height=Math.floor(U*O),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(_t)},this.setViewport=function(x,U,O,z){x.isVector4?_t.set(x.x,x.y,x.z,x.w):_t.set(x,U,O,z),Z.viewport(R.copy(_t).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Lt)},this.setScissor=function(x,U,O,z){x.isVector4?Lt.set(x.x,x.y,x.z,x.w):Lt.set(x,U,O,z),Z.scissor(B.copy(Lt).multiplyScalar(H).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(x){Z.setScissorTest(Ht=x)},this.setOpaqueSort=function(x){ot=x},this.setTransparentSort=function(x){ft=x},this.getClearColor=function(x){return x.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,O=!0){let z=0;if(x){let I=!1;if(N!==null){const rt=N.texture.format;I=rt===co||rt===lo||rt===oo}if(I){const rt=N.texture.type,gt=rt===dn||rt===ri||rt===rs||rt===as||rt===ro||rt===ao,yt=bt.getClearColor(),Mt=bt.getClearAlpha(),Ut=yt.r,Nt=yt.g,Pt=yt.b;gt?(g[0]=Ut,g[1]=Nt,g[2]=Pt,g[3]=Mt,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=Ut,v[1]=Nt,v[2]=Pt,v[3]=Mt,b.clearBufferiv(b.COLOR,0,v))}else z|=b.COLOR_BUFFER_BIT}U&&(z|=b.DEPTH_BUFFER_BIT),O&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",st,!1),bt.dispose(),G.dispose(),wt.dispose(),nt.dispose(),Ot.dispose(),Ft.dispose(),F.dispose(),mt.dispose(),zt.dispose(),k.dispose(),at.dispose(),at.removeEventListener("sessionstart",sn),at.removeEventListener("sessionend",bo),Wn.stop()};function dt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=ht.autoReset,U=Tt.enabled,O=Tt.autoUpdate,z=Tt.needsUpdate,I=Tt.type;D(),ht.autoReset=x,Tt.enabled=U,Tt.autoUpdate=O,Tt.needsUpdate=z,Tt.type=I}function st(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function J(x){const U=x.target;U.removeEventListener("dispose",J),At(U)}function At(x){Bt(x),nt.remove(x)}function Bt(x){const U=nt.get(x).programs;U!==void 0&&(U.forEach(function(O){k.releaseProgram(O)}),x.isShaderMaterial&&k.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,O,z,I,rt){U===null&&(U=Et);const gt=I.isMesh&&I.matrixWorld.determinant()<0,yt=Kl(x,U,O,z,I);Z.setMaterial(z,gt);let Mt=O.index,Ut=1;if(z.wireframe===!0){if(Mt=_.getWireframeAttribute(O),Mt===void 0)return;Ut=2}const Nt=O.drawRange,Pt=O.attributes.position;let Yt=Nt.start*Ut,ee=(Nt.start+Nt.count)*Ut;rt!==null&&(Yt=Math.max(Yt,rt.start*Ut),ee=Math.min(ee,(rt.start+rt.count)*Ut)),Mt!==null?(Yt=Math.max(Yt,0),ee=Math.min(ee,Mt.count)):Pt!=null&&(Yt=Math.max(Yt,0),ee=Math.min(ee,Pt.count));const fe=ee-Yt;if(fe<0||fe===1/0)return;mt.setup(I,z,yt,O,Mt);let oe,se=vt;if(Mt!==null&&(oe=E.get(Mt),se=It,se.setIndex(oe)),I.isMesh)z.wireframe===!0?(Z.setLineWidth(z.wireframeLinewidth*re()),se.setMode(b.LINES)):se.setMode(b.TRIANGLES);else if(I.isLine){let Dt=z.linewidth;Dt===void 0&&(Dt=1),Z.setLineWidth(Dt*re()),I.isLineSegments?se.setMode(b.LINES):I.isLineLoop?se.setMode(b.LINE_LOOP):se.setMode(b.LINE_STRIP)}else I.isPoints?se.setMode(b.POINTS):I.isSprite&&se.setMode(b.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if($.get("WEBGL_multi_draw"))se.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Dt=I._multiDrawStarts,ce=I._multiDrawCounts,Kt=I._multiDrawCount,Oe=Mt?E.get(Mt).bytesPerElement:1,di=nt.get(z).currentProgram.getUniforms();for(let Be=0;Be<Kt;Be++)di.setValue(b,"_gl_DrawID",Be),se.render(Dt[Be]/Oe,ce[Be])}else if(I.isInstancedMesh)se.renderInstances(Yt,fe,I.count);else if(O.isInstancedBufferGeometry){const Dt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ce=Math.min(O.instanceCount,Dt);se.renderInstances(Yt,fe,ce)}else se.render(Yt,fe)};function ae(x,U,O){x.transparent===!0&&x.side===En&&x.forceSinglePass===!1?(x.side=Fe,x.needsUpdate=!0,Ms(x,U,O),x.side=Hn,x.needsUpdate=!0,Ms(x,U,O),x.side=En):Ms(x,U,O)}this.compile=function(x,U,O=null){O===null&&(O=x),d=wt.get(O),d.init(U),T.push(d),O.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),x!==O&&x.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const z=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const rt=I.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){const yt=rt[gt];ae(yt,O,I),z.add(yt)}else ae(rt,O,I),z.add(rt)}),d=T.pop(),z},this.compileAsync=function(x,U,O=null){const z=this.compile(x,U,O);return new Promise(I=>{function rt(){if(z.forEach(function(gt){nt.get(gt).currentProgram.isReady()&&z.delete(gt)}),z.size===0){I(x);return}setTimeout(rt,10)}$.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let jt=null;function gn(x){jt&&jt(x)}function sn(){Wn.stop()}function bo(){Wn.start()}const Wn=new Pl;Wn.setAnimationLoop(gn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(x){jt=x,at.setAnimationLoop(x),x===null?Wn.stop():Wn.start()},at.addEventListener("sessionstart",sn),at.addEventListener("sessionend",bo),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,U,N),d=wt.get(x,T.length),d.init(U),T.push(d),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Zt.setFromProjectionMatrix(Q,on,U.reversedDepth),Y=this.localClippingEnabled,Gt=lt.init(this.clippingPlanes,Y),m=G.get(x,A.length),m.init(),A.push(m),at.enabled===!0&&at.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&vr(rt,U,-1/0,M.sortObjects)}vr(x,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ot,ft),qt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,qt&&bt.addToRenderList(m,x),this.info.render.frame++,Gt===!0&&lt.beginShadows();const O=d.state.shadowsArray;Tt.render(O,x,U),Gt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,I=m.transmissive;if(d.setupLights(),U.isArrayCamera){const rt=U.cameras;if(I.length>0)for(let gt=0,yt=rt.length;gt<yt;gt++){const Mt=rt[gt];wo(z,I,x,Mt)}qt&&bt.render(x);for(let gt=0,yt=rt.length;gt<yt;gt++){const Mt=rt[gt];Ao(m,x,Mt,Mt.viewport)}}else I.length>0&&wo(z,I,x,U),qt&&bt.render(x),Ao(m,x,U);N!==null&&L===0&&(ut.updateMultisampleRenderTarget(N),ut.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(M,x,U),mt.resetDefaultState(),y=-1,S=null,T.pop(),T.length>0?(d=T[T.length-1],Gt===!0&&lt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function vr(x,U,O,z){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Zt.intersectsSprite(x)){z&&Ct.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Q);const gt=F.update(x),yt=x.material;yt.visible&&m.push(x,gt,yt,O,Ct.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Zt.intersectsObject(x))){const gt=F.update(x),yt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ct.copy(x.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ct.copy(gt.boundingSphere.center)),Ct.applyMatrix4(x.matrixWorld).applyMatrix4(Q)),Array.isArray(yt)){const Mt=gt.groups;for(let Ut=0,Nt=Mt.length;Ut<Nt;Ut++){const Pt=Mt[Ut],Yt=yt[Pt.materialIndex];Yt&&Yt.visible&&m.push(x,gt,Yt,O,Ct.z,Pt)}}else yt.visible&&m.push(x,gt,yt,O,Ct.z,null)}}const rt=x.children;for(let gt=0,yt=rt.length;gt<yt;gt++)vr(rt[gt],U,O,z)}function Ao(x,U,O,z){const I=x.opaque,rt=x.transmissive,gt=x.transparent;d.setupLightsView(O),Gt===!0&&lt.setGlobalState(M.clippingPlanes,O),z&&Z.viewport(R.copy(z)),I.length>0&&xs(I,U,O),rt.length>0&&xs(rt,U,O),gt.length>0&&xs(gt,U,O),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function wo(x,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new oi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?fs:dn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const rt=d.state.transmissionRenderTarget[z.id],gt=z.viewport||R;rt.setSize(gt.z*M.transmissionResolutionScale,gt.w*M.transmissionResolutionScale);const yt=M.getRenderTarget(),Mt=M.getActiveCubeFace(),Ut=M.getActiveMipmapLevel();M.setRenderTarget(rt),M.getClearColor(q),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),qt&&bt.render(O);const Nt=M.toneMapping;M.toneMapping=kn;const Pt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),Gt===!0&&lt.setGlobalState(M.clippingPlanes,z),xs(x,O,z),ut.updateMultisampleRenderTarget(rt),ut.updateRenderTargetMipmap(rt),$.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ee=0,fe=U.length;ee<fe;ee++){const oe=U[ee],se=oe.object,Dt=oe.geometry,ce=oe.material,Kt=oe.group;if(ce.side===En&&se.layers.test(z.layers)){const Oe=ce.side;ce.side=Fe,ce.needsUpdate=!0,Ro(se,O,z,Dt,ce,Kt),ce.side=Oe,ce.needsUpdate=!0,Yt=!0}}Yt===!0&&(ut.updateMultisampleRenderTarget(rt),ut.updateRenderTargetMipmap(rt))}M.setRenderTarget(yt,Mt,Ut),M.setClearColor(q,X),Pt!==void 0&&(z.viewport=Pt),M.toneMapping=Nt}function xs(x,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let I=0,rt=x.length;I<rt;I++){const gt=x[I],yt=gt.object,Mt=gt.geometry,Ut=gt.group;let Nt=gt.material;Nt.allowOverride===!0&&z!==null&&(Nt=z),yt.layers.test(O.layers)&&Ro(yt,U,O,Mt,Nt,Ut)}}function Ro(x,U,O,z,I,rt){x.onBeforeRender(M,U,O,z,I,rt),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(M,U,O,z,x,rt),I.transparent===!0&&I.side===En&&I.forceSinglePass===!1?(I.side=Fe,I.needsUpdate=!0,M.renderBufferDirect(O,U,z,I,x,rt),I.side=Hn,I.needsUpdate=!0,M.renderBufferDirect(O,U,z,I,x,rt),I.side=En):M.renderBufferDirect(O,U,z,I,x,rt),x.onAfterRender(M,U,O,z,I,rt)}function Ms(x,U,O){U.isScene!==!0&&(U=Et);const z=nt.get(x),I=d.state.lights,rt=d.state.shadowsArray,gt=I.state.version,yt=k.getParameters(x,I.state,rt,U,O),Mt=k.getProgramCacheKey(yt);let Ut=z.programs;z.environment=x.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(x.isMeshStandardMaterial?Ft:Ot).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ut===void 0&&(x.addEventListener("dispose",J),Ut=new Map,z.programs=Ut);let Nt=Ut.get(Mt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===gt)return Po(x,yt),Nt}else yt.uniforms=k.getUniforms(x),x.onBeforeCompile(yt,M),Nt=k.acquireProgram(yt,Mt),Ut.set(Mt,Nt),z.uniforms=yt.uniforms;const Pt=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Pt.clippingPlanes=lt.uniform),Po(x,yt),z.needsLights=Jl(x),z.lightsStateVersion=gt,z.needsLights&&(Pt.ambientLightColor.value=I.state.ambient,Pt.lightProbe.value=I.state.probe,Pt.directionalLights.value=I.state.directional,Pt.directionalLightShadows.value=I.state.directionalShadow,Pt.spotLights.value=I.state.spot,Pt.spotLightShadows.value=I.state.spotShadow,Pt.rectAreaLights.value=I.state.rectArea,Pt.ltc_1.value=I.state.rectAreaLTC1,Pt.ltc_2.value=I.state.rectAreaLTC2,Pt.pointLights.value=I.state.point,Pt.pointLightShadows.value=I.state.pointShadow,Pt.hemisphereLights.value=I.state.hemi,Pt.directionalShadowMap.value=I.state.directionalShadowMap,Pt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Pt.spotShadowMap.value=I.state.spotShadowMap,Pt.spotLightMatrix.value=I.state.spotLightMatrix,Pt.spotLightMap.value=I.state.spotLightMap,Pt.pointShadowMap.value=I.state.pointShadowMap,Pt.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Nt,z.uniformsList=null,Nt}function Co(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Qs.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Po(x,U){const O=nt.get(x);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Kl(x,U,O,z,I){U.isScene!==!0&&(U=Et),ut.resetTextureUnits();const rt=U.fog,gt=z.isMeshStandardMaterial?U.environment:null,yt=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ii,Mt=(z.isMeshStandardMaterial?Ft:Ot).get(z.envMap||gt),Ut=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Nt=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!O.morphAttributes.position,Yt=!!O.morphAttributes.normal,ee=!!O.morphAttributes.color;let fe=kn;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(fe=M.toneMapping);const oe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,se=oe!==void 0?oe.length:0,Dt=nt.get(z),ce=d.state.lights;if(Gt===!0&&(Y===!0||x!==S)){const Ae=x===S&&z.id===y;lt.setState(z,x,Ae)}let Kt=!1;z.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ce.state.version||Dt.outputColorSpace!==yt||I.isBatchedMesh&&Dt.batching===!1||!I.isBatchedMesh&&Dt.batching===!0||I.isBatchedMesh&&Dt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Dt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Dt.instancing===!1||!I.isInstancedMesh&&Dt.instancing===!0||I.isSkinnedMesh&&Dt.skinning===!1||!I.isSkinnedMesh&&Dt.skinning===!0||I.isInstancedMesh&&Dt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Dt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Dt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Dt.instancingMorph===!1&&I.morphTexture!==null||Dt.envMap!==Mt||z.fog===!0&&Dt.fog!==rt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==lt.numPlanes||Dt.numIntersection!==lt.numIntersection)||Dt.vertexAlphas!==Ut||Dt.vertexTangents!==Nt||Dt.morphTargets!==Pt||Dt.morphNormals!==Yt||Dt.morphColors!==ee||Dt.toneMapping!==fe||Dt.morphTargetsCount!==se)&&(Kt=!0):(Kt=!0,Dt.__version=z.version);let Oe=Dt.currentProgram;Kt===!0&&(Oe=Ms(z,U,I));let di=!1,Be=!1,Hi=!1;const he=Oe.getUniforms(),Ve=Dt.uniforms;if(Z.useProgram(Oe.program)&&(di=!0,Be=!0,Hi=!0),z.id!==y&&(y=z.id,Be=!0),di||S!==x){Z.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),he.setValue(b,"projectionMatrix",x.projectionMatrix),he.setValue(b,"viewMatrix",x.matrixWorldInverse);const Pe=he.map.cameraPosition;Pe!==void 0&&Pe.setValue(b,xt.setFromMatrixPosition(x.matrixWorld)),K.logarithmicDepthBuffer&&he.setValue(b,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&he.setValue(b,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Be=!0,Hi=!0)}if(I.isSkinnedMesh){he.setOptional(b,I,"bindMatrix"),he.setOptional(b,I,"bindMatrixInverse");const Ae=I.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),he.setValue(b,"boneTexture",Ae.boneTexture,ut))}I.isBatchedMesh&&(he.setOptional(b,I,"batchingTexture"),he.setValue(b,"batchingTexture",I._matricesTexture,ut),he.setOptional(b,I,"batchingIdTexture"),he.setValue(b,"batchingIdTexture",I._indirectTexture,ut),he.setOptional(b,I,"batchingColorTexture"),I._colorsTexture!==null&&he.setValue(b,"batchingColorTexture",I._colorsTexture,ut));const Ge=O.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&it.update(I,O,Oe),(Be||Dt.receiveShadow!==I.receiveShadow)&&(Dt.receiveShadow=I.receiveShadow,he.setValue(b,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ve.envMap.value=Mt,Ve.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Ve.envMapIntensity.value=U.environmentIntensity),Be&&(he.setValue(b,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&$l(Ve,Hi),rt&&z.fog===!0&&tt.refreshFogUniforms(Ve,rt),tt.refreshMaterialUniforms(Ve,z,H,j,d.state.transmissionRenderTarget[x.id]),Qs.upload(b,Co(Dt),Ve,ut)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Qs.upload(b,Co(Dt),Ve,ut),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&he.setValue(b,"center",I.center),he.setValue(b,"modelViewMatrix",I.modelViewMatrix),he.setValue(b,"normalMatrix",I.normalMatrix),he.setValue(b,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ae=z.uniformsGroups;for(let Pe=0,xr=Ae.length;Pe<xr;Pe++){const Xn=Ae[Pe];zt.update(Xn,Oe),zt.bind(Xn,Oe)}}return Oe}function $l(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Jl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,U,O){const z=nt.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),nt.get(x.texture).__webglTexture=U,nt.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const O=nt.get(x);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const jl=b.createFramebuffer();this.setRenderTarget=function(x,U=0,O=0){N=x,w=U,L=O;let z=!0,I=null,rt=!1,gt=!1;if(x){const Mt=nt.get(x);if(Mt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(Mt.__webglFramebuffer===void 0)ut.setupRenderTarget(x);else if(Mt.__hasExternalTextures)ut.rebindTextures(x,nt.get(x.texture).__webglTexture,nt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Pt=x.depthTexture;if(Mt.__boundDepthTexture!==Pt){if(Pt!==null&&nt.has(Pt)&&(x.width!==Pt.image.width||x.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(x)}}const Ut=x.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(gt=!0);const Nt=nt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?I=Nt[U][O]:I=Nt[U],rt=!0):x.samples>0&&ut.useMultisampledRTT(x)===!1?I=nt.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?I=Nt[O]:I=Nt,R.copy(x.viewport),B.copy(x.scissor),V=x.scissorTest}else R.copy(_t).multiplyScalar(H).floor(),B.copy(Lt).multiplyScalar(H).floor(),V=Ht;if(O!==0&&(I=jl),Z.bindFramebuffer(b.FRAMEBUFFER,I)&&z&&Z.drawBuffers(x,I),Z.viewport(R),Z.scissor(B),Z.setScissorTest(V),rt){const Mt=nt.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,O)}else if(gt){const Mt=U;for(let Ut=0;Ut<x.textures.length;Ut++){const Nt=nt.get(x.textures[Ut]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ut,Nt.__webglTexture,O,Mt)}}else if(x!==null&&O!==0){const Mt=nt.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Mt.__webglTexture,O)}y=-1},this.readRenderTargetPixels=function(x,U,O,z,I,rt,gt,yt=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=nt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){Z.bindFramebuffer(b.FRAMEBUFFER,Mt);try{const Ut=x.textures[yt],Nt=Ut.format,Pt=Ut.type;if(!K.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-z&&O>=0&&O<=x.height-I&&(x.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+yt),b.readPixels(U,O,z,I,Rt.convert(Nt),Rt.convert(Pt),rt))}finally{const Ut=N!==null?nt.get(N).__webglFramebuffer:null;Z.bindFramebuffer(b.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(x,U,O,z,I,rt,gt,yt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=nt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt)if(U>=0&&U<=x.width-z&&O>=0&&O<=x.height-I){Z.bindFramebuffer(b.FRAMEBUFFER,Mt);const Ut=x.textures[yt],Nt=Ut.format,Pt=Ut.type;if(!K.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Yt),b.bufferData(b.PIXEL_PACK_BUFFER,rt.byteLength,b.STREAM_READ),x.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+yt),b.readPixels(U,O,z,I,Rt.convert(Nt),Rt.convert(Pt),0);const ee=N!==null?nt.get(N).__webglFramebuffer:null;Z.bindFramebuffer(b.FRAMEBUFFER,ee);const fe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await jc(b,fe,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Yt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,rt),b.deleteBuffer(Yt),b.deleteSync(fe),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,O=0){const z=Math.pow(2,-O),I=Math.floor(x.image.width*z),rt=Math.floor(x.image.height*z),gt=U!==null?U.x:0,yt=U!==null?U.y:0;ut.setTexture2D(x,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,gt,yt,I,rt),Z.unbindTexture()};const Ql=b.createFramebuffer(),tc=b.createFramebuffer();this.copyTextureToTexture=function(x,U,O=null,z=null,I=0,rt=null){rt===null&&(I!==0?(cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=I,I=0):rt=0);let gt,yt,Mt,Ut,Nt,Pt,Yt,ee,fe;const oe=x.isCompressedTexture?x.mipmaps[rt]:x.image;if(O!==null)gt=O.max.x-O.min.x,yt=O.max.y-O.min.y,Mt=O.isBox3?O.max.z-O.min.z:1,Ut=O.min.x,Nt=O.min.y,Pt=O.isBox3?O.min.z:0;else{const Ge=Math.pow(2,-I);gt=Math.floor(oe.width*Ge),yt=Math.floor(oe.height*Ge),x.isDataArrayTexture?Mt=oe.depth:x.isData3DTexture?Mt=Math.floor(oe.depth*Ge):Mt=1,Ut=0,Nt=0,Pt=0}z!==null?(Yt=z.x,ee=z.y,fe=z.z):(Yt=0,ee=0,fe=0);const se=Rt.convert(U.format),Dt=Rt.convert(U.type);let ce;U.isData3DTexture?(ut.setTexture3D(U,0),ce=b.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ut.setTexture2DArray(U,0),ce=b.TEXTURE_2D_ARRAY):(ut.setTexture2D(U,0),ce=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=b.getParameter(b.UNPACK_ROW_LENGTH),Oe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),di=b.getParameter(b.UNPACK_SKIP_PIXELS),Be=b.getParameter(b.UNPACK_SKIP_ROWS),Hi=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,oe.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,oe.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ut),b.pixelStorei(b.UNPACK_SKIP_ROWS,Nt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Pt);const he=x.isDataArrayTexture||x.isData3DTexture,Ve=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const Ge=nt.get(x),Ae=nt.get(U),Pe=nt.get(Ge.__renderTarget),xr=nt.get(Ae.__renderTarget);Z.bindFramebuffer(b.READ_FRAMEBUFFER,Pe.__webglFramebuffer),Z.bindFramebuffer(b.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Xn=0;Xn<Mt;Xn++)he&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,nt.get(x).__webglTexture,I,Pt+Xn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,nt.get(U).__webglTexture,rt,fe+Xn)),b.blitFramebuffer(Ut,Nt,gt,yt,Yt,ee,gt,yt,b.DEPTH_BUFFER_BIT,b.NEAREST);Z.bindFramebuffer(b.READ_FRAMEBUFFER,null),Z.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||nt.has(x)){const Ge=nt.get(x),Ae=nt.get(U);Z.bindFramebuffer(b.READ_FRAMEBUFFER,Ql),Z.bindFramebuffer(b.DRAW_FRAMEBUFFER,tc);for(let Pe=0;Pe<Mt;Pe++)he?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ge.__webglTexture,I,Pt+Pe):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ge.__webglTexture,I),Ve?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.__webglTexture,rt,fe+Pe):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ae.__webglTexture,rt),I!==0?b.blitFramebuffer(Ut,Nt,gt,yt,Yt,ee,gt,yt,b.COLOR_BUFFER_BIT,b.NEAREST):Ve?b.copyTexSubImage3D(ce,rt,Yt,ee,fe+Pe,Ut,Nt,gt,yt):b.copyTexSubImage2D(ce,rt,Yt,ee,Ut,Nt,gt,yt);Z.bindFramebuffer(b.READ_FRAMEBUFFER,null),Z.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ve?x.isDataTexture||x.isData3DTexture?b.texSubImage3D(ce,rt,Yt,ee,fe,gt,yt,Mt,se,Dt,oe.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(ce,rt,Yt,ee,fe,gt,yt,Mt,se,oe.data):b.texSubImage3D(ce,rt,Yt,ee,fe,gt,yt,Mt,se,Dt,oe):x.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,rt,Yt,ee,gt,yt,se,Dt,oe.data):x.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,rt,Yt,ee,oe.width,oe.height,se,oe.data):b.texSubImage2D(b.TEXTURE_2D,rt,Yt,ee,gt,yt,se,Dt,oe);b.pixelStorei(b.UNPACK_ROW_LENGTH,Kt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Oe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,di),b.pixelStorei(b.UNPACK_SKIP_ROWS,Be),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Hi),rt===0&&U.generateMipmaps&&b.generateMipmap(ce),Z.unbindTexture()},this.initRenderTarget=function(x){nt.get(x).__webglFramebuffer===void 0&&ut.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?ut.setTextureCube(x,0):x.isData3DTexture?ut.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ut.setTexture2DArray(x,0):ut.setTexture2D(x,0),Z.unbindTexture()},this.resetState=function(){w=0,L=0,N=null,Z.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const em=139.4,nm=35.7,im=311.4,sm=254.8,Nl=19.66,rm=Nl*180/Math.PI,B0=i=>Math.log(Math.tan(Math.PI/4+i*Math.PI/360));function am(i,t){return[im+(t-em)*Nl,sm-(B0(i)-B0(nm))*rm]}const z0={hokkaido:[43.06,141.35,"hokkaido"],tsugaru:[40.6,140.46,"aomori"],nanbu:[40.51,141.49,"aomori"],morioka:[39.7,141.15,"iwate"],akita:[39.72,140.1,"akita"],yamagata:[38.25,140.33,"yamagata"],sendai:[38.27,140.87,"miyagi"],fukushima:[37.75,140.47,"fukushima"],aizu:[37.49,139.93,"fukushima"],ibaraki:[36.37,140.47,"ibaraki"],tochigi:[36.56,139.88,"tochigi"],gunma:[36.39,139.06,"gunma"],edo:[35.71,139.8,"tokyo"],hachijo:[33.11,139.79,"tokyo"],niigata:[37.9,139.02,"niigata"],nagano:[36.65,138.18,"nagano"],koshu:[35.66,138.57,"yamanashi"],toyama:[36.7,137.21,"toyama"],kanazawa:[36.56,136.65,"ishikawa"],fukui:[36.06,136.22,"fukui"],shizuoka:[34.98,138.38,"shizuoka"],enshu:[34.71,137.73,"shizuoka"],mikawa:[34.85,137.3,"aichi"],nagoya:[35.18,136.91,"aichi"],gifu:[35.42,136.76,"gifu"],mie:[34.72,136.42,"mie"],omi:[35.13,136.1,"shiga"],kyoto:[35.01,135.77,"kyoto"],osaka:[34.69,135.5,"osaka"],kawachi:[34.68,135.6,"osaka"],senshu:[34.46,135.37,"osaka"],kobe:[34.695,135.175,"hyogo"],banshu:[34.82,134.69,"hyogo"],nara:[34.69,135.8,"nara"],wakayama:[34.23,135.17,"wakayama"],tottori:[35.5,134.24,"tottori"],izumo:[35.37,132.75,"shimane"],okayama:[34.66,133.92,"okayama"],hiroshima:[34.39,132.46,"hiroshima"],yamaguchi:[34.18,131.47,"yamaguchi"],sanuki:[34.34,134.05,"kagawa"],awa:[34.043,134.51,"tokushima"],iyo:[33.84,132.77,"ehime"],tosa:[33.56,133.53,"kochi"],kitakyushu:[33.88,130.88,"fukuoka"],hakata:[33.59,130.4,"fukuoka"],chikugo:[33.32,130.51,"fukuoka"],saga:[33.25,130.3,"saga"],nagasaki:[32.75,129.88,"nagasaki"],kumamoto:[32.8,130.71,"kumamoto"],oita:[33.24,131.61,"oita"],miyazaki:[31.915,131.37,"miyazaki"],satsuma:[31.6,130.56,"kagoshima"],uchinaa:[26.35,127.805,"okinawa"],okinawa:[26.2,127.73,"okinawa"],miyako:[24.8,125.28,"okinawa"],yaeyama:[24.38,124.1,"okinawa"]},om={hokkaido:"北海道・東北",aomori:"北海道・東北",iwate:"北海道・東北",akita:"北海道・東北",miyagi:"北海道・東北",yamagata:"北海道・東北",fukushima:"北海道・東北",ibaraki:"関東",tochigi:"関東",gunma:"関東",saitama:"関東",chiba:"関東",tokyo:"関東",kanagawa:"関東",niigata:"甲信越・北陸",nagano:"甲信越・北陸",yamanashi:"甲信越・北陸",toyama:"甲信越・北陸",ishikawa:"甲信越・北陸",fukui:"甲信越・北陸",shizuoka:"東海",aichi:"東海",gifu:"東海",mie:"東海",shiga:"近畿",kyoto:"近畿",osaka:"近畿",hyogo:"近畿",nara:"近畿",wakayama:"近畿",tottori:"中国",shimane:"中国",okayama:"中国",hiroshima:"中国",yamaguchi:"中国",kagawa:"四国",tokushima:"四国",ehime:"四国",kochi:"四国",fukuoka:"九州",saga:"九州",nagasaki:"九州",kumamoto:"九州",oita:"九州",miyazaki:"九州",kagoshima:"九州",okinawa:"沖縄・離島"},Fl={"北海道・東北":"#4f8a63",関東:"#b07f2c","甲信越・北陸":"#3f74a3",東海:"#7d5fa6",近畿:"#c0474f",中国:"#9a8a1f",四国:"#25897f",九州:"#a64f80","沖縄・離島":"#2a86c0"},k0={type:"change"},xo={type:"start"},Ol={type:"end"},Ys=new uo,H0=new Fn,lm=Math.cos(70*$c.DEG2RAD),_e=new P,De=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},na=1e-6;class cm extends gu{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:An.ROTATE,MIDDLE:An.DOLLY,RIGHT:An.PAN},this.touches={ONE:Bn.ROTATE,TWO:Bn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ai,this._lastTargetPosition=new P,this._quat=new ai().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new d0,this._sphericalDelta=new d0,this._scale=1,this._panOffset=new P,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new P,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=um.bind(this),this._onPointerDown=hm.bind(this),this._onPointerUp=dm.bind(this),this._onContextMenu=xm.bind(this),this._onMouseWheel=mm.bind(this),this._onKeyDown=gm.bind(this),this._onTouchStart=_m.bind(this),this._onTouchMove=vm.bind(this),this._onMouseDown=fm.bind(this),this._onMouseMove=pm.bind(this),this._interceptControlDown=Mm.bind(this),this._interceptControlUp=Sm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(k0),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=De:n>Math.PI&&(n-=De),s<-Math.PI?s+=De:s>Math.PI&&(s-=De),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=_e.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ys.origin.copy(this.object.position),Ys.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ys.direction))<lm?this.object.lookAt(this.target):(H0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ys.intersectPlane(H0,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>na||8*(1-this._lastQuaternion.dot(this.object.quaternion))>na||this._lastTargetPosition.distanceToSquared(this.target)>na?(this.dispatchEvent(k0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?De/60*this.autoRotateSpeed*t:De/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function um(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ol),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case An.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case An.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case An.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(xo)}function pm(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mm(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(xo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ol))}function gm(i){this.enabled!==!1&&this._handleKeyDown(i)}function _m(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Bn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case Bn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Bn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case Bn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(xo)}function vm(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function xm(i){this.enabled!==!1&&i.preventDefault()}function Mm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ym extends cm{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:An.PAN,MIDDLE:An.DOLLY,RIGHT:An.ROTATE},this.touches={ONE:Bn.PAN,TWO:Bn.DOLLY_ROTATE}}}const Em={locations:[{name:"Aichi",id:"aichi",path:"m 260.23993,277.87889 -0.17,-0.35 0.5,-1.77 -0.86,-1.4 0.11,-1.46 0.46,-1.37 -0.25,-0.32 -0.89,0.36 -1.14,-0.35 0,0 -0.97,-1.57 -0.32,-1.21 0,0 0.22,-2.19 1.69,-2.97 1.28,0.15 1.66,-0.5 1.48,-1.13 -0.02,0.57 1.18,0.87 -0.03,0.65 0.5,0.21 -0.09,0.48 0.27,0.32 0.32,0.15 0.3,-0.21 0.94,0.39 0.52,0.71 0.85,-0.17 0.92,-0.73 0.63,-0.01 0.75,0.47 -0.07,0.24 0.84,0.05 -0.02,0.31 0.99,0.5 1.72,-1.4 0.8,-0.08 0,0 -0.32,0.83 0.64,0.81 -0.01,0.51 1.26,-0.26 0.85,-0.55 1.56,0.3 0.22,0.39 0.84,-0.27 0,0 -0.31,0.98 0.52,0.5 -0.58,0.57 0.08,0.47 -0.46,0.24 -1.46,2 -0.03,1.06 -1.28,1.93 -2.75,1.53 -0.43,1.23 0.16,2.32 0,0 -3.41,0.79 -3.43,1.23 -2.03,0.27 -0.26,-0.21 0.8,-1.71 0.49,0.05 0.25,0.57 2.36,-1.02 0.86,-0.53 -0.1,-0.44 0.45,-0.36 0.48,0.15 0.22,-0.19 0.21,-1.14 -0.57,-0.7 -1.69,-0.31 -0.52,0.46 -0.24,0.93 -0.81,-0.57 -2.13,0.25 -1.42,-1.37 0.31,-1.08 -0.44,-0.19 -0.42,0.59 -0.27,2.22 1.02,0.93 0.15,0.88 -1.69,-0.6 -0.77,-0.73 z"},{name:"Akita",id:"akita",path:"m 323.48993,155.40889 -0.69,-2.75 -1.39,-1.62 0.51,-0.81 0.74,0.23 0.6,0.89 0.19,-1.14 -0.26,-0.41 0.4,-0.61 0.19,-1.4 -0.34,-1.41 -1.07,-0.44 -0.45,0.43 -0.54,0.81 -0.61,2.06 0.54,0.42 -0.08,1.26 -0.75,-0.29 -0.89,0.15 -0.19,0.25 0.17,0.85 -2.1,-0.09 -0.96,-1.84 -0.22,-1.3 0.14,-0.73 1.93,1.32 0.67,-0.21 1.48,-1.46 0.87,-1.57 0.8,-2.39 0.6,-3 0.03,-1.67 -1.72,-1.81 0,0 0.51,-0.11 1.13,0.35 0.26,-0.87 0.77,-0.35 0.54,0.32 0.21,0.49 1.48,-0.13 0.81,0.28 1.35,-0.38 0.86,0.18 0.5,-1 1.31,-0.11 0.27,0.84 0.8,0 1.15,1.19 1,-0.84 1.25,0.84 0.79,-0.63 0.76,-0.05 0.72,-0.62 0.71,0.1 0.24,-1.08 1.23,-0.49 -0.16,2.35 2.13,-0.23 0.28,1.84 -0.41,0.27 -0.5,1.22 0.14,1.31 0,0 -0.4,0.57 -0.61,0.22 -0.81,1.11 0.4,0.49 -0.15,1.56 -0.52,0.46 -0.05,2.68 0.62,2.5 -0.56,0.18 -0.49,-0.48 -0.82,0.45 0.07,1.06 1.12,0.66 -0.82,1.47 -0.39,0.14 0.66,1.17 0.13,1.08 -0.51,1.19 -0.27,-0.03 -0.61,0.86 -0.42,0.11 0.21,0.72 -0.43,1.34 -0.78,0.85 0.05,0.81 -0.45,0.12 -0.05,0.65 0.39,0.09 0.6,1.25 -0.15,0.92 0.53,0.75 1.12,0.77 -0.33,1.06 0.85,0.44 -0.6,0.3 -0.47,0.83 0.27,0.22 -0.28,0.97 0.97,0.38 0.14,0.4 -0.79,1.37 0.08,1.15 0,0 -0.71,0.17 -1.64,1.57 -1.76,0.36 -0.27,-0.18 0,0 -0.24,-0.45 -1.52,-0.53 -0.58,-1.8 -1.06,-0.08 -0.35,-0.77 -1.08,0.27 -3.08,-0.94 -0.79,-0.7 -0.71,-0.18 -0.2,-1.17 -0.98,0.24 -0.37,0.46 -2.51,-0.41 0,0 0.68,-1.47 -0.23,-0.93 0.39,-0.78 -0.04,-0.53 0.39,-0.61 0.7,-0.11 0.94,-2.39 0.8,-4.19 0.04,-4.1 z"},{name:"Aomori",id:"aomori",path:"m 344.61993,125.64889 0.92,-0.83 0.58,-1.05 0.57,-1.85 0.23,-2.45 0.59,-1.14 -0.72,-2.06 -0.86,-1.04 -0.79,-0.08 -0.85,1.61 -1.13,0.81 -1.52,-0.42 -0.67,0.65 -1.81,0.34 -0.85,0.87 -0.93,-0.47 0.69,-4.59 0.42,-0.66 0.31,-1.84 1.43,-2.03 -0.22,-0.82 0.3,-0.55 1.72,1.57 1.32,0.11 0.89,0.5 1.57,1.97 1.46,0.85 0.89,0.11 1,-0.37 2.04,-1.67 -1.49,6.85 -0.1,5.09 0.55,5.55 1.37,4.86 1.18,1.09 0.67,-0.39 0.23,0.55 1.91,1.89 0,0 -0.47,0.54 -1.39,0.62 -0.11,0.83 -0.89,0.69 -1.24,-0.77 -0.68,0.09 -1.72,1.1 -0.68,-1.08 -1.96,1.49 -1.52,0.38 -0.74,0.5 -0.04,0.72 -0.46,0.02 -1,0.78 -0.94,-0.01 -0.46,-0.68 0,0 -0.14,-1.31 0.5,-1.22 0.41,-0.27 -0.28,-1.84 -2.13,0.23 0.16,-2.35 -1.23,0.49 -0.24,1.08 -0.71,-0.1 -0.72,0.62 -0.76,0.05 -0.79,0.63 -1.25,-0.84 -1,0.84 -1.15,-1.19 -0.8,0 -0.27,-0.84 -1.31,0.11 -0.5,1 -0.86,-0.18 -1.35,0.38 -0.81,-0.28 -1.48,0.13 -0.21,-0.49 -0.54,-0.32 -0.77,0.35 -0.26,0.87 -1.13,-0.35 -0.51,0.11 0,0 0.26,-1.78 -0.19,-1.44 -0.45,-0.86 -0.96,0.05 -0.15,-0.82 1.78,-1.42 1.02,-1.8 0.65,-0.44 0.61,-0.25 1.23,0.69 1.43,-1.07 0.81,-0.1 0.42,-0.61 1.02,-3.61 0.07,-3.8 -0.69,-0.75 -0.7,-0.08 0.17,-0.39 0.88,0.23 0.38,-0.43 0.4,-2.95 1.09,0.69 0.67,0.99 0.64,0.36 0.67,-0.19 1,-1.01 1.09,0.38 0.65,0.72 -0.11,2.27 0.39,2.52 0.73,3.28 0.93,1.19 1.33,-0.11 1.19,-1.28 0.22,-0.56 -0.22,-1.24 0.33,-1.45 1.49,0.54 0.68,0.96 -0.18,0.55 0.73,-0.01 0.92,0.45 0.53,0.88 0.77,0.21 z"},{name:"Chiba",id:"chiba",path:"m 319.14993,263.11889 0.14,-0.21 0.96,0.42 0.39,-0.47 -0.3,-0.72 0.09,-0.58 1.35,-0.38 -0.12,-0.51 0.28,-0.13 0.24,0.38 1.51,-2.16 0.57,0.45 0.23,-0.35 -0.54,-1.29 -0.76,-0.83 -1.21,-1.19 -0.69,0.29 -0.35,-0.76 0,0 -1.08,-2.26 0,0 0.34,-0.26 0.22,-1.33 -1.68,-3.22 -0.05,-1.04 -0.71,-1.41 0,0 0.42,0.03 0.33,0.84 1.63,2.01 0.72,0.24 0.2,0.71 1.04,0.7 2.46,0.86 0.58,0.72 1.02,-0.41 0.86,0.11 0.59,-0.4 0.8,0.23 0.86,-0.82 2.01,-0.52 1.08,0.52 0.91,-0.04 1.13,0.97 1.23,0.26 1.11,1.53 2.5,1.54 0,0 -0.11,0.65 -0.76,-0.51 -1.5,0.5 -0.8,-0.22 -0.75,0.19 -2.72,2.07 -1.39,1.57 -1.12,2.16 -0.29,2.32 0.47,1.23 -0.61,2.85 -0.67,0.14 -0.47,1.02 -0.28,0.1 -2.15,0.62 -0.23,-0.44 -1.28,0.19 -0.81,1.1 -1.97,1.36 -0.51,1.21 0.1,0.58 -0.45,0.61 -1.04,0.43 -1.17,-0.21 -0.19,-0.72 -1.31,-0.67 0.03,-0.29 0.8,0.11 1.25,-0.56 -0.78,-1.66 0.46,-0.5 -0.36,-0.36 0.29,-0.7 -0.41,-0.57 0.01,-0.83 0.92,-0.71 0.08,-0.52 -0.44,-0.75 0.06,-0.39 -0.75,-0.46 0.54,-1.46 z"},{name:"Ehime",id:"ehime",path:"m 174.06993,312.76889 0.23,-0.43 0.35,-0.26 0.35,0.04 0.02,-0.2 -0.29,-0.13 -0.38,-0.16 -0.47,0.16 -0.28,0.23 -0.44,-0.25 -0.2,0.38 -0.4,-0.13 -0.14,-0.23 -0.46,0 0.13,-0.45 0.17,-0.13 0.14,-0.1 0.31,-0.12 -0.03,-0.17 -0.04,-0.25 -0.3,0.03 -0.22,-0.37 0.35,-0.29 -0.07,-0.36 -0.27,-0.07 0.35,-0.32 0.16,-0.04 0.22,-0.27 0.09,-0.46 -0.23,0.13 -0.4,-0.05 0.17,-0.41 -0.51,0.1 -0.33,-0.36 -0.23,0.06 -0.35,0.29 -0.86,0.6 -0.52,0.14 -0.33,0.37 -1.1,0.33 -0.57,0.53 -0.16,0.31 -0.31,0.28 -0.51,0.06 -0.03,-0.24 0.35,-0.22 0.01,-0.17 -0.51,0.02 -0.85,0.71 -0.51,0.31 -0.25,0.01 2.15,-1.81 0.51,-0.3 0.66,-0.36 0.57,0.08 0.31,-0.33 0.31,-0.14 0.46,-0.04 0.24,-0.14 0.1,-0.18 1.16,-0.52 0.86,-0.64 0.75,-0.4 0.21,-0.5 0.83,-0.99 0.63,-0.46 1.55,-0.56 1.22,-0.91 0.21,-0.24 0.37,-0.98 0.45,-0.4 -0.23,-0.72 -0.01,-0.99 0.2,-1.04 0.24,-0.66 0.43,0.17 0.43,-0.29 0.34,-1.22 0.07,-0.62 1.77,-1.67 1.11,-0.17 -0.06,-0.45 0.26,-0.17 -0.15,-0.56 0.36,-0.6 0.75,0.87 0.98,1.41 0.72,1.48 0.38,0.6 0.13,0.43 0.5,0.36 0.95,-0.32 1.38,-0.34 0.37,-0.1 -0.12,-0.46 1.2,-0.2 0.24,-0.26 0.38,0.05 0.37,0.33 0.7,-0.3 0.68,0.1 0.48,0.1 0.73,0.33 0.5,-0.07 0.69,-0.5 0.2,-0.34 0.14,-0.44 0.16,-0.08 0.4,-0.27 0,0 0.33,0.27 0.95,0.13 0.61,0.34 0,0 -0.29,0.68 0.27,0.49 0,1.04 -0.22,0.61 -0.34,0.29 0,0 -0.41,0.01 -0.65,-0.01 -0.47,0.33 -0.51,-0.34 -0.21,0.04 -0.56,0.77 -0.21,0.27 -0.2,0.16 -2.07,0.07 -0.8,-0.13 -1.47,0.02 -0.2,0.17 -0.22,0.73 -0.18,0.11 -0.52,0.19 -0.34,-0.34 -0.2,0.02 -0.26,0.69 -0.39,0.79 -0.4,0.4 -0.35,0.5 -0.06,0.55 -0.22,0.28 -0.61,0.1 -0.18,0.65 -0.25,0.73 -0.19,0.46 0.29,0.29 0.04,0.52 -0.36,0.27 -0.57,0.88 -0.01,0.27 -1.2,0.34 -0.21,-0.13 -0.66,0.08 -1.3,-0.21 -0.41,0.11 -0.32,0.3 0.35,0.32 0.15,0.94 0.15,0.2 0.2,0 0.23,0.72 0.45,0.14 0.27,0.36 0.04,0.57 -0.08,0.22 -0.8,0.46 -1.21,0.42 -0.31,0.52 -0.18,1.14 -0.43,0.03 -0.17,0.15 -0.14,0.47 -0.71,0.9 -0.19,0.07 -0.95,-0.92 -0.11,-0.27 -0.2,0.07 -0.14,0.29 0.29,0.62 -0.03,0.26 0.47,0.51 0.21,0.05 0.09,0.3 -0.2,0.92 0.3,0.31 0.21,0.94 -0.01,1.33 -0.41,0.1 -0.05,0.38 0,0 -0.32,-0.12 -0.94,0.35 -0.14,-0.27 -0.25,-0.34 -0.09,-0.18 -0.46,0.16 -0.19,0.09 -0.26,0.06 -0.02,0.29 0.02,0.13 -0.19,0.26 -0.35,-0.03 -0.27,0.01 -0.25,-0.04 0.08,-0.37 -0.32,-0.38 0.1,-0.12 0.36,-0.04 0.35,-0.26 -0.63,-0.34 0.28,-0.23 0.24,0.14 0.15,0.04 0.14,-0.1 -0.21,-0.39 0.1,-0.26 -0.3,-0.14 -0.12,-0.04 -0.01,-0.83 -0.28,-0.04 -0.35,0.33 -0.42,-0.24 -0.38,0.17 -0.13,0.08 -0.09,0.21 -0.05,0.29 -0.36,-0.18 0.33,-0.4 0.02,-0.38 0.15,-0.35 0.22,-0.05 0.2,0.11 0.14,0.34 0.33,-0.06 0.57,-0.22 0.13,-0.27 -0.3,-0.12 0.21,-0.39 0.38,-0.6 -0.02,-0.33 -0.39,-0.09 -0.15,0.01 -0.22,0.08 -0.15,0.13 -0.22,-0.14 0.05,-0.25 -0.36,-0.17 0.15,-0.33 0.29,-0.35 -0.52,-0.56 0.51,0.2 0.69,0.34 0.29,0.33 0.35,0.02 -0.08,-0.37 -0.2,-0.41 0.31,-0.27 0.56,0.04 0.23,-0.03 0.09,-0.16 -0.14,-0.34 -0.28,0.04 -0.38,-0.34 0.39,-0.21 0.04,-0.31 -0.8,0.05 -0.49,-0.19 z"},{name:"Fukui",id:"fukui",path:"m 238.25993,258.18889 1.16,0.72 0.07,0.38 0.31,-0.04 0.42,-0.26 -0.65,-0.81 0.2,-0.13 0.54,0.36 0.37,-0.65 -0.58,-0.45 -0.25,-0.84 0.59,0.15 0.43,0.69 0.76,-0.4 0.15,0.35 1.22,-0.36 0.23,-0.43 -0.25,-0.32 0.06,-0.95 -0.43,-0.68 1.24,-0.99 0.39,0.6 -0.23,1.43 0.36,0.54 0.6,-0.11 0.48,-1.52 0.02,-1.28 -0.57,-1.13 -1.52,-1.52 0.08,-1.1 -0.79,-1.19 1.06,-1.27 0.35,-1.49 2.1,-3.09 -0.24,-0.66 0.85,0 1.53,-1.09 0,0 1.68,1.59 0.25,1.25 0.41,0.38 0.9,-0.13 0.65,0.76 0.47,0.05 1.75,-0.42 1.86,1.46 0.24,0.62 1.89,-0.48 0,0 0.21,0.49 -0.49,0.37 -0.25,1.39 0.5,0.37 -0.05,0.53 0.79,0.28 -0.13,0.49 0.64,0.53 0.3,1.22 -0.63,0.46 -0.17,0.78 -1.34,-0.02 -1.13,0.49 -0.42,-0.52 -0.46,0.45 -0.52,-0.17 -0.49,0.44 -0.82,-0.21 -0.56,0.77 -0.3,-0.51 -1.06,0.02 -1.17,-0.42 -0.9,0.48 -0.01,0.97 -0.99,1.64 0,0 -1.81,-0.94 -0.67,0.13 -0.31,0.67 0.83,1.76 -0.13,0.75 -1.1,-0.32 -0.35,1.07 -1.29,0.13 -0.45,0.87 -0.46,0.1 -0.77,-0.77 -1.04,2.77 -0.57,0.28 -0.35,-0.4 -0.66,-0.01 -0.05,0.5 -0.37,0.1 -0.45,0.74 0,0 -1.37,0.26 -1.51,-0.59 -1.73,-0.19 -0.13,-0.87 -1.31,-1.21 0.29,-1 -0.52,-0.42 0.41,-0.9 0,0 0.88,0.17 -0.21,1.09 0.18,0.25 2.58,0.39 1.78,-0.38 0.27,-0.88 -0.65,0.27 -0.03,-0.5 -0.57,-0.11 0.52,-0.59 0.41,-0.08 z"},{name:"Fukuoka",id:"fukuoka",path:"m 133.13993,303.07889 1.24,-1.35 0.14,-0.6 -0.12,-0.36 -0.33,0.01 -0.06,-0.68 0.56,-0.05 0.25,-0.81 0.85,-0.52 -0.08,-0.39 0.78,-0.03 0.25,0.3 1.04,-0.11 0.68,-0.4 0.71,-0.94 1.1,0.45 0.45,-0.34 1.79,0.39 0.43,0.58 0.74,-0.28 0.32,-0.77 1.16,-0.76 0.4,0.31 -0.72,1.35 0.17,0.96 -0.79,0.7 0.22,0.46 0.66,-0.13 0.55,2.53 1.4,2.1 0.56,-0.28 1.08,0.76 0,0 -0.15,0.37 0.3,0.8 -0.39,0.52 0.13,0.46 -1.91,0.11 -0.97,-0.27 -0.93,0.23 -1.61,1.38 -0.3,1.65 -0.49,0.13 -0.47,0.69 0.3,0.16 0.29,0.95 -0.14,0.64 -0.52,0.26 -0.12,0.38 0.36,0.19 -0.03,0.62 0.84,0.73 -0.48,1.38 -0.35,0.25 0,0 -1.53,-0.52 -0.67,-0.61 -0.81,0.04 -0.16,-0.4 -0.53,1.44 -1.5,-0.17 -1.62,1.49 0.18,1.07 -2.14,-0.08 0,0 0.48,-1.1 -0.32,-0.8 -0.74,-0.78 0.03,-0.41 -0.37,-0.19 0,0 0.17,-1.23 0.59,-1.04 1.85,-1.42 0.51,-0.86 0.51,0.03 0.02,-2.25 -0.41,-0.21 -0.74,0.25 -0.99,0.95 -0.62,-0.71 -0.77,-0.17 -1.7,-1.07 -0.48,0.22 -0.86,-0.24 -0.69,0.32 -2.63,-0.08 0,0 0.15,-0.68 1.61,-0.32 0.54,-0.64 0.19,-0.55 -0.42,0.3 -0.15,-0.45 -0.27,-0.16 -0.45,0.24 -0.22,-0.4 1.19,-0.35 0.29,-0.38 -0.12,-0.38 0.85,-0.3 0.15,-0.61 0.59,0.4 -0.25,0.37 0.18,0.42 0.82,0.14 0.11,0.7 0.48,-0.08 0.16,-0.34 0.66,0.07 1.04,-0.49 0.12,-0.84 0.57,-0.23 -0.08,-0.6 -0.59,-0.04 z"},{name:"Fukushima",id:"fukushima",path:"m 341.40993,223.74889 -0.62,0.81 -2.49,1.19 -0.39,0.66 0.04,0.48 0,0 -3.43,-1.04 -0.57,-1.03 -0.34,0.46 0.46,1.3 -1.12,0.49 -1.46,1.4 -0.43,-0.57 -1.14,-0.42 -0.33,-1.16 -0.82,-0.25 -0.76,-1.02 -0.55,-0.03 0,0 -0.33,-0.33 0.16,-1.86 -0.85,0.05 -0.23,-0.94 -1.02,-0.98 -2.39,-1 -2.41,-0.28 -1.36,0.59 -0.18,0.91 -2.79,0.87 -0.26,0.42 -0.79,0.19 -0.23,0.44 -0.63,0.09 -0.92,0.74 -1.36,0.24 -0.71,1.02 -0.94,0.43 0,0 -2.3,-0.72 -0.52,0.2 -0.01,-0.37 0,0 0.24,-0.42 -0.11,-1.34 0.22,-0.78 -0.42,-1.39 0.35,-1.28 -0.47,-0.93 -0.68,-0.16 -0.59,-0.8 0.97,-1.4 0.2,-1.16 0.14,-1.19 -0.67,-0.56 0.57,-0.92 2.15,-0.24 0.55,-0.29 0.68,0.24 0.32,-1.19 0.41,-0.16 0.47,-0.04 0.39,0.32 0.37,-0.24 1.26,0.22 0.48,-0.23 -0.38,-0.82 0.09,-0.81 -0.42,-1.03 0.03,-0.73 1.53,-1.04 -0.13,-0.24 0.71,-1.3 1.58,-1.71 0,0 0.79,-0.18 0.63,0.68 0.94,-0.58 0.61,0.39 0.63,-0.07 0.33,-0.35 0.97,1.68 1.23,-0.46 1.47,1.12 0.74,-0.56 1.3,0.26 1.33,-1.61 -0.55,-0.41 -0.04,-2.01 0.3,-1.71 0,0 1.39,0.66 1.13,-0.57 1.14,0.69 0.37,1.09 2.65,-0.27 0.82,0.28 0.56,0.46 -0.18,1.14 0.28,0.75 0.63,0.5 1.21,0.27 0.15,-0.16 -0.47,-0.39 1.58,0.06 0.13,-0.22 -0.03,-2.17 0.72,-0.27 0.69,0.18 0,0 0.38,1.28 0.71,0.43 0.05,1.28 0.44,0.75 0.55,6.03 0,3.31 -1.4,9.34 z m -3.43,3.16 0,0 0.03,0.01 -0.03,-0.01 z"},{name:"Gifu",id:"gifu",path:"m 251.72993,266.75889 -0.72,-0.69 0.32,-0.21 0.02,-0.93 0.32,-0.52 0.04,-1.34 0.55,-0.44 -0.53,-0.85 0.09,-1 -0.63,-0.64 0.24,-0.89 -0.55,-0.71 -0.31,0.5 -0.78,-0.29 0.12,-1.6 -0.66,-0.07 -0.26,-1.07 0,0 0.98,-1.64 0.01,-0.97 0.9,-0.48 1.17,0.42 1.06,-0.01 0.3,0.51 0.56,-0.77 0.82,0.22 0.48,-0.44 0.52,0.17 0.46,-0.44 0.41,0.52 1.13,-0.49 1.35,0.02 0.17,-0.78 0.62,-0.46 -0.3,-1.22 -0.64,-0.52 0.12,-0.49 -0.79,-0.28 0.05,-0.53 -0.49,-0.37 0.24,-1.39 0.5,-0.37 -0.21,-0.49 0,0 0.5,-1.09 -0.23,-0.74 0.61,-0.23 0.94,-1.67 -0.04,-0.39 -0.76,-0.43 -0.25,-0.58 0,0 0.58,-0.08 0.29,-1.06 0.77,-0.56 0.25,0.59 0.35,-0.36 0.92,0.51 0.34,0.77 -0.26,0.73 0.34,0.08 1.39,-1.22 0.25,-1.15 2.08,-2.02 0.55,-0.02 0.25,0.44 1.46,-0.69 0.59,0.05 0.04,0.88 0.21,0.04 1.35,-0.8 0.28,0.78 1.13,0.35 0.71,-0.34 0.84,0.82 0.94,0.07 0,0 0.13,0.51 1.03,0.66 0.09,0.53 -0.09,0.78 -1.39,1.81 0.38,0.55 -0.05,0.52 -0.75,0.71 -0.01,0.81 0.46,0.5 0.72,0.25 -0.39,1.57 -1,0.76 -0.37,0.92 -0.44,0.1 -0.52,1.06 -0.42,0.07 -0.33,-0.33 -1.15,0.35 -0.35,1.06 -0.59,0.25 -0.11,0.54 0.29,0.39 1.04,0.01 0.05,0.51 1.23,0.37 0.8,1.79 0.78,0.7 -0.43,1.28 0.39,0.45 -0.07,1.1 0.31,0.55 1.07,-0.32 0.57,0.54 0,0.91 -0.65,0.7 0.71,0.98 -0.87,0.29 0.26,1.27 -0.84,0.65 0.01,0.53 0,0 -0.8,0.08 -1.72,1.4 -0.99,-0.49 0.02,-0.32 -0.84,-0.04 0.07,-0.24 -0.75,-0.48 -0.63,0.02 -0.92,0.73 -0.85,0.17 -0.52,-0.71 -0.94,-0.39 -0.3,0.21 -0.32,-0.15 -0.27,-0.32 0.09,-0.49 -0.49,-0.2 0.03,-0.65 -1.18,-0.87 0.02,-0.56 -1.49,1.12 -1.66,0.5 -1.27,-0.15 -1.69,2.98 -0.22,2.19 0,0 -1.08,-0.12 -1.69,-2.5 z"},{name:"Gunma",id:"gunma",path:"m 315.66993,242.52889 -0.31,0.58 -0.49,0.18 -0.52,-0.48 -2.54,0.48 -1.81,-1.34 -0.86,0.21 -0.97,-0.29 -0.6,0.15 -1.69,-0.86 -0.7,-0.05 -1.23,1.97 -0.02,0.93 -0.42,0.76 -1.53,0.07 -0.46,0.78 -1.52,0.4 -0.92,1.01 -1.23,0.02 -0.75,1.01 0,0 -0.36,0.09 -0.36,-0.52 -0.61,-0.19 -0.38,-1.77 0.33,-0.35 -0.28,-0.67 -0.65,-0.08 -0.44,-0.76 0.16,-0.17 0.46,0.33 0.45,-0.48 0.03,-0.81 -0.42,-0.44 -0.23,-1.11 1.03,-0.68 0.07,-1.48 -0.29,-1.15 -0.83,-0.25 -0.7,0.1 -0.44,0.4 -0.88,-0.25 -0.21,0.31 -0.43,-0.07 -1.25,-0.74 -0.06,-1.3 0.6,-1.66 -0.02,-0.99 0.96,-1.18 0.96,-0.16 0.01,-1.09 1.79,-0.36 1.55,-0.83 0,0 0.25,0.17 0.36,-0.63 1.2,0.44 0.79,-0.67 -0.1,-1 0.64,0.03 1.49,-0.62 -0.25,-0.44 0.29,-0.95 0.85,0.11 0.09,-0.26 -0.27,-1.93 1.64,-0.28 0.82,-0.73 0.12,-0.95 1.54,1.55 0.11,0.76 0.92,0.07 0.23,0.34 0,0 0.01,0.37 0.52,-0.2 2.3,0.71 0,0 -0.58,1.54 1.02,0.44 -1.02,1.41 0.28,1.17 -0.59,0.89 -0.18,1.37 1.47,0.74 1.23,-0.07 0.34,0.68 -0.82,0.65 -0.4,1.2 0.33,0.76 -1.19,1.55 -0.18,0.96 1.05,0.78 -0.04,0.58 1.11,0.97 1.01,-0.29 0.71,0.43 1.11,-0.18 0.38,0.24 -0.09,0.28 z"},{name:"Hiroshima",id:"hiroshima",path:"m 177.17993,290.93889 -0.78,-0.7 -1.45,1.75 0.31,0.9 0.76,-0.2 0.32,0.31 -0.15,0.21 -0.7,0.53 -0.28,-0.28 -1.54,0.26 -0.18,-0.59 1.14,-0.63 -0.25,-0.46 0.14,-0.63 0.53,-0.44 0.08,-0.97 -0.71,-1.73 0.15,-0.97 -1.31,-0.65 -2.28,1.04 -0.02,0.37 -1.73,1.61 -0.21,0.51 0.27,0.15 0,0 -0.33,0.19 -1.28,-0.31 -0.5,-1.46 0.08,-0.63 -0.92,-0.78 -0.24,-1.36 0.17,-0.81 -0.3,-0.68 0,0 -0.49,-0.63 0.3,-0.64 0.6,-0.18 0.63,-0.68 0.21,-1.78 0.7,-1.03 -0.55,-0.34 0.3,-0.48 1.45,-0.86 0.31,-1.14 0.79,0.11 0.4,0.48 0.21,-0.44 1.24,-0.13 0.52,0.42 0.51,-0.43 -0.07,-0.25 0.41,-0.14 0.25,0.41 1.63,0.13 1.47,-1.06 1.76,-0.14 -0.01,-0.87 -0.69,-0.21 -0.38,-0.47 0.85,-1 1.19,-0.25 2.4,-3.33 0.4,-0.07 1.15,0.7 0.79,-0.62 0.98,0.79 1.42,-0.42 0.58,0.22 0,0 0,0.26 2.1,-0.32 0.42,0.5 0,0 1.01,1.22 -0.46,1.21 -0.01,1.6 1.6,2 -0.29,1.12 0.41,1.9 -0.01,1.38 1.21,1.65 0.12,1.74 0,0 -0.45,1.24 -0.88,0.09 -0.04,0.9 -0.33,0.31 -2.4,-0.51 -0.04,-0.21 0.57,-0.19 -0.04,-0.6 -0.56,-0.21 0.07,0.43 -0.66,0.3 -1.65,0.67 -0.74,-0.09 -0.23,0.98 -1.26,0.39 -1.28,-0.21 -1.15,0.26 -0.35,0.57 -0.55,0.26 -0.25,-0.56 -0.71,0.08 -0.26,0.86 -0.45,-0.15 -0.04,0.98 -1.16,0.08 -1.31,0.85 z"},{name:"Hokkaido",id:"hokkaido",path:"m 330.00993,71.568887 2.71,-2.13 0.04,-0.59 -1.96,-3.17 -1.38,-0.99 -0.7,-1.16 0.68,-2.54 -0.27,-0.48 1.64,0.11 0.6,-0.42 0.21,-0.54 0.53,-0.21 2.75,2.66 1.93,0.87 1.13,1.28 2.48,-0.47 0.17,-0.42 1.02,-0.32 0.72,0.02 -0.14,1.17 3.04,1.39 2.2,-1.22 1.97,-2.15 0.99,-1.6 0.1,-2.35 -1.38,-2.76 0.54,-1.94 -0.66,-1.44 -0.45,-2.27 1.02,-2.1 1.47,-0.89 0.76,-0.05 2.03,-1.32 0.93,-1.89 0.41,-1.95 -0.35,-7.86 0.5,-0.32 1.64,-3.44 0.21,-2.86 0.38,-0.79 0.13,-1.6 -0.3,-3.27 -0.77,-3.84 -3.04,-7.32 -0.31,-1.1600002 0.07,-0.99 0.86,-1.27 0.79,-1.95 -0.41,-1.4 0.15,-1.28 0.75,0.77 0.13,0.52 0.39,0.16 1.76,-0.28 1.35,-0.94 0.55,-1.99 0.87,-0.31 0.47,0.33 0.56,1.29 0.59,0.34 0.63,1.47 2.32,1.7 2.21,3.12 4.95,5.5600002 3.91,7.23 2.58,2.55 2.44,3.1 5.58,4.4 1.57,0.89 0.33,0.95 1.26,0.96 3.7,1.94 3.24,1.28 5.88,1.69 2.79,0.53 0.44,-0.31 0.29,0.77 -0.06,1.28 0.87,1.55 0.58,0.48 3.21,1.01 3.41,0.21 2.57,-0.32 2.28,-1.99 1.54,-1.92 2.18,-2.04 1.83,-1.26 0.66,-1.45 1.1,-1.16 0.78,-1.38 0.46,0.03 0.45,2.23 -1.21,2.49 -0.91,0.92 -0.6,2.4 -1.73,2.13 -0.94,2.12 0.1,0.83 -0.77,2.05 0.22,1.06 1.35,2.58 1.49,1.97 1.52,5.23 1.49,1.96 -1.16,-0.53 -0.19,-0.53 -1.14,-0.22 -0.24,0.37 0.21,1.26 0.86,-0.67 0.47,0.4 -0.29,0.55 0.37,0.39 0.4,-0.28 2.55,0.62 2.09,-1.7 0.32,-0.6 1.11,-0.71 0.24,-0.5 3.28,0.2 -0.19,0.5 -1.17,0.91 -1.73,0.31 -1.87,1.03 -0.8,2.93 -0.77,-0.36 -1.24,-0.05 -2.71,0.51 -1.51,0.9 -1.26,-0.21 -0.62,0.6 -0.14,1.15 -1.6,2.15 -1.02,0.49 -1.9,-0.1 -0.9,-0.79 0.03,-0.53 0.33,-0.31 -0.55,-0.37 -0.73,0.1 -1.19,1.73 -0.02,0.41 1.15,1.13 -2.01,-0.12 -1.15,-0.35 -3.58,-0.02 -0.69,-0.15 -1.58,-1.27 -3.06,0.54 -2.43,1.18 -3.4,2.53 -5.27,5.27 -4.08,5.8 -1.53,3.31 -0.28,1.67 0.55,1.44 -0.82,3.88 -0.91,1.53 0,1.61 -3.7,-3.72 -4.85,-2.02 -8.09,-4.45 -2.38,-1.67 -1.84,-2.05 -3.21,-0.94 -2.21,-2.05 -1.82,-1.2 -1.83,-0.53 -2.38,-0.04 -3.17,1.04 -2.08,1.29 -2.68,2.28 -1.59,0.89 -2.12,2.45 -0.34,0.75 -1.07,-0.4 -0.33,-0.55 0.38,-0.29 0.59,0.64 0.12,-0.81 -1.35,-0.41 -0.87,-2.37 -0.79,-0.4 -1.07,-1.12 -0.12,-0.58 -1.27,-1.23 -1.24,-0.09 -1.25,0.53 -0.97,-0.59 -1.21,0.03 -1.68,1.81 -1.44,2.75 -0.71,2.55 0.28,1.94 2.32,1.2 2.74,2.35 0.75,0.14 1.37,-0.53 2.04,0.31 1.23,2.21 1.63,1.22 1.08,1.88 3.15,1.36 0.55,0.890003 0.79,0.59 -0.61,0.61 -0.95,0.01 -1.1,1.3 -1.66,0.66 -0.86,-0.79 -2.78,-0.91 -0.93,0.16 -0.28,0.62 -0.41,0.1 -0.18,-0.61 0.68,-0.45 -0.2,-0.67 -0.59,-0.37 -0.86,0.08 -0.41,0.33 -0.43,1.68 -1.44,1.06 -1.29,0.1 -0.35,0.33 -0.31,3.94 -0.4,0.48 -0.94,0.03 -1.96,0.87 -0.9,1.89 -0.39,0.32 -1.02,-0.8 -1.14,0.22 -0.9,-0.71 -1.08,-2.72 -0.09,-0.86 0.41,-1.77 1.35,-3.03 0,-1.05 0.77,0.08 0.29,-0.59 0.31,-2.700003 -0.4,-1.98 -1.9,-2.94 -0.67,-0.36 -1.3,-0.12 -0.51,-1.33 -0.85,-0.88 -1.14,-0.41 -0.39,-0.73 -0.19,-1.39 0.31,-1.12 0.94,-1.03 0.33,-0.95 0.03,-2.65 -0.49,-2.23 0.92,-1.45 1.12,-0.62 2.28,-0.06 0.61,-0.91 1.39,-0.73 0.85,-1.92 0.82,0.57 0.56,0.97 0.89,-0.23 0.09,-1.39 0.82,-0.84 0.85,-1.71 z m 14.72,-61.43 -0.09,-1.2300002 1.28,-1.25 2.07,1.21 0.51,1.8100002 -1.81,1.49 -1.37,-1.07 -0.59,-0.96 z m -31.88,81.17 -0.29,2.22 -0.39,0.63 -0.65,0.23 -0.02,0.36 -0.61,-0.54 0.06,-1.71 -0.42,-1.11 0.74,-1.09 1.91,-0.38 0.46,-0.52 0.03,0.64 -0.82,1.27 z m 30.35,-86.7800002 -0.26,2.59 -0.39,0.13 -0.88,-2.97 0.22,-1.31 -0.61,-0.34 0.09,-0.73 0.65,0.85 0.66,-0.15 -0.02,-0.59 0.34,0.27 0.35,0.78 -0.15,1.47 z"},{name:"Hyogo",id:"hyogo",path:"m 213.21993,277.54889 -1.09,0.9 -1.21,-0.22 0,0 -0.54,-1.37 -1.08,-0.96 -0.18,-0.47 0.7,-1.31 -0.68,-0.85 0.35,-0.32 0.15,-0.91 -0.2,-0.59 0.92,-0.54 0.06,-0.93 0.59,-0.25 0.24,-1.1 0.24,-0.26 0.67,0.07 0.08,-0.78 -0.63,-0.66 0.44,-0.8 0,0 0.58,0.26 1.64,-1.15 -0.26,-1.16 0.15,-0.43 -0.73,-0.96 0.09,-1.08 -0.73,-0.34 -0.49,-1.88 0.12,-1.02 -0.38,-0.77 -0.69,-0.52 0,0 2.13,-0.66 1.22,-0.74 1.2,0.31 0.42,0.47 0.82,-0.67 1.38,0.2 1.28,-0.29 0.45,0.33 0.98,-0.06 0,0 0.02,2.02 0.86,0.8 0.21,0.61 0.72,0.18 1.33,-0.66 0.32,0.54 0,2.63 -0.91,0.52 -1.14,-0.55 -0.37,1 0.02,1.27 1.49,0.61 1.32,1.13 0.76,-0.46 1.02,0.02 0.02,0.78 0.86,0.82 -0.25,0.55 0.55,0.24 0.43,-0.36 0.81,0.04 0.22,0.06 0.04,0.73 0.85,-0.18 0.97,0.49 0.29,1.26 -0.38,0.21 -0.17,0.54 0,0 -0.43,-0.05 -0.29,0.31 0.4,0.24 0.08,0.97 -0.24,0.36 1.4,0.81 0.96,0.14 -0.91,0.51 0.43,0.25 -0.47,2.04 0.74,1.24 0.15,1.43 -0.54,1.21 0,0 -0.44,-0.33 0.14,-0.47 -0.25,-0.52 -0.92,0.32 -0.42,-0.6 -0.97,-0.13 -1.98,0.94 -0.1,0.68 -2.58,0.64 -4.27,-1.72 -1.67,-1.65 -5.72,0.05 z m 9.4,11.08 0.22,0.77 -2.06,0.84 -0.98,0.82 -1.34,0.19 -0.01,-0.45 -0.59,-0.31 0.06,-0.5 -0.43,-0.16 -0.54,-1.01 0.67,-0.96 0.38,0.24 0.47,-0.24 1.33,-2.82 0.4,-0.46 0.41,0.01 0.95,-1.5 0.95,-0.43 0.77,-1.12 0.55,-0.29 0.44,0.83 -0.6,0.72 -0.15,0.77 -1.78,2.33 -0.01,1.54 0.89,1.19 z"},{name:"Ibaraki",id:"ibaraki",path:"m 333.51993,240.30889 -0.1,2.12 0.89,3.27 2.68,5.5 1.63,2.49 0.82,0.47 0.04,0.45 0,0 -2.5,-1.54 -1.11,-1.53 -1.23,-0.26 -1.13,-0.97 -0.91,0.04 -1.08,-0.52 -2.01,0.52 -0.86,0.82 -0.8,-0.23 -0.59,0.4 -0.86,-0.11 -1.02,0.41 -0.58,-0.72 -2.46,-0.86 -1.04,-0.7 -0.2,-0.71 -0.72,-0.24 -1.63,-2.01 -0.33,-0.84 -0.42,-0.03 0,0 -0.39,0.35 -0.39,-0.1 -0.87,-1.96 0.17,-0.89 0,0 0.73,-0.06 1.65,-0.87 0.55,-1.69 1.13,0.28 0.12,-0.88 1,-0.47 0.13,-0.45 1.56,-0.08 0.26,-0.13 0.05,-0.52 0.67,0.24 0.41,-0.46 0.44,-0.02 0.28,0.39 0.67,-0.21 0.21,-1.17 0.92,-1.85 -0.02,-1.81 -0.57,-1.95 0.28,-0.38 0.95,-0.21 0.1,-0.31 -0.63,-1 0.22,-1.3 -0.28,-0.99 0.09,-1.99 0,0 0.55,0.03 0.76,1.02 0.82,0.25 0.33,1.16 1.14,0.42 0.43,0.57 1.46,-1.4 1.12,-0.49 -0.46,-1.3 0.34,-0.46 0.57,1.03 3.43,1.04 0,0 0.04,0.02 0,0 0.03,0.01 0,0 0.18,0.64 -0.63,0.17 -0.49,0.95 -1.18,4 -0.7,1.17 -0.78,2.27 0.16,2.88 -1.04,1.29 z"},{name:"Ishikawa",id:"ishikawa",path:"m 257.72993,221.14889 -0.06,-1.29 -0.32,-0.14 -0.36,0.34 -0.3,-0.28 0.61,-2.33 0.4,-0.35 0,-1.67 0.35,-0.38 1.44,-1.17 1.13,-0.51 1.13,0.28 2.9,-1.48 0.42,-0.58 0.98,-0.48 1.27,-0.17 1.32,-0.71 1.03,0.13 0.47,0.66 -0.24,0.47 0.41,0.81 -0.61,0.29 -1.01,-0.04 -0.53,0.36 -0.28,1.17 0.6,1.05 -0.66,0.98 -1.79,-0.05 -0.89,0.5 -0.57,1.49 -1.16,0.86 -0.56,-0.53 -0.49,-0.08 0.17,-0.61 -0.35,0 -1.46,2.17 0.54,0.23 -0.17,0.62 -0.51,0.12 0.12,0.43 -0.26,0.39 0.56,0.09 0.56,-0.57 1.13,1.11 0.75,-0.65 0.2,-0.68 0.56,0 0.04,3.49 0,0 -1.24,-0.1 -0.72,0.26 -1.4,1.37 -0.6,3.49 -0.55,0.65 -0.16,0.98 0.23,0.46 -0.76,1.23 0.19,1.13 0.46,0.58 -0.75,2.96 0.45,1.88 -0.32,0.42 0.14,0.88 0,0 0.25,0.58 0.76,0.43 0.04,0.39 -0.94,1.68 -0.6,0.23 0.22,0.73 -0.5,1.09 0,0 -1.89,0.48 -0.24,-0.62 -1.86,-1.46 -1.75,0.42 -0.47,-0.05 -0.65,-0.76 -0.9,0.13 -0.41,-0.38 -0.25,-1.25 -1.68,-1.59 0,0 1.1,-1.4 0.92,-0.32 1.41,-1.36 4.47,-6.03 1.09,-1.97 1.33,-3.8 0.04,-2.3 -0.95,-1.48 -0.02,-0.87 z"},{name:"Iwate",id:"iwate",path:"m 359.85993,166.19889 0.42,0.16 0.05,0.45 -0.83,-0.04 0.53,0.53 0.5,-0.01 0.33,0.68 -1.03,0.43 -0.73,-0.03 0.01,0.36 0.49,0.27 0.55,-0.12 0.01,0.24 -0.66,0.53 -0.74,-0.03 -0.26,0.27 1.67,1.04 -0.86,0.3 -1.26,-0.53 0.21,0.97 1.02,0.26 -1.22,0.18 0.74,0.57 -0.27,0.28 -1.09,-0.08 -0.47,0.25 -0.42,-0.47 0.04,-0.57 -0.35,-0.17 0.06,0.61 -0.3,0.44 0.69,0.86 -0.43,0.06 0.11,0.91 -0.47,0.34 -0.72,-0.96 0.25,-0.53 -0.2,-0.19 -0.92,0.09 0.16,0.75 0,0 -1.17,-0.49 -1.44,-0.13 -0.24,0.52 0.11,1.78 -0.68,0.7 0.1,0.51 -0.5,1.94 -2.45,-1 -0.9,0.87 -0.17,0.7 -0.52,0.18 -1.77,-1.01 -0.47,-1.09 0.59,-0.55 -0.25,-0.5 -0.72,-0.2 -2.21,0.25 -0.55,-0.81 -1.44,-0.48 -1.22,-0.91 -0.95,0.14 0,0 -0.08,-1.15 0.79,-1.37 -0.14,-0.4 -0.97,-0.38 0.28,-0.97 -0.27,-0.22 0.47,-0.83 0.6,-0.3 -0.85,-0.44 0.33,-1.06 -1.12,-0.77 -0.53,-0.75 0.15,-0.92 -0.6,-1.25 -0.39,-0.09 0.05,-0.65 0.45,-0.12 -0.05,-0.81 0.78,-0.85 0.43,-1.34 -0.21,-0.72 0.42,-0.11 0.61,-0.86 0.27,0.03 0.51,-1.19 -0.13,-1.08 -0.66,-1.17 0.39,-0.14 0.82,-1.47 -1.12,-0.66 -0.07,-1.06 0.82,-0.45 0.49,0.48 0.56,-0.18 -0.62,-2.5 0.05,-2.68 0.52,-0.46 0.15,-1.56 -0.4,-0.49 0.81,-1.11 0.61,-0.22 0.4,-0.57 0,0 0.46,0.68 0.94,0.01 1,-0.78 0.46,-0.02 0.04,-0.72 0.74,-0.5 1.52,-0.38 1.96,-1.49 0.68,1.08 1.72,-1.1 0.68,-0.09 1.24,0.77 0.89,-0.69 0.11,-0.83 1.39,-0.62 0.47,-0.54 0,0 1.37,2.04 1.54,3.46 -0.98,1.08 1.39,0.6 0.46,0.64 -0.12,0.25 -0.49,0.01 -0.36,0.54 0.11,0.98 0.33,0.48 0.51,0.17 0.49,0.89 0.69,0.12 0.4,0.7 -0.32,1.6 0.72,1.21 0.23,2.98 -0.42,1.69 0.44,0.07 -0.85,2.57 0.25,0 1.33,-1.8 0.02,2.02 0.6,0.08 0.29,0.7 -0.15,0.36 -0.62,0.08 -0.86,1.17 -0.7,0.25 0.43,0.88 1.16,-1.13 0.31,-0.05 0.2,0.37 -0.43,1.33 -1.12,0.26 -0.89,0.6 -0.81,1.19 0.34,0.35 0.79,-0.42 0.44,0.54 -1.7,0.29 0.37,0.39 z"},{name:"Kagawa",id:"kagawa",path:"m 199.67993,288.81889 2.14,-1.22 0.18,-0.96 2.08,0.7 1.61,0.07 1.07,-1.2 0.53,0.38 -0.19,0.96 0.18,0.37 0.36,0.06 0.13,-0.4 0.45,-0.09 1.11,0.23 -0.01,0.41 -0.39,0.31 0.19,0.48 1.13,0.26 0.82,0.63 0.39,-0.06 1.37,1.05 0,0 -0.16,0.96 -0.42,0.22 -1.09,-0.58 -0.28,0.3 -1.63,-0.26 -1.7,0.18 -0.74,0.58 0.06,0.42 -0.32,0.34 -1.24,0.14 -1.17,0.91 -0.47,0 -0.86,-0.97 -1.38,0.25 -0.76,0.29 -0.28,0.5 -0.58,-0.19 -1,0.84 -0.14,0.51 -0.62,0.22 0,0 -1.88,-0.74 0.69,-0.5 0.33,-3.08 -1.51,-1.21 0.07,-0.33 0.31,-0.09 1.59,0.8 0.55,-0.17 1.48,-1.32 z"},{name:"Kagoshima",id:"kagoshima",path:"m 130.42993,355.81889 1.13,-1.89 0.27,-2.34 -0.2,-1.07 -3.09,-3.19 1.13,-2.7 -0.18,-1.09 -0.73,-1.4 0.57,-1.08 -0.72,-0.58 0.21,-0.54 0.84,-0.43 0.52,0.01 0.68,0.46 1.08,-0.1 0.44,-0.96 0,0 0.54,0.26 0.32,0.62 1.04,0.16 0.6,-0.55 0.84,0.01 0.91,-0.41 0.54,-0.76 0.4,0.71 0.57,0.13 0.26,0.49 1.25,0.65 0,0 -0.48,1 0.65,0.23 0.82,0.79 0.42,1.42 1.08,0.35 0.74,0.85 -0.12,1.26 -0.2,0.07 0.17,0.88 0.65,0.1 0.3,0.36 1.08,0.13 -0.18,0.61 0.79,0.19 0.16,1.57 0.55,0.97 0.5,-0.58 0.71,0.64 0.96,-0.11 0.47,0.29 0.3,0.92 -0.25,0.62 0.19,0.84 -0.62,0.66 -0.12,0.72 0,0 -1.17,-0.42 -0.99,0.78 -0.7,1.09 -0.08,0.8 1.77,0.61 0.02,0.43 -0.65,0.71 0.18,0.18 0.79,-0.28 0.12,0.25 -1.27,1.13 -1.01,0.03 -0.21,0.84 -0.79,1.17 -1.76,0.98 -1.44,0.25 -2.74,2.05 0.36,-1.36 -0.51,-0.4 1.8,-1.39 0.44,-1.12 -0.25,-0.72 0.7,-0.89 0.27,-1.93 -0.94,-2.06 -0.46,-0.6 -0.67,-0.28 0.11,-1.94 -1.35,0.03 -0.87,-0.82 0.68,-0.91 1.05,-0.2 0.74,0.62 -0.11,0.83 1.06,0.09 1.13,-2.06 -0.49,-1.1 -2.67,-0.78 -0.84,0.67 -0.22,1.19 -0.93,1.34 0.15,0.54 -0.7,1.47 -0.24,-0.03 -0.16,0.98 0.26,1.32 0.8,2.06 1.07,0.98 0.89,0.23 -0.52,1.76 -1.03,0.74 -0.62,-0.49 -0.76,0.29 -0.24,-0.29 0.06,-0.82 -0.96,-0.85 -2.12,0.02 -0.86,-0.37 -1.86,0.41 -0.18,-1.48 -0.64,-0.23 0.72,-0.55 -1.54,-1.48 0.54,-0.66 0.26,0.48 1.03,0.51 0.76,-0.54 z m 4.64,21.96 1.42,0.63 -0.06,0.33 1.37,0.37 0.67,0.63 -0.38,1.76 -1.31,1.32 -1.24,0.3 -1.69,-0.28 -0.26,-0.79 -0.22,0.18 0.01,-0.69 -0.45,-0.58 -0.27,-1.14 0.04,-0.47 0.94,-0.08 0.74,-0.91 0.01,-0.47 0.55,0.09 0.11,-0.37 0.02,0.17 z m 8.86,-2.67 -0.18,-2.06 0.82,-1.3 0.3,0.01 0.15,-1.34 1.06,-1.27 0.51,1.14 -0.24,0.56 0.16,1.58 -0.51,0.72 0.08,1.15 -0.48,0.63 0.04,0.47 -0.69,0.42 -0.74,1.52 0.14,0.28 -0.22,0.25 0.43,0.52 -0.23,0.47 0.27,0.35 -0.33,0.12 -0.01,0.46 -0.81,-0.01 -1,0.68 -0.3,-0.58 0.17,-0.88 -0.34,-1.35 0.48,0.01 1.47,-2.55 z m -24.13,-24.35 -0.77,0.47 -0.41,-0.29 -0.13,-0.56 0.37,-0.21 0.39,-1.12 1.32,-0.49 0.43,-1.24 0.36,0.17 -0.05,0.49 -0.63,1.15 -0.6,0.18 0.11,0.41 -0.38,0.41 0.26,0.32 -0.27,0.31 z m 2.16,-4.5 -0.32,-0.56 0.35,-0.47 0.54,0.08 0.38,0.49 0.85,-0.19 0.12,0.38 -0.03,0.6 -0.91,0.3 -0.51,-0.27 0.08,-0.33 -0.4,-0.33 -0.15,0.3 z m 7.82,31.36 0.69,0.49 -0.01,0.26 -0.4,-0.07 -0.67,0.39 -0.38,-0.45 0.08,-0.48 -0.5,0.13 -0.53,-0.75 1.72,0.48 z"},{name:"Kanagawa",id:"kanagawa",path:"m 301.02993,262.33889 0.41,-1.13 1.79,-0.83 0.46,-0.65 0.71,-0.1 0.49,-0.52 0.34,-0.7 0.02,-2.61 0,0 0.6,0.13 0.46,0.55 0.61,-0.03 0.59,0.99 0.86,-0.16 2.17,0.71 1.35,1.89 0.3,-0.03 0.19,-2.02 -0.79,-0.62 0.22,-0.23 0.49,0.47 0.76,-0.91 2.68,1.27 0.33,0.67 0.48,0.23 0.01,0.38 0,0 0.64,-0.19 0,0 0.01,0 0,0 0.03,0 0,0 0.02,0 0,0 0.42,0.73 -1.49,0.78 -0.74,-0.06 -0.41,0.41 0.38,0.45 0.4,-0.12 0.4,0.29 -0.41,0.88 -0.35,-0.25 -0.47,0.08 -0.1,0.39 0.49,0.26 0.27,1.32 -0.34,0.7 0.96,0.78 1.07,0.23 -0.43,1.06 -0.71,0.09 -0.65,0.55 0.12,0.59 0.34,0.09 -0.04,0.43 -1.34,-0.03 0.15,-1.18 -0.33,-1.18 -0.63,-0.68 0.06,-0.63 -2.54,-0.62 -2.45,0.34 -2.12,0.66 -1.16,0.93 -0.17,2.09 -0.64,0.35 0,0 -1.52,-0.21 -0.13,-0.68 -0.7,-0.54 -0.24,-1.51 0.57,-0.63 0.27,-0.96 -0.34,-1.53 -0.15,-0.24 -1.53,0.01 z"},{name:"Kochi",id:"kochi",path:"m 186.50993,317.65889 -0.24,1.03 -1.01,-0.35 -0.6,0.44 -0.44,1.59 0.34,1.66 -1.14,0.48 -0.02,1.1 1.03,0.63 0.33,1.48 -0.31,0.05 -1.68,-1.5 -0.77,-0.11 -0.35,0 -1.21,1.04 -0.59,-0.36 -0.28,0.2 -0.91,-1.06 -1.59,0.88 -0.09,-0.84 0.68,-1.01 -0.05,-0.36 1.16,-1.26 -0.24,-0.38 -0.83,0.07 0.05,-0.38 0.41,-0.1 0.01,-1.33 -0.51,-1.25 0.2,-0.92 -0.76,-0.86 -0.27,-0.88 0.34,-0.37 1.05,1.18 0.19,-0.07 0.85,-1.38 0.6,-0.17 0.49,-1.66 1.21,-0.42 0.89,-0.67 -0.04,-0.57 -0.71,-0.51 -1.08,-2.18 0.73,-0.41 2.17,0.26 1.2,-0.34 0.94,-1.42 -0.32,-0.8 0.62,-1.84 0.83,-0.38 0.06,-0.55 0.75,-0.9 0.65,-1.48 0.54,0.33 0.52,-0.19 0.59,-1.01 4.34,0.04 0.97,-1.2 0.71,0.3 0.47,-0.33 1.06,0 0,0 0.37,0.54 1.34,0.52 1.81,-0.17 0.65,0.9 0.79,0.32 0.61,-0.2 0.42,-0.81 0.39,-0.13 0.25,0.46 0.7,-0.17 0.51,1.26 0.1,2 1.97,0.05 0.23,0.8 -0.47,0.54 0.1,0.47 0.78,1.19 2.11,0.22 0,0 -1.88,3.58 -0.65,3.57 -0.74,-1.21 -0.61,0 -0.12,-0.73 -0.98,-1 -0.43,-1.03 -1.41,-0.68 -0.51,-1.08 -3.23,-0.6 -0.45,-0.55 -3.15,0.5 -0.25,0.47 -2.33,1.17 0.02,0.64 -2.19,0.41 -0.55,1.07 -0.25,-0.58 -0.92,0.3 0.08,0.62 -0.27,0.28 0.21,0.44 -0.34,0.8 0.34,-0.09 0.07,0.53 -0.33,0.19 0.19,0.56 -0.9,0.94 0.25,0.73 -0.24,0.15 -0.07,-0.4 -0.44,0.03 -1.52,2.22 z"},{name:"Kumamoto",id:"kumamoto",path:"m 139.62993,340.21889 -1.25,-0.65 -0.26,-0.49 -0.57,-0.13 -0.4,-0.71 -0.54,0.76 -0.91,0.41 -0.84,-0.01 -0.6,0.55 -1.04,-0.16 -0.32,-0.62 -0.54,-0.26 0,0 0.18,-1.08 1.04,-1.13 1.25,-2.63 1.66,-1.67 -0.12,-0.96 -0.38,-0.03 -0.07,-0.45 0.67,0.03 0.13,-0.22 -0.9,-0.55 2.44,-2.42 -0.23,-0.2 -1.11,0.46 -2.62,0.1 0.01,-0.38 2.72,-1.83 -0.02,-1.52 0.23,-0.35 -0.85,-1.16 -0.77,-0.18 -0.13,-0.75 -1.46,-0.68 -0.32,-1.75 -0.57,-0.48 0,0 2.14,0.08 -0.18,-1.07 1.62,-1.49 1.5,0.17 0.53,-1.44 0.16,0.4 0.81,-0.04 0.67,0.61 1.53,0.52 0,0 -0.01,0.29 0.87,0.17 0.6,0.79 0.63,0.05 0.4,0.63 0.38,0.01 0.49,-0.63 0.18,-0.85 -0.83,-1.21 0.13,-0.74 1.02,-0.56 1.41,0.26 1.04,1.09 0.19,1.17 0.86,0.78 0.59,1.62 0.21,2.27 1.4,1.27 0,0 -1.26,0.16 -0.56,1 -0.03,0.9 -0.97,0.64 -0.2,0.93 -0.59,0 -0.36,0.54 -0.25,1.41 -0.46,0.34 -0.71,-0.21 -0.29,0.72 -0.4,0.17 -0.25,1.38 0.25,1.13 0.42,0.68 0.44,0.09 0.19,1.15 0.76,0.68 -0.63,1.03 -0.56,0.03 -0.2,0.59 1.15,1.34 0.17,0.91 -0.88,0.11 -1.11,-0.36 -0.7,1.19 -0.4,0.13 -0.85,-0.35 -1,0.71 -2.57,-0.05 z m -6.02,-9.78 0.47,-0.07 -0.23,1.28 -0.54,0.76 0.28,0.09 -0.56,0.85 -0.83,0.38 -1.19,-0.52 -0.9,0.08 -0.06,-0.38 -0.51,-0.17 -0.39,0.4 0.5,0.4 0.05,0.44 -0.43,0.99 -1.86,1.35 -0.23,0.86 -1.06,0.71 0.05,0.96 -0.47,0.17 -0.66,-1.1 0.25,-0.87 -0.73,-0.21 0.65,-1.42 -0.44,-0.58 -0.02,-0.72 1.19,-2.41 0.18,-1.13 1.39,-0.65 1.41,-0.15 0.24,0.28 -0.15,0.92 0.26,1.03 1.62,-0.81 0.6,-0.72 0.87,-0.27 0.57,0.37 0.68,-0.14 z m -5.17,7.12 -0.08,-0.71 0.58,-0.59 -0.22,0.96 0.66,1.7 -0.46,0.28 -0.47,1.24 -1.02,-0.82 0.08,-0.75 -0.34,-0.36 0.14,-0.87 1.13,-0.08 z m 5.67,-7.95 -0.53,0.27 -0.36,-0.16 -0.22,-0.87 0.96,-0.89 0.33,0.88 -0.32,0.42 0.14,0.35 z"},{name:"Kyoto",id:"kyoto",path:"m 231.14993,270.89889 0.17,-0.53 0.37,-0.21 -0.29,-1.26 -0.97,-0.49 -0.86,0.18 -0.04,-0.74 -0.22,-0.06 -0.81,-0.04 -0.42,0.36 -0.56,-0.24 0.25,-0.55 -0.86,-0.83 -0.02,-0.77 -1.02,-0.03 -0.77,0.47 -1.32,-1.14 -1.49,-0.61 -0.02,-1.26 0.37,-1 1.14,0.55 0.91,-0.52 0.01,-2.63 -0.33,-0.54 -1.33,0.66 -0.72,-0.18 -0.21,-0.61 -0.86,-0.8 -0.02,-2.02 0,0 0.26,0.3 0.97,-0.02 0.59,-0.3 0.45,-0.78 0.81,0.06 1.92,-1.35 1.89,-0.6 1.08,0.68 0.66,1.2 -1.07,1.01 -0.19,0.74 -1.09,1.32 0.06,0.6 0.3,-0.01 0.59,-0.97 0.61,0.34 0.13,0.17 -0.64,0.55 1.35,0.61 0.25,-0.33 0.14,1.38 0.48,-0.48 0.84,0.21 0.05,-0.51 -1.26,-0.79 0.85,-0.68 0.93,-0.11 0.15,-0.58 0.35,-0.01 0.01,0.57 0.41,0.25 0,0 -0.41,0.89 0.52,0.42 -0.29,1.01 1.31,1.21 0.13,0.87 1.73,0.19 1.5,0.59 1.37,-0.26 0,0 1.18,1.84 0.42,-0.01 -0.38,1.44 0.43,2.11 -0.31,1.74 -0.34,0.25 0.29,1.17 0.89,1.51 -0.24,1.07 0.71,0.47 0.73,-0.38 0.13,0.88 0.31,-0.05 0.3,0.37 0.4,-0.15 0.61,0.6 -0.26,0.26 0.15,0.41 0,0 0.45,1.2 0,0 -0.34,0.75 -0.58,-0.08 -0.49,-0.67 -0.99,-0.01 0.08,-0.36 -0.74,1.13 -0.73,0.08 -1.92,-0.52 -0.52,-1.22 0,0 0.28,-0.62 -1.02,-1.15 -0.31,-1.06 -1.24,-1.15 0,-0.62 -0.75,-0.02 -0.26,0.68 0.38,0.42 -0.79,0.26 -0.69,-0.73 -0.25,0.11 -0.07,-1.16 -2.16,-0.6 z"},{name:"Mie",id:"mie",path:"m 257.23993,288.86889 -0.19,0.13 0.66,-1.2 -0.57,-0.33 -0.66,1.41 -1.1,0.74 -0.37,0.05 -0.27,-0.79 -0.28,0.09 -0.23,0.84 -0.09,-0.69 -0.7,-0.01 0.28,0.94 -0.22,0.24 -2.95,0.72 -0.41,-0.11 -0.64,0.55 -0.55,1.01 0.35,0.61 0.42,-0.06 -0.35,0.69 -0.61,0.1 -0.37,-0.54 -0.41,0.11 0.18,0.32 -0.7,0.24 0.18,0.32 0.68,-0.1 0.01,0.68 0.72,0.37 -0.17,1.2 -0.66,0.09 -0.78,1.13 -0.94,0.18 -0.41,0.66 -0.61,-0.03 -1.06,1.88 -0.72,2 0,0 -1.29,-0.27 -1.7,-1.94 0.07,-1.92 0,0 1.1,-1.72 1.21,-0.39 0.83,-1.12 1.62,0.25 -0.14,-1.33 0.24,-0.27 0.12,-1.75 -0.37,-0.68 0.73,-1.36 -0.69,-1.15 0.67,-0.36 -1.16,-1.85 0.5,-0.95 2.18,-0.32 0.39,-0.94 -0.29,-0.96 -0.65,0.26 -0.46,-1.01 -0.82,0.27 -1.04,-0.51 -0.26,-0.41 0.44,-1 -0.05,-0.6 0.38,-0.52 -0.8,-1.57 0,0 -0.45,-1.21 0,0 1.34,-0.55 -0.07,-0.51 0.77,-0.63 -0.08,-0.25 -0.62,-0.05 -0.07,-0.25 0.47,-0.39 0.32,0.38 1.02,-0.02 1.34,0.66 2.33,-1.13 0.21,-0.92 0.79,-1.1 0.04,-1.38 0.73,-2.5 -0.71,-0.73 -0.08,-0.85 0,0 0,0 0,0 2.21,-0.95 1.7,2.49 1.08,0.12 0,0 0.32,1.21 0.97,1.57 0,0 -0.76,0.2 -0.92,0.69 -0.36,1.02 0.26,1.12 -1.93,2.95 -0.56,1.63 0.06,0.66 0.67,0.29 -0.38,1.33 2.1,0.61 0.28,0.68 1.28,0.47 1.08,0.81 1.18,0.03 0.22,0.65 0.56,0.13 -0.21,0.28 0.16,0.28 0.71,-0.13 0.28,0.29 0.08,0.73 -1.13,0.67 0.11,0.33 0.63,0.14 -0.63,0.71 0.29,0.47 -0.46,1.27 -0.97,0.27 -1.37,-0.47 1.08,-0.16 0.54,0.27 0.07,-0.65 -0.48,-0.12 -0.27,0.2 -1.46,-0.34 -0.53,0.36 z"},{name:"Miyagi",id:"miyagi",path:"m 343.28993,189.88889 -0.41,0.71 0.32,0.25 0.34,-0.15 0.18,0.65 -1.26,0.75 -1.71,3.62 -0.4,3.7 0.32,1.95 0,0 -0.69,-0.18 -0.72,0.27 0.03,2.17 -0.13,0.22 -1.58,-0.06 0.47,0.39 -0.15,0.16 -1.21,-0.27 -0.63,-0.5 -0.28,-0.75 0.18,-1.14 -0.56,-0.46 -0.82,-0.28 -2.65,0.27 -0.37,-1.09 -1.14,-0.69 -1.13,0.57 -1.39,-0.66 0,0 -0.06,-1.98 1.72,-0.01 0.99,-0.55 0.19,-1.02 1.11,-1.58 -0.23,-1.23 0.16,-1.02 1.05,-1.32 -0.16,-0.6 1.09,-1.14 0.61,-1.6 -0.2,-0.7 -0.6,-0.39 -0.27,-0.91 0.38,-0.65 -0.03,-0.54 -0.61,-1.37 0.1,-0.23 0.66,0.35 0.4,-0.1 0.43,-1.15 -0.22,-0.97 0.68,-1.1 -0.83,-0.45 -0.19,-1.06 -1.06,-1.02 0.23,-0.35 0,0 0.27,0.18 1.76,-0.36 1.64,-1.57 0.71,-0.17 0,0 0.95,-0.14 1.22,0.91 1.44,0.48 0.55,0.81 2.21,-0.25 0.72,0.2 0.25,0.5 -0.59,0.55 0.47,1.09 1.77,1.01 0.52,-0.18 0.17,-0.7 0.9,-0.87 2.45,1 0.5,-1.94 -0.1,-0.51 0.68,-0.7 -0.11,-1.78 0.24,-0.52 1.44,0.13 1.17,0.49 0,0 0.85,2.85 -0.38,-0.12 -0.51,-0.82 -0.69,0.2 -0.09,1.67 -1.36,0.84 -0.15,0.56 1.02,0.68 -0.05,1.21 -0.71,-0.64 -1.01,0.94 -0.6,0.18 -0.03,0.72 1.72,0.21 -0.12,0.68 -0.72,0.64 -0.47,0.05 0.03,0.49 0.45,0.2 0.16,0.54 0.48,-0.17 0.61,0.36 -0.29,0.95 -0.47,-0.65 -0.36,0.11 0,1.65 -0.93,-0.02 0.36,0.32 0.12,0.94 1.33,-0.16 0.03,0.29 -0.66,0.12 0.69,1.8 -0.34,0.98 -1.46,-1.06 0.26,-0.52 -0.93,-0.27 0.26,-0.45 0.57,-0.22 -0.54,-0.64 -1.13,0.38 -0.17,-0.66 -0.27,-0.11 -0.97,-0.06 -1.56,0.45 -1.25,0.84 0.12,0.92 -0.54,0.17 -0.07,-1.38 -0.92,-0.12 -0.51,0.31 0.02,0.4 z"},{name:"Miyazaki",id:"miyazaki",path:"m 154.90993,341.45889 -1,3.38 -0.15,1.45 0.83,1.17 -0.56,1.56 0.06,2.02 -0.79,0.46 -0.9,2.09 0.24,0.8 -0.55,0.34 0.19,0.96 -0.78,0.73 0.34,0.71 -0.51,0.03 -0.52,-0.46 -0.88,0.08 -0.68,-1.51 -1.05,-0.26 0,0 0.12,-0.72 0.62,-0.66 -0.19,-0.84 0.25,-0.62 -0.3,-0.92 -0.47,-0.29 -0.96,0.11 -0.71,-0.64 -0.5,0.58 -0.55,-0.97 -0.16,-1.57 -0.79,-0.19 0.18,-0.61 -1.08,-0.13 -0.3,-0.36 -0.65,-0.1 -0.17,-0.88 0.2,-0.07 0.12,-1.26 -0.74,-0.85 -1.08,-0.35 -0.42,-1.42 -0.82,-0.79 -0.65,-0.23 0.48,-1 0,0 2.57,0.05 1,-0.71 0.85,0.35 0.4,-0.13 0.7,-1.19 1.11,0.36 0.88,-0.11 -0.17,-0.91 -1.15,-1.34 0.2,-0.59 0.56,-0.03 0.63,-1.03 -0.76,-0.68 -0.19,-1.15 -0.44,-0.09 -0.42,-0.68 -0.25,-1.13 0.25,-1.38 0.4,-0.17 0.29,-0.72 0.71,0.21 0.46,-0.34 0.25,-1.41 0.36,-0.54 0.59,0 0.2,-0.93 0.97,-0.64 0.03,-0.9 0.56,-1 1.26,-0.16 0,0 0.48,0.58 0.38,0.01 2.02,-0.7 0.83,0.86 -0.18,0.47 0.19,0.29 0.9,0.3 0.52,-0.44 2.23,0.02 0.49,-0.58 0.15,-0.74 0.8,-0.15 1.64,0.62 -0.26,1.56 0.56,0.01 0,0 -0.23,0.52 -1.56,0.97 -0.59,1.67 -1.08,0.53 -0.4,0.87 0.23,0.63 0.73,0.53 -0.66,0.54 -0.9,0.17 0.19,0.55 0.59,0.35 -0.92,0.36 -1.17,2.78 -1.55,5.64 z"},{name:"Nagano",id:"nagano",path:"m 274.32993,265.08889 -0.01,-0.53 0.84,-0.65 -0.26,-1.27 0.87,-0.29 -0.71,-0.98 0.65,-0.7 0,-0.91 -0.57,-0.54 -1.07,0.32 -0.31,-0.55 0.07,-1.1 -0.39,-0.45 0.43,-1.28 -0.78,-0.7 -0.8,-1.79 -1.23,-0.37 -0.05,-0.51 -1.04,-0.01 -0.29,-0.39 0.11,-0.54 0.59,-0.25 0.35,-1.06 1.15,-0.35 0.33,0.33 0.42,-0.07 0.52,-1.06 0.44,-0.1 0.37,-0.92 1,-0.76 0.39,-1.57 -0.72,-0.25 -0.46,-0.5 0.01,-0.81 0.75,-0.71 0.05,-0.52 -0.38,-0.55 1.39,-1.81 0.09,-0.78 -0.09,-0.53 -1.03,-0.66 -0.13,-0.51 0,0 0.9,-0.86 0.42,-0.81 -0.02,-0.75 0.39,-0.53 0.61,-0.17 -0.12,-0.49 -0.21,0.04 0.11,-0.77 1.18,-0.7 0.2,-4.18 0,0 1.37,-1.05 0.78,-1.31 -0.08,-1.29 1.01,-0.09 1.86,0.39 0.37,0.56 -0.55,1.3 0.95,0.69 0.93,-1.06 1.24,-0.03 1.01,-0.65 0.85,0.06 0.29,0.62 0.24,-0.04 0.26,-1.65 1.19,-0.53 0.73,-1.57 2.57,-0.81 0.81,0.23 0.42,0.94 0.04,1.55 1.03,1.09 0.98,0.45 -0.14,0.73 0.23,0.45 -0.52,0.86 0.38,0.24 0.12,0.48 0,0 -1.55,0.83 -1.79,0.36 -0.01,1.09 -0.96,0.16 -0.96,1.18 0.02,0.99 -0.6,1.66 0.06,1.3 1.25,0.74 0.43,0.07 0.21,-0.31 0.88,0.25 0.44,-0.4 0.7,-0.1 0.83,0.25 0.29,1.15 -0.07,1.48 -1.03,0.68 0.23,1.11 0.42,0.44 -0.03,0.81 -0.45,0.48 -0.46,-0.33 -0.16,0.17 0.44,0.76 0.65,0.08 0.28,0.67 -0.33,0.35 0.38,1.77 0.61,0.19 0.36,0.52 0.36,-0.09 0,0 -0.1,0.46 0.52,1.05 -0.2,0.52 0,0 -0.4,-0.01 -0.73,0.94 -0.97,0.01 -0.54,-1.14 -1.76,-0.03 -0.22,0.41 -0.48,0.09 -0.48,-0.53 0.01,-0.67 -1.43,-0.58 -1.77,2.71 -0.72,-0.62 -0.2,0.12 -0.97,1.97 0.88,0.86 -1,1.1 0.73,1.77 0,0 -0.58,1.64 -0.36,-0.14 -0.56,0.65 0.33,0.26 -0.41,0.56 0.42,1.31 -0.74,0.26 0,0.67 0.53,0.67 -0.14,0.72 -1.65,0.63 -1.21,1.01 -1.28,0.64 -0.21,0.43 -0.51,0.01 -0.46,0.93 -1.07,0.11 0,0 -0.84,0.26 -0.22,-0.39 -1.55,-0.3 -0.86,0.56 -1.25,0.26 0,-0.51 -0.63,-0.81 z"},{name:"Nagasaki",id:"nagasaki",path:"m 130.35993,322.23889 0.95,-0.14 0.49,0.36 0.88,1.71 0,1.1 -0.61,0.8 0.23,0.31 -0.21,0.49 -1.61,0.6 -0.66,0.85 -1.27,0.47 0.03,-0.68 -0.8,-0.49 0.08,-0.87 1.41,-1.12 0.06,-0.61 -0.47,-0.25 0.19,-0.42 -0.26,-0.29 -1.86,-0.03 -1.08,0.71 -1.53,-0.09 -0.19,0.99 -0.94,1.49 -0.96,0.57 -0.84,1.1 -1.31,0.48 0.24,-0.54 0.59,-0.24 1.01,-3.05 -1.29,-1.53 0.19,-0.45 -0.56,-0.09 -0.18,0.41 -0.9,-0.87 -0.6,-1.76 -0.63,-0.82 -0.07,-0.57 0.46,-0.73 0.23,-1.58 0.97,-0.27 0.56,0.72 -0.15,1.17 0.39,0.09 0.25,-0.42 1.01,0.62 0.02,1.63 -0.38,-0.01 0.15,0.72 -0.32,0.66 0.59,0.06 0.59,0.76 0.97,-1.13 1.63,1.03 0.57,-0.25 -1.53,-1.8 0.39,-1.47 -0.38,-0.94 -1.4,-0.94 -1.56,0.12 -0.83,-0.39 -0.32,-2.01 -0.45,0.09 0.22,0.81 -0.88,0.59 -0.19,-0.72 0.64,-0.08 -0.23,-0.69 -0.82,-0.06 -0.34,-0.68 -0.73,-0.49 -0.55,0.01 0.13,-0.89 0.58,-0.42 -0.26,-1.42 0.4,-1.14 0.59,0.46 0.9,-0.88 0.29,0.27 -0.35,0.53 0.19,0.27 0.75,0.15 0.66,-0.46 0.34,0.32 0.33,-0.45 0.21,0.84 0,0 -0.59,0.99 1.05,1.38 0.03,1.26 1.38,0.58 1.02,-0.1 0.36,0.87 -0.1,0.42 -0.52,0.1 -0.05,0.36 1.15,0.77 1.55,1.65 2.8,0.68 0,0 -0.05,0.6 -0.68,0.34 -0.8,0.93 0.85,0.74 1.74,-0.7 z m -18.32,-34.3 0.35,-1.14 -0.56,0.71 -1.32,-0.05 -0.5,-0.3 0.52,-0.14 0.28,-0.44 0.13,-1.99 0.67,-1.35 0.41,-0.18 -0.02,-0.42 -0.78,-0.11 -0.03,-0.37 0.37,-0.44 0.3,-1.43 1.44,-0.07 0.39,-0.96 0.71,-0.35 0.65,0.29 0.31,0.61 -0.55,1.46 0.07,1.24 -0.76,1.21 -1.3,1.23 0.57,0.97 -0.26,1.12 0.49,0.06 0.11,0.29 -0.88,0.74 0.03,0.4 0.38,0.16 -0.67,0.63 -0.61,-0.13 -0.91,3.46 -1.37,1.09 -0.2,-0.45 -0.72,0.01 0.76,-5.44 0.48,0.3 -0.12,0.61 0.85,-0.28 0.02,-0.39 1.27,-0.16 z m -9.63,37.35 0.14,1.19 0.94,0.82 -0.08,0.33 -1.45,0.1 -0.22,-0.45 -0.74,0.25 -0.15,0.58 0.51,0.27 0.11,0.39 -0.43,0.44 -0.38,-0.13 -0.35,-0.67 -1.600004,0.39 -1.11,-0.51 0.27,-0.82 0.2,0.3 0.96,-0.41 -0.44,-0.67 -0.17,-1.9 0.33,-0.45 0.47,0.04 0.54,0.68 2.000004,-1.13 -0.01,0.47 0.66,0.89 z m 5.18,-7.19 -0.31,1.55 0.65,-0.04 0.87,-0.58 0.32,0.14 0.03,0.57 -1.71,1.49 0.08,1.28 -0.69,-0.06 -0.13,1.09 -0.32,-0.16 0.31,-1.54 -0.46,-1.31 -0.27,0.3 -0.6,-0.27 0.41,-0.77 0.7,0.02 -0.12,-1.21 1.19,-1.24 -0.16,-0.96 0.38,-0.99 0.16,1.34 -0.33,1.35 z m 8.27,-7.75 0.31,0.1 0.06,-0.34 -0.55,0.01 0.15,-0.38 0.63,-0.08 0.16,0.66 -0.19,0.26 0.32,0.31 -0.47,0.21 -0.03,0.42 -0.45,0.1 0.22,0.36 -1.35,2.28 -1.85,1.04 -0.41,-0.28 0.07,-0.54 0.38,0.44 0.44,-0.03 -0.28,-0.88 0.92,-0.52 -0.45,-0.59 0.77,-1.26 1.29,-1.3 0.31,0.01 z m -13.11,12.54 0.83,0.52 -0.43,1.36 -0.75,-0.49 -0.08,-1.28 0.43,-0.11 z m 2.94,-0.38 -0.53,-0.26 -0.4,-0.66 0.71,0.1 -0.37,-0.54 0.2,-0.33 0.9,0.82 -0.11,1.23 -0.4,-0.36 z m 2.64,-10.19 -0.02,0.42 0.32,0.14 -0.56,0.28 0.04,0.24 -1.14,-0.24 -0.06,-0.27 0.44,-0.38 0.58,-0.03 0.05,-0.32 0.35,0.16 z m -3.98,11.59 -0.16,-0.41 -0.35,-0.08 -0.02,-0.42 -0.82,-0.53 0.33,-0.36 0.57,0.16 0.26,0.74 0.37,-0.81 0.18,0.07 0.13,0.43 -0.44,0.54 0.2,0.29 -0.25,0.38 z m 9.2,-13.4 0.55,-1.66 0,2.09 -0.72,-0.1 0.17,-0.33 z m 3.33,-2.56 -0.45,0.29 -1.1,-0.06 1.17,-0.93 0.54,0.35 -0.16,0.35 z m -10.14,6.9 -0.23,0.13 -0.39,-0.31 0.32,-0.54 0.43,0.27 0.59,-0.18 -0.18,0.68 -0.54,-0.05 z"},{name:"Nara",id:"nara",path:"m 244.43993,278.17889 0.8,1.57 -0.38,0.52 0.05,0.59 -0.43,1.01 0.26,0.41 1.03,0.5 0.82,-0.27 0.47,1.01 0.65,-0.27 0.29,0.96 -0.39,0.95 -2.18,0.32 -0.5,0.95 1.15,1.85 -0.66,0.36 0.69,1.16 -0.72,1.36 0.37,0.68 -0.13,1.75 -0.24,0.27 0.14,1.33 -1.62,-0.25 -0.82,1.11 -1.21,0.39 -1.1,1.72 0,0 -2.01,0.34 -0.66,-0.41 -0.66,-0.01 -1.15,0.68 -0.22,-0.57 -0.37,-0.13 0.71,-1.83 -0.28,-0.51 -0.58,-0.21 0.06,-0.52 -1.14,-0.96 0.12,-0.54 1.5,-1.45 0.38,-0.58 -0.01,-0.71 0.54,-0.27 0.81,0.37 0.39,-0.6 -0.21,-0.65 -0.89,-0.5 -0.2,-1.72 -0.4,-0.68 0,0 0.61,-0.37 0.19,-1.1 -0.08,-1.17 -0.53,-1.25 0.57,-0.9 -0.21,-0.45 -0.38,-0.07 0.51,-2.37 0.51,-0.44 0.16,-1.36 0.35,0.06 0,0 0.52,1.22 1.92,0.52 0.73,-0.08 0.74,-1.13 -0.08,0.36 0.99,0.01 0.49,0.67 0.58,0.08 z"},{name:"Niigata",id:"niigata",path:"m 287.08993,219.25889 1.85,-1.22 2.56,-2.64 2.31,-1.3 2.29,-3.85 0.84,-0.58 0.68,-1.18 1.38,-4.61 0.91,-1.1 4.07,-2.93 2.38,-0.63 1.71,-1.11 1.75,-1.88 1.24,-2 0.41,-1.59 0.13,-3.88 1.85,-3.75 0,0 1.81,0.96 1.48,0.32 0.24,0.29 -0.4,1.99 0.8,1.13 1.84,0.48 1.15,1.23 -0.79,1.59 -1.37,0.86 -1.58,-0.22 -0.52,0.82 0.16,1.31 -0.34,0.82 0.35,0.76 -0.69,0.51 -0.59,3.17 0.66,1.16 0.66,0.32 0.45,-0.13 0.45,0.77 0,0 -1.58,1.71 -0.71,1.3 0.13,0.24 -1.53,1.04 -0.03,0.73 0.42,1.03 -0.09,0.81 0.38,0.82 -0.48,0.23 -1.26,-0.22 -0.37,0.24 -0.39,-0.32 -0.47,0.04 -0.41,0.16 -0.32,1.19 -0.68,-0.24 -0.55,0.29 -2.15,0.24 -0.57,0.92 0.67,0.56 -0.14,1.19 -0.2,1.16 -0.97,1.4 0.59,0.8 0.68,0.16 0.47,0.93 -0.35,1.28 0.42,1.39 -0.22,0.78 0.11,1.34 -0.24,0.42 0,0 -0.23,-0.34 -0.92,-0.07 -0.11,-0.76 -1.54,-1.55 -0.12,0.96 -0.82,0.73 -1.63,0.28 0.27,1.93 -0.1,0.25 -0.84,-0.1 -0.29,0.95 0.25,0.44 -1.49,0.62 -0.65,-0.03 0.11,1 -0.79,0.67 -1.2,-0.44 -0.36,0.63 -0.25,-0.16 0,0 -0.12,-0.48 -0.38,-0.25 0.52,-0.85 -0.23,-0.46 0.14,-0.73 -0.98,-0.45 -1.03,-1.09 -0.04,-1.55 -0.42,-0.94 -0.81,-0.23 -2.56,0.81 -0.73,1.56 -1.19,0.53 -0.26,1.65 -0.25,0.04 -0.29,-0.63 -0.85,-0.06 -1.01,0.66 -1.24,0.02 -0.93,1.06 -0.95,-0.69 0.55,-1.29 -0.37,-0.56 -1.86,-0.39 -1.01,0.09 0.08,1.29 -0.78,1.31 -1.37,1.05 0,0 -0.59,-1.68 0,-0.77 -0.39,-0.6 -0.03,-1.19 -0.82,-0.25 -0.7,-0.81 0,0 5.42,-1.98 1.81,-1.33 0.86,-0.3 0.92,-1.1 1.11,0.28 1.2,-0.21 z m 5,-24.77 -0.59,1.26 0.19,1.07 0.7,0.3 1.61,-0.65 0.2,0.25 -1.42,3.93 -2.75,2.23 -1.1,0.06 -1.01,0.61 -0.74,-0.15 -0.21,-0.47 1.31,-0.57 0.34,-0.84 -0.1,-0.85 1.11,-1 0.23,-0.89 -0.25,0.41 -0.52,-0.58 -0.61,-0.1 -0.56,1.05 -0.41,-0.24 0.01,-0.88 -0.23,-0.15 0.35,-0.35 0.03,-1.37 0.98,-1.25 0.7,-1.59 0.78,-0.38 0.68,-0.99 0.71,-0.18 0.46,-1.54 1.09,-0.26 -0.44,3.21 -0.54,0.9 z"},{name:"Oita",id:"oita",path:"m 141.90993,316.82889 0.35,-0.25 0.48,-1.38 -0.84,-0.73 0.03,-0.62 -0.36,-0.19 0.12,-0.38 0.52,-0.26 0.14,-0.64 -0.29,-0.95 -0.3,-0.16 0.47,-0.69 0.49,-0.13 0.3,-1.65 1.61,-1.38 0.93,-0.23 0.97,0.27 1.91,-0.11 -0.13,-0.46 0.39,-0.52 -0.3,-0.8 0.15,-0.37 0,0 0.32,-0.43 1.78,0.91 2.57,0.12 0.09,-0.45 1,-0.9 0.49,-0.96 1.68,-0.5 1.6,0.81 1.25,1.67 0.27,1.08 -0.09,1.79 -0.32,0.15 -0.4,1.21 -1.37,-0.4 -0.18,0.29 0.5,0.65 -0.12,0.22 -0.91,0.1 -0.21,0.59 -0.73,-0.11 -0.24,-0.42 -0.71,0.15 -0.12,0.71 0.35,1.5 1.5,0.51 1.88,-0.81 1.34,0.96 2.96,-0.67 -1.36,2.03 -0.5,1.26 0.7,0.31 1.08,-0.49 0.32,0.28 -0.69,0.34 -0.4,0.68 0.99,0.29 0.3,0.03 0.29,-0.71 0.59,0.84 0.36,-0.17 -0.03,-0.51 0.29,-0.14 0.07,0.8 -0.5,0.36 -1.03,-0.11 -0.75,1.38 0.12,0.28 0.58,0.19 0.25,0.46 0.72,-0.26 0.45,0.37 1.64,0.07 0.07,0.26 -2.11,0.27 0.17,0.77 0.61,-0.02 -0.81,0.76 0.66,0.7 -1.43,1.02 -0.92,-0.47 -0.25,1.53 0,0 -0.56,-0.01 0.26,-1.56 -1.64,-0.62 -0.8,0.15 -0.15,0.74 -0.49,0.58 -2.23,-0.02 -0.52,0.44 -0.9,-0.3 -0.19,-0.29 0.18,-0.47 -0.83,-0.86 -2.02,0.7 -0.38,-0.01 -0.48,-0.58 0,0 -1.4,-1.27 -0.21,-2.27 -0.59,-1.62 -0.86,-0.78 -0.19,-1.17 -1.04,-1.09 -1.41,-0.26 -1.02,0.56 -0.13,0.74 0.83,1.21 -0.18,0.85 -0.49,0.63 -0.38,-0.01 -0.4,-0.63 -0.63,-0.05 -0.6,-0.79 -0.87,-0.17 0.02,-0.31 z"},{name:"Okayama",id:"okayama",path:"m 204.66993,282.20889 -1.41,1.09 -0.47,1.72 -1.96,-0.54 -0.52,0.34 -1.84,-0.34 -0.62,-0.78 -1.6,0.29 -0.27,0.31 0.24,0.22 -2.22,0.76 -0.69,-0.84 0,0 -0.12,-1.74 -1.21,-1.65 0.01,-1.38 -0.41,-1.9 0.29,-1.12 -1.6,-2 0.01,-1.6 0.46,-1.21 -1.01,-1.22 0,0 0.36,-0.25 0.24,-0.84 0.38,0.22 1.81,-0.63 -0.33,-1.19 0.27,-0.38 0.78,0.33 1.21,-0.49 0.21,-0.5 -0.21,-0.48 0.96,-0.25 0.78,-2.43 1.7,0.63 1.27,0.01 1.07,0.74 0.52,0.91 0.66,-0.5 0.2,-0.54 1.16,-0.49 0.03,-0.48 1.5,-0.43 -0.15,0.89 0.19,0.17 0.79,0.21 0.94,-0.17 0.69,0.59 0.22,0.42 -0.12,0.61 0.49,0.31 -0.19,0.71 0.51,0.63 1.48,-0.92 0.54,0.27 0.69,-0.13 1.39,-1.16 0.3,0.23 0,0 -0.44,0.8 0.63,0.66 -0.08,0.78 -0.67,-0.07 -0.24,0.26 -0.24,1.1 -0.59,0.25 -0.06,0.93 -0.92,0.54 0.2,0.59 -0.15,0.91 -0.35,0.32 0.68,0.85 -0.7,1.31 0.18,0.47 1.08,0.96 0.54,1.37 0,0 -0.5,0.33 -0.2,-0.28 -0.66,-0.01 -1.76,1.98 -0.37,0.89 -0.98,0.59 -1.28,0.06 -0.52,0.38 z m 5.26,2.84 -0.37,0.06 0.68,-0.71 -0.86,0.2 -0.67,1.29 -0.23,-0.59 0.37,-0.49 -0.11,-0.24 -0.5,-0.29 -1.17,0.5 -0.21,-0.25 0.45,-0.86 3.68,-1.35 -0.12,0.47 0.3,0.34 -0.4,2.25 -0.4,-0.52 -0.44,0.19 z"},{name:"Okinawa",id:"okinawa",path:"m 82.159926,466.98889 0.83,-0.81 2.11,-0.89 0.38,-0.75 -0.74,-0.6 -1,-0.1 -0.33,-0.83 0.31,-0.35 -0.38,-0.53 0.06,-0.6 0.52,0.27 1.11,-0.17 0.77,0.3 0.19,0.2 -0.34,0.71 0.32,0.48 0.92,-0.11 0.94,-0.6 0.31,-0.9 0.82,-0.39 -0.02,-0.31 1.44,-1.37 0.42,-1 -0.09,-0.59 0.25,-0.12 0.91,0.71 0.39,2.04 -1.76,2.62 -1.76,0.03 0.05,0.69 -0.52,-0.1 0.55,0.79 -1.15,0.72 -1.15,-0.38 0.33,0.67 -1.71,1.16 -0.33,0.67 -1.59,-0.45 -0.75,0.57 0.21,0.58 0.7,0.53 -0.07,0.48 0.99,1.06 -0.05,0.35 -1.01,-0.89 -0.67,0.14 -1.32,2.79 0.2,0.3 0.74,-0.1 0.28,0.56 -1.64,1.05 -0.45,0.63 -0.95,0.34 -0.39,-0.21 -0.39,-2.51 1.4,-1.64 0.96,-0.49 0.05,-0.26 -0.88,-2.1 0.03,-0.64 0.16,-0.15 0.24,0.38 1.55,-0.88 z m 35.080004,-42.13 -1.1,1.43 -1.07,0.4 -0.5,-0.19 -0.28,1.13 0.38,0.75 -1.07,0.74 -0.18,0.6 -0.35,-0.3 -0.29,0.3 0.21,1.01 -1.64,-0.93 0.03,-0.5 -0.45,-0.87 -1.89,-0.3 -0.85,-0.66 1.8,-0.45 0.18,-0.19 -0.38,-0.46 0.97,-0.56 0.76,-0.04 0.72,-0.88 0.53,0.33 0.55,-0.71 1.04,0.12 0.3,-0.74 0.3,0.31 0.56,-0.01 0.23,-0.9 0.49,-0.52 0.51,0.15 1.04,-0.46 0.16,0.95 -0.22,0.26 0.37,0.19 0.72,-1 -0.57,-0.93 0.89,-0.62 0.11,0.91 0.48,0.33 -0.07,1 -1.01,0.73 -1.02,-0.09 -0.39,0.67 z m -111.440004,87.79 -0.22,0.94 -0.5,0.16 0.03,0.73 -0.4,-0.04 -0.11,0.46 -0.85,-0.37 -1.59,-0.15 -0.59,-0.42 -0.12,0.46 -0.75,-0.1 -0.38,-0.54 0.83,-0.91 0.52,0.19 0.27,0.45 0.18,-1.2 -0.19,-0.39 0.66,-0.95 0.71,0.59 1.23,0.16 1.27,0.93 z m 99.160004,-76.37 -0.05,0.87 1.38,1.22 -0.97,2.05 -1.03,0.19 -1.12,-1.37 0.51,-0.9 -0.54,-1.57 0.42,-1.32 1.44,0.04 -0.04,0.79 z m -94.630004,74.41 1.06,-0.13 -0.05,-0.35 0.71,-1.03 0.44,0.28 0.33,-0.74 -0.26,-0.44 0.51,-0.56 0.06,-0.49 0.57,0.1 -0.14,0.79 -0.59,0.52 0.11,0.29 -0.51,0.5 -0.03,0.42 -0.62,0.54 0.16,1.09 -0.36,1.4 -1.69,0.37 -0.24,-0.46 -0.62,-0.29 0.5,-0.46 0.11,-0.58 -0.86,-0.41 -0.3,0.36 -0.31,-0.33 0.14,-0.51 0.83,0.18 -0.01,-0.8 1.06,0.74 z m 21.34,-6.62 0.17,-0.26 0.12,0.38 0.34,-0.03 -0.56,-0.99 0.45,-0.33 0.14,-0.65 -0.56,-1.37 0.18,-0.19 1.38,2.04 0.01,0.52 1.91,0.79 0.4,0.67 -2.86,0.41 -0.93,-0.5 -0.19,-0.49 z m 66.54,-56.89 -0.59,0.55 -0.8,0.23 -0.57,-0.52 -0.14,-0.81 0.21,-0.37 1.23,0.17 1.89,-0.96 0.38,0.04 -1.61,1.67 z m 11.680004,-17.61 0.39,0.18 0.3,-0.52 0.61,1.09 1.12,0.16 0.21,0.33 -0.28,0.58 -0.38,0.18 -0.55,-0.51 -0.18,0.65 -0.71,-0.83 -0.66,0.51 0.1,-1.4 -0.63,-0.38 -0.27,-0.69 0.69,-0.29 0.19,0.22 -0.3,0.23 0.35,0.49 z m -48.320004,40.42 -0.89,-0.5 -0.26,-0.5 1.45,-0.38 0.79,0.92 -0.38,0.49 0.14,0.71 -0.66,-0.3 -0.19,-0.44 z m 64.350004,-45.08 -1.2,1.87 -0.58,0.22 -0.49,-0.38 0.05,-0.73 0.61,-0.07 1.2,-1.14 0.41,0.23 z m -96.490004,77.84 0.01,-0.67 0.31,0.37 0.2,-0.73 0.9,0.39 0.24,0.7 -1.2,0.27 -0.46,-0.33 z m 55.41,-48.5 0.9,-1.03 0.5,-0.09 -0.59,1.1 -1.46,1.17 0.65,-1.15 z m -2.64,6.79 0.24,0.54 -1.3,0.04 -0.26,-0.23 0.21,-0.42 1.11,0.07 z m -9.03,11.13 0.29,0.24 0,0.55 -0.26,0.21 0.09,0.5 -0.45,0.41 -0.06,-0.98 0.39,-0.93 z m 11.43,-16 0.39,0.45 -0.07,0.47 -0.28,0.08 -0.56,-0.59 0.52,-0.41 z m -77.58,58.68 0.56,0.25 -0.31,0.53 -0.47,-0.41 0.22,-0.37 z m 65.24,-43.19 0.42,0.21 -0.48,0.46 -0.49,-0.15 0.55,-0.52 z"},{name:"Osaka",id:"osaka",path:"m 232.13993,283.27889 0.37,-0.8 -0.64,-0.14 -0.03,-0.81 0.3,-0.51 0.74,-0.43 -0.46,-0.23 0,0 0.54,-1.21 -0.15,-1.43 -0.74,-1.24 0.47,-2.04 -0.43,-0.25 0.91,-0.51 -0.96,-0.14 -1.4,-0.81 0.24,-0.36 -0.08,-0.97 -0.4,-0.24 0.29,-0.31 0.43,0.05 0,0 0.19,0.74 2.16,0.6 0.07,1.16 0.25,-0.11 0.69,0.73 0.79,-0.26 -0.38,-0.42 0.26,-0.68 0.75,0.02 0,0.61 1.24,1.15 0.3,1.06 1.03,1.16 -0.29,0.62 0,0 -0.35,-0.06 -0.15,1.36 -0.51,0.44 -0.51,2.37 0.38,0.08 0.21,0.45 -0.57,0.9 0.53,1.26 0.08,1.16 -0.19,1.1 -0.61,0.37 0,0 -1.29,0.18 -1.2,0.8 -1.62,-0.14 -2.06,0.74 -1.63,0.09 -1.23,0.79 -1.04,0.18 -0.43,-0.04 -0.13,-0.88 -0.27,-0.09 0,0 2.57,-0.85 1.84,-1.68 0.97,-1.49 1.15,-1.04 z"},{name:"Saga",id:"saga",path:"m 121.38993,311.53889 0.67,0.96 0.16,-0.92 -0.19,-0.19 0.67,-1.39 -1.75,-1.34 0.48,-0.15 -0.26,-0.34 0.27,-0.32 0.39,0.14 0.35,0.8 0.28,-0.22 -0.56,-1.18 -0.03,-0.32 0.54,-0.03 -0.2,-0.88 0.64,0.48 0.32,-0.04 0.02,-0.27 0.68,-0.03 0.03,0.34 0.74,0.63 -0.63,0.74 0.61,0.54 1.14,0.19 0.28,-0.16 -0.05,-0.33 0,0 2.63,0.08 0.69,-0.32 0.86,0.24 0.47,-0.21 1.7,1.07 0.77,0.17 0.62,0.71 0.99,-0.95 0.74,-0.25 0.41,0.21 -0.02,2.25 -0.51,-0.03 -0.51,0.86 -1.85,1.42 -0.59,1.04 -0.17,1.23 0,0 -1.31,-0.01 -0.2,-0.52 -0.88,-0.58 -0.19,0.66 -1.79,1.44 1.78,3.06 0.04,0.41 -0.42,0.03 0,0 -2.8,-0.68 -1.55,-1.65 -1.15,-0.77 0.05,-0.36 0.52,-0.1 0.1,-0.42 -0.36,-0.87 -1.02,0.1 -1.38,-0.58 -0.03,-1.26 -1.05,-1.38 0.59,-0.99 0,0 0.22,0.24 z m -1.61,-8.98 -0.61,-0.03 -0.39,-1.1 -0.37,0.5 -0.21,-0.74 0.34,-0.5 -0.19,-0.39 1.06,-1.34 1.37,0.5 -0.26,0.85 0.52,0.45 -0.57,0.29 0.78,0.27 -0.17,0.54 -1.09,0.05 -0.21,0.65 z m 0.24,6.65 0.37,-1 0.78,0.95 -0.61,-0.06 -0.08,0.42 -0.48,0.23 -0.3,-0.3 0.32,-0.24 z"},{name:"Saitama",id:"saitama",path:"m 297.31993,250.08889 0.2,-0.52 -0.52,-1.05 0.1,-0.46 0,0 0.75,-1.01 1.23,-0.02 0.92,-1.01 1.52,-0.4 0.46,-0.78 1.53,-0.07 0.42,-0.76 0.02,-0.93 1.23,-1.97 0.7,0.05 1.69,0.86 0.6,-0.15 0.97,0.29 0.86,-0.21 1.81,1.34 2.54,-0.48 0.52,0.48 0.49,-0.18 0.31,-0.58 0,0 0.84,0.41 0,0 -0.17,0.89 0.86,1.96 0.39,0.1 0.39,-0.35 0,0 0.71,1.4 0.06,1.04 1.67,3.22 -0.22,1.33 -0.35,0.27 0,0 -0.92,0.07 -0.17,-0.42 -0.52,0.14 -0.45,-0.28 -0.41,0.74 -1.78,-0.31 -0.67,0.8 -0.55,-0.29 -0.91,0.37 -0.28,-0.87 -1.59,0.75 -1.25,0.03 -0.53,-0.6 -0.78,-0.15 -0.41,-0.87 -2.1,-0.15 -1.03,-0.56 -1.66,-0.28 -0.7,-0.54 -1.39,0.58 -0.18,0.44 0,0 -1.09,0.29 -0.69,-0.53 -1.16,-0.2 -0.29,-0.64 z"},{name:"Shiga",id:"shiga",path:"m 251.72993,266.75889 0.07,0.85 0.71,0.73 -0.73,2.5 -0.04,1.38 -0.78,1.1 -0.21,0.92 -2.34,1.13 -1.33,-0.66 -1.02,0.01 -0.33,-0.38 -0.47,0.39 0.07,0.26 0.62,0.04 0.08,0.26 -0.77,0.62 0.07,0.52 -1.34,0.55 0,0 -0.15,-0.41 0.26,-0.26 -0.61,-0.6 -0.4,0.15 -0.3,-0.37 -0.31,0.05 -0.13,-0.88 -0.73,0.38 -0.71,-0.47 0.24,-1.07 -0.89,-1.51 -0.29,-1.17 0.34,-0.25 0.31,-1.74 -0.43,-2.11 0.38,-1.44 -0.42,0.01 -1.18,-1.84 0,0 0.45,-0.74 0.37,-0.1 0.06,-0.5 0.65,0 0.35,0.4 0.57,-0.28 1.04,-2.76 0.77,0.77 0.46,-0.1 0.46,-0.88 1.29,-0.12 0.35,-1.07 1.1,0.32 0.14,-0.75 -0.83,-1.76 0.31,-0.67 0.67,-0.13 1.81,0.93 0,0 0.26,1.07 0.66,0.07 -0.12,1.6 0.78,0.29 0.31,-0.5 0.55,0.71 -0.24,0.89 0.63,0.64 -0.09,1 0.53,0.85 -0.55,0.44 -0.04,1.34 -0.32,0.52 -0.02,0.93 -0.32,0.21 z"},{name:"Shimane",id:"shimane",path:"m 170.75993,270.55889 0.28,-0.79 1.23,-0.93 0.08,-0.67 0.5,-0.67 2.51,-1.8 1.42,-0.54 0.56,-0.51 0.41,-0.78 0.13,-1.61 -0.96,-0.39 0.1,-0.37 1.12,-0.46 0.5,0.3 0.85,-0.17 0.11,-0.21 -0.62,-0.35 1.44,-0.3 0.24,-0.32 2.13,-0.51 1,0.04 -0.07,-0.65 1.17,0.12 0.41,-0.96 0.93,-0.64 0.91,1.06 1.08,-0.17 0.41,-0.33 2.16,0.32 -1.21,0.3 -0.41,0.51 0.49,0.99 1.14,0.68 0,0 -0.16,2.44 -0.42,0.62 0.27,1.63 -3.1,1.38 0.02,0.29 0.61,0.13 0.23,0.69 -0.89,0.7 -0.17,1.54 0,0 -0.58,-0.22 -1.42,0.42 -0.98,-0.79 -0.79,0.62 -1.15,-0.7 -0.4,0.07 -2.4,3.33 -1.19,0.25 -0.85,1 0.38,0.47 0.69,0.21 0.01,0.87 -1.76,0.14 -1.47,1.06 -1.63,-0.13 -0.25,-0.41 -0.41,0.14 0.07,0.25 -0.51,0.43 -0.52,-0.42 -1.24,0.13 -0.21,0.44 -0.4,-0.48 -0.79,-0.11 -0.31,1.14 -1.45,0.86 -0.3,0.48 0.55,0.34 -0.7,1.03 -0.21,1.78 -0.63,0.68 -0.6,0.18 -0.3,0.64 0.49,0.63 0,0 -0.81,0.45 -0.48,0.71 -0.15,0.31 0.43,0.89 -1.12,1.58 -0.69,-0.63 -0.94,0.7 -1.05,0.1 -0.87,-0.86 -0.17,-0.77 0.55,-1.54 -1.87,0.04 -0.61,-1.65 0.66,-0.64 0.02,-0.82 0.43,-0.16 -0.83,-2.54 0,0 1.15,0.03 1.51,-0.45 1.33,-1.52 1.13,-0.82 0.23,-0.66 0.63,-0.2 1.16,-1.24 0.75,-1.24 2.86,-2.38 1.58,-0.63 z m 18.1,-27.33 -0.39,-0.5 -0.48,-0.07 0.17,-0.81 -0.3,-0.17 0.08,-0.87 0.87,-0.99 1.08,-0.31 0.79,0.33 1.29,1.46 -0.3,1.5 -0.45,0.19 -0.1,-0.56 -0.14,0.45 -0.58,0.09 0.6,0.14 0.11,0.56 -0.26,0.07 -1.79,0.05 0.14,-0.43 -0.34,-0.13 z m -46.02,-33.19 0.32,-0.19 0.21,0.22 -0.22,0.32 0.1,0.97 -0.76,0.88 -1.29,-0.54 -0.34,-0.96 0.61,-0.41 1.37,-0.29 z m 43.06,34.31 0.27,0.09 -0.09,0.33 -0.93,0.46 0.33,0.5 -0.22,0.63 -0.44,-0.06 -0.37,-0.71 -0.35,-0.03 -0.19,0.23 0.43,1.12 -1.03,-0.64 0.63,-1.24 0.71,-0.05 -0.02,-0.46 0.68,0.17 0.59,-0.34 z m 1.14,1.38 -1.32,1.26 0.22,-0.83 -0.31,-0.8 0.26,-0.18 0.26,0.3 0.07,-0.5 0.37,-0.08 0.39,0.22 0.06,0.61 z m -2.59,1.29 1.35,0.53 -0.14,0.35 -1.18,-0.16 -0.03,-0.72 z"},{name:"Shizuoka",id:"shizuoka",path:"m 304.84993,274.99889 -1.07,2.05 -1.23,1.02 -0.48,1.26 0.29,0.76 -0.45,0.17 -0.48,-0.25 -0.41,0.19 -0.2,0.52 -1.26,0.74 -0.38,-0.14 -1.08,-1.02 0.23,-0.29 -0.14,-0.37 -0.73,-0.33 0.01,-0.81 0.74,-0.73 -0.48,-1.08 0.27,-0.2 -0.2,-1.79 0.67,-0.61 -0.54,-1.53 0.49,-1.23 2.05,0.16 0.27,-0.71 -1.78,-1.59 -2.32,-0.51 -2.74,0.82 -0.9,1.57 0.4,0.5 -0.22,0.6 -3.07,1.66 -0.8,1.34 0.18,1 -0.69,1.23 -1.52,1.15 -0.54,1.37 0.01,0.72 0.75,0.71 -0.09,0.22 -4.47,-1.58 -2.06,-0.07 -1.84,0.45 -2.66,-0.61 -3.56,-0.07 0,0 -0.16,-2.32 0.43,-1.23 2.75,-1.54 1.28,-1.92 0.03,-1.06 1.46,-2 0.47,-0.24 -0.08,-0.47 0.57,-0.58 -0.51,-0.5 0.31,-0.98 0,0 1.07,-0.11 0.46,-0.93 0.51,-0.01 0.21,-0.43 1.28,-0.64 1.21,-1.01 1.65,-0.63 0.14,-0.72 -0.53,-0.67 0,-0.67 0.74,-0.26 -0.42,-1.31 0.41,-0.56 -0.33,-0.26 0.56,-0.65 0.36,0.14 0.58,-1.64 0,0 0.94,3.18 -0.38,1.18 0.23,1.07 -0.46,0.93 0.33,1.3 0.68,0.51 0.76,-0.52 0.76,0.36 0.69,2.69 0.69,0.5 1.24,0.12 0.72,-0.63 -0.4,-2.66 0.43,-0.61 -0.05,-1.71 0.99,-0.91 0.57,1.26 1.03,-0.12 0.45,0.97 2.8,-0.47 0.37,-0.27 0.7,0.07 0.67,-0.39 0,0 1.51,-0.03 0.15,0.24 0.35,1.52 -0.28,0.97 -0.57,0.62 0.24,1.52 0.7,0.54 0.13,0.68 1.52,0.21 0,0 -0.67,0.97 -0.14,1.01 0.63,0.25 -0.13,1.33 1.03,0.83 -0.11,1.53 z"},{name:"Tochigi",id:"tochigi",path:"m 327.45993,225.02889 -0.09,1.99 0.27,0.99 -0.22,1.3 0.62,1 -0.09,0.32 -0.95,0.21 -0.28,0.38 0.57,1.95 0.02,1.81 -0.92,1.86 -0.21,1.17 -0.67,0.2 -0.28,-0.39 -0.45,0.02 -0.41,0.47 -0.68,-0.24 -0.05,0.52 -0.26,0.13 -1.56,0.08 -0.13,0.45 -1,0.47 -0.12,0.88 -1.13,-0.28 -0.56,1.69 -1.64,0.87 -0.73,0.06 0,0 -0.84,-0.41 0,0 -0.51,-0.79 0.09,-0.28 -0.38,-0.24 -1.11,0.18 -0.71,-0.43 -1.01,0.29 -1.11,-0.97 0.04,-0.58 -1.05,-0.78 0.18,-0.96 1.19,-1.55 -0.33,-0.76 0.4,-1.2 0.82,-0.65 -0.34,-0.68 -1.23,0.07 -1.47,-0.74 0.18,-1.37 0.59,-0.89 -0.28,-1.17 1.02,-1.41 -1.02,-0.44 0.58,-1.54 0,0 0.94,-0.43 0.71,-1.02 1.35,-0.24 0.92,-0.75 0.63,-0.09 0.23,-0.43 0.79,-0.2 0.26,-0.41 2.8,-0.87 0.18,-0.91 1.36,-0.59 2.42,0.28 2.39,1 1.02,0.98 0.23,0.93 0.85,-0.05 -0.16,1.86 z"},{name:"Tokushima",id:"tokushima",path:"m 218.38993,299.89889 -2.09,0.87 -0.89,0.77 -0.18,0.51 -1.25,0.91 -1.19,0.7 -0.92,0.19 -0.64,1.79 -0.89,-0.04 -0.21,0.47 0.26,0.14 -0.3,0.18 0,0 -2.11,-0.22 -0.78,-1.19 -0.1,-0.47 0.47,-0.54 -0.23,-0.8 -1.97,-0.05 -0.1,-2 -0.51,-1.26 -0.7,0.17 -0.25,-0.46 -0.39,0.13 -0.42,0.81 -0.61,0.2 -0.79,-0.32 -0.65,-0.9 -1.81,0.17 -1.34,-0.52 -0.37,-0.54 0,0 0.56,-0.9 0,-1.04 -0.27,-0.49 0.29,-0.68 0,0 0.62,-0.22 0.14,-0.51 1,-0.84 0.58,0.19 0.28,-0.5 0.76,-0.29 1.38,-0.25 0.86,0.97 0.47,0 1.17,-0.91 1.24,-0.14 0.32,-0.34 -0.06,-0.42 0.74,-0.58 1.7,-0.18 1.63,0.26 0.28,-0.3 1.09,0.58 0.42,-0.22 0.16,-0.96 0,0 2.81,-0.79 0,0.94 0.75,0.49 -0.72,2.96 0.09,1.1 0.48,0.53 0.36,-0.56 0.59,1.07 0.63,0.36 -0.52,0.39 0.7,0.19 -0.14,0.46 -1.29,0.94 -0.09,0.33 0.27,0.21 1.98,0.04 0.14,0.21 -0.44,0.2 z"},{name:"Tokyo",id:"tokyo",path:"m 310.35993,279.40889 -0.68,-0.39 -0.14,-0.41 -0.06,-1.39 0.23,-0.5 1.22,0.43 0.52,0.92 -0.16,1.5 -0.93,-0.16 z m -2.11,6.15 -0.33,2.29 -0.49,-0.4 -0.06,-0.52 0.88,-1.37 z m -1.42,2.19 0.25,0.27 -0.61,0.2 0.36,-0.47 z m 12.32,-31.08 -0.82,-0.06 -0.2,-0.93 -0.5,0.44 -0.3,1.56 0.32,0.75 0.25,-0.15 0.44,0.71 -0.87,-0.2 -0.93,0.29 0,0 -0.01,-0.38 -0.48,-0.23 -0.33,-0.67 -2.68,-1.27 -0.76,0.91 -0.49,-0.47 -0.22,0.23 0.79,0.62 -0.19,2.02 -0.3,0.03 -1.35,-1.89 -2.15,-0.7 -0.86,0.16 -0.59,-0.99 -0.61,0.03 -0.46,-0.55 -0.6,-0.13 0,0 -2.1,-1.16 -1.58,-3.24 0,0 0.19,-0.44 1.38,-0.58 0.71,0.54 1.66,0.29 1.03,0.56 2.1,0.15 0.41,0.87 0.78,0.16 0.53,0.6 1.25,-0.04 1.59,-0.75 0.28,0.87 0.92,-0.37 0.55,0.29 0.67,-0.8 1.78,0.32 0.41,-0.75 0.45,0.28 0.52,-0.14 0.17,0.42 0.93,-0.07 0,0 1.08,2.26 0,0 0.35,0.76 -0.56,0.32 0.4,0.38 -0.83,0.57 -1.17,-0.43 z m -5.62,37.62 0.27,-0.46 -0.03,-0.53 -0.52,-0.53 -0.93,0.11 -0.4,1 0.18,0.63 0.69,0.09 0.74,-0.31 z m 4.5,23.31 0.97,0.6 0.15,-0.7 0.39,-0.09 -0.25,-0.91 -0.55,-0.05 -0.88,-0.9 -0.48,0.01 -0.16,0.72 0.28,0.56 0.42,0.13 0.11,0.63 z m 0,0 0.97,0.6 0.15,-0.7 0.39,-0.09 -0.25,-0.91 -0.55,-0.05 -0.88,-0.9 -0.48,0.01 -0.16,0.72 0.28,0.56 0.42,0.13 0.11,0.63 z"},{name:"Tottori",id:"tottori",path:"m 190.80993,260.73889 1.46,0.29 0.47,-0.16 0.47,-0.86 0.98,-0.5 1.8,-0.38 1.44,0.58 1.8,0.17 3.37,-0.23 0.67,-0.37 1.4,0.17 1.85,-0.2 2.78,-0.74 0.56,-0.77 0.76,-0.05 0.13,-0.39 0.61,-0.13 0,0 0.69,0.52 0.38,0.77 -0.12,1.02 0.49,1.88 0.73,0.34 -0.09,1.08 0.73,0.96 -0.15,0.43 0.26,1.16 -1.64,1.15 -0.58,-0.26 0,0 -0.3,-0.23 -1.39,1.16 -0.69,0.13 -0.54,-0.27 -1.48,0.92 -0.51,-0.63 0.19,-0.71 -0.49,-0.31 0.12,-0.61 -0.22,-0.42 -0.69,-0.59 -0.94,0.17 -0.79,-0.21 -0.19,-0.17 0.15,-0.89 -1.5,0.43 -0.03,0.48 -1.16,0.49 -0.2,0.54 -0.66,0.5 -0.52,-0.91 -1.07,-0.74 -1.27,-0.01 -1.7,-0.63 -0.78,2.43 -0.96,0.25 0.21,0.48 -0.21,0.5 -1.21,0.49 -0.78,-0.33 -0.27,0.38 0.33,1.19 -1.81,0.63 -0.38,-0.22 -0.24,0.84 -0.36,0.25 0,0 -0.42,-0.5 -2.1,0.32 0,-0.26 0,0 0.17,-1.54 0.89,-0.7 -0.23,-0.69 -0.61,-0.13 -0.02,-0.29 3.1,-1.38 -0.27,-1.63 0.42,-0.62 0.16,-2.44 z"},{name:"Toyama",id:"toyama",path:"m 265.53993,228.68889 1.31,0.68 0.98,-0.23 1.94,0.09 1.17,-1.11 0.36,-1.01 -0.03,-1.21 0.37,-0.71 1.34,-0.71 2.78,-0.6 0,0 0.7,0.81 0.82,0.25 0.03,1.2 0.39,0.6 0,0.77 0.59,1.68 0,0 -0.2,4.18 -1.18,0.7 -0.11,0.77 0.21,-0.04 0.12,0.49 -0.61,0.17 -0.39,0.53 0.02,0.75 -0.42,0.81 -0.9,0.86 0,0 -0.94,-0.07 -0.84,-0.82 -0.71,0.34 -1.13,-0.35 -0.28,-0.78 -1.35,0.8 -0.21,-0.04 -0.04,-0.88 -0.59,-0.05 -1.46,0.69 -0.25,-0.44 -0.55,0.02 -2.08,2.02 -0.25,1.15 -1.39,1.22 -0.34,-0.08 0.26,-0.73 -0.34,-0.77 -0.92,-0.51 -0.35,0.36 -0.25,-0.59 -0.77,0.56 -0.29,1.06 -0.58,0.08 0,0 -0.15,-0.89 0.32,-0.42 -0.45,-1.89 0.75,-2.95 -0.46,-0.58 -0.19,-1.13 0.77,-1.23 -0.23,-0.46 0.16,-0.97 0.55,-0.65 0.6,-3.49 1.4,-1.37 0.73,-0.26 1.24,0.1 0,0 -1.33,2.29 1.42,1.56 0.69,0.5 z"},{name:"Wakayama",id:"wakayama",path:"m 240.04993,307.16889 -0.54,0.38 -0.32,0.69 0.09,0.71 -0.48,0.08 -0.25,-0.35 0.32,-0.75 -0.79,0.11 -1.88,-0.75 -2.35,-0.38 -2.02,-1.21 -0.41,-0.74 0.15,-0.79 -1.27,-0.63 0.98,-0.53 0.25,-0.57 -1.44,-1.22 -2.62,-1.21 -0.68,-1.41 -0.77,-0.38 -1.11,0.32 0.21,-2.33 1.57,-0.64 0.49,-0.63 -0.73,-0.76 -1.12,-0.25 0.61,-0.64 0.3,-0.83 0.87,0.07 0.3,-0.35 -0.13,-0.75 -0.75,-0.2 -0.43,-1.22 -1,-1.08 0.13,-0.48 0.36,-0.14 0,0 0.27,0.09 0.13,0.88 0.43,0.04 1.04,-0.18 1.23,-0.79 1.63,-0.09 2.06,-0.74 1.62,0.14 1.2,-0.8 1.29,-0.18 0,0 0.4,0.68 0.2,1.72 0.89,0.5 0.21,0.66 -0.39,0.6 -0.81,-0.37 -0.55,0.27 0.01,0.71 -0.38,0.57 -1.49,1.45 -0.13,0.54 1.14,0.96 -0.06,0.53 0.58,0.21 0.28,0.51 -0.71,1.83 0.38,0.13 0.21,0.57 1.15,-0.68 0.66,0.01 0.66,0.41 2.01,-0.34 0,0 -0.07,1.92 1.7,1.94 1.29,0.27 0,0 -0.33,0.45 -0.15,1.15 -0.96,0.26 -0.23,0.85 0.72,0.28 -0.07,0.35 -2.08,1.46 -0.52,0.09 z"},{name:"Yamagata",id:"yamagata",path:"m 327.89993,199.31889 -0.3,1.71 0.04,2.01 0.55,0.41 -1.33,1.61 -1.3,-0.26 -0.74,0.56 -1.47,-1.12 -1.23,0.46 -0.97,-1.68 -0.33,0.35 -0.63,0.07 -0.61,-0.39 -0.94,0.58 -0.63,-0.68 -0.79,0.18 0,0 -0.45,-0.77 -0.45,0.13 -0.66,-0.32 -0.66,-1.16 0.59,-3.17 0.69,-0.51 -0.35,-0.76 0.34,-0.82 -0.16,-1.31 0.52,-0.82 1.58,0.22 1.37,-0.86 0.79,-1.59 -1.15,-1.23 -1.84,-0.48 -0.8,-1.13 0.4,-1.99 -0.24,-0.29 -1.48,-0.32 -1.81,-0.96 0,0 1.17,-3.08 1.74,-1.51 1.14,-1.5 1.13,-4.08 0.61,-1.04 0.7,-2.64 -0.18,-0.58 0,0 2.51,0.41 0.37,-0.46 0.98,-0.24 0.2,1.17 0.71,0.18 0.79,0.7 3.08,0.94 1.08,-0.27 0.35,0.77 1.06,0.08 0.58,1.8 1.52,0.53 0.24,0.45 0,0 -0.23,0.35 1.06,1.02 0.19,1.06 0.83,0.45 -0.68,1.1 0.22,0.97 -0.43,1.15 -0.4,0.1 -0.66,-0.35 -0.1,0.23 0.61,1.37 0.03,0.54 -0.38,0.65 0.27,0.91 0.6,0.39 0.2,0.7 -0.61,1.6 -1.09,1.14 0.16,0.6 -1.05,1.32 -0.16,1.02 0.23,1.23 -1.11,1.58 -0.19,1.02 -0.99,0.55 -1.72,0.01 0.07,1.99 z"},{name:"Yamaguchi",id:"yamaguchi",path:"m 154.99993,295.15889 -0.59,-0.41 -0.35,0.88 -0.74,0.35 -0.29,-0.2 0.15,-0.59 -0.44,-0.14 -0.77,1.46 -1.72,1.03 -2.18,-0.78 0.08,-0.79 -2.26,-1.28 -0.69,0.38 -0.32,0.88 -1.84,1.78 -0.19,-0.59 0.46,-0.87 -0.03,-1.68 -1.06,-1.52 0.12,-0.61 0.75,-0.13 0.55,-1.11 -0.24,-1.21 -1.07,-1.17 0.3,-0.16 0.38,-1.37 2.64,-0.41 -0.3,-0.48 -1.22,-0.38 0.28,-0.82 0.92,0.74 1.08,-0.34 0.52,0.15 1.09,1.11 2.96,-0.26 0.62,-0.83 1.02,0.03 1.44,-1.68 -0.27,-0.66 0.35,-0.56 0.7,0.14 0.7,-0.71 0.34,-0.42 0.03,-0.86 0.46,-0.11 0.38,-0.88 0.25,-0.23 0.97,0.29 0.47,-0.49 0,0 0.83,2.54 -0.43,0.16 -0.02,0.82 -0.66,0.64 0.61,1.65 1.87,-0.04 -0.55,1.54 0.17,0.77 0.87,0.86 1.05,-0.1 0.94,-0.7 0.69,0.63 1.12,-1.58 -0.43,-0.89 0.15,-0.31 0.48,-0.71 0.81,-0.45 0,0 0.3,0.68 -0.17,0.81 0.24,1.36 0.92,0.78 -0.08,0.63 0.5,1.46 1.28,0.31 0.33,-0.19 0,0 0.24,0.49 -0.29,0.52 0.37,0.47 -0.98,0.91 0.24,2.96 -0.57,0.96 -1.09,0.12 0.01,1.62 0.58,0.68 -0.33,0.63 -0.49,-1.07 -1.43,-0.73 -0.37,0.17 -3.61,-2.76 -0.47,0.6 -0.03,0.55 -0.91,-0.2 1.12,-1.18 -1.25,-0.71 -0.52,-0.08 -1.82,0.55 -2.1,0.96 -0.56,-0.62 z m 15.14,3.62 -0.9,-0.14 -0.52,0.46 -0.58,-0.87 -0.06,-0.79 1.18,-0.95 1.36,1.13 0.98,0.06 1.26,-0.85 1.1,0.06 -1.26,0.96 -0.71,-0.01 -0.19,0.31 0.19,0.83 -0.87,0.1 -0.1,-0.82 -0.44,-0.1 -0.54,0.09 0.1,0.53 z"},{name:"Yamanashi",id:"yamanashi",path:"m 305.23993,255.79889 -0.02,2.61 -0.34,0.7 -0.49,0.52 -0.71,0.1 -0.46,0.65 -1.79,0.83 -0.4,1.13 0,0 -0.67,0.39 -0.7,-0.07 -0.37,0.27 -2.8,0.47 -0.45,-0.97 -1.03,0.12 -0.57,-1.26 -0.99,0.91 0.05,1.71 -0.43,0.61 0.4,2.66 -0.72,0.63 -1.24,-0.12 -0.69,-0.5 -0.69,-2.69 -0.76,-0.36 -0.76,0.52 -0.68,-0.51 -0.33,-1.3 0.46,-0.93 -0.23,-1.07 0.38,-1.18 -0.94,-3.18 0,0 -0.73,-1.77 1,-1.1 -0.88,-0.86 0.97,-1.97 0.2,-0.12 0.72,0.62 1.77,-2.71 1.43,0.58 -0.01,0.67 0.48,0.53 0.48,-0.09 0.22,-0.41 1.76,0.03 0.54,1.14 0.97,-0.01 0.73,-0.94 0.4,0.01 0,0 1.02,0.23 0.29,0.64 1.16,0.2 0.69,0.53 1.09,-0.29 0,0 1.57,3.24 z"}]};function Tm(i){const t=[],e=i.match(/[a-zA-Z]|-?\d*\.?\d+(?:e-?\d+)?/g)??[];let n=[],s=0,r=0,a=0,o=0,l="m",c=0;const h=()=>parseFloat(e[c++]);for(;c<e.length;){const u=e[c];if(/[a-zA-Z]/.test(u)&&(l=u,c++,l==="z"||l==="Z")){n.length>2&&t.push(n),n=[],s=a,r=o;continue}switch(l){case"m":case"M":{const f=h(),p=h();n.length>2&&t.push(n),s=l==="m"?s+f:f,r=l==="m"?r+p:p,a=s,o=r,n=[[s,r]],l=l==="m"?"l":"L";break}case"l":s+=h(),r+=h(),n.push([s,r]);break;case"L":s=h(),r=h(),n.push([s,r]);break;case"h":s+=h(),n.push([s,r]);break;case"H":s=h(),n.push([s,r]);break;case"v":r+=h(),n.push([s,r]);break;case"V":r=h(),n.push([s,r]);break;default:throw new Error(`unsupported path command ${l}`)}}return n.length>2&&t.push(n),t}const V0=Em.locations.map(i=>({id:i.id,name:i.name,rings:Tm(i.path)})),Bl={w:438,h:516},tr=Bl.w/2,er=Bl.h/2,bm=7,hr="#d3e6ea",Am="#c4dce1",zl=(i,t)=>new P(i-tr,0,t-er),ia=(i,t,e)=>new Xt(i).lerp(new Xt(t),e);function wm(){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle=hr,n.fillRect(0,0,256,256),n.lineWidth=2.2,n.strokeStyle=Am;let s=0;for(let a=-32;a<=288;a+=32/2,s++)for(let o=-64+s%2*32;o<=320;o+=64){n.beginPath(),n.arc(o,a,32,0,Math.PI*2),n.fillStyle=hr,n.fill();for(const l of[.94,.72,.5,.28])n.beginPath(),n.arc(o,a,32*l,Math.PI,Math.PI*2),n.stroke()}const r=new Ch(e);return r.wrapS=r.wrapT=sr,r.colorSpace=Ue,r.anisotropy=8,r}function Rm(i){const t=new tm({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Z0,t.outputColorSpace=Ue;const e=new Eh;e.background=new Xt(hr),e.fog=new fo(hr,600,1800);const n=new qe(30,1,1,5e3);n.position.set(0,600,400),e.add(new uu("#ffffff","#9fb6bd",2.1));const s=new pu("#fffaf0",1.5);s.position.set(-180,320,-220),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-300,right:300,top:300,bottom:-300,near:10,far:1e3}),s.shadow.bias=-8e-4,s.shadow.radius=4,e.add(s);const r=wm();r.repeat.set(110,110);const a=new Qe(new gs(4e3,4e3),new Zr({map:r}));a.rotation.x=-Math.PI/2,a.position.y=-2.6,a.receiveShadow=!0,e.add(a);const o=new Ki,l=[],c=new Map;for(const T of V0){const M=om[T.id];let C=c.get(M);if(!C){const y=Fl[M];C=[new Zr({color:ia(y,"#ffffff",.8)}),new Zr({color:ia(ia(y,"#ffffff",.55).getStyle(),"#b9b2a6",.5)})],c.set(M,C)}const w=T.rings.map(y=>new El(y.map(([S,R])=>new ct(S-tr,R-er)))),L=new _o(w,{depth:bm,bevelEnabled:!1,curveSegments:1});L.rotateX(Math.PI/2);const N=new Qe(L,C);N.castShadow=!0,N.receiveShadow=!0,N.name=T.id,o.add(N);for(const y of T.rings)for(let S=0;S<y.length;S++){const R=y[S],B=y[(S+1)%y.length];l.push(R[0]-tr,.06,R[1]-er,B[0]-tr,.06,B[1]-er)}}const h=new pn;h.setAttribute("position",new Ye(l,3)),o.add(new Rh(h,new gl({color:"#ffffff",transparent:!0,opacity:.75}))),e.add(o);const u=new ym(n,i);u.enableDamping=!0,u.dampingFactor=.09,u.screenSpacePanning=!1,u.minDistance=30,u.maxDistance=1500,u.maxPolarAngle=62*Math.PI/180,u.zoomToCursor=!0;const f=[];for(const T of V0)for(const M of T.rings)for(let C=0;C<M.length;C+=6)f.push(zl(M[C][0],M[C][1]));let p=1,g=1;const v=new P(1/0,0,0),m=new P,d=new P;return{canvas:i,camera:n,controls:u,land:o,toScreen(T){return d.copy(T).project(n),d.z>1?null:{x:(d.x+1)/2*p,y:(1-d.y)/2*g}},render(T=!1){u.update();const M=v.distanceToSquared(n.position)>1e-6||m.distanceToSquared(u.target)>1e-6;v.copy(n.position),m.copy(u.target);const C=n.position.distanceTo(u.target);return e.fog.near=C*1.1,e.fog.far=C*3.2,(M||T)&&t.render(e,n),M},resize(T,M){p=T,g=M,t.setSize(T,M,!1),n.aspect=T/M,n.updateProjectionMatrix()},overview(T,M){const w=p/g<.95?new P(288,0,-408).normalize():new P(0,0,-1),L=36*Math.PI/180,N=new P(-w.x*Math.sin(L),Math.cos(L),-w.z*Math.sin(L)).normalize(),y=new P(0,0,0),S=new P,R=n.position.clone(),B=T+10,V=g-M-10,q=14,X=p-14,W=ot=>{S.copy(y).addScaledVector(N,ot),n.position.copy(S),n.lookAt(y),n.updateMatrixWorld();let ft=1/0,_t=-1/0,Lt=1/0,Ht=-1/0;for(const Zt of f){d.copy(Zt).project(n);const Gt=(d.x+1)/2*p,Y=(1-d.y)/2*g;ft=Math.min(ft,Gt),_t=Math.max(_t,Gt),Lt=Math.min(Lt,Y),Ht=Math.max(Ht,Y)}return{x0:ft,x1:_t,y0:Lt,y1:Ht}};let j=800;for(let ot=0;ot<3;ot++){let ft=50,_t=4e3;for(let Q=0;Q<30;Q++){j=(ft+_t)/2;const xt=W(j);xt.x0>=q&&xt.x1<=X&&xt.y0>=B&&xt.y1<=V?_t=j:ft=j}j=_t;const Lt=W(j),Ht=(Lt.x0+Lt.x1)/2-(q+X)/2,Zt=(Lt.y0+Lt.y1)/2-(B+V)/2,Gt=2*j*Math.tan(n.fov*Math.PI/360)/g,Y=new P().setFromMatrixColumn(n.matrixWorld,0).setY(0).normalize();y.addScaledVector(Y,Ht*Gt),y.addScaledVector(w,-Zt*Gt/Math.cos(L))}W(j);const H={target:y.clone(),position:n.position.clone()};return n.position.copy(R),n.lookAt(u.target),H},pxPerUnit(){const T=n.position.distanceTo(u.target);return g/(2*T*Math.tan(n.fov*Math.PI/360))}}}ec(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const nn=matchMedia("(prefers-reduced-motion: reduce)").matches,Gn=i=>document.querySelector(i),sa=i=>i.id==="uchinaa"?"やまとぐち":i.name.replace(/(弁|方言)$/,""),Cm={mie:"伊",uchinaa:"や"},ja=["今日はとても暑いね","明日は雨だろう","疲れたから、もう帰るね","雨が降っているから、今日は行かない","まだ何も食べていない","そんなことしたらだめだよ","大丈夫だよ","それは本当にいいね","どこに行くの？","本当にありがとうございます"],Ee=Gn("#q"),kl=Gn("#bar"),Pm=kl.querySelector(".field"),Rn=document.createElement("main");Rn.id="map";Rn.innerHTML=`
  <canvas id="gl" aria-label="日本地図。ドラッグで移動、ピンチで拡大" role="img"></canvas>
  <canvas id="ink" aria-hidden="true"></canvas>
  <div id="pins" role="group" aria-label="各地の方言"></div>
  <section id="card" role="dialog" aria-labelledby="card-name" tabindex="-1" hidden>
    <div class="card-body">
      <header>
        <span class="card-dot" aria-hidden="true"></span>
        <h2 id="card-name"></h2>
        <span class="card-kana"></span>
        <button class="icon-btn" data-act="close" aria-label="閉じる">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </header>
      <p class="card-said" data-testid="card-said" aria-live="polite"></p>
      <p class="card-note"></p>
      <p class="card-hints"></p>
      <footer>
        <button data-act="prev" class="step" aria-label="前の方言"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>前へ</button>
        <button data-act="copy" class="copy">コピー</button>
        <button data-act="next" class="step" aria-label="次の方言">次へ<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
      </footer>
    </div>
    <span class="card-tail" aria-hidden="true"></span>
  </section>
  <div id="status" aria-live="polite"></div>
  <div class="corner">
    <a href="../" class="chip-link">一覧で見る</a>
    <button id="home" class="round-btn" aria-label="日本全体を表示">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>
    </button>
  </div>
  <p class="credit">地図: <a href="https://github.com/VictorCazanave/svg-maps" rel="noopener">@svg-maps/japan</a>（CC BY 4.0）</p>
`;document.body.insertBefore(Rn,document.body.firstChild);const hi=document.createElement("button");hi.className="clear";hi.type="button";hi.setAttribute("aria-label","入力を消す");hi.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>';Pm.appendChild(hi);const ji=Gn("#gl"),Qi=Gn("#ink"),ye=Qi.getContext("2d"),Hl=Gn("#pins"),Qt=Gn("#card"),_s=Gn("#status"),te=Rm(ji);te.land.position.y=nn?0:-9;const le=nc.filter(i=>z0[i.id]).map(i=>{const[t,e]=z0[i.id],[n,s]=am(t,e),r=document.createElement("button");r.type="button",r.className="pin",r.dataset.id=i.id;const a=Fl[i.region];r.style.setProperty("--c",a);const o=ic(i.id);o||r.classList.add("off");const l=document.createElement("span");l.className="pin-icon",l.setAttribute("aria-hidden","true"),l.textContent=Cm[i.id]??sa(i)[0];const c=document.createElement("span");c.className="pin-text";const h=document.createElement("span");h.className="pin-name",h.textContent=sa(i);const u=document.createElement("span");return u.className="pin-say",c.appendChild(h),c.appendChild(u),r.appendChild(l),r.appendChild(c),r.setAttribute("aria-label",i.name),Hl.appendChild(r),r.classList.add("icon"),{d:i,short:sa(i),color:a,ok:o,world:zl(n,s),el:r,say:u,ax:0,ay:0,x:0,y:0,shown:!1,placed:!1,vx:0,vy:0,px:0,py:0,fw:0,fh:0,mode:"icon",flip:!1}}),Qa=new Map(le.map(i=>[i.d.id,i])),ur=le.filter(i=>i.ok).map(i=>i.d.id);let nr=null,cn=null,si={},ge="",to=!1;_s.innerHTML=`
  <div class="carousel" role="region" aria-roledescription="カルーセル" aria-label="例文">
    <button type="button" class="car-btn" data-dir="-1" aria-label="前の例文">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
    </button>
    <div class="samples" data-testid="samples"></div>
    <button type="button" class="car-btn" data-dir="1" aria-label="次の例文">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
    </button>
  </div>
  <p class="status-line" aria-live="polite"></p>`;const ts=_s.querySelector(".carousel"),He=_s.querySelector(".samples"),Lm=_s.querySelector(".status-line"),hn=ja.map((i,t)=>{const e=document.createElement("button");return e.type="button",e.className="sample",e.textContent=i,e.setAttribute("aria-pressed","false"),e.setAttribute("aria-label",`例文 ${t+1}/${ja.length}: ${i}`),e.tabIndex=t===0?0:-1,e.addEventListener("click",()=>{Ee.value=i,vs(!0)}),He.appendChild(e),e});function mr(){const i=He.scrollWidth-He.clientWidth,t=bn??He.scrollLeft,e=t<=2,n=t>=i-2;ts.classList.toggle("at-start",e),ts.classList.toggle("at-end",n),ts.querySelector('[data-dir="-1"]').disabled=e,ts.querySelector('[data-dir="1"]').disabled=n}He.addEventListener("scroll",mr,{passive:!0});window.addEventListener("resize",mr);let bn=null,G0=0;function Dm(i){const e=He.scrollWidth-He.clientWidth,n=hn.map((o,l)=>l===0?0:Math.min(e,Math.max(0,o.offsetLeft-24))),s=bn??He.scrollLeft;let r=0;n.forEach((o,l)=>{Math.abs(o-s)<Math.abs(n[r]-s)&&(r=l)});let a=r+i;for(;a>0&&a<n.length-1&&Math.abs(n[a]-n[r])<1;)a+=i;a=Math.max(0,Math.min(n.length-1,a)),bn=n[a],clearTimeout(G0),G0=window.setTimeout(()=>bn=null,1500),He.scrollTo({left:bn,behavior:nn?"auto":"smooth"}),mr()}He.addEventListener("scroll",()=>{bn!==null&&Math.abs(He.scrollLeft-bn)<2&&(bn=null)},{passive:!0});He.addEventListener("pointerdown",()=>bn=null,{passive:!0});ts.addEventListener("click",i=>{const t=i.target.closest(".car-btn");t&&Dm(Number(t.dataset.dir))});He.addEventListener("keydown",i=>{const t=hn.indexOf(document.activeElement);if(t<0)return;let e=-1;i.key==="ArrowRight"?e=Math.min(t+1,hn.length-1):i.key==="ArrowLeft"?e=Math.max(t-1,0):i.key==="Home"?e=0:i.key==="End"&&(e=hn.length-1),!(e<0)&&(i.preventDefault(),Um(e))});function Um(i){hn.forEach((t,e)=>t.tabIndex=e===i?0:-1),hn[i].focus({preventScroll:!0}),hn[i].scrollIntoView({inline:"nearest",block:"nearest",behavior:nn?"auto":"smooth"})}function Vl(){const i=ja.indexOf(ge);hn.forEach((e,n)=>e.setAttribute("aria-pressed",String(n===i))),i>=0&&(hn.forEach((e,n)=>e.tabIndex=n===i?0:-1),hn[i].scrollIntoView({inline:"nearest",block:"nearest",behavior:nn?"auto":"smooth"})),mr();const t=Lm;if(t.className="status-line",delete t.dataset.testid,t.textContent="",!!ge)if(to)t.classList.add("error"),t.textContent="辞書を読み込めませんでした。通信状態を確認して、もう一度入力してください。";else if(!cn)t.classList.add("loading"),t.dataset.testid="dict-loading",t.textContent="辞書を読み込んでいます（初回のみ）";else{const e=ur.filter(n=>cn[n]!==ge&&!si[n]).length;t.dataset.testid="summary",t.textContent=e?`${ur.length} の方言のうち ${e} で言い方が変わりました`:"どの方言でも共通語と同じ言い方です"}}function ra(i){const t=[];for(const e of le){const n=cn?.[e.d.id],s=!!ge&&!!cn,r=s&&e.ok&&!!si[e.d.id],a=s&&e.ok&&!r&&n===ge;e.el.classList.toggle("said",s&&e.ok&&!a&&!r),e.el.classList.toggle("same",a),e.el.classList.toggle("nofit",r),e.say.textContent=r?"訳せない語があります":s&&e.ok?n:"",e.el.setAttribute("aria-label",r?`${e.d.name}: この文は訳せません`:s&&e.ok?`${e.d.name}: ${n}`:e.d.name),s&&e.ok&&!a&&!r&&t.push(e)}gr(),i&&!nn&&t.forEach((e,n)=>{e.el.classList.remove("spoke"),e.el.offsetWidth,e.el.style.setProperty("--delay",`${n*16}ms`),e.el.classList.add("spoke")}),Jt&&Xl(Jt),Vl()}function Gl(i){if(!ge){cn=null,ra(!1);return}if(!nr){cn=null,ra(!1),eo().then(()=>ge&&Gl(!0));return}cn=ac(nr,ur,ge),si={};for(const t of ur){if(!oc(t))continue;const e=lc(nr,t,ge);e&&(si[t]=e)}ra(i)}let aa=null;function eo(){return aa??=rc("../dict/").then(i=>{nr=i,to=!1},()=>{to=!0,aa=null,Vl()}),aa}let W0=0,X0="";function vs(i=!1){const t=Ee.value.trim();if(hi.hidden=!Ee.value,t===ge&&cn)return;ge=t,Mo(),clearTimeout(W0);const e=()=>{const n=ge!==X0;X0=ge,Gl(n)};i?e():W0=window.setTimeout(e,160)}Ee.addEventListener("input",()=>vs());Ee.addEventListener("keydown",i=>{i.key==="Enter"&&!i.isComposing&&(vs(!0),Ee.blur())});hi.addEventListener("click",()=>{Ee.value="",vs(!0),Ee.focus()});function Mo(){const i=new URL(location.href);ge?i.searchParams.set("q",ge):i.searchParams.delete("q"),i.hash=Jt?Jt.d.id:"",history.replaceState(null,"",i)}let tn=0,Ie=0,ss=1,Cn=0,ui=0,Zi="mid";function gr(){for(const i of le){const t=i.el.className;i.el.classList.remove("icon","flip"),i.fw=i.el.offsetWidth,i.fh=i.el.offsetHeight,i.el.className=t}Xe=120}let un=24,Ne=un/2+1.5;function Im(i,t,e){i.el.classList.contains("icon")!==(t==="icon")&&i.el.classList.toggle("icon",t==="icon"),i.el.classList.contains("flip")!==e&&i.el.classList.toggle("flip",e),i.mode=t,i.flip=e}function So(i,t){const e=t?i.x+un/2-i.fw:i.x-un/2;return{x0:e,x1:e+i.fw,y0:i.y-i.fh/2,y1:i.y+i.fh/2}}function Nm(i){const t=le.filter(l=>l.shown&&l!==Jt),e=4+Ne,n=tn-4-Ne,s=Cn+Ne,r=Ie-ui-Ne;let a=0;const o=Ne;for(let l=0;l<i;l++){const c=i>50?o*Math.min(1,.15+l/(i*.7)*.85):o;for(const h of t)h.px=h.x,h.py=h.y,h.x+=h.vx*.6+(h.ax-h.x)*.07,h.y+=h.vy*.6+(h.ay-h.y)*.07;for(let h=0;h<2;h++){for(let u=0;u<t.length;u++){const f=t[u];for(let p=u+1;p<t.length;p++){const g=t[p];let v=g.x-f.x,m=g.y-f.y;if(Math.abs(v)>=2*c||Math.abs(m)>=2*c)continue;let d=Math.hypot(v,m);if(d>=2*c)continue;d<.01&&(v=Math.cos(u*2.4),m=Math.sin(u*2.4),d=1);const A=(2*c-d)/2/d;f.x-=v*A,f.y-=m*A,g.x+=v*A,g.y+=m*A}}for(const u of t)u.x=Math.min(Math.max(u.x,e),n),u.y=Math.min(Math.max(u.y,s),r)}if(l===i-1)for(let h=0;h<4;h++){for(let u=0;u<t.length;u++){const f=t[u];for(let p=u+1;p<t.length;p++){const g=t[p],v=g.x-f.x,m=g.y-f.y;if(Math.abs(v)>=2*c||Math.abs(m)>=2*c)continue;const d=Math.hypot(v,m);if(d>=2*c||d<.01)continue;const A=(2*c-d)/2/d;f.x-=v*A,f.y-=m*A,g.x+=v*A,g.y+=m*A}}for(const u of t)u.x=Math.min(Math.max(u.x,e),n),u.y=Math.min(Math.max(u.y,s),r)}for(const h of t)h.vx=h.x-h.px,h.vy=h.y-h.py}for(const l of t)a=Math.max(a,Math.abs(l.vx)+Math.abs(l.vy));return a}function Fm(){const i=le.filter(l=>l.shown&&l!==Jt),t=4,e=tn-4,n=Cn,s=Ie-ui,r=[],a=(l,c)=>{if(l.x0<t||l.x1>e||l.y0<n||l.y1>s)return!0;for(const h of r)if(l.x0<h.x1+2&&l.x1>h.x0-2&&l.y0<h.y1+2&&l.y1>h.y0-2)return!0;for(const h of i)if(h!==c&&(l.x0<h.x+Ne&&l.x1>h.x-Ne&&l.y0<h.y+Ne&&l.y1>h.y-Ne||h.ax>l.x0-2&&h.ax<l.x1+2&&h.ay>l.y0-2&&h.ay<l.y1+2))return!0;return!1},o=[...i].sort((l,c)=>l.fw-c.fw);for(const l of o){const c=l.mode==="full"?l.flip:l.x>tn*.62;let h=null;for(const u of[c,!c]){const f=So(l,u);if(!a(f,l)){h=u,r.push(f);break}}Im(l,h===null?"icon":"full",h??!1)}}function Om(){ye.setTransform(ss,0,0,ss,0,0),ye.clearRect(0,0,tn,Ie),ye.lineWidth=1,ye.strokeStyle="rgba(31,45,54,0.42)",ye.beginPath();for(const i of le){if(!i.shown||i===Jt)continue;const t=Math.hypot(i.x-i.ax,i.y-i.ay);t>un/2+1&&(ye.moveTo(i.ax,i.ay),ye.lineTo(i.x+(i.ax-i.x)/t*(un/2),i.y+(i.ay-i.y)/t*(un/2)))}ye.stroke();for(const i of le){if(!i.shown)continue;const t=Jt&&i!==Jt;ye.globalAlpha=t?.45:1,ye.beginPath(),ye.arc(i.ax,i.ay,i===Jt?5:3.4,0,Math.PI*2),ye.fillStyle=i.ok?i.color:"#ffffff",ye.fill(),ye.lineWidth=i.ok?1.6:1.4,ye.strokeStyle=i.ok?"#ffffff":i.color,ye.stroke()}ye.globalAlpha=1}function Bm(){for(const i of le){const t=i.shown&&i!==Jt;if(i.el.classList.contains("out")===t&&i.el.classList.toggle("out",!t),!t)continue;const e=i.mode==="icon"?{x0:i.x-un/2,y0:i.y-un/2}:So(i,i.flip);i.el.style.transform=`translate3d(${e.x0.toFixed(1)}px, ${e.y0.toFixed(1)}px, 0)`}}let Re=null;const zm=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;function yo(i,t,e=820,n){nn&&(e=0),Re={t0:performance.now(),dur:e,fromT:te.controls.target.clone(),fromP:te.camera.position.clone(),toT:i,toP:t,done:n},te.controls.enabled=!1}function km(i){if(!Re)return;const t=Re.dur?Math.min(1,(i-Re.t0)/Re.dur):1,e=zm(t);if(te.controls.target.lerpVectors(Re.fromT,Re.toT,e),te.camera.position.lerpVectors(Re.fromP,Re.toP,e),Re.dur){const n=Math.sin(Math.PI*e)*Math.min(160,Re.fromT.distanceTo(Re.toT)*.35);te.camera.position.y+=n}if(t>=1){const n=Re.done;Re=null,te.controls.enabled=!0,n?.()}}function Hm(i=820){const t=te.overview(Cn+6,ui+6);yo(t.target,t.position,i)}function Vm(i){const t=Math.max(te.pxPerUnit(),Math.min(5,Math.max(3.4,Math.min(tn,Ie)/120))),e=Math.tan(te.camera.fov*Math.PI/360),n=Math.max(48,Ie/(2*t*e)),s=te.camera.position.clone().sub(te.controls.target),r=new P(s.x,0,s.z);r.lengthSq()<1e-6&&r.set(0,0,1),r.normalize();const a=34*Math.PI/180,o=new P(r.x*Math.sin(a),Math.cos(a),r.z*Math.sin(a)),l=r.clone().negate(),c=Math.min(Ie-ui-70,Math.max(Ie*.66,Cn+Gm()+40)),h=2*n*e/Ie,u=i.world.clone().setY(0).addScaledVector(l,(c-Ie/2)*h/Math.cos(a));yo(u,u.clone().addScaledVector(o,n))}let Jt=null,es=null,Wl=0,Eo=0;const Gm=()=>Eo||220;function Xl(i){Qt.style.setProperty("--c",i.color),Qt.classList.toggle("off",!i.ok),Qt.querySelector("#card-name").textContent=i.d.name,Qt.querySelector(".card-kana").textContent=i.d.kana;const t=Qt.querySelector(".card-said"),e=Qt.querySelector(".card-note"),n=Qt.querySelector('[data-act="copy"]'),s=cn?.[i.d.id];e.textContent="",t.classList.remove("pending","empty"),i.ok?ge?s?si[i.d.id]?(t.textContent=ge,t.classList.add("empty"),e.textContent=i.d.id==="okinawa"?`「${si[i.d.id].slice(0,3).join("」「")}」の${i.d.name}訳がまだ辞書にないため、この文は訳していません。`:`${i.d.name}で訳せるのは、今のところ「${sc.join("」「")}」などの決まった挨拶だけです。`):(t.textContent=s,s===ge&&(e.textContent="この文は共通語と同じ言い方になります。")):(t.textContent=ge,t.classList.add("pending")):(t.textContent="上の欄に文を入力すると、ここに変換結果が出ます",t.classList.add("empty")):(t.textContent=ge||i.d.name,t.classList.add("empty"),e.textContent=`${i.d.name}は文法が共通語と大きく異なるため、この地図版では変換できません。`),n.disabled=!(i.ok&&s)||!!si[i.d.id],n.textContent="コピー",Qt.querySelector(".card-hints").textContent=i.d.hints;const r=le.indexOf(i);Qt.querySelector('[data-act="prev"]').disabled=r===0,Qt.querySelector('[data-act="next"]').disabled=r===le.length-1,Wl=Qt.offsetWidth,Eo=Qt.offsetHeight}function ki(i,t="tap"){const e=Jt;e||(es={t:te.controls.target.clone(),p:te.camera.position.clone()});const n=t==="step"||t==="link"?null:i.el.getBoundingClientRect();if(e&&e.el.classList.remove("picked"),Jt=i,i.el.classList.add("picked"),Rn.classList.add("has-card"),Qt.hidden=!1,Xl(i),ql(),!nn&&n&&n.width){const s=Qt.getBoundingClientRect();Qt.animate([{transform:`translate(${n.left-s.left}px, ${n.top-s.top}px) scale(${n.width/s.width}, ${n.height/s.height})`,opacity:.6},{transform:"none",opacity:1}],{duration:460,easing:"cubic-bezier(.2,.9,.25,1.08)"}),Qt.querySelector(".card-body").animate([{opacity:0},{opacity:0},{opacity:1}],{duration:380})}Vm(i),Mo(),(t==="key"||t==="step")&&Qt.focus({preventScroll:!0})}function _r(i=!0){if(!Jt)return;const t=Jt;Jt=null,t.el.classList.remove("picked","out"),Rn.classList.remove("has-card");const e=()=>{Qt.hidden=!0};return nn?e():Qt.animate([{opacity:1,transform:"none"},{opacity:0,transform:"scale(.92)"}],{duration:180,easing:"ease-in"}).finished.then(e,e),i&&es&&yo(es.t,es.p,700),es=null,Mo(),Xe=120,t}function ql(){if(!Jt||Qt.hidden)return;const i=12,t=Wl||Qt.offsetWidth,e=Eo||Qt.offsetHeight,n=Math.min(Math.max(Jt.ax-t/2,i),tn-t-i);let s=Jt.ay-e-18,r=!1;s<Cn+6&&(s=Jt.ay+18,r=!0),Qt.classList.toggle("below",r),Qt.style.left=`${n.toFixed(1)}px`,Qt.style.top=`${s.toFixed(1)}px`,Qt.style.setProperty("--tail",`${Math.min(Math.max(Jt.ax-n,22),t-22).toFixed(1)}px`)}Qt.addEventListener("click",async i=>{const t=i.target.closest("button");if(!t||!Jt)return;const e=t.dataset.act;if(e==="close")_r()?.el.focus({preventScroll:!0});else if(e==="prev"||e==="next"){const n=le.indexOf(Jt)+(e==="prev"?-1:1);le[n]&&ki(le[n],"step")}else if(e==="copy"){const n=cn?.[Jt.d.id];if(!n)return;try{await navigator.clipboard.writeText(n),t.textContent="コピーしました"}catch{t.textContent="コピーできませんでした"}setTimeout(()=>t.textContent="コピー",1600)}});{let i=0,t=0,e=0;Qt.addEventListener("pointerdown",n=>{i=n.clientX,t=n.clientY,e=performance.now()}),Qt.addEventListener("pointerup",n=>{const s=n.clientX-i,r=n.clientY-t;if(!Jt||Math.abs(s)<60||Math.abs(s)<Math.abs(r)*1.5||performance.now()-e>600)return;const a=le.indexOf(Jt)+(s<0?1:-1);le[a]&&ki(le[a],"step")})}Hl.addEventListener("click",i=>{const t=i.target.closest(".pin");if(!t)return;const e=Qa.get(t.dataset.id);e&&ki(e,i.detail===0?"key":"tap")});function Wm(i,t){for(let s=le.length-1;s>=0;s--){const r=le[s];if(!r.shown||r===Jt)continue;const a=r.mode==="icon"?{x0:r.x-Ne,x1:r.x+Ne,y0:r.y-Ne,y1:r.y+Ne}:So(r,r.flip);if(i>=a.x0-2&&i<=a.x1+2&&t>=a.y0-2&&t<=a.y1+2)return r}let e=null,n=16;for(const s of le){if(!s.shown||s===Jt)continue;const r=Math.hypot(i-s.ax,t-s.ay);r<n&&(n=r,e=s)}return e}{let i=null,t=!1;ji.addEventListener("pointerdown",e=>{if(!e.isPrimary){i=null;return}i={x:e.clientX,y:e.clientY,t:performance.now(),id:e.pointerId},t=!1}),ji.addEventListener("pointermove",e=>{i&&e.pointerId===i.id&&Math.hypot(e.clientX-i.x,e.clientY-i.y)>8&&(t=!0)}),ji.addEventListener("pointerup",e=>{if(!i||e.pointerId!==i.id||t||performance.now()-i.t>600)return;i=null;const n=Wm(e.clientX,e.clientY);n?ki(n,"tap"):Jt?_r():document.activeElement===Ee&&Ee.blur()}),ji.addEventListener("pointercancel",()=>i=null)}Gn("#home").addEventListener("click",()=>{_r(!1),To=!1,Hm()});document.addEventListener("keydown",i=>{if(Jt){if(i.key==="Escape")_r()?.el.focus({preventScroll:!0});else if(/^Arrow(Up|Down|Left|Right)$/.test(i.key)&&document.activeElement!==Ee){i.preventDefault();const t=le.indexOf(Jt)+(i.key==="ArrowUp"||i.key==="ArrowLeft"?-1:1);le[t]&&ki(le[t],"step")}}});let Xe=0,ir=!0,jn=nn?null:{t0:0};const Xm=new P;function Yl(){tn=window.innerWidth,Ie=window.innerHeight,ss=Math.min(window.devicePixelRatio,2),te.resize(tn,Ie),Qi.width=Math.round(tn*ss),Qi.height=Math.round(Ie*ss),Qi.style.width=`${tn}px`,Qi.style.height=`${Ie}px`,Cn=kl.getBoundingClientRect().bottom+_s.offsetHeight+8,ui=52,Xe=120,ir=!0}function Zl(i){if(km(i),jn){jn.t0||(jn.t0=i);const s=Math.min(1,(i-jn.t0)/1100);te.land.position.y=-9*(1-s)**3,s>=1&&(jn=null,Rn.classList.add("ready"))}const t=te.render(!!jn||ir)||!!jn||ir;ir=!1;const e=te.pxPerUnit(),n=e>3.1?"near":e>1.9?"mid":"far";if(n!==Zi&&(Rn.classList.remove(Zi),Zi=n,Rn.classList.add(Zi),un=Zi==="far"?20:24,Ne=un/2+1.5,gr()),t||Xe>0){const s=te.land.position.y;le.forEach((a,o)=>{const l=te.toScreen(Xm.copy(a.world).setY(s)),c=!!l&&l.x>-4&&l.x<tn+4&&l.y>Cn-4&&l.y<Ie+4;l&&(a.placed&&a.shown?(a.x+=l.x-a.ax,a.y+=l.y-a.ay):(a.x=l.x+Math.cos(o*2.4)*2,a.y=l.y+Math.sin(o*2.4)*2,a.vx=a.vy=0,a.placed=!0),a.ax=l.x,a.ay=l.y),a.shown=c});const r=Nm(Xe>=120?400:4);r>.05&&(Xe=Math.max(Xe,3)),!t&&(r<.3||Xe===1)&&Fm(),Bm(),Om(),ql(),Xe>0&&Xe--,t&&(Xe=Math.max(Xe,30))}requestAnimationFrame(Zl)}function qm(){Yl();const i=te.overview(Cn+6,ui+6);te.controls.target.copy(i.target),te.camera.position.copy(i.position),te.camera.lookAt(i.target),gr(),requestAnimationFrame(Zl);const t=document.getElementById("boot");t&&(t.classList.add("leaving"),setTimeout(()=>t.remove(),600)),nn&&Rn.classList.add("ready");const e=decodeURIComponent(location.hash.slice(1)),s=new URLSearchParams(location.search).get("q");if(s&&!Ee.value&&(Ee.value=s),vs(!0),Ee.value.trim())eo();else{const r=()=>eo();Ee.addEventListener("focus",r,{once:!0}),Ee.addEventListener("input",r,{once:!0}),document.activeElement===Ee&&r()}Qa.has(e)&&setTimeout(()=>ki(Qa.get(e),"link"),nn?0:900)}let To=!1;te.controls.addEventListener("start",()=>To=!0);let q0=0;window.addEventListener("resize",()=>{Yl(),clearTimeout(q0),q0=window.setTimeout(()=>{if(!Jt&&!Re&&!To){const i=te.overview(Cn+6,ui+6);te.controls.target.copy(i.target),te.camera.position.copy(i.position)}},120)});document.fonts?.ready.then(()=>gr());qm();
