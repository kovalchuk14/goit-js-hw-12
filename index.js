import{S as g,a as u,i}from"./assets/vendor-B3Lscd_h.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();let d=document.querySelector(".gallery");const h=new g(".gallery a",{captionsData:"alt",captionDelay:250});function b(l){const o=l.map(t=>`<li class="gallery-element">
                    <a href="${t.largeImageURL}">
                        <img src=${t.webformatURL} class="gallery-img" alt=${t.tags}>
                    </a>
                    <ul class="gallery-list">
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Likes</p>
                            <p class="gallery-list-counter">${t.likes}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Views</p>
                            <p class="gallery-list-counter">${t.views}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Comments</p>
                            <p class="gallery-list-counter">${t.comments}</p>
                        </li>
                        <li class="gallery-list-column">
                            <p class="gallery-list-title">Downloads</p>
                            <p class="gallery-list-counter">${t.downloads}</p>
                        </li>
                    </ul>
                </li>
        `).join("");d.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){d.innerHTML=""}function y(){document.querySelector(".loader").style.display="block"}function q(){document.querySelector(".loader").style.display="none"}function w(){document.querySelector(".load-button").style.display="block"}function p(){document.querySelector(".load-button").style.display="none"}u.defaults.baseURL="https://pixabay.com/api";async function S(l,o){return(await u.get("/",{params:{key:"50763024-dac579c8a6c32124d9f634148",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data.hits}let f=document.querySelector(".form");f.addEventListener("submit",D);let n="",s=1,$=1,v=document.querySelector(".load-button");function D(l){l.preventDefault();let t=new FormData(f).get("search-text").trim();if(t==""){i.error({title:"Error",message:"request can`t be empty"});return}n!=t&&(n=t,s=1,L(),y(),p(),m())}v.addEventListener("click",m);function m(){p(),y(),S(n,s).then(l=>{l.length==0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(s++,b(l),s<$&&w())}).catch(l=>i.error({title:"Error",message:`${l}`})).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
