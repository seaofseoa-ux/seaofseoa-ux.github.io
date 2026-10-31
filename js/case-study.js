var CaseStudy=(()=>{var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:true})};var __copyProps=(to,from,except,desc)=>{if(from&&typeof from==="object"||typeof from==="function"){for(let key of __getOwnPropNames(from))if(!__hasOwnProp.call(to,key)&&key!==except)__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable})}return to};var __toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:true}),mod);var entry_exports={};__export(entry_exports,{openCase:()=>openCase});var CASES={"knoc":{"name":"KNOC","blocks":[{"t":"head","title":"KNOC","sub":"Digital Transformation Dashboard","tags":["UX research","System design","Wireframe","IA","Prototyping"],"facts":[["Team","1 PM, 2 consultants, 1 PL, 2 UX designers, 4 developers"],["Timeline","3 months, from Oct 2024"],["Domain","Energy"],["Client","KNOC staff"]]},{"t":"fig","wide":true,"img":"https://framerusercontent.com/images/iV5hZrwdWiR9A4ZfEQ9Xg6x6l24.webp","alt":"KNOC dashboard on three monitors","ratio":"1800/689"},{"t":"text","k":"Summary","p":["A digital transformation initiative for the Korea National Oil Corporation\u2019s Environmental Safety Management System. It tackles workflow problems that come from **poor data accessibility**, with dashboards that support data-driven decisions.","Along the way I created **a new way to categorize the system\u2019s issues: headquarters versus branch offices**, and balanced their very different needs."]},{"t":"stats","items":[["25","people interviewed across HQ and 9 branches"],["10","safety menus redesigned with role-specific charts"],["50%+","of branch users wanted dashboards tailored to their tasks"]],"note":"Still in development at handoff, so these describe scope and validation, not post-launch results."},{"t":"text","k":"Problem","h":"Central control at HQ, data gaps in the branches","p":["Headquarters and the branches managed data differently. **HQ struggled to control centrally** because branch inputs weren\u2019t standardized. **Branches worked with raw data** that was hard to reach and use. Collaboration broke down, and so did data-driven decisions."]},{"t":"process","k":"Process","steps":[["Research","Target interviews \xB7 Affinity diagram"],["Ideation","Competitive analysis \xB7 Best practice"],["Validation","Low-fi prototyping \xB7 Concept testing"],["Design","Mid-fi prototype"]]},{"st":0,"t":"text","k":"Target interviews","h":"25 interviews, but only generic complaints at first","p":["Over one month I ran weekly sessions with 25 participants: **20 from the 9 branch offices and 5 from headquarters**, remote and on site. The first findings were the usual digital-transformation complaints."]},{"t":"gallery","figs":[["https://framerusercontent.com/images/mfv2DpyExSXRXGCtrfaK8eems0.webp","Week 1 \xB7 remote session with branch staff"],["https://framerusercontent.com/images/t02iZQyQ4uqncdRrXdOsX01lXk.webp","Week 2 \xB7 on-site session"],["https://framerusercontent.com/images/gLkeFpIo1UgATm3DuRYDFuM63M.webp","Week 3 \xB7 on-site session"],["https://framerusercontent.com/images/hgqu6PED9mu7cwnhV05d6R2Knxs.webp","Week 4 \xB7 remote screen review with the branches"]]},{"st":0,"t":"text","k":"Affinity diagram","h":"The real split: HQ needs control, branches need access","p":["Re-reading the interviews through an affinity diagram pointed to two root issues, **low data visibility and low data accessibility**, and split the users into two groups: headquarters and branch offices."]},{"t":"split","people":[5,20],"src":"25 interviews, one user group","mid":"affinity diagram","a":["Headquarters \xB7 5","needs control"],"b":["Branch offices \xB7 20","need access"],"label":"25 interviewees, first one grey group, split by the affinity diagram into 5 at headquarters who need control and 20 in branch offices who need access"},{"t":"persp","cards":[["Headquarters",["Collecting and entering data is slow","No verification step for managers","Process errors go unnoticed: each branch runs its own method"]],["Branch offices",["No entry standard, so data is inaccurate or subjective","Field reports are rebuilt by hand every time","Reports written to different criteria confuse readers"]],["Both",["Real-time access to data is hard","No visualization tools or dashboards"]]],"insight":"Goal: one dashboard that gives **HQ central control** and gives **branches easier access** to their field data."},{"st":1,"t":"text","k":"Ideation 1 \xB7 Headquarters","h":"Users felt more at ease with key data at the centre","p":["I audited competitors\u2019 central control systems: the best ones arranged images and charts so detail stayed readable. From those practices I built two low-fidelity layouts."]},{"t":"duo","figs":[["https://framerusercontent.com/images/OMP4nz95UAl8tT4Di85SYCPIfoc.webp","Option A"],["https://framerusercontent.com/images/vDqqKlx6P9LZ6PfeY0shsnIckI.webp","Option B"]]},{"t":"text","p":["Two rounds of early usability testing showed people wanted more variety in layout and size, and **felt more comfortable when key information sat at the centre**."]},{"t":"compare","a":"https://framerusercontent.com/images/dSsly8Wwy6DEoDySjbBoRJ4MEzU.webp","al":"Left-aligned","b":"https://framerusercontent.com/images/5pEJRfCSx1hPtASA8B8qhDGf6dI.webp","bl":"Centre-aligned \xB7 more comfortable","ratio":"1700/869","hint":true},{"st":1,"t":"text","k":"Ideation 2 \xB7 Branch offices","h":"Each of the 10 menus got the chart its data called for","p":["I analysed the core attributes of all **10 management menus** and chose the chart that fits each one. For example, purchase counts for Contractor Management, and risk scores and conditions for the Risk Index."]},{"t":"fig","img":"https://framerusercontent.com/images/alab7YQu7IzT4mPBnzcGlbBcno.webp","alt":"Analytics wireframe with a chart per menu","cap":"A chart type chosen for each menu\u2019s data","ratio":"1500/1455","narrow":true},{"st":2,"t":"text","k":"Concept testing","h":"Branches asked for a personal dashboard","p":["Testing with all 9 branches showed that a chart\u2019s value depended on how relevant it was to each team\u2019s tasks, which pointed to a personalized, workflow-oriented dashboard."]},{"st":3,"t":"text","k":"Solution 1 \xB7 Branch offices","h":"Branches shape their own view: remove cards, jump with +more","p":["Every menu gets a card built from its core attributes. **+more** jumps straight to that task board, **\xD7** removes low-priority cards, and a **double-click** moves a card, so each team arranges the view around its own work."]},{"t":"demo"},{"t":"fig","img":"https://framerusercontent.com/images/lW8YFJZ47o0JDZvdue0ll1pfM.webp","alt":"Analytics wireframe: double-click to rearrange dashboard cards","cap":"Double-click a card to move it. More than half of branch users wanted the dashboard tailored to their team\u2019s main tasks","ratio":"1200/1262","narrow":true},{"st":3,"t":"text","k":"Solution 2 \xB7 Headquarters","h":"Centre-aligned layout won for HQ","p":["A centralized layout so critical data reads at a glance. We tested where the key information should sit."]},{"t":"gallery","figs":[["https://framerusercontent.com/images/4fjAF5kzMHdyIfPBOQtXN3cHq4.webp","Final HQ view: branch risk map, work-risk index and compliance status","1600/1307"],["https://framerusercontent.com/images/HCwiz3tWz02kdVxxpXIeHMp84.webp","Final branch view: a card for each of the 10 safety menus","1600/1307"]]},{"t":"refl","k":"Takeaway","h":"Splitting one user group into two made one dashboard work for both","items":[["What worked","Splitting users into HQ and branches let one dashboard balance both. Choosing data attributes for the 10 menus, plus layout, size and hierarchy, made importance readable. Users credited **+more** with better visibility and access."],["What\u2019s next","More flexible structures and better interactions from further feedback, and an onboarding service to help KNOC staff adapt to the new system."]]}]},"hanwha":{"name":"Hanwha","blocks":[{"t":"head","title":"Hanwha","sub":"Chemical Supply Management ERP","tags":["UX research","System design","IA","Card sorting","Wireframe"],"facts":[["Team","1 head, 1 PM, 1 UX designer, 4 developers"],["Timeline","9 months, Sep 2023 \u2013 Apr 2024"],["Domain","Defense \xB7 Enterprise ERP"],["Client","Hanwha Aerospace ESH staff"]]},{"t":"fig","wide":true,"img":"https://framerusercontent.com/images/i30jZ7Xh5WLsHHEhFr5Wmt1vxKM.jpg","alt":"Chemical supply management pre-approvals list on a desktop","ratio":"2000/1386"},{"t":"text","k":"Summary","p":["An ERP rebuild for Hanwha Aerospace\u2019s **ESH (Environment, Safety and Health) division**. Using **design thinking**, I designed a chemical purchase and approval flow that **meets legal regulations**, and defined how chemical data moves between **SAP, ESH and Master Data**.","The core change: approvals that used to stall for weeks became **a 4-step sign-off where each signature alerts the next signer**."]},{"t":"stats","items":[["~1 mo","average purchase cycle before, mostly spent waiting between approvers"],["4","sequential sign-off steps, each alerting the next signer automatically"],["3","approval depths, down from the initial design"]],"note":"I was on a contract and left before launch, so these describe the problem and the design, not measured time savings."},{"t":"text","k":"Background Context","h":"Three companies became one, and chemical purchasing broke","p":["Three subsidiaries, **Armament, Defense and Aerospace**, merged into a single Hanwha Aerospace. Their ESH systems had run independently, and once combined, **the chemical purchase menu no longer worked as one process**."]},{"t":"process","k":"Project Overview","steps":[["Empathize","Interviews \xB7 Regulatory analysis \xB7 Card sorting"],["Define","Insights \xB7 Project goal"],["Ideate","I/F flow analysis \xB7 Process mapping"],["Prototype","User journey \xB7 Sign-off"],["Test","Concept validation \xB7 Evaluation"]],"note":"Ideate and Test looped until all three subsidiaries could agree on one flow."},{"st":0,"t":"text","k":"Primary Interview \xB7 Empathize","h":"A month per purchase, mostly spent waiting for the next approver","p":["Interviews with ESH staff showed that **one chemical purchase took about a month**. Regulation made the workflow complex, but most of the time was lost between approvals: **signers approved separately, in no set order**, and no one was told when it was their turn.","The manual process also **invited human error**, and each subsidiary kept its own purchase history, so **data was scattered** across three companies."]},{"st":0,"t":"text","k":"Regulatory Analysis \xB7 Empathize","h":"The law set the skeleton before any UX decision","p":["I reviewed the purchasing and approval processes against the regulations. **Legally mandated approval stages**, required fields such as **CAS numbers and MSDS attachments**, and rules for **restricted substances** were not negotiable. They became the fixed frame the design had to fit."]},{"st":0,"t":"text","k":"Card Sorting \xB7 Empathize","h":"Weekly card sorting showed how each company really bought chemicals","p":["Alongside the regulatory review, I ran **weekly card sorting** with each subsidiary to map its current process step by step, and to see where the three diverged."]},{"t":"fig","wide":true,"img":"https://framerusercontent.com/images/KMnKhyPHjbEeZf7tGQt6rU0KcEM.jpg","alt":"Card sorting boards for three subsidiaries","cap":"Card sorting boards for Aerospace, Armament and Defense","ratio":"1350/570"},{"st":1,"t":"text","k":"Insights \xB7 Define","h":"Disconnected approvals were the real bottleneck","p":["The research produced two groups of insights: one about how approvals worked, one about the data entered with each request."]},{"t":"persp","cards":[["Approval function",["Approvers needed for each legally mandated stage","Stages and attributes set per chemical substance","Signers approved in isolation, with no hand-off"]],["Chemical data input",["Detailed regulatory requirements to check","A handling process for restricted substances","Required fields validated: CAS number, MSDS"]]],"insight":"Meet compliance and workflow accuracy with **an approval flow that moves on its own**, within what the systems can support."},{"st":2,"t":"text","k":"Ideation 1 \xB7 I/F Flow Analysis","h":"Deciding where the chemical code is born","p":["Interface definition documents showed that **the material number was used across SAP, ESH and Master Data (MD)**. I compared two scenarios: generate it in SAP and pass it to ESH and MD by API, or generate it in ESH and distribute it outward.","Each option hit different limits in **API access, security policy and data ownership**. After several rounds with developers and system owners, we chose the flow that could actually be built."]},{"t":"fig","wide":true,"img":"https://framerusercontent.com/images/fwTAqOYXotodf1A1sBcJIm28uyU.jpg","alt":"Internal cross-functional flowchart","cap":"Internal cross-functional flowchart used to compare data-flow scenarios","ratio":"1600/873"},{"st":2,"t":"text","k":"Process Flow Mapping \xB7 Ideate","h":"Iterating the flow until three companies could agree","p":["Each iteration exposed conflicts between subsidiary workflows, legal stages and system limits that the previous version hid. Mapping also showed that **the ESH division head and the health, safety and environment representatives each approved separately**."]},{"t":"gallery","figs":[["https://framerusercontent.com/images/aoNGDLJq6Sin7niqmw3FJenEF8.jpg","First attempt","3942/1955"],["https://framerusercontent.com/images/tip9Q5fW6dTtC6xe5uNRJE6wNws.jpg","Next iteration","8000/3967"]]},{"st":3,"t":"text","k":"Ideation 2 \xB7 Sign-off","h":"From scattered approvals to one structured sign-off","p":["Through **user journey mapping** and **in-context interviews**, I replaced the separate departmental approvals with a single **sign-off feature** and fixed its order: **Health \u2192 Safety \u2192 Environment \u2192 ESH approval**.","When one signer finishes, **the next signer is alerted right away**, so a request never sits with someone who doesn\u2019t know it\u2019s their turn."]},{"t":"fig","wide":true,"img":"https://framerusercontent.com/images/Rja4IpVcPUNbPUCr80N039o.jpg","alt":"Sign-off dialog over the pre-approvals list: Health signed, Safety signing now, Environment and ESH Head waiting","cap":"Hi-fi sign-off: progress across all four signers, a drawn signature with auto-filled date, time and ID, and the next signer alerted on send","ratio":"16/10"},{"st":4,"t":"text","k":"Concept Validation 1 \xB7 IA","h":"One IA that fits three companies\u2019 rules","p":["The Chemical Supply Management IA was refined through repeated concept validation with all three subsidiaries, keeping each regulatory requirement in its own place."]},{"t":"raw","html":'<figure class="cs-fig wide cs-ia"><div class="cs-frame" style="--r:2000/1298"><img src="https://framerusercontent.com/images/w9IV90n6r00GBsDhDa9tvMOGNA.jpg" alt="IA: Chemical Supply Management with Pre-approvals, MSDS, Chemicals (Usage Inquiry, Inventory) and Compliance (Change Points, Policy Details, Import Permits)" loading="lazy" decoding="async"></div><figcaption>Final IA for Chemical Supply Management</figcaption></figure>'},{"st":4,"t":"text","k":"Concept Validation 2 \xB7 Data Flow","h":"SAP requests, ESH reviews, MD issues the code","p":["The material number created in SAP comes into ESH, where **compliance and inventory checks run in parallel**. Imported chemicals also need an import permit. Once all four signers approve, **MD generates the chemical code for company-wide use**. Validation with the SAP and ESH owners confirmed the flow held."]},{"t":"flow","label":"Final process architecture"},{"st":4,"t":"text","k":"Prototyping Evaluation \xB7 Sign-off","h":"Four steps, each one alerting the next, so requests stop waiting","p":["Sequential sign-off reduced the approval structure to **three depths**, simpler than the initial design. Each completed signature **alerts the next signer immediately**, which keeps the request moving and prevents skipped steps."]},{"t":"signoff","label":"4-step sign-off with alerts"},{"t":"refl","k":"Takeaway","h":"In a regulated enterprise, design is mostly alignment","items":[["What worked","Fixing the legal stages first gave every discussion a shared frame. The **4-step sign-off with alerts** turned a disconnected approval chain into one that moves on its own, and the integration case was **shared with other subsidiaries in the group**."],["What I\u2019d change","Map system and API constraints before process mapping. Finding security limits mid-iteration forced redesigns that **earlier talks with developers and system owners** could have avoided."],["Next","A broader rollout to other subsidiaries is under review. I\u2019d also measure the new purchase cycle, which I couldn\u2019t do before my contract ended."]]}]},"reading":{"name":"Reading Ocean","blocks":[{"t":"head","title":"Reading Ocean","sub":"An LMS redesigned for academy instructors","tags":["UX research","Data-driven design","Wireframe","Prototyping","A/B test"],"facts":[["Team","3 UX designers, 1 graphic designer, 3 developers, 6 content creators"],["Timeline","14 months, Nov 2021 \u2013 Jan 2023"],["Domain","EdTech \xB7 SaaS (B2B2C)"],["Client","Reading academies\u2019 instructors"]]},{"t":"fig","wide":true,"img":"https://framerusercontent.com/images/ZyKZb49RG6RlrtBgK4I0XHpFs8.webp","alt":"Reading Ocean LMS on three tablets","ratio":"1800/610"},{"t":"text","k":"Summary","p":["Reading Ocean is an online reading platform for elementary students. When it expanded to private academies, instructors became primary users, and the system wasn\u2019t built for them. I tackled **the missing progress tracking and the role confusion in the UI** with **personalized reports and role-specific landing pages**."]},{"t":"stats","items":[["6%\u21920","UI-related share of monthly CS inquiries"],["150%","more positive user responses"],["28%","higher score for information in the satisfaction survey"]]},{"t":"text","k":"Background Context","h":"Expanding from B2B to B2B2C with a new platform: academies","p":["As the service expanded to private academies, the student management system tailored to a new primary user group, **academy instructors**, became essential. The existing system failed to meet their needs."]},{"t":"process","k":"Project Overview","steps":[["Research","Interviews \xB7 Survey \xB7 SWOT"],["Findings","Insights \xB7 Project goal"],["Hypothesis","Main page \xB7 Report ideation"],["Testing","A/B tests \xB7 Concept validation"],["Design","Main pages \xB7 Reports"]],"note":"Hypothesis and testing looped until the results held."},{"t":"text","k":"Problem Statement","h":"Key challenges in UI efficiency and learning progress tracking","p":["Customer feedback data revealed two key issues:","**1. Main page:** UI and navigation issues confused instructors and slowed their workflows.","**2. Report:** tracking each student\u2019s learning progress was hard."]},{"st":0,"t":"text","k":"In-depth Interview \xB7 Problem 1 \xB7 Main page","h":"Identifying UI confusion","p":["I interviewed instructors who had raised UI concerns in CS inquiries, following **the Mom Test** so questions didn\u2019t steer them toward a solution. **Over 80% reported difficulties**, citing the lack of differentiation between the student and instructor landing pages as the main issue."]},{"t":"gallery","figs":[["https://framerusercontent.com/images/TGbWxIsZG2Kr660FLf1ZeS4ZA.webp","In-depth interview with an instructor","783/615"],["https://framerusercontent.com/images/4iuiJJuRiff0wMWrs5RLw6uTA.webp","80% reported difficulties; identical landing pages were the top cause","1400/660"]]},{"st":0,"t":"text","k":"Surveys \xB7 Problem 2 \xB7 Report","h":"Pinpointing reporting needs for tracking tools","p":["A two-week survey of private academies and power users showed that **43.8% needed a report feature to track student performance progress**. Dissatisfaction came mainly from graphs that were hard to tell apart, so the report structure itself had to be reconsidered."]},{"t":"raw","html":'<figure class="cs-fig cs-col cs-quotes"><div class="cs-q-stage cs-anim" style="aspect-ratio:1400/645" role="img" aria-label="Three instructors on the existing report: the report lacks graphs that are easy to interpret; it is difficult to accurately understand the students\u2019 progress through this; it doesn\u2019t effectively support discussions with parents about student progress."><img class="q-bg" src="https://framerusercontent.com/images/PHWap1TYejODphC61E3P0FtH4.webp" alt=""><img class="q av" src="https://framerusercontent.com/images/l4Pko0gnSb1WBFExqjsysIiFsg.webp" alt="" style="left:75.214%;top:7.907%;width:14.857%;--g:0"><img class="q bb" src="https://framerusercontent.com/images/AJfOHrhxEukz1z5v1GWS7Y90oA.webp" alt="" style="left:41.429%;top:17.674%;width:32.500%;--g:0;--o:100% 0%"><img class="q av" src="https://framerusercontent.com/images/pQtR0HKhrDtedElCkPTJgXkIf4.webp" alt="" style="left:8.929%;top:37.674%;width:14.857%;--g:1"><img class="q bb" src="https://framerusercontent.com/images/Z4kqIeinXonkTt6xganRo6nCkbc.webp" alt="" style="left:25.571%;top:40.465%;width:35.571%;--g:1;--o:0% 100%"><img class="q av" src="https://framerusercontent.com/images/qDWshUi4wXvCupwccUU3hqlCTY.webp" alt="" style="left:39.143%;top:61.860%;width:12.000%;--g:2"><img class="q bb" src="https://framerusercontent.com/images/nJMJ78uev3FrcEH1E5GjPA5eA4w.webp" alt="" style="left:53.071%;top:60.000%;width:34.357%;--g:2;--o:0% 100%"></div><figcaption>What instructors said about the existing report</figcaption></figure>'},{"st":0,"t":"text","k":"Company SWOT \xB7 Problem 2 \xB7 Report","h":"Opportunities in learning data utilization","p":["A key **strength was detailed learning data**, such as literal, critical and creative reading skills. **A notable weakness was how little of it was used.**"]},{"t":"swot","title":"SWOT Analysis of Reading Ocean","cap":"Strength: detailed learning data. Weakness: ineffective use of it","q":[["s","Strengths",["Detailed Learning Data"]],["w","Weaknesses",["Ineffective data utilization","Limited advanced visualizations"]],["o","Opportunities",["Improve data visualization","Enhance user insights"]],["t","Threats",["Potential user dissatisfaction"]]]},{"st":1,"t":"text","k":"Insights","h":"Recognizing the importance of role clarity and tracking","p":["First, **the identical UI for instructor and student main pages** failed to deliver role-specific experiences, leading to confusion and inefficiency. Second, instructors lacked **learning progress tracking**, and specifically needed visualizations and graphs."]},{"t":"split","src":"one landing page for everyone","mid":"role split","a":["Instructors","manage and track"],"b":["Students","read and learn"],"label":"One shared landing page splits into an instructor page and a student page"},{"st":1,"t":"goalcard","k":"Project Goal","h":"Reducing UI confusion and improving the study tracking tool","p":["Reduce UI confusion by **defining the identity of the learning manager**, and enhance the tracking of students\u2019 learning process."]},{"st":2,"t":"text","k":"Ideation 1 \xB7 Main page","h":"Resolving the UI confusion on the landing page","p":["A dedicated landing page was designed for instructors to eliminate confusion, with **a role-focused, intuitive navigation structure**."]},{"st":2,"t":"text","k":"Ideation 2 \xB7 Report","h":"Enhancing data visualization for tracking reading performance","p":["Relying on simple bar graphs and tables lacked the depth to convey trends in students\u2019 learning progress. I **analysed reports from 3 competitors**, explored diverse visualization strategies, and adopted the graph types that conveyed each kind of data best."]},{"t":"fig","img":"https://framerusercontent.com/images/SnTDWyDceGAf6gwkoKBjS91suM8.webp","alt":"Reviewing competitors\u2019 reports with the team","cap":"Reviewing 3 competitors\u2019 reports with the team","ratio":"759/312"},{"t":"text","sh":"Leveraging SWOT for exclusive data insights","p":["Building on the SWOT strength, I analysed our learning data in depth and **uncovered insights unique to our resources**: metrics that were otherwise hard to quantify, such as the precision of reading comprehension."]},{"st":3,"t":"text","k":"A/B Testing & Iteration 1 \xB7 Main page","h":"UI separation and redesign","p":["Wireframes and interactive prototypes went through **three rounds of A/B testing**. The tests showed that simplifying the main screen layout improved information delivery, so the instructor landing page was built around administrator functions with optimized navigation."]},{"t":"ab","pa":30,"pb":70,"a":"https://framerusercontent.com/images/HNwu6AB5vzX6gXUQ6HQ8HUsFf14.webp","b":"https://framerusercontent.com/images/bSq9hbz98PnYPEZwGRDAryaD1Ks.webp","cap":"A/B test result: version B was chosen"},{"st":3,"t":"text","k":"Concept Validation & Iteration 2 \xB7 Report","h":"Strong need for comparative information","p":["Concept feedback showed that **25% of instructors strongly needed comparative information**. The lack of comparative graphs showing student levels was the primary source of dissatisfaction."]},{"t":"text","sh":"Creating the \u201CCareful Reading Rate (C.R. Rate)\u201D to meet comparison needs","p":["From data unique to our brand I created a new attribute, the **C.R. Rate**, and replaced \u201CMy Score\u201D and \u201CMy Level\u201D with **\u201CMy C.R. Rate\u201D and \u201CAverage C.R. Rate\u201D**."]},{"t":"crbars"},{"st":4,"t":"text","k":"Solution \xB7 Feature 1 \xB7 Main page","h":"Redesigned landing pages for seamless role-specific UI","p":["Instructor and student pages now have distinct identities, so each user knows where they are on arrival. Instructors get navigation tailored to administrative functions. **UI-related CS inquiries went from 6% to zero.**"]},{"t":"vpair","a":{"who":"Students\u2019","role":"Read & explore","c":"#5BC4BF","old":"https://framerusercontent.com/images/EigWx3KUjhp4dr8vWI1bweQ4GI.webp","src":"https://framerusercontent.com/assets/R4zH0R19zlS5OsxaTfkRSiCI.mp4"},"b":{"who":"Teachers\u2019","role":"Manage & monitor","c":"#8A93A8","old":"https://framerusercontent.com/images/Yl43It9fNGEmyQi2RTY5bEjAQ.webp","src":"https://framerusercontent.com/assets/IUqluT4ENgR20VuxMLfDBosa4.mp4"},"changed":[["Main goal","Read &amp; explore","Manage &amp; monitor"],["Color",'<span class="sw" style="background:#5BC4BF"></span>Teal \u2014 bright, friendly','<span class="sw" style="background:#5A6070"></span>Slate \u2014 calm, work mode'],["First view","Continue Reading + my progress","Student count + shortcuts"],["Key modules","Picks \xB7 Curriculum \xB7 Monthly books","Purchases \xB7 Resources \xB7 Notices"],["Hero message","\u201CWhere reading becomes fun\u201D","\u201CLearning Management System\u201D"]]},{"st":4,"t":"text","k":"Solution \xB7 Feature 2 \xB7 Report","h":"Personalized reports with visualization","p":["Graphs, charts and comparison data make each student\u2019s performance easy to grasp, including things that were hard to quantify, like reading progress. **Sharing results with parents more than doubled.**"]},{"t":"compare","doc":true,"hint":true,"start":100,"a":"https://framerusercontent.com/images/nuxfc88g8Lx9Q9Pneycq3tVB8Sg.webp","al":"Before","b":"https://framerusercontent.com/images/t1v9WHXGvWaiMsTqKxlSUO6fZ0.webp","bl":"After","cap":"Existing report \u2192 redesign with C.R. Rate, skill radar and book analysis","ratio":"1000/1381"},{"t":"refl","k":"Takeaway","h":"Combining educational impact with professional UX growth","items":[["What worked","CS logs and satisfaction surveys gave a measurable baseline, so the impact of the redesign was visible in numbers. As my first end-to-end project, it showed me the value of **data-driven, research-based IA**."],["What I\u2019d change","Run the SWOT before scoping features. The C.R. Rate came mid-project; it could have been the differentiator from the start."],["Next","Use the book and skill data with AI for personal book recommendations, individual strengths, and features for multicultural students."]]},{"t":"gallery","figs":[["https://framerusercontent.com/images/2r7wcthPwW0eSU12L88bpdkP4ew.webp","Final instructor main page","1700/896"],["https://framerusercontent.com/images/Tscs0qa0L5mzOPimGNKWYmlWlVQ.webp","Final reading reports","1700/896"]]}]},"health":{"name":"Health Benefit ERP","blocks":[{"t":"head","title":"Health Benefit ERP","sub":"Hanwha Aerospace \xB7 Employee health benefits, rebuilt after a three-company merger","tags":["Stakeholder interview","Reverse engineering","IA","Developer walkthroughs"],"facts":[["Domain","Defense \xB7 Enterprise ERP"],["Client","Hanwha Aerospace employees & in-house nurse"],["Role","UX designer \xB7 IA"],["Scope","5 core features"]]},{"t":"fig","wide":true,"img":"https://framerusercontent.com/images/bpMWRb2vTNow3NkQUjC1LtXcj5Y.png","alt":"Health benefit ERP screens","ratio":"16/9"},{"t":"text","k":"Summary","p":["When Hanwha Aerospace consolidated three subsidiaries into one, employee health benefits had to move into the new integrated ERP. The in-house nurse managing the old system couldn\u2019t explain how it worked. **So I logged in and reverse-engineered it myself.**"]},{"t":"stats","items":[["3","subsidiaries merged into one benefit system"],["5","core features designed from the legacy logic"],["2","legal rules turned into eligibility parameters"]]},{"t":"text","k":"Background","h":"No documentation. No handover. Just a system nobody understood.","p":["The old system, a third-party vendor tool used before the merger, had been run entirely by the in-house nurse.","**The core challenge:** she was the only person who understood it, and she couldn\u2019t put it into words. There was no documentation, no handover material and no knowledge base."]},{"t":"process","k":"Process","steps":[["Interview","Stakeholder interview"],["Reverse engineering","Legacy system walkthrough"],["Legal logic","Rules into parameters"],["Validation","Developer walkthroughs"],["Solution","5 core features"]]},{"t":"text","st":0,"k":"Stakeholder interview","h":"When the domain expert can\u2019t explain the domain","p":["The interview with the nurse was the natural starting point. But she ran the vendor system by habit, not explicit knowledge, and her account of the workflow was fragmented and inconsistent."]},{"t":"persp","cards":[["Employee side",["No central place to view or request health benefits","Eligibility varied by employee ID and legal rules","Screening eligibility set by birth year under Korean law","Employees unaware of benefits they could claim"]],["Nurse (admin) side",["Benefits run through a disconnected external system","Manual tracking of who had and hadn\u2019t applied","No automated way to notify non-applicants","Workflow logic lived in one person\u2019s head"]]],"insight":"Goal: recover the real logic of the legacy system and turn it into **one ERP module that both employees and the nurse can run**."},{"t":"text","st":1,"k":"Reverse engineering","h":"Reverse-engineering the legacy system directly","p":["I asked for access and went through the system myself, clicking through **every menu, every button, every state**, and mapped what I found.","I documented every data field, action and output, then checked it against the stated requirements to find gaps. This surfaced **the actual data structure** the system was built on, which interviews alone could never have recovered."]},{"t":"text","st":2,"k":"Legal logic","h":"Translating legal logic into system logic","p":["Two of the five core features needed Korean legal rules turned into parameter-based eligibility.","Employees get a free national health checkup every two years, **set by birth year (even or odd)**. That rule became the screening filter. Individual benefits were tied to **employee ID**, so entitlements could differ per person across three companies with different pre-merger structures."]},{"t":"text","st":3,"k":"Developer-inclusive iteration","h":"Validated with developers from the start","p":["After the IA, I ran walkthroughs with developers as a validation loop, not a review step. When data couldn\u2019t be carried over from the legacy system, that constraint went straight back into the design: **design \u2192 developer review \u2192 constraint \u2192 redesign**. The final spec was buildable from day one."]},{"t":"text","st":4,"k":"Solution","h":"5 core features, built from nothing","p":["Two separate workflows, employees managing their own benefits and the nurse administering them, became one ERP module with role-based access."]},{"t":"refl","k":"Features","items":[["Personal data consent","A mandatory consent flow before any benefit feature, meeting legal rules for medical information across three merged companies."],["Screening eligibility filter","Birth-year eligibility per Korean health checkup law, surfacing eligible employees without manual tracking."],["Individual benefit setup","Employee-ID based entitlements for each person."],["Non-applicant reminders","Admin-triggered emails to employees who haven\u2019t applied, replacing manual tracking."],["Role-separated UI","Distinct employee and admin views in one system."]]},{"t":"refl","k":"Takeaway","h":"Research methods have to adapt to the situation","items":[["What worked","When the domain expert can\u2019t explain the domain, the designer has to become one for a while. Reverse-engineering the legacy system was the only way to recover what the design depended on."],["What I\u2019d change","Document the reverse-engineering as its own deliverable, a system map of the legacy tool, before IA. It would have aligned developers earlier."]]}]}};var CSS=`
@keyframes fade{ from{ opacity:0 } }
.cs{
 --cs-w:860px;
 --cs-bg:#0A1022; --cs-raise:#10182F; --cs-line:rgba(214,226,255,.12); --cs-ink:#EEF1F8; --cs-body:rgba(238,241,248,.78);
 --cs-dim:rgba(238,241,248,.52); --cs-accent:#A9C4FF; --cs-ph:#0D1530;
}
@keyframes csIn{ from{ opacity:0; transform:scale(.94) translateY(14px) } }
.cs-doc{ --g-topic:clamp(72px, 9vw, 112px); --g-sub:clamp(40px, 5vw, 56px); --g-vis:clamp(24px, 3vw, 36px);
 padding-block:clamp(36px, 6vw, 72px) 56px; padding-inline:clamp(20px, 4vw, 48px); display:grid; gap:0; color:var(--cs-body); font:400 14.42px/1.65 var(--font); }
.cs-col{ width:min(100%, 720px); margin-inline:auto; }
.cs-sec{ display:grid; gap:24px; }
.cs-kicker{ margin:0; font:500 10.23px/1 var(--font); letter-spacing:.16em; text-transform:uppercase; color:var(--cs-accent); }
.cs h1{ margin:0; color:var(--cs-ink); font:600 clamp(26.04px, 3.91vw, 40.92px)/1.12 var(--font); letter-spacing:-.025em; text-wrap:balance; }
.cs .cs-sh{ margin:0; color:var(--cs-ink); font:600 16.74px/1.3 var(--font); letter-spacing:-.01em; }
.cs h2{ margin:0; color:var(--cs-ink); font:600 clamp(20.46px, 2.42vw, 26.04px)/1.2 var(--font); letter-spacing:-.015em; text-wrap:balance; }
.cs h3{ margin:0; color:var(--cs-ink); font:600 14.88px/1.35 var(--font); letter-spacing:-.005em; }
.cs p{ margin:0; }
.cs-tags{ display:flex; flex-wrap:wrap; gap:8px; }
.cs-tag{ padding:6px 11px; border-radius:999px; border:1px solid var(--cs-line); font:500 11.16px/1 var(--font); color:var(--cs-body); }
.cs-lede{ font-size:15.81px; line-height:1.6; color:var(--cs-body); max-width:62ch; }
.cs-facts{ display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:20px 28px; margin:0; padding-top:24px; border-top:1px solid color-mix(in srgb, var(--cs-accent) 45%, transparent); }
.cs-facts div{ min-width:0; }
.cs-facts dt{ font:500 10.23px/1 var(--font); letter-spacing:.14em; text-transform:uppercase; color:var(--cs-dim); margin-bottom:8px; }
.cs-facts dd{ margin:0; color:var(--cs-ink); font-size:13.02px; line-height:1.5; }
.cs-fig{ margin:0; display:grid; gap:10px; }
.cs-fig.wide{ width:100%; margin-inline:auto; }
.cs-frame{ position:relative; max-width:100%; aspect-ratio:var(--r, 16/10); border-radius:14px; overflow:hidden; background:var(--cs-ph); border:1px solid var(--cs-line); }
.cs-frame img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
.cs-ph{ position:absolute; inset:0; display:grid; place-content:center; justify-items:center; gap:8px; padding:20px; text-align:center;
 background-image:linear-gradient(var(--cs-line) 1px, transparent 1px), linear-gradient(90deg, var(--cs-line) 1px, transparent 1px); background-size:40px 40px; background-position:center; }
.cs-ph::before{ content:''; position:absolute; inset:10px; border:1px dashed color-mix(in srgb, var(--cs-accent) 35%, transparent); border-radius:8px; pointer-events:none; }
.cs-ph span{ font:500 9.77px/1 var(--font); letter-spacing:.16em; text-transform:uppercase; color:var(--cs-accent); }
.cs-ph b{ max-width:40ch; color:var(--cs-ink); font:500 13.02px/1.4 var(--font); }
.cs-ph small{ color:var(--cs-dim); font:400 11.16px/1 var(--font); font-variant-numeric:tabular-nums; }
.cs-fig figcaption{ font-size:12.09px; line-height:1.5; color:var(--cs-dim); }
.cs-note{ font-size:12.56px; color:var(--cs-dim); }
.cs-stats{ display:grid; grid-template-columns:repeat(auto-fit, minmax(190px, 1fr)); gap:16px; }
.cs-stat{ display:grid; gap:10px; align-content:start; padding:22px 20px; border-radius:14px; background:var(--cs-raise); border:1px solid var(--cs-line); border-top:2px solid var(--cs-accent); }
.cs-stat b{ color:var(--cs-accent); font:600 clamp(31.62px, 3.72vw, 40.92px)/1 var(--font); letter-spacing:-.03em; font-variant-numeric:tabular-nums; }
.cs-stat span{ font-size:13.02px; line-height:1.5; }
.cs-split{ display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; }
.cs-side{ display:grid; gap:14px; align-content:start; padding:22px 20px; border-radius:14px; border:1px solid var(--cs-line); }
.cs-side ul{ margin:0; padding:0; list-style:none; display:grid; gap:10px; }
.cs-side li{ position:relative; padding-left:18px; font-size:13.49px; line-height:1.55; }
.cs-side li::before{ content:''; position:absolute; left:2px; top:.68em; width:6px; height:6px; border-radius:50%; background:var(--cs-accent); opacity:.7; }
.cs-insight{ display:grid; gap:8px; padding:20px 22px; border-radius:14px; background:linear-gradient(135deg, color-mix(in srgb, var(--cs-accent) 14%, transparent), color-mix(in srgb, var(--cs-accent) 3%, transparent)); border:1px solid color-mix(in srgb, var(--cs-accent) 28%, transparent); }
.cs-insight p:not(.cs-kicker){ color:var(--cs-ink); font-size:14.42px; }
.cs-steps{ margin:0; padding:0; list-style:none; display:grid; gap:40px; counter-reset:step; }
.cs-step{ display:grid; grid-template-columns:44px minmax(0, 1fr); gap:6px 16px; counter-increment:step; }
.cs-step::before{ content:counter(step, decimal-leading-zero); grid-row:1 / span 3; font:600 12.09px/1.4 var(--font); color:var(--cs-accent); font-variant-numeric:tabular-nums; padding-top:2px; }
.cs-step .cs-fig{ margin-top:10px; }
.cs-feat{ display:grid; gap:20px; }
.cs-feat + .cs-feat{ padding-top:40px; border-top:1px solid var(--cs-line); }
.cs-feat-tag{ justify-self:start; padding:5px 10px; border-radius:6px; background:color-mix(in srgb, var(--cs-accent) 14%, transparent); color:var(--cs-accent); font:600 10.23px/1 var(--font); letter-spacing:.1em; text-transform:uppercase; }
.cs-feat ul{ margin:0; padding-left:18px; display:grid; gap:6px; }
.cs-refl{ display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px; }
.cs-refl div{ display:grid; gap:10px; align-content:start; padding:22px 20px; border-radius:14px; background:var(--cs-raise); border:1px solid var(--cs-line); }
.cs-refl p{ font-size:13.49px; line-height:1.6; }
.cs :focus-visible{ outline:2px solid var(--cs-accent); outline-offset:2px; }
.cs-head{ display:grid; gap:18px; }
.cs-name{ margin:0; font:400 clamp(59.52px, 8.37vw, 104.16px)/.92 'Instrument Serif', Georgia, serif !important; letter-spacing:-.01em !important; color:var(--cs-ink); }
.cs-sub{ margin:0; font:400 clamp(20.46px, 2.42vw, 27.9px)/1.25 'Instrument Serif', Georgia, serif; color:var(--cs-accent); }
.cs-head .cs-tags{ margin-top:6px; }
.cs-proc{ margin:0; padding:0; list-style:none; display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:1px; background:var(--cs-line); border:1px solid var(--cs-line); border-radius:12px; overflow:hidden; counter-reset:proc; }
.cs-proc li{ display:grid; gap:6px; align-content:start; padding:16px; background:var(--cs-bg); counter-increment:proc; }
.cs-proc li::before{ content:counter(proc, decimal-leading-zero); font:500 10.23px/1 var(--font); color:var(--cs-accent); font-variant-numeric:tabular-nums; }
.cs-proc b{ color:var(--cs-ink); font-weight:600; font-size:13.95px; }
.cs-proc span{ font-size:12.09px; line-height:1.45; color:var(--cs-dim); }
.cs-gal{ display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; width:100%; }
.cs-fig.narrow .cs-frame{ max-width:560px; margin-inline:auto; width:100%; }
.cs-fig.narrow figcaption{ text-align:center; }
.cs-frame{ background:#F4F5F7; }
.cs-frame img{ object-fit:cover; }
.cs-label{ display:inline-block; padding:4px 9px; border-radius:6px; background:color-mix(in srgb, var(--cs-accent) 14%, transparent); color:var(--cs-accent); font:600 10.23px/1 var(--font); letter-spacing:.06em; text-transform:uppercase; }
.cs-sec p b,.cs-refl p b,.cs-insight p b,.cs-fig figcaption b{ color:var(--cs-ink); font-weight:600; }
.cs-split{ grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); }
.cs-split-fig{ margin:0; display:grid; gap:10px; }
.cs-split-svg{ width:100%; height:auto; display:block; overflow:visible; }
.cs-split-svg .rail{ fill:none; stroke:var(--cs-line); stroke-width:1.5; }
.cs-split-svg .rail.hot{ stroke:color-mix(in srgb, var(--cs-accent) 45%, transparent); stroke-dasharray:3 6; }
.cs-split-svg .dot{ fill:var(--cs-accent); }
.cs-split-svg .src{ fill:var(--cs-dim); }
.cs-split-svg text{ font-family:var(--font); fill:var(--cs-body); font-size:12.09px; }
.cs-split-svg text.lead{ fill:var(--cs-ink); font-weight:600; font-size:13.95px; }
.cs-split-svg text.small{ fill:var(--cs-dim); font-size:10.7px; }
.cs-cmp{ position:relative; max-width:100%; aspect-ratio:1.95/1; border-radius:14px; overflow:hidden; border:1px solid var(--cs-line); background:#F4F5F7; --x:50%; user-select:none; touch-action:pan-y; }
.cs-cmp img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; pointer-events:none; }
.cs-cmp .a{ clip-path:inset(0 calc(100% - var(--x)) 0 0); }
.cs-cmp .bar{ position:absolute; top:0; bottom:0; left:var(--x); width:2px; margin-left:-1px; background:var(--cs-accent); pointer-events:none; }
.cs-cmp .knob{ position:absolute; top:50%; left:var(--x); width:40px; height:40px; margin:-20px 0 0 -20px; border-radius:50%; background:var(--cs-bg); border:2px solid var(--cs-accent); display:grid; place-items:center; color:var(--cs-accent); pointer-events:none; box-shadow:0 6px 20px rgba(0,0,0,.35); }
.cs-cmp .knob svg{ width:18px; height:18px; }
.cs-cmp input{ position:absolute; inset:0; width:100%; height:100%; margin:0; opacity:0; cursor:ew-resize; }
.cs-cmp input:focus-visible ~ .knob{ outline:2px solid var(--cs-accent); outline-offset:3px; }
.cs-cmp-cap{ font-size:12.09px; color:var(--cs-dim); }
.cs-cmp .lay{ position:absolute; inset:0; pointer-events:none; }
.cs-cmp .la{ clip-path:inset(0 calc(100% - var(--x)) 0 0); }
.cs-cmp .lb{ clip-path:inset(0 0 0 var(--x)); }
.cs-cmp .tag{ position:absolute; top:14px; padding:7px 11px; border-radius:999px; font:700 10.23px/1 var(--font); letter-spacing:.1em; white-space:nowrap; box-shadow:0 4px 14px rgba(0,0,0,.28); }
.cs-cmp .la .tag{ left:calc(var(--x) - 10px); transform:translateX(-100%); background:#2A2540; color:#fff; }
.cs-cmp .lb .tag{ left:calc(var(--x) + 10px); background:var(--cs-accent); color:#16122B; }
.cs-morph{ position:relative; }
.cs-morph .after{ animation:csMorph 7s ease-in-out infinite; }
.cs-morph-cap{ display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
.cs-morph-cap .lb{ transition:opacity .3s; }
.cs-morph-cap .lb.b{ animation:csMorphB 7s ease-in-out infinite; }
.cs-morph-cap .lb.a{ animation:csMorphA 7s ease-in-out infinite; }
@keyframes csMorph{ 0%,38%{ opacity:0 } 50%,88%{ opacity:1 } 100%{ opacity:0 } }
@keyframes csMorphB{ 0%,38%{ opacity:.35 } 50%,88%{ opacity:1 } 100%{ opacity:.35 } }
@keyframes csMorphA{ 0%,38%{ opacity:1 } 50%,88%{ opacity:.35 } 100%{ opacity:1 } }
.cs-demo{ position:relative; display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:10px; padding:16px; border-radius:14px; border:1px solid var(--cs-line); background:var(--cs-raise); overflow:hidden; }
.cs-dc{ position:relative; display:grid; gap:8px; align-content:start; min-height:120px; padding:12px; border-radius:10px; background:var(--cs-bg); border:1px solid var(--cs-line); }
.cs-dc .hd{ display:flex; justify-content:space-between; align-items:center; gap:6px; font-size:10.23px; color:var(--cs-ink); }
.cs-dc .more{ padding:2px 6px; border-radius:5px; font-size:9.3px; color:var(--cs-accent); border:1px solid color-mix(in srgb, var(--cs-accent) 40%, transparent); white-space:nowrap; }
.cs-dc .x{ position:absolute; right:8px; bottom:6px; font-size:11.16px; color:var(--cs-dim); }
.cs-dc i{ display:block; height:7px; border-radius:4px; background:color-mix(in srgb, var(--cs-accent) 30%, transparent); }
.cs-dc i:nth-of-type(2){ width:70%; } .cs-dc i:nth-of-type(3){ width:45%; }
.cs-dc.c3{ animation:csGone 12s ease-in-out infinite; }
.cs-dc.c3 .x{ animation:csPress 12s ease-in-out infinite; }
.cs-dc.c1{ animation:csSwapA 12s ease-in-out infinite; z-index:2; }
.cs-dc.c2{ animation:csSwapB 12s ease-in-out infinite; }
.cs-dc.c1 .more{ animation:csMore 12s ease-in-out infinite; }
.cs-board{ position:absolute; inset:16px 16px 16px 40%; border-radius:10px; background:var(--cs-bg); border:1px solid color-mix(in srgb, var(--cs-accent) 50%, transparent); padding:14px; display:grid; gap:8px; align-content:start; font-size:11.16px; color:var(--cs-ink); transform:translateX(110%); animation:csBoard 12s ease-in-out infinite; box-shadow:-12px 0 30px rgba(0,0,0,.3); }
.cs-board span{ display:block; height:8px; border-radius:4px; background:var(--cs-line); }
.cs-board span:nth-child(odd){ width:80%; }
.cs-demo-cap{ font-size:12.09px; color:var(--cs-dim); }
@keyframes csPress{ 0%,10%{ color:var(--cs-dim); transform:scale(1) } 13.5%{ color:var(--cs-accent); transform:scale(1.5) } 18%,100%{ color:var(--cs-dim); transform:scale(1) } }
@keyframes csGone{ 0%,15%{ opacity:1; transform:scale(1) } 22%,95%{ opacity:.12; transform:scale(.92) } 100%{ opacity:1; transform:scale(1) } }
@keyframes csMore{ 0%,30%{ background:transparent; color:var(--cs-accent) } 34%,39%{ background:var(--cs-accent); color:var(--cs-bg) } 43%,100%{ background:transparent; color:var(--cs-accent) } }
@keyframes csSwapA{ 0%,72%{ transform:none; box-shadow:none } 74%,77%{ transform:none; box-shadow:0 0 0 2px var(--cs-accent) } 84%,95%{ transform:translateX(calc(100% + 10px)); box-shadow:0 0 0 2px var(--cs-accent) } 100%{ transform:none; box-shadow:none } }
@keyframes csSwapB{ 0%,77%{ transform:none } 84%,95%{ transform:translateX(calc(-100% - 10px)) } 100%{ transform:none } }
@keyframes csBoard{ 0%,39%{ transform:translateX(110%) } 45%,64%{ transform:translateX(0) } 70%,100%{ transform:translateX(110%) } }
.cs-prog{ flex:none; display:flex; gap:4px; padding:8px 16px 10px; border-bottom:1px solid var(--cs-line); background:var(--cs-bg); overflow-x:auto; scrollbar-width:none; }
.cs-prog[hidden]{ display:none; }
.cs-prog::-webkit-scrollbar{ display:none; }
.cs-prog button{ flex:1 1 0; min-width:84px; display:grid; gap:6px; padding:4px 2px 2px; border:0; background:none; cursor:pointer; text-align:left; font:500 10.7px/1.2 var(--font); color:var(--cs-dim); transition:color .3s; }
.cs-prog button i{ display:block; height:3px; border-radius:2px; background:var(--cs-line); overflow:hidden; position:relative; }
.cs-prog button i::after{ content:''; position:absolute; inset:0; background:var(--cs-accent); transform:scaleX(var(--f,0)); transform-origin:left; transition:transform .35s ease; }
.cs-prog button.on{ color:var(--cs-ink); }
.cs-prog button.done{ color:var(--cs-body); }
.cs-proc-note{ margin:0; font-size:12.09px; color:var(--cs-dim); }
.cs-cr{ display:grid; gap:14px; padding:20px; border-radius:14px; background:var(--cs-raise); border:1px solid var(--cs-line); }
.cs-cr-row{ display:grid; grid-template-columns:minmax(110px, 160px) minmax(0, 1fr) 44px; gap:12px; align-items:center; font-size:12.09px; }
.cs-cr-row .lab{ position:relative; height:1.3em; color:var(--cs-ink); }
.cs-cr-row .lab span{ position:absolute; inset:0; white-space:nowrap; }
.cs-cr-row .lab .new{ opacity:0; animation:crNew 8s ease-in-out infinite; }
.cs-cr-row .lab .old{ animation:crOld 8s ease-in-out infinite; color:var(--cs-dim); }
.cs-cr-row .track{ height:12px; border-radius:6px; background:var(--cs-bg); overflow:hidden; }
.cs-cr-row .fill{ height:100%; border-radius:6px; transform-origin:left; animation:crFill 8s ease-in-out infinite; }
.cs-cr-row.me .fill{ background:var(--cs-accent); width:82%; }
.cs-cr-row.avg .fill{ background:#F2B544; width:64%; }
.cs-cr-row .val{ font-variant-numeric:tabular-nums; color:var(--cs-dim); text-align:right; }
.cs-cr-row .val .new{ opacity:0; animation:crNew 8s ease-in-out infinite; }
.cs-cr-row .val{ position:relative; height:1.3em; } .cs-cr-row .val span{ position:absolute; right:0; }
.cs-cr-row .val .old{ animation:crOld 8s ease-in-out infinite; }
.cs-cr-cap{ font-size:12.09px; color:var(--cs-dim); }
@keyframes crOld{ 0%,30%{ opacity:1 } 40%,92%{ opacity:0 } 100%{ opacity:1 } }
@keyframes crNew{ 0%,30%{ opacity:0 } 40%,92%{ opacity:1 } 100%{ opacity:0 } }
@keyframes crFill{ 0%,32%{ transform:scaleX(0) } 55%,92%{ transform:scaleX(1) } 100%{ transform:scaleX(0) } }
@media (prefers-reduced-motion: reduce){ .cs-cr-row .new{ animation:none; opacity:1 } .cs-cr-row .old{ animation:none; opacity:0 } .cs-cr-row .fill{ animation:none } .cs-prog button i::after{ transition:none } }
.cs-frame,.cs .cs-frame{ border:0 !important; background:transparent !important; }
.cs-frame img{ object-fit:contain !important; }
.cs-frame.cover img{ object-fit:cover !important; }
.cs-fig.narrow .cs-frame{ max-width:480px; }
.cs-gal{ display:flex !important; gap:16px; align-items:flex-start; }
.cs-gal > .cs-fig{ flex:var(--a,1) 1 0; min-width:0; }
.cs-gal.g2{ display:grid !important; grid-template-columns:repeat(2, minmax(0, 1fr)); }
@media (max-width:640px){ .cs-gal{ flex-direction:column; } .cs-gal > .cs-fig{ width:100%; } }
.cs-cmp{ border:0 !important; }
.cs-cmp.doc{ background:#fff !important; width:calc(min(100%, 560px, calc((var(--cs-vh, 760px) - 88px) * var(--ar, .72))) * .9); margin-inline:auto; }
.cs-fig:has(.cs-cmp.doc) .cs-cmp-cap{ text-align:center; }
.cs-cmp.doc img{ object-fit:contain; object-position:top center; }
.cs-doc > * + *{ margin-top:var(--g-topic); }
.cs-doc > * + .cs-sec:not(:has(> .cs-kicker)):not(:has(.cs-goal)){ margin-top:var(--g-sub); }
.cs-doc > .cs-sec + .cs-sec:has(.cs-stats){ margin-top:var(--g-sub); }
.cs-vp{ gap:28px; }
.cs-vp-pair{ display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:12px 16px; padding:18px 16px 16px; border-radius:18px; background:var(--cs-raise); border:1px solid var(--cs-line); }
.cs-vp-pair > header{ display:flex; align-items:center; gap:8px; padding:0 2px; min-width:0; }
.cs-vp-pair > header i{ width:8px; height:8px; border-radius:50%; flex:none; }
.cs-vp-pair > header b{ color:var(--cs-ink); font:600 13.02px/1 var(--font); }
.cs-vp-pair > header span{ margin-left:auto; font-size:11.16px; color:var(--cs-dim); white-space:nowrap; }
.cs-vp-row{ grid-column:1 / -1; display:flex; align-items:center; gap:10px; margin:8px 0 -2px; padding-top:12px; border-top:1px solid var(--cs-line); font-size:11.63px; color:var(--cs-dim); }
.cs-vp-row b{ font:600 10.23px/1 var(--font); letter-spacing:.14em; text-transform:uppercase; color:var(--cs-dim); }
.cs-vp-row.on b{ color:var(--cs-accent); }
.cs-vp-eq{ margin-left:auto; display:grid; place-items:center; width:22px; height:22px; border-radius:50%; font:600 13.02px/1 var(--font); color:var(--cs-dim); border:1px solid var(--cs-line); }
.cs-vp-row.on .cs-vp-eq{ color:var(--cs-bg); background:var(--cs-accent); border-color:transparent; }
.cs-vp-cell{ min-width:0; }
.cs-vp-frame{ position:relative; aspect-ratio:16/9; border-radius:10px; overflow:hidden; background:var(--cs-ph); border:1px solid var(--cs-line); }
.cs-vp-frame video,.cs-vp-frame img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top center; display:block; }
.cs-changed{ width:100%; border-collapse:collapse; font-size:13.02px; }
.cs .cs-changed th,.cs .cs-changed td{ padding:12px 12px; text-align:left; vertical-align:top; border-bottom:1px solid var(--cs-line); }
.cs .cs-changed thead th{ font:600 10.23px/1 var(--font); letter-spacing:.14em; text-transform:uppercase; padding-top:0; }
.cs .cs-changed thead th:nth-child(2){ color:#7FD6D1; } .cs .cs-changed thead th:nth-child(3){ color:#B4BCD0; }
.cs .cs-changed td{ width:39%; color:var(--cs-body); }
.cs-changed .sw{ display:inline-block; width:10px; height:10px; border-radius:3px; margin-right:8px; vertical-align:-1px; }
@media (max-width:640px){ .cs-ab-col header{ flex-wrap:nowrap; gap:6px; } .cs-ab-col header b{ font-size:22.32px; } .cs-ab-col header span{ font-size:11.16px; } .cs-chosen{ padding:3px 6px; font-size:8.84px !important; } }
@media (max-width:640px){ .cs-vp-pair{ gap:10px; padding:12px; } .cs-vp-pair > header span{ display:none; } .cs-vp-row{ font-size:10.7px; } .cs-changed{ font-size:12.09px; } .cs-changed th,.cs-changed td{ padding:10px 6px; } }
.cs-q-stage{ position:relative; width:100%; }
.cs-q-stage img{ position:absolute; display:block; height:auto; pointer-events:none; }
.cs-q-stage .q-bg{ inset:0; width:100%; }
.cs-q-stage .av{ opacity:0; transform:scale(.55); transition:opacity .4s ease, transform .7s cubic-bezier(.34,1.56,.64,1); transition-delay:calc(var(--g) * .9s); }
.cs-q-stage .bb{ opacity:0; transform:scale(.7); transform-origin:var(--o); transition:opacity .35s ease, transform .55s cubic-bezier(.34,1.4,.64,1); transition-delay:calc(var(--g) * .9s + .35s); }
.cs-q-stage.in .av,.cs-q-stage.in .bb{ opacity:1; transform:none; }
.cs-q-stage.in .av{ animation:qbob 4.5s ease-in-out calc(var(--g) * .9s + 1.2s) infinite; }
@keyframes qbob{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-2.5%) } }
.cs-swot-fig{ width:min(100%, 560px, calc((var(--cs-vh, 760px) - 88px) * 1608 / 1795)); margin-inline:auto; }
.cs-swot{ position:relative; aspect-ratio:1608/1795; container-type:inline-size; border-radius:14px; background:#FAFAFA; overflow:hidden; color:#1E1E1E; }
.cs-swot .sw-title{ position:absolute; left:5.35%; top:5.7%; margin:0; font:500 3.72cqw/1.2 var(--font); letter-spacing:-.01em; color:#1E1E1E; opacity:0; transition:opacity .5s ease; }
.cs-swot .sw-q{ position:absolute; width:43.4%; height:38.8%; border-radius:.6cqw; opacity:0; transform:scale(.96); transition:opacity .5s ease, transform .6s cubic-bezier(.2,.8,.2,1); transition-delay:calc(.5s + var(--i) * .45s); }
.cs-swot .sw-q.s{ left:6.1%; top:15.3%; background:#F0FBF3; border:1px solid #D6F3E0; }
.cs-swot .sw-q.w{ left:50.7%; top:15.3%; background:#FFFCEE; border:1px solid #FBF0C8; }
.cs-swot .sw-q.o{ left:6.2%; top:54.9%; background:#F3F9FF; border:1px solid #D9EBFB; }
.cs-swot .sw-q.t{ left:50.4%; top:54.9%; background:#FFF4F3; border:1px solid #FBDCD8; }
.cs-swot .sw-pill{ position:absolute; display:grid; place-items:center; height:16%; border-radius:999px; font:600 2.23cqw/1 ui-monospace,'SF Mono',Menlo,monospace; color:#1E1E1E; opacity:0; transform:translateY(30%); transition:opacity .4s ease, transform .5s cubic-bezier(.34,1.56,.64,1); transition-delay:calc(.75s + var(--i) * .45s); }
.cs-swot .s .sw-pill,.cs-swot .w .sw-pill{ left:9.8%; top:9.6%; width:50%; }
.cs-swot .o .sw-pill{ left:12%; top:15.1%; width:55%; } .cs-swot .t .sw-pill{ left:9.9%; top:15.1%; width:55%; }
.cs-swot .s .sw-pill{ background:#AEF0CB; } .cs-swot .w .sw-pill{ background:#FFE69F; } .cs-swot .o .sw-pill{ background:#BEE2FF; } .cs-swot .t .sw-pill{ background:#FFC5C0; }
.cs-swot .sw-notes{ position:absolute; left:11.2%; top:32.9%; right:0; display:flex; gap:10.3%; }
.cs-swot .w .sw-notes,.cs-swot .t .sw-notes{ left:9.9%; }
.cs-swot .o .sw-notes{ left:12%; }
.cs-swot .o .sw-notes,.cs-swot .t .sw-notes{ top:40.3%; }
.cs-swot .sw-note{ flex:none; width:38.6%; aspect-ratio:1; padding:3.2%; font:500 1.35cqw/1.45 var(--font); color:#1E1E1E; box-shadow:0 .3cqw .8cqw rgba(0,0,0,.12);
 opacity:0; transform:translateY(-40%) rotate(-6deg); transition:opacity .3s ease, transform .6s cubic-bezier(.34,1.5,.64,1); transition-delay:calc(1s + var(--i) * .45s + var(--j) * .15s); }
.cs-swot .sw-note:nth-child(2){ transform:translateY(-40%) rotate(5deg); }
.cs-swot .s .sw-note{ background:#85E0A3; } .cs-swot .w .sw-note{ background:#FFD966; } .cs-swot .o .sw-note{ background:#80C7FF; } .cs-swot .t .sw-note{ background:#FFAFA3; }
.cs-swot .sw-axes{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; pointer-events:none; }
.cs-swot .ax,.cs-swot .hd{ fill:none; stroke:#1E1E1E; stroke-width:2.2px; stroke-linecap:round; stroke-linejoin:round; vector-effect:non-scaling-stroke; }
.cs-swot .ax{ stroke-dasharray:1; stroke-dashoffset:1; transition:stroke-dashoffset .8s cubic-bezier(.65,0,.35,1) .15s; }
.cs-swot .ax.v{ transition-delay:.3s; }
.cs-swot .hd{ opacity:0; transition:opacity .3s ease .85s; }
.cs-swot.in .sw-title,.cs-swot.in .sw-q,.cs-swot.in .sw-pill,.cs-swot.in .sw-note,.cs-swot.in .hd{ opacity:1; transform:none; }
.cs-swot.in .ax{ stroke-dashoffset:0; }
.cs-swot.in .s .sw-note,.cs-swot.in .w .sw-note:first-child{ animation:swPulse 2.6s ease-in-out 3.2s infinite; }
@keyframes swPulse{ 0%,100%{ box-shadow:0 .3cqw .8cqw rgba(0,0,0,.12) } 50%{ box-shadow:0 0 0 .5cqw color-mix(in srgb, var(--cs-accent) 60%, transparent), 0 .3cqw .8cqw rgba(0,0,0,.12) } }
@media (prefers-reduced-motion: reduce){
 .cs-q-stage .av,.cs-q-stage .bb,.cs-swot *{ transition:none !important; animation:none !important; opacity:1 !important; transform:none !important; stroke-dashoffset:0 !important; }
}
.cs-rv{ opacity:0; transform:translateY(var(--from, 26px)); transition:opacity .6s ease, transform .7s cubic-bezier(.2,.8,.2,1); transition-delay:calc(var(--i, 0) * 140ms); }
.cs-rv.in{ opacity:1; transform:none; }
.cs-goalcard.cs-rv{ transform:translateY(96px); transition:opacity .5s ease, transform 1.1s cubic-bezier(.16,1,.3,1); }
.cs-goalcard.cs-rv.in{ transform:none; }
.cs-flow-arrow{ display:block; width:40px; height:64px; margin:4px auto; color:var(--cs-accent); }
.cs-flow-arrow path{ stroke-dasharray:80; stroke-dashoffset:80; transition:stroke-dashoffset .7s ease; transition-delay:calc(var(--i, 0) * 140ms); }
.cs-flow-arrow.in path{ stroke-dashoffset:0; }
.cs-goal{ display:grid; gap:8px; padding:20px 22px; border-radius:14px; background:color-mix(in srgb, var(--cs-accent) 16%, var(--cs-bg)); border:1px solid color-mix(in srgb, var(--cs-accent) 40%, transparent); }
.cs-goal .cs-kicker{ margin:0; }
.cs-goal p:not(.cs-kicker){ margin:0; color:var(--cs-ink); font-size:14.88px; }
.cs-ab{ display:grid; gap:18px; }
.cs-vote{ display:flex; gap:4px; height:6px; border-radius:6px; }
.cs-vote span{ display:block; border-radius:6px; transform-origin:left; transform:scaleX(0); transition:transform 1.3s cubic-bezier(.65,0,.35,1); }
.cs-vote.in span{ transform:scaleX(1); }
.cs-vote .va{ flex:30 1 0; background:color-mix(in srgb, var(--cs-ink) 26%, transparent); }
.cs-vote .vb{ flex:70 1 0; background:var(--cs-accent); transform-origin:right; transition-delay:.35s; box-shadow:0 0 14px color-mix(in srgb, var(--cs-accent) 55%, transparent); }
.cs-ab-cols{ display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:16px; align-items:start; }
.cs-ab-col{ display:grid; gap:10px; align-content:start; }
.cs-ab-col header{ display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.cs-ab-col header b{ font:600 31.62px/1 var(--font); color:var(--cs-ink); font-variant-numeric:tabular-nums; }
.cs-ab-col header span{ font-size:12.09px; color:var(--cs-dim); }
.cs-ab-col.win header b{ color:var(--cs-accent); }
.cs-ab-col.lose img{ opacity:.72; }
.cs-ab-col img{ width:100%; height:auto; display:block; border-radius:10px; }
.cs-chosen{ padding:4px 9px; border-radius:6px; background:var(--cs-accent); color:var(--cs-bg) !important; font:600 10.23px/1 var(--font) !important; letter-spacing:.06em; text-transform:uppercase; }
.cs-split-svg .p{ transition:fill .5s ease; }
@media (prefers-reduced-motion: reduce){ .cs-rv,.cs-flow-arrow path,.cs-vote span{ transition:none; } .cs-rv,.cs-goalcard.cs-rv{ opacity:1; transform:none; } .cs-flow-arrow path{ stroke-dashoffset:0; } .cs-vote span{ transform:none; } }
.cs-split-svg.people .p{ fill:color-mix(in srgb, var(--cs-ink) 35%, transparent); }
.cs-split-svg.people.in .p.pa{ fill:#F2B544; transition-delay:.4s; }
.cs-split-svg.people.in .p.pb{ fill:var(--cs-accent); transition-delay:.4s; }
.cs-split-svg .dot.da{ fill:#F2B544; } .cs-split-svg .dot.db{ fill:var(--cs-accent); }
@media (prefers-reduced-motion: reduce){ .cs-dc.c1,.cs-dc.c2{ animation:none; } }
@media (prefers-reduced-motion: reduce){
 .cs-morph .after{ animation:none; opacity:1; } .cs-morph-cap .lb{ animation:none; opacity:1; }
 .cs-dc.c3,.cs-dc.c3 .x,.cs-dc.c1 .more,.cs-board{ animation:none; }
}
@media (max-width:767px){
 .cs{ }
 .cs-doc{ padding-bottom:calc(48px + env(safe-area-inset-bottom,0px)); }
}
.cs-thumbs{ display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:12px; max-width:440px; }
.cs-thumb{ display:grid; gap:6px; min-width:0; }
.cs-thumb .cs-frame{ border-radius:8px; }
.cs-thumb span{ font-size:11.16px; color:var(--cs-dim); }
.cs-thumbs-fig figcaption{ max-width:440px; }
.cs-fig.cs-ia{ width:70%; }
@media (max-width:640px){ .cs-fig.cs-ia{ width:100%; } }
.cs .cs-flow-wrap{ --cs-line:#c9ccd5; --cs-body:#4b5563; --cs-accent:#7c3aed; --ok:#22a55a; --no:#ef4444; background:#fff; padding:14px; }
.cs .cs-flow-wrap .lane{ fill:#fbfbfd; stroke:#e4e6ec; }
.cs .cs-flow-wrap .lh rect{ fill:#f1f2f6; }
.cs .cs-flow-wrap .lh text{ fill:#1f2433; font-weight:700; }
.cs .cs-flow-wrap .node.dim{ opacity:.38; }
.cs .cs-flow-wrap .proc{ fill:#fde68a; stroke:#f2c94c; }
.cs .cs-flow-wrap .node.on .proc{ fill:#fcd34d; stroke:#e0ac16; filter:drop-shadow(0 6px 14px rgba(224,172,22,.35)); }
.cs .cs-flow-wrap .dec{ fill:#d9c2ef; stroke:#a77bd6; }
.cs .cs-flow-wrap .node.on .dec{ fill:#e6d4f7; stroke:#7c3aed; filter:drop-shadow(0 6px 14px rgba(124,58,237,.3)); }
.cs .cs-flow-wrap .start{ fill:#bbf0a0; stroke:#6cc94a; }
.cs .cs-flow-wrap .end{ fill:#ff9f80; stroke:#f2643a; }
.cs .cs-flow-wrap .bar{ fill:#1f2433; }
.cs .cs-flow-wrap .node.dim .bar{ fill:#c4c8d2; }
.cs .cs-flow-wrap .nt{ fill:#1f2433; }
.cs .cs-flow-wrap .nt.dim2,.cs-flow-wrap .tiny{ fill:#5b6273; }
.cs .cs-flow-wrap .eb{ stroke:#d4d7df; }
.cs .cs-flow-wrap .eo{ stroke:#4b5563; }
.cs .cs-flow-wrap .eo.go{ stroke:#7c3aed; }
.cs .cs-flow-wrap .eo.ok{ stroke:#22a55a; }
.cs .cs-flow-wrap .rej{ stroke:#ef4444; opacity:.25; }
.cs .cs-flow-wrap .rej.on{ opacity:1; }
.cs .cs-flow-wrap .tag{ opacity:.35; }
.cs .cs-flow-wrap .tag.on{ opacity:1; }
.cs .cs-flow-wrap .tag text{ fill:#fff !important; }
.cs .cs-flow-wrap [data-t="imp"] rect{ fill:#7c3aed !important; }
.cs .cs-flow-wrap [data-t="dom"] rect{ fill:#4b5563 !important; stroke:none !important; }
.cs .cs-flow-wrap [data-t="rej"] rect{ fill:#ef4444 !important; }
.cs .cs-flow-wrap [data-t="yes"] rect{ fill:#22a55a !important; }
.cs .cs-flow-wrap .tok{ fill:#7c3aed; filter:drop-shadow(0 0 6px rgba(124,58,237,.6)); }
.cs .cs-flow-wrap .sd{ fill:#e5d8f5; stroke:#a77bd6; stroke-width:1.2; }
.cs .cs-flow-wrap .sd.on{ fill:#22a55a; stroke:#22a55a; }
.cs-doc{ background:var(--cs-docbg, none); }
.cs-ok{ --ok:#86D9A6; --warn:#F2B544; --no:#FF8080; }
.cs-flow,.cs-sign{ --ok:#86D9A6; --warn:#F2B544; --no:#FF8080; }
.cs-tree{ display:grid; gap:14px; justify-items:center; padding:24px 16px; border-radius:14px; background:var(--cs-raise); }
.cs-tree .root{ padding:12px 22px; border-radius:10px; background:color-mix(in srgb, var(--cs-accent) 24%, var(--cs-bg)); border:1px solid color-mix(in srgb, var(--cs-accent) 55%, transparent); color:var(--cs-ink); font:600 13.95px/1.2 var(--font); }
.cs-tree .stem{ width:1px; height:18px; background:color-mix(in srgb, var(--cs-accent) 50%, transparent); }
.cs-tree .kids{ display:grid; grid-template-columns:repeat(4, minmax(0, 1fr)); gap:12px; width:100%; position:relative; padding-top:18px; }
.cs-tree .kids::before{ content:''; position:absolute; top:0; left:12.5%; right:12.5%; height:1px; background:color-mix(in srgb, var(--cs-accent) 50%, transparent); }
.cs-tree .col{ display:grid; gap:8px; align-content:start; justify-items:stretch; position:relative; }
.cs-tree .col::before{ content:''; position:absolute; top:-18px; left:50%; width:1px; height:18px; background:color-mix(in srgb, var(--cs-accent) 50%, transparent); }
.cs-tree .menu{ padding:10px 8px; border-radius:8px; text-align:center; background:var(--cs-bg); border:1px solid color-mix(in srgb, var(--cs-accent) 45%, transparent); color:var(--cs-ink); font:600 12.56px/1.25 var(--font); }
.cs-tree .sub{ padding:8px 6px; border-radius:7px; text-align:center; background:color-mix(in srgb, var(--cs-accent) 10%, var(--cs-bg)); color:var(--cs-body); font:500 11.63px/1.25 var(--font); }
@media (max-width:640px){ .cs-tree .kids{ grid-template-columns:repeat(2, minmax(0, 1fr)); row-gap:22px; } .cs-tree .kids::before,.cs-tree .col::before{ display:none; } .cs-tree .kids{ padding-top:0; } }
.cs-mo{ display:grid; gap:12px; }
.cs-mo-bar{ display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; }
.cs-mo-bar .cs-label{ letter-spacing:.06em; }
.cs-mo-btns{ display:flex; gap:8px; flex-wrap:wrap; }
.cs-mo-btn{ height:34px; padding:0 14px; border-radius:999px; border:1px solid var(--cs-line); background:none; color:var(--cs-ink); font:500 11.63px/1 var(--font); cursor:pointer; }
.cs-mo-btn:hover,.cs-mo-btn:focus-visible{ background:rgba(255,255,255,.08); }
.cs-mo-btn.no{ color:var(--no); border-color:color-mix(in srgb, var(--no) 40%, transparent); }
.cs-mo-cap{ display:flex; align-items:center; gap:12px; min-height:46px; padding:10px 14px; border-radius:12px; background:color-mix(in srgb, var(--cs-accent) 10%, transparent); border:1px solid color-mix(in srgb, var(--cs-accent) 24%, transparent); color:var(--cs-ink); font-size:13.49px; line-height:1.45; transition:background-color .3s, border-color .3s; }
.cs-mo-cap .n{ flex:none; min-width:26px; height:26px; padding:0 6px; border-radius:13px; display:grid; place-items:center; background:var(--cs-accent); color:var(--cs-bg); font:700 11.16px/1 var(--font); }
.cs-mo-cap.no{ background:color-mix(in srgb, var(--no) 12%, transparent); border-color:color-mix(in srgb, var(--no) 35%, transparent); }
.cs-mo-cap.no .n{ background:var(--no); }
.cs-mo-cap.ok{ background:color-mix(in srgb, var(--ok) 12%, transparent); border-color:color-mix(in srgb, var(--ok) 35%, transparent); }
.cs-mo-cap.ok .n{ background:var(--ok); }
.cs-mo-dots{ display:flex; gap:6px; justify-content:center; }
.cs-mo-dots button{ width:8px; height:8px; padding:0; border:0; border-radius:4px; background:var(--cs-line); cursor:pointer; transition:width .25s, background-color .25s; }
.cs-mo-dots button.on{ width:22px; background:var(--cs-accent); }
.cs-flow-wrap{ overflow-x:auto; border-radius:14px; }
.cs-flow svg{ display:block; width:100%; min-width:640px; height:auto; }
.cs-flow .lane{ fill:color-mix(in srgb, var(--cs-raise) 80%, transparent); stroke:var(--cs-line); }
.cs-flow .lh rect{ fill:var(--cs-raise); }
.cs-flow .lh text{ fill:var(--cs-ink); font:600 13.95px var(--font); text-anchor:middle; }
.cs-flow .node{ transition:opacity .4s; }
.cs-flow .node.dim{ opacity:.32; }
.cs-flow .proc{ fill:var(--cs-bg); stroke:var(--cs-line); stroke-width:1.5; transition:fill .35s, stroke .35s; }
.cs-flow .node.on .proc{ fill:color-mix(in srgb, var(--cs-accent) 20%, var(--cs-bg)); stroke:var(--cs-accent); }
.cs-flow .dec{ fill:color-mix(in srgb, var(--cs-accent) 8%, var(--cs-bg)); stroke:color-mix(in srgb, var(--cs-accent) 50%, transparent); stroke-width:1.5; transition:fill .35s, stroke .35s; }
.cs-flow .node.on .dec{ fill:color-mix(in srgb, var(--cs-accent) 30%, var(--cs-bg)); stroke:var(--cs-accent); }
.cs-flow .start{ fill:color-mix(in srgb, var(--ok) 25%, var(--cs-bg)); stroke:var(--ok); stroke-width:2; }
.cs-flow .end{ fill:color-mix(in srgb, var(--cs-accent) 32%, var(--cs-bg)); stroke:var(--cs-accent); stroke-width:2; }
.cs-flow .bar{ fill:var(--cs-ink); }
.cs-flow .nt{ fill:var(--cs-ink); font:600 12.09px var(--font); text-anchor:middle; dominant-baseline:middle; }
.cs-flow .nt.sm{ font-size:10.7px; }
.cs-flow .nt.dim2{ fill:var(--cs-dim); font-weight:500; }
.cs-flow .tiny{ fill:var(--cs-dim); font:500 10.23px var(--font); text-anchor:middle; }
.cs-flow .eb{ fill:none; stroke:var(--cs-line); stroke-width:2; }
.cs-flow .eo{ fill:none; stroke:var(--cs-body); stroke-width:2.6; stroke-linecap:round; }
.cs-flow .eo.go{ stroke:var(--cs-accent); }
.cs-flow .eo.ok{ stroke:var(--ok); }
.cs-flow .rej{ fill:none; stroke:var(--no); stroke-width:2; stroke-dasharray:7 6; opacity:.22; transition:opacity .3s; }
.cs-flow .rej.on{ opacity:1; animation:csMarch .6s linear infinite; }
@keyframes csMarch{ to{ stroke-dashoffset:-13 } }
.cs-flow .tag{ opacity:.3; transition:opacity .3s; }
.cs-flow .tag.on{ opacity:1; }
.cs-flow .tag text{ font:700 10.23px var(--font); text-anchor:middle; dominant-baseline:middle; }
.cs-flow .tok{ fill:var(--cs-accent); filter:drop-shadow(0 0 6px var(--cs-accent)); }
.cs-flow .sd{ fill:var(--cs-line); transition:fill .25s; }
.cs-flow .sd.on{ fill:var(--ok); }
.cs-sign .track{ position:relative; display:grid; grid-template-columns:repeat(5, minmax(0, 1fr)); gap:8px; padding:22px 8px 6px; border-radius:14px; background:var(--cs-raise); }
.cs-sign .rail{ position:absolute; left:10%; right:10%; top:62px; height:3px; border-radius:2px; background:var(--cs-line); }
.cs-sign .rail i{ display:block; height:100%; width:0; border-radius:2px; background:var(--ok); transition:width .7s cubic-bezier(.4,0,.2,1), background-color .3s; }
.cs-sign .rail.no i{ background:var(--no); }
.cs-sign .who{ position:relative; z-index:1; display:grid; justify-items:center; gap:8px; text-align:center; padding-bottom:14px; }
.cs-sign .av{ position:relative; width:76px; height:76px; border-radius:50%; display:grid; place-items:center; background:var(--cs-bg); border:2px solid var(--cs-line); color:var(--cs-body); transition:border-color .3s, transform .3s, background-color .3s, color .3s; }
.cs-sign .req .av{ width:58px; height:58px; margin-top:9px; }
.cs-sign .av svg{ width:30px; height:30px; fill:none; stroke:currentColor; stroke-width:1.6; stroke-linecap:round; stroke-linejoin:round; }
.cs-sign .req .av svg{ width:24px; height:24px; }
.cs-sign .no-step{ position:absolute; top:-4px; left:-4px; width:22px; height:22px; border-radius:50%; display:grid; place-items:center; background:var(--cs-ink); color:var(--cs-bg); font:700 10.23px/1 var(--font); border:2px solid var(--cs-raise); }
.cs-sign b{ color:var(--cs-ink); font:600 13.02px/1.2 var(--font); }
.cs-sign .who span{ min-height:16px; color:var(--cs-dim); font:500 11.16px/1.3 var(--font); transition:color .3s; }
.cs-sign .bell,.cs-sign .chk{ position:absolute; display:grid; place-items:center; border-radius:50%; border:2px solid var(--cs-raise); transform:scale(0); transition:transform .3s cubic-bezier(.3,1.6,.5,1); }
.cs-sign .bell{ top:-6px; right:-6px; width:28px; height:28px; background:var(--warn); color:var(--cs-bg); }
.cs-sign .bell svg{ width:15px; height:15px; stroke-width:2; }
.cs-sign .chk{ bottom:-4px; right:-4px; width:26px; height:26px; color:var(--cs-bg); font:800 12.09px/1 var(--font); }
.cs-sign .signing .av{ border-color:var(--cs-accent); color:var(--cs-ink); transform:scale(1.06); animation:csRing 1s ease-out infinite; }
.cs-sign .signing span{ color:var(--cs-accent); }
@keyframes csRing{ 0%{ box-shadow:0 0 0 0 color-mix(in srgb, var(--cs-accent) 55%, transparent) } 100%{ box-shadow:0 0 0 14px transparent } }
.cs-sign .ringing .bell{ transform:scale(1); animation:csDing .9s ease-in-out; }
.cs-sign .ringing .av{ border-color:var(--warn); }
.cs-sign .ringing span{ color:var(--warn); }
@keyframes csDing{ 0%,100%{ rotate:0deg } 12%{ rotate:22deg } 26%{ rotate:-20deg } 40%{ rotate:15deg } 55%{ rotate:-11deg } 70%{ rotate:6deg } 85%{ rotate:-3deg } }
.cs-sign .done .av{ border-color:var(--ok); background:color-mix(in srgb, var(--ok) 14%, var(--cs-bg)); color:var(--cs-ink); }
.cs-sign .done span{ color:var(--ok); }
.cs-sign .done .chk{ transform:scale(1); background:var(--ok); }
.cs-sign .rejected .av{ border-color:var(--no); background:color-mix(in srgb, var(--no) 14%, var(--cs-bg)); }
.cs-sign .rejected span{ color:var(--no); }
.cs-sign .rejected .chk{ transform:scale(1); background:var(--no); }
.cs-sign .back .av{ border-color:var(--no); animation:csShake .45s; }
.cs-sign .back span{ color:var(--no); }
@keyframes csShake{ 25%{ transform:translateX(-5px) } 75%{ transform:translateX(5px) } }
.cs-sign .legend{ display:flex; gap:16px; flex-wrap:wrap; font-size:11.63px; color:var(--cs-dim); }
.cs-sign .legend i{ display:inline-block; width:9px; height:9px; border-radius:50%; margin-right:6px; vertical-align:-1px; }
@media (max-width:640px){
 .cs-sign .track{ grid-template-columns:repeat(3, minmax(0, 1fr)); row-gap:18px; }
 .cs-sign .rail{ display:none; }
}
.cs-sign .who .av > span{ min-height:0; color:var(--cs-bg); }
.cs-sign .who .av > .bell{ color:var(--cs-bg); }
@media (prefers-reduced-motion: reduce){ .cs-flow *,.cs-sign *{ animation:none !important; transition:none !important; } }
.cs{ --font:'Geist','Onest',system-ui,-apple-system,'Segoe UI',sans-serif; position:relative; display:block; color:var(--cs-body); background:var(--cs-bg); }
.cs .cs-doc{ background:var(--cs-docbg, none); }
.cs .cs-prog{ position:sticky; top:0; z-index:6; padding-right:76px; }
.cs.site{ --font:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif; }
.cs.site .cs-name{ font-family:'Cormorant Garamond',Georgia,serif !important; font-weight:300 !important; letter-spacing:-.01em !important; }
.cs.site .cs-sub{ font-family:'Cormorant Garamond',Georgia,serif; font-style:italic; }
.cs.site h2{ font-family:'Cormorant Garamond',Georgia,serif; font-weight:400; font-size:clamp(26.04px,2.98vw,33.48px); letter-spacing:-.005em; }
.cs.site .cs-kicker{ letter-spacing:.3em; }
.cs.site .cs-stat b{ font-family:'Cormorant Garamond',Georgia,serif; font-weight:400; }
.cs.site .cs-mo-btn:hover,.cs.site .cs-mo-btn:focus-visible{ background:rgba(15,31,61,.06); }

/* every block sits on the same centre line */
.cs .cs-col{ margin-inline:auto !important; }
.cs .cs-fig.wide,.cs .cs-gal.wide{ max-width:1040px; margin-inline:auto !important; }
.cs .cs-fig.cs-ia{ margin-inline:auto !important; }
.cs .cs-thumbs,.cs .cs-thumbs-fig figcaption{ margin-inline:auto; }
.cs .cs-fig.narrow figcaption,.cs .cs-cmp-cap{ text-align:center; }
/* key color: each case gets its own glow, title tint and accent surfaces */
.cs.site .cs-doc{ background:
  radial-gradient(130% 680px at 50% -40px, color-mix(in srgb, var(--cs-accent) 24%, transparent), transparent 72%),
  radial-gradient(90% 420px at 100% 38%, color-mix(in srgb, var(--cs-accent) 9%, transparent), transparent 70%),
  radial-gradient(90% 420px at 0% 68%, color-mix(in srgb, var(--cs-accent) 8%, transparent), transparent 70%),
  radial-gradient(130% 560px at 50% 100%, color-mix(in srgb, var(--cs-accent) 16%, transparent), transparent 72%) !important; }
.cs.site .cs-name{ background:linear-gradient(100deg, var(--cs-ink) 20%, var(--cs-accent) 95%); -webkit-background-clip:text; background-clip:text; color:transparent !important; }
.cs.site .cs-stat{ background:linear-gradient(160deg, color-mix(in srgb, var(--cs-accent) 13%, var(--cs-raise)), var(--cs-raise) 70%); }
.cs.site .cs-refl div,.cs.site .cs-side{ background:linear-gradient(170deg, color-mix(in srgb, var(--cs-accent) 7%, var(--cs-bg)), var(--cs-bg)); }
.cs.site .cs-tag{ border-color:color-mix(in srgb, var(--cs-accent) 35%, transparent); background:color-mix(in srgb, var(--cs-accent) 7%, transparent); }
.cs.site .cs-prog{ background:color-mix(in srgb, var(--cs-bg) 88%, transparent); -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px); }

.cs.site .cs-kicker::before{ content:none !important; display:none !important; }
/* subheaders: the line you can read alone, so it is set in the sans, heavier, and in the case's key color */
.cs.site h2,.cs.site .cs-sec h2,.cs.site .cs-goal h2,.cs.site .cs-refl h2{
  font-family:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif !important; font-weight:600 !important;
  font-size:clamp(21px,2.2vw,25px) !important; line-height:1.32 !important; letter-spacing:-.012em !important;
  font-variant-numeric:lining-nums; color:color-mix(in srgb, var(--cs-accent) 78%, var(--cs-ink)) !important; text-wrap:balance; }
.cs.site .cs-sh{ font-family:'DM Sans',system-ui,sans-serif !important; font-weight:600 !important; font-size:16.5px !important; line-height:1.4 !important;
  color:color-mix(in srgb, var(--cs-accent) 60%, var(--cs-ink)) !important; }
.cs.site .cs-kicker{ font-weight:600; color:color-mix(in srgb, var(--cs-accent) 70%, var(--cs-dim)); }
.cs.site .cs-sec{ gap:16px; }

.cs.site h2,.cs.site .cs-sec h2,.cs.site .cs-goal h2,.cs.site .cs-refl h2{
  font-family:'Newsreader',Georgia,serif !important; font-weight:500 !important; font-optical-sizing:auto;
  font-size:clamp(24px,2.5vw,28px) !important; line-height:1.24 !important; letter-spacing:-.01em !important; font-variant-numeric:lining-nums; }
.cs.site .cs-sh{ font-family:'Newsreader',Georgia,serif !important; font-weight:500 !important; font-size:19.5px !important; line-height:1.3 !important; letter-spacing:-.005em; }

.cs.site .cs-kicker,.cs.site .cs-goal .cs-kicker{ color:var(--cs-k2) !important; font-weight:600; }
.cs.site h2,.cs.site .cs-sec h2,.cs.site .cs-goal h2,.cs.site .cs-refl h2{ color:var(--cs-hd) !important; }
.cs.site .cs-sh{ color:var(--cs-hd) !important; }

`;var SITE_THEMES={"reading":{"bg":"#F6F3FB","raise":"#EEE8F8","ph":"#ECE6F6","line":"rgba(122,95,192,.16)","accent":"#7A5FC0","ink":"#1E1838","body":"#4A4560","dim":"rgba(30,24,56,.55)","docbg":"none","k2":"#8A8499","hd":"#6D3FE0"},"knoc":{"bg":"#F2F7F3","raise":"#E5F0E8","ph":"#E3EEE6","line":"rgba(62,138,102,.18)","accent":"#3E8A66","ink":"#0F2A20","body":"#435A50","dim":"rgba(15,42,32,.55)","docbg":"none","k2":"#7F8C86","hd":"#12935E"},"hanwha":{"bg":"#FBF4EE","raise":"#F6E8DC","ph":"#F4E5D8","line":"rgba(217,105,42,.18)","accent":"#D2652A","ink":"#2A1712","body":"#5A463E","dim":"rgba(42,23,18,.55)","docbg":"none","k2":"#8E8380","hd":"#E8590C"},"health":{"bg":"#F0F7F8","raise":"#E2EFF1","ph":"#DFEDEF","line":"rgba(47,143,150,.18)","accent":"#2F8F96","ink":"#0E2A2E","body":"#43585B","dim":"rgba(14,42,46,.55)","docbg":"none","k2":"#7E8A8C","hd":"#0E9AA3"}};function scrollParentOf(el){let p=el.parentElement;while(p&&p!==document.body){const s=getComputedStyle(p);if(/(auto|scroll)/.test(s.overflowY)&&p.scrollHeight>p.clientHeight+1)return p;p=p.parentElement}return window}function mount(host,prog,doc,c,still){const reduce=still?{matches:true}:window.matchMedia("(prefers-reduced-motion: reduce)");const esc=s=>String(s).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[ch]);const rich=s=>esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");const csImg=(src,alt,ratio)=>`<div class="cs-frame" style="--r:${ratio||"16/10"}"><img src="${src}" alt="${esc(alt||"")}" loading="lazy" decoding="async"></div>`;const csAspect=r=>{const m=String(r||"").split("/").map(Number);return m.length===2&&m[1]?m[0]/m[1]:1.6};const ICON={doc:'<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',health:'<circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/>',safety:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>',env:'<path d="M5 19c0-8 6-13 14-13 0 8-5 13-13 13z"/><path d="M5 19l7-7"/>',head:'<path d="M12 4l8 6H4z"/><path d="M4 20h16M7 10v8M12 10v8M17 10v8"/>',bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>'};const svgI=k=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[k]}</svg>`;const _split=b=>{const still2=reduce.matches;const top="M150,110 L330,110 C430,110 440,52 560,52",bot="M150,110 L330,110 C430,110 440,168 560,168";const dots=(path,n,delay)=>Array.from({length:n},(_,k)=>still2?"":`<circle class="dot" r="3.2" opacity="0"><animateMotion dur="4.2s" begin="${(delay+k*4.2/n).toFixed(2)}s" repeatCount="indefinite" path="${path}" keyPoints="0;1" keyTimes="0;1" calcMode="linear"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.85;1" dur="4.2s" begin="${(delay+k*4.2/n).toFixed(2)}s" repeatCount="indefinite"/></circle>`).join("");const src=Array.from({length:14},(_,k)=>`<rect class="src" x="${(14+k%5*22+k*7%9).toFixed(0)}" y="${(70+Math.floor(k/5)*26+k*11%13).toFixed(0)}" width="14" height="10" rx="2" opacity="${(.35+k%4*.15).toFixed(2)}"/>`).join("");return`<figure class="cs-split-fig cs-col" aria-label="${esc(b.label||"Interview notes split into two user groups: headquarters needs control, branches need access")}">
          <svg class="cs-split-svg" viewBox="0 0 760 220" aria-hidden="true">${src}
            <path class="rail" d="${top}"/><path class="rail" d="${bot}"/><path class="rail hot" d="${top}"/><path class="rail hot" d="${bot}"/>
            ${dots(top,5,0)}${dots(bot,5,.42)}
            <circle cx="330" cy="110" r="5" fill="var(--cs-accent)"/>
            <text class="small" x="14" y="196">${esc(b.src||"25 interviews, one user group")}</text>
            <text class="small" x="300" y="138">${esc(b.mid||"affinity diagram")}</text>
            <text class="lead" x="576" y="48">${esc((b.a||["Headquarters"])[0])}</text><text x="576" y="68">${esc((b.a||[0,"needs control"])[1])}</text>
            <text class="lead" x="576" y="164">${esc((b.b||["Branch offices"])[0])}</text><text x="576" y="184">${esc((b.b||[0,"need access"])[1])}</text>
          </svg></figure>`};const CS_BLOCK={head:b=>`<header class="cs-head cs-col">
      <h1 id="csTitle" class="cs-name">${esc(b.title)}</h1>
      <p class="cs-sub">${esc(b.sub)}</p>
      <div class="cs-tags">${b.tags.map(t=>`<span class="cs-tag">${esc(t)}</span>`).join("")}</div>
      <dl class="cs-facts">${b.facts.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    </header>`,fig:b=>`<figure class="cs-fig${b.wide?" wide":" cs-col"}${b.narrow?" narrow":""}">${csImg(b.img,b.alt,b.ratio)}${b.cap?`<figcaption>${rich(b.cap)}</figcaption>`:""}</figure>`,text:b=>`<section class="cs-sec cs-col">${b.k?`<p class="cs-kicker">${esc(b.k)}</p>`:""}${b.h?`<h2>${esc(b.h)}</h2>`:""}${b.sh?`<h3 class="cs-sh">${esc(b.sh)}</h3>`:""}${(b.p||[]).map(x=>`<p>${rich(x)}</p>`).join("")}</section>`,stats:b=>`<section class="cs-sec cs-col"><div class="cs-stats">${b.items.map(([n,t])=>`<div class="cs-stat"><b>${esc(n)}</b><span>${esc(t)}</span></div>`).join("")}</div>${b.note?`<p class="cs-note">${esc(b.note)}</p>`:""}</section>`,process:b=>`<section class="cs-sec cs-col"><p class="cs-kicker">${esc(b.k)}</p><ol class="cs-proc">${b.steps.map(([h,d])=>`<li><b>${esc(h)}</b><span>${esc(d)}</span></li>`).join("")}</ol>${b.note?`<p class="cs-proc-note">${esc(b.note)}</p>`:""}</section>`,gallery:b=>`<div class="cs-gal wide${b.figs.length>2?" g2":""}">${b.figs.map(([src,cap,r])=>`<figure class="cs-fig" style="--a:${csAspect(r||"16/9").toFixed(3)}"><div class="cs-frame${r?"":" cover"}" style="--r:${r||"16/9"}"><img src="${src}" alt="${esc(cap)}" loading="lazy" decoding="async"></div><figcaption>${esc(cap)}</figcaption></figure>`).join("")}</div>`,duo:b=>`<div class="cs-gal wide">${b.figs.map(([src,cap])=>`<figure class="cs-fig">${csImg(src,cap,"1.86/1")}<figcaption><span class="cs-label">${esc(cap)}</span></figcaption></figure>`).join("")}</div>`,persp:b=>`<section class="cs-sec cs-col"><div class="cs-split">${b.cards.map(([h,items],i)=>`<div class="cs-side cs-rv" style="--i:${i};--from:-30px"><h3>${esc(h)}</h3><ul>${items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}</div>
      <div class="cs-goal cs-rv" style="--i:${b.cards.length}"><p class="cs-kicker">Goal</p><p>${rich(b.insight.replace(/^Goal:\s*/,""))}</p></div></section>`,refl:b=>`<section class="cs-sec cs-col"><p class="cs-kicker">${esc(b.k)}</p>${b.h?`<h2>${esc(b.h)}</h2>`:""}<div class="cs-refl">${b.items.map(([h,p],i)=>`<div class="cs-rv" style="--i:${i}"><h3>${esc(h)}</h3><p>${rich(p)}</p></div>`).join("")}</div></section>`,split:b=>{if(!b.people)return _split(b);const[nA,nB]=b.people,still2=reduce.matches,total=nA+nB;const ppl=Array.from({length:total},(_,k)=>{const cx=22+k%5*24,cy=52+Math.floor(k/5)*26,hq=k<nA;return`<g class="p ${hq?"pa":"pb"}"><circle cx="${cx}" cy="${cy-6}" r="4.2"/><path d="M${cx-7} ${cy+8}a7 7 0 0 1 14 0z"/></g>`}).join("");const top="M150,110 L330,110 C430,110 440,52 560,52",bot="M150,110 L330,110 C430,110 440,168 560,168";const dots=(path,n,delay,cls)=>still2?"":Array.from({length:n},(_,k)=>`<circle class="dot ${cls}" r="3.4" opacity="0"><animateMotion dur="4.2s" begin="${(delay+k*4.2/n).toFixed(2)}s" repeatCount="indefinite" path="${path}"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.85;1" dur="4.2s" begin="${(delay+k*4.2/n).toFixed(2)}s" repeatCount="indefinite"/></circle>`).join("");return`<figure class="cs-split-fig cs-col" aria-label="${esc(b.label)}">
    <svg class="cs-split-svg people" viewBox="0 0 760 220" aria-hidden="true">${ppl}
      <path class="rail" d="${top}"/><path class="rail" d="${bot}"/><path class="rail hot" d="${top}"/><path class="rail hot" d="${bot}"/>
      ${dots(top,3,0,"da")}${dots(bot,6,.35,"db")}
      <circle cx="330" cy="110" r="5" fill="var(--cs-accent)"/>
      <text class="small" x="14" y="196">${esc(b.src)}</text><text class="small" x="300" y="138">${esc(b.mid)}</text>
      <text class="lead" x="576" y="48">${esc(b.a[0])}</text><text x="576" y="68">${esc(b.a[1])}</text>
      <text class="lead" x="576" y="164">${esc(b.b[0])}</text><text x="576" y="184">${esc(b.b[1])}</text>
    </svg></figure>`},compare:b=>`<figure class="cs-fig wide"><div class="cs-cmp${b.doc?" doc":""}${b.hint?" glide":""}" style="--x:${b.start??50}%;${b.ratio?`aspect-ratio:${b.ratio};--ar:calc(${b.ratio})`:""}">
      <img class="b" src="${b.b}" alt="${esc(b.bl)}" loading="lazy"><img class="a" src="${b.a}" alt="${esc(b.al)}" loading="lazy">
      <span class="lay la"><span class="cs-label tag">${esc(b.al)}</span></span><span class="lay lb"><span class="cs-label tag">${esc(b.bl)}</span></span>
      <input type="range" min="0" max="100" value="${b.start??50}" step="1" aria-label="Drag to compare ${esc(b.al)} and ${esc(b.bl)}">
      <span class="bar"></span><span class="knob" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg></span>
    </div>${b.cap?`<figcaption class="cs-cmp-cap">${rich(b.cap)}</figcaption>`:""}</figure>`,morph:b=>`<figure class="cs-fig cs-col"><div class="cs-frame cs-morph" style="--r:${b.ratio}"><img src="${b.a}" alt="${esc(b.la||"Option A")}" loading="lazy"><img class="after" src="${b.b}" alt="${esc(b.lb||"Revised layout")}" loading="lazy"></div>
      <figcaption class="cs-morph-cap"><span class="cs-label lb a">${esc(b.la||"Option A")}</span><span aria-hidden="true">\u2192</span><span class="cs-label lb b">${esc(b.lb||"Revised \xB7 key data at the centre")}</span></figcaption></figure>`,demo:b=>`<figure class="cs-fig cs-col"><div class="cs-demo" aria-label="Demo: removing a card with \xD7, opening a task board with +more, and moving a card by double-click">
      <div class="cs-dc c1"><div class="hd"><span>Risk assessment</span><span class="more">+more</span></div><i></i><i></i><i></i><span class="x">\xD7</span></div>
      <div class="cs-dc c2"><div class="hd"><span>Work permits</span><span class="more">+more</span></div><i></i><i></i><i></i><span class="x">\xD7</span></div>
      <div class="cs-dc c3"><div class="hd"><span>Contractors</span><span class="more">+more</span></div><i></i><i></i><i></i><span class="x">\xD7</span></div>
      <div class="cs-board" aria-hidden="true"><b>Risk assessment \xB7 task board</b><span></span><span></span><span></span><span></span></div>
    </div><figcaption class="cs-demo-cap">\xD7 hides a card a team doesn\u2019t need, +more opens that menu\u2019s task board, and a double-click moves a card.</figcaption></figure>`,crbars:b=>`<figure class="cs-fig cs-col"><div class="cs-cr" aria-label="My Score and My Level are replaced by My C.R. Rate compared with the average C.R. Rate">
      <div class="cs-cr-row me"><span class="lab"><span class="old">My Score</span><span class="new">My C.R. Rate</span></span><span class="track"><span class="fill" style="display:block"></span></span><span class="val"><span class="old">1,234</span><span class="new">82%</span></span></div>
      <div class="cs-cr-row avg"><span class="lab"><span class="old">My Level</span><span class="new">Average C.R. Rate</span></span><span class="track"><span class="fill" style="display:block"></span></span><span class="val"><span class="old">Lv.5</span><span class="new">64%</span></span></div>
    </div><figcaption class="cs-cr-cap">Raw score and level become a comparison: how carefully this student reads, against the level average. Values are illustrative.</figcaption></figure>`,ab:b=>`<figure class="cs-fig wide cs-ab" aria-label="A/B test: version A ${b.pa}%, version B ${b.pb}%">
      <div class="cs-vote cs-rv" style="--from:0px;flex-direction:row"><span class="va" style="flex-grow:${b.pa}"></span><span class="vb" style="flex-grow:${b.pb}"></span></div>
      <div class="cs-ab-cols">
        <div class="cs-ab-col lose"><header><b data-to="${b.pa}">${b.pa}%</b><span>Version A</span></header><img src="${b.a}" alt="Version A landing page" loading="lazy"></div>
        <div class="cs-ab-col win"><header><b data-to="${b.pb}">${b.pb}%</b><span>Version B</span><span class="cs-chosen">Chosen</span></header><img src="${b.b}" alt="Version B landing page" loading="lazy"></div>
      </div>${b.cap?`<figcaption>${rich(b.cap)}</figcaption>`:""}</figure>`,vpair:b=>{const head=x=>`<header><i style="background:${x.c}"></i><b>${esc(x.who)}</b><span>${esc(x.role)}</span></header>`;const old=x=>`<div class="cs-vp-frame old"><img src="${x.old}" alt="${esc(x.who)} main page before: the same layout for both roles" loading="lazy" decoding="async"></div>`;const vid=x=>`<div class="cs-vp-frame">${x.src?`<video src="${x.src}" muted loop playsinline preload="metadata" aria-label="${esc(x.who)} main page after the redesign, screen recording"></video>`:""}</div>`;const rows=b.changed.map(([k,s1,t],i)=>`<tr class="cs-rv" style="--i:${i}"><th scope="row">${esc(k)}</th><td>${s1}</td><td>${t}</td></tr>`).join("");return`<figure class="cs-fig wide cs-vp"><div class="cs-vp-pair">
        ${head(b.a)}${head(b.b)}
        <p class="cs-vp-row"><b>Before</b>one shared page, two audiences <span class="cs-vp-eq" aria-hidden="true">=</span></p>
        <div class="cs-vp-cell cs-rv" style="--i:0">${old(b.a)}</div><div class="cs-vp-cell cs-rv" style="--i:1">${old(b.b)}</div>
        <p class="cs-vp-row on"><b>After</b>a main page for each role <span class="cs-vp-eq" aria-hidden="true">\u2260</span></p>
        <div class="cs-vp-cell cs-rv" style="--i:2">${vid(b.a)}</div><div class="cs-vp-cell cs-rv" style="--i:3">${vid(b.b)}</div>
      </div>
      <table class="cs-changed"><thead><tr><th></th><th scope="col">${esc(b.a.who)}</th><th scope="col">${esc(b.b.who)}</th></tr></thead><tbody>${rows}</tbody></table></figure>`},raw:b=>b.html,swot:b=>`<figure class="cs-fig cs-col cs-swot-fig"><div class="cs-swot cs-anim" role="img" aria-label="${esc(b.title)}: ${b.q.map(([,h,n])=>`${h}: ${n.join(", ")}`).join(". ")}">
      <p class="sw-title">${esc(b.title)}</p>
      ${b.q.map(([k,h,notes],i)=>`<div class="sw-q ${k}" style="--i:${i}"><span class="sw-pill">${esc(h)}</span><div class="sw-notes">${notes.map((n,j)=>`<span class="sw-note" style="--j:${j}">${esc(n)}</span>`).join("")}</div></div>`).join("")}
      <svg class="sw-axes" viewBox="0 0 1608 1795" preserveAspectRatio="none" aria-hidden="true"><path class="ax h" d="M94 979H1513" pathLength="1"/><path class="ax v" d="M798 287V1685" pathLength="1"/>
        <path class="hd h" d="M126 947L94 979l32 32M1481 947l32 32-32 32"/><path class="hd v" d="M766 319l32-32 32 32M766 1653l32 32 32-32"/></svg>
    </div>${b.cap?`<figcaption>${rich(b.cap)}</figcaption>`:""}</figure>`,goalcard:b=>`<section class="cs-sec cs-col"><div class="cs-goal cs-goalcard cs-rv"><p class="cs-kicker">${esc(b.k)}</p><h2>${esc(b.h)}</h2>${(b.p||[]).map(x=>`<p>${rich(x)}</p>`).join("")}</div></section>`,tree:b=>`<figure class="cs-fig cs-col"><div class="cs-tree" role="img" aria-label="${esc(b.label||"Information architecture")}">
        <div class="root">${esc(b.root)}</div><div class="stem"></div>
        <div class="kids">${b.menus.map(([m,subs])=>`<div class="col"><div class="menu">${esc(m)}</div>${(subs||[]).map(s=>`<div class="sub">${esc(s)}</div>`).join("")}</div>`).join("")}</div>
      </div>${b.cap?`<figcaption>${rich(b.cap)}</figcaption>`:""}</figure>`,flow:b=>`<figure class="cs-fig wide cs-mo cs-flow" data-motion="flow" aria-label="Animated flow: SAP request, ESH review and 4-step sign-off, MD code generation">
      <div class="cs-mo-bar"><span class="cs-label">${esc(b.label||"Overall flow")}</span><div class="cs-mo-btns"><button type="button" class="cs-mo-btn" data-f="pause">Pause</button><button type="button" class="cs-mo-btn" data-f="replay">Replay</button></div></div>
      <div class="cs-flow-wrap"><svg viewBox="0 0 1240 470" aria-hidden="true">
        <defs>
          <marker id="hwA0" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--cs-line)"/></marker>
          <marker id="hwA1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--cs-body)"/></marker>
          <marker id="hwA2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--cs-accent)"/></marker>
          <marker id="hwA3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--ok)"/></marker>
          <marker id="hwA4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--no)"/></marker>
        </defs>
        <rect class="lane" x="0.5" y="54" width="234" height="415" rx="10"/><rect class="lane" x="244.5" y="54" width="756" height="415" rx="10"/><rect class="lane" x="1010.5" y="54" width="229" height="415" rx="10"/>
        <g class="lh"><rect x="0.5" y="0.5" width="234" height="44" rx="10"/><text x="117" y="28">SAP (External)</text>
          <rect x="244.5" y="0.5" width="756" height="44" rx="10"/><text x="622" y="28">ESH</text>
          <rect x="1010.5" y="0.5" width="229" height="44" rx="10"/><text x="1125" y="28">MD</text></g>
        <g class="edges">
          <path data-e="e1" d="M57 270 H96"/><path data-e="e2" d="M230 270 H266"/><path data-e="e3" d="M420 270 H438"/>
          <path data-e="e4" d="M448 190 H481"/><path data-e="e5" d="M448 360 H481"/>
          <path data-e="e6" data-k="go" d="M635 372 C655 372 652 410 666 410"/><path data-e="e7" d="M635 348 C660 348 660 312 690 312 H835"/>
          <path data-e="e8" d="M635 190 H835"/><path data-e="e9" d="M800 410 H835"/><path data-e="e10" d="M848 270 H866"/>
          <path data-e="e11" data-k="ok" d="M990 270 H1036"/><path data-e="e12" d="M1125 302 V370"/>
        </g>
        <path class="rej" d="M930 232 V118 H345 V236" marker-end="url(#hwA4)"/>
        <g class="ov"></g>
        <g class="tag" data-t="imp"><rect x="582" y="398" width="58" height="18" rx="5" style="fill:var(--cs-accent)"/><text x="611" y="407" style="fill:var(--cs-bg)">Imported</text></g>
        <g class="tag" data-t="dom"><rect x="700" y="294" width="62" height="18" rx="5" style="fill:var(--cs-raise);stroke:var(--cs-line)"/><text x="731" y="303" style="fill:var(--cs-ink)">Domestic</text></g>
        <g class="tag" data-t="rej"><rect x="606" y="109" width="60" height="18" rx="5" style="fill:var(--no)"/><text x="636" y="118" style="fill:var(--cs-bg)">Reject</text></g>
        <g class="tag" data-t="yes"><rect x="996" y="246" width="34" height="18" rx="5" style="fill:var(--ok)"/><text x="1013" y="255" style="fill:var(--cs-bg)">Yes</text></g>
        <g class="node dim" data-n="start"><circle class="start" cx="35" cy="270" r="22"/><text class="nt sm" x="35" y="271">Start</text></g>
        <g class="node dim" data-n="req"><rect class="proc" x="100" y="240" width="130" height="60" rx="8"/><text class="nt" x="165" y="262">Code</text><text class="nt" x="165" y="279">Request</text></g>
        <g class="node dim" data-n="reg"><rect class="proc" x="270" y="236" width="150" height="68" rx="8"/><text class="nt" x="345" y="262">Registration /</text><text class="nt" x="345" y="279">Purchase Request</text></g>
        <g class="node dim" data-n="fork"><rect class="bar" x="440" y="176" width="7" height="198" rx="3"/><text class="tiny" x="444" y="392">parallel</text></g>
        <g class="node dim" data-n="comp"><rect class="proc" x="485" y="162" width="150" height="56" rx="8"/><text class="nt" x="560" y="191">Compliance Check</text></g>
        <g class="node dim" data-n="inv"><rect class="proc" x="485" y="332" width="150" height="56" rx="8"/><text class="nt" x="560" y="361">Inventory Check</text></g>
        <g class="node dim" data-n="permit"><rect class="proc" x="670" y="384" width="130" height="52" rx="8"/><text class="nt" x="735" y="411">Import Permit</text></g>
        <g class="node dim" data-n="join"><rect class="bar" x="838" y="176" width="7" height="250" rx="3"/><text class="tiny" x="842" y="444">wait for both</text></g>
        <g class="node dim" data-n="sign"><rect class="dec" x="870" y="232" width="120" height="76" rx="10"/><text class="nt" x="930" y="254">4-Step</text><text class="nt" x="930" y="271">Sign-off</text>
          <circle class="sd" cx="903" cy="293" r="5"/><circle class="sd" cx="921" cy="293" r="5"/><circle class="sd" cx="939" cy="293" r="5"/><circle class="sd" cx="957" cy="293" r="5"/></g>
        <g class="node dim" data-n="md"><rect class="proc" x="1040" y="238" width="170" height="64" rx="8"/><text class="nt" x="1125" y="262">Chemical Code Generated</text><text class="nt dim2" x="1125" y="280">for company-wide use</text></g>
        <g class="node dim" data-n="end"><circle class="end" cx="1125" cy="396" r="24"/><text class="nt sm" x="1125" y="397">End</text></g>
        <g class="toks"></g>
      </svg></div>
      <div class="cs-mo-cap" aria-live="polite"><span class="n">1</span><span class="t">SAP sends a request for a new chemical code.</span></div>
      <div class="cs-mo-dots"></div>
    </figure>`,signoff:b=>`<figure class="cs-fig cs-col cs-mo cs-sign" data-motion="signoff" aria-label="Animated 4-step sign-off: Health, Safety, Environment, ESH Head, each alerting the next">
      <div class="cs-mo-bar"><span class="cs-label">${esc(b.label||"4-step sign-off")}</span><div class="cs-mo-btns"><button type="button" class="cs-mo-btn" data-s="ok">Play approval</button><button type="button" class="cs-mo-btn no" data-s="no">Play rejection</button></div></div>
      <div class="track">
        <div class="rail"><i></i></div>
        <div class="who req" data-w="0"><div class="av">${svgI("doc")}</div><b>Requester</b><span>Ready</span></div>
        ${[["health","Health"],["safety","Safety"],["env","Environment"],["head","ESH Head"]].map(([k,n],i)=>`<div class="who" data-w="${i+1}"><div class="av">${svgI(k)}<span class="no-step">${i+1}</span><span class="bell">${svgI("bell")}</span><span class="chk">\u2713</span></div><b>${n}</b><span>Waiting</span></div>`).join("")}
      </div>
      <div class="cs-mo-cap" aria-live="polite"><span class="n">\u25B6</span><span class="t">Plays when it scrolls into view. Use the buttons to replay either path.</span></div>
      <div class="legend"><span><i style="background:var(--cs-accent)"></i>Signing now</span><span><i style="background:var(--warn)"></i>Signature done \xB7 next signer alerted</span><span><i style="background:var(--ok)"></i>Signed</span><span><i style="background:var(--no)"></i>Rejected \xB7 returned</span></div>
    </figure>`,thumbs:b=>`<figure class="cs-fig cs-col cs-thumbs-fig"><div class="cs-thumbs">${b.figs.map(([src,cap,r])=>`<div class="cs-thumb">${csImg(src,cap,r)}<span>${esc(cap)}</span></div>`).join("")}</div>${b.cap?`<figcaption>${rich(b.cap)}</figcaption>`:""}</figure>`};const RM=reduce;const NS="http://www.w3.org/2000/svg";function initFlow(root){const svg=root.querySelector("svg"),ov=svg.querySelector(".ov"),toks=svg.querySelector(".toks");const cap=root.querySelector(".cs-mo-cap"),capN=cap.querySelector(".n"),capT=cap.querySelector(".t"),dotsEl=root.querySelector(".cs-mo-dots");const over={},mk={"":"hwA1",go:"hwA2",ok:"hwA3"};svg.querySelectorAll(".edges path").forEach(p=>{p.setAttribute("class","eb");p.setAttribute("marker-end","url(#hwA0)");const k=p.dataset.k||"",o=p.cloneNode();o.setAttribute("class","eo "+k);o.setAttribute("marker-end",`url(#${mk[k]})`);const L=p.getTotalLength();o.style.strokeDasharray=L;o.style.strokeDashoffset=L;o.style.opacity=0;ov.appendChild(o);over[p.dataset.e]={o,L}});const N=id=>svg.querySelector(`[data-n="${id}"]`),T=id=>svg.querySelector(`[data-t="${id}"]`);const steps=[{n:["start","req"],e:["e1"],t:"SAP sends a request for a new chemical code."},{n:["reg"],e:["e2"],t:"ESH registers the chemical information and the purchase request."},{n:["fork","comp","inv"],e:["e3","e4","e5"],t:"Two reviews start at the same time: compliance check and inventory check."},{n:["permit"],e:["e6","e7"],tags:["imp","dom"],t:"Imported chemicals also need an import permit. Domestic chemicals skip it."},{n:["join"],e:["e8","e9"],t:"Sign-off can only begin after both reviews are finished."},{n:["sign"],e:["e10"],sign:true,t:"4-step sign-off: Health \u2192 Safety \u2192 Environment \u2192 ESH Head."},{reject:true,tags:["rej"],t:"If any signer rejects, the request returns to registration with comments."},{n:["md","end"],e:["e11","e12"],tags:["yes"],t:"Once all four sign, MD generates the chemical code for company-wide use."}];steps.forEach((_,i)=>{const d=document.createElement("button");d.type="button";d.setAttribute("aria-label","Step "+(i+1));d.onclick=()=>jump(i);dotsEl.appendChild(d)});let idx=-1,timer=0,paused=false,rafs=[];const alive=()=>root.isConnected;function token(id){if(RM.matches)return;const{o,L}=over[id],c2=document.createElementNS(NS,"circle");c2.setAttribute("r",6);c2.setAttribute("class","tok");toks.appendChild(c2);const t0=performance.now(),D=850;const tick=now=>{const k=Math.min(1,(now-t0)/D),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2,pt=o.getPointAtLength(e*L);c2.setAttribute("cx",pt.x);c2.setAttribute("cy",pt.y);if(k<1&&alive())rafs.push(requestAnimationFrame(tick));else c2.remove()};rafs.push(requestAnimationFrame(tick))}function apply(i,instant){const s=steps[i];(s.e||[]).forEach(id=>{const{o}=over[id];o.style.transition=instant||RM.matches?"none":"stroke-dashoffset .85s cubic-bezier(.45,0,.55,1), opacity .2s";o.style.opacity=1;o.style.strokeDashoffset=0;if(!instant)token(id)});const light=()=>(s.n||[]).forEach(id=>{const n=N(id);n.classList.remove("dim");n.classList.add("on")});instant||RM.matches?light():setTimeout(light,700);(s.tags||[]).forEach(t=>T(t).classList.add("on"));if(s.sign)svg.querySelectorAll(".sd").forEach((d,k)=>instant||RM.matches?d.classList.add("on"):setTimeout(()=>d.classList.add("on"),450+k*380));svg.querySelector(".rej").classList.toggle("on",!!s.reject&&!instant)}function show(i){const s=steps[i];capN.textContent=s.reject?"\u21BA":i<6?i+1:i;cap.classList.toggle("no",!!s.reject);capT.textContent=s.t;[...dotsEl.children].forEach((b,k)=>b.classList.toggle("on",k===i))}function reset(){rafs.forEach(cancelAnimationFrame);rafs=[];toks.innerHTML="";Object.values(over).forEach(({o,L})=>{o.style.transition="none";o.style.strokeDashoffset=L;o.style.opacity=0});svg.querySelectorAll(".node").forEach(n=>{n.classList.remove("on");n.classList.add("dim")});svg.querySelectorAll(".tag").forEach(t=>t.classList.remove("on"));svg.querySelectorAll(".sd").forEach(d=>d.classList.remove("on"));svg.querySelector(".rej").classList.remove("on")}function next(){if(!alive())return;idx++;if(idx>=steps.length){timer=setTimeout(()=>{reset();idx=-1;next()},2600);return}apply(idx);show(idx);timer=setTimeout(()=>{if(!paused)next()},steps[idx].sign||steps[idx].reject?2600:2e3)}function jump(i){clearTimeout(timer);reset();for(let k=0;k<i;k++)apply(k,true);idx=i-1;paused=false;pb.textContent="Pause";next()}const pb=root.querySelector('[data-f="pause"]');pb.onclick=()=>{paused=!paused;pb.textContent=paused?"Resume":"Pause";clearTimeout(timer);if(!paused)next()};root.querySelector('[data-f="replay"]').onclick=()=>jump(0);if(RM.matches){steps.forEach((_,i)=>apply(i,true));show(steps.length-1);return}steps.forEach((_,i)=>apply(i,true));show(steps.length-1);return()=>jump(0)}function initSign(root){const W=i=>root.querySelector(`[data-w="${i}"]`),track=root.querySelector(".track"),rail=root.querySelector(".rail"),fill=rail.querySelector("i");const cap=root.querySelector(".cs-mo-cap"),capN=cap.querySelector(".n"),capT=cap.querySelector(".t");const names=["Requester","Health","Safety","Environment","ESH Head"];let timers2=[];const at=(ms,fn)=>timers2.push(setTimeout(()=>{if(root.isConnected)fn()},RM.matches?0:ms));const center=i=>{const t=track.getBoundingClientRect(),r=W(i).querySelector(".av").getBoundingClientRect();return r.left+r.width/2-t.left};const setRail=i=>{const r=rail.getBoundingClientRect(),t=track.getBoundingClientRect();fill.style.width=Math.max(0,Math.min(r.width,center(i)-(r.left-t.left)))+"px"};const say=(txt,kind,n)=>{capT.textContent=txt;cap.classList.toggle("no",kind==="no");cap.classList.toggle("ok",kind==="ok");capN.textContent=n};function state(i,cls,label){const w=W(i);w.classList.remove("signing","ringing","done","rejected","back");(cls||"").split(" ").filter(Boolean).forEach(c3=>w.classList.add(c3));w.querySelector("span:not(.no-step):not(.bell):not(.chk)").textContent=label;const c2=w.querySelector(".chk");if(c2)c2.textContent=/rejected/.test(cls||"")?"\u2715":"\u2713"}function reset(){timers2.forEach(clearTimeout);timers2=[];state(0,"","Ready");for(let i=1;i<=4;i++)state(i,"","Waiting");rail.classList.remove("no");fill.style.width="0"}function run(rejectAt){reset();let t=200;at(t,()=>{state(0,"signing","Submitting\u2026");say("The requester submits the purchase request.","","1")});at(t+1300,()=>{state(0,"done","Submitted");setRail(1)});t+=2e3;for(let i=1;i<=4;i++){if(rejectAt===i){at(t,()=>{state(i,"signing","Reviewing\u2026");say(`${names[i]} is reviewing the request.`,"",String(i))});at(t+1400,()=>{state(i,"rejected","Rejected");rail.classList.add("no");say(`${names[i]} rejected it with comments.`,"no","\u2715")});at(t+2400,()=>{state(0,"back","Fix & resubmit");say("Returned to the requester to fix and resubmit.","no","\u21A9")});return}at(t,()=>{state(i,"signing","Signing\u2026");say(`${names[i]} is reviewing and signing.`,"",String(i))});at(t+1300,()=>{state(i,"signing ringing","Done \xB7 alerting");say(i<4?`${names[i]} signed. ${names[i+1]} is alerted that it\u2019s their turn.`:"ESH Head signed. The requester is notified.","","\u{1F514}")});at(t+2200,()=>{state(i,"done","Signed");if(i<4)setRail(i+1)});t+=2900}at(t,()=>say("All four signed. The request moves on to code generation.","ok","\u2713"))}root.querySelector('[data-s="ok"]').onclick=()=>run(0);root.querySelector('[data-s="no"]').onclick=()=>run(2);state(0,"done","Submitted");for(let i=1;i<=4;i++)state(i,"done","Signed");requestAnimationFrame(()=>setRail(4));say("All four signed. The request moves on to code generation.","ok","\u2713");return RM.matches?null:()=>run(0)}const timers=[],observers=[];doc.innerHTML=c.blocks.map(b=>{const fn=CS_BLOCK[b.t];if(!fn)return"";const h=fn(b);return b.st!=null?h.replace(/^\s*<([a-z]+)/,`<$1 data-mark="${b.st}"`):h}).join("");const scroller=scrollParentOf(host);const viewTop=()=>scroller===window?0:scroller.getBoundingClientRect().top;const viewH=()=>scroller===window?window.innerHeight:scroller.clientHeight;const setVh=()=>host.style.setProperty("--cs-vh",viewH()+"px");setVh();const onInput=e=>{const r=e.target.closest&&e.target.closest(".cs-cmp input");if(r)r.parentElement.style.setProperty("--x",r.value+"%")};doc.addEventListener("input",onInput);const nums=doc.querySelectorAll(".cs-stat b");if(nums.length&&!reduce.matches){nums.forEach(n=>{n.dataset.final=n.textContent;const m=n.textContent.match(/^(\d+)(.*)$/);if(m)n.textContent="0"+m[2]});const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;io.unobserve(en.target);const el=en.target,m=el.dataset.final.match(/^(\d+)(.*)$/);if(!m)return;const to=+m[1],t0=performance.now(),D=1100;const tick=now=>{const t=Math.min(1,(now-t0)/D);el.textContent=Math.round(to*(1-Math.pow(1-t,3)))+m[2];if(t<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}),{threshold:.6});nums.forEach(n=>io.observe(n));observers.push(io)}doc.querySelectorAll(".cs-vp-pair").forEach(pair=>{const vids=[...pair.querySelectorAll("video")];if(vids.length<2)return;const io=new IntersectionObserver(([en])=>{if(en.isIntersecting&&!reduce.matches)vids.forEach(v=>{v.currentTime=0;v.play().catch(()=>{})});else vids.forEach(v=>v.pause())},{threshold:.35});io.observe(pair);observers.push(io)});const els=doc.querySelectorAll(".cs-rv, .cs-anim, .cs-cmp.glide, .cs-split-svg.people, .cs-annv, .cs-flow-arrow");if(reduce.matches)els.forEach(e=>e.classList.add("in"));else{const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const el=en.target;io.unobserve(el);el.classList.add("in");if(el.classList.contains("cs-vote"))el.closest(".cs-ab").querySelectorAll("b[data-to]").forEach((n,k)=>{const to=+n.dataset.to,t0=performance.now()+(k?350:0),D=1300;const tick=now=>{const t=Math.max(0,Math.min(1,(now-t0)/D)),e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;n.textContent=Math.round(to*e)+"%";if(t<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)});if(el.classList.contains("cs-cmp")){const r=el.querySelector("input"),from=+r.value,to=55,t0=performance.now(),D=1400;const step=now=>{const t=Math.min(1,(now-t0)/D),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,v=from+(to-from)*e;r.value=v;el.style.setProperty("--x",v+"%");if(t<1)requestAnimationFrame(step)};requestAnimationFrame(step)}}),{threshold:0,rootMargin:"0px 0px -15% 0px"});els.forEach(e=>io.observe(e));observers.push(io)}const motions=doc.querySelectorAll("[data-motion]");if(motions.length){const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;io.unobserve(en.target);const go=en.target._play;if(go)go()}),{threshold:.35});motions.forEach(el=>{el._play=el.dataset.motion==="flow"?initFlow(el):initSign(el);if(el._play&&!reduce.matches)io.observe(el)});observers.push(io)}const proc=c.blocks.find(b=>b.t==="process");const stages=proc?proc.steps.map(s=>s[0]):[];const marks=[...doc.querySelectorAll("[data-mark]")];prog.hidden=!stages.length||!marks.length;prog.innerHTML=stages.map((s,i)=>`<button type="button" data-st="${i}"><i></i>${esc(s)}</button>`).join("");const update=()=>{if(prog.hidden)return;const line=viewTop()+viewH()*.4;const start={},pos=marks.map(m=>({st:+m.dataset.mark,y:m.getBoundingClientRect().top}));pos.forEach(p=>{if(start[p.st]==null)start[p.st]=p.y});let cur=-1;for(const p of pos)if(p.y<=line)cur=p.st;const docRect=doc.getBoundingClientRect();const atEnd=docRect.bottom<=viewTop()+viewH()+4;[...prog.children].forEach((btn,i)=>{const on=i===cur&&!atEnd,done=atEnd?true:cur>-1&&i!==cur&&start[i]!=null&&start[i]<=line;btn.classList.toggle("on",on);btn.classList.toggle("done",done);btn.style.setProperty("--f",on||done?1:0)})};const onClick=e=>{const b=e.target.closest("button[data-st]");if(!b)return;const m=marks.find(x=>x.dataset.mark===b.dataset.st);if(!m)return;const delta=m.getBoundingClientRect().top-viewTop()-prog.offsetHeight-24;(scroller===window?window:scroller).scrollBy({top:delta,behavior:reduce.matches?"auto":"smooth"})};prog.addEventListener("click",onClick);const target=scroller===window?window:scroller;target.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",setVh);update();return()=>{observers.forEach(o=>o.disconnect());target.removeEventListener("scroll",update);window.removeEventListener("resize",setVh);doc.removeEventListener("input",onInput);prog.removeEventListener("click",onClick);doc.querySelectorAll("video").forEach(v=>v.pause());doc.innerHTML=""}}function openCase(host,prog,doc,id){const c=CASES[id]||CASES.reading;const v=SITE_THEMES[id]||SITE_THEMES.reading;for(const k in v)host.style.setProperty("--cs-"+k,v[k]);let st=host.querySelector("style");if(!st){st=document.createElement("style");st.textContent=CSS;host.prepend(st)}return mount(host,prog,doc,c,false)}return __toCommonJS(entry_exports);})();
