"use strict";(self.webpackChunkreact_deploy=self.webpackChunkreact_deploy||[]).push([[995],{6098:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(9439),s=n(2791),a=n(7689),r=n(5294),i=n(7559),c=n.n(i),o=n(184),u="https://sinalacare-api.neonauby.com";function d(){var e=(0,a.s0)(),t=(0,s.useState)([]),n=(0,l.Z)(t,2),i=n[0],d=n[1];function f(t){e(t)}(0,s.useEffect)((function(){var e=c().getToken();r.Z.get("".concat(u,"/api/v1/studi_kasus"),{headers:{Authorization:"Bearer "+e}}).then((function(e){console.log(e),d(e.data.data)})).catch((function(e){}))}),[]);var h=i.map((function(e,t){return(0,o.jsxs)("button",{className:"h-[70px] w-full flex flex-col justify-center text-gray-800 mb-1 pl-[10px] border-2 rounded-md border-slate-600",type:"button",onClick:function(){return f("/studi-kasus/"+e.id)},children:[(0,o.jsx)("h1",{className:"text-md font-semibold",children:e.title}),(0,o.jsx)("p",{className:"text-sm",children:e.deskripsi})]},e.id)}));return(0,o.jsx)("div",{className:"h-screen w-full grid content-center",children:(0,o.jsxs)("div",{className:"relative h-[667px] bg-slate-100 w-[768px] mx-auto rounded-xl shadow-md overflow-hidden border-4 border-slate-50",children:[(0,o.jsx)("section",{className:"absolute top-0 left-0 w-full p-2",id:"header",children:(0,o.jsx)("button",{className:"bg-white hover:bg-slate-400 text-gray-600 border-1 border-neutral-700 hover:border-neutral-500 font-bold py-2 px-4 rounded inline-flex items-center",type:"button",onClick:function(){return f("/")},children:(0,o.jsx)("span",{children:"Kembali"})})}),(0,o.jsxs)("section",{id:"content",className:"h-full w-full flex flex-col",children:[(0,o.jsx)("div",{className:"h-[80px] w-full text-center",children:(0,o.jsx)("div",{className:"h-full w-full flex justify-center items-center text-gray-800",children:(0,o.jsx)("h1",{className:"text-2xl",children:"Pilih Studi Kasus"})})}),(0,o.jsx)("div",{className:"h-[510px] w-full bg-white overflow-y-auto py-2",children:h})]}),(0,o.jsx)("section",{className:"absolute bottom-0 left-0 h-[60px] w-full",id:"footer",children:(0,o.jsxs)("div",{className:"absolute bottom-2 w-full text-center",children:[(0,o.jsx)("p",{className:"text-md font-thin text-slate-500",children:"Sinala Care v-0.0.1"}),(0,o.jsx)("p",{className:"text-sm font-thin text-slate-500",children:"\xa9 2023 - Universitas Hang Tuah Surabaya"})]})})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(9142);function s(e,t,n){return(t=(0,l.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}}]);
//# sourceMappingURL=995.0bd0c37c.chunk.js.map