import{A as g,S as a,N as l,M as c,K as d,a as w,i as f}from"./assets/vendor-BGliRXZ8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const v=document.querySelector(".header-menu-js"),b=document.querySelector(".header-list"),y=document.querySelector(".header-burger-button"),S=document.querySelector(".mobile-menu-close"),u=document.querySelector(".mobile-bg"),k=document.querySelector(".mobile-anchor"),L=document.querySelectorAll(".mobile-list-item"),I=()=>{b.classList.toggle("open-js")};v.addEventListener("click",I);if(innerWidth<768){y.addEventListener("click",()=>{u.classList.add("is-open")});const t=()=>{u.classList.remove("is-open")};S.addEventListener("click",t),L.forEach(e=>{e.addEventListener("click",t)}),k.addEventListener("click",t)}const j="/project-108-js-group-09/assets/sprite-DsvayuqK.svg",x=document.querySelector(".information-container"),E=[{title:"About me",description:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - imp r ovement.I atively study new technologies and practices to stay abreast of the latest innovations.I hve a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{title:"Role",description:["Frontend development","HeadlessCMS,Wordpress","Blender(enjoy)"]},{title:"Education",description:["2018 - 2019  / Frontend Development Diploma, GoIT IT </br> School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT </br> School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],q=t=>t.map(e=>`<li class="information-description-item">${e}</li>`).join(""),A=t=>{const e=t.map(o=>`<li class="information-item ac">
                <h2 class="ac-header">
                    <button type="button" class="information-item-button ac-trigger"><span>${o.title.toUpperCase()}<span></button>
                </h2>
                <div class="ac-panel">
                    <ul class="description-list ac-text">${q(o.description)}</ul>
                </div>
            </li>`).join("");x.insertAdjacentHTML("beforeend",e)},T=()=>{document.querySelectorAll(".ac-trigger").forEach(e=>{const o=` <svg class="description-open-icon">
          <use href="${j}#icon-open"></use>
        </svg>`;e.insertAdjacentHTML("beforeend",o)})},C=t=>{const e=t.getBoundingClientRect(),o=e.top,s=window.innerHeight;window.scrollTo({top:o+window.scrollY-s/2+e.height/2,behavior:"smooth"})};A(E);new g(".accordion-container",{duration:250,showMultiple:!0,openOnInit:[0],triggerClass:"information-item-button",onOpen:function(t){C(t)}});T();const M=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","Redux"],P=()=>{const t=document.querySelector(".hard-skills-list"),e=M.map(o=>`<li class="hard-skills-item swiper-slide">
                    <p class="hard-skills-text">${o}</p>
                </li>`).join("");t.innerHTML=e};P();const p=new a(".hard-skills-swiper",{modules:[l,c,d],direction:"horizontal",loop:!0,speed:1e3,allowSlideNext:!0,mousewheel:{enabled:!0,invert:!0},navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,on:{transitionStart:()=>{document.querySelectorAll(".hard-skills-item").forEach(e=>{e.style.transition="background-color 100ms cubic-bezier(0.4, 0, 0.2, 1)",e.style.backgroundColor="var(--black)",e.style.border="1px solid rgba(250, 250, 250, 0.2)",e.style.borderRadius="50%"});const t=p.slides[p.activeIndex];t.style.transition="background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)",t.style.backgroundColor="var(--red)",t.style.borderColor="transparent"}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},375:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});new a(".swiper-projects",{modules:[l,d,c],speed:1e3,navigation:{nextEl:".swiper-projects-button-next",prevEl:".swiper-projects-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,eventsTarget:".swiper-projects"}});const m=document.querySelectorAll("li"),B=new IntersectionObserver(O,{root:null,rootMargin:"-25% 0px -25% 0px",threshold:0}),D=document.querySelector(".covers-section");B.observe(D);function O(t){t.forEach(e=>{e.isIntersecting?m.forEach(o=>{o.style.animationDuration="20s"}):m.forEach(o=>{o.style.animationDuration="0s"})})}const V=t=>{const{avatar_url:e,author:o,review:s}=t;return`
 <li class="reviews-list-item swiper-slide">
          <img
            src="${e}"
            alt="user-photo"
            onerror="this.src='/img/reviews/profile-photo.png'"
            class="reviews-list-item-icon"
            width="48"
            height="48"
          />
          <h3 class="reviews-list-item-title">${o}</h3>
          <p class="reviews-list-item-text">
            ${s}
          </p>
        </li>
  `};w.defaults.baseURL="https://portfolio-js.b.goit.study";const H=async()=>(await w.get("api/reviews")).data;new a(".swiper-container",{modules:[l,d,c],speed:1e3,navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0,eventsTarget:".swiper-container"},breakpoints:{1440:{spaceBetween:16,slidesPerView:4},768:{slidesPerView:2,spaceBetween:16},320:{slidesPerView:1}}});const h=document.querySelector(".reviews-list"),N=async()=>{try{const e=(await H()).map(o=>V(o)).join("");h.insertAdjacentHTML("beforeend",e)}catch{f.show({message:"❌ Oh no, something went wrong",color:"red",position:"topRight"}),h.innerHTML=`<li class="error-case"> <picture>
      <source
      class="not-found-pic"
      srcset="/img/reviews/not-found.jpg"
        media="(min-width:1440px)"
        alt="not-found-photo"
        width="640"
        height="352"
      />
      <source
        class="not-found-pic"
        srcset="/img/reviews/not-found.jpg"
        media="(min-width:768px)"
        alt="not-found-photo"
        width="422"
        height="232"
      />
      <img
        class="not-found-pic"
        src="/img/reviews/not-found-mob.jpg"
        alt="not-found-photo" width="270" height="207"
      />
    </picture></li>`}};N();
//# sourceMappingURL=index.js.map
