const addBtn = document.getElementById("addBtn");
const upperBtn = document.getElementById("upperBtn");
const uppertext = document.getElementById("upperText");
const lowerBtn = document.getElementById("lowerBtn");
const char = document.getElementById("charcount");
const words = document.getElementById("wordscount");
const time = document.getElementById("time");
const clearBtn = document.getElementById("clearBtn");
addBtn.addEventListener("click", () => {
  let newtext = inputtext.value;
  preview.textContent = newtext;

  let character = newtext.length;
  char.textContent = "Total characters:" + character;

  let word = newtext.split(" ");

  words.textContent = "Total words:" + word.length;

  time.textContent = "total time:" + word.length * 0.25 + "seconds";
});

upperBtn.addEventListener("click", () => {
  let convtText = inputtext.value;
  uppertext.textContent = convtText.toUpperCase();
});

lowerBtn.addEventListener("click", () => {
  let convtText = inputtext.value;
  uppertext.textContent = convtText.toLowerCase();
});

clearBtn.addEventListener("click", () => {
  preview.textContent = " ";
  words.textContent = " ";
  char.textContent = " ";
  time.textContent = " ";
  uppertext.textContent = " ";
});
