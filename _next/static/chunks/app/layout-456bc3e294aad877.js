(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2753:function(e,t,r){Promise.resolve().then(r.bind(r,1117)),Promise.resolve().then(r.bind(r,1086)),Promise.resolve().then(r.bind(r,689)),Promise.resolve().then(r.bind(r,4199)),Promise.resolve().then(r.bind(r,9826)),Promise.resolve().then(r.t.bind(r,2778,23))},1117:function(e,t,r){"use strict";r.d(t,{default:function(){return c}});var s=r(7437),a=r(2265),l=r(3145);let n=[{id:1,name:"facebook"},{id:2,name:"whatsapp"},{id:3,name:"telegram"},{id:4,name:"linkedin"},{id:5,name:"gmail"}];var o=r(4199);function c(){let{mode:e}=(0,a.useContext)(o.N);return(0,s.jsxs)("div",{style:{borderTop:"1px solid ".concat("dark"===e?"#fff":"#333")},className:"flex justify-between items-center py-2 font-bold px-[5%]",children:[(0,s.jsx)("p",{children:"\xa9 mahmoud ramadan"}),(0,s.jsx)("div",{className:"flex gap-2",children:n.map(e=>(0,s.jsx)(l.default,{src:"/images/icons/".concat(e.name,".png"),width:25,height:25,className:"opacity-60 hover:opacity-100 duration-200 ease-in",alt:"hexashop ".concat(e.name," link")},e.id))})]})}},1086:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var s=r(7437),a=r(7648),l=r(4295),n=r(2744),o=r(1273),c=r(4199),i=r(2265),d=r(7776);function u(){let{mode:e,toggle:t}=(0,i.useContext)(c.N);return(0,s.jsxs)("div",{onClick:t,className:"relative flex justify-between gap-1 items-center border border-green-500 rounded-xl",children:[(0,s.jsx)(d.HGq,{}),(0,s.jsx)(n.Dq,{className:"text-[gold]"}),(0,s.jsx)("div",{className:"absolute top-0 w-1/2 h-full cursor-pointer bg-green-500 rounded-full",style:"dark"!==e?{left:"1px"}:{right:"1px"}})]})}var f=r(689),m=r(9826);function h(){let[e,t]=(0,i.useState)(0),{state:r,dispatch:c}=(0,i.useContext)(f.s),{user:d,setUser:h}=(0,i.useContext)(m.S);return(0,i.useEffect)(()=>{t(r.cartItems.reduce((e,t)=>e+t.count,0))},[r.cartItems]),(0,s.jsxs)("div",{className:"flex justify-between items-center py-2 px-[5%] fixed top-0 bg-inherit w-full border-b z-50",children:[(0,s.jsx)(a.default,{href:"/",className:"text-[gold] font-bold text-2xl",children:"store"}),(0,s.jsxs)(a.default,{href:"/search",className:"flex items-center border border-black overflow-hidden rounded-lg w-1/3",children:[(0,s.jsx)("input",{type:"text",value:r.textSearch,onChange:e=>{c({type:"SET_SEARCH_TERM",payload:e.target.value||""})},className:"dark:text-black ps-2 w-full",placeholder:"Search..."}),(0,s.jsx)(l.FKI,{className:"text-2xl dark:text-black dark:bg-white text-center p-0 font-bold"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 text-xl",children:[(0,s.jsx)(u,{}),(0,s.jsxs)(a.default,{href:"/faviorts",className:"relative rounded-lg",children:[(0,s.jsx)(n.iqB,{}),(0,s.jsx)("small",{className:"absolute bg-green-500 rounded-full w-4 h-4 text-sm flex items-center justify-center border -top-2 -right-2 text-white",children:r.favoriteItems.length})]}),(0,s.jsxs)(a.default,{href:"/shoping",className:"relative rounded-lg",children:[(0,s.jsx)(l.kdn,{}),(0,s.jsx)("small",{className:"absolute bg-green-500 rounded-full w-4 h-4 text-sm flex items-center justify-center border -top-2 -right-2 text-white",children:e})]}),(0,s.jsx)(a.default,{href:"/login",className:"w-5 h-6 border flex justify-center items-center overflow-hidden rounded-full ",children:null!=d?(0,s.jsx)("h3",{className:"text-sm",children:d.name.charAt(0)}):(0,s.jsx)(o.BKo,{className:"w-3 h-4"})}),(0,s.jsx)(l.CmG,{className:"text-white bg-red-500 px-1 text-2xl rounded-e-md cursor-pointer",onClick:()=>h(null)})]})]})}},689:function(e,t,r){"use strict";r.d(t,{s:function(){return o},StateProvider:function(){return c}});var s=r(7437),a=r(2265);let l={products:[],filteredProducts:[],textSearch:"",searchProducts:[],category:"all",cartItems:[],favoriteItems:[]},n=(e,t)=>{switch(t.type){case"SET_PRODUCTS":return{...e,products:t.payload,filteredProducts:t.payload};case"FILTER_BY_CATEGORY":return{...e,category:t.payload,filteredProducts:"all"===t.payload?e.products:e.products.filter(e=>e.category===t.payload)};case"SET_SEARCH_TERM":return{...e,textSearch:t.payload,searchProducts:e.products.filter(e=>e.title.toLowerCase().includes(t.payload.toLowerCase()))};case"ADD_TO_SHOPPING":if(!e.cartItems.find(e=>e.id===t.payload.id))return{...e,cartItems:[...e.cartItems,{...t.payload,count:1}]};{let r=e.cartItems.map(e=>e.id===t.payload.id?{...e,count:e.count+1}:e);return{...e,cartItems:r}}case"REMOVE_FROM_SHOPPING":return{...e,cartItems:e.cartItems.map(e=>e.id!==t.payload.id?e:e.count>1?{...e,count:e.count-1}:null).filter(Boolean)};case"ADD_TO_FAVORITE":return{...e,favoriteItems:[...e.favoriteItems,t.payload]};case"REMOVE_TO_FAVORITE":return{...e,favoriteItems:e.favoriteItems.filter(e=>e.id!==t.payload.id)};default:return e}},o=(0,a.createContext)(),c=e=>{let{children:t}=e,[r,c]=(0,a.useReducer)(n,l),[i,d]=(0,a.useState)(!0),[u,f]=(0,a.useState)(null),m=async()=>{try{d(!0);let e=await fetch("https://dummyjson.com/products");if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let t=await e.json();c({type:"SET_PRODUCTS",payload:t.products})}catch(e){f(e.message),console.error("Error fetching data:",e)}finally{d(!1)}};return((0,a.useEffect)(()=>{m()},[]),i)?(0,s.jsx)("div",{className:"w-full h-dvh flex justify-center items-center",children:"Loading..."}):u?(0,s.jsxs)("div",{children:["Error: ",u]}):(0,s.jsx)(o.Provider,{value:{state:r,dispatch:c},children:t})}},4199:function(e,t,r){"use strict";r.d(t,{N:function(){return l},ThemeProvider:function(){return n}});var s=r(7437),a=r(2265);let l=(0,a.createContext)(),n=e=>{let{children:t}=e,[r,n]=(0,a.useState)("dark");return(0,s.jsx)(l.Provider,{value:{toggle:()=>{n(e=>"dark"===e?"light":"dark")},mode:r},children:(0,s.jsx)("div",{className:"theme ".concat(r),children:t})})}},9826:function(e,t,r){"use strict";r.d(t,{S:function(){return n},default:function(){return o}});var s=r(7437),a=r(2265),l=r(9376);let n=(0,a.createContext)();function o(e){let{children:t}=e,[r,o]=(0,a.useState)([]),[c,i]=(0,a.useState)(null),[d,u]=(0,a.useState)(""),[f,m]=(0,a.useState)(""),h=(0,l.useRouter)();return(0,a.useEffect)(()=>{let e=localStorage.getItem("users");e?o(JSON.parse(e)):o([])},[]),(0,s.jsx)(n.Provider,{value:{registerUser:e=>{if(r.some(t=>t.email===e.email))u("المستخدم موجود بالفعل"),m("");else{let t=[...r,e];o(t),u(""),setTimeout(()=>{h.push("/login")},500),m("تم إنشاء المستخدم بنجاح!"),localStorage.setItem("users",JSON.stringify(t))}},error:d,success:f,users:r,setUser:i,user:c},children:t})}},2778:function(){}},function(e){e.O(0,[461,51,452,240,994,448,292,971,117,744],function(){return e(e.s=2753)}),_N_E=e.O()}]);