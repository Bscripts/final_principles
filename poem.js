// function user_storage() {
//     var x = document.getElementById("tword").innerHTML;}

// document.getElementById("title").innerHTML = "" + x;


function pasting() {

    var line1 = Math.floor(Math.random() * 4);
    var line2 = Math.floor(Math.random() * 4);
    var line3 = Math.floor(Math.random() * 4);
    var line4 = Math.floor(Math.random() * 4);
    var line5 = Math.floor(Math.random() * 4);

    var nouncalc = Math.floor(Math.random() * 5)
    var verbcalc = Math.floor(Math.random() * 5)
    var adjcalc = Math.floor(Math.random() * 5)

    if (nouncalc === 0) {
     noun1 = tword1.value; 
     noun2 = tword2.value;
     noun3 = tword7.value;
     noun4 = tword8.value;
     noun5 = tword9.value;
    }
    if (nouncalc === 1) {
     noun2 = tword1.value; 
     noun3 = tword2.value;
     noun4 = tword7.value;
     noun5 = tword8.value;
     noun1 = tword9.value;
    }
    if (nouncalc === 2) {
     noun3 = tword1.value; 
     noun4 = tword2.value;
     noun5 = tword7.value;
     noun1 = tword8.value;
     noun2 = tword9.value;
     }
     if (nouncalc === 3) {
      noun4 = tword1.value; 
      noun5 = tword2.value;
      noun1 = tword7.value;
      noun2 = tword8.value;
      noun3 = tword9.value;
     }
     if (nouncalc === 4) {
     noun5 = tword1.value; 
     noun1 = tword2.value;
     noun2 = tword7.value;
     noun3 = tword8.value;
     noun4 = tword9.value;
    }

    if (verbcalc === 0) {
      verb1 = tword3.value; 
      verb2 = tword4.value;
      verb3 = tword10.value;
      verb4 = tword11.value;
      verb5 = tword12.value;
     }
     if (verbcalc === 1) {
      verb2 = tword3.value; 
      verb3 = tword4.value;
      verb4 = tword10.value;
      verb5 = tword11.value;
      verb1 = tword12.value;
     }
     if (verbcalc === 2) {
      verb3 = tword3.value; 
      verb4 = tword4.value;
      verb5 = tword10.value;
      verb1 = tword11.value;
      verb2 = tword12.value;
     }
     if (verbcalc === 3) {
      verb4 = tword3.value; 
      verb5 = tword4.value;
      verb1 = tword10.value;
      verb2 = tword11.value;
      verb3 = tword12.value;
     }
     if (verbcalc === 4) {
      verb5 = tword3.value; 
      verb1 = tword4.value;
      verb2 = tword10.value;
      verb3 = tword11.value;
      verb4 = tword12.value;
     }

     if (adjcalc === 0) {
      adj1 = tword5.value;
      adj2 = tword6.value;
      adj3 = tword13.value;
      adj4 = tword14.value;
      adj5 = tword15.value;
    }
    if (adjcalc === 1) {
      adj2 = tword5.value;
      adj3 = tword6.value;
      adj4 = tword13.value;
      adj5 = tword14.value;
      adj1 = tword15.value;
    }
    if (adjcalc === 2) {
      adj3 = tword5.value;
      adj4 = tword6.value;
      adj5 = tword13.value;
      adj1 = tword14.value;
      adj2 = tword15.value;
    }
    if (adjcalc === 3) {
      adj4 = tword5.value;
      adj5 = tword6.value;
      adj1 = tword13.value;
      adj2 = tword14.value;
      adj3 = tword15.value;
    }
    if (adjcalc === 4) {
      adj5 = tword5.value;
      adj1 = tword6.value;
      adj2 = tword13.value;
      adj3 = tword14.value;
      adj4 = tword15.value;
    }

    if (line1 === 0) {
      line1 = "In the " + noun1 + " of the " + adj1 + " " + noun4 + " I " + verb1;
    }
    if (line1 === 1) {
      line1 = "I " + verb1 + " my " + adj1 + " " + noun1;
    }
    if (line1 === 2) {
      line1 = "To my " + adj1 + " " + noun1 + " I say " + verb1;
    }
    if (line1 === 3) {
      line1 = "It is the nature of the " + adj1 + " " + noun1 + " to " + verb1;
    }

    if (line2 === 0) {
      line2 = "Take my " + noun2 + " so I may " + verb3;
    }
    if (line2 === 1) {
      line2 = "If I shain't " + verb2 + ", my " + adj2 + " " + noun2 + " will " + verb4;
    }
    if (line2 === 2) {
      line2 = "Every " + adj2 + " " + noun2 + " will learn to " + verb2;
    }
    if (line2 === 3) {
      line2 = "The " + adj2 + " " + noun2 + " will never again " + verb2;
    }

    if (line3 === 0) {
      line3 = "Every year the " + noun3 + " and the " + adj3 + " " + noun1 + " " + verb1;
    }
    if (line3 === 1) {
      line3 = "An eternity of " + verb3 + "ing summons the " + adj3 + " " + noun3;
    }
    if (line3 === 2) {
      line3 = "As my " + adj3 + " " + noun3 + " begins to " + verb3;
    }
    if (line3 === 3) {
      line3 = "The " + adj3 + " " + noun3 + " only knows how to " + verb3;
    }
    if (line4 === 0) {
      line4 = "Give me a " + noun4 + " so I may " + verb4;
    }
    if (line4 === 1) {
      line4 = "Never again will I " + verb4 + " for the sake of the " + adj4 + " " + noun4;
    }
    if (line4 === 2) {
      line4 = "My " + noun2 + "s are filled with " + adj4 + " " + noun4 + "s and all I can do is " + verb4;
    }
    if (line4 === 3) {
      line4 = "Memories of " + adj4 + " " + noun4 + "s " + verb4;
    }

    if (line5 === 0) {
      line5 = "I " + verb5 + " for every " + noun5;
    }
    if (line5 === 1) {
      line5 = "So long as " + noun5 + " " + verb5 + "s, the " + noun3 + " will " + verb2;
    }
    if (line5 === 2) {
      line5 = "It's because of the " + adj5 + " " + noun5 + "s I " + verb5;
    }
    if (line5 === 3) {
      line5 = "Let the " + adj5 + " " + noun5 + "s " + verb5;
    }

    var linecalc = Math.floor(Math.random() * 6)

    if (linecalc === 0) {
      lin1 = line1; 
      lin2 = line2;
      lin3 = line3;
      lin4 = line4;
     }
     if (linecalc === 1) {
      lin3 = line1; 
      lin2 = line2;
      lin4 = line3;
      lin1 = line4;
     }
     if (linecalc === 2) {
      lin2 = line1; 
      lin3 = line2;
      lin4 = line3;
      lin1 = line4;
     }
     if (linecalc === 3) {
      lin3 = line1; 
      lin4 = line2;
      lin1 = line3;
      lin2 = line4;
     }
     if (linecalc === 4) {
      lin4 = line1; 
      lin2 = line2;
      lin3 = line3;
      lin1 = line4;
     }
     if (linecalc === 5) {
      lin4 = line1; 
      lin3 = line2;
      lin2 = line3;
      lin1 = line4;
     }
    

    document.getElementById("paste1").innerHTML = lin1;
    document.getElementById("paste2").innerHTML = lin2;
    document.getElementById("paste3").innerHTML = lin3;
    document.getElementById("paste4").innerHTML = lin4;
    document.getElementById("paste5").innerHTML = line5;
  }