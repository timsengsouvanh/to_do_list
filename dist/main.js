(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){let e=document.createElement("div");return e.classList.add("task-container"),e.classList.add("flex-area"),e}function n(){let e=document.createElement("div");return e.classList.add("flex-area"),e.classList.add("check-task-area"),e}function d(e){let t=document.createElement("button");return t.innerHTML="&times;",t.classList.add("delete-btn"),t.setAttribute("data",f.task.indexOf(e)),t}function c(){let e=document.createElement("input");return e.setAttribute("type","checkbox"),e.classList.add("checkbox"),e}function a(e){let a=document.querySelector("#tasks"),i=t();a.appendChild(i);let l=function(){let e=document.createElement("div");return e.classList.add("title-area"),e}();i.appendChild(l);let r=n();l.appendChild(r);let o=function(e){let t=document.createElement("div");return t.classList.add("date"),t.innerText=e.duedate,t}(e);l.appendChild(o);let s=c();r.appendChild(s);let u=function(e){let t=document.createElement("div");return t.classList.add("task"),t.innerText=e.name,t}(e);r.appendChild(u);let p=function(){let e=document.createElement("div");return e.classList.add("description-container"),e}();i.appendChild(p);let m=function(e){let t=document.createElement("div");return t.classList.add("description-item"),t.classList.add("margin-desc"),t.innerText=e.description,t}(e);p.appendChild(m);let h=d(e);p.appendChild(h)}function i(){let e=document.createElement("input");return e.setAttribute("type","text"),e.setAttribute("id","textinput"),e}function l(){let e=document.createElement("button");return e.innerHTML="&#10004;",e.classList.add("confirm"),e}function r(e){let t=document.createElement("div");return t.classList.add("project-container"),t.classList.add("flex-area"),t.setAttribute("data",h.indexOf(e)),t}e.d({},{yw:()=>E,MP:()=>f,j2:()=>y,q:()=>h});const o=(e,t)=>({name:e,task:t}),s=(e,t,n,d,c)=>({name:e,description:t,duedate:n,priority:d,project:c});function u(){document.querySelector("#tasks").innerHTML="",document.querySelector("#projects").innerHTML=""}let p=[s("study programming","study everyday and continue doing this project","10/04/2021","high priority","Personal"),s("study japanese","do anki and all the reviews, try to listen to all sentences","20/04/2021","high priority"),s("watch anime","watch evangelion, and later watch cowboy bebop","31/06/2021","high priority")],m=[s("Teach","Teach all lessons and assign homework","30/12/2021","","Work"),s("PPP","Do not forget to use YNOK and do a lot of practice with students","24/12/21")],h=[o("Personal",p),o("Work",m)],f=h[0];function L(){document.querySelector("#addbtn").addEventListener("click",(()=>{null===document.getElementById("textinput")&&(function(){let e=document.querySelector("#tasks"),a=t();e.appendChild(a);let r=n();a.appendChild(r);let o=c();r.appendChild(o);let s=i();r.appendChild(s);let u=document.createElement("div");a.appendChild(u);let p=l();p.classList.add("margin"),u.appendChild(p);let m=d();m.classList.add("margin"),m.addEventListener("click",(()=>{a.remove()})),u.appendChild(m)}(),document.querySelector(".confirm").addEventListener("click",(()=>{!function(){let e=document.getElementById("textinput"),t=s(e.value);f.task.push(t),u(),y(),E(),console.log(f.task)}()})))})),document.querySelector("#addbtnproj").addEventListener("click",(()=>{null===document.getElementById("textinput")&&(function(){let e=document.querySelector("#projects"),t=r();e.appendChild(t);let n=function(){let e=document.createElement("div");return e.classList.add("project-check-area"),e}();t.appendChild(n);let c=i();n.appendChild(c);let a=function(){let e=document.createElement("div");return e.classList.add("project-confirm-delete-area"),e}();n.appendChild(a);let o=l();a.appendChild(o);let s=d();s.addEventListener("click",(()=>{t.remove()})),a.appendChild(s)}(),document.querySelector(".confirm").addEventListener("click",(()=>{!function(){let e=document.getElementById("textinput"),t=o(e.value,[]);h.push(t),u(),y(),E(),console.log(h)}()})))}))}function y(){f.task.forEach((e=>{a(e)})),h.forEach((e=>{!function(e){let t=document.querySelector("#projects"),n=r(e);t.appendChild(n);let d=function(e){let t=document.createElement("div");return t.setAttribute("data",h.indexOf(e)),t.classList.add("project-item"),t.innerText=e.name,t}(e);n.appendChild(d)}(e)}))}function E(){document.querySelectorAll(".delete-btn").forEach((e=>{e.addEventListener("click",(()=>{!function(e){let t=e.getAttribute("data");f.task.splice(t,1),console.log(f.task)}(e),u(),y(),E()}))})),document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("change",(()=>{let t=e.closest(".title-area");e.checked?t.classList.add("completed-item"):t.classList.remove("completed-item")}))})),L(),document.querySelectorAll(".project-container").forEach((e=>{e.addEventListener("click",(()=>{u(),function(e){let t=e.getAttribute("data"),n=parseInt(t);f=h[n],console.log(f)}(e),y(),E()}))}))}y(),E()})();