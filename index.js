import{a as c,i as h,S as g}from"./assets/vendor-DH2CaQaJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="48865554-9c41d4f1cdb1a3126cd29aed3",y="https://pixabay.com/api/",C=a=>c.get(`${y}?key=${f}&${a}`),v="AIzaSyDkma_-23SOOFT86C4sfDZ_GCLFzM_NQao",b="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",L=a=>`
    <instruction>
Task: Analyze the prompt within the "prompt" tag and generate a URL to invoke the Pixabay API.
Context:
If keywords are present in the prompt, attempt to utilize them as search query parameters.
Consider the remaining portion of the prompt as the image search query text ("q" parameter).
The "q" parameter is mandatory, so even if the entire prompt resembles other parameters, identify a section to employ as the query text.
The input prompt can be in any language (detect the language), consistently translating it into English initially.
The "q" parameter must be URL encoded, while other parameters are optional and, if discovered, should be separated using the "&" symbol.
Provide the result in a format that can be directly appended to a URL string (excluding the URL itself).
Disregard additional words such as "please", "could you", "would you", etc.
</instruction>
<examples>
mountaing lake as vertical - should be converted to q=mountain+lake&orientation=vertical
vertical illustration of cat - should be converted to q=cat&orientation=vertical&image_type=illustration
</examples>
<apidoc>
Available options:

q: (str) A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters. Example: "yellow+flower"

id: (str) Retrieve individual images by ID.

image_type: (str) Filter results by image type. Accepted values: "all", "photo", "illustration", "vector"

orientation: (str) Whether an image is wider than it is tall, or taller than it is wide. Accepted values: "all", "horizontal", "vertical"

category: (str) Filter results by category. Accepted values: backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music

min_width: (int) Minimum image width.

min_height: (int) Minimum image height.

colors: (str) Filter images by color properties. A comma separated list of values may be used to select multiple properties. Accepted values: "grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"

editors_choice: (bool) Select images that have received an Editor's Choice award. Accepted values: "true", "false"

safesearch: (bool) A flag indicating that only images suitable for all ages should be returned. Accepted values: "true", "false"

order: (str) How the results should be ordered. Accepted values: "popular", "latest"
</apidoc>
<prompt>${a}</prompt>
    `,w=a=>{let o={contents:[{parts:[{text:a}]}]};return c.post(`${b}?key=${v}`,o)},F="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_102001_44)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_102001_44'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",d=document.querySelector("ul.gallery"),l=a=>{h.show({message:a,position:"center",iconUrl:F,iconColor:"#FFFFFF",backgroundColor:"#EF4040",messageColor:"#FFFFFF",progressBarColor:"#B51B1B"})},A=a=>{function o({webformatURL:i,largeImageURL:e,tags:t,likes:r,views:p,comments:u,downloads:m}){return`
<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${t}"
    />
  </a>
  <div class = "image-info-block">
    <div class = "image-info-block-part">
      <p class="bold">Likes</p>
      <p></p>${r}</p>
  </div>
    <div class = "image-info-block-part">
    <p class="bold">Views</p>
    <p>${p}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Comments</p>
    <p>${u}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Downloads</p>
    <p>${m}</p>
  </div>
</div>
</li>
`}d.innerHTML=a.map(o).join(""),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},x=()=>{d.innerHTML=""},_=document.querySelector(".search-form"),n=document.querySelector(".loader-placeholder");_.addEventListener("submit",a=>{a.preventDefault();const s=a.target.elements.input.value.trim();if(s===""){l("Please fill out this field");return}x(),n.classList.add("loader");let i=L(s);w(i).then(e=>{let t=e.data.candidates[0].content.parts[0].text;console.log(t),C(t).then(r=>{if(console.log(r),r.data.hits.length===0){l("Sorry, there are no images matching your search query. Please, try again!");return}A(r.data.hits)}).catch(r=>{console.log(r)})}).catch(e=>{console.log(e)}).finally(()=>{n.classList.remove("loader")})});
//# sourceMappingURL=index.js.map
