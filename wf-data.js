/* Workflow layer: the product steps behind each project. Every entry must come from that project's own files. */
var STG=[
 ["Discover","problem · user · prior art","#38BDF8","Find a real problem, name who has it, and check what already exists before building anything."],
 ["Prioritize","scope · phases · cuts","#6C8CFF","Decide what goes into the first version, what waits for later, and what gets cut."],
 ["Spec","briefs · rules · acceptance","#A78BFA","Write down what done looks like: briefs, rules and the checks a result must pass."],
 ["Build with AI","agents · roles · guardrails","#F2A33A","Direct AI tools and agents to build it, with roles, permissions and approval steps."],
 ["Evaluate","tests · evals · QA gates","#A3E635","Measure the result against the spec, including what did not work."],
 ["Ship & iterate","live · feedback · changes","#F472B6","Put it in front of people, listen, and change it."]
];
var WFINTRO="I run the same product loop on everything I build, whether it is a game, a data pipeline or a team of AI agents. Here is each step, with the projects where it actually happened. Open one to see what the step looked like there.";

PROJECTS.push({id:"portfolio",title:"This portfolio",shot:null,
 line:"The site you are looking at, built and rebuilt from real reviewer feedback.",
 what:"An interactive 3D graph of my work. Every node opens a project; live projects open the real thing.",
 part:"I set the goal (a hiring manager should see real work fast), wrote the content rules, chose the design and decided every change after feedback. AI tools wrote the code.",
 shows:"The product loop on a small scale: put it in front of a user, listen, change it.",
 stack:["Three.js","GitHub Pages","Custom domain","Claude Code"]});
byId.portfolio=PROJECTS[PROJECTS.length-1];
siteBy.town.cat.push("portfolio");

/* The signature project shown is the newer solo build (fraud-detection-signatures), not the earlier master's course project. */
(function(p){p.title="Signature Check";
 p.line="Compares handwritten signatures and says whether they look like the same hand or a forgery, in five plain answers.";
 p.what="A website and a model. Upload up to ten signatures and up to five known references; each one gets an answer from genuine to forged, most suspicious first. The model turns each signature into 256 numbers and compares distances, so it works on people it has never seen and nobody has to be registered.";
 p.part="A solo project. I set the goal, chose the public datasets (English, Bengali, Hindi, Dutch and Persian signatures), decided the five answer levels and how strict each line is, and judged the results. AI tools wrote the code; training ran on free cloud GPUs.";
 p.shows="I report what a model is bad at, not only what it is good at. It catches someone else's signature well and practised copies only moderately, and the page says so.";
 p.stack=["Siamese network","ResNet-18","Triplet loss","PyTorch","ONNX","FastAPI"];})(byId.signatures);
(function(s){s.e="Master's grades of 98 to 100 in deep learning and unsupervised ML, course projects, and two self-driven projects: ship detection and signature verification."})(LEVELS[1].skills.find(function(k){return /Applied ML/.test(k.n)}));

var WF={
 signatures:[
  [0,"There is no public Hebrew signature dataset, so I listed the public datasets that do exist, with their sizes, to see what the model could learn from."],
  [1,"Phone photos were left out of the installed model: it is trained on clean scans, and the page says tilted or dim photos are not handled yet. A slightly better setting was rejected because it did not hold up on the validation people."],
  [2,"Writers are split 70/15/15, so every test writer is a stranger to the model. Five answers are set by four distance lines, tuned so at most about 5% of forgeries are called likely genuine."],
  [4,"47 automated tests. With one reference, the error rate is 5.1% for another person's signature and 19.0% for a practised forgery. The write-up notes the lines were set on the same people they were measured on, so the figures are a little optimistic."],
  [5,"Changed after testing: a stricter \"likely genuine\" line with the distances shown, then five-level answers and up to 40 checks at once. Packaged to run on Hugging Face Spaces; not online yet."]
 ],
 portfolio:[
  [0,"The user is a hiring manager with two minutes. The job: show real work fast, without overclaiming."],
  [1,"Five design directions were mocked up and compared before one was chosen. The 3D graph won."],
  [2,"Content rules came first: never overclaim, describe military work by type and impact only, every line must be defensible."],
  [3,"The Ask box answers only from notes I prepared. When it has no match it says so, instead of making an answer up."],
  [5,"A product manager who hires seniors reviewed it: the graph worked, the AI narrator praising me did not, and every node should open the real thing. I cut the narrator, switched to first person and made the graph full screen."]
 ],
 "base-to-tech":[
  [0,"The user: long-serving officers and NCOs leaving the army for their first tech job. A research agent gathered job-search advice and listed where its sources disagree, flagging vendor numbers as not research."],
  [1,"Four phases, each with a numbered build order, and a written \"do not build yet\" list: automatic job search, AI parsing, email updates and the learning loop. The \"Find it for me\" button ships disabled, labelled Coming soon."],
  [2,"A full build brief: data model, features, analytics events and the exact prompts. Privacy is a rule, not a setting: nobody, including the admin, can read a user's documents."],
  [3,"Two working modes for the AI: normal mode stops and asks; night mode works alone within hard limits and never touches secret keys or hosting settings. Every night ends with a report: what is done, what is blocked, and questions for me."],
  [3,"Grounding: the CV prompt may not add any fact, number or skill that is not in the user's own material. Each conversation stores which prompt version and model produced it, so versions can be compared, and token use is logged per message."],
  [4,"A two-account privacy test is part of \"done\". The database change passed 29 of 29 checks, every task passes type check, lint and a production build, and a script confirms the prompts match the brief exactly."],
  [5,"Live on Vercel. Changes after review: the security warning now flags only real specifics, not public unit names, and the CV options went from three to two. Success is defined as CV approved, then applied, then interview, tracked as events on an admin dashboard."]
 ],
 village:[
  [0,"The goal was concrete: one page I can run my day-to-day AI work from, instead of opening Claude Code directly."],
  [1,"Nine steps, each with a \"done when\" line. Brain first, art later: placeholders until the task loop worked."],
  [2,"Rule one: a human stays in the loop, enforced by settings, not by asking nicely. Every agent has its own identity, memory and task list."],
  [3,"A Chief of Staff on a fast model routes each task to a director on a stronger model; only I can hire workers. Pushing code and sending email are blocked, and email is drafts only."],
  [4,"Routing was tested on seven sample tasks, one in Hebrew: all went to the right director. A safety audit of 23 checks in seven groups passed 23 of 23."],
  [5,"It runs on my own computer, with phone access on the home network behind a password and a lockout. After using it I changed the rules and re-ran past tasks on the new rules."]
 ],
 scouts:[
  [2,"Each scout has its own playbook for its domain, plus a list of what it already reported, so nothing comes back as new twice. The playbooks are versioned: the scout is on version 8, the manager on version 7."],
  [3,"Twelve domain scouts run every day. A manager merges their finds, removes duplicates and tags shared items with every domain. Token use and searches are logged per scout. When unsure, the checker asks instead of guessing."],
  [4,"Verification rule: a find counts only if it appears on the company's official page. In one run: 20 new finds, 14 verified and 6 marked unverified until checked."],
  [5,"Running daily since October, with the rules tightened version by version."]
 ],
 "geo-pipelines":[
  [0,"Each pipeline starts from a question a planner would ask, for example: where do Gush Dan's buses lose time, and what should be done about it?"],
  [1,"Limits stated up front: there is no ridership data, so bus delay is measured in bus-hours, not passenger-hours."],
  [2,"Written cleaning and matching rules: bus segments implying over 100 km/h or with gaps over 3 minutes are dropped; two earthquake reports are the same event within 30 seconds and 150 km."],
  [4,"Raw bus data went from 2.3 million pings to 1.19 million clean ones. The road network extracted from GPS traces matches OpenStreetMap at 77% precision and 69% recall, up from 71% and 56% with a simple threshold. The construction model is tested on held-out 2 km blocks, because random pixels leak."],
  [5,"A failure caught on the map and fixed: light rail inside the bus feed had become the top \"congestion corridor\". It runs as one Docker stack on a laptop, with a static snapshot."]
 ],
 elections:[
  [4,"Joining 2011 statistical areas to 2022 polygons by code placed only 48% of votes correctly. The rebuild places 99.5%."]
 ],
 ships:[
  [0,"The question: find ships in sub-meter satellite images and work out which way each one is heading. Free ship-position data covers only US waters, so the test scenes are Tampa Bay."],
  [1,"Size-specialist models were built, did not beat the general ones, and were dropped. A simple shape test for the bow got 14 of 21 right, so it was not used either."],
  [2,"An exact rule for when a detection matches a real ship: within 75 m, at least half the ship's length, and heading within 45 degrees. Boxes more than 5 m from water are set aside as land."],
  [4,"Eight setups compared against 45 ships confirmed by position reports: the best found 43, the pretrained model alone 41. Bow direction matched on 20 of 23 ships. One cutoff was chosen after seeing results, and the write-up says so."],
  [5,"The matching rules were tightened after a 10 m boat was credited with a 134 m dry dock. Training ran on free cloud GPUs because my laptop has none."]
 ],
 merge:[
  [0,"A market research report before building: viable as a small, web-first learning game, not viable as a business. The free classroom incumbent and existing science-merge games were checked."],
  [1,"A roadmap with each item sized S, M or L, approved before work began. One release added nothing for players on purpose: it was for stability. At one point I put the studio on hold: finish current jobs, then wait."],
  [2,"A game design document and a build brief, with written specs per feature and hard budgets, such as a total download under 11 MB."],
  [3,"A studio of 23 named AI agents in departments, each assigned a model by the difficulty of its work. Studio rules: never contact anyone outside, no purchases, and weekly usage kept under 80%."],
  [4,"Seven automated release gates and nine manual ones, with the rule \"not in the build is not a pass\". The latest self-test: 1,389 passed, 0 failed. The first playtest found 0 blockers, 3 major and 13 minor issues; three eras are still untested."],
  [5,"The minimum test count rose from 229 to 1,389 over the releases."]
 ],
 hog:[
  [0,"The core requirement: open a link on my phone at any time and play the latest version."],
  [1,"Milestones with a gate: if the game is unplayable on a phone browser, say so honestly. An Android app can come later; do not optimize for it now."],
  [2,"Design documents for the skill tree, rings and endgame, with pacing targets such as the first element at level 20. A decisions log records the reason for each choice."],
  [3,"Rules for the AI: ask before design decisions, and never say \"works\" without evidence. Three agents checked the game economy independently. I approve every art set before it is animated."],
  [4,"A five-hour economy simulation over 500 runs, a bot that played 80 runs, and 26 automated tests passing. One playtest report notes its own frame-rate numbers mean nothing."],
  [5,"Live on my site. Playtest events are recorded, and pacing was retuned after testing so the first element arrives in about 40 minutes."]
 ],
 survivelmon:[
  [0,"A competitor review of creature-catching survival games found rivals but no twin. The gaps it named: real two-species breeding, and free with no ads or pay wall."],
  [2,"A plan with design pillars, the core loop, controls and loot tables."],
  [4,"A full-game bot that starts from a fresh save, a balance simulator, a performance bench and UI tests."],
  [5,"Live, with releases 1.0 to 1.13, including a fix for loading getting stuck on iPhones. Play statistics are tracked, with a poster QR code measured as its own source."]
 ],
 shirutim:[
  [0,"The goal: a public score, so businesses have a reason to keep their toilets clean."],
  [1,"An honest limitations list: ratings live only in the browser for now, and that is the first thing to replace. Six next steps, in order: shared ratings, an app, deployment, own place data, anti-fake checks, an owner page."],
  [2,"Six measures, each rated 1 to 5 rolls. Older ratings weigh less: a 60-day-old rating counts half. One rating per device per day. Green from 4, yellow from 3, red below 3."]
 ]
};
