!function(){var e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]');document.querySelector("button[type=submit]").addEventListener("click",(function(o){var u=function(t){var o=t,u=Number(e.value)+Number(n.value*(t-1));setTimeout((function(){!function(e,n){Math.random()>.3?console.log("Fulfilled promise ".concat(e," in ").concat(n,"ms")):console.log("Rejected promise ".concat(e," in ").concat(n,"ms"))}(o,u)}),u)};o.preventDefault();for(var c=1;c<=t.value;c++)u(c)}))}();
//# sourceMappingURL=03-promises.d6a0a923.js.map