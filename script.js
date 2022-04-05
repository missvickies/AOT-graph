
function draw() {
    // create some nodes

    /* group numbers
    1 - 104th cadets
    2 - Survey corps
    3 - Wall sections
    4 - Garrison
    5 - Military police
    6 - Erens parents
    7 - Wall Cult/pastor
    8 - Merchants
    9 - Titans
    10 - Mikasas parents
    11 - Instructors
    */
    var nodes = [
      { id: 0, label: "Eren Jaeger", group: 1 },
      { id: 1, label: "Mikasa Ackermann", group: 1 },
      { id: 2, label: "Armin Arlert", group: 1 },
      { id: 3, label: "Reiner Braun", group: 1 },
      { id: 4, label: "Bertholdt Hoover", group: 1 },
      { id: 5, label: "Annie Leonhart", group: 1 },
      { id: 6, label: "Christa Lenz", group: 1 },
      { id: 7, label: "Sasha Braus", group: 1 },
      { id: 8, label: "Jean Kirschtein", group: 1 },
      { id: 9, label: "Marco Bott", group: 1 },
      { id: 10, label: "Conny Springer", group: 1 },
      { id: 11, label: "Levi Ackermann", group: 2 },
      { id: 12, label: "Erwin Smith", group: 2 },
      { id: 13, label: "Keith Sadies", group: 11 },
      { id: 14, label: "Hange Zoë", group: 2 },
      { id: 15, label: "Miche Zacharius", group: 2 },
      { id: 16, label: "Wall Maria", group: 3 },
      { id: 17, label: "Wall Rose", group: 3 },
      { id: 18, label: "Wall Sina", group: 3 },
      { id: 19, label: "Survey Corps", group: 2 },
      { id: 20, label: "Garrison", group: 4 },
      { id: 21, label: "Military Police", group: 5 },
      { id: 22, label: "Grisha Jaeger", group: 6 },
      { id: 23, label: "Carla Jaeger", group: 6 },
      { id: 24, label: "Dot Pixis", group: 4 },
      { id: 25, label: "Kitz Woermann", group: 4 },
      { id: 26, label: "Rico Brzensk", group: 4 },
      { id: 27, label: "Mitabi Jarnach", group: 4 },
      { id: 28, label: "Ian Dietrich", group: 4 },
      { id: 29, label: "Hannes", group: 4 },
      { id: 30, label: "Nile Dok", group: 5 },
      { id: 31, label: "Darius Zackery", group: 11 },
      { id: 32, label: "Wall Cult", group: 7 },
      { id: 33, label: "Pastor Nick", group: 7 },
      { id: 34, label: "Merchants", group: 8 },
      { id: 35, label: "Dino Reeves", group: 8 },
      { id: 36, label: "Smiling Titan", group: 9 },
      { id: 37, label: "Armored Titan", group: 9 },
      { id: 38, label: "Colossal Titan", group: 9 },
      { id: 39, label: "Daz", group: 1 },
      { id: 40, label: "Hannah Diamant", group: 1 },
      { id: 41, label: "Franz Kefka", group: 1 },
      { id: 42, label: "Mikasa's Mother", group: 10 },
      { id: 43, label: "Ackermann", group: 10 },
      { id: 44, label: "Titans", group: 9 },
      { id: 45, label: "Ymir", group: 1 },
      { id: 46, label: "Mina Carolina", group: 1 },
      { id: 47, label: "Milieus Zeremski", group: 1 },
      { id: 48, label: "Nack Tierce", group: 1 },
      { id: 49, label: "Thomas Wagner", group: 1 },
    ];
  
    // create some edges
    var edges = [

      { from: 1, to: 25, color: "red" },
      { from: 1, to: 35, color: "red" },
      { from: 1, to: 36, color: "red" },
      { from: 1, to: 2, color: "green" },
      { from: 1, to: 7, color: "green" },
      { from: 1, to: 8, color: "green" },
      { from: 1, to: 10, color: "green" },
      { from: 1, to: 13, color: "green" },
      { from: 1, to: 19, color: "green" },
      { from: 1, to: 22, color: "green" },
      { from: 1, to: 23, color: "green" },
      { from: 1, to: 24, color: "green" },
      { from: 1, to: 26, color: "green" },
      { from: 1, to: 27, color: "green" },
      { from: 1, to: 28, color: "green" },
      { from: 1, to: 29, color: "green" },
      { from: 1, to: 42, color: "green" },
      { from: 1, to: 43, color: "green" },

      { from: 2, to: 25, color: "red" },
      { from: 2, to: 3, color: "green" },
      { from: 2, to: 4, color: "green" },
      { from: 2, to: 5, color: "green" },
      { from: 2, to: 7, color: "green" },
      { from: 2, to: 8, color: "green" },
      { from: 2, to: 9, color: "green" },
      { from: 2, to: 10, color: "green" },
      { from: 2, to: 13, color: "green" },
      { from: 2, to: 19, color: "green" },
      { from: 2, to: 24, color: "green" },
      { from: 2, to: 29, color: "green" },
      { from: 2, to: 40, color: "green" },
      { from: 2, to: 41, color: "green" },
      { from: 2, to: 46, color: "green" },
      { from: 2, to: 47, color: "green" },
      { from: 2, to: 48, color: "green" },
      { from: 2, to: 49, color: "green" },

      { from: 3, to: 4, color: "green" },
      { from: 3, to: 5, color: "green" },
      { from: 3, to: 6, color: "green" },
      { from: 3, to: 7, color: "green" },
      { from: 3, to: 8, color: "green" },
      { from: 3, to: 9, color: "green" },
      { from: 3, to: 10, color: "green" },
      { from: 3, to: 1, color: "green" },
      { from: 3, to: 13, color: "green" },

      { from: 4, to: 5, color: "green" },
      { from: 4, to: 6, color: "green" },
      { from: 4, to: 8, color: "green" },
      { from: 4, to: 9, color: "green" },
      { from: 4, to: 10, color: "green" },
      { from: 4, to: 13, color: "green" },

      { from: 5, to: 6, color: "green" },
      { from: 5, to: 9, color: "green" },
      { from: 5, to: 10, color: "green" },
      { from: 5, to: 13, color: "green" },
      
      { from: 6, to: 7, color: "green" },
      { from: 6, to: 9, color: "green" },
      { from: 6, to: 13, color: "green" },
      { from: 6, to: 45, color: "green" },

      { from: 7, to: 8, color: "green" },
      { from: 7, to: 9, color: "green" },
      { from: 7, to: 13, color: "green" },
      { from: 7, to: 45, color: "green" },

      { from: 8, to: 9, color: "green" },
      { from: 8, to: 10, color: "green" },
      { from: 8, to: 13, color: "green" },
      { from: 8, to: 39, color: "green" },
      { from: 8, to: 40, color: "green" },
      { from: 8, to: 41, color: "green" },

      { from: 9, to: 10, color: "green" },
      { from: 9, to: 39, color: "green" },
      { from: 9, to: 13, color: "green" },

      { from: 11, to: 12, color: "green" },
      { from: 11, to: 14, color: "green" },
      { from: 11, to: 15, color: "green" },
      { from: 11, to: 19, color: "green" },

      { from: 12, to: 14, color: "green" },
      { from: 12, to: 15, color: "green" },
      { from: 12, to: 19, color: "green" },
      { from: 12, to: 24, color: "green" },

      { from: 13, to: 46, color: "green" },
      { from: 13, to: 47, color: "green" },
      { from: 13, to: 48, color: "green" },
      { from: 13, to: 49, color: "green" },

      { from: 14, to: 15, color: "green" },
      { from: 14, to: 19, color: "green" },

      { from: 15, to: 19, color: "green" },  

      { from: 16, to: 17, color: "green" }, 
      { from: 16, to: 19, color: "red" }, 
      { from: 16, to: 21, color: "red" }, 

      { from: 19, to: 21, color: "red" }, 
      { from: 19, to: 20, color: "green" }, 
      { from: 19, to: 31, color: "green" }, 

      { from: 20, to: 21, color: "green" }, 
      { from: 20, to: 24, color: "green" }, 
      { from: 20, to: 25, color: "green" }, 
      { from: 20, to: 26, color: "green" }, 
      { from: 20, to: 27, color: "green" }, 
      { from: 20, to: 28, color: "green" }, 
      { from: 20, to: 29, color: "green" }, 
      { from: 20, to: 31, color: "green" }, 

      { from: 21, to: 30, color: "green" }, 
      { from: 21, to: 31, color: "green" }, 
      { from: 21, to: 32, color: "green" }, 
      { from: 21, to: 33, color: "green" }, 

      { from: 22, to: 23, color: "green" }, 
      { from: 22, to: 29, color: "green" }, 
      { from: 22, to: 42, color: "green" }, 
      { from: 22, to: 43, color: "green" }, 

      { from: 23, to: 29, color: "green" }, 

      { from: 24, to: 25, color: "green" },
      { from: 24, to: 26, color: "green" },
      { from: 24, to: 27, color: "green" },
      { from: 24, to: 28, color: "green" },
      { from: 24, to: 29, color: "green" },
      { from: 24, to: 30, color: "green" },

      { from: 25, to: 26, color: "green" },

      { from: 26, to: 27, color: "green" },
      { from: 25, to: 28, color: "green" },

      { from: 27, to: 28, color: "green" },
      
      { from: 29, to: 36, color: "red" },
      { from: 25, to: 37, color: "red" },
      { from: 25, to: 38, color: "red" },

      { from: 32, to: 34, color: "red" },
      { from: 32, to: 33, color: "green" },

      { from: 33, to: 34, color: "red" },

      { from: 34, to: 35, color: "green" },

      { from: 35, to: 16, color: "red" },
      { from: 35, to: 17, color: "red" },

      { from: 36, to: 37, color: "green" },
      { from: 36, to: 38, color: "green" },

      { from: 37, to: 1, color: "red" },
      { from: 37, to: 2, color: "red" },
      { from: 37, to: 16, color: "red" },
      { from: 37, to: 29, color: "red" },
      { from: 37, to: 38, color: "green" },

      { from: 38, to: 1, color: "red" },
      { from: 38, to: 2, color: "red" },
      { from: 38, to: 16, color: "red" },
      { from: 38, to: 29, color: "red" },
      { from: 38, to: 46, color: "red" },
      { from: 38, to: 47, color: "red" },
      { from: 38, to: 48, color: "red" },
      { from: 38, to: 49, color: "red" },

      
      { from: 40, to: 41, color: "green" },
      { from: 40, to: 13, color: "green" },

      { from: 41, to: 13, color: "green" },

      { from: 46, to: 47, color: "green" },
      { from: 46, to: 48, color: "green" },
      { from: 46, to: 49, color: "green" },

      { from: 47, to: 48, color: "green" },
      { from: 47, to: 49, color: "green" },

      { from: 48, to: 49, color: "green" },
    ];


//eren
for (let i = 0; i < nodes.length ; i++) {
    //skip specific node
    // if (nodes[i].id == 0) {continue}

    //negative edges
    let neg = [];
    var matches = ['Smiling Titan', 'Armored Titan','Colossal Titan','Wall Cult','Pastor Nick',
    'Wall Rose', 'Wall Sina','Nile Dok', 'Military Police', 'Merchants'];
    if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
    if ( neg.includes(nodes[i].id)){ edges.push({from: 0, to: nodes[i].id, color: "red"}) }

     //positive edges
     let pos = [];
     var matches2 = ['Levi Ackermann','Mikasa Ackermann', 'Marco Bott', 'Hange Zoe','Erwin Smith','Wall Maria','Conny Springer',
     'Armin Arlert','Reiner Braun', 'Bertholdt Hoover',"Grisha Jaeger",'Keith Sadies','Hannah Diamant','Franz Kefka','Sasha Braus',
     'Annie Leonhart','Jean Kirschtein', 'Mina Carolina', 'Milieus Zeremski', 'Nack Tierce', 'Thomas Wagner',"Ymir","Christa Lenz"];
     if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
     if ( pos.includes(nodes[i].id)){ edges.push({from: 0, to: nodes[i].id, color: "green"}) }
}

// //wall rose
for (let i = 0; i < nodes.length ; i++) {
    //negative edges
    let neg = [];
    var matches = ['Survey Corps'];
    if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
    if ( neg.includes(nodes[i].id)){ edges.push({from: 17, to: nodes[i].id, color: "red"}) }

     //positive edges
     let pos = [];
     var matches2 = ['Garrison','Military Police'];
     if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
     if ( pos.includes(nodes[i].id)){ edges.push({from: 17, to: nodes[i].id, color: "green"}) }
}

//wall sina
for (let i = 0; i < nodes.length ; i++) {
    //negative edges
    let neg = [];
    var matches = ['Survey Corps','Dino Reeves'];
    if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
    if ( neg.includes(nodes[i].id)){ edges.push({from: 18, to: nodes[i].id, color: "red"}) }

     //positive edges
     let pos = [];
     var matches2 = ['Garrison','Military police',];
     if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
     if ( pos.includes(nodes[i].id)){ edges.push({from: 18, to: nodes[i].id, color: "green"}) }
}

//titans
for (let i = 0; i < nodes.length ; i++) {
  //negative edges
  let neg = [];
  var matches = ["Eren Jaeger", "Mikasa Ackermann", "Armin Arlert", "Reiner Braun", "Bertholdt Hoover", "Annie Leonhart", 
  "Christa Lenz", "Sasha Braus", "Jean Kirschtein", "Marco Bott", "Conny Springer", 
  "Levi Ackermann", "Erwin Smith", "Keith Sadies", "Hange Zoë", "Miche Zacharius", "Wall Maria",
  "Carla Jaeger", "Dot Pixis", "Kitz Woermann", "Rico Brzensk", "Mitabi Jarnach", "Ian Dietrich", 
  "Hannes", "Dino Reeves", "Daz", "Hannah Diamant", "Franz Kefka", "Ymir", 
  'Mina Carolina', 'Milieus Zeremski', 'Nack Tierce', 'Thomas Wagner'];
  if (~ matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id)}
  if ( neg.includes(nodes[i].id)){ edges.push({from: 44, to: nodes[i].id, color: "red"}) }

   //positive edges
   let pos = [];
   var matches2 = ['Smiling Titan','Colossal Titan','Armored Titan'];
   if (~ matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id)}
   if ( pos.includes(nodes[i].id)){ edges.push({from: 44, to: nodes[i].id, color: "green"}) }
}

// //titans
// for (let i = 0; i < nodes.length ; i++) {
//   var matches = [];
//   if ( ! ~ matches.indexOf(nodes[i].label))
//   { edges.push({from: 44, to: nodes[i].id, color: "red"}) }
// }

console.log(nodes.length)
console.log(edges.length)
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
    var container = document.getElementById("mynetwork");
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
  