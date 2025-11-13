var e=function(exports){function t(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function n(e,n){t(e,n),n.add(e)}function r(e){"@babel/helpers - typeof";return r=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},r(e)}function i(e,t){if(r(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||`default`);if(r(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function a(e){var t=i(e,`string`);return r(t)==`symbol`?t:t+``}function o(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}return exports.assertClassBrand=s,exports.classPrivateMethodInitSpec=n,exports.defineProperty=o,exports}({}),t;(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const n=`modulepreload`,r=function(e){return`/front_7th_chapter2-1/`+e},i={},a=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=e(t.map(e=>{if(e=r(e,a),e in i)return;i[e]=!0;let t=e.endsWith(`.css`),o=t?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let n=s.length-1;n>=0;n--){let r=s[n];if(r.href===e&&(!t||r.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=t?`stylesheet`:n,t||(u.as=`script`),u.crossOrigin=``,u.href=e,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),t)return new Promise((t,n)=>{u.addEventListener(`load`,t),u.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${e}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[]){if(e.status!==`rejected`)continue;s(e.reason)}return e().catch(s)})},o=({type:e,message:t=``})=>{switch(e){case`success`:return`<div class="flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
          <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p class="text-sm font-medium">${t}</p>
            <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>`;case`info`:return`<div class="flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
          <div class="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p class="text-sm font-medium">${t}</p>
            <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>`;case`error`:return`<div class="flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
          <div class="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p class="text-sm font-medium">오류가 발생했습니다.</p>
            <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>`}alert(`알 수 없는 타입`)},s=2500;var c=class{static show({type:e=`info`,duration:t=s,message:n=``}){let r=document.querySelector(`.toast-container`);r&&r.remove();let i=document.createElement(`div`);i.className=`toast-container fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50`,i.innerHTML=o({type:e,message:n}),document.body.appendChild(i);let a=i.querySelector(`#toast-close-btn`);return a&&a.addEventListener(`click`,()=>{this.hide(i)}),t>0&&setTimeout(()=>{this.hide(i)},t),i}static hide(e){e&&e.parentNode&&e.remove()}};const l={};async function u(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function d(e){if(l[e])return l[e];let t=await fetch(`/api/products/${e}`);return l[e]=await t.json(),l[e]}async function f(){let e=await fetch(`/api/categories`);return await e.json()}var p=class{static init(e){window.addEventListener(`localStorageChange`,e)}static setItem(e,t){localStorage.setItem(e,t),window.dispatchEvent(new CustomEvent(`localStorageChange`,{detail:{key:e,value:t,type:`setItem`}}))}static removeItem(e){localStorage.removeItem(e),window.dispatchEvent(new CustomEvent(`localStorageChange`,{detail:{key:e,type:`removeItem`}}))}static getItem(e){return localStorage.getItem(e)}static clear(){localStorage.clear(),window.dispatchEvent(new CustomEvent(`localStorageChange`,{detail:{type:`clear`}}))}},m=class{static addCard(e,t=1){var n;let r=(n=JSON.parse(p.getItem(`shopping_cart`)??`{}`))?.items??[],i=r.find(t=>t.id===e.productId);i?i.quantity+=t:r.push({id:e.productId,title:e.title,price:e.lprice,quantity:1,image:e.image,selected:!1}),p.setItem(`shopping_cart`,JSON.stringify({items:r})),c.show({type:`success`,message:`장바구니에 추가되었습니다`})}static updateQuantity(e,t){var n;let r=(n=JSON.parse(p.getItem(`shopping_cart`)??`{}`))?.items??[],i=r.find(t=>t.id===e);i.quantity=t,p.setItem(`shopping_cart`,JSON.stringify({items:r}))}static getCartItems(){var e;return(e=JSON.parse(p.getItem(`shopping_cart`)??`{}`))?.items??[]}static getCartItem(e){var t;return((t=JSON.parse(p.getItem(`shopping_cart`)??`{}`))?.items??[]).find(t=>t.id===e)}static checkCartItem(e){var t;let n=(t=JSON.parse(p.getItem(`shopping_cart`)??`{}`))?.items??[],r=n.find(t=>t.id===e);r.selected=r.selected!==!0,p.setItem(`shopping_cart`,JSON.stringify({items:n}))}static checkAllCartItems(e){var t;let n=(t=JSON.parse(p.getItem(`shopping_cart`)??`{}`))?.items??[];n.forEach(t=>{t.selected=e}),p.setItem(`shopping_cart`,JSON.stringify({items:n}))}static removeCartItem(e){var t;let n=(t=JSON.parse(p.getItem(`shopping_cart`)??`{}`))?.items??[],r=n.filter(t=>t.id!==e);p.setItem(`shopping_cart`,JSON.stringify({items:r}))}static removeSelectedCartItems(){var e;let t=(e=JSON.parse(p.getItem(`shopping_cart`)??`{}`))?.items??[],n=t.filter(e=>!e.selected);p.setItem(`shopping_cart`,JSON.stringify({items:n})),c.show({type:`info`,message:`선택된 상품들이 삭제되었습니다`})}static removeAllCartItems(){p.clear(),c.show({type:`info`,message:`장바구니가 비워졌습니다`})}};const h=e=>`
    <div
      class="flex items-center py-3 border-b border-gray-100 cart-item"
      data-product-id="${e.id}"
    >
      <!-- 선택 체크박스 -->
      <label class="flex items-center mr-3">
        <input
          type="checkbox"
          ${e.selected?`checked`:``}
          class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          data-product-id="${e.id}"
        />
      </label>
      <!-- 상품 이미지 -->
      <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
        <img
          src="${e.image}"
          alt="${e.title}"
          class="w-full h-full object-cover cursor-pointer cart-item-image"
          data-product-id="${e.id}"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="flex-1 min-w-0">
        <h4
          class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title"
          data-product-id="${e.id}"
        >
          ${e.title}
        </h4>
        <p class="text-sm text-gray-600 mt-1">${Number(e.price).toLocaleString()}원</p>
        <!-- 수량 조절 -->
        <div class="flex items-center mt-2">
          <button
            class="quantity-decrease-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
            data-product-id="${e.id}"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <input
            type="number"
            value="${e.quantity}"
            min="1"
            class="quantity-input w-12 h-7 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            disabled=""
            data-product-id="${e.id}"
          />
          <button
            class="quantity-increase-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
            data-product-id="${e.id}"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- 가격 및 삭제 -->
      <div class="text-right ml-3">
        <p class="cart-item-price text-sm font-medium text-gray-900">${Number(Number(e.price)*Number(e.quantity)).toLocaleString()}원</p>
        <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.id}">
          삭제
        </button>
      </div>
    </div>`,g=()=>{let e=m.getCartItems(),t=e.reduce((e,t)=>e+t.price*+t.quantity,0),n=e.filter(e=>e.selected),r=n.reduce((e,t)=>e+t.price*+t.quantity,0);return`<div hidden class="fixed inset-0 z-50 overflow-y-auto cart-modal">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div
          class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh]"
        >
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              장바구니
            </h2>
            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          ${e.length===0?`
                <!-- 컨텐츠 -->
                  <div class="flex flex-col max-h-[calc(90vh-120px)]">
                    <!-- 빈 장바구니 -->
                    <div class="flex-1 flex items-center justify-center p-8">
                      <div class="text-center">
                        <div class="text-gray-400 mb-4">
                          <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                            ></path>
                          </svg>
                        </div>
                        <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                        <p class="text-gray-600">원하는 상품을 담아보세요!</p>
                      </div>
                    </div>
                  </div>
            
            `:`<!-- 컨텐츠 -->
                  <div class="flex flex-col max-h-[calc(90vh-120px)]">
                    <!-- 전체 선택 섹션 -->
                    <div class="p-4 border-b border-gray-200 bg-gray-50">
                      <label class="flex items-center text-sm text-gray-700">
                        <input
                          type="checkbox"
                          ${e.every(e=>e.selected)?`checked`:``}
                          id="cart-modal-select-all-checkbox"
                          class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                        />
                        전체선택 (${e.length}개)
                      </label>
                    </div>
                    <!-- 아이템 목록 -->
                    <div class="flex-1 overflow-y-auto">
                      <div class="p-4 space-y-4">${e.map(h).join(``)}</div>
                    </div>
                  </div>
                  <!-- 하단 액션 -->
                  <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
                    <!-- 선택된 아이템 정보 -->
                    ${n.length?`
                      
                    <div class="flex justify-between items-center mb-3 text-sm">
                      <span class="text-gray-600">선택한 상품 (${n.length}개)</span>
                      <span class="font-medium">${r.toLocaleString()}원</span>
                    </div>
                      `:``}
                    <!-- 총 금액 -->
                    <div class="flex justify-between items-center mb-4">
                      <span class="text-lg font-bold text-gray-900">총 금액</span>
                      <span class="text-xl font-bold text-blue-600">${t.toLocaleString()}원</span>
                    </div>
                    <!-- 액션 버튼들 -->
                    <div class="space-y-2">
                      ${n.length?`
                        
                      <button
                        id="cart-modal-remove-selected-btn"
                        class="w-full bg-red-600 text-white py-2 px-4 rounded-md
                       hover:bg-red-700 transition-colors text-sm"
                      >선택한 상품 삭제 (${n.length}개)
                      </button>
                        `:``}
                      
                      <div class="flex gap-2">
                        <button
                          id="cart-modal-clear-cart-btn"
                          class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md
                       hover:bg-gray-700 transition-colors text-sm"
                        >
                          전체 비우기
                        </button>
                        <button
                          id="cart-modal-checkout-btn"
                          class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md
                       hover:bg-blue-700 transition-colors text-sm"
                        >
                          구매하기
                        </button>
                      </div>
                    </div>
                  </div>  
                `}
        </div>
      </div>
    </div>`},_=e=>`
    <span
      class="${e<1?`invisible`:``} absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
    >
      ${e}
    </span>
  `,v=()=>{let e=m.getCartItems().length;return`<button
      id="cart-icon-btn"
      class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
        ></path>
      </svg>
      ${_(e)}
    </button>`},y=()=>{let e=location.pathname.startsWith(`/front_7th_chapter2-1/product`);return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
          ${e?`
            <div class="flex items-center space-x-3">
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>`:`
            <h1 class="text-xl font-bold text-gray-900">
              <a href="/front_7th_chapter2-1/" data-link="">쇼핑몰</a>
            </h1>`}
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              ${v()}
            </div>
          </div>
        </div>
      </header>`};var b=class{constructor(e,t={}){this.$container=e,this.props=t,this.state={},this.mount(),this.render()}mount(){}unmount(){this.$container.innerHTML=``}setState(e){this.state={...this.state,...e},this.render()}template(){return``}render(){this.$container.innerHTML=this.template()}async updateProps(e){return this.props={...this.props,...e},this.render(),Promise.resolve()}};const x=`
<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>`,S=`
<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
`,C=e=>{let t=Number(e),n=5-Number(e);return`
    ${x.repeat(t)}
    ${S.repeat(n)}
  `},w=()=>`
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© ${new Date().getFullYear()} 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>`,T=({children:e})=>`
  <div class="min-h-screen bg-gray-50">
    ${y()}
    <main class="max-w-md mx-auto px-4 py-4">
        ${e}
    </main>
    ${w()}
</div>
`;var E=class extends b{constructor(...t){super(...t),e.defineProperty(this,`cache`,{})}handleClick(e){if(e.target.closest(`#add-to-cart-btn`)){let{loaderData:e}=this.props,t=e.product,n=this.$container.querySelector(`#quantity-input`);n.value=1,m.addCard(t,n.value)}else if(e.target.closest(`.related-product-card`)){let t=e.target.closest(`.related-product-card`),n=t.dataset.productId;window.router2Instance.navigateTo(`${window.BASE_URL}product/${n}`)}else if(e.target.closest(`#quantity-increase`)){let e=this.$container.querySelector(`#quantity-input`),t=Number(e.value),n=Number(e.max);t<n&&(e.value=t+1)}else if(e.target.closest(`#quantity-decrease`)){let e=this.$container.querySelector(`#quantity-input`),t=Number(e.value),n=Number(e.min);t>n&&(e.value=t-1)}}mount(){this.boundHandleClick=this.handleClick.bind(this),this.$container.addEventListener(`click`,this.boundHandleClick)}unmount(){this.$container.removeEventListener(`click`,this.boundHandleClick)}template(){let{loaderData:e,isPending:t}=this.props,n=e;return T({children:t?D:A({...n,loading:t})})}};const D=`
<div class="py-20 bg-gray-50 flex items-center justify-center">
  <div class="text-center">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
    <p class="text-gray-600">상품 정보를 불러오는 중...</p>
  </div>
</div>`,O=e=>e?`
<nav class="mb-4">
  <div class="flex items-center space-x-2 text-sm text-gray-600">
    <a href="/front_7th_chapter2-1/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
    <button class="breadcrumb-link" data-category1="${e.category1}">
      ${e.category1}
    </button>
    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
    <button class="breadcrumb-link" data-category2="${e.category2}">
      ${e.category2}
    </button>
  </div>
</nav>`:``,k=e=>`
<div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
  <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
    <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
  </div>
  <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
  <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</p>
</div>
  `,A=({product:e,relatedProducts:t,loading:n})=>`
  <!-- 브레드크럼 -->
  ${O(e)}
  <!-- 상품 상세 정보 -->
  <div class="bg-white rounded-lg shadow-sm mb-6">
    <!-- 상품 이미지 -->
    <div class="p-4">
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img src="${e?.image}" alt="${e?.title}" class="w-full h-full object-cover product-detail-image" />
      </div>
      <!-- 상품 정보 -->
      <div>
        <p class="text-sm text-gray-600 mb-1">${e?.brand}</p>
        <h1 class="text-xl font-bold text-gray-900 mb-3">${e?.title}</h1>
        <!-- 평점 및 리뷰 -->
        ${e?`              
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                  ${C(e?.rating)}
                </div>
                <span class="ml-2 text-sm text-gray-600">${e?.rating}.0 (${e?.reviewCount}개 리뷰)</span>
              </div>`:``}
        <!-- 가격 -->
        <div class="mb-4">
          <span class="text-2xl font-bold text-blue-600">${Number(e?.lprice).toLocaleString()}원</span>
        </div>
        <!-- 재고 -->
        <div class="text-sm text-gray-600 mb-4">재고 ${e?.stock??100}개</div>
        <!-- 설명 -->
        ${e?`
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${e?.description}
              </div>`:``}
      </div>
    </div>
    <!-- 수량 선택 및 액션 -->
    <div class="border-t border-gray-200 p-4">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm font-medium text-gray-900">수량</span>
        <div class="flex items-center">
          <button
            id="quantity-decrease"
            class="w-8 h-8 flex items-center justify-center border border-gray-300
                   rounded-l-md bg-gray-50 hover:bg-gray-100"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <input
            type="number"
            id="quantity-input"
            value="1"
            min="1"
            max="${e?.stock}"
            class="w-16 h-8 text-center text-sm border-t border-b border-gray-300
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            id="quantity-increase"
            class="w-8 h-8 flex items-center justify-center border border-gray-300
                   rounded-r-md bg-gray-50 hover:bg-gray-100"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- 액션 버튼 -->
      <button
        id="add-to-cart-btn"
        data-product-id="${e?.productId}"
        class="w-full bg-blue-600 text-white py-3 px-4 rounded-md
                 hover:bg-blue-700 transition-colors font-medium"
      >
        장바구니 담기
      </button>
    </div>
  </div>
  <!-- 상품 목록으로 이동 -->
  <div class="mb-6">
    <button
      class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors go-to-product-list"
    >
      상품 목록으로 돌아가기
    </button>
  </div>
  <!-- 관련 상품 -->
  ${!n&&(t?.length??[])>0?`<div class="bg-white rounded-lg shadow-sm">
              <div class="p-4 border-b border-gray-200">
                <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
                <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
              </div>
              <div class="p-4">
                <div class="grid grid-cols-2 gap-3 responsive-grid">
                  ${t.map(e=>k(e)).join(``)}
                </div>
              </div>
            </div>`:``}
  `,j=()=>`
<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
  <div class="aspect-square bg-gray-200"></div>
  <div class="p-3">
    <div class="h-4 bg-gray-200 rounded mb-2"></div>
    <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
    <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
    <div class="h-8 bg-gray-200 rounded"></div>
  </div>
</div>
  `,M=`
<div class="text-center py-4">
  <div class="inline-flex items-center">
    <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
  </div>
</div>
`,N=e=>`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${e.productId}"
    >
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img
          src="${e.image}"
          alt="${e.title}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${e.title}</h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
          <p class="text-lg font-bold text-gray-900">${Number(e.lprice).toLocaleString()}원</p>
        </div>
        <!-- 장바구니 버튼 -->
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${e.productId}"
        >
          장바구니 담기
        </button>
      </div>
    </div>
`,P=({loading:e,products:t=[],total:n})=>`
<!-- 상품 목록 -->
    <div class="mb-6">
      <div>
        ${e?`
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${j().repeat(4)}
        </div>
        ${M}`:`<!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${n}개</span>의 상품
            </div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
                ${t.map(N).join(``)}
            </div>
            <div class="text-center py-4 text-sm text-gray-500">
              모든 상품을 확인했습니다
            </div>
            `}
      </div>
    </div>`,F=({filters:e={search:``,limit:`20`},categories:t={}})=>`
    <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input
            type="text"
            id="search-input"
            placeholder="상품명을 검색해보세요..."
            value="${e.search??``}"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
            ${e.category1?`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category1" data-category1="${e.category1}" class="text-xs hover:text-blue-800 hover:underline">${e.category1}</button>`:``}
            ${e.category1&&e.category2?`<span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${e.category2}</span>`:``}
          </div>
          <div class="space-y-2">
            <div class="flex flex-wrap gap-2">
              ${Object.keys(t).length?`<div class="flex flex-wrap gap-2">
                    ${e.category1?Object.keys(t[e.category1]??{}).map(t=>L({category1:e.category1,category2:t,isSelected:e.category2===t})).join(``):Object.keys(t).map(I).join(``)}
              </div>`:`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`}
            </div>
          </div>
        </div>
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select
              id="limit-select"
              class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="10" ${e.limit===`10`?`selected`:``}>10개</option>
              <option value="20" ${!e.limit||e.limit===`20`?`selected`:``}>20개</option>
              <option value="50" ${e.limit===`50`?`selected`:``}>50개</option>
              <option value="100" ${e.limit===`100`?`selected`:``}>100개</option>
            </select>
          </div>
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select
              id="sort-select"
              class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="price_asc" ${e.sort===`price_asc`?`selected`:``}>가격 낮은순</option>
              <option value="price_desc" ${e.sort===`price_desc`?`selected`:``}>가격 높은순</option>
              <option value="name_asc" ${e.sort===`name_asc`?`selected`:``}>이름순</option>
              <option value="name_desc" ${e.sort===`name_desc`?`selected`:``}>이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    `,I=e=>`
    <button
      data-category1="${e}"
      class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
    >
      ${e}
    </button>`,L=({category1:e,category2:t,isSelected:n})=>{let r=n?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`;return`
    <button
      data-category1="${e}"
      data-category2="${t}"
      class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${r}"
    >
      ${t}
    </button>`},R=e=>{let t=new URLSearchParams(window.location.search),n=new URLSearchParams;for(let[r,i]of t.entries())r!==e&&n.append(r,i);let r=`?`+n.toString();return n.toString()?r:``},z=(e,t)=>{let n=new URLSearchParams(window.location.search),r=new URLSearchParams;for(let[t,i]of n.entries())t!==e&&r.append(t,i);return r.append(e,t),`?`+r.toString()},B=e=>{let t=new URLSearchParams(window.location.search);return t.get(e)},V=({excludes:e=[],adds:t=[]}={})=>{let n=new URLSearchParams(window.location.search),r=new URLSearchParams;for(let[t,i]of n.entries())e.every(e=>e!==t)&&r.append(t,i);for(let e of t)r.append(e.key,e.value);return`?`+r.toString()};var H=class extends b{handleClick(e){if(e.target.closest(`.add-to-cart-btn`)){let{loaderData:t}=this.props,n=e.target.closest(`.product-card`).dataset.productId,r=t.products.find(e=>e.productId===n);m.addCard(r)}else if(e.target.closest(`.product-card`)){let t=e.target.closest(`.product-card`),n=t.dataset.productId;window.router2Instance.navigateTo(`${window.BASE_URL}product/${n}`)}else e.target.tagName===`A`&&(e.preventDefault(),window.router2Instance.navigateTo(e.target.pathname));if(e.target.closest(`.category1-filter-btn`)){let t=e.target.closest(`.category1-filter-btn`),n=t.dataset.category1,r=B(`category1`);if(n===r)return;let i=z(`category1`,n);window.router2Instance.navigateTo(`${window.BASE_URL}${i}`)}else if(e.target.closest(`.category2-filter-btn`)){let t=e.target.closest(`.category2-filter-btn`),n=t.dataset.category2,r=B(`category2`);if(n===r)return;let i=z(`category2`,n);window.router2Instance.navigateTo(`${window.BASE_URL}${i}`)}if(e.target.dataset.breadcrumb===`category1`){let t=e.target.dataset.category1,n=B(`category2`),r=this.$container.querySelector(`#search-input`),i=`?search=${r.value}&category1=${t}`;if(!n)return;window.router2Instance.navigateTo(`${window.BASE_URL}${i}`)}else if(e.target.dataset.breadcrumb===`reset`){let e=this.$container.querySelector(`#search-input`),t=B(`category1`),n=B(`category2`);if(!t&&!n)return;let r=e.value?`?current=1&search=${e.value}`:`?current=1&`;window.router2Instance.navigateTo(`${window.BASE_URL}${r}`)}}handleKeydown(e){if(e.key===`Enter`){let t=e.target.closest(`#search-input`),n=new URLSearchParams(window.location.search),r=n.get(`category1`)??``,i=n.get(`category2`)??``,a=`?search=${t.value}${r?`&category1=${r}`:``}${i?`&category2=${i}`:``}`;if(t.value)window.router2Instance.navigateTo(a);else{let e=R(`search`);window.router2Instance.navigateTo(`${window.BASE_URL}${e}`)}}}handleChange(e){if(e.target.closest(`#sort-select`)){let t=V({excludes:[`sort`,`current`],adds:[{key:`sort`,value:e.target.value},{key:`current`,value:1}]});window.router2Instance.navigateTo(`${window.BASE_URL}${t}`)}else if(e.target.closest(`#limit-select`)){let t=V({excludes:[`limit`,`current`],adds:[{key:`limit`,value:e.target.value},{key:`current`,value:1}]});window.router2Instance.navigateTo(`${window.BASE_URL}${t}`)}}setupIntersectionObserver(){setTimeout(()=>{let e=this.$container.querySelector(`#load-next-page`);e&&(this.observer&&(this.observer.disconnect(),this.observer=null),this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!this.isLoading&&this.loadNextPage()})},{root:null,rootMargin:`100px`,threshold:.1}),this.observer.observe(e))},100)}async loadNextPage(){if(!(this.props.isPending||this.isLoading)){this.isLoading=!0;try{let e=new URLSearchParams(window.location.search),t=parseInt(e.get(`current`)||`1`),n=t+1;console.log(`현재 페이지: ${t}, 다음 페이지: ${n}`),this.updateProductList(),e.set(`current`,n.toString());let r=`${window.location.pathname}?${e.toString()}`;window.history.replaceState({},``,r);let i=e.get(`search`)||``,a=e.get(`category1`)||``,o=e.get(`category2`)||``,s=e.get(`sort`)||``,c=e.get(`limit`)||``,l=await u({page:n,search:i,category1:a,category2:o,sort:s,limit:c}),d=this.props.loaderData.products||[],f=[...d,...l.products];this.props.loaderData.products=f,this.props.loaderData.pagination=l.pagination,this.updateProductList(),this.setupIntersectionObserver()}catch(e){console.error(`다음 페이지 로드 실패:`,e)}finally{this.isLoading=!1,this.updateProductList()}}}updateProductList(){let e=this.$container.querySelector(`.mb-6`);if(e&&this.props.loaderData){var t;let{loaderData:n,isPending:r}=this.props;e.innerHTML=P({products:n.products||[],loading:r||this.isLoading,total:(t=n.pagination)?.total||0})}}mount(){this.isLoading=!1,this.boundHandleClick=this.handleClick.bind(this),this.boundHandleKeydown=this.handleKeydown.bind(this),this.boundHandleChange=this.handleChange.bind(this),this.$container.addEventListener(`click`,this.boundHandleClick),this.$container.addEventListener(`keydown`,this.boundHandleKeydown),this.$container.addEventListener(`change`,this.boundHandleChange)}render(){super.render(),this.setupIntersectionObserver()}unmount(){this.$container.removeEventListener(`click`,this.boundHandleClick),this.$container.removeEventListener(`keydown`,this.boundHandleKeydown),this.$container.removeEventListener(`change`,this.boundHandleChange),this.observer&&(this.observer.disconnect(),this.observer=null)}template(){var e;let{loaderData:t,isPending:n,queryString:r}=this.props;return T({children:`
        ${F({...t,filters:r})}
        ${P({products:t?.products??[],loading:n||this.isLoading,total:(t==null||(e=t.pagination)==null?void 0:e.total)??0})}
        <div id="load-next-page" style="height:20px"></div>
      `})}},U=class extends b{template(){return T({children:`
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>

        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>

        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>

        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>

        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>

      <a href="/front_7th_chapter2-1/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
  `})}};const W=e=>{let t=`/front_7th_chapter2-1/`;return e.replace(t,`/`).replace(/\/$/,``)||`/`};var G=(t=new WeakSet,class{constructor(n){e.classPrivateMethodInitSpec(this,t),this.$app=n,this.routes=[],this.isPending=!1,this.current={view:null,loaderData:null,params:null,queryString:null},this.init()}init(){window.addEventListener(`popstate`,()=>{this.render()})}addRoute({path:e,loader:t,component:n}){this.routes.push({path:e,loader:t,component:n})}async render({withLoader:n=!0}={}){this.isPending=!0;let r=e.assertClassBrand(t,this,K).call(this,location.pathname);this.current.view&&this.current.view.constructor!==r.component&&(this.current.view.unmount(),this.current={view:null,loaderData:null,params:null,queryString:null}),this.current.view?await this.current.view.updateProps({params:r.params,queryString:r.queryString,isPending:this.isPending,loaderData:this.current.loaderData}):this.current.view=new r.component(this.$app,{params:r.params,queryString:r.queryString,isPending:this.isPending,loaderData:null});let i=n||JSON.stringify(r.params)!==JSON.stringify(this.current.params)&&JSON.stringify(r.queryString)!==JSON.stringify(this.current.queryString);if(i)try{this.current.params=r.params,this.current.queryString=r.queryString,this.current.loaderData=await r.loader({params:r.params,queryString:r.queryString})}catch(e){this.current.loaderData={error:e.message}}this.isPending=!1,this.current.view&&this.current.view.updateProps&&await this.current.view.updateProps({params:r.params,queryString:r.queryString,isPending:this.isPending,loaderData:this.current.loaderData})}navigateTo(e){history.pushState(null,``,e),this.render(e)}});function K(e){let t=W(e);for(let e of this.routes){let n=RegExp(`^`+e.path.replace(/:\w+/g,`([^/]+)`)+`$`),r=t.match(n);if(r){let t=(e.path.match(/:\w+/g)||[]).map(e=>e.substring(1)),n=r.slice(1).reduce((e,n,r)=>(e[t[r]]=n,e),{}),i={},a=new URLSearchParams(window.location.search);if(a.size>0)for(let[e,t]of a.entries())e in n||(i[e]=t);return{component:e.component,loader:e.loader,params:n,queryString:i}}}return{component:U,loader:()=>Promise.resolve({}),params:{},queryString:{}}}const q=()=>a(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({serviceWorker:{url:`${J}mockServiceWorker.js`},onUnhandledRequest:`bypass`})),J=`/front_7th_chapter2-1/`,Y=document.querySelector(`#root`),X=new G(Y);window.router2Instance=X,window.BASE_URL=`/front_7th_chapter2-1/`;let Z;X.addRoute({path:`/`,loader:async({queryString:e})=>{let t=e.search??``,n=e.category1??``,r=e.category2??``,i=e.sort??``,a=e.limit??``,o=await u({search:t,category1:n,category2:r,sort:i,limit:a});return Z||=await f(),{...o,categories:Z}},component:H}),X.addRoute({path:`/product/:productId`,loader:async({params:e})=>{let t=e.productId,n=await d(t),r=[];return n.error||(r=(await u({page:1,category2:n.category2})).products.filter(e=>e.productId!==t)),{product:n,relatedProducts:r}},component:E});const Q=e=>{let t=e.target.closest(`.cart-item`),n=t.dataset.productId,r=m.getCartItem(n),i=t.querySelector(`.quantity-input`),a=t.querySelector(`.cart-item-price`),o=e.target.closest(`.quantity-increase-btn`),s=Number(r.quantity),c=o?s+1:Math.max(1,s-1);i.value=c,a.innerHTML=`${(c*Number(r.price)).toLocaleString()}원`,m.updateQuantity(n,c)},$=async()=>{p.init(()=>{window.updateCartModal(),window.updateCartCount()});let e=g();document.body.insertAdjacentHTML(`afterbegin`,e),document.body.addEventListener(`click`,e=>{if(e.target.closest(`#cart-icon-btn`)){let e=document.querySelector(`.cart-modal`);e.hidden=!1}else if(e.target.closest(`#cart-modal-close-btn`)||e.target.closest(`.bg-black`)&&!e.target.closest(`.bg-white`)){let e=document.querySelector(`.cart-modal`);e.hidden=!0}else if(e.target.closest(`.quantity-increase-btn`)||e.target.closest(`.quantity-decrease-btn`))Q(e);else if(e.target.closest(`.cart-item-checkbox`)){let t=e.target.closest(`.cart-item-checkbox`);m.checkCartItem(t.dataset.productId)}else if(e.target.closest(`#cart-modal-select-all-checkbox`)){let t=e.target.closest(`#cart-modal-select-all-checkbox`).checked;m.checkAllCartItems(t)}else if(e.target.closest(`.cart-item-remove-btn`)){let t=e.target.closest(`.cart-item-remove-btn`).dataset.productId;m.removeCartItem(t)}else e.target.closest(`#cart-modal-remove-selected-btn`)?m.removeSelectedCartItems():e.target.closest(`#cart-modal-clear-cart-btn`)?m.removeAllCartItems():e.target.closest(`#cart-modal-checkout-btn`)&&c.show({type:`info`,message:`구매 기능은 추후 구현 예정입니다.`})}),Y.addEventListener(`keydown`,e=>{if(e.key===`Escape`){let e=document.querySelector(`.cart-modal`);e.hidden=!0}}),window.updateCartModal=()=>{let e=document.body.querySelector(`.cart-modal`),t=e&&!e.hasAttribute(`hidden`),n=g();document.body.insertAdjacentHTML(`afterbegin`,n);let r=document.body.querySelector(`.cart-modal`);t&&r&&r.removeAttribute(`hidden`),e.remove()},window.updateCartCount=()=>{let e=Y.querySelector(`#cart-icon-btn`),t=v();e&&(e.outerHTML=t)},await X.render(location.pathname)};q().then(async()=>{await $()});