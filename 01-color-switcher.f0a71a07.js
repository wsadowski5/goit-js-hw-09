!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop");n.toggleAttribute("disabled",!0);var o=null,r=function(){n.toggleAttribute("disabled"),e.toggleAttribute("disabled")};e.addEventListener("click",(function(){r(),o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){r(),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.f0a71a07.js.map
