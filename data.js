/* ============ EDIT YOUR CONTENT HERE ============ */
const TBC = "Details to be confirmed";

const projects = [
  {name:"Coders' Cup '26 official registration portal", purpose:"The event portal and team sign-up platform for FAST-NUCES Karachi's annual coding championship, themed \"Five trials, one magical quest\".", year:"November 2026", contribution:"We built it so teams can register themselves. It has a live countdown, interactive overviews of every module, and sign-up for multiple tracks. Emails go out automatically, a confirmation arrives after payment, and each student gets a QR code.", tech:TBC, outcome:"Student teams register on their own across all five competition modules.", img:"project-registration.jpg", link:"https://coderscup26.com"},
{name:"ACM NUCES Karachi Website", purpose:"One public home for TechOps' work, the chapter's structure, the flagship events and Coders' Cup.", year:"November 2026", contribution:"We designed and built it with semantic HTML5, modular CSS3 and light client-side view routing, so pages switch instantly on phones and desktops.", tech:"HTML5, CSS3, JavaScript, Vercel", outcome:"Showcases student outcomes through competitive programming contests, technical hackathons, industry workshops, and regional/international contest results.", img:"project-hub.jpg", link:"https://acm-official-website-2026.vercel.app/"},
  {name:"Developers' Day (DevDay 2026)", purpose:"ACM NUCES Karachi's signature annual Developers' Day, bringing students and industry together through technology and innovation.", year:"2026", contribution:"Technical event support, participant onboarding, competition lab setups, and digital logistics.", tech:"Technical Competitions, Hackathons, Workshops, Networking", outcome:"Students gain hands-on technical experience, industry networking, and entrepreneurial exposure through 30+ competitions and event activities.", img:"project-devday.jpg", link:"https://www.devday26.com/"},
  {name:"Coders' Cup 2026 competition setup", purpose:"Give ACM FAST's flagship competition a solid technical backbone.", year:"2026", contribution:"We got the labs and workstations ready, checked the network, set up the contest environment, helped live during the contest days and packed everything up afterwards.", tech:TBC, outcome:"All three contest days ran with ready labs, a steady network and quick fixes whenever something went wrong.", img:"project-coders-cup.jpg", link:"https://coderscup26.com"},
  {name:"Internal tools and automation", purpose:"Save other departments time on their day-to-day work.", year:"2026", contribution:"Small scripts and tools for tracking logistics and spotting problems fast.", tech:TBC, outcome:"Registering is now easier, and any issue is resolved through our website using the email the student gave at sign-up.", img:"project-tooling.jpg", link:"https://coderscup26.com"}
];

/* Coders cup: no Coders cup-specific information has been supplied yet. Fill in once confirmed. */
const codersClub = [
  {name:"Hack Week workshop series", purpose:"Hands-on lab sessions on competitive programming, CTF cybersecurity, AI agents and mobile game development.", period:"3 to 6 November 2026", role:TBC, benefit:"Students get ready for Coders' Cup with practical skills.", img:"cc-1.jpg"},
  {name:"Competitive Programming rounds", purpose:"Coding competition rounds between the 23K, 24K, 25K and 26K batches.", period:"Rounds on 10, 11, 13 and 17 November, final round on 23 November 2026", role:TBC, benefit:"Every batch gets a fair chance, and the best teams reach the final.", img:"cc-2.jpg"},
  {name:"Coders' Cup '26 main event", purpose:"ACM FAST's flagship coding championship, themed \"Five trials, one magical quest\".", period:"Main event window 16 to 19 November 2026", role:TBC, benefit:"The biggest coding event of the year, with 12 top teams finalised.", img:"cc-3.jpg"}
];

/* Order matters: the "season flow" strip points at items 0, 1, 2 and 3. */
const events = [
  {date:"Before the introductory session", name:"Getting students excited before day one", about:"TechOps is already at work well before the introductory session. Our first job is to get students talking, playing and curious, and to build the things everyone will end up using.", did:["Plan and build fun games, so students can play and meet us outside the auditorium","Build our own TechOps website, so ACM's technical side has a proper home","Build the Coders' Cup website, where students register for the competition"], img:"games-1.jpg"},
  {date:"Monday, 19 October 2026", name:"ACM introductory session", about:"The official kickoff for the year, held in the Main Auditorium of the Multipurpose Building from 10 AM to 3 PM. Dr Muhammad Rafi (HOD AI/DS, FAST-NUCES Karachi) gave a talk on Automated Reasoning in NLP.", did:["Checked every piece of equipment before the doors opened","Handled the screens, sound and stage tech live","Ran the games outside the auditorium, with small prizes, so there was fun for everyone","Built those games ourselves: TechOps members made them"], img:"intro-session.jpg", img2:"pre-intro.jpg"},
  {date:"Tournament operations 10 to 25 November 2026, main event window 16 to 19 November", name:"Coders' Cup '26, the first of ACM's two big events", about:"Coders' Cup is ACM FAST's flagship annual coding championship, themed \"Five trials, one magical quest\". Teams from the 23K, 24K, 25K and 26K batches compete across five modules, plus game development. The best teams are then finalised (12 this year), there is a bidding round on day 3, then the final, and the winners earn the trophy.", did:["Built the Coders' Cup website and its registration and ticketing system","Managed the registration portal and ran tournament operations","Got the computer labs and workstations ready and checked the network","Set up the contest environment and fixed problems live while teams were competing","Supported judging across the competition tracks, then packed up and restored the labs"], img:"coders-cup.jpg"},
  {date:"Held between 3 November and 6 November 2026", name:"Workshops and learning sessions", about:"Technical and logistical help for student-led learning sessions.", did:["Setting up venues and projectors","Helping facilitators","Coordinating during sessions"], img:"workshop-1.jpg", img2:"workshop-2.jpg", img3:"workshop-3.jpg"},
  {date:TBC, name:"Developers' Day (DevDay), the second big event", about:"DevDay is ACM NUCES Karachi's signature one-day annual showcase, in the same spirit as Coders' Cup, with even more going on: software engineering challenges, a hackathon, Code Sprint (competitive programming), a job fair, tech talks, industry panels, chess, laptop games and much more.", did:["The whole TechOps team works together on the day","Participant onboarding, competition lab setups and digital logistics","Technical setup and live support, the same way we back Coders' Cup"], tags:["Hackathon","Code Sprint","Job fair","Tech talks","Industry panels","Chess","Laptop games","and more"], img:"devday.jpg"},
  {date:"3 to 6 November 2026", name:"Hack Week workshop series", about:"Nine hands-on lab sessions in Labs 8, 10, 11 and 13, run by the Coders' Cup and Computing wings. Topics: competitive programming (led by ICPC World Finalists and Regional Silver Medalists), CTF cybersecurity, AI agents and prompt engineering, and mobile game development.", did:[TBC], tags:["Competitive programming","CTF cybersecurity","AI agents","Mobile game dev"], img:"hack-week.jpg"},
];

const people = {
  techops:[
    {name:"Uzair Mustafa", role:"TechOps Head, 2026-27", resp:"Leads TechOps and keeps the technical side of every ACM FAST event on track.", img:"uzair-mustafa.jpg", ar:"636/807"},
    {name:"Ahsan Abbasi", role:"TechOps Co-Head, 2026-27", resp:"Looks after live competition setups, system stability and on-the-ground tech during events.", img:"ahsan-abbasi.jpg", ar:"637/795"},
    {name:"Muhammad Fareed", role:"TechOps Co-Head, 2026-27", resp:"Handles technical logistics, coordinates platforms and fixes problems in real time at big events.", img:"muhammad-fareed.jpg", ar:"630/777"}
  ],
  cc:[{name:TBC, role:"Coders Cup Head", resp:TBC, img:"cc-head.jpg", ar:"4/5"},{name:TBC, role:"Coders cup Co-Head", resp:TBC, img:"cc-cohead.jpg", ar:"4/5"}],
  exec:[
    {name:"Manav Kumar", role:"President", resp:"Overall student chapter leadership, institutional representation, and strategic direction for ACM NUCES Karachi.", img:"exec-president.jpg", ar:"447/387"},
    {name:"Wajiha", role:"Vice President", resp:"Executive operations, inter-departmental coordination, and flagship event oversight across the chapter.", img:"exec-vice-president.jpg", ar:"447/387"},
    {name:"Affan", role:"General Secretary", resp:"Chapter administration, official documentation, and internal governance operations.", img:"exec-general-secretary.jpg", ar:"447/387"}
  ],
  other:[{name:TBC, role:"Domain lead", resp:TBC, img:"lead-1.jpg", ar:"4/5"}]
};

const achievements = [
  {title:"Coders' Cup '26 digital launch", detail:"Built and launched the official registration portal for the flagship annual coding championship (16 to 19 November 2026), with a live countdown, module overviews and sign-up for multiple tracks."},
  {title:"Hack Week training (3 to 6 Nov 2026)", detail:"Nine hands-on lab sessions across competitive programming, CTF cybersecurity, AI agents and prompt engineering, and mobile game development."},
  {title:"Speaker series", detail:"Keynotes and panels with Dr. Muhammad Rafi (HOD AI/DS, FAST-NUCES Karachi), Azhar Hussain (CTO, Charge Up), Ammar Shareef (CIO, Keenu) and leaders from Pakistan Single Window (PSW)."},
  {title:"Partnerships", detail:"Coders' Cup '26 ran alongside main sponsor Raqami Islamic Digital Bank and co-partner Teknofest Pakistan 4.0, in collaboration with Youth Intelligentsia, CEGA and AI Season."},
  {title:"Coders' Cup 2026 ran smoothly", detail:"Labs were ready, the network stayed steady and problems were fixed on the spot, across all three contest days."},
  {title:"Introductory session 2026-27", detail:"Stage AV and the foyer games were set up and run by TechOps on 19 October 2026."}
];

/* Leave url empty until you have the official link. */
const links = [
  {label:"Email: acm.khi@nu.edu.pk", url:"mailto:acm.khi@nu.edu.pk"},
  {label:"Instagram: @acmnuceskhi", url:"https://www.instagram.com/acmnuceskhi/"},
  {label:"LinkedIn: ACM NUCES Karachi", url:"https://www.linkedin.com/company/acmnuceskhi"},
  {label:"Facebook: ACM NUCES Karachi", url:"https://www.facebook.com/acmnuceskhi"},
  {label:"Linktree", url:"https://linktr.ee/acmnuceskhi"},
  {label:"Coders' Cup website", url:"https://coderscup26.com"}
];
const ptype=["Web","Web","Competition","Competition","Tools"];
/* ================================================= */
