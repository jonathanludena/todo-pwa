!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"format",{enumerable:!0,get:function(){return a.format}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return r.render}}),Object.defineProperty(t,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(t,"register",{enumerable:!0,get:function(){return c.register}}),t.version=void 0;var a=n(4),r=n(5),c=n(1);t.version="4.0.0-beta.2"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLocale=t.register=void 0;var a="second_minute_hour_day_week_month_year".split("_"),r="秒_分钟_小时_天_周_个月_年".split("_"),c=function(e,t){if(0===t)return["just now","right now"];var n=a[parseInt(t/2)];return e>1&&(n+="s"),["".concat(e," ").concat(n," ago"),"in ".concat(e," ").concat(n)]},d={en_US:c,zh_CN:function(e,t){if(0===t)return["刚刚","片刻后"];var n=r[parseInt(t/2)];return["".concat(e," ").concat(n,"前"),"".concat(e," ").concat(n,"后")]}};t.register=function(e,t){d[e]=t};t.getLocale=function(e){return d[e]||c}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nextInterval=t.diffSec=t.formatDiff=t.toDate=t.toInt=void 0;var a=[60,60,24,7,365/7/12,12],r=function(e){return parseInt(e)};t.toInt=r;var c=function(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(r(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e))};t.toDate=c;t.formatDiff=function(e,t){for(var n=0,c=e<0?1:0,d=e=Math.abs(e);e>=a[n]&&n<a.length;n++)e/=a[n];return(e=r(e))>(0==(n*=2)?9:1)&&(n+=1),t(e,n,d)[c].replace("%s",e)};t.diffSec=function(e,t){return((t=t?c(t):new Date)-c(e))/1e3};t.nextInterval=function(e){for(var t=1,n=0,r=Math.abs(e);e>=a[n]&&n<a.length;n++)e/=a[n],t*=a[n];return r=(r%=t)?t-r:t,Math.ceil(r)}},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;var a=n(2),r=n(1);t.format=function(e,t,n){var c=(0,a.diffSec)(e,n);return(0,a.formatDiff)(c,(0,r.getLocale)(t))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.cancel=void 0;var a=n(6),r=n(2),c=n(1),d={},i=function(e){clearTimeout(e),delete d[e]},o=function e(t,n,c,o){i((0,a.getTimerId)(t));var s=(0,r.diffSec)(n,o);t.innerHTML=(0,r.formatDiff)(s,c);var l=setTimeout(function(){e(t,n,c,o)},1e3*(0,r.nextInterval)(s),2147483647);d[l]=0,(0,a.saveTimerId)(t,l)};t.cancel=function(e){if(e)i((0,a.getTimerId)(e));else for(var t in d)i(t)};t.render=function(e,t,n){var r;void 0===e.length&&(e=[e]);for(var d=0;d<e.length;d++){r=e[d];var i=(0,a.getDateAttribute)(r),s=(0,c.getLocale)(t);o(r,i,s,n)}return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimerId=t.saveTimerId=t.getDateAttribute=void 0;var a=function(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0};t.getDateAttribute=function(e){return a(e,"datetime")};t.saveTimerId=function(e,t){return e.setAttribute?e.setAttribute("timeago-tid",t):e.attr?e.attr("timeago-tid",t):void 0};t.getTimerId=function(e){return a(e,"timeago-tid")}},function(e,t,n){"use strict";n.r(t);n(3);var a=n(0);const r=new class{constructor(){this.URI="http://localhost:3000/api/tasks"}async getTasks(){const e=await fetch(this.URI);return await e.json()}async postTask(e){const t=await fetch(this.URI,{method:"POST",body:e}),n=await t.json();console.log(n)}async deleteTask(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"}),n=await t.json();console.log(n)}};var c=class{newTask(){document.querySelector(".formNTask").style.display="block",document.getElementById("newTask").style.display="none"}btnCancelar(){document.querySelector(".formNTask").style.display="none",document.getElementById("newTask").style.display="block",document.querySelector(".calendar").style.display="none",document.querySelector(".fileImage").style.display="none",this.clearTaskForm()}btnCalendar(){const e=document.querySelector(".calendar").style.display;document.querySelector(".calendar").style.display="block"===e?"none":"block"}btnImage(){const e=document.querySelector(".fileImage").style.display;document.querySelector(".fileImage").style.display="block"===e?"none":"block"}clearTaskForm(){document.getElementById("formNTask").reset()}async addNewTask(e){await r.postTask(e),this.btnCancelar(),this.renderTasks()}async renderTasks(){const e=await r.getTasks(),t=document.getElementById("tasks-cards");t.innerHTML="";let n="";e.forEach(e=>{let r="";e.marca&&(r="s"===e.marca?"Seguimiento":"r"===e.marca?"Recordatorio":"Informativo"),(n=document.createElement("div")).className="",!e.imagePath||e.calendar||e.marca?!e.imagePath&&e.calendar?(n.innerHTML=`\n          <div class="col">\n            <div class='animated bounceIn card mr-1'>\n              <div class="card-body">\n                <h5 class="card-title">${e.title}</h5>\n                <p class="card-text">${e.description}</p>\n                <small class="text-muted">${e.calendar} - ${r}</small><br/>\n                <a class="btn btn-danger delete" _id="${e._id}">x</a>\n              </div>\n              <div class="card-footer">${Object(a.format)(e.created_at)}</div>\n            </div>\n          </div>\n        `,t.appendChild(n)):e.imagePath||e.calendar||!e.marca?e.imagePath&&e.calendar?(n.innerHTML=`\n          <div class="col">\n            <div class='animated bounceIn card mr-1'>\n              <img src="http://localhost:3000/${e.imagePath}" alt="imageTask" class="card-img-top img-fluid" />\n              <div class="card-body">\n                <h5 class="card-title">${e.title}</h5>\n                <p class="card-text">${e.description}</p>\n                <small class="text-muted">${e.calendar} - ${r}</small><br/>\n                <a class="btn btn-danger delete" _id="${e._id}">x</a>\n              </div>\n              <div class="card-footer">${Object(a.format)(e.created_at)}</div>\n            </div>\n          </div>\n        `,t.appendChild(n)):(n.innerHTML=`\n          <div class="col">\n            <div class='animated bounceIn card mr-1'>\n              <div class="card-body">\n                <h5 class="card-title">${e.title}</h5>\n                <p class="card-text">${e.description}</p><br/>\n                <a class="btn btn-danger delete" _id="${e._id}">x</a>\n              </div>\n              <div class="card-footer">${Object(a.format)(e.created_at)}</div>\n            </div>\n          </div>\n        `,t.appendChild(n)):(n.innerHTML=`\n          <div class="col">\n            <div class='animated bounceIn card mr-1'>\n              <div class="card-body">\n                <h5 class="card-title">${e.title}</h5>\n                <p class="card-text">${e.description}</p>\n                <small class="text-muted">${r}</small><br/>\n                <a class="btn btn-danger delete" _id="${e._id}">x</a>\n              </div>\n              <div class="card-footer">${Object(a.format)(e.created_at)}</div>\n            </div>\n          </div>\n        `,t.appendChild(n)):(n.innerHTML=`\n          <div class="col" >\n            <div class='animated bounceIn card mr-1'>\n              <img src="http://localhost:3000/${e.imagePath}" alt="imageTask" class="card-img-top img-fluid" />\n              <div class="card-body">\n                <h5 class="card-title">${e.title}</h5>\n                <p class="card-text">${e.description}</p><br/>\n                <a class="btn btn-danger delete" _id="${e._id}">x</a>\n              </div>\n              <div class="card-footer">${Object(a.format)(e.created_at)}</div>\n            </div>\n          </div>\n        `,t.appendChild(n))})}async deleteTask(e){await r.deleteTask(e),this.btnCancelar(),this.renderTasks()}};const d=new c;document.addEventListener("DOMContentLoaded",()=>{(new c).renderTasks()}),document.querySelector(".formNTask").addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("title").value,n=document.getElementById("description").value,a=document.getElementById("calendar").value,r=document.getElementById("marca").value,c=document.getElementById("image").files,i=!!c[0],o=new FormData;o.append("title",t),o.append("description",n),a&&(o.append("calendar",a),"x"===r&&o.append("marca","s")),"x"!==r&&o.append("marca",r),i&&o.append("image",c[0]),d.addNewTask(o)}),document.getElementById("tasks-cards").addEventListener("click",e=>{e.target.classList.contains("delete")&&d.deleteTask(e.target.getAttribute("_id"))}),document.getElementById("newTask").addEventListener("click",e=>{e.preventDefault(),d.newTask()}),document.getElementById("btnCancelar").addEventListener("click",e=>{e.preventDefault(),d.btnCancelar()}),document.getElementById("btnCalendar").addEventListener("click",e=>{e.preventDefault(),d.btnCalendar()}),document.getElementById("btnFileImage").addEventListener("click",e=>{e.preventDefault(),d.btnImage()}),document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("contactForm");new FormData(t)})}]);
//# sourceMappingURL=app.bundle.js.map