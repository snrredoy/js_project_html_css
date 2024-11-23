const autoText = ["Web Developer", "Android App Developer", "Frontend Developer",  "Backend Developer", "Full Stack Developer", "Instructor" , "MERN Stack Developer", "Python Developer", "UI/UX Designer", "Python Django Developer"];

let index = 0;
let induvidualText = 0;

bodyElement = document.querySelector("body");

autoTextEffect();

function autoTextEffect() {
  induvidualText++;
  let firstLetter = autoText[index].slice(0, 1);

  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u" || firstLetter === "A" || firstLetter === "E" || firstLetter === "I" || firstLetter === "O" || firstLetter === "U") {
    firstLetter = "an";
  } else {
    firstLetter = "a";
  }

  bodyElement.innerHTML = `<h1>I am ${firstLetter} ${autoText[index].slice(0, induvidualText)}</h1>`;

  if (induvidualText === autoText[index].length) { 
    index++;
    induvidualText = 0;
  }

  if (index === autoText.length) {
    index = 0;
  }
  setTimeout(autoTextEffect, 300);
 }