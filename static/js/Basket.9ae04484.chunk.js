"use strict";(self.webpackChunkValley_shop=self.webpackChunkValley_shop||[]).push([[67],{3214:function(e,s,c){c.r(s);var n=c(2791),t=c(4059),a=c(5914),i=c(9434),l=c(7689),r=c(1087),o=c(4994),d=c(184);s.default=function(e){var s=e.setBasketPopupOpen,c=(0,i.I0)(),h=(0,l.TH)(),u=(0,o.a)(),m="/Category"===h.pathname||h.pathname.includes("/Product/")||"/Favorites"===h.pathname||u.width<=768&&!0,p=(0,i.v9)((function(e){return e.checkoutReducer})).checkoutItems,x=p.reduce((function(e,s){return Number(s.price*s.quantity)+e}),0),j=p.length>0?30:0;(0,n.useEffect)((function(){c((0,a.zF)())}),[]);var k=p.map((function(e){return(0,d.jsxs)("div",{className:t.Z.basketItem,children:[(0,d.jsx)("button",{className:t.Z.deliteItem,onClick:function(){return c((0,a.QS)(e.number))},children:"X"}),(0,d.jsx)("img",{className:t.Z.imgItem,src:"/Valley_shop/".concat(e.imageUrl[0]),alt:"item"}),(0,d.jsxs)("div",{className:t.Z.infoItem,children:[(0,d.jsx)("h4",{className:t.Z.nameItem,children:e.title}),(0,d.jsx)("p",{className:t.Z.labelInfo,children:"Size:"}),(0,d.jsx)("div",{className:t.Z.sizeMark,children:e.size}),(0,d.jsx)("p",{className:t.Z.labelInfo,children:"Quantity:"}),(0,d.jsxs)("div",{className:t.Z.quantityBlock,children:[(0,d.jsx)("div",{className:t.Z.quantity,children:e.quantity}),(0,d.jsx)("span",{className:t.Z.quantitySet,onClick:function(){return c((0,a.Wc)(e))},children:"+"}),(0,d.jsx)("span",{className:t.Z.quantitySet,onClick:function(){return c((0,a.GJ)(e))},children:"-"})]}),(0,d.jsxs)("div",{className:t.Z.priceItem,children:[Number(e.price*e.quantity),(0,d.jsx)("p",{children:"$"})]})]})]},e.id)}));return(0,d.jsxs)("div",{className:m?"".concat(t.Z.checkoutBasketPopup," ").concat(t.Z.checkoutBasket):t.Z.checkoutBasket,children:[(0,d.jsxs)("button",{className:t.Z.closeBtn,onClick:function(){return s(!1)},children:[(0,d.jsx)("svg",{className:t.Z.closeBtnImg,viewBox:"0 0 35 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M24 4L8 20L24 36",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("p",{className:t.Z.closeBtnText,children:"continue shopping"})]}),(0,d.jsxs)("div",{className:t.Z.info,children:[(0,d.jsx)("h2",{children:"My purchases"}),(0,d.jsx)("span",{children:"-"})]}),(0,d.jsx)("div",{className:t.Z.basketInner,children:p.length>0?k:(0,d.jsxs)("div",{className:t.Z.emptyBasket,children:[(0,d.jsx)("svg",{className:t.Z.emptyBasketImage,width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M11.4167 2.79167C11.4167 2.28334 11.2148 1.79582 10.8553 1.43638C10.4959 1.07693 10.0084 0.875\r 9.50002 0.875C8.99169 0.875 8.50418 1.07693 8.14473 1.43638C7.78529 1.79582 7.58335 2.28334 7.58335\r 2.79167M16.4575 7.292L17.7848 15.917C17.8268 16.19 17.8093 16.4688 17.7335 16.7344C17.6577 17 17.5254\r 17.246 17.3456 17.4557C17.1659 17.6654 16.9429 17.8338 16.692 17.9493C16.4412 18.0648 16.1683 18.1248\r 15.8921 18.125H3.10794C2.83158 18.125 2.55849 18.0653 2.30739 17.9499C2.05628 17.8345 1.83309 17.6662\r 1.65313 17.4565C1.47317 17.2467 1.34069 17.0006 1.26478 16.7349C1.18886 16.4691 1.17131 16.1901 1.21331\r 15.917L2.5406 7.292C2.61023 6.83927 2.83968 6.42645 3.18741 6.1283C3.53513 5.83015 3.97814 5.66638 4.43619\r 5.66667H14.5639C15.0217 5.66661 15.4645 5.83048 15.812 6.12861C16.1596 6.42674 16.3879 6.83944 16.4575\r 7.292Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("p",{className:t.Z.emptyBasketText,children:"you haven't added any items to cart yet"})]})}),(0,d.jsxs)("div",{className:t.Z.priceInfo,children:[(0,d.jsx)("p",{children:"Cost of the items:"}),x,(0,d.jsx)("p",{children:"$"})]}),(0,d.jsxs)("div",{className:"".concat(t.Z.priceInfo," ").concat(t.Z.delivery),children:[(0,d.jsx)("p",{children:"Delivery cost:"}),j,(0,d.jsx)("p",{children:"$"})]}),(0,d.jsxs)("div",{className:t.Z.priceTotal,children:[(0,d.jsx)("p",{children:"Total due:"}),x+j,(0,d.jsx)("p",{children:"$"})]}),(0,d.jsx)("button",{form:"checkout",type:"submit",className:"".concat(t.Z.btn," ").concat(t.Z.submitBtn),children:"proceed"}),(0,d.jsx)(r.OL,{to:"/Checkout",onClick:function(){return s(!1)},className:"".concat(t.Z.btn," ").concat(t.Z.checkoutLink),children:"Checkout"})]})}}}]);
//# sourceMappingURL=Basket.9ae04484.chunk.js.map