(this.webpackJsonpfridge_project=this.webpackJsonpfridge_project||[]).push([[0],{39:function(e,t,i){},41:function(e,t,i){},55:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i(29),a=i.n(s),n=(i(39),i(17)),m=i(2),r=i(5),l=i(0),j=Object(c.createContext)(),o=function(e){var t=Object(c.useState)(90),i=Object(r.a)(t,2),s=i[0],a=i[1];return Object(l.jsx)(j.Provider,{value:{rotate:s,setRotate:a},children:e.children})},d=(i(41),i(34)),b=Object(c.createContext)();function g(){return Object(c.useContext)(b)}function u(e){var t=e.children,i=Object(c.useState)(null),s=Object(r.a)(i,2),a=s[0],n=s[1];return Object(c.useEffect)((function(){var e=Object(d.a)("http://localhost:8000");return n(e),function(){return e.close()}}),[]),Object(l.jsx)(b.Provider,{value:a,children:t})}var p=Object(c.createContext)(),O=function(e){var t=Object(c.useState)({id:1,name:"Cadbury Golden Biscuit Crunch",img:"1.jpg",price:"INR 450"}),i=Object(r.a)(t,2),s=i[0],a=i[1];return Object(l.jsx)(p.Provider,{value:{item:s,setItem:a},children:e.children})};var N=function(){var e=Object(m.f)(),t=g(),i=Object(c.useContext)(p).setItem,s=Object(c.useState)(1),a=Object(r.a)(s,2),n=a[0],j=a[1];Object(c.useEffect)((function(){null!=t&&t.emit("shop")}));var o=[{id:1,name:"Cadbury Golden Biscuit Crunch",img:"1.jpg",price:"INR 450"},{id:2,name:"Cadbury Turkish",img:"2.jpg",price:"INR 650"},{id:3,name:"Cadbury BANANA ARAMEL CRISP",img:"3.jpg",price:"INR 550"},{id:4,name:"Cadbury Bubbly White Chocolate centre",img:"4.jpg",price:"INR 799"},{id:5,name:"Cadbury Toffee Popcorn",img:"5.jpg",price:"INR 350"},{id:6,name:"Cadbury Fruit and Nut",img:"6.jpg",price:"INR 750"},{id:7,name:"Cadbury DAIM",img:"7.jpg",price:"INR 550"},{id:8,name:"Cadbury Ritz",img:"8.jpg",price:"INR 450"},{id:9,name:"Dairy Milk Treat Size",img:"9.jpg",price:"INR 1150"},{id:10,name:"Dairy Milk And Oreo Selection Box, Box of 8",img:"10.jpg",price:"INR 2000"},{id:11,name:"Dairy Milk Madbury Simply The Zes",img:"11.jpg",price:"INR 650"},{id:12,name:"Fruit & Nut Blended Chocolate",img:"/12.jpg",price:"INR 750"},{id:13,name:"Dairy Milk Bronzed Creme Crunch",img:"/13.jpg",price:"INR 950"},{id:14,name:"Cherries and Hazelnuts",img:"/14.jpg",price:"INR 500"},{id:15,name:"Dairy Milk Bar of Plenty Roast Hazelnut & Honey Roast Cashews",img:"/15.jpg",price:"INR 800"}];return Object(l.jsxs)("div",{className:"joystick-container",children:[Object(l.jsx)("div",{className:"bar top-bar"}),Object(l.jsx)("div",{className:"heading-mobile",children:Object(l.jsx)("h2",{children:"Press the arrow key"})}),Object(l.jsx)("div",{className:"joystick",children:Object(l.jsxs)("div",{className:"joystick-buttons",children:[Object(l.jsx)("div",{onClick:function(e){return j(n-1),void t.emit("left")},className:"joystick-btn left",children:Object(l.jsx)("img",{src:"/UI/left.png",alt:""})}),Object(l.jsx)("div",{onClick:function(e){return j(n+1),void t.emit("right")},className:"joystick-btn right",children:Object(l.jsx)("img",{src:"/UI/right.png",alt:""})}),Object(l.jsx)("div",{onClick:function(e){return j(n-3),void t.emit("top")},className:"joystick-btn top",children:Object(l.jsx)("img",{src:"/UI/top.png",alt:""})}),Object(l.jsx)("div",{onClick:function(e){return j(n+3),void t.emit("bottom")},className:"joystick-btn bottom",children:Object(l.jsx)("img",{src:"/UI/bottom.png",alt:""})}),Object(l.jsx)("div",{onClick:function(t){return e("/cart"),void i(o[n])},className:"joystick-btn selected",children:"OK"})]})}),Object(l.jsx)("div",{className:"bar bottom-bar"})]})};var x=function(){var e=Object(c.useContext)(p).item;return Object(l.jsxs)("div",{className:"cart-container",children:[Object(l.jsx)("div",{className:"bar top-bar"}),Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("img",{className:"logo-img",src:"/UI/Logo.png",alt:""})}),Object(l.jsx)("div",{className:"go-home",children:Object(l.jsx)(n.b,{to:"/joystick",children:Object(l.jsx)("button",{className:"back",children:"Back to Joystick"})})}),Object(l.jsx)("div",{className:"cart-heading",children:Object(l.jsx)("h3",{children:"My Cart (1)"})}),Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"item-image",children:Object(l.jsx)("img",{src:e.img,alt:"dairy milk"})}),Object(l.jsxs)("div",{className:"item-info",children:[Object(l.jsx)("div",{className:"item-name",children:Object(l.jsx)("h3",{children:e.name})}),Object(l.jsx)("div",{className:"item-quantity",children:Object(l.jsx)("p",{children:"Quantity: 1"})}),Object(l.jsx)("div",{className:"delete-btn",children:"Delete"})]}),Object(l.jsx)("div",{className:"item-price",children:Object(l.jsx)("h3",{children:e.price})})]}),Object(l.jsxs)("div",{className:"cart-total",children:[Object(l.jsx)("div",{className:"total-heading",children:Object(l.jsx)("h3",{children:"Sub-Total"})}),Object(l.jsx)("div",{className:"total-amount",children:Object(l.jsx)("h3",{children:e.price})})]}),Object(l.jsx)("div",{className:"tax-paragraph",children:Object(l.jsx)("p",{children:"Prices inclusive of taxes"})}),Object(l.jsx)("div",{onClick:function(){return window.location.replace("https://pages.razorpay.com/pl_IQNfBArFPuH1Z3/view")},className:"payment",children:"Pay Now"}),Object(l.jsx)("div",{className:"bar bottom-bar"})]})};var f=function(){var e=Object(m.f)(),t=Object(c.useState)(1),i=Object(r.a)(t,2),s=i[0],a=i[1],n=Object(c.useContext)(p).setItem,j=g();Object(c.useEffect)((function(){if(null!=j)return j.on("left",(function(){console.log("left clicked"),a(s-1)})),function(){return j.off("left")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("right",(function(){console.log("right clicked"),a(s+1)})),function(){return j.off("right")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("top",(function(){console.log("top clicked"),a(s-3)})),function(){return j.off("top")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("bottom",(function(){console.log("bottom clicked"),a(s+3)})),function(){return j.off("bottom")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("welcome",(function(){e("/welcome")})),function(){return j.off("welcome")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("ok",(function(){n(o[s]),e("/cart")})),function(){return j.off("ok")}}));var o=[{id:1,name:"Cadbury Golden Biscuit Crunch",img:"1.jpg",price:"INR 450"},{id:2,name:"Cadbury Turkish",img:"2.jpg",price:"INR 650"},{id:3,name:"Cadbury BANANA ARAMEL CRISP",img:"3.jpg",price:"INR 550"},{id:4,name:"Cadbury Bubbly White Chocolate centre",img:"4.jpg",price:"INR 799"},{id:5,name:"Cadbury Toffee Popcorn",img:"5.jpg",price:"INR 350"},{id:6,name:"Cadbury Fruit and Nut",img:"6.jpg",price:"INR 750"},{id:7,name:"Cadbury DAIM",img:"7.jpg",price:"INR 550"},{id:8,name:"Cadbury Ritz",img:"8.jpg",price:"INR 450"},{id:9,name:"Dairy Milk Treat Size",img:"9.jpg",price:"INR 1150"},{id:10,name:"Dairy Milk And Oreo Selection Box, Box of 8",img:"10.jpg",price:"INR 2000"},{id:11,name:"Dairy Milk Madbury Simply The Zes",img:"11.jpg",price:"INR 650"},{id:12,name:"Fruit & Nut Blended Chocolate",img:"/12.jpg",price:"INR 750"},{id:13,name:"Dairy Milk Bronzed Creme Crunch",img:"/13.jpg",price:"INR 950"},{id:14,name:"Cherries and Hazelnuts",img:"/14.jpg",price:"INR 500"},{id:15,name:"Dairy Milk Bar of Plenty Roast Hazelnut & Honey Roast Cashews",img:"/15.jpg",price:"INR 800"}];return Object(l.jsxs)("div",{className:"shopr-container",children:[Object(l.jsx)("div",{className:"logo-r",children:Object(l.jsx)("img",{className:"logo-img-r",src:"/UI/Logo-r.png",alt:""})}),Object(l.jsx)("div",{className:"item-container",children:Object(l.jsxs)("div",{className:"item-container-inner",children:[Object(l.jsx)("div",{className:"item-1-container",children:1===s?Object(l.jsx)("img",{className:"item-1",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-1",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-2-container",children:2===s?Object(l.jsx)("img",{className:"item-2",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-2",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-3-container",children:3===s?Object(l.jsx)("img",{className:"item-3",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-3",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-4-container",children:4===s?Object(l.jsx)("img",{className:"item-4",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-4",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-5-container",children:5===s?Object(l.jsx)("img",{className:"item-5",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-5",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-6-container",children:6===s?Object(l.jsx)("img",{className:"item-6",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-6",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-7-container",children:7===s?Object(l.jsx)("img",{className:"item-7",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-7",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-8-container",children:8===s?Object(l.jsx)("img",{className:"item-8",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-8",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-9-container",children:9===s?Object(l.jsx)("img",{className:"item-9",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-9",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-10-container",children:10===s?Object(l.jsx)("img",{className:"item-10",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-10",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-11-container",children:11===s?Object(l.jsx)("img",{className:"item-11",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-11",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-12-container",children:12===s?Object(l.jsx)("img",{className:"item-12",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-12",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-13-container",children:13===s?Object(l.jsx)("img",{className:"item-13",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-13",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-14-container",children:14===s?Object(l.jsx)("img",{className:"item-14",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-14",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-15-container",children:15===s?Object(l.jsx)("img",{className:"item-15",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-15",src:"/UI/items/item-1.png",alt:""})})]})})]})},h=i(33),v=i.n(h);var I=function(){return Object(l.jsx)("div",{className:"qrr_scanner",children:Object(l.jsx)(v.a,{value:"https://fridge.in.ngrok.io/joystick",size:110})})};var y=function(){var e=Object(m.f)(),t=g();return Object(c.useEffect)((function(){if(null!=t)return t.on("shop",(function(){console.log("This came from joystick"),e("/shop")})),function(){return t.off("shop")}}),[t,e]),Object(l.jsxs)("div",{className:"video-container",children:[Object(l.jsx)(I,{}),Object(l.jsx)("audio",{src:"/audio.wav"}),Object(l.jsx)("div",{className:"bg-video",children:Object(l.jsxs)("video",{className:"bg-video__content",autoPlay:!0,muted:!0,loop:!0,children:[Object(l.jsx)("source",{src:"/home/fridgevideo.mp4",type:"video/mp4"}),"Your browser is not supported!"]})})]})};var U=function(){return Object(l.jsx)("div",{className:"video-page",children:Object(l.jsx)("video",{src:"/video3.mp4",id:"vid",className:"video-home",autoPlay:!0,loop:!0,muted:!0})})};var C=function(){var e=Object(m.f)(),t=Object(c.useState)(1),i=Object(r.a)(t,2),s=i[0],a=i[1],n=Object(c.useContext)(p).setItem,j=g();Object(c.useEffect)((function(){var e=document.querySelector("body"),t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});if(e.dispatchEvent(t),console.log(e),null!=j)return j.on("left",(function(){console.log("left clicked"),a(s-1)})),function(){return j.off("left")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("right",(function(){console.log("right clicked"),a(s+1)})),function(){return j.off("right")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("top",(function(){console.log("top clicked"),a(s-3)})),function(){return j.off("top")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("bottom",(function(){console.log("bottom clicked"),a(s+3)})),function(){return j.off("bottom")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("welcome",(function(){e("/welcome")})),function(){return j.off("welcome")}})),Object(c.useEffect)((function(){if(null!=j)return j.on("ok",(function(){n(o[s]),e("/cart")})),function(){return j.off("ok")}}));var o=[{id:1,name:"Cadbury Golden Biscuit Crunch",img:"1.jpg",price:"INR 450"},{id:2,name:"Cadbury Turkish",img:"2.jpg",price:"INR 650"},{id:3,name:"Cadbury BANANA ARAMEL CRISP",img:"3.jpg",price:"INR 550"},{id:4,name:"Cadbury Bubbly White Chocolate centre",img:"4.jpg",price:"INR 799"},{id:5,name:"Cadbury Toffee Popcorn",img:"5.jpg",price:"INR 350"},{id:6,name:"Cadbury Fruit and Nut",img:"6.jpg",price:"INR 750"},{id:7,name:"Cadbury DAIM",img:"7.jpg",price:"INR 550"},{id:8,name:"Cadbury Ritz",img:"8.jpg",price:"INR 450"},{id:9,name:"Dairy Milk Treat Size",img:"9.jpg",price:"INR 1150"},{id:10,name:"Dairy Milk And Oreo Selection Box, Box of 8",img:"10.jpg",price:"INR 2000"},{id:11,name:"Dairy Milk Madbury Simply The Zes",img:"11.jpg",price:"INR 650"},{id:12,name:"Fruit & Nut Blended Chocolate",img:"/12.jpg",price:"INR 750"},{id:13,name:"Dairy Milk Bronzed Creme Crunch",img:"/13.jpg",price:"INR 950"},{id:14,name:"Cherries and Hazelnuts",img:"/14.jpg",price:"INR 500"},{id:15,name:"Dairy Milk Bar of Plenty Roast Hazelnut & Honey Roast Cashews",img:"/15.jpg",price:"INR 800"}];return Object(l.jsxs)("div",{className:"shopr90-container",children:[Object(l.jsx)("div",{className:"logo-r",children:Object(l.jsx)("img",{className:"logo-img-r",src:"/UI/Logo-r.png",alt:""})}),Object(l.jsx)("div",{className:"item-container",children:Object(l.jsxs)("div",{className:"item-container-inner",children:[Object(l.jsx)("div",{className:"item-1-container",children:1===s?Object(l.jsx)("img",{className:"item-1",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-1",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-2-container",children:2===s?Object(l.jsx)("img",{className:"item-2",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-2",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-3-container",children:3===s?Object(l.jsx)("img",{className:"item-3",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-3",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-4-container",children:4===s?Object(l.jsx)("img",{className:"item-4",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-4",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-5-container",children:5===s?Object(l.jsx)("img",{className:"item-5",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-5",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-6-container",children:6===s?Object(l.jsx)("img",{className:"item-6",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-6",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-7-container",children:7===s?Object(l.jsx)("img",{className:"item-7",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-7",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-8-container",children:8===s?Object(l.jsx)("img",{className:"item-8",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-8",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-9-container",children:9===s?Object(l.jsx)("img",{className:"item-9",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-9",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-10-container",children:10===s?Object(l.jsx)("img",{className:"item-10",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-10",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-11-container",children:11===s?Object(l.jsx)("img",{className:"item-11",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-11",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-12-container",children:12===s?Object(l.jsx)("img",{className:"item-12",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-12",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-13-container",children:13===s?Object(l.jsx)("img",{className:"item-13",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-13",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-14-container",children:14===s?Object(l.jsx)("img",{className:"item-14",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-14",src:"/UI/items/item-1.png",alt:""})}),Object(l.jsx)("div",{className:"item-15-container",children:15===s?Object(l.jsx)("img",{className:"item-15",src:"/UI/items/item-selected-1.png",alt:""}):Object(l.jsx)("img",{className:"item-15",src:"/UI/items/item-1.png",alt:""})})]})})]})};var R=function(){var e=Object(m.f)(),t=g();return Object(c.useEffect)((function(){if(null!=t)return t.on("shop",(function(){console.log("This came from joystick"),e("/shop")})),function(){return t.off("shop")}}),[t,e]),Object(l.jsxs)("div",{className:"video-container90",children:[Object(l.jsx)(I,{}),Object(l.jsx)("div",{className:"bg-video",children:Object(l.jsxs)("video",{className:"bg-video__content",autoPlay:!0,muted:!0,loop:!0,children:[Object(l.jsx)("source",{src:"/home/fridgevideo.mp4",type:"video/mp4"}),"Your browser is not supported!"]})})]})};var k=function(){var e=Object(c.useContext)(j).rotate;return Object(l.jsx)(n.a,{children:Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{path:"/",element:Object(l.jsx)(U,{})}),Object(l.jsx)(m.a,{path:"/home",element:0===e?Object(l.jsx)(y,{}):Object(l.jsx)(R,{})}),Object(l.jsx)(m.a,{path:"/joystick",element:Object(l.jsx)(N,{})}),Object(l.jsx)(m.a,{path:"/cart",element:Object(l.jsx)(x,{})}),Object(l.jsx)(m.a,{path:"/shop",element:0===e?Object(l.jsx)(f,{}):Object(l.jsx)(C,{})})]})})};a.a.render(Object(l.jsx)(u,{children:Object(l.jsx)(O,{children:Object(l.jsx)(o,{children:Object(l.jsx)(k,{})})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.3e307939.chunk.js.map