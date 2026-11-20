const resp=[["Event technical setup","Getting labs, workstations, the network and auditorium equipment ready.","M3 4h18v12H3zM8 20h8M12 16v4"],["Web platforms","Building, hosting and looking after sites for the chapter and its events.","M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"],["Registration and ticketing","A self-serve sign-up site with automatic emails, payment confirmation and QR tickets.","M3 8a2 2 0 0 0 0 8v2h18v-2a2 2 0 0 1 0-8V6H3zM13 6v12"],["Competition infrastructure","Contest setups for programming competitions, including Coders' Cup 2026.","M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 13v4M8 20h8"],["Live troubleshooting","Fixing hardware, network and software problems while an event is live.","M13 2L4 14h7l-1 8 9-12h-7z"],["Stage AV, games and support","Screens, sound, the games at the intro session, and workshop logistics.","M9 3h6v11a3 3 0 0 1-6 0zM5 11a7 7 0 0 0 14 0M12 18v3"],["Internal tools","Scripts and workflows that save other departments time.","M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"]];
const pts=[
 ["Live countdown timer to the event","Interactive overviews of each competition module","Sign-up flows for multiple tracks","Automatic emails, payment confirmation and QR tickets"],
 ["Shows TechOps' work and the chapter's structure","Flagship events and Coders' Cup in one place","Instant page changes on desktop and mobile"],
 ["Participant onboarding","Lab setup for the competitions","Digital logistics for challenges, talks and panels"],
 ["Multi-station lab network set up","Workstations configured and kept running","Problems fixed live during contest rounds","Dedicated setup for the flagship competition"],
 ["Tools for tracking logistics","Keeps departments' workflows in sync","Helps us diagnose issues quickly","Scripts that keep society operations smooth"]];
const days=[
 {t:"Day 1",h:"Getting the lab ready",pts:["Got the university computer labs ready and checked every workstation","Set up the local network","Deployed the contest environment and watched over it during the opening rounds"],img:"day-1.jpg",ar:"646/747"},
 {t:"Day 2",h:"Fixing things live",pts:["Stayed on the ground with participants while programming rounds ran","Kept an eye on the network and server connections","Fixed hardware and system problems fast, so the contest never paused"],img:"day-2.jpg",ar:"633/652"},
 {t:"Day 3",h:"Finals and wrap-up",pts:["Kept workstations steady for the championship rounds","Synced the judge systems for the final evaluation","Packed everything up safely and restored the labs"],img:"day-3.jpg",ar:"632/647"}];
const gal=[
 {img:"day-1.jpg",cap:"Coders' Cup 2026, Day 1: lab setup and session",cat:"Lab floor",ar:"646/747"},
 {img:"day-2.jpg",cap:"Coders' Cup 2026, Day 2: live contestant workstations",cat:"Lab floor",ar:"633/652"},
 {img:"day-3.jpg",cap:"Coders' Cup 2026, Day 3: final rounds and teamwork",cat:"Lab floor",ar:"632/647"},
 {img:"coders-cup.jpg",cap:"Coders' Cup 2026: Teams collaborating live in the lab",cat:"Lab floor",ar:"637/802"},
 {img:"intro-session.jpg",cap:"Introductory session on stage, 19 October 2026",cat:"Intro session",ar:"351/627"},
 {img:"games-1.jpg",cap:"Laptop mini-games built by TechOps for the intro session",cat:"Intro session",ar:"833/632"},
 {img:"games-2.jpg",cap:"Reaction Time game challenge run by TechOps",cat:"Intro session",ar:"720/1600"},
 {img:"foyer-minigames.jpg",cap:"Foyer minigames crowd before the intro session",cat:"Intro session",ar:"720/1600"},
 {img:"coders-cup-what.jpg",cap:"Official announcement: What is Coders' Cup?",cat:"Announcements",ar:"652/805"},
 {img:"coders-cup-why.jpg",cap:"Official announcement: Why participate?",cat:"Announcements",ar:"646/802"},
 {img:"trial-v.jpg",cap:"Trial V: The Hogwarts Bidding Hall banner",cat:"Banners",ar:"602/787"},
 {img:"choose-your-path.jpg",cap:"Choose Your Path house banner",cat:"Banners",ar:"575/752"}];
const partners=[{n:"Raqami Islamic Digital Bank",r:"Main sponsor, Coders' Cup '26",img:"partner-raqami.jpg",ar:"713/429"},{n:"Teknofest Pakistan 4.0",r:"Co-partner, Coders' Cup '26",img:"partner-teknofest.jpg",ar:"16/9"}];
const ticker=["Event setup","Web platforms","Registration systems","Competition labs","Live troubleshooting","Stage AV","Coders' Cup 2026"];

const $=id=>document.getElementById(id);
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const val=v=>v===TBC?`<span class="tbc">${TBC}</span>`:esc(v);
const slot=(img,label,ar)=>`<div class="slot" data-img="${esc(img)}" style="--ar:${ar||'16/10'}"><span><b>${esc(label)}</b>images/${esc(img)}</span></div>`;
const dl=rows=>`<dl class="meta">${rows.map(([k,v])=>`<dt>${k}</dt><dd>${val(v)}</dd>`).join('')}</dl>`;

const tk=ticker.map(t=>`<span>${esc(t)}</span>`).join('');$('track').innerHTML=tk+tk+tk+tk;
$('resp').innerHTML=resp.map(([h,p,d])=>`<div class="card rv"><div class="ico"><svg viewBox="0 0 24 24"><path d="${d}"/></svg></div><h3>${h}</h3><p>${p}</p></div>`).join('');

let cur='All';const types=['All',...new Set(ptype)];
function drawProjects(){
 $('chips').innerHTML=types.map(t=>`<button aria-pressed="${t===cur}" data-t="${t}">${t}</button>`).join('');
 $('project-cards').innerHTML=projects.map((p,i)=>({p,t:ptype[i],i})).filter(x=>cur==='All'||x.t===cur).map(({p,t,i})=>{
  const tags=p.tech===TBC?'':`<div class="tags">${p.tech.split(',').map(x=>`<span class="pill">${esc(x.trim())}</span>`).join('')}</div>`;
  return `<article class="card${i===3&&cur==='All'?' feat':''}">${`<div class="slot" data-img="${esc(p.img)}" style="width:100%;--ar:${p.ar||'16/10'}"><span><b>Screenshot</b>images/${esc(p.img)}</span></div>`}<span class="pill k">${t}</span><h3>${esc(p.name)}</h3><p>${esc(p.purpose)}</p><ul class="pts">${pts[i].map(x=>`<li>${x}</li>`).join('')}</ul>${dl([['Year',p.year],['Our role',p.contribution],['Outcome',p.outcome]])}${tags}${p.link?`<a class="more" href="${esc(p.link)}" target="_blank" rel="noopener">Visit project</a>`:`<span class="tbc" style="align-self:flex-start">Link to be confirmed</span>`}</article>`}).join('');
 bindImages();
}
$('chips').onclick=e=>{const b=e.target.closest('button');if(b){cur=b.dataset.t;drawProjects()}};drawProjects();

$('cc-cards').innerHTML=codersClub.map(c=>`<article class="card">${slot(c.img,'Coders Cup photo','16/9')}<h3>${esc(c.name)}</h3>${dl([['Purpose',c.purpose],['When',c.period],['Our role',c.role],['Benefit',c.benefit]])}</article>`).join('');
const eventImgAr={"pre-intro.jpg":"4/3","intro-session.jpg":"351/627","games-1.jpg":"833/632","coders-cup.jpg":"545/460","workshop-1.jpg":"4/5","workshop-2.jpg":"4/5","workshop-3.jpg":"4/5","devday.jpg":"1/1","project-devday.jpg":"1/1"};
$('event-list').innerHTML=events.map((e,i)=>{const im=[e.img,e.img2,e.img3].filter(Boolean);return `<li class="rv"><details class="card"${i===1?' open':''}><summary><time>${val(e.date)}</time><strong>${esc(e.name)}</strong></summary><div class="in"><p>${esc(e.about)}</p><p style="color:var(--ink);margin-bottom:6px"><strong>What TechOps did</strong></p><ul class="pts">${e.did.map(x=>`<li>${val(x)}</li>`).join('')}</ul>${e.tags?`<div class="tags" style="margin-top:14px">${e.tags.map(t=>`<span class="pill hot">${esc(t)}</span>`).join('')}</div>`:''}${im.length?`<div class="evimg">${im.map(x=>`<div class="slot" data-img="${esc(x)}" style="width:100%;--ar:${eventImgAr[x]||'4/3'};max-height:480px"><span><b>Photo by TechOps</b>images/${esc(x)}</span></div>`).join('')}</div>`:""}</div></details></li>`}).join('');
const flowSteps=[{e:0,t:"Before the intro",s:"Engage students"},{e:1,t:"Intro session",s:"19 Oct 2026"},{e:2,t:"Coders' Cup",s:"About ten days"},{e:4,t:"DevDay",s:"One big day"}];
$('flow').innerHTML=flowSteps.map((f,i)=>`<li><button data-e="${f.e}"><span class="n">${i+1}</span>${esc(f.t)}<small>${esc(f.s)}</small></button></li>`).join('');
/* Coders' Cup journey */
const journey=[{t:"Ten days of rounds",d:"Teams from the 23K, 24K, 25K and 26K batches compete."},{t:"12 teams make the cut",d:"The best teams are finalised. This year there were 12."},{t:"Bidding on day 3",d:"Teams go through the bidding round."},{t:"The final",d:"The finalists face off."},{t:"The trophy",d:"The winning team earns it."}];
$('path').innerHTML=journey.map((j,i)=>`<li><span class="nd">${i===4?'<svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 13v4M8 20h8"/></svg>':i+1}</span><b>${j.t}</b><span class="d">${j.d}</span></li>`).join('');
new IntersectionObserver((es,o)=>es.forEach(en=>{if(en.isIntersecting){$('path').classList.add('on');[...$('path').children].forEach((li,i)=>setTimeout(()=>li.classList.add('lit'),reduce?0:i*450));o.disconnect()}}),{threshold:.5}).observe($('path'));
/* registration steps */
function qrSvg(){let s=7,o='';const n=9,F=[[0,0],[n-3,0],[0,n-3]],rnd=()=>(s=(s*9301+49297)%233280)/233280;for(let y=0;y<n;y++)for(let x=0;x<n;x++){const f=F.find(([a,b])=>x>=a&&x<a+3&&y>=b&&y<b+3);const on=f?!(x-f[0]===1&&y-f[1]===1):rnd()>.5;if(on)o+=`<rect x="${x}" y="${y}" width="1" height="1" rx=".18"/>`}return `<svg viewBox="0 0 9 9" role="img" aria-label="QR code illustration">${o}</svg>`}
const rst=[["Student registers","Students sign up on the website themselves, as individuals or as teams.","M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6"],["Automatic email","An email goes out right away. Nobody has to send it by hand.","M3 5h18v14H3zM3 7l9 7 9-7"],["Payment confirmed","Once the payment is confirmed, a confirmation email arrives.","M2 6h20v12H2zM2 10h20M6 15h4"],["QR code arrives","The student gets a personal QR code to use for check-in at the event.",""]];
$('rsteps').innerHTML=rst.map(([h,p,d],i)=>`<li class="card rv"><div>${d?`<div class="ico"><svg viewBox="0 0 24 24"><path d="${d}"/></svg></div>`:`<div class="qrs">${qrSvg()}</div>`}</div><span class="num">Step ${i+1}</span><h3>${h}</h3><p>${p}</p></li>`).join('');
$('flow').onclick=ev=>{const b=ev.target.closest('button');if(!b)return;const ds=[...document.querySelectorAll('#event-list details')];ds.forEach(d=>d.open=false);const d=ds[+b.dataset.e];d.open=true;d.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'})};

$('seg').innerHTML=days.map((d,i)=>`<button role="tab" id="t${i}" aria-controls="p${i}" aria-selected="${i===0}">${d.t}</button>`).join('');
$('panels').innerHTML=days.map((d,i)=>`<div class="glass panel" role="tabpanel" id="p${i}" aria-labelledby="t${i}" ${i?'hidden':''}><div><h3>${d.h}</h3><ul>${d.pts.map(x=>`<li>${x}</li>`).join('')}</ul></div>${`<div class="slot" data-img="${esc(d.img)}" style="width:100%;max-width:440px;margin:0 auto;--ar:${d.ar||'1/1'}"><span><b>Day ${(i+1)} photo</b>images/${esc(d.img)}</span></div>`}</div>`).join('');
$('seg').onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=+b.id.slice(1);days.forEach((_,j)=>{$('t'+j).setAttribute('aria-selected',j===k);$('p'+j).hidden=j!==k})};
$('partners').innerHTML=partners.map(p=>`<div class="card"><div class="slot contain" data-img="${p.img}" style="width:100%;--ar:${p.ar||'16/9'}"><span><b>${esc(p.n)} logo</b>images/${p.img}</span></div><h3>${esc(p.n)}</h3><span class="pill">${esc(p.r)}</span></div>`).join('');

let gcat='All',vis=[],lbi=-1;const gcats=['All',...new Set(gal.map(g=>g.cat))];
function drawGal(){
 $('gchips').innerHTML=gcats.map(c=>`<button aria-pressed="${c===gcat}" data-c="${c}">${c}</button>`).join('');
 vis=gal.map((g,i)=>i).filter(i=>gcat==='All'||gal[i].cat===gcat);
 $('gal').innerHTML=vis.map((i,k)=>`<button class="gi" data-i="${i}" aria-label="Open photo: ${esc(gal[i].cap)}"><div class="slot" data-img="${esc(gal[i].img)}" style="width:100%;--ar:${gal[i].ar||'4/5'}"><span><b>Photo</b>images/${esc(gal[i].img)}</span></div><span class="cap">${esc(gal[i].cap)}</span></button>`).join('');
 bindImages();
}
$('gchips').onclick=e=>{const b=e.target.closest('button');if(b){gcat=b.dataset.c;drawGal()}};
const gimg=i=>document.querySelector(`.gi[data-i="${i}"] img`);
function openLb(i){const im=gimg(i);if(!im)return;lbi=i;$('lbi').src=im.src;$('lbi').alt=gal[i].cap;$('lbc').textContent=gal[i].cap;$('lb').hidden=false;document.body.style.overflow='hidden'}
function stepLb(d){let k=vis.indexOf(lbi);for(let n=0;n<vis.length;n++){k=(k+d+vis.length)%vis.length;if(gimg(vis[k])){openLb(vis[k]);return}}}
function closeLb(){$('lb').hidden=true;document.body.style.overflow=''}
$('gal').onclick=e=>{const b=e.target.closest('.gi');if(b)openLb(+b.dataset.i)};
$('lbx').onclick=closeLb;$('lbp').onclick=()=>stepLb(-1);$('lbn').onclick=()=>stepLb(1);
$('lb').onclick=e=>{if(e.target.id==='lb')closeLb()};
addEventListener('keydown',e=>{if($('lb').hidden)return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')stepLb(-1);if(e.key==='ArrowRight')stepLb(1)});
drawGal();

const person=x=>p=>`<article class="card person ${x}"><div class="slot" data-img="${esc(p.img)}" style="width:100%;max-width:220px;margin:0 auto;--ar:${p.ar||'4/5'}"><span><b>Photo</b>images/${esc(p.img)}</span></div><h3>${val(p.name)}</h3><span class="role">${esc(p.role)}</span><p>${val(p.resp)}</p></article>`;
$('techops-lead').innerHTML=people.techops.map(person('')).join('');
$('exec-committee').innerHTML=people.exec.map(person('')).join('');

const sts=[{n:6,l:"Competition tracks",s:"5 Coders' Cup modules plus game development"},{n:4,l:"Technical bootcamps",s:"9 hands-on lab sessions in November 2026"},{n:4,l:"Batches competing",s:"23K, 24K, 25K and 26K"}];
$('stats').innerHTML=sts.map(x=>`<div class="card"><div class="sn grad" data-n="${x.n}">0</div><h3>${x.l}</h3><p>${x.s}</p></div>`).join('');
new IntersectionObserver((es,o)=>es.forEach(en=>{if(en.isIntersecting){en.target.querySelectorAll('.sn').forEach(el=>{const n=+el.dataset.n;if(reduce){el.textContent=n;return}let k=0;const t=setInterval(()=>{k++;el.textContent=k;if(k>=n)clearInterval(t)},170)});o.unobserve(en.target)}}),{threshold:.5}).observe($('stats'));
$('ach-cards').innerHTML=achievements.map(a=>`<article class="card rv"><h3 class="big grad">${esc(a.title)}</h3><p>${val(a.detail)}</p></article>`).join('');
$('links').innerHTML=links.map(l=>l.url?`<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`:`<span class="off">${esc(l.label)}: link to be confirmed</span>`).join('');

function bindImages(){
 document.querySelectorAll('.slot[data-img]:not(.has)').forEach(s=>{
  s.dataset.b=1;
  const im=new Image();
  im.alt=s.classList.contains('logo')?'ACM logo':((s.textContent||'').trim().split('\n')[0]||'ACM FAST TechOps');
  const show=()=>{s.innerHTML='';s.appendChild(im);s.classList.add('has');s.style.setProperty('--bgi','url("images/'+s.dataset.img+'")')};
  im.onload=show;
  im.onerror=()=>{s.classList.add('broken')};
  im.src='images/'+s.dataset.img;
  if(im.complete&&im.naturalWidth>0)show();
 });
}
bindImages();

/* card spotlight + hero parallax */
document.addEventListener('pointermove',e=>{
 if(e.pointerType==='touch')return;
 const c=e.target.closest&&e.target.closest('.card');
 if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}
 if(reduce)return;
 const h=$('home').getBoundingClientRect();
 if(e.clientY>h.top&&e.clientY<h.bottom){const dx=(e.clientX-(h.left+h.width/2))/innerWidth,dy=(e.clientY-(h.top+h.height/2))/innerHeight;document.querySelectorAll('.fcard').forEach(f=>f.style.transform=`translate(${dx*f.dataset.d*2}px,${dy*f.dataset.d*2}px)`)}});

/* theme */
const root=document.documentElement;
function setTheme(t){root.dataset.theme=t;document.querySelector('meta[name=theme-color]').content=t==='dark'?'#070b16':'#f5f7fc';try{localStorage.setItem('theme',t)}catch(e){}}
let st=null;try{st=localStorage.getItem('theme')}catch(e){}
setTheme(st||'dark');$('theme').onclick=()=>setTheme(root.dataset.theme==='dark'?'light':'dark');

/* reveal, progress, nav */
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*70+'ms';rio.observe(el)});
addEventListener('scroll',()=>{$('bar').style.transform=`scaleX(${scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)})`},{passive:true});
const hdr=$('hdr'),tt=$('totop');let lastY=0;
addEventListener('scroll',()=>{
 const y=scrollY;hdr.classList.toggle('sc',y>24);
 hdr.classList.remove('hide');
 lastY=y;tt.classList.toggle('show',y>700);
 if(!reduce&&y<1000)root.style.setProperty('--py',(y*.07)+'px');
},{passive:true});
tt.onclick=()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'});
hdr.classList.toggle('sc',scrollY>24);
/* quote: words light up one by one */
const qt=$('qtext');qt.innerHTML=qt.innerHTML.split('<br>').map(l=>l.trim().split(/\s+/).map(w=>`<span class="qw">${w}</span>`).join('')).join('<br>');
const qio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){qt.querySelectorAll('.qw').forEach((w,i)=>setTimeout(()=>w.classList.add('lit'),reduce?0:i*110));qio.disconnect()}}),{threshold:.45});qio.observe($('qbox'));
const ml=$('menuList'),mb=$('menu');
mb.onclick=()=>{const o=ml.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
ml.querySelectorAll('a').forEach(a=>a.onclick=()=>{ml.classList.remove('open');mb.setAttribute('aria-expanded',false)});
const nio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ml.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('main section').forEach(s=>nio.observe(s));

/* hero terminal + rotating word */
const tbody=$('tbody'),sleep=ms=>new Promise(r=>setTimeout(r,ms));let rid=0;
const script=[["techops --about","Technical team of ACM FAST-NUCES Karachi"],["techops --supports","events, platforms and competitions"],["techops --latest","Coders' Cup '26: 16-19 November 2026"],["techops --lead","Uzair Mustafa (Head), Ahsan Abbasi and Muhammad Fareed (Co-Heads)"]];
async function typeIt(){
 const id=++rid;tbody.innerHTML='';
 for(const [c,o] of script){
  const line=document.createElement('div');line.className='c';line.innerHTML='$ <b></b><i class="cur"></i>';tbody.appendChild(line);const sp=line.querySelector('b');
  for(const ch of c){sp.textContent+=ch;await sleep(reduce?0:34);if(id!==rid)return}
  line.querySelector('.cur').remove();await sleep(reduce?0:200);if(id!==rid)return;
  const out=document.createElement('div');out.className='o';out.textContent=o;tbody.appendChild(out);await sleep(reduce?0:360);if(id!==rid)return;
 }
 mkPrompt();
}
const rw=$('rw'),RW=['running','online','ready','connected','live'];let ri=0;
if(!reduce)setInterval(()=>{ri=(ri+1)%RW.length;rw.classList.remove('sw');void rw.offsetWidth;rw.textContent=RW[ri];rw.classList.add('sw')},2400);

/* intro: TECHOPS fades in, words appear, then it lifts by itself */
const intro=$('intro'),WORDS=['Labs','Platforms','Live fixes',"Coders' Cup"];let timers=[],lifted=true;
function lift(){if(lifted)return;lifted=true;timers.forEach(clearTimeout);intro.classList.add('out');document.body.style.overflow='';$('home').classList.add('go');setTimeout(typeIt,reduce?0:500);setTimeout(()=>{intro.style.display='none'},650)}
function playIntro(){
 lifted=false;timers.forEach(clearTimeout);timers=[];rid++;tbody.innerHTML='';
 $('home').classList.remove('go');intro.style.display='';intro.classList.remove('out');document.body.style.overflow='hidden';
 $('iletters').innerHTML='TECHOPS'.split('').map((c,i)=>`<span style="--i:${i}">${c}</span>`).join('');$('iwords').innerHTML='';
 const bar=intro.querySelector('.iprog i');bar.style.animation='none';void bar.offsetWidth;bar.style.animation='';
 WORDS.forEach((w,i)=>timers.push(setTimeout(()=>$('iwords').insertAdjacentHTML('beforeend',`<span>${esc(w)}</span>`),1000+i*240)));
 timers.push(setTimeout(lift,2200));
}
intro.onclick=lift;
addEventListener('keydown',e=>{if(e.key==='Escape'&&$('lb').hidden)lift()});
$('replay').onclick=()=>{scrollTo(0,0);playIntro()};
let seen=null;try{seen=sessionStorage.getItem('played')}catch(e){}
if(seen||reduce){intro.style.display='none';$('home').classList.add('go');typeIt()}else{playIntro();try{sessionStorage.setItem('played','1')}catch(e){}}

/* hero: network background + terminal tilt */
(function(){
 const c=$('net'),x=c.getContext('2d'),home=$('home');let W=0,H=0,N=[],P=[],mx=-999,my=-999,run=false,raf=0;
 const dpr=Math.min(devicePixelRatio||1,2);
 function size(){const r=home.getBoundingClientRect();W=r.width;H=r.height;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);
  const n=Math.min(70,Math.round(W*H/17000));N=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.4+.9}));P=[]}
 function frame(){
  x.clearRect(0,0,W,H);
  const dark=root.dataset.theme!=='light',c1=dark?'122,162,255':'36,87,230',c2=dark?'37,217,240':'8,145,178';
  for(const p of N){
   if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
    const dx=p.x-mx,dy=p.y-my,d=dx*dx+dy*dy;if(d<12000){const k=Math.sqrt(d)+1;p.x+=dx/k*.8;p.y+=dy/k*.8}}
  }
  for(let i=0;i<N.length;i++){const a=N[i];
   for(let j=i+1;j<N.length;j++){const b=N[j],dx=a.x-b.x,dy=a.y-b.y,d=dx*dx+dy*dy;
    if(d<16900){x.strokeStyle=`rgba(${c1},${(1-d/16900)*.32})`;x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
   const mdx=a.x-mx,mdy=a.y-my,md=mdx*mdx+mdy*mdy;
   if(md<26000){x.strokeStyle=`rgba(${c2},${(1-md/26000)*.6})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(mx,my);x.stroke()}
   x.fillStyle=`rgba(${c2},.75)`;x.beginPath();x.arc(a.x,a.y,a.r,0,6.283);x.fill();
  }
  if(!reduce){
   if(P.length<6&&Math.random()<.05){const a=N[Math.random()*N.length|0];let best=null,bd=16900;for(const b of N){if(b===a)continue;const dx=a.x-b.x,dy=a.y-b.y,d=dx*dx+dy*dy;if(d<bd){bd=d;best=b}}if(best)P.push({a,b:best,t:0})}
   for(let i=P.length-1;i>=0;i--){const q=P[i];q.t+=.03;if(q.t>=1){P.splice(i,1);continue}
    const px=q.a.x+(q.b.x-q.a.x)*q.t,py=q.a.y+(q.b.y-q.a.y)*q.t;
    x.fillStyle=`rgba(${c2},.25)`;x.beginPath();x.arc(px,py,7,0,6.283);x.fill();
    x.fillStyle=`rgb(${c2})`;x.beginPath();x.arc(px,py,2.4,0,6.283);x.fill()}
  }
  if(run&&!reduce)raf=requestAnimationFrame(frame);
 }
 function start(){if(run)return;run=true;raf=requestAnimationFrame(frame)}
 function stop(){run=false;cancelAnimationFrame(raf)}
 size();frame();
 if(!reduce)new IntersectionObserver(es=>es[0].isIntersecting?start():stop()).observe(home);
 let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{size();if(reduce)frame()},200)});
 home.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=home.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
 home.addEventListener('pointerleave',()=>{mx=my=-999});
 /* terminal 3D tilt */
 const term=document.querySelector('.hr .term'),hr=document.querySelector('.hr');
 if(!reduce&&term&&matchMedia('(hover:hover)').matches){
  hr.addEventListener('pointermove',e=>{const r=hr.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
   term.style.transform=`perspective(900px) rotateY(${px*9}deg) rotateX(${-py*7}deg)`});
  hr.addEventListener('pointerleave',()=>{term.style.transform=''});
 }
})();

/* About card: auto-cycling Before / During / After */
(function(){
 const ba=$('ba'),tabs=[...ba.querySelectorAll('.ba-tabs button')],ps=[...ba.querySelectorAll('.ba-p')],bar=ba.querySelector('.ba-bar i');let k=0,t;
 function set(n){k=n;tabs.forEach((b,i)=>b.setAttribute('aria-selected',i===n));ps.forEach((p,i)=>p.classList.toggle('on',i===n));bar.style.animation='none';void bar.offsetWidth;bar.style.animation=''}
 function play(){clearInterval(t);if(reduce)return;t=setInterval(()=>set((k+1)%3),4200)}
 tabs.forEach((b,i)=>b.onclick=()=>{set(i);play()});
 ba.onmouseenter=()=>{clearInterval(t);bar.style.animationPlayState='paused'};
 ba.onmouseleave=()=>{set(k);play()};
 set(0);play();
})();

/* ===== interactive terminal: visitors can type commands ===== */
function mkPrompt(){
 const row=document.createElement('div');row.className='c prm';
 row.innerHTML='$ <input id="tin" type="text" tabindex="-1" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Type a command, for example help" placeholder="type help, then Enter">';
 tbody.appendChild(row);tbody.scrollTop=tbody.scrollHeight;
}
function goTo(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:reduce?'auto':'smooth'})}
const CMD={
 help:()=>"commands: about, events, team, coderscup, projects, gallery, contact, theme, clear",
 about:()=>"Technical team of ACM FAST-NUCES Karachi.\nWe keep labs, platforms and live events running.",
 events:()=>"19 Oct 2026    Introductory session\n3-6 Nov 2026   Hack Week workshops\n16-19 Nov 2026 Coders' Cup '26",
 team:()=>"Head: Uzair Mustafa\nCo-Heads: Ahsan Abbasi, Muhammad Fareed",
 coderscup:()=>{goTo('cupjourney');return"Taking you to the Coders' Cup journey..."},
 projects:()=>{goTo('projects');return"Opening projects..."},
 gallery:()=>{goTo('gallery');return"Opening the gallery..."},
 contact:()=>"acm.khi@nu.edu.pk\nInstagram: @acmnuceskhi",
 theme:()=>{$('theme').click();return"Theme switched."},
 whoami:()=>"a curious visitor. welcome!",
 sudo:()=>"Nice try. Permission denied.",
 ls:()=>"about  projects  coderscup  events  gallery  team  contact"
};
tbody.addEventListener('click',()=>{const i=$('tin');if(i)i.focus({preventScroll:true})});
tbody.addEventListener('keydown',e=>{
 if(e.target.id!=='tin'||e.key!=='Enter')return;
 const raw=e.target.value.trim(),cmd=raw.toLowerCase(),row=e.target.parentElement;
 row.innerHTML='$ <b></b>';row.querySelector('b').textContent=raw;
 if(cmd==='clear'){tbody.innerHTML='';mkPrompt();$('tin').focus({preventScroll:true});return}
 if(raw){const out=document.createElement('div');out.className='o';
  out.textContent=CMD[cmd]?CMD[cmd]():'command not found: '+raw+'. type help';tbody.appendChild(out)}
 mkPrompt();$('tin').focus({preventScroll:true});
});

/* ===== confetti when the Coders' Cup card is opened ===== */
(function(){
 const dts=[...document.querySelectorAll('#event-list details')];if(dts.length<3)return;
 let ready=false;setTimeout(()=>ready=true,600);
 function burst(el){
  const r=el.querySelector('summary').getBoundingClientRect(),cols=['#7aa2ff','#25d9f0','#4ade80','#ffb454','#ff6b9d'];
  for(let i=0;i<30;i++){
   const d=document.createElement('i');
   Object.assign(d.style,{position:'fixed',left:(r.left+r.width*(.2+Math.random()*.6))+'px',top:(r.top+r.height/2)+'px',width:'8px',height:'12px',background:cols[i%5],borderRadius:'2px',zIndex:97,pointerEvents:'none'});
   document.body.appendChild(d);
   const dx=(Math.random()-.5)*360,dy=-(80+Math.random()*180);
   d.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${dx}px,${dy}px) rotate(${Math.random()*540}deg)`,opacity:1,offset:.45},{transform:`translate(${dx*1.2}px,${dy+320}px) rotate(${Math.random()*900}deg)`,opacity:0}],{duration:1400+Math.random()*600,easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=()=>d.remove();
  }
 }
 dts[2].addEventListener('toggle',()=>{if(ready&&dts[2].open&&!reduce)burst(dts[2])});
})();
