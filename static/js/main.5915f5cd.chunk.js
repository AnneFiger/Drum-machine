(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{36:function(e,a,c){},38:function(e,a,c){"use strict";c.r(a);c(9),c(10);var t=c(1),d=c.n(t),i=c(8),r=c.n(i),s=(c(36),c(2)),n=(c(7),c.p+"static/media/clap-crushed.ee922ec5.wav"),o=c.p+"static/media/clap-slapper.43c04087.wav",u=c.p+"static/media/cowbell-808.0ea44f38.wav",l=c.p+"static/media/crash-acoustic.611135ae.wav",m=c.p+"static/media/hihat-acoustic01.3c533742.wav",p=c.p+"static/media/hihat-analog.a10e8a63.wav",h=c.p+"static/media/hihat-electro.ac08809a.wav",y=c.p+"static/media/kick-808.d89f41a5.wav",v=c.p+"static/media/perc-hollow.023715a9.wav",j=c(0);var b=function(e){var a=e.clip,c=e.onSoundSelected,t=e.volume,i=d.a.useState(!1),r=Object(s.a)(i,2),n=r[0],o=r[1];d.a.useEffect((function(){document.addEventListener("keydown",u)}));var u=function(e){e.keyCode===a.keyCode&&l()},l=function(){o(!0);var e=document.getElementById(a.drumKey);e.currentTime=0,e.play(),e.volume=t,c(a.id),setTimeout((function(){o(!1)}),1e3)};return Object(j.jsxs)("button",{onClick:l,className:"rounded box-shadow--8dp drum-pad ".concat(n?"set-active":""),id:a.id,children:[Object(j.jsx)("audio",{className:"clip",id:a.drumKey,src:a.src,type:"audio/wav"}),a.drumKey]})},k=[{src:n,id:"crushed clap",drumKey:"Q",keyCode:81},{src:o,id:"clap slapper",drumKey:"W",keyCode:87},{src:u,id:"cowbell",drumKey:"E",keyCode:69},{src:l,id:"acoustic crash",drumKey:"A",keyCode:65},{src:m,id:"acoustic hihat",drumKey:"S",keyCode:83},{src:p,id:"analog hihat",drumKey:"D",keyCode:68},{src:h,id:"electro hihat",drumKey:"Z",keyCode:90},{src:y,id:"kick 808",drumKey:"X",keyCode:88},{src:v,id:"hollow perc",drumKey:"C",keyCode:67}];var w=function(){var e=d.a.useState(""),a=Object(s.a)(e,2),c=a[0],t=a[1],i=d.a.useState(1),r=Object(s.a)(i,2),n=r[0],o=r[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("div",{id:"drum-machine",children:Object(j.jsxs)("div",{id:"display",className:"rounded",children:[k.map((function(e){return Object(j.jsx)(b,{clip:e,onSoundSelected:t,volume:n},e.id)})),Object(j.jsx)("p",{children:c}),Object(j.jsx)("label",{children:"Volume"}),Object(j.jsx)("input",{type:"range",step:"0.01",id:"volume",onChange:function(e){return o(e.target.value)},value:n,max:"1",min:"0"})]})})})})};r.a.render(Object(j.jsx)(d.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},7:function(e,a,c){}},[[38,1,2]]]);
//# sourceMappingURL=main.5915f5cd.chunk.js.map