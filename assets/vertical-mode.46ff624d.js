import{d as i,p as a,q as m,e as c,f as p,g as o,B as n,F as f,a as g,H as k}from"./framework.6504b2a8.js";const $={class:"slider-demo-block"},x=o("span",{class:"demonstration"},"Default value",-1),S={class:"slider-demo-block"},U=o("span",{class:"demonstration"},"Customized initial value",-1),y={class:"slider-demo-block"},B=o("span",{class:"demonstration"},"Hide Tooltip",-1),T={class:"slider-demo-block"},h=o("span",{class:"demonstration"},"Format Tooltip",-1),j={class:"slider-demo-block"},z=o("span",{class:"demonstration"},"Disabled",-1),C=i({setup(v){const e=a(0),d=a(0),s=a(0),l=a(0),t=a(0),r=b=>b/100;return(b,u)=>{const V=m("el-slider");return c(),p(f,null,[o("div",$,[x,n(V,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=_=>e.value=_)},null,8,["modelValue"])]),o("div",S,[U,n(V,{modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=_=>d.value=_)},null,8,["modelValue"])]),o("div",y,[B,n(V,{modelValue:s.value,"onUpdate:modelValue":u[2]||(u[2]=_=>s.value=_),"show-tooltip":!1},null,8,["modelValue"])]),o("div",T,[h,n(V,{modelValue:l.value,"onUpdate:modelValue":u[3]||(u[3]=_=>l.value=_),"format-tooltip":r},null,8,["modelValue"])]),o("div",j,[z,n(V,{modelValue:t.value,"onUpdate:modelValue":u[4]||(u[4]=_=>t.value=_),disabled:""},null,8,["modelValue"])])],64)}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const M={class:"slider-demo-block"},O=o("span",{class:"demonstration"},"Breakpoints not displayed",-1),w={class:"slider-demo-block"},F=o("span",{class:"demonstration"},"Breakpoints displayed",-1),D=i({setup(v){const e=a(0),d=a(0);return(s,l)=>{const t=m("el-slider");return c(),p(f,null,[o("div",M,[O,n(t,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r),step:10},null,8,["modelValue"])]),o("div",w,[F,n(t,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=r=>d.value=r),step:10,"show-stops":""},null,8,["modelValue"])])],64)}}});var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const H={class:"slider-demo-block"},N=i({setup(v){const e=a([4,8]);return(d,s)=>{const l=m("el-slider");return c(),p("div",H,[n(l,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value=t),range:"","show-stops":"",max:10},null,8,["modelValue"])])}}});var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const q={class:"slider-demo-block"},A=i({setup(v){const e=a([30,60]),d=g({0:"0\xB0C",8:"8\xB0C",37:"37\xB0C",50:{style:{color:"#1989FA"},label:"50%"}});return(s,l)=>{const t=m("el-slider");return c(),p("div",q,[n(t,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value=r),range:"",marks:k(d)},null,8,["modelValue","marks"])])}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const E={class:"slider-demo-block"},G=i({setup(v){const e=a(0);return(d,s)=>{const l=m("el-slider");return c(),p("div",E,[n(l,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value=t),"show-input":""},null,8,["modelValue"])])}}});var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const I={class:"slider-demo-block"},J=i({setup(v){const e=a(0);return(d,s)=>{const l=m("el-slider");return c(),p("div",I,[n(l,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value=t),vertical:"",height:"200px"},null,8,["modelValue"])])}}});var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{L as _,P as a,Q as b,R as c,W as d,X as e};