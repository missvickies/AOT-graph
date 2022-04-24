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
    { id: 29, label: "Hannes", group: 4 },
    { id: 30, label: "Nile Dok", group: 5 },
    { id: 31, label: "Darius Zackery", group: 10 },
    { id: 32, label: "Wall Cult", group: 7 ,shape: 'box'},
    { id: 33, label: "Pastor Nick", group: 7 },
    // { id: 34, label: "Merchants", group: 8, shape: 'box'},
    { id: 35, label: "Dino Reeves", group: 8 },
    { id: 36, label: "Smiling Titan", group: 9 },
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
    { id: 100, label: "Titans", group: 9, shape: 'box'},

  ];

  // create some edges
  var edges = [];

//Eren Jaeger
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ['Smiling Titan', 'Reiner Braun/Armored Titan','Bertholdt Hoover/Colossal Titan', 'Annie Leonhart/Female Titan', 'Wall Cult', 
  'Pastor Nick', 'Nile Dok', 'Military Police',];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 0, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ['Mikasa Ackermann','Hange Zoe','Erwin Smith','Conny Springer', 'Armin Arlert', 'Hannes', 'Grisha Jaeger',
   'Sasha Braus','Jean Kirschtein', 'Levi Ackermann', 'Survery Corps', 'Christa Lenz/Historia Reiss', 'Ymir/Jaw Titan'];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 0, to: nodes[i].id, color: "green"}) }
}

//Mikasa Ackermann
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ['Dino Reeves', 'Smiling Titan', "Bertholdt Hoover/Colossal Titan", "Reiner Braun/Armored Titan","Annie Leonhart/Female Titan"];
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
  var matches = ['Reiner Braun/Armored Titan', 'Bertholdt Hoover/Colossal Titan', 'Annie Leonhart/Female Titan',];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 2, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ['Christa Lenz/Historia Reiss', 'Sasha Braus', 'Jean Kirschtein', 'Conny Springer', "Levi Ackermann", 
   "Erwin Smith", "Hange Zoë", "Survey Corps", "Dot Pixis", "Hannes", "Ymir/Jaw Titan"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 2, to: nodes[i].id, color: "green"}) }
}

//Reiner Braun/Armored Titan
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Hange Zoë","Survey Corps","Conny Springer", "Sasha Braus", "Jean Kirschtein","Levi Ackermann"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 3, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Annie Leonhart/Female Titan", "Bertholdt Hoover/Colossal Titan","Ymir/Jaw Titan", "Marcel"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 3, to: nodes[i].id, color: "green"}) }
}

//Bertholdt Hoover/Colossal Titan
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Hange Zoë", "Survey Corps", "Conny Springer", "Sasha Braus", "Jean Kirschtein","Christa Lenz/Historia Reiss","Levi Ackermann"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 4, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Annie Leonhart/Female Titan","Ymir/Jaw Titan", "Marcel"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 4, to: nodes[i].id, color: "green"}) }
}


//Annie Leonhart/Female Titan
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Hange Zoë","Survey Corps","Conny Springer", "Sasha Braus", "Jean Kirschtein","Christa Lenz/Historia Reiss","Levi Ackermann",
"Wall Cult", "Pastor Nick", "Hitch Dreyse", "Marlowe Freudenberg"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 5, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Ymir/Jaw Titan", "Marcel"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 5, to: nodes[i].id, color: "green"}) }
}

//Christa Lenz/Historia Reiss
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Wall Cult"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 6, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Hange Zoë", "Survey Corps","Conny Springer", "Sasha Braus", "Jean Kirschtein", "Ymir/Jaw Titan", "Nanaba", "Pastor Nick", "Daz"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 6, to: nodes[i].id, color: "green"}) }
}

//Sasha Braus
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 7, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ['Jean Kirschtein', 'Conny Springer', "Levi Ackermann", 
 "Erwin Smith", "Survey Corps", "Ymir/Jaw Titan"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 7, to: nodes[i].id, color: "green"}) }
}

//Jean Kirschtein
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan"];
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
var matches = ["Beast Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 10, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Levi Ackermann", "Erwin Smith", "Hange Zoë", "Survey Corps", "Ymir/Jaw Titan", "Lynne", "Gelgar", "Conny's Mother", "Dot Pixis"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 10, to: nodes[i].id, color: "green"}) }
}

//Levi Ackermann
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 11, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Hange Zoë", "Survey Corps", "Erwin Smith", "Miche Zacharius", "Eld Gin", "Oruo Bozad", "Petra Rall", "Günther Schultz"];
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
 var matches2 = ["Hange Zoë", "Survey Corps", "Miche Zacharius", "Dot Pixis", "Eld Gin", "Oruo Bozad", "Petra Rall", "Günther Schultz"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 12, to: nodes[i].id, color: "green"}) }
}

//Hange Zoe
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Pastor Nick"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 14, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Moblit Berner", "Miche Zacharius", "Sawney", "Beane", "Eld Gin", "Oruo Bozad", "Petra Rall", "Günther Schultz"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 14, to: nodes[i].id, color: "green"}) }
}

//Miche Zacharius
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 15, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Nanaba", "Henning", "Lynne", "Gelgar"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 15, to: nodes[i].id, color: "green"}) }
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
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 33, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Wall Cult"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 33, to: nodes[i].id, color: "green"}) }
}

//Ymir/Jaw Titan
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 45, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Daz"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 45, to: nodes[i].id, color: "green"}) }
}

//Moblit Berner
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Sawney", "Beane"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 51, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Levi Ackermann", "Eld Gin", "Oruo Bozad", "Petra Rall", "Günther Schultz", "Conny's Mother"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 51, to: nodes[i].id, color: "green"}) }
}

//Eld Gin
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Annie Leonhart/Female Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 52, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Oruo Bozad", "Petra Rall", "Günther Schultz"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 52, to: nodes[i].id, color: "green"}) }
}

//Oruo Bozad
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Annie Leonhart/Female Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 53, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Petra Rall", "Günther Schultz"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 53, to: nodes[i].id, color: "green"}) }
}

//Petra Rall
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Annie Leonhart/Female Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 54, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Günther Schultz"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 54, to: nodes[i].id, color: "green"}) }
}

//Günther Schultz
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Annie Leonhart/Female Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 55, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 55, to: nodes[i].id, color: "green"}) }
}

//Nanaba
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 56, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps", "Gelgar", "Henning", "Lynne"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 56, to: nodes[i].id, color: "green"}) }
}

//Gelgar
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 57, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps",  "Henning", "Lynne"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 57, to: nodes[i].id, color: "green"}) }
}

//Henning
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = [];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 58, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = [ "Lynne"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 58, to: nodes[i].id, color: "green"}) }
}

//Lynne
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Beast Titan"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 59, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = ["Survey Corps"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 59, to: nodes[i].id, color: "green"}) }
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
 var matches2 = ["Marlowe Freudenberg"];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 64, to: nodes[i].id, color: "green"}) }
}

//titans
for (let i = 0; i < nodes.length ; i++) {
//negative edges
let neg = [];
var matches = ["Eren Jaeger", "Mikasa Ackermann", "Armin Arlert","Christa Lenz/Historia Reiss", "Sasha Braus", "Jean Kirschtein",
"Conny Springer", "Levi Ackermann", "Erwin Smith", "Hange Zoë", "Dot Pixis", "Hannes", "Moblit Berner", "Eld Gin", "Oruo Bozard", "Petra Rall"
, "Günther Schultz", "Nanaba", "Gelgar", "Henning", "Lynne", "Hitch Dreyse", "Marlowe Freudenberg"];
if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
if ( neg.includes(nodes[i].id)){ edges.push({from: 100, to: nodes[i].id, color: "red"}) }

 //positive edges
 let pos = [];
 var matches2 = [];
 if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
 if ( pos.includes(nodes[i].id)){ edges.push({from: 100, to: nodes[i].id, color: "green"}) }
}


console.log("Nodes: ", nodes.length)
console.log("Edges: ", edges.length)
degreeDis = {}
colorDis = {}

edges.forEach(element => {
let nameFrom = nodes.find(n => n.id === element.from)["label"];
if(degreeDis.hasOwnProperty(nameFrom)){
  degreeDis[nameFrom] += 1
}else{
  degreeDis[nameFrom] = 0
}

let nameTo = nodes.find(n => n.id === element.to)["label"];
if(degreeDis.hasOwnProperty(nameTo)){
  degreeDis[nameTo] += 1
}else{
  degreeDis[nameTo] = 0
}

if(colorDis.hasOwnProperty(element.color)){
  colorDis[element.color] += 1
}else{
  colorDis[element.color] = 0
}
});

// Create items array
var items = Object.keys(degreeDis).map(function(key) {
return [key, degreeDis[key]];
});

// Sort the array based on the second element
items.sort(function(first, second) {
return second[1] - first[1];
});

//console.log(degreeDis);
console.log("Degree Distribution:", items)
console.log("Graph Coloring:", colorDis)

  // create a network
  var container = document.getElementById("mynetwork2");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    layout:{
      randomSeed: 0,
    },
    nodes: {
      shape: "dot",
      size: 16,
    },
    edges:{
      selectionWidth:3
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
  }

  window.addEventListener("load", () => {
    draw();
  });

//draw();