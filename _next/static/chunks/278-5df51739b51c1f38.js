"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{117:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(2265);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:i="",children:d,iconNode:u,...f}=e;return(0,a.createElement)("svg",{ref:t,...n,width:s,height:s,stroke:r,strokeWidth:c?24*Number(l)/Number(s):l,className:o("lucide",i),...f},[...u.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),c=((e,t)=>{let r=(0,a.forwardRef)((r,n)=>{let{className:c,...i}=r;return(0,a.createElement)(l,{ref:n,iconNode:t,className:o("lucide-".concat(s(e)),c),...i})});return r.displayName="".concat(e),r})("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]])},1305:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7437),s=r(4295),o=r(2744),n=r(689),l=r(9826),c=r(9376),i=r(2265),d=r(4199);function u(e){let{product:t}=e,{id:r,title:u,category:f,image:h,rating:m,descount:p,price:x,stock:y}=t,v=(0,c.useRouter)(),{state:g,dispatch:j}=(0,i.useContext)(n.s),{user:N}=(0,i.useContext)(l.S),{mode:w}=(0,i.useContext)(d.N),k=g.favoriteItems.some(e=>e.id===r),E=e=>{N?e():v.push("/login")};return(0,a.jsxs)("div",{style:{background:"".concat("dark"===w?"#ffffff33":"#22222255")},className:"sm:hidden flex flex-col absolute top-4 right-1 text-xl bg-opacity-40 p-1 rounded-lg z-30",children:[(0,a.jsx)("button",{className:"hover:bg-green-500 rounded-full p-1 text-white z-30",onClick:()=>{E(()=>{j({type:"ADD_TO_SHOPPING",payload:{id:r,title:u,category:f,image:h,rating:m,descount:p,price:x,stock:y,count:1}})})},children:(0,a.jsx)(s.S$f,{})}),(0,a.jsx)("button",{style:{background:!0===k?"#f00":""},className:"hover:bg-red-500 rounded-full p-1 text-white z-30",onClick:()=>{E(()=>{k?j({type:"REMOVE_TO_FAVORITE",payload:{id:r}}):j({type:"ADD_TO_FAVORITE",payload:{id:r,title:u,category:f,image:h,rating:m,descount:p,price:x,stock:y}})})},children:(0,a.jsx)(o.iqB,{})})]})}},5920:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(7437),s=r(3145),o=r(7648),n=r(2265),l=r(4199),c=r(8396),i=r(1305);function d(e){let{id:t,title:r,category:d,image:u,rating:f,descount:h,price:m,stock:p}=e,{mode:x}=(0,n.useContext)(l.N);return(0,a.jsxs)("div",{style:{border:"1px solid ".concat("dark"==x?"#fff":"#222")},className:"divControl relative w-60 items-start p-2 rounded-xl duration-300 ease-in-out",children:[(0,a.jsxs)(o.default,{href:"/product/".concat(t),className:" ",children:[(0,a.jsx)(s.default,{src:u,width:220,height:50,alt:r}),(0,a.jsx)("h2",{className:"text-lg font-bold text-nowrap text-ellipsis overflow-hidden",children:r}),p&&(0,a.jsxs)("h3",{className:"text-sm font-semibold opacity-70",children:["stock: ",p]}),f&&(0,a.jsxs)("h3",{className:"text-sm font-semibold flex gap-1 items-center",children:["rating: ",(0,a.jsx)(c.Z,{rate:f})," "]}),h?(0,a.jsxs)("span",{className:"flex justify-between items-center px-2",children:[(0,a.jsxs)("del",{className:"text-sm font-semibold text-red-500 opacity-70",children:["price: ",m," $"]}),(0,a.jsxs)("h3",{className:"bg-green-500 px-1 rounded-lg",children:[(m-m*h/100).toFixed(1)," $"]})]}):(0,a.jsxs)("h3",{className:"text-sm font-semibold opacity-70",children:["price: ",m," $"]})]},t),(0,a.jsx)(i.Z,{product:{id:t,title:r,category:d,image:u,rating:f,descount:h,price:m,stock:p}})]})}},3397:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(7437),s=r(117);function o(){return(0,a.jsx)("div",{className:"flex justify-center items-center min-h-screen",children:(0,a.jsx)(s.Z,{size:100,color:"rgb(0,136,202,0.75",className:"animate-spin"})})}},8396:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(7437),s=r(4295);function o(e){let{rate:t}=e,r=[],o=Math.floor(t),n=t%1>=.5;for(let e=0;e<5;e++)e<o?r.push((0,a.jsx)(s.hF5,{className:"text-[gold]"},"full-".concat(e))):e===o&&n?r.push((0,a.jsxs)("div",{className:"relative overflow-hidden",children:[(0,a.jsx)(s.hF5,{className:"text-[gold]"}),(0,a.jsx)("div",{className:"absolute w-full h-full z-10 top-0 left-1/2 overflow-hidden bg-inherit ",children:(0,a.jsx)(s.hF5,{className:"text-gray-500  absolute -left-1/2"})})]},"half")):r.push((0,a.jsx)(s.hF5,{className:"text-gray-500"},"empty-".concat(e)));return(0,a.jsx)("span",{className:"flex",children:r})}},689:function(e,t,r){r.d(t,{s:function(){return l},StateProvider:function(){return c}});var a=r(7437),s=r(2265);let o={products:[],filteredProducts:[],textSearch:"",searchProducts:[],category:"all",cartItems:[],favoriteItems:[]},n=(e,t)=>{switch(t.type){case"SET_PRODUCTS":return{...e,products:t.payload,filteredProducts:t.payload};case"FILTER_BY_CATEGORY":return{...e,category:t.payload,filteredProducts:"all"===t.payload?e.products:e.products.filter(e=>e.category===t.payload)};case"SET_SEARCH_TERM":return{...e,textSearch:t.payload,searchProducts:e.products.filter(e=>e.title.toLowerCase().includes(t.payload.toLowerCase()))};case"ADD_TO_SHOPPING":if(!e.cartItems.find(e=>e.id===t.payload.id))return{...e,cartItems:[...e.cartItems,{...t.payload,count:1}]};{let r=e.cartItems.map(e=>e.id===t.payload.id?{...e,count:e.count+1}:e);return{...e,cartItems:r}}case"REMOVE_FROM_SHOPPING":return{...e,cartItems:e.cartItems.map(e=>e.id!==t.payload.id?e:e.count>1?{...e,count:e.count-1}:null).filter(Boolean)};case"ADD_TO_FAVORITE":return{...e,favoriteItems:[...e.favoriteItems,t.payload]};case"REMOVE_TO_FAVORITE":return{...e,favoriteItems:e.favoriteItems.filter(e=>e.id!==t.payload.id)};default:return e}},l=(0,s.createContext)(),c=e=>{let{children:t}=e,[r,c]=(0,s.useReducer)(n,o),[i,d]=(0,s.useState)(!0),[u,f]=(0,s.useState)(null),h=async()=>{try{d(!0);let e=await fetch("https://dummyjson.com/products");if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let t=await e.json();c({type:"SET_PRODUCTS",payload:t.products})}catch(e){f(e.message),console.error("Error fetching data:",e)}finally{d(!1)}};return((0,s.useEffect)(()=>{h()},[]),i)?(0,a.jsx)("div",{className:"w-full h-dvh flex justify-center items-center",children:"Loading..."}):u?(0,a.jsxs)("div",{children:["Error: ",u]}):(0,a.jsx)(l.Provider,{value:{state:r,dispatch:c},children:t})}},4199:function(e,t,r){r.d(t,{N:function(){return o},ThemeProvider:function(){return n}});var a=r(7437),s=r(2265);let o=(0,s.createContext)(),n=e=>{let{children:t}=e,[r,n]=(0,s.useState)("dark");return(0,a.jsx)(o.Provider,{value:{toggle:()=>{n(e=>"dark"===e?"light":"dark")},mode:r},children:(0,a.jsx)("div",{className:"theme ".concat(r),children:t})})}},9826:function(e,t,r){r.d(t,{S:function(){return n},default:function(){return l}});var a=r(7437),s=r(2265),o=r(9376);let n=(0,s.createContext)();function l(e){let{children:t}=e,[r,l]=(0,s.useState)([]),[c,i]=(0,s.useState)(null),[d,u]=(0,s.useState)(""),[f,h]=(0,s.useState)(""),m=(0,o.useRouter)();return(0,s.useEffect)(()=>{let e=localStorage.getItem("users");e?l(JSON.parse(e)):l([])},[]),(0,a.jsx)(n.Provider,{value:{registerUser:e=>{if(r.some(t=>t.email===e.email))u("المستخدم موجود بالفعل"),h("");else{let t=[...r,e];l(t),u(""),setTimeout(()=>{m.push("/login")},500),h("تم إنشاء المستخدم بنجاح!"),localStorage.setItem("users",JSON.stringify(t))}},error:d,success:f,users:r,setUser:i,user:c},children:t})}}}]);