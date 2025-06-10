import{S as h,a as c,i as s}from"./assets/vendor-B3Lscd_h.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();let y=document.querySelector(".gallery");const b=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(e){const l=e.map(r=>`<li class="gallery-element">
                    <a href="${r.largeImageURL}">
                        <img src=${r.webformatURL} class="gallery-img" alt=${r.tags}>
                    </a>
                    <ul class="gallery-list">
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Likes</p>
                            <p class="gallery-list-counter">${r.likes}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Views</p>
                            <p class="gallery-list-counter">${r.views}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Comments</p>
                            <p class="gallery-list-counter">${r.comments}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Downloads</p>
                            <p class="gallery-list-counter">${r.downloads}</p>
                        </li>
                    </ul>
                </li>
        `).join("");y.insertAdjacentHTML("beforeend",l),b.refresh()}function w(){y.innerHTML=""}function d(){document.querySelector(".loader").style.display="block"}function q(){document.querySelector(".loader").style.display="none"}function S(){document.querySelector(".load-button").style.display="block"}function p(){document.querySelector(".load-button").style.display="none"}c.defaults.baseURL="https://pixabay.com/api";async function v(e,l){return(await c.get("/",{params:{key:"50763024-dac579c8a6c32124d9f634148",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l}})).data.hits}async function D(e){return(await c.get("/",{params:{key:"50763024-dac579c8a6c32124d9f634148",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.totalHits}let f=document.querySelector(".form");f.addEventListener("submit",$);let a="",i=1,m=1,E=document.querySelector(".load-button");async function $(e){e.preventDefault();let r=new FormData(f).get("search-text").trim();if(r==""){s.error({title:"Error",message:"request can`t be empty"});return}a!=r&&(a=r,i=1,m=await D(a),w(),d(),p(),g())}E.addEventListener("click",g);async function g(){p(),d();try{const e=await v(a,i);if(!e||e.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}i++,L(e),i<m?S():s.show({title:"END",message:"We're sorry, but you've reached the end of search results."});const l=document.querySelector(".gallery li:first-child");l&&window.scrollBy({top:l.getBoundingClientRect().height*2,behavior:"smooth"})}catch(e){s.error({title:"Error",message:`${e.message||e}`})}finally{q()}}
//# sourceMappingURL=index.js.map
