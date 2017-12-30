var magazineText, noteText;

magazineText = "After an overnight stay in a local resident's home, we packed up 12 horses from an adjacent village with gear and started the journey into base camp. The site had been established by the British and Slovenian teams visiting the area in previous years, and our cook, Heera Singh, had been there the prior year. To minimize impact we utilized the same area of the moraine as the other groups had at 4600 meters.";


function cleanText(text){
  text = text.replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g, "");
  //Making Lowercase magazineText
  text = text.toLowerCase();
  return text;
}

function harmlessRansomNote(noteText, magazineText){

  var
    magazineText,
    noteText,
    noteArr,
    magArr,
    magObj,
    noteIsPossible;

  // lowercase and remove punctuation
  magazineText = cleanText(magazineText);
  // lowercase and remove punctuation
  noteText = cleanText(noteText);
  // split note into array of text
  noteArr = noteText.split(' ');
  // split magazine into array of text
  magArr = magazineText.split(' ');

  magObj = {};
  //looping through magazine array
  magArr.forEach(word => {
    //if no word on object will add word with 0
    if(!magObj[word]) {magObj[word] = 0;}
    //after word starts at 0 it increments up as it is looped through
    magObj[word]++
  });

  //to tell us if its possible or not.
  noteIsPossible = true;
  //check the note to each word in the object. Decrement per word found if obj word count goes below 0 noteIsPossible becomes false
  noteArr.forEach(word => {
    if(magObj[word]) { magObj[word]--;
      if(magObj[word] < 0) { noteIsPossible = false; }
    } else {
      noteIsPossible = false;
    }
  });
//console if it is possible or not
console.log(noteIsPossible);
}


// false result
noteText = "We minimize the area the years we cook in British village. The Bristish cooked to impact groups";

harmlessRansomNote(noteText, magazineText);

// True result
noteText = "We minimize the area. The years we cook to impact groups established stay.";

harmlessRansomNote(noteText, magazineText);
