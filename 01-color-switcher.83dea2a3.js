const t=document.querySelector("body"),e=document.querySelector("[data-start]"),l=document.querySelector("[data-stop");l.toggleAttribute("disabled");let o=null;const r=()=>{l.toggleAttribute("disabled"),e.toggleAttribute("disabled")};e.addEventListener("click",(()=>{r(),o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),l.addEventListener("click",(()=>{r(),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.83dea2a3.js.map