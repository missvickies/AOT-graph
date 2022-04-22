function draw() {

  /* group numbers
  1 - 104th Cadets
  2 - Survey Corps
  3 - Wall sections
  4 - Garrison
  5 - Military police
  6 - Parents of characters
  7 - Wall Cult
  8 - Merchants
  9 - Titans
  10 - Leaders of Groups
  11 - The Royal Government
  12 - Reiss Family
  13 - Anti-Personnel Control Squad
  */
  var nodes = [

    { id: 0, label: "Eren Jaeger", group: 2 },
    { id: 1, label: "Mikasa Ackermann", group: 2 },
    { id: 2, label: "Armin Arlert", group: 2 },
    { id: 3, label: "Reiner Braun/Armored Titan", group: 9 },
    { id: 4, label: "Bertholdt Hoover/Colossal Titan", group: 9 },
    { id: 5, label: "Annie Leonhart/Female Titan", group: 9 },
    { id: 6, label: "Christa Lenz/Historia Reiss", group: 2 },
    { id: 7, label: "Sasha Braus", group: 2 },
    { id: 8, label: "Jean Kirschtein", group: 2 },
    { id: 9, label: "Marco Bott", group: 1, opacity: 0.5 },
    { id: 10, label: "Conny Springer", group: 2 },
    { id: 11, label: "Levi Ackermann", group: 2 },
    { id: 12, label: "Erwin Smith", group: 2 },
    { id: 13, label: "Keith Sadies", group: 10 },
    { id: 14, label: "Hange Zoë", group: 2 },
    { id: 15, label: "Miche Zacharius", group: 2, opacity: 0.5 },
    { id: 16, label: "Wall Maria", group: 3 },
    { id: 17, label: "Wall Rose", group: 3 },
    { id: 18, label: "Wall Sina", group: 3 },
    { id: 19, label: "Survey Corps", group: 2, shape: 'box'},
    { id: 20, label: "Garrison", group: 4, shape: 'box' },
    { id: 21, label: "Military Police", group: 5, shape: 'box' },
    { id: 22, label: "Grisha Jaeger", group: 6 },
    { id: 23, label: "Carla Jaeger", group: 6, opacity: 0.5 },
    { id: 24, label: "Dot Pixis", group: 4 },
    { id: 25, label: "Kitz Woermann", group: 4 },
    { id: 26, label: "Rico Brzensk", group: 4 },
    { id: 27, label: "Mitabi Jarnach", group: 4, opacity: 0.5 },
    { id: 28, label: "Ian Dietrich", group: 4, opacity: 0.5 },
    { id: 29, label: "Hannes", group: 4, opacity: 0.5 },
    { id: 30, label: "Nile Dok", group: 5 },
    { id: 31, label: "Darius Zackery", group: 10 },
    { id: 32, label: "Wall Cult", group: 7 ,shape: 'box'},
    { id: 33, label: "Pastor Nick", group: 7, opacity: 0.5 },
    { id: 34, label: "Merchants", group: 8, shape: 'box'},
    { id: 35, label: "Dino Reeves", group: 8, opacity: 0.5 },
    { id: 36, label: "Smiling Titan", group: 9, opacity: 0.5 },
    // { id: 37, label: "Armored Titan", group: 9 },
    // { id: 38, label: "Colossal Titan", group: 9 },
    { id: 39, label: "Daz", group: 1 },
    { id: 40, label: "Hannah Diamant", group: 1 },
    { id: 41, label: "Franz Kefka", group: 1, opacity: 0.5 },
    { id: 42, label: "Mikasa's Mother", group: 10, opacity: 0.5 },
    { id: 43, label: "Ackermann", group: 10, opacity: 0.5 },
    { id: 45, label: "Ymir/Jaw Titan", group: 9 },
    { id: 46, label: "Mina Carolina", group: 1, opacity: 0.5 },
    { id: 47, label: "Milieus Zeremski", group: 1, opacity: 0.5 },
    { id: 48, label: "Nack Tierce", group: 1, opacity: 0.5 },
    { id: 49, label: "Thomas Wagner", group: 1, opacity: 0.5 },

    { id: 50, label: "Beast Titan", group: 9 },
    { id: 51, label: "Moblit Berner", group: 2 },
    { id: 52, label: "Eld Gin", group: 2, opacity: 0.5 },
    { id: 53, label: "Oruo Bozad", group: 2, opacity: 0.5 },
    { id: 54, label: "Petra Rall", group: 2, opacity: 0.5 },
    { id: 55, label: "Günther Schultz", group: 2, opacity: 0.5 },
    { id: 56, label: "Nanaba", group: 2, opacity: 0.5 },
    { id: 57, label: "Gelgar", group: 2, opacity: 0.5 },
    { id: 58, label: "Henning", group: 2, opacity: 0.5 },
    { id: 59, label: "Lynne", group: 2, opacity: 0.5 },
    { id: 60, label: "Sawney", group: 9, opacity: 0.5 },
    { id: 61, label: "Beane", group: 9, opacity: 0.5 },
    { id: 62, label: "Marcel", group: 9, opacity: 0.5 },
    { id: 63, label: "Conny's Mother", group: 9 },
    { id: 64, label: "Hitch Dreyse", group: 5 },
    { id: 65, label: "Marlowe Freudenberg", group: 5 },
    
    { id: 66, label: "Flegel Reeves", group: 8 },
    { id: 67, label: "Anti-Personnel Control Squad", group: 13, shape: 'box' },
    { id: 68, label: "Djel Sannes", group: 5 },
    { id: 69, label: "Ralph", group: 5 },
    { id: 70, label: "The Royal Government", group: 11, shape: 'box'},
    { id: 71, label: "Nifa", group: 2, opacity: 0.5 },
    //{ id: 72, label: "Reiss Family", group: 12, shape: 'box'},
    { id: 73, label: "Rod Reiss", group: 12 },
    { id: 74, label: "Uri Reiss", group: 12, opacity: 0.5 },
    { id: 75, label: "Frieda Reiss", group: 12, opacity: 0.5 },
    { id: 76, label: "King Fritz", group: 11 },
    { id: 77, label: "Royal Government Minister", group: 11 },
    { id: 78, label: "High-Ranking Military Official", group: 11 },
    { id: 79, label: "Duran", group: 13, opacity: 0.5 },
    { id: 80, label: "Kenny Ackermann", group: 13 },
    { id: 81, label: "Traut Caven", group: 13, opacity: 0.5 },

    { id: 100, label: "Titans", group: 9, shape: 'box'},
    
  ];

  // create some edges
  var edges = [];

//Eren Jaeger
for (let i = 0; i < nodes.length ; i++) {
  //skip specific node
  // if (nodes[i].id == 0) {continue}

  //negative edges
  let neg = [];
  var matches = ['Reiner Braun/Armored Titan','Bertholdt Hoover/Colossal Titan', 'Annie Leonhart/Female Titan', 'Nile Dok', 'Military Police',  
  'Kenny Ackermann'];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 0, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ['Mikasa Ackermann','Hange Zoe','Erwin Smith','Conny Springer','Armin Arlert', 'Hannes', 'Grisha Jaeger','Sasha Braus',
   'Jean Kirschtein','Levi Ackermann', 'Survery Corps', 'Christa Lenz/Historia Reiss', 'Ymir/Jaw Titan'];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 0, to: nodes[i].id, color: "green"}) }
}

//Mikasa Ackermann
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ['Dino Reeves', "Bertholdt Hoover/Colossal Titan", "Reiner Braun/Armored Titan","Annie Leonhart/Female Titan", "Kenny Ackermann"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 1, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Dot Pixis","Hannes", "Survey Corps","Grisha Jaeger", "Sasha Braus","Armin Arlert", "Christa Lenz/Historia Reiss",
   "Jean Kirschtein","Conny Springer","Ymir/Jaw Titan", "Levi Ackermann"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 1, to: nodes[i].id, color: "green"}) }
}

//Armin Arlert
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ['Reiner Braun/Armored Titan', 'Bertholdt Hoover/Colossal Titan', 'Annie Leonhart/Female Titan'];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 2, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ['Christa Lenz/Historia Reiss', 'Sasha Braus', 'Jean Kirschtein', 'Conny Springer', "Levi Ackermann", 
   "Erwin Smith", "Hange Zoë", "Survey Corps", "Dot Pixis", "Hannes", "Ymir/Jaw Titan", 'Nifa'];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 2, to: nodes[i].id, color: "green"}) }
}

//Christa Lenz/Historia Reiss
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Wall Cult", "Kenny Ackermann"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 6, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Hange Zoë", "Survey Corps","Conny Springer", "Sasha Braus", "Jean Kirschtein", "Ymir/Jaw Titan"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 6, to: nodes[i].id, color: "green"}) }
}

//Sasha Braus
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan", "Kenny Ackermann"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 7, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ['Jean Kirschtein', 'Conny Springer', "Levi Ackermann", "Erwin Smith", "Survey Corps", "Ymir/Jaw Titan"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 7, to: nodes[i].id, color: "green"}) }
}

//Jean Kirschtein
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan", "Kenny Ackermann"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 8, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ['Conny Springer', "Levi Ackermann", "Erwin Smith", "Hange Zoë", "Survey Corps", "Military Police", "Ymir/Jaw Titan"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 8, to: nodes[i].id, color: "green"}) }
}


//Conny Springer
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan", "Kenny Ackermann"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 10, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Levi Ackermann", "Erwin Smith", "Hange Zoë", "Survey Corps", "Ymir/Jaw Titan", "Conny's Mother", "Dot Pixis"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 10, to: nodes[i].id, color: "green"}) }
}

//Levi Ackermann
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Kenny Ackermann"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 11, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Hange Zoë", "Survey Corps", "Erwin Smith"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 11, to: nodes[i].id, color: "green"}) }
}

//Erwin Smith
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan", "Nile Dok", "Military Police", "Wall Rose"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 12, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Hange Zoë", "Survey Corps", "Miche Zacharius", "Dot Pixis",];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 12, to: nodes[i].id, color: "green"}) }
}

//Moblit Berner
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Sawney", "Beane"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 13, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Levi Ackermann", "Conny's Mother"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 13, to: nodes[i].id, color: "green"}) }
}

//Hange Zoë
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Pastor Nick"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 14, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Moblit Berner"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 14, to: nodes[i].id, color: "green"}) }
}

//Survey Corps
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Wall Rose"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 19, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Grisha Jaeger", "Darius Zackery", "Garrison"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 19, to: nodes[i].id, color: "green"}) }
}

//Garrison
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 20, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Darius Zackery", "Military Police", "Dot Pixis"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 20, to: nodes[i].id, color: "green"}) }
}

//Military Police
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 21, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Darius Zackery", "Nile Dok"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 21, to: nodes[i].id, color: "green"}) }
}

//Dot Pixis
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 24, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Hannes"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 24, to: nodes[i].id, color: "green"}) }
}

//Pastor Nick
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Military Police", "Djel Sannes", "Ralph", "Anti-Personnel Control Squad"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 33, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Christa Lenz/Historia Reiss", "Levi Ackermann", "Hange Zoë"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 33, to: nodes[i].id, color: "green"}) }
}

//Hitch Dreyse
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 64, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Marlowe Freudenberg", "Survey Corps", "Military Police", "Annie Leonhart/Female Titan"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 64, to: nodes[i].id, color: "green"}) }
}

//Marlowe Freudenberg
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 65, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Military Police", "Annie Leonhart/Female Titan"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 65, to: nodes[i].id, color: "green"}) }
}

//Flegel Reeves
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Military Police", "Kenny Ackermann", "Anti-Personnel Control Squad"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 66, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Dino Reeves", "Survey Corps"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 66, to: nodes[i].id, color: "green"}) }
}

//Anti-Personnel Control Squad
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Eren Jaeger", "Levi Ackermann", "Erwin Smith", "Hange Zoe", "Mikasa Ackermann", "Armin Arlert", "Conny Springer", 
"Sasha Braus", "Jean Kirschtein", "Christa Lenz/Historia Reiss", "Hitch Dreyse", "Marlowe Freudenberg"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 67, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Dino Reeves", "Survey Corps"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 67, to: nodes[i].id, color: "green"}) }
}

//Djel Sannes
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Hange Zoë", "Levi Ackermann", "Survey Corps", "Erwin Smith", "Eren Jaeger"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 68, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Ralph", "Uri Reiss", "Rod Reiss", "Anti-Personnel Control Squad", "Military Police"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 68, to: nodes[i].id, color: "green"}) }
}

//Ralph
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Hange Zoë", "Levi Ackermann", "Survey Corps", "Erwin Smith", "Eren Jaeger"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 69, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Uri Reiss", "Rod Reiss", "Anti-Personnel Control Squad", "Military Police"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 69, to: nodes[i].id, color: "green"}) }
}

//The Royal Government
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Survey Corps", "Erwin Smith", "Eren Jaeger"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 70, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Uri Reiss", "Rod Reiss", "King Fritz", "Anti-Personnel Control Squad", "Royal Government Minister", "High-ranking Military Official", ];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 70, to: nodes[i].id, color: "green"}) }
}

//Rifa
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Kenny Ackermann", "Military Police", "Anti-Personnel Control Squad"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 71, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Erwin Smith", "Levi Ackermann", "Hange Zoë", "Eren Jaeger", "Mikasa Ackermann", "Connie Springer", "Sasha Braus", "Christa Lenz/Historia Reiss", 
"Jean Kirschtein"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 71, to: nodes[i].id, color: "green"}) }
}

//Reiss Family
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Survey Corps", "Erwin Smith", "Eren Jaeger"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 72, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Uri Reiss","Rod Reiss", "King Fritz", "Anti-Personnel Control Squad"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 72, to: nodes[i].id, color: "green"}) }
}

//Rod Reiss
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Survey Corps", "Erwin Smith", "Eren Jaeger"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 73, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Fredia Reiss", "Military Police", "Anti-Personnel Control Squad"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 73, to: nodes[i].id, color: "green"}) }
}

//Uri Reiss
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 74, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Rod Reiss", "Fredia Reiss", "Kenny Ackermann", "King Fritz", "Anti-Personnel Control Squad"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 74, to: nodes[i].id, color: "green"}) }
}

//Frieda Reiss
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 75, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Uri Reiss", "Rod Reiss", "Reiss Family", "Anti-Personnel Control Squad"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 75, to: nodes[i].id, color: "green"}) }
}

//King Fritz
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 76, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Rod Reiss", "Military Police", "Anti-Personnel Control Squad", "Wall Rose", "Wall Sina"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 76, to: nodes[i].id, color: "green"}) }
}

//Royal Government Minister
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 77, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Rod Reiss", "High-ranking Military Official", "King Fritz"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 77, to: nodes[i].id, color: "green"}) }
}

//High-ranking Military Official
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 78, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Rod Reiss"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 78, to: nodes[i].id, color: "green"}) }
}

//Duran
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 79, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Rod Reiss", "Traut Caven", "Anti-Personnel Control Squad"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 79, to: nodes[i].id, color: "green"}) }
}

//Kenny Ackermann
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Dino Reeves"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 80, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Rod Reiss", "Traut Caven", "Duran", "Military Police", "Anti-Personnel Control Squad", "Duran", "Traut Caven"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 80, to: nodes[i].id, color: "green"}) }
}

//Traut Caven
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Jean Kirschtein", "Armin Arlert"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 81, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Anti-Personnel Control Squad"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 81, to: nodes[i].id, color: "green"}) }
}

//titans
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];

var matches = ["Eren Jaeger/Attack Titan", "Mikasa Ackermann", "Armin Arlert","Christa Lenz", "Sasha Braus", "Jean Kirschtein",
"Conny Springer", "Levi Ackermann", "Erwin Smith", "Hange Zoë", "Dot Pixis", "Kitz Woermann", "Rico Brzensk", "Hannes"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 100, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = [];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 100, to: nodes[i].id, color: "green"}) }
}



// console.log(edges.length, nodes.length)
// degreeDis = {}
// colorDis = {}

// edges.forEach(element => {
//   console.log(element);
//   let nameFrom = nodes.find(n => n.id === element.from)["label"];
//   if(degreeDis.hasOwnProperty(nameFrom)){
//     degreeDis[nameFrom] += 1
//   }else{
//     degreeDis[nameFrom] = 0
//   }

//   let nameTo = nodes.find(n => n.id === element.to)["label"];
//   if(degreeDis.hasOwnProperty(nameTo)){
//     degreeDis[nameTo] += 1
//   }else{
//     degreeDis[nameTo] = 0
//   }

//   if(colorDis.hasOwnProperty(element.color)){
//     colorDis[element.color] += 1
//   }else{
//     colorDis[element.color] = 0
//   }
// });

// // Create items array
// var items = Object.keys(degreeDis).map(function(key) {
//   return [key, degreeDis[key]];
// });

// // Sort the array based on the second element
// items.sort(function(first, second) {
//   return second[1] - first[1];
// });

// console.log(items)
// console.log(colorDis)


  // create a network
  var container = document.getElementById("mynetwork3");

  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    layout:{
      randomSeed: 0,
    },
    interaction: { multiselect: true},
    nodes: {
      shape: "dot",
      size: 16,
      scaling: {
        min: 10,
        max: 50,
        label: {
          enabled: false,
          min: 14,
          max: 30,
          maxVisible: 30,
          drawThreshold: 5
        },
        customScalingFunction: function (min,max,total,value) {
          if (max === min) {
            return 0.5;
          }
          else {
            let scale = 1 / (max - min);
            return Math.max(0,(value - min)*scale);
          }
        }
      }
    },
    edges:{
      selectionWidth: 3,
      labelHighlightBold: true,
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
      },
      maxVelocity: 146,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: { iterations: 150 },
    },
  };
  var network = new vis.Network(container, data, options);
  // for(c in nodes){
  //   console.log(nodes[c].label,network.getConnectedEdges(c.toString()).length)
  //   nodes[c].value = network.getConnectedEdges(c.toString()).length

  //   let dead = [];
  //   var deadChars = ["Dino Reeves","Pastor Nick"];
  //   if (~ matches2.indexOf(nodes[c].label)) { dead.push(nodes[c].id)}
  //   if ( dead.includes(nodes[c].id)){network.getConnectedEdges(c.toString()).map(obj => ({...obj,color:{opacity: 0.2 }}))}
  // }
  
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});
