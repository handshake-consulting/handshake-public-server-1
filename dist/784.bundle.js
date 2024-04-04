"use strict";(self.webpackChunkask_give_org_chatbot_package=self.webpackChunkask_give_org_chatbot_package||[]).push([[784],{818:(e,t,n)=>{n.d(t,{O:()=>s,T:()=>o});const o="https://chat-r-cloudrun-service-kxg2k75u7a-uc.a.run.app",s=[{question:"Who made this chatbot?",answer:"The chatbot is a project of give.org, also known as the BBB Wise Giving Alliance, which is a standards-based charity evaluator that verifies the trustworthiness of publicly soliciting charities by completing rigorous evaluations based on BBB standards for charity accountability. The chatbot was also made in partnership with Handshake, a generative AI consultancy."},{question:"What is the purpose of the chatbot?",answer:"The purpose of the chatbot is to help you easily access and interact with the many reports, podcasts, blogs, videos, and other content created and hosted by Give.org about how to trust charities, and general advice on giving and philanthropy."},{question:"What should users know about the chatbot?",answer:"Users should understand that this is an early stage technology and there are going to be mistakes. We ask for your collaboration in helping us improve the chatbot by sharing your experience in the feedback slot."},{question:"Does give.org store data from the chatbot?",answer:"Yes, give.org stores all data from this chatbot permanently to understand how people are using this new technology, and how to improve the service."},{question:"Is the chatbot intended to make direct suggestions about what charity to donate to?",answer:"No, the chatbot is not intended to make any direct suggestions about what charity to donate to. It's only meant to give general information about charities, philanthropy, or giving based on the information that give.org already publicly offers on its website."},{question:"Can the bot answer quantitative questions?",answer:'No, the bot cannot answer questions quantitatively. For example, if you ask it something like, "How many charities in the give.org database are there that have to do with animal rights?" it won\'t be able to answer this.'},{question:"What should users do if they suspect the chatbot is providing inaccurate or malformed information?",answer:'As the chatbot uses generative AI, it is possible for it to generate information on its own by accident. If you suspect that something is inaccurate or malformed, please use the "Report" feature on the chatbot and provide details on the issue. you should take a screenshot and report it to Jeremy at handshake.fyi.'},{question:"Does the give.org bot contain all the information found in the charity reports on give.org?",answer:"No, the give.org bot does not contain all of the information that can be found in the charity reports on give.org. People are encouraged to also check out the give.org charity reports directly after using the bot."},{question:"What AI is the give.org chatbot built on?",answer:"The give.org chatbot is built on top of Anthropic's Claude 3 Sonnet model, along with custom tooling built by Handshake for give.org."},{question:"Does Anthropic store any data from the chatbot?",answer:"No, Anthropic does not store any data permanently. They keep the data put into the bot for 28 days for debugging purposes and then delete it. It is never used to train any AI models."}]},466:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c,makeRequest:()=>l});var o=n(818),s=n(413);let a=new AbortController,i="",r="gb-chatbody";function c(){(0,s.mp)("username")||((0,s.B3)("username"),(0,s.B3)("chat_session")),(0,s.JK)(),window.addEventListener("load",d),(0,s.ob)()}function d(){(0,s.b0)(r);const e=document.getElementById("gb-form-"+r),t=document.getElementById("gb-submit-btn-"+r),n=e.querySelector('textarea[name="chat"]');t.addEventListener("click",(async e=>{e.preventDefault();const o=n.value;t.disabled=!0,n.disabled=!0,await l(o),n.value="",t.disabled=!1,n.disabled=!1})),(0,s.UK)(r);document.getElementById("gb-resetchat-"+r).onclick=e=>{e.preventDefault(),m()}}const l=async(e,t,n)=>{if(a=new AbortController,0===e.trim().length)return void alert("Please enter a message");u(!0,r),document.getElementById("gb-chatbot-scrolldown-"+r).scrollIntoView({behavior:"smooth",block:"end"});const c=Date.now().toString();try{const d=await fetch("retry"===t?o.T+"/retry":o.T+"/submit",{method:"POST",body:JSON.stringify({message:e,chat_session:(0,s.mp)("chat_session"),username:(0,s.mp)("username"),next_message:"retry"===t?n:i}),headers:{"Content-Type":"application/json"},signal:a.signal});if(!d.ok){const e=await d.text();throw new Error(e)}const l=d.body;if(!l)return;const m=l.pipeThrough(new TextDecoderStream).getReader();let b="";(0,s.J2)(e,c,r),(0,s.vp)(b,c,r);let h=document.getElementById("botFlex-1-"+c+"-"+r);for((0,s.tC)(h,c,r),(0,s.oB)(`user_message_${c}`,e);;){const{value:t,done:n}=await m.read();if(n){const t=document.createElement("div");t.className="gb-mt-2 gb-px-4 gb-flex gb-flex-col gb-space-y-3 gb-bot-references",t.id="botRef-1-"+c+"-"+r,h.appendChild(t),await g(e,c),u(!1,r);break}b+=t;let o=document.getElementById(c+"-"+r);o.innerHTML=window.marked.parse(b),h.appendChild(o),document.getElementById("gb-chatbot-scrolldown-"+r).scrollIntoView({behavior:"smooth",block:"end"}),(0,s.oB)(`bot_response_${c}`,b)}}catch(e){console.log("Error:",e),"AbortError"===e.name?u(!1,r):(u(!1,r),console.error("Error:",e))}},g=async(e,t)=>{try{const n=await fetch(o.T+"/content",{method:"POST",body:JSON.stringify({message:e,chat_session:(0,s.mp)("chat_session"),username:(0,s.mp)("username"),next_message:i}),headers:{"Content-Type":"application/json",accept:"application/json"}}),a=await n.json(),c=await JSON.parse(a);if(""!==c.output){i=c.next_node;const e=c.queries;if((0,s.oB)(`next_message_${t}`,i),0===Object.keys(e).length||0===e.url.length)throw new Error("No data available");const n=e.url.map(((n,o)=>((0,s.D8)(t,{id:t,title:e.title[o],content:e.content[o],date:e.date[o],url:e.url[o]},r),{id:t,title:e.title[o],content:e.content[o],date:e.date[o],url:e.url[o]})));(0,s.oB)(`reference_data_${t}`,JSON.stringify(n))}}catch(e){console.error("Error:",e)}finally{(0,s.xd)(t,r)}},m=()=>{(0,s.B3)("chat_session"),document.getElementById(r).innerHTML="",i=null;Object.keys(sessionStorage).filter((e=>e.startsWith("user_message_"))).forEach((e=>{sessionStorage.removeItem(e)}));Object.keys(sessionStorage).filter((e=>e.startsWith("next_message_"))).forEach((e=>{sessionStorage.removeItem(e)}));Object.keys(sessionStorage).filter((e=>e.startsWith("bot_response_"))).forEach((e=>{sessionStorage.removeItem(e)}));Object.keys(sessionStorage).filter((e=>e.startsWith("reference_data_"))).forEach((e=>{sessionStorage.removeItem(e)})),location.reload()};function u(e,t){const n=document.getElementById("gb-chatbot-loader-"+t),o=document.getElementById("gb-submit-icon-"+t),s=document.getElementById("gb-submit-loading-"+t);e?(n.classList.remove("gb-hidden"),o.classList.add("gb-hidden"),s.classList.remove("gb-hidden")):(n.classList.add("gb-hidden"),o.classList.remove("gb-hidden"),s.classList.add("gb-hidden"))}},413:(e,t,n)=>{n.d(t,{B3:()=>I,D8:()=>b,Ep:()=>p,J2:()=>g,JK:()=>f,UK:()=>w,b0:()=>L,m4:()=>x,mp:()=>k,oB:()=>_,ob:()=>S,tC:()=>u,vp:()=>m,xd:()=>h});var o=n(818),s=n(466);let a="",i=["Generating","Gathering","Researching"],r=0;const c=150,d=100,l=1e3;function g(e,t,n){const o=document.getElementById(n),s=document.createElement("div");s.className="gb-p-4 gb-mt-5 gb-bg-reply-gradient gb-text-white gb-rounded ",s.id="gb-user-"+t+"-"+n;const a=document.createElement("p");a.textContent=e,s.appendChild(a),o.appendChild(s)}function m(e,t,n){const o=document.getElementById(n),s=document.createElement("div");s.className="gb-mt-5",s.id="gb-bot-"+t+"-"+n;const a=document.createElement("img");a.src="/sf-images/default-source/giving-coach-ai/giveorgbfeacd32d46e4cb6884e4af525762179.png?Status=Master&sfvrsn=218481fd_2",a.className="gb-w-[59.47px]  gb-rounded-[10px]",s.appendChild(a);const i=document.createElement("div");i.id="botFlex-1-"+t+"-"+n,i.className="gb-bg-[#ffff] gb-rounded ",s.appendChild(i),o.appendChild(s)}function u(e,t,n){const o=document.createElement("p");o.className="gb-p-4 gb-bg-[#ffff] gb-my-5 gb-rounded gb-whitespace-pre-wrap",o.id=t+"-"+n,e.appendChild(o)}function b(e,t,n){const o=document.getElementById("botRef-1-"+e+"-"+n),s=document.createElement("a");s.href=t.url,s.target="_blank";const a=document.createElement("span");a.className="gb-bg-[#FFD368] gb-space-x-2 gb-no-underline gb-hover:underline gb-text-xs gb-font-medium gb-inline-flex gb-items-center gb-px-2.5 gb-py-0.5 gb-rounded-lg";const i=document.createElement("img");i.src="/sf-images/default-source/giving-coach-ai/book.png?Status=Temp&sfvrsn=5dc9ba90_2",i.width=17,i.height=16,a.appendChild(i);const r=document.createElement("p");r.textContent=t.title,r.className="hover:gb-underline gb-m-0 gb-text-black",a.appendChild(r),s.appendChild(a),o.appendChild(s)}function h(e,t){const n=document.getElementById("botFlex-1-"+e+"-"+t),o=document.createElement("div");o.className="gb-px-4 gb-my-2 gb-pb-3",o.id="gb-message-actions-"+e+"-"+t;const a=document.createElement("button");a.className="hover:gb-bg-[#E4E4E4] gb-p-2.5 gb-rounded-full";const i=document.createElement("img");i.src="/sf-images/default-source/giving-coach-ai/reload.png?Status=Temp&sfvrsn=37de681e_2",a.appendChild(i),a.id="gb-message-actions-1-"+e+"-"+t,a.addEventListener("click",(()=>async function(e,t){try{const n=k(`user_message_${e}`),o=k(`next_message_${e}`),a=Array.from(document.querySelectorAll('[id^="gb-user-"]')).findIndex((e=>e.id===`gb-user-${t}`));Array.from(document.querySelectorAll('[id^="gb-user-"]')).slice(a).forEach((e=>e.remove()));Array.from(document.querySelectorAll('[id^="gb-bot-"]')).slice(a).forEach((e=>e.remove()));Object.keys(sessionStorage).filter((t=>t.startsWith("user_message_")&&parseInt(t.split("_")[2])>=e)).forEach((e=>sessionStorage.removeItem(e)));Object.keys(sessionStorage).filter((t=>t.startsWith("bot_response_")&&parseInt(t.split("_")[2])>=e)).forEach((e=>sessionStorage.removeItem(e)));Object.keys(sessionStorage).filter((t=>t.startsWith("reference_data_")&&parseInt(t.split("_")[2])>=e)).forEach((e=>sessionStorage.removeItem(e))),await(0,s.makeRequest)(n,"retry",o)}catch(e){console.error("Error during retry:",e)}}(e,e+"-"+t))),o.appendChild(a);const r=document.createElement("button");r.className="hover:gb-bg-[#E4E4E4] gb-p-2.5 gb-rounded-full";const c=document.createElement("img");c.src="/sf-images/default-source/giving-coach-ai/report.png?Status=Temp&sfvrsn=ad5a1c9f_2",r.appendChild(c),r.id="gb-message-actions-2-"+e+"-"+t,r.addEventListener("click",(()=>function(e){const t=document.getElementById("myModal");t.classList.remove("gb-hidden"),t.setAttribute("data-message-id",e)}(e))),o.appendChild(r),n.appendChild(o)}function p(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"end"})}function f(){var e=document.getElementById("gb-maximize"),t=document.getElementById("gb-miniButton"),n=document.getElementById("gb-halfchat"),o=document.getElementById("gb-minize"),s=!1,a=0;e.onclick=function(){t.classList.add("gb-hidden"),n.classList.remove("gb-hidden"),n.classList.add("gb-animate-slide-up")},o.onclick=function(){n.classList.add("gb-animate-slide-down"),setTimeout((function(){n.classList.add("gb-hidden"),t.classList.remove("gb-hidden"),n.classList.remove("gb-animate-slide-up","gb-animate-slide-down"),n.style.height=""}),300)},t.addEventListener("touchstart",(function(e){s=!0,a=e.touches[0].clientY})),t.addEventListener("touchmove",(function(e){s&&(e.touches[0].clientY-a<-50&&(t.classList.add("gb-hidden"),n.classList.remove("gb-hidden"),n.classList.add("gb-animate-slide-up"),s=!1))})),t.addEventListener("touchend",(function(){s=!1})),n.addEventListener("touchstart",(function(e){s=!0,a=e.touches[0].clientY})),n.addEventListener("touchmove",(function(e){s&&(e.touches[0].clientY-a>50&&(n.classList.add("gb-animate-slide-down"),setTimeout((function(){n.classList.add("gb-hidden"),t.classList.remove("gb-hidden"),n.classList.remove("gb-animate-slide-up","gb-animate-slide-down")}),300),s=!1))})),n.addEventListener("touchend",(function(){s=!1}))}async function y(e,t,n){for(let o=0;o<e.length;o++){if(r!==t)return;a=e.substr(0,o+1),document.getElementById("gb-chatbot-loading-"+n).innerHTML=a,await E(c)}}async function v(e,t,n){for(let o=e.length;o>0;o--){if(r!==t)return;a=e.substr(0,o-1),document.getElementById("gb-chatbot-loading-"+n).innerHTML=a,await E(d)}}async function E(e){return new Promise((t=>{setTimeout((()=>t()),e)}))}async function w(e="dfuy"){for(;;){const t=i[r],n=r;await y(t,n,e),await E(l),await v(t,n,e),await E(l),r=(r+1)%i.length}}function _(e,t){sessionStorage.setItem(e,t)}function k(e){return sessionStorage.getItem(e)}function I(e){const t=function(){const e="0123456789abcdef";let t="";for(let n=0;n<36;n++)t+=8===n||13===n||18===n||23===n?"-":14===n?"4":e[Math.floor(16*Math.random())];return t}();return _(e,t),t}function L(e){const t=document.getElementById(e);Object.keys(sessionStorage).filter((e=>e.startsWith("user_message_"))).sort(((e,t)=>parseInt(e.split("_")[2])-parseInt(t.split("_")[2]))).forEach((t=>{const n=t.split("_")[2];g(k(t),n,e);const o=`bot_response_${n}`;if(sessionStorage.hasOwnProperty(o)){const t=k(o);m(0,n,e);const s=document.getElementById("botFlex-1-"+n+"-"+e);u(s,n,e);let a=document.getElementById(n+"-"+e);a.innerHTML=window.marked.parse(t),s.appendChild(a),document.getElementById("gb-chatbot-scrolldown-"+e).scrollIntoView({behavior:"smooth",block:"end"});const i=document.createElement("div");i.id="botRef-1-"+n+"-"+e,i.className="gb-mt-2 gb-px-4 gb-flex gb-flex-wrap gb-gap-1",s.appendChild(i);const r=`reference_data_${n}`;if(sessionStorage.hasOwnProperty(r)){JSON.parse(k(r)).forEach((t=>{b(n,t,e)})),h(n,e)}}})),t.scrollTop=t.scrollHeight}const x=()=>{const e=document.querySelector(".gb-accordion");let t=null;o.O.forEach(((n,o)=>{const s=document.createElement("div");s.className="gb-accordion-item gb-rounded gb-bg-[#F6F4EE]",s.innerHTML=`\n    <button class="gb-accordion-header gb-w-full gb-flex gb-justify-between gb-items-center gb-p-4 gb-text-left gb-font-bold gb-text-black    focus:gb-outline-none">\n      <span class="gb-text-[#000000] gb-font-medium gb-text-lg">${n.question}</span>\n      <svg class="gb-w-5 gb-h-5 gb-text-black gb-transform gb-transition-transform gb-duration-200" viewBox="0 0 20 20" fill="currentColor">\n        <path fill-rule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />\n      </svg>\n    </button>\n    <div class="gb-accordion-content gb-p-4 gb-text-gray-700 gb-hidden">\n      <p class="gb-font-normal gb-text-base gb-text-[#000000]">${n.answer}</p>\n    </div>\n  `,e.appendChild(s),0===o&&(s.classList.add("gb-active"),s.querySelector(".gb-accordion-content").classList.remove("gb-hidden"),s.querySelector("svg").classList.add("gb-rotate-180"),t=s)}));document.querySelectorAll(".gb-accordion-header").forEach((e=>{e.addEventListener("click",(()=>{const n=e.parentElement,o=n.querySelector(".gb-accordion-content"),s=e.querySelector("svg");t===n?(t.classList.remove("gb-active"),o.classList.add("gb-hidden"),s.classList.remove("gb-rotate-180"),t=null):(t&&(t.classList.remove("gb-active"),t.querySelector(".gb-accordion-content").classList.add("hidden"),t.querySelector("svg").classList.remove("rotate-180")),n.classList.add("gb-active"),o.classList.remove("gb-hidden"),s.classList.add("gb-rotate-180"),t=n)}))}))};document.getElementById("closeModal").addEventListener("click",B);function B(){document.getElementById("myModal").classList.add("gb-hidden")}document.getElementById("closeButton").addEventListener("click",B);const S=()=>{document.getElementById("gb-modal-submit").addEventListener("click",C)};async function C(e){e.preventDefault();const t=document.getElementById("myModal").getAttribute("data-message-id"),n=document.getElementById("gb-modal-submit"),s=k(`user_message_${t}`),a=k(`bot_response_${t}`),i=k(`next_message_${t}`),r=document.querySelector('#myModal textarea[name="feedback"]').value;if(0===r.trim().length)return void alert("Please enter a feedback");const c=n;c.disabled=!0,c.textContent="Submitting...";try{const e=await fetch(o.T+"/response",{method:"POST",body:JSON.stringify({username:k("username"),message:s,chat_response:a,chat_session:k("chat_session"),next_message:i,feedback:r}),headers:{"Content-Type":"application/json"}});e.ok?(alert("Report submitted successfully"),B()):console.error("Error submitting report:",e.statusText)}catch(e){console.error("Error submitting report:",e)}finally{c.disabled=!1,c.textContent="Submit"}}}}]);
//# sourceMappingURL=784.bundle.js.map