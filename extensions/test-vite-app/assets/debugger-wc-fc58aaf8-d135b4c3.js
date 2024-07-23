import{a as n,b as x}from"./theme-74fe61d9.js";import{o as _}from"./index-2a24c684-15d4fbf4.js";/* empty css              */const C=(e,s,t,i={})=>{var a,c,h,r;return[Math.min(Math.max(s,(i.left==="all"?e.offsetWidth:(a=i.left)!==null&&a!==void 0?a:0)-e.offsetWidth),window.innerWidth-(i.right==="all"?e.offsetWidth:(c=i.right)!==null&&c!==void 0?c:0)),Math.min(Math.max(t,(i.top==="all"?e.offsetHeight:(h=i.top)!==null&&h!==void 0?h:0)-e.offsetHeight),window.innerHeight-(i.bottom==="all"?e.offsetHeight:(r=i.bottom)!==null&&r!==void 0?r:0))]};var d,p,o,g,f,m,y,b,v,L;const k=document.createElement("template");k.innerHTML=`
<style>
  .debugger {
    width: 300px;
    height: 200px;
    background-color: #FAFAFA;
    position: fixed;
    font-family: "Helvetica Neue", sans-serif;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid lightgrey;
    pointer-events: initial;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    max-width: 600px;
    max-height: calc(100% - 64px);
    min-height: 200px;
    resize: both;
  }

  .header {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    background-color: #EEEEEE;
    cursor: move;
    border-bottom: 1px solid #e0e0e0;
  }

  .content {
    font-size: 14px;
    flex-grow: 1;
    overflow: auto;
  }

  .msg {
    border-bottom: 1px solid lightgrey;
    padding: 8px 16px;
    display: flex;
    gap: 5px;
    background-color: #FAFAFA;
  }

  .msg.collapsible {
    cursor: pointer;
  }

  .empty-state {
    padding: 8px 16px;
    background-color: #FAFAFA;
  }


  .msg.collapsible:not(.collapsed) {
    background-color: #F5F5F5;
  }

  .msg_title {
    padding-bottom: 5px;
    display: flex;
    gap: 8px;
    font-weight: 500;
  }

  .msg svg {
    padding: 1px;
    flex-shrink: 0;
    margin-top: -2px;
  }

  .msg_content {
    overflow: hidden;
    flex-grow: 1;
    margin-right:5px;
  }

  .msg_desc {
    color: #646464;
    cursor: initial;
    word-wrap: break-word;
  }

  .msg.collapsed .msg_desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .msg.collapsible.collapsed .chevron {
    transform: rotate(-45deg) translateX(-2px);
  }

  .msg.collapsible .chevron {
    content: "";
    width:6px;
    height:6px;
    border-bottom: 2px solid grey;
    border-right: 2px solid grey;
    transform: rotate(45deg) translateX(-1px);
    margin: 5px;
    flex-shrink:0;
  }
</style>

<div style="top:32px; left:${window.innerWidth-300-32}px;" class="debugger">
  <div class="header">
    <span>Debugger messages</span>
  </div>
  <div class="content">
    <div class="empty-state">
      No errors detected 👀
    </div>
  </div>
</div>
`;class A extends HTMLElement{constructor(){super(),d.add(this),p.set(this,new _({messages:[]})),o.set(this,void 0),g.set(this,void 0),f.set(this,void 0),m.set(this,{resize:n(this,d,"m",L).bind(this)}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(k.content.cloneNode(!0)),x(this,o,this.shadowRoot.querySelector(".debugger"),"f"),x(this,g,n(this,o,"f").querySelector(".content"),"f"),x(this,f,n(this,o,"f").querySelector(".header"),"f")}updateData(s){n(this,p,"f").update(t=>({messages:t.messages.concat(s)}))}connectedCallback(){var s;((t,i,a)=>{let c=0,h=0,r=0,u=0;function M(l){l.preventDefault(),c=r-l.clientX,h=u-l.clientY,r=l.clientX,u=l.clientY;const[E,F]=C(t,t.offsetLeft-c,t.offsetTop-h,a);t.style.top=`${F}px`,t.style.left=`${E}px`}function W(){document.onmouseup=null,document.onmousemove=null}function w(l){l.preventDefault(),r=l.clientX,u=l.clientY,document.onmouseup=W,document.onmousemove=M}i?i.onmousedown=w:t.onmousedown=w})(n(this,o,"f"),n(this,f,"f"),{top:"all",bottom:100,left:100,right:100}),window.addEventListener("resize",n(this,m,"f").resize),(s=n(this,o,"f")).onmousemove=t=>{(t.target.w&&t.target.w!==t.target.offsetWidth||t.target.h&&t.target.h!==t.target.offsetHeight)&&s.onresize(t),t.target.w=t.target.offsetWidth,t.target.h=t.target.offsetHeight},n(this,o,"f").onresize=n(this,d,"m",v).bind(this),n(this,p,"f").subscribe(n(this,d,"m",y).bind(this))}disconnectedCallback(){n(this,p,"f").unsubscribeAll(),window.removeEventListener("resize",n(this,m,"f").resize)}}p=new WeakMap,o=new WeakMap,g=new WeakMap,f=new WeakMap,m=new WeakMap,d=new WeakSet,y=function(e){n(this,d,"m",b).call(this,e),n(this,d,"m",v).call(this)},b=function(e){n(this,g,"f").innerHTML=e.messages.map(s=>`
    <div class="msg">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99984 13.167L8.99984 10.167L11.9998 13.167L13.1665 12.0003L10.1665 9.00033L13.1665 6.00033L11.9998 4.83366L8.99984 7.83366L5.99984 4.83366L4.83317 6.00033L7.83317 9.00033L4.83317 12.0003L5.99984 13.167ZM8.99984 17.3337C7.84706 17.3337 6.76373 17.1148 5.74984 16.677C4.73595 16.2398 3.854 15.6462 3.104 14.8962C2.354 14.1462 1.76039 13.2642 1.32317 12.2503C0.885393 11.2364 0.666504 10.1531 0.666504 9.00033C0.666504 7.84755 0.885393 6.76421 1.32317 5.75033C1.76039 4.73644 2.354 3.85449 3.104 3.10449C3.854 2.35449 4.73595 1.7606 5.74984 1.32283C6.76373 0.885603 7.84706 0.666992 8.99984 0.666992C10.1526 0.666992 11.2359 0.885603 12.2498 1.32283C13.2637 1.7606 14.1457 2.35449 14.8957 3.10449C15.6457 3.85449 16.2393 4.73644 16.6765 5.75033C17.1143 6.76421 17.3332 7.84755 17.3332 9.00033C17.3332 10.1531 17.1143 11.2364 16.6765 12.2503C16.2393 13.2642 15.6457 14.1462 14.8957 14.8962C14.1457 15.6462 13.2637 16.2398 12.2498 16.677C11.2359 17.1148 10.1526 17.3337 8.99984 17.3337ZM8.99984 15.667C10.8609 15.667 12.4373 15.0212 13.729 13.7295C15.0207 12.4378 15.6665 10.8614 15.6665 9.00033C15.6665 7.13921 15.0207 5.56283 13.729 4.27116C12.4373 2.97949 10.8609 2.33366 8.99984 2.33366C7.13873 2.33366 5.56234 2.97949 4.27067 4.27116C2.979 5.56283 2.33317 7.13921 2.33317 9.00033C2.33317 10.8614 2.979 12.4378 4.27067 13.7295C5.56234 15.0212 7.13873 15.667 8.99984 15.667Z" fill="#ED404A"/>
</svg>

      <div class="msg_content">
        <div class="msg_title">
          ${s.title}
        </div>
        <div class="msg_desc">
          ${s.description}
        </div>
      </div>
      <div class="chevron"></div>
    </div>
  `).join("")},v=function(){n(this,g,"f").querySelectorAll(".msg").forEach(e=>{const s=e.querySelector(".msg_desc"),t=s.scrollWidth>s.clientWidth,i=s.clientHeight>20;t||i?(e.classList.add("collapsible"),e.onclick=a=>{a.target.classList.contains("msg_desc")||e.classList.toggle("collapsed")}):(e.classList.remove("collapsible"),e.onclick=null)})},L=function(){const[e,s]=C(n(this,o,"f"),Number.parseInt(n(this,o,"f").style.left,10),Number.parseInt(n(this,o,"f").style.top,10),{top:"all",bottom:100,left:100,right:100});n(this,o,"f").style.top=`${s}px`,n(this,o,"f").style.left=`${e}px`},customElements.get("descope-debugger")||customElements.define("descope-debugger",A);export{A as default};
