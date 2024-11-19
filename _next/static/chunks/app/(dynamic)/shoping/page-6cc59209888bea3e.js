(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{9259:function(e,t,r){Promise.resolve().then(r.bind(r,6982))},5523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return s}});let s=r(7043)._(r(2265)).default.createContext(null)},6982:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(7437),a=r(689),c=r(3145),l=r(2265),n=r(9089),i=r(2787),o=r(4199);function u(){let{state:e,dispatch:t}=(0,l.useContext)(a.s),{mode:r}=(0,l.useContext)(o.N),u="dark"===r?"#eee":"#333",d=e=>{t({type:"REMOVE_FROM_SHOPPING",payload:e})},f=e=>{t({type:"ADD_TO_SHOPPING",payload:e})};return e.cartItems&&0!==e.cartItems.length?(0,s.jsxs)("div",{className:"py-5 w-full gap-2 flex justify-center flex-wrap items-center px-[5%]",children:[(0,s.jsxs)("div",{className:"w-10/12 flex justify-between items-center",style:{borderBottom:"1px solid ".concat(u)},children:[(0,s.jsx)("h3",{className:"text-center w-full",children:"image"}),(0,s.jsx)("h3",{className:"text-center w-full",children:"price"}),(0,s.jsx)("h3",{className:"text-center w-full",children:"count"}),(0,s.jsx)("h3",{className:"text-center w-full",children:"total"})]}),e.cartItems.map(e=>(0,s.jsxs)("div",{className:"w-10/12 h-16 flex justify-between items-center",style:{borderBottom:"1px solid ".concat(u)},children:[(0,s.jsx)("div",{className:"relative text-center h-full w-full overflow-hidden",children:(0,s.jsx)(c.default,{src:e.image,className:"mx-auto",alt:e.title,width:70,height:90})}),(0,s.jsx)("div",{className:"text-center w-full",children:(0,s.jsx)("h3",{children:e.price})}),(0,s.jsxs)("div",{className:"flex justify-between items-center w-full border py-px",children:[(0,s.jsx)("button",{className:"w-full",onClick:()=>d(e),children:(0,s.jsx)(n.iFH,{className:"mx-auto"})}),(0,s.jsx)("h3",{className:"text-center w-full bg-green-500 text-white rounded-full",children:e.count}),(0,s.jsx)("button",{className:"w-full",onClick:()=>f(e),children:(0,s.jsx)(i.zth,{className:"mx-auto"})})]}),(0,s.jsx)("div",{className:"text-center w-full",children:(0,s.jsx)("h3",{children:(e.price*e.count).toFixed(1)})})]},e.id))]}):(0,s.jsx)("div",{className:"w-full text-white h-[80vh] flex justify-center items-center",children:"no shoping products"})}},689:function(e,t,r){"use strict";r.d(t,{s:function(){return n},StateProvider:function(){return i}});var s=r(7437),a=r(2265);let c={products:[],filteredProducts:[],textSearch:"",searchProducts:[],category:"all",cartItems:[],favoriteItems:[]},l=(e,t)=>{switch(t.type){case"SET_PRODUCTS":return{...e,products:t.payload,filteredProducts:t.payload};case"FILTER_BY_CATEGORY":return{...e,category:t.payload,filteredProducts:"all"===t.payload?e.products:e.products.filter(e=>e.category===t.payload)};case"SET_SEARCH_TERM":return{...e,textSearch:t.payload,searchProducts:e.products.filter(e=>e.title.toLowerCase().includes(t.payload.toLowerCase()))};case"ADD_TO_SHOPPING":if(!e.cartItems.find(e=>e.id===t.payload.id))return{...e,cartItems:[...e.cartItems,{...t.payload,count:1}]};{let r=e.cartItems.map(e=>e.id===t.payload.id?{...e,count:e.count+1}:e);return{...e,cartItems:r}}case"REMOVE_FROM_SHOPPING":return{...e,cartItems:e.cartItems.map(e=>e.id!==t.payload.id?e:e.count>1?{...e,count:e.count-1}:null).filter(Boolean)};case"ADD_TO_FAVORITE":return{...e,favoriteItems:[...e.favoriteItems,t.payload]};case"REMOVE_TO_FAVORITE":return{...e,favoriteItems:e.favoriteItems.filter(e=>e.id!==t.payload.id)};default:return e}},n=(0,a.createContext)(),i=e=>{let{children:t}=e,[r,i]=(0,a.useReducer)(l,c),[o,u]=(0,a.useState)(!0),[d,f]=(0,a.useState)(null),h=async()=>{try{u(!0);let e=await fetch("https://dummyjson.com/products");if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let t=await e.json();i({type:"SET_PRODUCTS",payload:t.products})}catch(e){f(e.message),console.error("Error fetching data:",e)}finally{u(!1)}};return((0,a.useEffect)(()=>{h()},[]),o)?(0,s.jsx)("div",{className:"w-full h-dvh flex justify-center items-center",children:"Loading..."}):d?(0,s.jsxs)("div",{children:["Error: ",d]}):(0,s.jsx)(n.Provider,{value:{state:r,dispatch:i},children:t})}},4199:function(e,t,r){"use strict";r.d(t,{N:function(){return c},ThemeProvider:function(){return l}});var s=r(7437),a=r(2265);let c=(0,a.createContext)(),l=e=>{let{children:t}=e,[r,l]=(0,a.useState)("dark");return(0,s.jsx)(c.Provider,{value:{toggle:()=>{l(e=>"dark"===e?"light":"dark")},mode:r},children:(0,s.jsx)("div",{className:"theme ".concat(r),children:t})})}}},function(e){e.O(0,[821,699,292,971,117,744],function(){return e(e.s=9259)}),_N_E=e.O()}]);