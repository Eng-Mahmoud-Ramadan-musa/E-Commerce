(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[630],{5435:function(e,t,r){Promise.resolve().then(r.bind(r,9483))},9483:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(7437),a=r(7648),n=r(2265),l=r(9826),d=r(4199);function u(){let[e,t]=(0,n.useState)(""),[r,u]=(0,n.useState)(""),[i,o]=(0,n.useState)(""),{registerUser:c,error:m,success:x}=(0,n.useContext)(l.S),{mode:f}=(0,n.useContext)(d.N),h=async t=>{t.preventDefault(),await c({name:e,email:r,password:i,shoping:[],favorite:[]})};return(0,s.jsx)("div",{className:"flex justify-center items-center w-52 h-dvh",children:(0,s.jsxs)("form",{onSubmit:h,style:{background:"".concat("dark"===f?"#eeeeee44":"#33333355"),color:"".concat("dark"===f?"#eee":"#333")},className:"flex flex-col justify-center items-center gap-5 h-[70%] px-[5%] rounded-xl",children:[(0,s.jsx)("h2",{className:"text-white font-bold text-2xl",children:"Sign Up"}),(0,s.jsxs)("fieldset",{className:"border rounded-lg overflow-hidden",children:[(0,s.jsx)("legend",{className:"ms-4",children:"Name"}),(0,s.jsx)("input",{className:"text-black ps-2 border border-black rounded-lg",type:"text",value:e,onChange:e=>t(e.target.value),name:"name",required:!0})]}),(0,s.jsxs)("fieldset",{className:"border rounded-lg overflow-hidden",children:[(0,s.jsx)("legend",{className:"ms-4",children:"Email"}),(0,s.jsx)("input",{className:"text-black ps-2 border border-black rounded-lg",type:"email",value:r,onChange:e=>u(e.target.value),name:"email",required:!0})]}),(0,s.jsxs)("fieldset",{className:"border rounded-lg overflow-hidden",children:[(0,s.jsx)("legend",{className:"ms-4",children:"Password"}),(0,s.jsx)("input",{className:"text-black ps-2 border border-black rounded-lg",type:"password",value:i,onChange:e=>o(e.target.value),name:"password",required:!0})]}),(0,s.jsx)("input",{type:"submit",className:"text-white bg-green-500 px-4 rounded-lg border",value:"Create"}),(0,s.jsx)(a.default,{href:"/login",children:"Login"}),m&&(0,s.jsx)("p",{className:"text-red-500",children:m}),x&&(0,s.jsx)("p",{className:"text-green-500",children:x})]})})}},4199:function(e,t,r){"use strict";r.d(t,{N:function(){return n},ThemeProvider:function(){return l}});var s=r(7437),a=r(2265);let n=(0,a.createContext)(),l=e=>{let{children:t}=e,[r,l]=(0,a.useState)("dark");return(0,s.jsx)(n.Provider,{value:{toggle:()=>{l(e=>"dark"===e?"light":"dark")},mode:r},children:(0,s.jsx)("div",{className:"theme ".concat(r),children:t})})}},9826:function(e,t,r){"use strict";r.d(t,{S:function(){return l},default:function(){return d}});var s=r(7437),a=r(2265),n=r(9376);let l=(0,a.createContext)();function d(e){let{children:t}=e,[r,d]=(0,a.useState)([]),[u,i]=(0,a.useState)(null),[o,c]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),f=(0,n.useRouter)();return(0,a.useEffect)(()=>{let e=localStorage.getItem("users");e?d(JSON.parse(e)):d([])},[]),(0,s.jsx)(l.Provider,{value:{registerUser:e=>{if(r.some(t=>t.email===e.email))c("المستخدم موجود بالفعل"),x("");else{let t=[...r,e];d(t),c(""),setTimeout(()=>{f.push("/login")},500),x("تم إنشاء المستخدم بنجاح!"),localStorage.setItem("users",JSON.stringify(t))}},error:o,success:m,users:r,setUser:i,user:u},children:t})}}},function(e){e.O(0,[448,971,117,744],function(){return e(e.s=5435)}),_N_E=e.O()}]);