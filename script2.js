function draw() {
  //https://localhost:57573/index.html
    // create some nodes

    /* group numbers
    
    2 - survey corps
    3 - wall sections
    4 - Garrison
    5 - military police
    6 - erens parents
    7 - Wall Cult/pastor
    8 - Merchants
    9 - titans
    10 - Mikasas parents
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
      { id: 9, label: "Beast Titan", group: 9 },
      { id: 10, label: "Conny Springer", group: 2 },
      { id: 11, label: "Levi Ackermann", group: 2 },
      { id: 12, label: "Erwin Smith", group: 2 },
      { id: 13, label: "Moblit Berner", group: 2 },
      { id: 14, label: "Hange Zoë", group: 2 },
      { id: 15, label: "Miche Zacharius", group: 2 },
      { id: 16, label: "Eld Gin", group: 2 },
      { id: 17, label: "Oruo Bozad", group: 2 },
      { id: 18, label: "Petra Rall", group: 2 },
      { id: 19, label: "Survey Corps", group: 2 },
      { id: 20, label: "Garrison", group: 4 },
      { id: 21, label: "Military Police", group: 5 },
      { id: 22, label: "Grisha Jaeger", group: 6 },
      { id: 23, label: "Wall Rose", group: 6 },
      { id: 24, label: "Dot Pixis", group: 4 },
      { id: 25, label: "Marcel", group: 9 },
      // { id: 26, label: "Rico Brzensk", group: 4 },
      { id: 27, label: "Günther Schultz", group: 2 },
      // { id: 28, label: "Ian Dietrich", group: 4 },
      { id: 29, label: "Hannes", group: 4 },
      { id: 30, label: "Nile Dok", group: 5 },
      { id: 31, label: "Darius Zackery", group: 2 },
      { id: 32, label: "Wall Cult", group: 7 },
      { id: 33, label: "Pastor Nick", group: 7 },
      { id: 34, label: "Conny's Mother", group: 9 },
      { id: 35, label: "Dino Reeves", group: 8 },
      { id: 36, label: "Smiling Titan", group: 9 },
      { id: 37, label: "Sawney", group: 9 },
      { id: 38, label: "Beane", group: 9 },
      { id: 39, label: "Daz", group: 2 },
      { id: 40, label: "Nanaba", group: 2 },
      { id: 41, label: "Gelgar", group: 2 },
      { id: 42, label: "Henning", group: 2 },
      { id: 43, label: "Lynne", group: 2 },
      { id: 44, label: "Titans", group: 9 },
      { id: 45, label: "Ymir/Jaw Titan", group: 9 },
    ];
  
    // create some edges
    var edges = [];

//eren
for (let i = 0; i < nodes.length ; i++) {
    //skip specific node
    // if (nodes[i].id == 0) {continue}

    //negative edges
    let neg = [];
    var matches = ['Smiling Titan', 'Reiner Braun/Armored Titan','Bertholdt Hoover/Colossal Titan', 'Annie Leonhart/Female Titan', 'Wall Cult', 
    'Pastor Nick', 'Nile Dok', 'Military Police',];
    if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
    if ( neg.includes(nodes[i].id)){ edges.push({from: 0, to: nodes[i].id, color: "red"}) }

     //positive edges
     let pos = [];
     var matches2 = ['Mikasa Ackermann','Hange Zoe','Erwin Smith','Conny Springer',
     'Armin Arlert', 'Hannes', 'Grisha Jaeger','Sasha Braus','Jean Kirschtein', 'Levi Ackermann', 'Survery Corps',
     'Christa Lenz/Historia Reiss', 'Ymir/Jaw Titan'];
     if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
     if ( pos.includes(nodes[i].id)){ edges.push({from: 0, to: nodes[i].id, color: "green"}) }
}

//mikasa
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

//armin
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

//Reiner
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

//Bertholdt
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
  "Wall Cult", "Pastor Nick"];
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

//Moblit Berner
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Sawney", "Beane"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 13, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Survey Corps", "Levi Ackermann", "Eld Gin", "Oruo Bozad", "Petra Rall", "Günther Schultz", "Conny's Mother"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 13, to: nodes[i].id, color: "green"}) }
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

//Eld Gin
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Annie Leonhart/Female Titan"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 16, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Survey Corps", "Oruo Bozad", "Petra Rall", "Günther Schultz"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 16, to: nodes[i].id, color: "green"}) }
}

//Oruo Bozad
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Annie Leonhart/Female Titan"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 17, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Survey Corps", "Petra Rall", "Günther Schultz"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 17, to: nodes[i].id, color: "green"}) }
}

//Petra Rall
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Annie Leonhart/Female Titan"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 18, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Survey Corps", "Günther Schultz"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 18, to: nodes[i].id, color: "green"}) }
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
  if ( neg.includes(nodes[i].id)){ edges.push({from: 22, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Hannes"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 22, to: nodes[i].id, color: "green"}) }
}


//Günther Schultz
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Annie Leonhart/Female Titan"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 27, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Survey Corps"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 27, to: nodes[i].id, color: "green"}) }
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

//Nanaba
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Beast Titan"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 40, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Survey Corps", "Gelgar", "Henning", "Lynne"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 40, to: nodes[i].id, color: "green"}) }
}

//Gelgar
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Beast Titan"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 41, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Survey Corps",  "Henning", "Lynne"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 41, to: nodes[i].id, color: "green"}) }
}

//Henning
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = [];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 42, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = [ "Lynne"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 42, to: nodes[i].id, color: "green"}) }
}

//Lynne
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Beast Titan"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 42, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ["Survey Corps"];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 42, to: nodes[i].id, color: "green"}) }
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


//titans
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Eren Jaeger", "Mikasa Ackermann", "Armin Arlert", "Reiner Braun", "Bertholdt Hoover", "Annie Leonhart", 
  "Christa Lenz", "Sasha Braus", "Jean Kirschtein", "Marco Bott", "Conny Springer", 
  "Levi Ackermann", "Erwin Smith", "Keith Sadies", "Hange Zoë", "Miche Zacharius", "Wall Maria",
  "Carla Jaeger", "Dot Pixis", "Kitz Woermann", "Rico Brzensk", "Mitabi Jarnach", "Ian Dietrich", 
  "Hannes", "Dino Reeves", "Daz", "Hannah Diamant", "Franz Kefka", "Ymir"];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 44, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ['Smiling Titan','Colossal Titan','Armored Titan'];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 44, to: nodes[i].id, color: "green"}) }
}
console.log(edges.length, nodes.length)
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

console.log(items)
console.log(colorDis)


    // create a network
    var container = document.getElementById("mynetwork2");
    var data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {
      nodes: {
        shape: "dot",
        size: 16,
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
  