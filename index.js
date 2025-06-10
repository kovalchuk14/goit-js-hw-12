import{S as h,a as c,i as s}from"./assets/vendor-B3Lscd_h.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();let d=document.querySelector(".gallery");const b=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const o=r.map(t=>`<li class="gallery-element">
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
        `).join("");d.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){d.innerHTML=""}function y(){document.querySelector(".loader").style.display="block"}function q(){document.querySelector(".loader").style.display="none"}function S(){document.querySelector(".load-button").style.display="block"}function p(){document.querySelector(".load-button").style.display="none"}c.defaults.baseURL="https://pixabay.com/api";async function v(r,o){return(await c.get("/",{params:{key:"50763024-dac579c8a6c32124d9f634148",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data.hits}async function D(r){return(await c.get("/",{params:{key:"50763024-dac579c8a6c32124d9f634148",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.totalHits}let f=document.querySelector(".form");f.addEventListener("submit",$);let a="",i=1,m=1,E=document.querySelector(".load-button");async function $(r){r.preventDefault();let t=new FormData(f).get("search-text").trim();if(t==""){s.error({title:"Error",message:"request can`t be empty"});return}a!=t&&(a=t,i=1,m=await D(a),w(),y(),p(),g())}E.addEventListener("click",g);function g(){p(),y(),v(a,i).then(r=>{r.length==0?s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(i++,L(r),i<m?S():s.show({title:"END",message:"We're sorry, but you've reached the end of search results."}))}).catch(r=>s.error({title:"Error",message:`${r}`})).finally(()=>{q(),window.scrollBy(0,document.querySelector(".gallery li:first-child").getBoundingClientRect().height*2)})}
//# sourceMappingURL=index.js.map
