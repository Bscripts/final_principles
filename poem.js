//The pasting function is called by a button click on the html. A random
//number generator assigns a random variable name to the boxes of user input on
//the html website. I had to learn how randomization works in JavaScript to pull this off.

function pasting() {

    let nouncalc = Math.floor(Math.random() * 5);
    let verbcalc = Math.floor(Math.random() * 5);
    let adjcalc = Math.floor(Math.random() * 5);

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

// The function below calls the randomized variables generated above and puts them 
// into an array of strings. The function then chooses a random sentence from the array
// and appends the sentence to a <p> in the html. I had to learn how arrays function in 
// JavaScript to pull this off.

    function writeALine(unoun, unoun2, uverb, uverb2, uadj, x, pasteat) {
    
      let test = ["In the " + unoun + " of the " + uadj + " " + unoun2 + " I " + uverb, "I " + uverb + " my " + uadj + " " + unoun, 
      "To my " + uadj + " " + unoun + " I say " + uverb, "It is the nature of the " + uadj + " " + unoun + " to " + uverb,
      "Take my " + unoun + " so I may " + uverb, "If I shain't " + uverb + ", my " + uadj + " " + unoun + " will " + uverb2, 
      "Every " + uadj + " " + unoun + " will learn to " + uverb, "The " + uadj + " " + unoun + " will never again " + uverb,
      "Every year the " + unoun + " and the " + uadj + " " + unoun2 + " " + uverb, 
      "An eternity of " + uverb + "ing summons the " + uadj + " " + unoun, "As my " + uadj + " " + unoun + " begins to " + uverb,
      "The " + uadj + " " + unoun + " only knows how to " + uverb, "Give me a " + unoun + " so I may " + uverb,
      "Never again will I " + uverb + " for the sake of the " + uadj + " " + unoun, "My " + unoun2 + "s are filled with " + uadj + " " + unoun + "s and all I can do is " + uverb,
      "Memories of " + uadj + " " + unoun + "s " + uverb, "I " + uverb + " for every " + unoun,
      "So long as " + unoun + " " + uverb + "s, the " + unoun2 + " will " + uverb2, "It's because of the " + uadj + " " + unoun + "s I " + uverb,
      "Let the " + uadj + " " + unoun + "s " + uverb];

      test.sort(function(a, b){return 0.5 - Math.random()});

      document.getElementById(pasteat).innerHTML = test[x];
    }

    writeALine(noun1, noun3, verb1, verb4, adj1, 0, "paste1")
    writeALine(noun2, noun4, verb2, verb5, adj2, 0, "paste2")
    writeALine(noun3, noun5, verb3, verb1, adj3, 0, "paste3")
    writeALine(noun4, noun1, verb4, verb2, adj4, 0, "paste4")
    writeALine(noun5, noun2, verb5, verb3, adj5, 0, "paste5")
  }