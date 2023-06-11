import{d as P,g as s,i as a,b,f as k,h as y,j as C,A as S,t as u,u as B,c as D,a as _,l as T,r as j,m as z,n as F,p as O,O as R,o as W,q as H,s as K}from"./entry-client-2c202da4.js";import{g as w,a as Q,b as U}from"./utils-e3ca54b4.js";const A=[{label:["Quickstart","i-mingcute:safe-flash-fill"],items:[["Install","quickstart/install"],["Download","quickstart/post-install"]]},{label:["Walkthrough","i-mdi-cog"],items:[["Walkthrough","config/walkthrough"],["Snippets","config/snippets"],["Manage Plugins","config/plugins"],["Syntax highlighting","config/syntax"],["LSP Configuration","config/lsp"],["Format & Lint","config/format_lint"],["Mappings","config/mappings"],["UI Customization","config/nvchad_ui"],["Customize colors","config/theming"]]},{label:["Features","i-mdi:atom-variant"],items:[["Features","features/features"]]},["KeyBindings","keybindings","i-tabler:server-cog"],["Contributing","contribute","i-mdi-github"],["Donate","donate","i-line-md:heart"]],G=u('<div class="grid pl-4 gap-3 rounded-none" border="0 l solid slate-2 dark:dark-4" ml-3="" pl-5=""></div>',2),J=u('<div class="grid gap-5"><button class="rounded-xl gap-20 bg-sky-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"><div class="vertCentered" font-medium=""><div></div> <!#><!/></div><div></div></button><!#><!/></div>',14),V=u('<div i-octicon-chevron-down-12=""></div>',2),X=u('<div i-octicon-chevron-right-12=""></div>',2),Y=u(`<div class="h-fit  xl:sticky z-10 top-0  xl:flex flex-col
     bg-white-1 dark:bg-dark-2
     text-gray-600 dark:text-grey rounded-none pt-0 p-7 xl:p-0"><div h-full="" flex="" flex-col="" gap-5="" class="[&amp;_*]:text-base dark:text-slate-4"></div></div>`,4),Z=u("<div></div>",2);function tt(t){const r=t.labels.filter(n=>B().pathname==`/docs/${n[1]}`).length,[e,i]=D(r==1);return(()=>{const n=s(J),l=n.firstChild,o=l.firstChild,c=o.firstChild,d=c.nextSibling,$=d.nextSibling,[f,v]=_($.nextSibling),m=o.nextSibling,q=l.nextSibling,[M,N]=_(q.nextSibling);return l.$$click=()=>i(!e()),a(o,()=>t.BtnLabel[0],f,v),a(m,(()=>{const g=C(()=>!!e());return()=>g()?s(V):s(X)})()),a(n,b(T,{get when(){return e()},get children(){const g=s(G);return a(g,()=>t.labels.map(p=>b(S,{activeClass:"text-slate-7 dark:text-white-2 font-bold",get href(){return p[1]},get children(){return p[0]}}))),g}}),M,N),k(g=>{const p=t.BtnLabel[1],L=`text-xl bg-slate-6 text-slate-1 dark:bg-dark-4 p-1 rounded-full
                  ${e()?"dark:text-red-3":"dark:text-white-2"}`;return p!==g._v$&&y(c,g._v$=p),L!==g._v$2&&y(m,g._v$2=L),g},{_v$:void 0,_v$2:void 0}),j(),n})()}function et(){return(()=>{const t=s(Y),r=t.firstChild;return a(r,()=>A.map(e=>e.label?b(tt,{get BtnLabel(){return e.label},get labels(){return e.items}}):b(S,{get href(){return e[1]},vertCentered:"",activeClass:"font-medium text-blue-5 dark:text-blue-3",get children(){return[(()=>{const i=s(Z);return k(()=>y(i,e[2])),i})(),C(()=>e[0])]}}))),k(()=>t.hidden=!I()),t})()}P(["click"]);const nt=u('<div flex="" justify-between=""><!#><!/><!#><!/></div>',6),it=u('<button border="1 solid slate-2" class="!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4"><div i-ph-arrow-left-bold=""></div><!#><!/></button>',6),E=u("<div></div>",2),lt=u('<button border="1 solid slate-2" class="!bg-transparent text-blue-6 dark:text-blue-4  p-3 px-5 dark:border-dark-4"><!#><!/><div i-ph-arrow-right-bold=""></div></button>',6);let x=[];A.forEach(t=>{Array.isArray(t)?x.push(t):t.items.forEach(r=>{x.push(r)})});function h(t,r){let e="",i=B().pathname.replace(/^\/docs\//,"");return x.forEach((n,l)=>{i==n[1]&&x[l+t]&&(e=x[l+t][r?1:0])}),e}const rt=()=>(()=>{const t=s(nt),r=t.firstChild,[e,i]=_(r.nextSibling),n=e.nextSibling,[l,o]=_(n.nextSibling);return a(t,(()=>{const c=C(()=>!!h(-1));return()=>c()?b(S,{get href(){return h(-1,!0)},get children(){const d=s(it),$=d.firstChild,f=$.nextSibling,[v,m]=_(f.nextSibling);return a(d,()=>h(-1),v,m),d}}):s(E)})(),e,i),a(t,(()=>{const c=C(()=>!!h(1));return()=>c()?b(S,{get href(){return h(1,!0)},get children(){const d=s(lt),$=d.firstChild,[f,v]=_($.nextSibling);return f.nextSibling,a(d,()=>h(1),f,v),d}}):s(E)})(),l,o),t})();const st=t=>{document.getElementById(t)?.querySelectorAll("pre")?.forEach(function(i){const n=document.createElement("button");n.classList="copyBtn",n.ariaLabel="copy button";const l=document.createElement("div");l.classList="i-uil:clipboard",n.appendChild(l),n.addEventListener("click",function(){const o=n.querySelector("div");o.classList="i-line-md:confirm-circle clickedCopyBtn";const c=i.textContent;navigator.clipboard.writeText(c),setTimeout(()=>{o.classList="i-uil:clipboard"},3e3)}),i.appendChild(n)})},at=u('<div grid="" class="xl:grid-cols-[auto_1fr] max-w-[1700px] mx-auto my-8 px-4"><!#><!/><div class="xl:blur-none"><div class="flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div xl-px-10=""><div id="DocContent" w-full=""></div><!#><!/></div></div></div></div>',14),[I,dt]=D(!1);function ut(){return z(()=>{window.addEventListener("scroll",()=>w("DocContent")),W(()=>window.removeEventListener("scroll",()=>w("DocContent")))}),F(O(()=>H().pathname,()=>{setTimeout(()=>{st("DocContent"),Q(),w("DocContent"),U()},50)})),(()=>{const t=s(at),r=t.firstChild,[e,i]=_(r.nextSibling),n=e.nextSibling,l=n.firstChild,o=l.firstChild,c=o.firstChild,d=c.nextSibling,[$,f]=_(d.nextSibling);return a(t,b(et,{}),e,i),a(c,b(R,{})),a(o,b(rt,{}),$,f),k(()=>K(n,"blur",I()?"sm":"")),t})()}export{ut as default,dt as showSidebar,I as sideBarShown};
