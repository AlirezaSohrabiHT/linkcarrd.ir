(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{4589:function(e,s,t){Promise.resolve().then(t.bind(t,5938))},5938:function(e,s,t){"use strict";var a=t(7437),l=t(2265),i=t(8472),n=t(6463);s.default=()=>{let[e,s]=(0,l.useState)(""),[t,r]=(0,l.useState)(""),[d,o]=(0,l.useState)(""),[m,c]=(0,l.useState)(""),[u,x]=(0,l.useState)(""),g=(0,n.useRouter)(),h=async s=>{if(s.preventDefault(),t!==d){x("Passwords do not match");return}try{let s=(await i.Z.post("http://localhost:8000/api/register/",{username:e,password:t,email:m||void 0})).data.token;localStorage.setItem("token",s),g.push("/")}catch(e){x("Registration failed. Please check your details and try again.")}};return(0,a.jsxs)("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:[(0,a.jsx)("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:(0,a.jsx)("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"ثبت نام"})}),u&&(0,a.jsx)("p",{className:"block text-red-500 mb-4",children:u}),(0,a.jsxs)("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,a.jsxs)("form",{className:"space-y-4",action:"",onSubmit:h,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"نام کاربری"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("input",{id:"username",name:"username",type:"text",value:e,onChange:e=>s(e.target.value),required:!0,className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"ایمیل (ختیاری)"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("input",{type:"email",id:"email",value:m,onChange:e=>c(e.target.value),required:!0,className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"رمز عبور"})}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("input",{type:"password",id:"password",value:t,onChange:e=>r(e.target.value),required:!0,className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"تکرار رمز عبور"})}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:d,onChange:e=>o(e.target.value),required:!0,className:"block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"})})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"ورود"})})]}),(0,a.jsxs)("p",{className:"mt-10 text-center text-sm text-gray-500",children:["حساب کاربری دارید؟",(0,a.jsx)("a",{href:"#",className:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500",children:"وارد شوید"})]})]})]})}},6463:function(e,s,t){"use strict";var a=t(1169);t.o(a,"useRouter")&&t.d(s,{useRouter:function(){return a.useRouter}})}},function(e){e.O(0,[472,971,23,744],function(){return e(e.s=4589)}),_N_E=e.O()}]);