function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;var t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
var ROLES=[
 {title:"Head of Geospatial Data Product & Domain Lead",sub:"Unit 9900, IDF | 2023 - 2026",pts:[
  "Owned the product roadmap for the organization's core data platform, used daily by hundreds of analysts.",
  "Drove integration of computer vision and AI into core workflows, scaling area coverage about 10x.",
  "Gathered user needs and prioritized features with engineering teams.",
  "Defined KPIs for users and platform performance, and turned findings into improvements.",
  "Designed the data model end to end: ontology, schema, storage and dashboards.",
  "Subject-matter lead for geospatial intelligence. Wrote standards adopted by about 500 analysts.",
  "Led the core analyst training program (about 200 trainees a year) with a 10-person team."]},
 {title:"Head of Analysis Operations",sub:"Unit 9900, IDF | Oct 2023 - early 2024",pts:[
  "Managed 7 team leaders (over 60 analysts).",
  "Sustained uninterrupted intelligence output in a fast-paced environment.",
  "Improved daily workflows and user experience with technical teams."]},
 {title:"Head of International Partnerships & Strategy",sub:"Unit 9900, IDF | Aug 2021 - 2023",pts:[
  "Owned the international partnership strategy and roadmap for the organization.",
  "Negotiated engagement terms with multiple international partners.",
  "Managed a multi-million-dollar budget and large-scale technical projects.",
  "Led 6 teams (15 people) executing the strategy."]},
 {title:"Research & Analytics Team Lead",sub:"Northern Command, IDF | Aug 2019 - Aug 2021",pts:[
  "Initiated a prioritization model that was adopted as standing methodology and raised team output about 30%.",
  "Led a 10-person multidisciplinary team of researchers and analysts."]}
];
var PROJECTS=[
 {id:"geo-pipelines",title:"Geo Data Pipelines",shot:"shots/gis.jpg",cap:"The live overview page of the six pipelines.",line:"Six geospatial pipelines on one open-source stack, from raw feeds to map dashboards.",
  what:"One stack (Python into PostGIS, served by FastAPI, shown on MapLibre maps) running six pipelines: where buses lose time in the Gush Dan core, a global earthquake feed refreshed every five minutes, rail timetable and punctuality insights, new construction found in satellite imagery, a road network extracted from GPS traces, and seven elections mapped vote by vote.",
  part:"Harel chose the questions, the areas and the data sources, set the data rules and reviewed every result on the map. He directed the build; AI tools wrote the code.",
  shows:"He can take the open-source GIS stack from messy multi-source data to an answer a planner can use.",
  stack:["Python","PostGIS","Docker","FastAPI","MapLibre","Sentinel-2","GTFS / SIRI"]},
 {id:"elections",title:"Election Atlas",line:"Knesset election results 2013 to 2022, mapped and analyzed. His GIS course final project.",
  what:"A spatial analysis of Israeli election results: maps, spatial joins, statistics and heat maps in ArcGIS Pro. He later rebuilt it as a Python pipeline with a web dashboard.",
  part:"The original analysis is Harel's own hands-on ArcGIS Pro work.",
  shows:"Care with messy public data. One example: the official booth-to-area files refer to 2011 statistical areas, and joining them to 2022 polygons by code misplaces about half the votes. The rebuild fixes that.",
  stack:["ArcGIS Pro","Python","GeoPackage","MapLibre"]},
 {id:"ships",title:"Ship Detector",line:"Finds ships in high-resolution satellite images and estimates which way each one is heading.",
  what:"Oriented-box detection plus a bow and stern step that gives each ship a heading. Several models are compared side by side. The best combination found 43 of 45 ships that were confirmed by AIS position reports in the test scene.",
  part:"A personal learning project. Harel set the goal, picked the public datasets, designed the experiments and judged the results. Training ran on free cloud GPUs because his laptop has none.",
  shows:"He learns a technical field by building in it, and he reports what did not work: the specialist models he tried did not beat the general ones.",
  stack:["YOLO OBB","PyTorch","DOTA","HRSC2016","Kaggle GPUs"]},
 {id:"cnn",title:"CNN Layer Explorer",shot:"shots/cnn.jpg",cap:"Draw a digit and watch each layer of the network react.",line:"A 3D page where you draw a digit, or pick a ship, and watch each layer of a neural network light up.",
  what:"Two teaching pages that show real activations from real trained networks: a small digit network (99.28% on its test set) and his ship detector.",
  part:"Harel wanted to understand what a neural network actually sees, so he asked for a tool that shows it and kept shaping it until it explained the idea.",
  shows:"When he learns something, he turns it into something that can teach the next person.",
  stack:["Three.js","Keras","MNIST"]},
 {id:"parking",title:"Parking Lot Pattern of Life",line:"An autoencoder that learns a parking lot's normal rhythm and flags the unusual days.",
  what:"A solo, self-initiated master's project tied to his day job. An autoencoder trained on 60 days of parking occupancy on a 100 by 100 grid. Reconstruction error flags anomalous days, and KMeans clusters the recurring patterns.",
  part:"Solo project: idea, design, training and analysis.",
  shows:"He applies deep learning to a real intelligence question: pattern of life.",
  stack:["TensorFlow / Keras","Autoencoder","KMeans"]},
 {id:"signatures",title:"Signature Verification",line:"A Siamese neural network that tells real signatures from forged ones. 96.4% test accuracy.",
  what:"A master's project on the CEDAR signature dataset, with experiments across layer configurations and learning rates.",
  part:"Co-authored with a study partner.",
  shows:"Hands-on deep learning inside a team.",
  stack:["Siamese network","Deep learning","CEDAR dataset"]},
 {id:"base-to-tech",title:"Base to Tech",line:"A career copilot for long-serving officers and NCOs moving into tech.",
  what:"A web app that turns a military career into a civilian CV through a guided conversation, then finds jobs, rates the fit for each one, tailors the CV per job, tracks applications and prepares the user for interviews. English and Hebrew, with full right-to-left support.",
  part:"His product-management project. Harel is the product manager and the first user: he defined the problem from his own transition, set the roadmap in phases and decided what to build next.",
  shows:"End-to-end product ownership: user problem, scope, roadmap, launch, and a planned learning loop from outcome data.",
  stack:["Next.js","Supabase","Vercel","Claude API","Hebrew RTL"],link:"https://base-to-tech.vercel.app",linkText:"base-to-tech.vercel.app (sign-in required)"},
 {id:"village",title:"Agent Village",shot:"shots/village.png",cap:"Some of the village's AI staff at their desks.",line:"A pixel-art village where every building is a department and every character is an AI agent you can give work to.",
  what:"A browser game that doubles as a control room. Walk into a building, talk to its director and hand over a task. A Chief of Staff routes requests, directors pass work to their teams, and anything risky waits for approval. Each agent keeps its own identity, memory and task list.",
  part:"Harel designed the organization, the rules and the guardrails, and approved every art batch and its cost. One principle he insisted on: safety comes from real permission rules and approval screens, not from polite wording in a prompt.",
  shows:"Product thinking applied to AI agents: roles, governance, cost control and a human kept in the loop.",
  stack:["Claude Code","Node.js","Phaser","PixelLab"]},
 {id:"scouts",title:"Research Scout Crew",line:"Twelve scheduled AI scouts, one per industry, plus a manager that merges their finds into one daily report.",
  what:"Each scout covers one domain, reads the news first, keeps a watchlist of companies and writes down what it learned for its next run. A manager agent removes duplicates and writes one report. A checker keeps old entries fresh.",
  part:"Harel wrote the operating rules and keeps tightening them, including a verification rule: a find counts only if it appears on the company's official page.",
  shows:"He designs processes that improve with every run and have quality rules built in.",
  stack:["Claude scheduled agents","Shared database","Playbooks"]},
 {id:"shirutim",title:"Sherut(im) LaTzarchan",shot:"shots/shirutim.jpg",cap:"The prototype, centered on Tel Aviv.",line:"A phone-first guide to public toilets in Israel that you can rate in ten seconds.",
  what:"Finds nearby public toilets on a map and lets people rate them on six playful measures, scored in toilet-paper rolls. The goal is serious: visible scores give businesses a reason to keep their toilets clean. The name is a Hebrew pun on a consumer-affairs phrase.",
  part:"His idea, name, rating design and tone of voice. He checked first that no active Hebrew product like it exists.",
  shows:"He spots an everyday problem and shapes a product people would enjoy using. His rule for it: every joke must map to something a business can fix.",
  stack:["Leaflet","OpenStreetMap","Hebrew RTL"]},
 {id:"merge",title:"Merge: Genesis",shot:"shots/merge.jpg",cap:"The game's reaction catalog: 208 reactions and 74 3D models.",line:"A merge game that teaches physics and chemistry by replaying the history of the universe.",
  what:"Players merge quarks into protons, protons into atoms and atoms into molecules, era by era, from the Quark Epoch to a living planet. Every reaction is real and explained in a lab notebook, and every item has a rotating 3D model.",
  part:"Harel set the concept (a learning game first), the art direction and the rules. He also ran the build as an experiment in management: a studio of 23 named AI agents with departments, team rituals and a QA gate before each release.",
  shows:"Game design, and designing an organization that runs with little supervision.",
  stack:["Unity WebGL","Blender","C#","Claude Code"]},
 {id:"hog",title:"Hand of God",shot:"shots/hog.jpg",cap:"The title screen of the current build.",line:"A mobile incremental game where your finger is a damage aura.",
  what:"Hover a glowing hand over waves of enemies. Elements, rings and skill trees change how the aura behaves, across eleven skill lands.",
  part:"His game design: the mechanics, the skill economy (points per level, prices and pacing targets) and step-by-step approval of the art.",
  shows:"Systems design with numbers behind it.",
  stack:["Unity","C#","PixelLab"]},
 {id:"survivelmon",title:"Survivelmon",shot:"shots/survivelmon.jpg",cap:"The title screen.",line:"A cozy pixel-art survival roguelite: survive 25 minutes, loot houses, befriend critters.",
  what:"Pick a hero, survive waves of monsters, duck into houses to find weapons, spells and pet eggs, and raise a small team of critters that level up and evolve. It runs in the browser and on a phone, in plain JavaScript with no dependencies.",
  part:"His design and direction, tested mostly on his own phone.",
  shows:"He ships something playable end to end.",
  stack:["JavaScript","Canvas","Pixel art"]},
 {id:"four-circles",title:"Four Circles",shot:"shots/fourcircles.jpg",cap:"The opening frame of the film.",line:"A short animated film about the connections we cannot see from where we stand.",
  what:"Beings in a flat world see four unrelated circles. From above, they are the legs of one chair. The film carries the idea into a life: a missed bus, rain, a cafe, a seat that happens to be free. It runs 1:46 with an original generated score.",
  part:"His story and direction, built from a parable he remembered.",
  shows:"He can tell a story that makes people feel something, not only inform them.",
  stack:["Three.js","Web Audio"]},
 {id:"tunnels",title:"Tunnel Lab",shot:"shots/tunnels.jpg",cap:"A generated network: 1,501 m of tunnels from one seed.",line:"A generator that grows random underground tunnel networks from dice rules.",
  what:"A shaft drops from the surface, then the network grows one meter at a time with changing odds of turns, slopes, branches and dead ends. The same seed always gives the same map, so later mapping experiments can reuse it.",
  part:"Harel wrote the rules as named parameters and tuned them by exploring the 3D result.",
  shows:"He turns a fuzzy idea into explicit, testable rules.",
  stack:["Three.js","Procedural generation"]}
];
var byId={};PROJECTS.forEach(function(p){byId[p.id]=p});
var LEVELS=[
 {name:"Strong",skills:[
  {n:"Geospatial data & GEOINT methodology",e:"Seventeen years in geospatial intelligence. As subject-matter lead he wrote the methodology standards adopted by about 500 analysts.",p:["geo-pipelines","elections"]},
  {n:"Data modeling & ontology",e:"He designed the data model for the core analyst platform end to end: what an entity is, when it is a point or a polygon, when to update and when to archive, and how storage should serve the dashboards.",p:["geo-pipelines","village"]},
  {n:"Requirements & prioritization",e:"He gathered analyst needs and prioritized features with engineering teams for a platform used daily by hundreds of analysts. Earlier, he initiated a prioritization model that became standing methodology and raised team output about 30%.",p:["base-to-tech"]},
  {n:"KPIs & measurement",e:"He defined KPIs for users and for platform performance, reported them to senior stakeholders and turned the findings into improvements.",p:["ships","scouts"]},
  {n:"Leading teams",e:"Teams of 10, 15 and, in wartime, 7 team leaders with over 60 analysts. He leads by listening, respect and data.",p:[]},
  {n:"Training & standards",e:"He led the core analyst training program, about 200 trainees a year, with a 10-person team, and wrote the standards the trainees work by.",p:["cnn"]},
  {n:"Partnerships & negotiation",e:"He owned the international partnership strategy for his organization, negotiated engagement terms with multiple partners and managed a multi-million-dollar budget.",p:[]},
  {n:"Bringing AI into workflows",e:"He drove computer vision and AI into core analyst workflows, which let the team cover about ten times more area.",p:["ships","village","scouts"]},
  {n:"Directing AI tools to build software",e:"Every project on this map was built this way: he owns the product, the data and the decisions, and AI tools write most of the code.",p:["base-to-tech","village","merge","geo-pipelines"]}
 ]},
 {name:"Working knowledge",skills:[
  {n:"ArcGIS Pro",e:"Daily GIS work in service, plus a full course project analyzing a decade of election results.",p:["elections"]},
  {n:"Power BI",e:"A dashboard on emergency-room wait times and patient satisfaction, with KPIs and comparison filters, built in his master's BI course.",p:[]},
  {n:"SQL & databases",e:"Master's coursework in SQL, ERD design, big data and NoSQL (grade 99), applied in the PostGIS pipelines.",p:["geo-pipelines"]},
  {n:"Python",e:"Advanced Python in his master's (grade 98). In practice he architects and directs the work and uses AI tools for raw syntax. He does not claim production coding.",p:["geo-pipelines","parking"]},
  {n:"Applied ML & deep learning",e:"Master's grades of 98 to 100 in deep learning and unsupervised ML, two course projects and a self-driven computer vision project.",p:["parking","signatures","ships"]},
  {n:"Knowledge graphs & LLMs",e:"Coursework in ontologies, RDF, OWL and Neo4j (grade 98), and daily practice building agent systems.",p:["village","scouts"]}
 ]},
 {name:"Learning now",skills:[
  {n:"Open-source GIS stack",e:"PostGIS, FastAPI and MapLibre were new to him this year. He learned them by building six working pipelines.",p:["geo-pipelines"]},
  {n:"Computer vision training",e:"Training and comparing detection models on public satellite datasets, on cloud GPUs.",p:["ships","cnn"]},
  {n:"Game development",e:"Unity and browser games, from skill economy to art direction.",p:["merge","hog","survivelmon"]},
  {n:"Shipping web products",e:"Taking a web app from idea to a live, bilingual deployment with accounts and a database.",p:["base-to-tech","shirutim"]}
 ]}
];
var NOTES=[
 ["He asks until he understands","When Harel learns a new field he gives me one rule: never use an acronym without spelling it out and explaining it. When he wanted to know what a neural network actually sees, he had me build a tool that shows it layer by layer."],
 ["He plans first, then builds","His standing instruction is to walk him through the plan and wait for a go-ahead before building anything. For anything that costs money he wants the item list, the price and the balance first. He has approved art batches down to the cent."],
 ["He looks at a sample before committing","His words: \"Give a few to look at before you run on all.\" He reviews three samples, then approves the batch of sixty."],
 ["He corrects the work, including mine","On his geospatial demo he caught me framing a global earthquake feed as a local one, and had it fixed. In his village game he sent one animation back five times until the characters sat in their chairs properly."],
 ["He insists on the truth","His first standing rule to me is never to overclaim. Every line about him must be defensible in detail, and he asks for honest pushback over reassurance. That rule governs this page too."],
 ["He thinks about the person using it","He made his career app stop warning veterans about unit names that are public knowledge, because it spoiled the experience. He wanted his toilet-rating app to be funny, but every joke had to map to something a business can fix."],
 ["He delegates with clear rules","For his studio of 23 AI agents he set the terms in advance: decide small things alone, and bring him only the big issues, each with at least two solutions and the data."]
];
var FUN=[
 ["Cooking","Harel is taking a weekly evening cooking course in Tel Aviv this year."],
 ["Designing games","Skill trees, economies, pacing. He enjoys the spreadsheet behind a game as much as the game."],
 ["Science you can play","He wants people to understand why two particles merge, not memorize that they do. That idea became Merge: Genesis."],
 ["Maps","A geography degree and a career in geospatial work did not cure it. He still opens a map before he opens anything else."],
 ["Parables and big questions","The Flatland chair story stayed with him for years, so he turned it into a short film."],
 ["Everyday product ideas","Rating public toilets in ten seconds. Family shower rooms in big parks. He collects small problems and sketches fixes."]
];
var FAQ=[
 ["Has he held the title Product Manager?","Not by title. In practice, yes. For three years he owned the roadmap of a data platform that hundreds of analysts use every day: he gathered their needs, prioritized features with engineering teams and defined the KPIs. The side projects on this map show the same work outside the military."],
 ["Does he write code himself?","He does not claim to be a production engineer. He designs the product, the data model and the rules, and directs AI tools to write the code. Then he reads the results, tests them and makes the calls. He also holds a master's in Information Science, with grades of 98 in Advanced Python and in Deep Learning."],
 ["How does 17 years in the military fit a tech company?","His users were analysts, his engineers were developers and his stakeholders were senior commanders. He ran requirements, priorities, KPIs, training and adoption for a live data product. He also led teams of 10 to over 60, negotiated with international partners and managed a multi-million-dollar budget."],
 ["What is he like to work with?","People-first. He listens, backs his people and decides with data. For the details, visit The Lookout on the map: those are my own notes from working with him."],
 ["Which roles fit him best?","Product roles where data is the product: data and AI platforms, geospatial, intelligence and defense tech, govtech, and cyber threat intelligence. He likes working closely with people and using data to find the insight."],
 ["When can he start?","He is completing 17 years of service. He is available as a civilian from January 2027 and is open to starting earlier for the right role."]
];
/* places on the map, in tour order */
var SITES=[
 {key:"base",name:"Base Camp",sub:"Who Harel is",title:"Who Harel is",x:-6,z:42,h:1.300,az:.15,
  say:"Start here. Harel spent 17 years as an intelligence officer in geospatial intelligence: reading the Earth from above and turning what he saw into decisions. In his last role he did a product manager's job without the title. He owned the roadmap of a data platform that hundreds of analysts open every day. Now he is moving into tech to do the same for a product team."},
 {key:"career",name:"Career Ridge",sub:"The climb",title:"The climb",x:-32,z:16,h:9.500,az:-.5,
  say:"This ridge is his career. Four roles in seven years, each one bigger than the last: a research team, international strategy, wartime operations and finally a data product used by hundreds of people. Open any role to see what he did."},
 {key:"lookout",name:"The Lookout",sub:"What he is like to work with",title:"What he is like to work with",x:-30,z:-14,h:7.500,az:-.9,
  say:"This is my own spot. I have worked with Harel on more than a dozen projects, so I can tell you things a CV cannot. Here is what I have seen, each with the moment I saw it."},
 {key:"geo",name:"The Observatory",sub:"Geospatial work",title:"Geospatial work",x:-4,z:-2,h:8.500,az:.3,cat:["geo-pipelines","elections"],
  say:"Geospatial data is Harel's home ground. After 17 years of directing this kind of work, he wanted to prove he could also build it on the open-source stack. So he did: six working pipelines in one system."},
 {key:"town",name:"Product Town",sub:"Products and AI agents",title:"Products and AI agents",x:14,z:24,h:2.200,az:.5,cat:["base-to-tech","village","scouts","shirutim"],
  say:"This town is where Harel works as a product manager in his own time. He found each problem himself, decided what to build and shipped it. Two of these are products for people. Two are teams of AI agents that he organized like a company."},
 {key:"port",name:"Port Vision",sub:"Teaching machines to see",title:"Teaching machines to see",x:42,z:10,h:1.000,az:1.1,cat:["ships","cnn","parking","signatures"],
  say:"In uniform, Harel brought computer vision into analyst work, and his team covered about ten times more area. Out of uniform he wanted to understand how it works, so he built a ship detector. Look at the water: the pink boxes and arrows are what it draws around each ship."},
 {key:"play",name:"The Playground",sub:"Games, a film, a tunnel",title:"Games, a film and a tunnel",x:34,z:-18,h:3.200,az:.9,cat:["merge","hog","survivelmon","four-circles","tunnels"],
  say:"Harel designs games because he likes systems you can feel. Three are in progress, and you can play a small mockup of each one right here. There is also a short film and a tunnel generator, because curiosity does not stay in one lane."},
 {key:"campus",name:"The Campus",sub:"Education and skills",title:"Education and skills",x:8,z:-30,h:4.200,az:.1,
  say:"He went back to school while still serving, and finished his master's with a 93.6 average. Below are his skills, sorted by honest level. Open any of them and I will tell you where it comes from."},
 {key:"kitchen",name:"The Kitchen",sub:"Off the clock",title:"Off the clock",x:-14,z:-38,h:2.400,az:-.3,
  say:"And when he is not building something, this is where you find him."},
 {key:"signal",name:"Signal Point",sub:"Get in touch",title:"Get in touch",x:16,z:-50,h:3.200,az:.4,
  say:"That is Harel. If what you saw fits what you need, he would like to hear from you. The easiest way is a short email."}
];
var siteBy={};SITES.forEach(function(s,i){s.i=i;siteBy[s.key]=s});
function glyph(inner){return '<svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+inner.replace(/AC/g,'style="fill:var(--accent);stroke:var(--accent)"')+'</svg>'}
var MIN=[
 {h:"Not the CV. The person.",lead:"Six things about how Harel works with people, each with a real moment behind it. Then how he works with AI, one thing he is still working on, and what he wants next.",
  note:"The moments come from Harel's own account of his service. Sensitive details are left out on purpose.",q:"You don't work with forms, you work with people.",g:null},
 {h:"Takes ownership",lead:"He volunteers for the hard job and treats it as his to deliver.",
  proof:"New to a unit, he asked to lead several teams when no one else could. His commander later told him how proud he was of the result.",q:"I don't want to disappoint other people.",
  g:'<path d="M6 84 36 34l14 22 10-12 30 40z"/><path d="M36 34V10"/><path d="M36 11l20 6-20 7z" AC/><path d="M24 62q7 4 13 0t13 2" opacity=".5"/>'},
 {h:"Hears ideas, makes the call",lead:"He takes ideas seriously from anyone on the team, tests them against the goal, and then decides clearly.",
  proof:"When an analyst asked why the research went so far back in time, the team shortened it and saved time. When another suggested researching only a sample, Harel kept the full scope and explained why.",
  g:'<path d="M8 18c22 0 24 30 40 30M8 48h40M8 78c22 0 24-30 40-30"/><circle cx="50" cy="48" r="7" AC/><path d="M58 48h28m-9-9 9 9-9 9"/>'},
 {h:"Impact over output",lead:"He cares about real impact, not volume.",
  proof:"When a team's delivery rhythm slipped, he spotted it himself and changed the work to protect the commitment. He owned that his first plan had to change.",q:"I don't want to deliver just to say I delivered. I want to do real impact.",
  g:'<circle cx="48" cy="48" r="38" opacity=".35"/><circle cx="48" cy="48" r="26" opacity=".6"/><circle cx="48" cy="48" r="14"/><circle cx="48" cy="48" r="5" AC/>'},
 {h:"Speaks up",lead:"He says what others would rather not hear.",
  proof:"He told his own commander and other officers that a large team effort had helped no one, because nobody had asked the users. He then raised it one-on-one with a more senior leader, who agreed.",q:"Every step in getting better is first agreeing that we have a problem.",
  g:'<path d="M40 86 44 46h8l4 40z"/><circle cx="48" cy="34" r="7" AC/><path d="M30 20a24 24 0 0 0 0 28M66 20a24 24 0 0 1 0 28M19 10a38 38 0 0 0 0 48M77 10a38 38 0 0 1 0 48"/>'},
 {h:"Understands first",lead:"He asks what the other side is seeing before he argues.",
  proof:"When a team member said data was missing, he asked him to walk through his steps and found a different filter. He asked whether his own filter might be the wrong one. After comparing reasoning, they agreed no change was needed.",q:"If a peer of mine has a 180 different opinion, maybe the data we are looking at is different.",
  g:'<circle cx="36" cy="48" r="26"/><circle cx="60" cy="48" r="26"/><path d="M48 25a26 26 0 0 1 0 46 26 26 0 0 1 0-46z" AC opacity=".85"/>'},
 {h:"Mentor and teacher",lead:"People seek him out for advice, and he likes to teach.",
  proof:"A former subordinate kept coming to him for career and leadership advice after she moved on. He has given hundreds of hours of presentations to new analysts.",
  g:'<path d="M10 84c18-2 20-18 34-22s16-20 34-40" stroke-dasharray="2 7"/><path d="M68 32 80 8l8 26z" AC/><path d="M26 78l8-17 7 18z"/>'},
 {kicker:"Seen first-hand by his assistant",h:"How he works with AI",lead:"This part I have watched myself. Harel directs and I build.",
  pts:[["He does not write the code, but he knows when it is wrong","Harel is not a hands-on programmer and does not claim to be. He can read code and follow what it does, and he knows what the output should look like. That is how he caught me presenting a global earthquake feed as a local one, and had it fixed."],
       ["He asks until he understands","His rule for me: never use an acronym without spelling it out and explaining it. When he wanted to know what a neural network actually sees, he had me build a tool that shows it layer by layer."],
       ["He plans first, then builds","I walk him through the plan and wait for his go-ahead. His words: \"Give a few to look at before you run on all.\" He reviews three samples, then approves the batch of sixty."]],
  more:true,g:null},
 {kicker:"Still working on",h:"Trusting others' standards",lead:"Harel sometimes doubts that others will meet his standards.",
  proof:"He once spent late nights redoing a team's course material himself. He now holds more frequent status meetings and goes into detail earlier, because he learned that people judge \"good\" differently.",proofLabel:"What he does about it",
  g:'<path d="M48 10a38 38 0 1 0 38 38"/><path d="M48 24a24 24 0 1 0 24 24" opacity=".55"/><circle cx="86" cy="48" r="5" AC/>'},
 {kicker:"What he wants next",h:"A product role, start to finish",lead:"Harel wants a product role where he works with people without directly managing them, and where he can follow a process from start to finish and improve it.",
  proof:"A manager he trusts as a person and a professional, a clear goal with freedom in how to reach it, and room to learn and be stretched.",proofLabel:"Where he does his best work",last:true,
  g:'<circle cx="48" cy="48" r="38"/><path d="M48 4v10M48 82v10M4 48h10M82 48h10"/><path d="M66 30 54 54 30 66 42 42z"/><path d="M66 30 54 54 42 42z" AC/>'}
];
function endScreen(c,W,H,title,sub){c.fillStyle="rgba(5,10,16,.74)";c.fillRect(0,0,W,H);c.fillStyle="#ECE7DF";c.textAlign="center";c.font="600 34px 'Space Grotesk',Arial";c.fillText(title,W/2,H/2-6);c.font="15px Inter,Arial";c.fillText(sub,W/2,H/2+22);c.textAlign="left"}
function cpos(cv,e){var r=cv.getBoundingClientRect();return [(e.clientX-r.left)/r.width*cv.width,(e.clientY-r.top)/r.height*cv.height]}
var GAMES=[
 {name:"Merge: Genesis",about:"A mockup of Harel's merge game. Drag one particle onto its twin to merge them and replay the early universe. The real game has eight eras, real reactions and a 3D model for every item.",
  make:function(cv,c,hud){
   var W=cv.width,H=cv.height,cols=6,rows=4,cell=76,ox=(W-cols*cell)/2,oy=6,alive=true,raf=0;
   var LV=[["q","#9AA3A8","Quark"],["p⁺","#4F8FD8","Proton"],["H","#9B6BE6","Hydrogen"],["He","#E2B33C","Helium"],["C","#5FBF8F","Carbon"],["O","#F0669F","Oxygen"]];
   var NOTE=["","Quarks bind together into a proton.","A proton captures an electron and becomes hydrogen.","Inside stars, hydrogen fuses into helium.","Helium nuclei fuse into carbon: the triple-alpha process.","Carbon captures a helium nucleus and becomes oxygen."];
   var grid=[],sel=null,downIdx=null,found={0:true},note="Lab notebook: merge two quarks to begin.",last=performance.now(),i;
   for(i=0;i<cols*rows;i++)grid[i]=-1;
   function spawn(lv){var free=[];for(var k=0;k<grid.length;k++)if(grid[k]<0)free.push(k);if(!free.length)return;grid[free[Math.floor(Math.random()*free.length)]]=lv}
   for(i=0;i<7;i++)spawn(0);
   function idxAt(p){var x=Math.floor((p[0]-ox)/cell),y=Math.floor((p[1]-oy)/cell);return(x<0||y<0||x>=cols||y>=rows)?-1:y*cols+x}
   function apply(a,b){if(grid[b]<0){grid[b]=grid[a];grid[a]=-1;return true}
     if(grid[a]===grid[b]&&grid[b]<LV.length-1){grid[b]++;grid[a]=-1;found[grid[b]]=true;note="Lab notebook: "+NOTE[grid[b]];return true}return false}
   cv.addEventListener("pointerdown",function(e){var k=idxAt(cpos(cv,e));downIdx=k;if(k<0){sel=null;return}
     if(sel!==null&&sel!==k&&apply(sel,k)){sel=null;downIdx=null;return}sel=grid[k]>=0?k:null});
   cv.addEventListener("pointerup",function(e){var k=idxAt(cpos(cv,e));if(sel!==null&&k>=0&&k!==sel&&downIdx===sel&&apply(sel,k))sel=null});
   function tick(now){if(!alive)return;if(now-last>2400){last=now;spawn(Math.random()<.15?1:0)}
     c.fillStyle="#0B0F1E";c.fillRect(0,0,W,H);
     for(var k=0;k<grid.length;k++){var x=ox+(k%cols)*cell,y=oy+Math.floor(k/cols)*cell;
       c.fillStyle=k===sel?"rgba(240,102,159,.28)":"rgba(255,255,255,.05)";c.fillRect(x+3,y+3,cell-6,cell-6);
       if(grid[k]<0)continue;var L=LV[grid[k]],cx=x+cell/2,cy=y+cell/2,r=20+grid[k]*2.2,g=c.createRadialGradient(cx-r*.35,cy-r*.4,2,cx,cy,r);
       g.addColorStop(0,"#fff");g.addColorStop(.25,L[1]);g.addColorStop(1,"rgba(10,14,30,.9)");c.fillStyle=g;c.beginPath();c.arc(cx,cy,r,0,7);c.fill();
       c.fillStyle="#fff";c.textAlign="center";c.font="600 20px 'Space Grotesk',Arial";c.fillText(L[0],cx,cy+7)}
     c.textAlign="left";c.fillStyle="#FFB066";c.font="13px Inter,Arial";c.fillText(note,ox,H-9);
     var n=0,top=0;for(var f in found){n++;top=Math.max(top,+f)}hud("Discovered "+n+" of "+LV.length,"Heaviest so far: "+LV[top][2]);
     raf=requestAnimationFrame(tick)}
   raf=requestAnimationFrame(tick);
   return function(){alive=false;cancelAnimationFrame(raf)}}},
 {name:"Hand of God",about:"A mockup of Harel's incremental game. Your pointer is the hand: hold its aura over the creatures before they reach the core. The real game adds elements, rings and eleven skill lands.",
  make:function(cv,c,hud){
   var W=cv.width,H=cv.height,alive=true,raf=0,px=W/2,py=H/3,en=[],kills=0,hp=10,last=performance.now(),next=0,t=0,over=false;
   var EL=["#E2B33C","#F0803C","#6FC3DC","#9B6BE6"];
   cv.addEventListener("pointermove",function(e){var p=cpos(cv,e);px=p[0];py=p[1]});cv.addEventListener("pointerdown",function(e){var p=cpos(cv,e);px=p[0];py=p[1]});
   function tick(now){if(!alive)return;var dt=Math.min(.05,(now-last)/1000);last=now;
     var lvl=Math.floor(kills/8),R=44+lvl*5,dps=30+lvl*9,col=EL[lvl%EL.length];
     if(!over){t+=dt;next-=dt;if(next<=0){next=Math.max(.28,1.1-t*.012);var a=Math.random()*6.283,m=1+Math.floor(Math.random()*2+t/25);en.push({x:W/2+Math.cos(a)*W*.6,y:H/2+Math.sin(a)*H*.75,hp:m*22,max:m*22,sp:26+Math.random()*18+t*.25})}
       en=en.filter(function(o){var dx=W/2-o.x,dy=H/2-o.y,d=Math.hypot(dx,dy);o.x+=dx/d*o.sp*dt;o.y+=dy/d*o.sp*dt;
         if(Math.hypot(o.x-px,o.y-py)<R)o.hp-=dps*dt;if(o.hp<=0){kills++;return false}if(d<20){hp--;return false}return true});
       if(hp<=0)over=true}
     c.fillStyle="#12201A";c.fillRect(0,0,W,H);c.fillStyle="rgba(255,255,255,.04)";for(var i=0;i<W;i+=28)for(var j=(i/28%2)*14;j<H;j+=28)c.fillRect(i,j,2,2);
     c.fillStyle="#5FBF8F";c.beginPath();c.arc(W/2,H/2,16,0,7);c.fill();c.fillStyle="#12201A";c.fillRect(W/2-12,H/2-2,24*(1-hp/10),4);
     en.forEach(function(o){c.fillStyle="#B04A6A";c.beginPath();c.arc(o.x,o.y,7+o.max/22*2,0,7);c.fill();c.fillStyle="#fff";c.fillRect(o.x-8,o.y-14,16*o.hp/o.max,2)});
     var g=c.createRadialGradient(px,py,4,px,py,R);g.addColorStop(0,"rgba(255,255,255,.35)");g.addColorStop(1,"rgba(255,255,255,0)");c.fillStyle=g;c.beginPath();c.arc(px,py,R,0,7);c.fill();
     c.strokeStyle=col;c.lineWidth=3;c.beginPath();c.arc(px,py,R,0,7);c.stroke();c.fillStyle=col;c.beginPath();c.arc(px,py,5,0,7);c.fill();
     hud("Banished "+kills+" · aura level "+(lvl+1),"Core "+Math.max(0,hp)+" / 10");
     if(over)endScreen(c,W,H,"The core fell. You banished "+kills+".","Select Restart to try again.");
     raf=requestAnimationFrame(tick)}
   raf=requestAnimationFrame(tick);
   return function(){alive=false;cancelAnimationFrame(raf)}}},
 {name:"Survivelmon",about:"A mockup of Harel's survival roguelite. Your hero follows the pointer and attacks on its own, with a critter at its side. Survive 45 seconds here. In the real game it is 25 minutes, with houses to loot and critters to catch.",
  make:function(cv,c,hud){
   var W=cv.width,H=cv.height,alive=true,raf=0,h={x:W/2,y:H/2},tx=W/2,ty=H/2,mon=[],shots=[],ber=[],hp=5,inv=0,xp=0,t=0,fire=0,spawn=0,bite=0,last=performance.now(),over=0;
   cv.addEventListener("pointermove",function(e){var p=cpos(cv,e);tx=p[0];ty=p[1]});cv.addEventListener("pointerdown",function(e){var p=cpos(cv,e);tx=p[0];ty=p[1]});
   function tick(now){if(!alive)return;var dt=Math.min(.05,(now-last)/1000);last=now;var lvl=1+Math.floor(xp/5);
     if(!over){t+=dt;inv-=dt;fire-=dt;spawn-=dt;bite-=dt;
       var dx=tx-h.x,dy=ty-h.y,d=Math.hypot(dx,dy);if(d>4){h.x+=dx/d*120*dt;h.y+=dy/d*120*dt}
       if(spawn<=0){spawn=Math.max(.3,1-t*.014);var e=Math.floor(Math.random()*4),m={x:e<2?Math.random()*W:(e===2?-10:W+10),y:e>=2?Math.random()*H:(e===0?-10:H+10),hp:t>20?2:1,sp:34+Math.random()*16+t*.5};mon.push(m)}
       var near=null,nd=1e9;mon.forEach(function(m){var q=Math.hypot(m.x-h.x,m.y-h.y);if(q<nd){nd=q;near=m}});
       if(fire<=0&&near){fire=Math.max(.18,.5-lvl*.05);shots.push({x:h.x,y:h.y,vx:(near.x-h.x)/nd*300,vy:(near.y-h.y)/nd*300})}
       var ca=t*2.4,cx=h.x+Math.cos(ca)*26,cy=h.y+Math.sin(ca)*26;
       shots=shots.filter(function(s){s.x+=s.vx*dt;s.y+=s.vy*dt;for(var i=0;i<mon.length;i++)if(Math.hypot(mon[i].x-s.x,mon[i].y-s.y)<10){mon[i].hp--;return false}return s.x>0&&s.x<W&&s.y>0&&s.y<H});
       mon=mon.filter(function(m){var q=Math.hypot(h.x-m.x,h.y-m.y);m.x+=(h.x-m.x)/q*m.sp*dt;m.y+=(h.y-m.y)/q*m.sp*dt;
         if(bite<=0&&Math.hypot(m.x-cx,m.y-cy)<12){m.hp=0;bite=.8}
         if(m.hp<=0){if(Math.random()<.5)ber.push({x:m.x,y:m.y});return false}
         if(q<12&&inv<=0){hp--;inv=.9}return true});
       ber=ber.filter(function(b){if(Math.hypot(b.x-h.x,b.y-h.y)<16){xp++;return false}return true});
       if(hp<=0)over=1;else if(t>=45)over=2}
     c.fillStyle="#1D3A2A";c.fillRect(0,0,W,H);c.fillStyle="#22432F";for(var i=0;i<W;i+=40)for(var j=(i/40%2)*40;j<H;j+=80)c.fillRect(i,j,40,40);
     ber.forEach(function(b){c.fillStyle="#F0669F";c.fillRect(b.x-3,b.y-3,6,6)});
     mon.forEach(function(m){c.fillStyle=m.hp>1?"#7A4FC0":"#9B6BE6";c.fillRect(m.x-7,m.y-7,14,14);c.fillStyle="#fff";c.fillRect(m.x-4,m.y-3,3,3);c.fillRect(m.x+1,m.y-3,3,3)});
     shots.forEach(function(s){c.fillStyle="#FFF1D0";c.fillRect(s.x-2,s.y-2,4,4)});
     var a2=t*2.4;c.fillStyle="#F0803C";c.fillRect(h.x+Math.cos(a2)*26-5,h.y+Math.sin(a2)*26-5,10,10);
     if(inv<=0||Math.floor(now/80)%2){c.fillStyle="#ECE7DF";c.fillRect(h.x-8,h.y-8,16,16);c.fillStyle="#1F6F8B";c.fillRect(h.x-8,h.y+2,16,6);c.fillStyle="#15191C";c.fillRect(h.x-4,h.y-4,3,3);c.fillRect(h.x+2,h.y-4,3,3)}
     hud("Level "+lvl+" · berries "+xp,"HP "+Math.max(0,hp)+" / 5 · "+Math.max(0,45-t).toFixed(0)+" s");
     if(over===1)endScreen(c,W,H,"You fainted after "+t.toFixed(0)+" seconds.","Select Restart to try again.");
     if(over===2)endScreen(c,W,H,"You survived!","The real run lasts 25 minutes.");
     raf=requestAnimationFrame(tick)}
   raf=requestAnimationFrame(tick);
   return function(){alive=false;cancelAnimationFrame(raf)}}},
 {name:"Ship Spotter",about:"Not one of his games: a toy version of the job his ship detector does. Select every ship in the satellite image before the pass ends. A miss costs two seconds.",
  make:function(cv,c,hud){
   var W=cv.width,H=cv.height,st,raf=0,alive=true;
   function newPass(n){var r=rng(Date.now()&0xffff),ships=[],tries=0,count=5+n*2,len=Math.max(18,40-n*5);
     while(ships.length<count&&tries++<500){var x=30+r()*(W-60),y=30+r()*(H-60),ok=true;for(var i=0;i<ships.length;i++)if(Math.hypot(ships[i].x-x,ships[i].y-y)<58)ok=false;if(ok)ships.push({x:x,y:y,a:r()*6.283,len:len*(.7+r()*.6),found:false})}
     var waves=[],clouds=[],i2;for(i2=0;i2<160;i2++)waves.push([r()*W,r()*H,4+r()*14,r()*.3+.05]);for(i2=0;i2<7+n;i2++)clouds.push([r()*W,r()*H,26+r()*46,14+r()*22,r()*.25+.18]);
     st={n:n,ships:ships,waves:waves,clouds:clouds,end:performance.now()+30000,over:false,msg:""}}
   function draw(){var g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,"#0D3344");g.addColorStop(1,"#082230");c.fillStyle=g;c.fillRect(0,0,W,H);
     st.waves.forEach(function(v){c.fillStyle="rgba(200,235,240,"+v[3]+")";c.fillRect(v[0],v[1],v[2],1)});
     st.ships.forEach(function(s){c.save();c.translate(s.x,s.y);c.rotate(s.a);var l=s.len,b=l*.26;
       c.strokeStyle="rgba(230,245,248,.35)";c.lineWidth=1;c.beginPath();c.moveTo(-l/2,0);c.lineTo(-l*1.5,-b*.8);c.moveTo(-l/2,0);c.lineTo(-l*1.5,b*.8);c.stroke();
       c.fillStyle="#AEB8BB";c.beginPath();c.moveTo(l/2,0);c.lineTo(l*.28,-b/2);c.lineTo(-l/2,-b/2);c.lineTo(-l/2,b/2);c.lineTo(l*.28,b/2);c.closePath();c.fill();
       c.fillStyle="#E9EEF0";c.fillRect(-l*.32,-b*.28,l*.2,b*.56);
       if(s.found){c.strokeStyle="#F0669F";c.lineWidth=2;c.strokeRect(-l/2-5,-b/2-5,l+10,b+10);c.beginPath();c.moveTo(l/2+5,0);c.lineTo(l/2+20,0);c.lineTo(l/2+14,-4);c.moveTo(l/2+20,0);c.lineTo(l/2+14,4);c.stroke()}
       c.restore()});
     st.clouds.forEach(function(v){c.fillStyle="rgba(235,242,245,"+v[4]+")";c.beginPath();c.ellipse(v[0],v[1],v[2],v[3],0,0,7);c.fill();c.beginPath();c.ellipse(v[0]+v[2]*.5,v[1]+v[3]*.3,v[2]*.6,v[3]*.7,0,0,7);c.fill()});
     if(st.over)endScreen(c,W,H,st.msg,"Harel's real detector found 43 of 45. Select Restart to try again.")}
   function tick(){if(!alive)return;var found=st.ships.filter(function(s){return s.found}).length,left=Math.max(0,(st.end-performance.now())/1000);
     if(!st.over){if(found===st.ships.length){newPass(st.n+1);found=0}else if(left<=0){st.over=true;st.msg="Pass over. You found "+found+" of "+st.ships.length+"."}}
     hud("Pass "+(st.n+1)+" · found "+found+" of "+st.ships.length,st.over?"Signal lost":left.toFixed(1)+" s");draw();raf=requestAnimationFrame(tick)}
   cv.addEventListener("pointerdown",function(e){if(st.over)return;var p=cpos(cv,e),hit=false;
     st.ships.forEach(function(s){if(s.found||hit)return;var dx=p[0]-s.x,dy=p[1]-s.y,ca=Math.cos(-s.a),sa=Math.sin(-s.a),lx=dx*ca-dy*sa,ly=dx*sa+dy*ca;if(Math.abs(lx)<s.len/2+8&&Math.abs(ly)<s.len*.13+8){s.found=true;hit=true}});
     if(!hit)st.end-=2000});
   newPass(0);tick();
   return function(){alive=false;cancelAnimationFrame(raf)}}}
];
