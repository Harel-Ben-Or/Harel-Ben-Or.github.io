/* First-person voice. Loaded after neural-data.js; rewrites the copy and leaves the facts unchanged. */
(function(){
function P(id,o){for(var k in o)byId[id][k]=o[k]}
P("geo-pipelines",{part:"I chose the questions, the areas and the data sources, set the data rules and reviewed every result on the map. I directed the build; AI tools wrote the code.",
 shows:"I can take the open-source GIS stack from messy multi-source data to an answer a planner can use."});
P("elections",{line:"Knesset election results 2013 to 2022, mapped and analyzed. My GIS course final project.",
 what:"A spatial analysis of Israeli election results: maps, spatial joins, statistics and heat maps in ArcGIS Pro. I later rebuilt it as a Python pipeline with a web dashboard.",
 part:"The original analysis is my own hands-on ArcGIS Pro work."});
P("ships",{part:"A personal learning project. I set the goal, picked the public datasets, designed the experiments and judged the results. Training ran on free cloud GPUs because my laptop has none.",
 shows:"I learn a technical field by building in it, and I report what did not work: the specialist models I tried did not beat the general ones."});
P("cnn",{what:"Two teaching pages that show real activations from real trained networks: a small digit network (99.28% on its test set) and my ship detector.",
 part:"I wanted to understand what a neural network actually sees, so I asked for a tool that shows it and kept shaping it until it explained the idea.",
 shows:"When I learn something, I turn it into something that can teach the next person."});
P("parking",{what:"A solo, self-initiated master's project tied to my day job. An autoencoder trained on 60 days of parking occupancy on a 100 by 100 grid. Reconstruction error flags anomalous days, and KMeans clusters the recurring patterns.",
 shows:"I apply deep learning to a real intelligence question: pattern of life."});
P("base-to-tech",{part:"My product-management project. I am the product manager and the first user: I defined the problem from my own transition, set the roadmap in phases and decided what to build next."});
P("village",{part:"I designed the organization, the rules and the guardrails, and approved every art batch and its cost. One principle I insisted on: safety comes from real permission rules and approval screens, not from polite wording in a prompt."});
P("scouts",{part:"I wrote the operating rules and keep tightening them, including a verification rule: a find counts only if it appears on the company's official page.",
 shows:"I design processes that improve with every run and have quality rules built in."});
P("shirutim",{part:"My idea, name, rating design and tone of voice. I checked first that no active Hebrew product like it exists.",
 shows:"I spot an everyday problem and shape a product people would enjoy using. My rule for it: every joke must map to something a business can fix."});
P("merge",{part:"I set the concept (a learning game first), the art direction and the rules. I also ran the build as an experiment in management: a studio of 23 named AI agents with departments, team rituals and a QA gate before each release."});
P("hog",{part:"My game design: the mechanics, the skill economy (points per level, prices and pacing targets) and step-by-step approval of the art."});
P("survivelmon",{part:"My design and direction, tested mostly on my own phone.",shows:"I ship something playable end to end."});
P("four-circles",{part:"My story and direction, built from a parable I remembered.",shows:"I can tell a story that makes people feel something, not only inform them."});
P("tunnels",{part:"I wrote the rules as named parameters and tuned them by exploring the 3D result.",shows:"I turn a fuzzy idea into explicit, testable rules."});

var E=[[
 "Seventeen years in geospatial intelligence. As subject-matter lead I wrote the methodology standards adopted by about 500 analysts.",
 "I designed the data model for the core analyst platform end to end: what an entity is, when it is a point or a polygon, when to update and when to archive, and how storage should serve the dashboards.",
 "I gathered analyst needs and prioritized features with engineering teams for a platform used daily by hundreds of analysts. Earlier, I initiated a prioritization model that became standing methodology and raised team output about 30%.",
 "I defined KPIs for users and for platform performance, reported them to senior stakeholders and turned the findings into improvements.",
 "Teams of 10, 15 and, in wartime, 7 team leaders with over 60 analysts. I lead by listening, respect and data.",
 "I led the core analyst training program, about 200 trainees a year, with a 10-person team, and wrote the standards the trainees work by.",
 "I owned the international partnership strategy for my organization, negotiated engagement terms with multiple partners and managed a multi-million-dollar budget.",
 "I drove computer vision and AI into core analyst workflows, which let the team cover about ten times more area.",
 "Every project here was built this way: I own the product, the data and the decisions, and AI tools write most of the code."
],[
 null,
 "A dashboard on emergency-room wait times and patient satisfaction, with KPIs and comparison filters, built in my master's BI course.",
 null,
 "Advanced Python in my master's (grade 98). In practice I architect and direct the work and use AI tools for raw syntax. I do not claim production coding.",
 null,null
],[
 "PostGIS, FastAPI and MapLibre were new to me this year. I learned them by building six working pipelines.",
 null,null,null
]];
E.forEach(function(l,i){l.forEach(function(e,j){if(e)LEVELS[i].skills[j].e=e})});

function fill(dst,src){dst.length=0;src.forEach(function(x){dst.push(x)})}
fill(NOTES,[
 ["I ask until I understand","When I learn a new field I give my AI assistant one rule: never use an acronym without spelling it out and explaining it. When I wanted to know what a neural network actually sees, I had it build a tool that shows it layer by layer."],
 ["I plan first, then build","My standing instruction is to walk me through the plan and wait for a go-ahead before building anything. For anything that costs money I want the item list, the price and the balance first. I have approved art batches down to the cent."],
 ["I look at a sample before committing","My words: \"Give a few to look at before you run on all.\" I review three samples, then approve the batch of sixty."],
 ["I correct the work, including the AI's","On my geospatial demo I caught the assistant framing a global earthquake feed as a local one, and had it fixed. In my village game I sent one animation back five times until the characters sat in their chairs properly."],
 ["I insist on the truth","My first standing rule to the assistant is never to overclaim. Every line about me must be defensible in detail, and I ask for honest pushback over reassurance. That rule governs this page too."],
 ["I think about the person using it","I made my career app stop warning veterans about unit names that are public knowledge, because it spoiled the experience. I wanted my toilet-rating app to be funny, but every joke had to map to something a business can fix."],
 ["I delegate with clear rules","For my studio of 23 AI agents I set the terms in advance: decide small things alone, and bring me only the big issues, each with at least two solutions and the data."]
]);
fill(FUN,[
 ["Cooking","I am taking a weekly evening cooking course in Tel Aviv this year."],
 ["Designing games","Skill trees, economies, pacing. I enjoy the spreadsheet behind a game as much as the game."],
 ["Science you can play","I want people to understand why two particles merge, not memorize that they do. That idea became Merge: Genesis."],
 ["Maps","A geography degree and a career in geospatial work did not cure it. I still open a map before I open anything else."],
 ["Parables and big questions","The Flatland chair story stayed with me for years, so I turned it into a short film."],
 ["Everyday product ideas","Rating public toilets in ten seconds. Family shower rooms in big parks. I collect small problems and sketch fixes."]
]);
fill(FAQ,[
 ["Have you held the title Product Manager?","Not by title. In practice, yes. For three years I owned the roadmap of a data platform that hundreds of analysts use every day: I gathered their needs, prioritized features with engineering teams and defined the KPIs. My side projects show the same work outside the military."],
 ["Do you write code yourself?","I do not claim to be a production engineer. I design the product, the data model and the rules, and direct AI tools to write the code. Then I read the results, test them and make the calls. I also hold a master's in Information Science, with grades of 98 in Advanced Python and in Deep Learning."],
 ["How does 17 years in the military fit a tech company?","My users were analysts, my engineers were developers and my stakeholders were senior commanders. I ran requirements, priorities, KPIs, training and adoption for a live data product. I also led teams of 10 to over 60, negotiated with international partners and managed a multi-million-dollar budget."],
 ["What are you like to work with?","People-first. I listen, back my people and decide with data. For the details, open Field notes: each one comes with a real moment from my work."],
 ["Which roles fit you best?","Product roles where data is the product: data and AI platforms, geospatial, intelligence and defense tech, govtech, and cyber threat intelligence. I like working closely with people and using data to find the insight."],
 ["When can you start?","I am completing 17 years of service. I am available as a civilian from January 2027 and am open to starting earlier for the right role."]
]);

function S(k,o){for(var f in o)siteBy[k][f]=o[f]}
S("base",{title:"Who I am",sub:"Who I am",say:"Start here. I spent 17 years as an intelligence officer in geospatial intelligence: reading the Earth from above and turning what I saw into decisions. In my last role I did a product manager's job without the title. I owned the roadmap of a data platform that hundreds of analysts open every day. Now I am moving into tech to do the same for a product team."});
S("career",{say:"This is my career. Four roles in seven years, each one bigger than the last: a research team, international strategy, wartime operations and finally a data product used by hundreds of people. Open any role to see what I did."});
S("lookout",{title:"What I am like to work with",sub:"What I am like to work with",say:"A CV cannot tell you what I am like to work with, so here is my attempt. I have built more than a dozen projects with an AI assistant, and these are the habits that show up every time, each with the moment it showed up."});
S("geo",{say:"Geospatial data is my home ground. After 17 years of directing this kind of work, I wanted to prove I could also build it on the open-source stack. So I did: six working pipelines in one system."});
S("town",{say:"This is where I work as a product manager in my own time. I found each problem myself, decided what to build and shipped it. Two of these are products for people. Two are teams of AI agents that I organized like a company."});
S("port",{say:"In uniform, I brought computer vision into analyst work, and my team covered about ten times more area. Out of uniform I wanted to understand how it works, so I built a ship detector and a tool that shows what a neural network sees."});
S("play",{say:"I design games because I like systems you can feel. Three are in progress, and you can play a small mockup of each one right here. There is also a short film and a tunnel generator, because my curiosity does not stay in one lane."});
S("campus",{say:"I went back to school while still serving, and finished my master's with a 93.6 average. Below are my skills, sorted by honest level. Open any of them to see where it comes from."});
S("kitchen",{say:"And when I am not building something, this is where you find me."});
S("signal",{say:"That is me. If what you saw fits what you need, I would like to hear from you. The easiest way is a short email."});

function M(i,o){for(var f in o)MIN[i][f]=o[f]}
M(0,{lead:"Six things about how I work with people, each with a real moment behind it. Then how I work with AI, one thing I am still working on, and what I want next.",
 note:"The moments come from my own service. Sensitive details are left out on purpose."});
M(1,{h:"I take ownership",lead:"I volunteer for the hard job and treat it as mine to deliver.",
 proof:"New to a unit, I asked to lead several teams when no one else could. My commander later told me how proud he was of the result."});
M(2,{h:"I hear ideas, then make the call",lead:"I take ideas seriously from anyone on the team, test them against the goal, and then decide clearly.",
 proof:"When an analyst asked why the research went so far back in time, we shortened it and saved time. When another suggested researching only a sample, I kept the full scope and explained why."});
M(3,{lead:"I care about real impact, not volume.",
 proof:"When a team's delivery rhythm slipped, I spotted it myself and changed the work to protect the commitment. I owned that my first plan had to change."});
M(4,{h:"I speak up",lead:"I say what others would rather not hear.",
 proof:"I told my own commander and other officers that a large team effort had helped no one, because nobody had asked the users. I then raised it one-on-one with a more senior leader, who agreed."});
M(5,{h:"I understand first",lead:"I ask what the other side is seeing before I argue.",
 proof:"When a team member said data was missing, I asked him to walk through his steps and found a different filter. I asked whether my own filter might be the wrong one. After comparing reasoning, we agreed no change was needed."});
M(6,{lead:"People come to me for advice, and I like to teach.",
 proof:"A former subordinate kept coming to me for career and leadership advice after she moved on. I have given hundreds of hours of presentations to new analysts."});
M(7,{kicker:"Day to day",h:"How I work with AI",lead:"I direct and AI builds.",pts:[
 ["I do not write the code, but I know when it is wrong","I am not a hands-on programmer and do not claim to be. I can read code and follow what it does, and I know what the output should look like. That is how I caught my assistant presenting a global earthquake feed as a local one, and had it fixed."],
 ["I ask until I understand","My rule for the assistant: never use an acronym without spelling it out and explaining it. When I wanted to know what a neural network actually sees, I had it build a tool that shows it layer by layer."],
 ["I plan first, then build","The assistant walks me through the plan and waits for my go-ahead. My words: \"Give a few to look at before you run on all.\" I review three samples, then approve the batch of sixty."]]});
M(8,{lead:"I sometimes doubt that others will meet my standards.",
 proof:"I once spent late nights redoing a team's course material myself. I now hold more frequent status meetings and go into detail earlier, because I learned that people judge \"good\" differently.",proofLabel:"What I do about it"});
M(9,{kicker:"What I want next",lead:"I want a product role where I work with people without directly managing them, and where I can follow a process from start to finish and improve it.",proof:"A manager I trust as a person and a professional, a clear goal with freedom in how to reach it, and room to learn and be stretched.",proofLabel:"Where I do my best work"});

GAMES[0].about="A mockup of my merge game. Drag one particle onto its twin to merge them and replay the early universe. The real game has eight eras, real reactions and a 3D model for every item.";
GAMES[1].about="A mockup of my incremental game. Your pointer is the hand: hold its aura over the creatures before they reach the core. The real game adds elements, rings and eleven skill lands.";
GAMES[2].about="A mockup of my survival roguelite. Your hero follows the pointer and attacks on its own, with a critter at its side. Survive 45 seconds here. In the real game it is 25 minutes, with houses to loot and critters to catch.";
GAMES[3].about="Not one of my games: a toy version of the job my ship detector does. Select every ship in the satellite image before the pass ends. A miss costs two seconds.";
var es=endScreen;endScreen=function(c,W,H,t,s){es(c,W,H,t,s.replace("Harel's real","My real"))};
})();
