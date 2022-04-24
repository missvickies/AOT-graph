function draw() {

  /* group numbers
  1 - 104th Cadets
  2 - Survey Corps
  3 - Wall sections
  4 - Garrison
  5 - Military police
  6 - Related to Main Characters
  7 - Wall Cult
  8 - Merchants
  9 - Titans
  10 - Leaders of Groups
  11 - The Royal Government
  12 - Reiss Family
  13 - Anti-Personnel Control Squad
  14 - Warriors
  15 - Volunteers
  16 - Jaegerist
  17 - Eldians
  18 - Marlyeans
  19 - Tybur Family
  20 - Restorationists
  21 - Volunteers

  */
  var nodes = [

    { id: 0, label: "Eren Jaeger/Attack Titan", group: 16 },
    { id: 1, label: "Mikasa Ackermann", group: 2 },
    { id: 2, label: "Armin Arlert", group: 2 },
    { id: 3, label: "Reiner Braun/Armored Titan", group: 14 },
    { id: 4, label: "Bertholdt Hoover/Colossal Titan", group: 14, opacity: 0.5 },
    { id: 5, label: "Annie Leonhart/Female Titan", group: 14 },
    { id: 6, label: "Christa Lenz/Historia Reiss", group: 11 },
    { id: 7, label: "Sasha Braus", group: 2, opacity: 0.5 },
    { id: 8, label: "Jean Kirschtein", group: 2 },
    { id: 9, label: "Marco Bott", group: 1, opacity: 0.5 },
    { id: 10, label: "Conny Springer", group: 2 },
    { id: 11, label: "Levi Ackermann", group: 2 },
    { id: 12, label: "Erwin Smith", group: 2, opacity: 0.5 },
    { id: 13, label: "Keith Sadies", group: 10 },
    { id: 14, label: "Hange Zoë", group: 2 },
    { id: 15, label: "Miche Zacharius", group: 2, opacity: 0.5 },
    { id: 16, label: "Wall Maria", group: 3 },
    { id: 17, label: "Wall Rose", group: 3 },
    { id: 18, label: "Wall Sina", group: 3 },
    { id: 19, label: "Survey Corps", group: 2, shape: 'box' },
    { id: 20, label: "Garrison", group: 4, shape: 'box' },
    { id: 21, label: "Military Police", group: 5, shape: 'box' },
    { id: 22, label: "Grisha Jaeger", group: 20, opacity: 0.5 },
    { id: 23, label: "Carla Jaeger", group: 6, opacity: 0.5 },
    { id: 24, label: "Dot Pixis", group: 4 },
    { id: 25, label: "Kitz Woermann", group: 4 },
    { id: 26, label: "Rico Brzensk", group: 4 },
    { id: 27, label: "Mitabi Jarnach", group: 4, opacity: 0.5 },
    { id: 28, label: "Ian Dietrich", group: 4, opacity: 0.5 },
    { id: 29, label: "Hannes", group: 4 },
    { id: 30, label: "Nile Dok", group: 5 },
    { id: 31, label: "Darius Zackery", group: 10, opacity: 0.5 },
    { id: 32, label: "Wall Cult", group: 7, shape: 'box' },
    { id: 33, label: "Pastor Nick", group: 7, opacity: 0.5 },
    { id: 34, label: "Merchants", group: 8, shape: 'box' },
    { id: 35, label: "Dino Reeves", group: 8, opacity: 0.5 },
    { id: 36, label: "Dina Fritz/Smiling Titan", group: 20, opacity: 0.5 },
    // { id: 37, label: "Armored Titan", group: 9 },
    // { id: 38, label: "Colossal Titan", group: 9 },
    { id: 39, label: "Daz", group: 16 },
    { id: 40, label: "Hannah Diamant", group: 1 },
    { id: 41, label: "Franz Kefka", group: 1, opacity: 0.5 },
    { id: 42, label: "Mikasa's Mother", group: 10, opacity: 0.5 },
    { id: 43, label: "Ackermann", group: 10, opacity: 0.5 },
    { id: 45, label: "Ymir/Jaw Titan", group: 9, opacity: 0.5 },
    { id: 46, label: "Mina Carolina", group: 1, opacity: 0.5 },
    { id: 47, label: "Milieus Zeremski", group: 1, opacity: 0.5 },
    { id: 48, label: "Nack Tierce", group: 1, opacity: 0.5 },
    { id: 49, label: "Thomas Wagner", group: 1, opacity: 0.5 },

    { id: 50, label: "Zeke Jaeger/Beast Titan", group: 15 },
    { id: 51, label: "Moblit Berner", group: 2, opacity: 0.5 },
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
    { id: 62, label: "Marcel Galliard/Jaw Titan", group: 14, opacity: 0.5 },
    { id: 63, label: "Conny's Mother", group: 6 },
    { id: 64, label: "Hitch Dreyse", group: 5 },
    { id: 65, label: "Marlowe Freudenberg", group: 5 },

    { id: 66, label: "Flegel Reeves", group: 8 },
    { id: 67, label: "Anti-Personnel Control Squad", group: 13, shape: 'box' },
    { id: 68, label: "Djel Sannes", group: 5 },
    { id: 69, label: "Ralph", group: 5 },
    { id: 70, label: "The Royal Government", group: 11, shape: 'box' },
    { id: 71, label: "Nifa", group: 2, opacity: 0.5 },
    //{ id: 72, label: "Reiss Family", group: 12, shape: 'box'},
    { id: 73, label: "Rod Reiss", group: 12, opacity: 0.5 },
    { id: 74, label: "Uri Reiss", group: 12, opacity: 0.5 },
    { id: 75, label: "Frieda Reiss", group: 12, opacity: 0.5 },
    { id: 76, label: "King Fritz", group: 11 },
    { id: 77, label: "Royal Government Minister", group: 11 },
    { id: 78, label: "High-Ranking Military Official", group: 11 },
    { id: 79, label: "Duran", group: 13, opacity: 0.5 },
    { id: 80, label: "Kenny Ackermann", group: 13, opacity: 0.5 },
    { id: 81, label: "Traut Caven", group: 13, opacity: 0.5 },

    { id: 82, label: "Marleyans", group: 18, shape: 'box' },
    // { id: 83, label: "Warriors", group: 13 },
    { id: 84, label: "Theo Magath", group: 14 },
    { id: 85, label: "Gabi Braun", group: 14 },
    { id: 86, label: "Falco Grice", group: 14 },
    { id: 87, label: "Udo", group: 14, opacity: 0.5 },
    { id: 88, label: "Zofia", group: 14, opacity: 0.5 },
    { id: 89, label: "Colt Grice", group: 14 },
    { id: 90, label: "Pieck Finger/Cart Titan", group: 14 },
    { id: 91, label: "Porco Galliard/Jaw Titan", group: 14 },
    // { id: 92, label: "Tybur Family", group: 13 },
    { id: 93, label: "Willy Tybur", group: 19, opacity: 0.5 },
    { id: 94, label: "Lara Tybur/War Hammer Titan", group: 19, opacity: 0.5 },
    { id: 95, label: "Fine Tybur", group: 19 },
    { id: 96, label: "Karina Braun", group: 17 },
    { id: 97, label: "Floch Forster", group: 16 },
    { id: 98, label: "Volunteers", group: 15, shape: 'box' },
    { id: 99, label: "Yelena", group: 15 },
    { id: 100, label: "Oonyakapon", group: 15 },
    { id: 101, label: "Nicolo", group: 15 },
    { id: 102, label: "Faye Jaeger", group: 17 },
    { id: 103, label: "Jaeger", group: 17 },
    { id: 104, label: "Grisha's Mother", group: 17 },
    { id: 105, label: "Restorationists", group: 19, shape: 'box' },
    { id: 106, label: "Eren Kruger/The Owl/Attack Titan", group: 19 },
    { id: 107, label: "Gross", group: 18 },
    { id: 108, label: "Jaegerist", group: 16, shape: 'box' },
    { id: 109, label: "Kaya", group: 17 },
    { id: 110, label: "Artur Braus", group: 17 },

    { id: 111, label: "Titans", group: 9, shape: 'box' },


  ];

  // create some edges
  var edges = [];


  //Eren Jaeger
  for (let i = 0; i < nodes.length; i++) {

    //negative edges
    let neg = [];
    var matches = ['Reiner Braun/Armored Titan', 'Annie Leonhart/Female Titan', 'Military Police', 'Garrison', 'Dot Pixis', 'Darius Zackery',
      'Marleyans', 'Theo Magath', 'Gabi Braun', 'Falco Grice', 'Udo', 'Zofia', 'Colt Grice', 'Pieck Finger/Cart Titan', 'Porco Galliard/Jaw Titan', 'Lara Tybur/War Hammer Titan',
      "Willy Tybur", 'Hange Zoe', 'Conny Springer', 'Jean Kirschtein', 'Levi Ackermann', 'Survery Corps', 'Christa Lenz/Historia Reiss',];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 0, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ['Zeke Jaeger/Beast Titan', 'Mikasa Ackermann', 'Erwin Smith', 'Carla Jaeger', 'Grisha Jaeger', 'Sasha Braus',
      'Jaegerist', 'Volunteers', 'Yelena', 'Oonyakapon', "Dina Fritz/Smiling Titan", 'Survey Corps'];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 0, to: nodes[i].id, color: "green" }) }
  }

  //Mikasa Ackermann
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Reiner Braun/Armored Titan", "Daz", "Zeke Jaeger/Beast Titan", "Marleyan", "Warriors", "Gabi Braun", "Falco Grice",
      "Colt Grice", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan", "Tybur Family", "Willy Tybur", "Lara Tybur/War Hammer Titan",
      "Karina Braun", "Yelena", "Oonyakapon", "Nicolo", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 1, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Dot Pixis", "Survey Corps", "Sasha Braus", "Armin Arlert", "Christa Lenz/Historia Reiss",
      "Jean Kirschtein", "Conny Springer", "Levi Ackermann", "Hange Zoë", "Survey Corps", "Garrison", "Military Police",
      "Darius Zackery", "Hitch Dreyse"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 1, to: nodes[i].id, color: "green" }) }
  }

  //Armin Arlert
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ['Reiner Braun/Armored Titan', "Daz", "Beast Titan", "Marleyan", "Warriors", "Gabi Braun", "Falco Grice",
      "Colt Grice", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan", "Tybur Family", "Willy Tybur", "Lara Tybur/War Hammer Titan",
      "Karina Braun", "Yelena", "Oonyakapon", "Nicolo", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 2, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ['Annie Leonhart/Female Titan', 'Christa Lenz/Historia Reiss', 'Sasha Braus', 'Jean Kirschtein', 'Conny Springer', "Levi Ackermann",
      "Hange Zoë", "Survey Corps", "Dot Pixis", "Survey Corps", "Garrison", "Military Police", "Darius Zackery", "Hitch Dreyse"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 2, to: nodes[i].id, color: "green" }) }
  }

  //Christa Lenz/Historia Reiss
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Marleyans", "Anti-Personnel Control Squad", "Rod Reiss", "The Royal Government"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 6, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Hange Zoë", "Survey Corps", "Conny Springer", "Sasha Braus", "Jean Kirschtein", "Levi Ackermann", "Survey Corps", "Garrison",
      "Military Police", "Darius Zackery", "Hitch Dreyse"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 6, to: nodes[i].id, color: "green" }) }
  }

  //Sasha Braus
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = ["Marleyans"];
    var matches = ["Beast Titan", "Gabi Braun", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan", 'Reiner Braun/Armored Titan',];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 7, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ['Jean Kirschtein', 'Conny Springer', "Levi Ackermann", "Hange Zoë", "Survey Corps", "Artur Braus"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 7, to: nodes[i].id, color: "green" }) }
  }

  //Jean Kirschtein
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = ["Marleyans"];
    var matches = ["Beast Titan", "Gabi Braun", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan", 'Reiner Braun/Armored Titan',
      "Yelena", "Oonyakapon", "Nicolo"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 8, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ['Conny Springer', "Levi Ackermann", "Darius Zackery", "Hange Zoë", "Survey Corps", "Military Police"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 8, to: nodes[i].id, color: "green" }) }
  }

  //Marco Bott
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Reiner Braun/Armored Titan", "Bertholdt Hoover/Colossal Titan", "Annie Leonhart/Female Titan"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 9, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Jean Kirschtein"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 9, to: nodes[i].id, color: "green" }) }
  }

  //Conny Springer
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = ["Marleyans"];
    var matches = ["Beast Titan", "Gabi Braun", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan", 'Reiner Braun/Armored Titan', "Yelena", "Oonyakapon", "Nicolo"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 10, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Levi Ackermann", "Darius Zackery", "Hange Zoë", "Survey Corps", "Ymir/Jaw Titan", "Conny's Mother", "Dot Pixis"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 10, to: nodes[i].id, color: "green" }) }
  }

  //Levi Ackermann
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = ["Marleyans"];
    var matches = ["Beast Titan", "Gabi Braun", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan", 'Reiner Braun/Armored Titan', "Yelena", "Oonyakapon", "Nicolo"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 11, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Hange Zoë", "Survey Corps", "Darius Zackery",];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 11, to: nodes[i].id, color: "green" }) }
  }

  //Hange Zoë
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = ["Marleyans"];
    var matches = ["Beast Titan", "Gabi Braun", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan", 'Reiner Braun/Armored Titan', "Yelena", "Oonyakapon", "Nicolo"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 14, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Survey Corps"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 14, to: nodes[i].id, color: "green" }) }
  }

  //Wall Rose
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Garrison", "Military Police", "Survery Corps", "Darius Zackery", "Marleyans", "King Fritz"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 17, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Jaegerist", "Eren Jaeger"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 17, to: nodes[i].id, color: "green" }) }
  }

  //Wall Sina
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Garrison", "Military Police", "Survery Corps", "Darius Zackery", "Marleyans", "King Fritz"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 18, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Jaegerist", "Eren Jaeger"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 18, to: nodes[i].id, color: "green" }) }
  }

  //Survey Corps
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Jaegerist", "Marleyans", "Anti-Personnel Control Squad", "Rod Reiss", "The Royal Government",];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 19, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Darius Zackery", "Garrison", "Military Police"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 19, to: nodes[i].id, color: "green" }) }
  }

  //Garrison
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Jaegerist", "Marleyans", "Anti-Personnel Control Squad", "Rod Reiss", "The Royal Government"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 20, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Darius Zackery", "Survey Corps", "Military Police", "Dot Pixis"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 20, to: nodes[i].id, color: "green" }) }
  }

  //Military Police
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Jaegerist", "Marleyans", "Anti-Personnel Control Squad", "Rod Reiss", "The Royal Government"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 21, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Darius Zackery", "Survey Corps", "Garrison", "Nile Dok"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 21, to: nodes[i].id, color: "green" }) }
  }

  //Dot Pixis
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 24, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = [];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 24, to: nodes[i].id, color: "green" }) }
  }

  //Nile Dok
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 30, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = [];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 30, to: nodes[i].id, color: "green" }) }
  }

  //Hitch Dreyse
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 64, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Marlowe Freudenberg", "Survey Corps", "Military Police"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 64, to: nodes[i].id, color: "green" }) }
  }

  //Gabi Braun
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Zeke Jaeger/Beast Titan", "Nicolo", "Kaya"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 85, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Falco Grice", "Udo", "Zofia", "Colt Grice", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan",
      "Theo Magath", "Reiner Braun/Armored Titan", "Artur Braus", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 85, to: nodes[i].id, color: "green" }) }
  }

  //Falco Grice
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Zeke Jaeger/Beast Titan"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 86, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Udo", "Zofia", "Colt Grice", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan",
      "Theo Magath", "Reiner Braun/Armored Titan", "Kaya", "Artur Braus", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 86, to: nodes[i].id, color: "green" }) }
  }

  //Udo
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = [];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 87, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Zofia", "Colt Grice", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan",
      "Theo Magath", "Reiner Braun/Armored Titan", "Zeke Jaeger/Beast Titan", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 87, to: nodes[i].id, color: "green" }) }
  }

  //Zofia
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = [];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 88, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Colt Grice", "Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan",
      "Theo Magath", "Reiner Braun/Armored Titan", "Zeke Jaeger/Beast Titan", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 88, to: nodes[i].id, color: "green" }) }
  }

  //Colt Grice
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = [];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 89, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Pieck Finger/Cart Titan", "Porco Galliard/Jaw Titan",
      "Theo Magath", "Reiner Braun/Armored Titan", "Zeke Jaeger/Beast Titan", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 89, to: nodes[i].id, color: "green" }) }
  }

  //Pieck Finger/Cart Titan
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = [];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 90, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Porco Galliard/Jaw Titan", "Theo Magath", "Reiner Braun/Armored Titan", "Zeke Jaeger/Beast Titan", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 90, to: nodes[i].id, color: "green" }) }
  }

  //Porco Galliard/Jaw Titan
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = [];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 91, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Marcel Galliard/Jaw Titan", "Theo Magath", "Reiner Braun/Armored Titan", "Zeke Jaeger/Beast Titan", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 91, to: nodes[i].id, color: "green" }) }
  }

  //Reiner Braun/Armored Titan
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = [];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 3, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Marcel Galliard/Jaw Titan", "Theo Magath", "Lara Tybur/War Hammer Titan", "Zeke Jaeger/Beast Titan", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 3, to: nodes[i].id, color: "green" }) }
  }

  //Zeke Jaeger/Beast Titan
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Grisha Jaeger", "Dina Fritz/Smiling Titan", "Restorationists", "Jaegerist", "Yelena", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 50, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Marcel Galliard/Jaw Titan", "Theo Magath", "Lara Tybur/War Hammer Titan", "Grisha's Mother",];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 50, to: nodes[i].id, color: "green" }) }
  }

  //Grisha Jaeger
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Gross", "Grisha's Mother", "Restorationists", "Dina Fritz/Smiling Titan", "Rod Reiss", "Frieda Reiss", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 22, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Faye Jaeger", "Eren Kruger/The Owl/Attack Titan", "Carla Jaeger"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 22, to: nodes[i].id, color: "green" }) }
  }

  //Faye Jaeger
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Gross", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 102, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Grisha's Mother",];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 102, to: nodes[i].id, color: "green" }) }
  }

  //Jaeger
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = [];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 103, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Grisha's Mother", "Falco Grice", "Marleyans"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 103, to: nodes[i].id, color: "green" }) }
  }

  //Eren Kruger/The Owl/Attack Titan
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Gross", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 106, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Restorationists", "Dina Fritz/Smiling Titan",];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 106, to: nodes[i].id, color: "green" }) }
  }

  //Kaya
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 109, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Artur Braus",];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 109, to: nodes[i].id, color: "green" }) }
  }


  //Floch Forster
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Armin Arlert", "Miskasa Ackermann", "Hange Zoe", "Conny Springer", "Jean Kirschtein", "Dot Pixis", "Nile Dok",
      "Garrison", "Military Police", "Survery Corps", "Darius Zackery", "Keith Sadies", "Levi Ackermann", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 97, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Erwin Smith", "Eren Jaeger", "Jaegerist", "Yelena", "Daz"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 97, to: nodes[i].id, color: "green" }) }
  }

  //Yelena
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Dot Pixis", "Garrison", "Military Police", "Survery Corps", "Darius Zackery", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 99, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Jaegerist", "Oonyakapon", "Nicolo", "Volunteers", "Eren Jaeger/Attack Titan"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 99, to: nodes[i].id, color: "green" }) }
  }

  //Nicolo
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Dot Pixis", "Garrison", "Military Police", "Survery Corps", "Darius Zackery", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 101, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Jaegerist", "Oonyakapon", "Volunteers", "Kaya", "Artur Braus"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 101, to: nodes[i].id, color: "green" }) }
  }

  //Oonyakapon
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Dot Pixis", "Garrison", "Military Police", "Survery Corps", "Darius Zackery", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 100, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Jaegerist", "Volunteers"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 100, to: nodes[i].id, color: "green" }) }
  }

  //Volunteers
  for (let i = 0; i < nodes.length; i++) {
    //negative edges
    let neg = [];
    var matches = ["Dot Pixis", "Garrison", "Military Police", "Survery Corps", "Darius Zackery", "Marleyans"];
    if (~matches.indexOf(nodes[i].label)) { neg.push(nodes[i].id) }
    if (neg.includes(nodes[i].id)) { edges.push({ from: 98, to: nodes[i].id, color: "red" }) }

    //positive edges
    let pos = [];
    var matches2 = ["Jaegerist"];
    if (~matches2.indexOf(nodes[i].label)) { pos.push(nodes[i].id) }
    if (pos.includes(nodes[i].id)) { edges.push({ from: 98, to: nodes[i].id, color: "green" }) }
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
  var container = document.getElementById("mynetwork4");

  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
      layout:{
          randomSeed: 0,
        },
    interaction: { multiselect: true },
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
        customScalingFunction: function (min, max, total, value) {
          if (max === min) {
            return 0.5;
          }
          else {
            let scale = 1 / (max - min);
            return Math.max(0, (value - min) * scale);
          }
        }
      }
    },
    edges: {
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
 }

window.addEventListener("load", () => {
  draw();
});
  
//draw();
