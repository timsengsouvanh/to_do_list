(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){let e=document.createElement("div");return e.classList.add("task-item"),e.classList.add("flex-area"),e}function n(){let e=document.createElement("div");return e.classList.add("flex-area"),e.classList.add("check-task-area"),e}function d(e){let t=document.createElement("button");return t.innerHTML="&times;",t.classList.add("delete-btn"),t.setAttribute("data",h.task.indexOf(e)),t}function c(){let e=document.createElement("input");return e.setAttribute("type","checkbox"),e.classList.add("checkbox"),e}function a(){let e=document.createElement("input");return e.setAttribute("type","text"),e.setAttribute("id","textinput"),e}function l(){let e=document.createElement("button");return e.innerHTML="&#10004;",e.classList.add("confirm"),e}function r(){let e=document.createElement("div");return e.classList.add("project-container"),e.classList.add("flex-area"),e}e.d({},{yw:()=>k,MP:()=>h,j2:()=>y,q:()=>m});const i=(e,t)=>({name:e,task:t}),o=(e,t,n,d,c)=>({name:e,description:t,duedate:n,priority:d,project:c});function s(){document.querySelector("#tasks").innerHTML="",document.querySelector("#projects").innerHTML=""}let u=[o("study programming","study a lot please","tomorrow","high priority","Personal"),o("study japanese","study a lot please","tomorrow","high priority"),o("watch anime","study a lot please","tomorrow","high priority")],p=[o("teach","","","","Work"),o("PPP")],m=[i("Personal",u),i("Work",p)],h=m[0];function f(){document.querySelector("#addbtn").addEventListener("click",(()=>{null===document.getElementById("textinput")&&(function(){let e=document.querySelector("#tasks"),r=t();e.appendChild(r);let i=n();r.appendChild(i);let o=c();i.appendChild(o);let s=a();i.appendChild(s);let u=document.createElement("div");r.appendChild(u);let p=l();p.classList.add("margin"),u.appendChild(p);let m=d();m.classList.add("margin"),m.addEventListener("click",(()=>{r.remove()})),u.appendChild(m)}(),document.querySelector(".confirm").addEventListener("click",(()=>{!function(){let e=document.getElementById("textinput"),t=o(e.value);h.task.push(t),s(),y(),k(),console.log(h.task)}()})))})),document.querySelector("#addbtnproj").addEventListener("click",(()=>{null===document.getElementById("textinput")&&function(){let e=document.querySelector("#projects"),t=r();e.appendChild(t);let n=a();t.appendChild(n);let c=l();c.classList.add("margin"),t.appendChild(c);let i=d();i.classList.add("margin"),i.addEventListener("click",(()=>{t.remove()})),t.appendChild(i)}()}))}function y(){h.task.forEach((e=>{!function(e){let a=document.querySelector("#tasks"),l=t();a.appendChild(l);let r=n();l.appendChild(r);let i=c();r.appendChild(i);let o=function(e){let t=document.createElement("div");return t.setAttribute("id",e),t.innerText=e,t}(e.name);r.appendChild(o);let s=d(e);l.appendChild(s)}(e)})),m.forEach((e=>{!function(e){let t=document.querySelector("#projects"),n=r();t.appendChild(n);let d=function(e){let t=document.createElement("div");return t.setAttribute("data",m.indexOf(e)),t.classList.add("project-item"),t.innerText=e.name,t}(e);n.appendChild(d)}(e)}))}function k(){document.querySelectorAll(".delete-btn").forEach((e=>{e.addEventListener("click",(()=>{!function(e){let t=e.getAttribute("data");h.task.splice(t,1),console.log(h.task)}(e),s(),y(),k()}))})),document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("change",(()=>{let t=e.closest(".check-task-area");e.checked?t.classList.add("completed-item"):t.classList.remove("completed-item")}))})),f(),document.querySelectorAll(".project-item").forEach((e=>{e.addEventListener("click",(()=>{s(),function(e){let t=e.getAttribute("data"),n=parseInt(t);h=m[n],console.log(h)}(e),y(),k()}))}))}y(),k()})();