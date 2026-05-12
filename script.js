const SURPRISES = {
  memory: {
    kicker: "Favorite memory",
    title: "A page for the little things",
    text:
      "This is a perfect spot for a favorite Claire memory: a funny story, a proud day, or a tiny moment that still makes everyone smile."
  },
  proud: {
    kicker: "Proud moment",
    title: "Look what you did",
    text:
      "Graduation is not just one day. It is every late night, brave choice, finished assignment, big laugh, and tiny step that got you here."
  },
  future: {
    kicker: "Next adventure",
    title: "The next page is yours",
    text:
      "Wherever Claire goes next, she gets to bring all of this with her: the work, the heart, the sparkle, and the people cheering from every direction."
  },
  graduate: {
    kicker: "Open when",
    title: "You graduate",
    text:
      "Claire, you made it. Today is proof of your patience, your effort, and your bright way of becoming exactly who you are meant to be."
  },
  brave: {
    kicker: "Open when",
    title: "You need courage",
    text:
      "You do not have to know every answer before you begin. Start with the next kind, honest, brave step. That has always been enough."
  },
  miss: {
    kicker: "Open when",
    title: "You miss home",
    text:
      "Home is not only a place. It is every person who knows your laugh, saves you a seat, and says your name like good news."
  },
  heart: {
    kicker: "Tiny sticker",
    title: "Loved, loved, loved",
    text:
      "No matter how grown-up graduation feels, there will always be people who are wildly, softly, completely in your corner."
  },
  confetti: {
    kicker: "Graduation cap",
    title: "Cue the confetti",
    text:
      "This cap has one job: reminding Claire that she deserves every bit of celebration today."
  }
};

const WISHES = [
  "May your next chapter feel exciting, gentle, and very much like yours.",
  "May you always find a reason to celebrate the small wins.",
  "May every new place have someone kind waiting there.",
  "May you keep choosing the version of your life that makes you feel most alive.",
  "May you remember that being proud of yourself is allowed."
];

// Add, remove, or edit objects in this array to change the letter count.
const LETTERS = [
  { name: "[Name]", text: "Short placeholder letter for Claire. Replace this with a real message." },
  { name: "[Name]", text: "A sweet note about a favorite memory can go here." },
  { name: "[Name]", text: "Replace this with encouragement for Claire's next chapter." },
  { name: "[Name]", text: "A short graduation message from someone who loves Claire." },
  { name: "[Name]", text: "Add a story, a proud moment, or a simple congratulations." },
  { name: "[Name]", text: "Placeholder letter text. Keep it short or make it longer later." },
  { name: "[Name]", text: "This space can hold a message from family, friends, or mentors." },
  { name: "[Name]", text: "Replace with a note about how Claire has grown." },
  { name: "[Name]", text: "A small letter celebrating Claire's hard work." },
  { name: "[Name]", text: "Add a personal memory and sign it with the sender's name." },
  { name: "[Name]", text: "Placeholder message for someone from Claire's journey." },
  { name: "[Name]", text: "Write something kind, specific, and full of Claire." },
  { name: "[Name]", text: "This can become a funny story or a heartfelt note." },
  { name: "[Name]", text: "Replace this with a message from another important person." },
  { name: "[Name]", text: "A quick note of pride, love, and celebration." },
  { name: "[Name]", text: "This letter can be as short or as detailed as you want." },
  { name: "[Name]", text: "Add words Claire will want to reread later." },
  { name: "[Name]", text: "Placeholder letter for another person in the collection." },
  { name: "[Name]", text: "Use this for a teacher, friend, sibling, parent, or mentor." },
  { name: "[Name]", text: "Final placeholder letter. Add more objects below if needed." }
];

const dialog = document.querySelector("#surpriseDialog");
const dialogKicker = document.querySelector("#dialogKicker");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogText = document.querySelector("#dialogText");
const dialogPhotoWrap = document.querySelector("#dialogPhotoWrap");
const dialogPhoto = document.querySelector("#dialogPhoto");
const closeButton = document.querySelector(".close-button");
const confettiLayer = document.querySelector("#confettiLayer");
const graduationGate = document.querySelector("#graduationGate");
const gateIntro = document.querySelector("#gateIntro");
const graduateButton = document.querySelector("#graduateButton");
const gateMessage = document.querySelector("#gateMessage");
const mainSurprise = document.querySelector("#mainSurprise");
const lettersGrid = document.querySelector("#lettersGrid");

let wishIndex = 0;
let hasOpenedGate = false;

function openSurprise(key, photo = "") {
  const surprise =
    key === "wish"
      ? {
          kicker: "Wish jar",
          title: "A wish for Claire",
          text: nextWish()
        }
      : SURPRISES[key];

  if (!surprise) return;

  dialogKicker.textContent = surprise.kicker;
  dialogTitle.textContent = surprise.title;
  dialogText.textContent = surprise.text;
  setDialogPhoto(photo, surprise.title);
  dialog.showModal();

  if (key === "confetti" || key === "graduate" || key === "wish") {
    launchConfetti();
  }
}

function setDialogPhoto(photo, title) {
  if (!photo) {
    dialogPhotoWrap.hidden = true;
    dialogPhoto.removeAttribute("src");
    dialogPhoto.alt = "";
    return;
  }

  dialogPhotoWrap.hidden = false;
  dialogPhoto.src = photo;
  dialogPhoto.alt = `${title} photo`;
}

function openLetter(index) {
  const letter = LETTERS[index];

  if (!letter) return;

  dialogKicker.textContent = "Letter from";
  dialogTitle.textContent = letter.name;
  dialogText.textContent = letter.text;
  setDialogPhoto("", letter.name);
  dialog.showModal();
}

function renderLetters() {
  lettersGrid.replaceChildren();

  LETTERS.forEach((letter, index) => {
    const button = document.createElement("button");
    const flap = document.createElement("span");
    const subtext = document.createElement("span");
    const name = document.createElement("span");

    button.className = "letter-card";
    button.type = "button";
    button.dataset.letterIndex = String(index);
    flap.className = "letter-flap";
    flap.setAttribute("aria-hidden", "true");
    subtext.className = "letter-subtext";
    subtext.textContent = "from";
    name.className = "letter-name";
    name.textContent = letter.name;

    button.append(flap, subtext, name);
    lettersGrid.append(button);
  });
}

function nextWish() {
  const wish = WISHES[wishIndex % WISHES.length];
  wishIndex += 1;
  return wish;
}

function launchConfetti(count = 34) {
  const colors = ["#f8b7bf", "#ffd0ad", "#ffe59b", "#bfe8d4", "#b9d8f6", "#d8c6f2"];

  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.28}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    confettiLayer.append(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

document.querySelectorAll("[data-surprise]").forEach((button) => {
  button.addEventListener("click", () => openSurprise(button.dataset.surprise, button.dataset.photo));
});

renderLetters();

lettersGrid.addEventListener("click", (event) => {
  const letterButton = event.target.closest("[data-letter-index]");

  if (!letterButton) return;

  openLetter(Number(letterButton.dataset.letterIndex));
});

document.querySelectorAll(".photo img").forEach((image) => {
  image.addEventListener("load", () => image.classList.add("is-loaded"));
  image.addEventListener("error", () => image.classList.remove("is-loaded"));

  if (image.complete && image.naturalWidth > 0) {
    image.classList.add("is-loaded");
  }
});

dialogPhoto.addEventListener("error", () => {
  dialogPhotoWrap.hidden = true;
});

closeButton.addEventListener("click", () => dialog.close());

graduateButton.addEventListener("click", () => {
  if (hasOpenedGate) return;
  hasOpenedGate = true;

  graduateButton.hidden = true;
  gateIntro.hidden = true;
  gateMessage.hidden = false;
  launchConfetti(58);

  window.setTimeout(() => {
    mainSurprise.hidden = false;
    mainSurprise.classList.remove("is-hidden");
    mainSurprise.classList.add("is-revealed");
    graduationGate.classList.add("is-finished");
  }, 3600);
});

dialog.addEventListener("click", (event) => {
  const dialogBox = dialog.getBoundingClientRect();
  const isInDialog =
    event.clientX >= dialogBox.left &&
    event.clientX <= dialogBox.right &&
    event.clientY >= dialogBox.top &&
    event.clientY <= dialogBox.bottom;

  if (!isInDialog) {
    dialog.close();
  }
});
