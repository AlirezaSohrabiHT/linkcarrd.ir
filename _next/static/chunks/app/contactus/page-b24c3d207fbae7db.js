(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618,327],{3978:function(e,t,a){Promise.resolve().then(a.bind(a,3161))},3161:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var s=a(7437),r=a(2265),n=a(8472),i=a(7138),l=a(6463),c=a(92),m=a(4573),h=a(3182),o=()=>{let[e,t]=(0,r.useState)(null),[a,o]=(0,r.useState)(!1),d=(0,l.useRouter)();(0,r.useEffect)(()=>{let e=localStorage.getItem("token");e&&n.Z.get("http://45.149.77.102:8000/api/user/",{headers:{Authorization:"Token ".concat(e)}}).then(e=>{t(e.data)}).catch(()=>{localStorage.removeItem("token"),t(null)})},[]);let u=[{name:"خانه",href:"/"},{name:"درباره ما",href:"/aboutus"},{name:"ارتباط با ما",href:"/contactus"}],x=d.pathname,f=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")};return(0,s.jsx)(c.pJ,{as:"nav",className:"bg-black w-full mx-auto py-4",children:e=>{let{open:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"container mx-auto px-2 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"relative flex h-16 items-center justify-center",children:[(0,s.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center justify-center sm:hidden",children:(0,s.jsxs)(c.lG,{className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?(0,s.jsx)(m.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,s.jsx)(h.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,s.jsxs)("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[(0,s.jsx)("div",{className:"w-auto h-auto",children:(0,s.jsx)("img",{className:"h-8 w-auto mb-2 max-[400px]:h-6",src:"/image/logoWhite.png",alt:"Your Company"})}),(0,s.jsx)("div",{className:"hidden sm:ml-6 sm:block mr-6",children:(0,s.jsx)("div",{className:"flex justify-center items-center gap-7",children:u.map(e=>(0,s.jsx)(i.default,{href:e.href,legacyBehavior:!0,children:(0,s.jsx)("a",{className:f(e.href===x?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":e.href===x?"page":void 0,children:e.name})},e.name))})})]}),(0,s.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:(0,s.jsx)(i.default,{href:"/dashboard",legacyBehavior:!0,children:(0,s.jsx)("a",{className:"bg-white hover:bg-gray-200 text-black font-medium py-3 px-6 rounded-md   max-[400px]:py-2 max-[400px]:px-3 max-[400px]:font-medium max-[400px]:text-sm",children:"داشبورد"})})})]})}),(0,s.jsx)(c.V2,{className:"sm:hidden",children:(0,s.jsx)("div",{className:"space-y-1 px-2 pb-3 pt-2",children:u.map(e=>(0,s.jsx)(c.lG,{as:"a",href:e.href,className:f(e.href===x?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":e.href===x?"page":void 0,children:e.name},e.name))})})]})}})}}},function(e){e.O(0,[236,234,971,23,744],function(){return e(e.s=3978)}),_N_E=e.O()}]);