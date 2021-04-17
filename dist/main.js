(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){let e=document.createElement("div");return e.classList.add("task-container"),e.classList.add("flex-area"),e}function n(){let e=document.createElement("div");return e.classList.add("flex-area"),e.classList.add("check-task-area"),e}function d(e){let t=document.createElement("div");return t.classList.add("task"),t.innerText=e.name,t}function i(e){let t=document.createElement("div");return t.classList.add("description-item"),t.classList.add("margin-desc"),t.innerText="notes: "+e.description,t}function a(e){let t=document.createElement("button");return t.innerHTML="&times;",t.classList.add("delete-btn"),t.classList.add("margin"),t.setAttribute("data",x.task.indexOf(e)),t}function l(){let e=document.createElement("div");return e.classList.add("delete-edit-area"),e}function c(e){let t=document.createElement("input");return t.setAttribute("type","checkbox"),t.classList.add("checkbox"),function(e){!0===e.completed?t.checked=!0:t.checked=!1}(e),t.setAttribute("data",x.task.indexOf(e)),t}function r(e){let t=document.createElement("div");return t.classList.add("title-area"),t}function o(e){let t=document.createElement("div");return t.classList.add("date"),t.innerText=e.duedate,t}function s(){let e=document.createElement("div");return e.classList.add("description-container"),e}function u(){let e=document.createElement("button");return e.innerHTML="&#10004;",e.classList.add("confirm"),e}function p(){let e=document.createElement("div");return e.classList.add("potential-btn-area"),e}function m(){let e=document.createElement("div");return e.classList.add("potential-first-line"),e}function h(){let e=document.createElement("div");return e.classList.add("potential-second-line"),e}function f(e){let d=t();d.classList.add("potential-task-container");let i=m();d.appendChild(i);let l=n();i.appendChild(l);let r=c();l.appendChild(r);let o=function(e){let t=document.createElement("input");return t.setAttribute("type","text"),t.setAttribute("id","textinput"),t.setAttribute("value",e.name),t}(e);l.appendChild(o);let s=p();i.appendChild(s);let f=u();f.classList.add("margin"),f.setAttribute("id","new-check"),s.appendChild(f);let k=a();k.classList.add("margin"),k.addEventListener("click",(()=>{d.remove()})),s.appendChild(k);let y=h();d.appendChild(y);let b=function(e){let t=document.createElement("input");return t.setAttribute("type","text"),t.setAttribute("id","description-input"),t.setAttribute("value",e.description),t}(e);y.appendChild(b);let E=function(e){let t=document.createElement("input");return t.setAttribute("type","date"),t.setAttribute("id","date-input"),t.setAttribute("value",e.duedate),t}(e);return y.appendChild(E),d}function k(e){let t=document.createElement("div");return t.classList.add("project-container"),t.classList.add("flex-area"),t.setAttribute("data",C.indexOf(e)),t}e.d({},{yw:()=>j,MP:()=>x,j2:()=>T,q:()=>C});const y=(e,t,n)=>({name:e,prioritytask:t,task:n}),b=(e,t,n,d,i)=>({name:e,description:t,duedate:n,dateadded:d,completed:i});function E(e){let t=e.getAttribute("data");x.task.splice(t,1),console.log(x.task)}function L(){document.querySelector("#priority-tasks").innerHTML="",document.querySelector("#tasks").innerHTML="",document.querySelector("#projects").innerHTML=""}let g=[b("study programming","study everyday and continue doing this project","2021-04-21",1,!0),b("study japanese","do anki and all the reviews, try to listen to all sentences","2021-08-19",3,!1),b("watch anime","watch evangelion, and later watch cowboy bebop","2021-10-11",2,!1)],v=[("move out","need to organize moving out","2021-04-29",!0,{name:"move out",description:"need to organize moving out",duedate:"2021-04-29",completed:true})];let A=[b("Teach","Teach all lessons and assign homework","2021-06-09","2"),b("PPP","Do not forget to use YNOK and do a lot of practice with students","2021-08-22","1")],C=[y("Personal",v,g),y("Work",[],A)],x=C[0];function q(){document.querySelector("#addbtn").addEventListener("click",(()=>{null===document.getElementById("textinput")&&(function(){let e=document.querySelector("#tasks"),d=t();d.classList.add("potential-task-container"),e.appendChild(d);let i=m();d.appendChild(i);let l=n();i.appendChild(l);let r=c();l.appendChild(r);let o=function(e){let t=document.createElement("input");return t.size="30",t.setAttribute("type","text"),t.setAttribute("id","textinput"),t.setAttribute("placeholder","Task"),t}();l.appendChild(o);let s=p();i.appendChild(s);let f=u();f.classList.add("margin"),s.appendChild(f);let k=a();k.classList.add("margin"),k.addEventListener("click",(()=>{d.remove()})),s.appendChild(k);let y=h();d.appendChild(y);let b=function(){let e=document.createElement("input");return e.size="30",e.setAttribute("type","text"),e.setAttribute("id","description-input"),e.setAttribute("placeholder","Description"),e}();y.appendChild(b);let E=function(){let e=document.createElement("input");return e.setAttribute("type","date"),e.setAttribute("id","date-input"),e}();y.appendChild(E)}(),document.querySelector(".confirm").addEventListener("click",(()=>{!function(){let e=document.getElementById("description-input"),t=document.getElementById("date-input"),n=Date.now(),d=b(function(){let e=document.getElementById("textinput");return""===e.value?"Unnamed Task":e.value}(),e.value,t.value,n,!1);x.task.push(d),console.log(x.task)}(),L(),T(),j()})))})),document.querySelector("#addbtnproj").addEventListener("click",(()=>{null===document.getElementById("textinput")&&(function(){let e=document.querySelector("#projects"),t=k();e.appendChild(t);let n=function(){let e=document.createElement("div");return e.classList.add("project-check-area"),e}();t.appendChild(n);let d=function(){let e=document.createElement("input");return e.setAttribute("type","text"),e.setAttribute("id","textinput"),e.setAttribute("placeholder","Project Name"),e}();n.appendChild(d);let i=function(){let e=document.createElement("div");return e.classList.add("project-confirm-delete-area"),e}();n.appendChild(i);let l=u();i.appendChild(l);let c=a();c.addEventListener("click",(()=>{t.remove()})),i.appendChild(c)}(),document.querySelector(".confirm").addEventListener("click",(()=>{!function(){let e=document.getElementById("textinput"),t=y(e.value,[],[]);C.push(t),L(),T(),j(),console.log(C)}(),x=C[C.length-1],L(),T(),j()})))}))}function S(e){document.querySelector("#new-check").addEventListener("click",(()=>{!function(e){let t=document.getElementById("textinput"),n=document.getElementById("description-input"),d=document.getElementById("date-input");e.name=t.value,e.description=n.value,e.duedate=d.value,L(),T(),j(),console.log(x.task)}(e)}))}function T(){x.prioritytask.sort(((e,t)=>""===e.duedate?1:""===t.duedate?-1:e.duedate===t.duedate?0:e.duedate<t.duedate?-1:1)).forEach((e=>{!function(e){let a=document.querySelector("#priority-tasks"),c=t();a.appendChild(c);let u=r();c.appendChild(u);let p=n();u.appendChild(p);let m=o(e);u.appendChild(m);let h=function(e){let t=document.createElement("button");return t.innerHTML='<i class="fas fa-flag"></i>',t.setAttribute("data",x.prioritytask.indexOf(e)),t.classList.add("priority-btn-high"),t}(e);p.appendChild(h);let f=function(e){let t=document.createElement("input");return t.setAttribute("type","checkbox"),t.classList.add("priority-checkbox"),function(e){!0===e.completed?t.checked=!0:t.checked=!1}(e),t.setAttribute("data",x.prioritytask.indexOf(e)),t}(e);p.appendChild(f);let k=d(e);p.appendChild(k);let y=s();c.appendChild(y);let b=i(e);y.appendChild(b);let E=l();y.appendChild(E);let L=function(e){let t=document.createElement("button");return t.innerHTML="&#xf044;",t.classList.add("priority-edit"),t.setAttribute("data",x.prioritytask.indexOf(e)),t}(e);E.appendChild(L);let g=function(e){let t=document.createElement("button");return t.innerHTML="&times;",t.classList.add("priority-delete"),t.classList.add("margin"),t.setAttribute("data",x.prioritytask.indexOf(e)),t}(e);E.appendChild(g),function(e){!0===e.completed&&u.classList.add("completed-item")}(e)}(e)})),x.task.sort(((e,t)=>""===e.duedate?1:""===t.duedate?-1:e.duedate===t.duedate?0:e.duedate<t.duedate?-1:1)).forEach((e=>{!function(e){let u=document.querySelector("#tasks"),p=t();u.appendChild(p);let m=r();p.appendChild(m);let h=n();m.appendChild(h);let f=o(e);m.appendChild(f);let k=function(e){let t=document.createElement("button");return t.innerHTML='<i class="far fa-flag"></i>',t.setAttribute("data",x.task.indexOf(e)),t.classList.add("priority-btn"),t}(e);h.appendChild(k);let y=c(e);h.appendChild(y);let b=d(e);h.appendChild(b);let E=s();p.appendChild(E);let L=i(e);E.appendChild(L);let g=l();E.appendChild(g);let v=function(e){let t=document.createElement("button");return t.innerHTML="&#xf044;",t.classList.add("edit-btn"),t.setAttribute("data",x.task.indexOf(e)),t}(e);g.appendChild(v);let A=a(e);g.appendChild(A),function(e){!0===e.completed&&m.classList.add("completed-item")}(e)}(e)})),C.forEach((e=>{!function(e){let t=document.querySelector("#projects"),n=k(e);t.appendChild(n);let d=function(e){let t=document.createElement("div");return t.setAttribute("data",C.indexOf(e)),t.classList.add("project-item"),t.innerText=e.name,t}(e);n.appendChild(d)}(e)}))}function j(){document.querySelectorAll(".delete-btn").forEach((e=>{e.addEventListener("click",(()=>{E(e),L(),T(),j()}))})),document.querySelectorAll(".priority-delete").forEach((e=>{e.addEventListener("click",(()=>{!function(e){let t=e.getAttribute("data");x.prioritytask.splice(t,1),console.log(x.prioritytask)}(e),L(),T(),j()}))})),document.querySelectorAll(".edit-btn").forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("data"),n=x.task[t],d=(document.querySelector("#tasks"),e.closest(".task-container")),i=f(n);d.replaceWith(i),S(n)}))})),document.querySelectorAll(".priority-edit").forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("data"),n=x.prioritytask[t],d=(document.querySelector("#tasks"),e.closest(".task-container")),i=f(n);d.replaceWith(i),S(n)}))})),document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("change",(()=>{let t=e.closest(".title-area"),n=e.getAttribute("data"),d=x.task[n];e.checked?(t.classList.add("completed-item"),function(e){e.completed=!0,console.log(x.task)}(d)):(t.classList.remove("completed-item"),function(e){e.completed=!1,console.log(x.task)}(d))}))})),document.querySelectorAll(".priority-checkbox").forEach((e=>{e.addEventListener("change",(()=>{let t=e.closest(".title-area"),n=e.getAttribute("data"),d=x.prioritytask[n];e.checked?(t.classList.add("completed-item"),function(e){e.completed=!0,console.log(x.prioritytask)}(d)):t.classList.remove("completed-item"),function(e){e.completed=!1,console.log(x.prioritytask)}(d)}))})),document.querySelectorAll(".priority-btn").forEach((e=>{e.addEventListener("click",(()=>{!function(e){let t=e.getAttribute("data"),n=x.task[t];x.prioritytask.push(n),x.task.splice(t,1),L(),T(),j(),console.log(x.prioritytask),console.log(x.task)}(e)}))})),document.querySelectorAll(".priority-btn-high").forEach((e=>{e.addEventListener("click",(()=>{!function(e){let t=e.getAttribute("data"),n=x.prioritytask[t];x.task.push(n),x.prioritytask.splice(t,1),L(),T(),j(),console.log(x.prioritytask),console.log(x.task)}(e)}))})),document.querySelectorAll(".task").forEach((e=>{e.addEventListener("click",(()=>{let t=e.parentNode.parentNode.nextSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}))})),q(),document.querySelector("#clearbtn").addEventListener("click",(()=>{document.querySelectorAll(".checkbox").forEach((e=>{e.checked&&(E(e),L(),T(),j())}))})),document.querySelectorAll(".project-container").forEach((e=>{e.addEventListener("click",(()=>{!function(e){let t=e.getAttribute("data"),n=parseInt(t);x=C[n]}(e),L(),T(),j()}))}))}T(),j()})();