const SURPRISES = {
  memory: {
    kicker: "Grad Prep! 🎓",
    title: "Just a small snippet of the night before",
    text:
      "What a big day that you've looked forward to for soooooo long! Glad to see you're still celebrating in top Claire fashion!"
  },
  proud: {
    kicker: "Caution ⚠️: Teaching in progress",
    title: "Miss Hamlett doing what she does best",
    text:
      "It's been amazing seeing home much you've already poured into 'your kids', I can't wait to hear all the stories from the connections you make with your class, as you making teaching all your own ❤️!"
  },
  future: {
    kicker: "Looking forward to the future 👀",
    title: "Kindergarten bound!",
    text:
      "We're all looking forward to seeing all the good you do, and the love you will bring to your class. Can't wait to see what lies even further beyond that (but let's enjoy things one step at a time)!"
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
    kicker: "Heart sticker",
    title: "🩷",
    text:
      "Know that no matter what you may go through, and what you may face, you will always have people surrounding you that love you dearly!"
  },
  confetti: {
    kicker: "Graduation cap",
    title: "Cue the confetti",
    text:
      "This cap has one job: reminding you that she deserves every bit of celebration today. That's right, YOU earned it!"
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
// Letter text preserves line breaks and tabs. Optional media fields:
// { name: "[Name]", text: "Message", image: "./assets/photos/example.gif" }
// { name: "[Name]", text: "Message", video: "./assets/videos/example.mp4", videoType: "video/mp4", videoPoster: "./assets/photos/example-poster.jpg" }
const LETTERS = [
  { name: "Andrea Reed", 
    text: "'I praise you because I am fearfully and wonderfully made;\n" +
    "your works are wonderful,\n" +
    "I know that full well.'\n" +
    "Psalm 139:14\n\n" +
    "Claire is an exceptional teacher, friend, and individual!\n" +
    "Love and kindness direct her steps and she blesses others with her relational and compassionate spirit!\n" +
    "Always willing to lend a helping hand and a listening ear add to Claire's outstanding character!\n" +
    "In all that she does, Claire allows the talents God has gifted her with to shine brightly!\n" +
    "Responsible, respectful, and ready to tackle any challenge sum up her determination and dedication to teaching!\n" +
    "Enjoyable to be around always comes to mind when thinking of this wonderful lady!\n\n" +

    "I am honored to know you, Claire, and I have been blessed by your kind and loving spirit!\n" +
    "Congratulations on your graduation!  You are wonderful!\n\n" +

    "💜 Love,\n" +
    "Andrea Reed" },
  {
    name: "Kelly Joe",
    text:
      "Dear Claire,\n\n" +
      "\tIt is hard to believe that the little 2nd grader who once sat in my classroom is now graduating from college and beginning a journey into teaching herself. Watching you grow into such a caring and capable young woman has been very special.\n\n" +
      "\tI always loved your quiet personality, your sense of humor, and the way you naturally connected with people. You have a way about you that makes others smile.\n\n" +
      "\tWhen you came back to my classroom during your college studies, it was so clear that you were exactly where you were meant to be. The way you interacted with the students, encouraged them, and truly enjoyed being around kids showed what a wonderful teacher you are going to become.\n\n" +
      "\tTeaching takes heart, patience, creativity, and the ability to make children feel seen and loved, and you already have those gifts. Your future students are so lucky to have someone who brings kindness into the classroom every day.\n\n" +
      "\tAs you begin this new chapter, I hope you never lose the fun spirit that makes you uniquely you. The best teachers are the ones children remember not just for what they taught, but for how they made them feel. I have no doubt you will be that kind of teacher.\n\n" +
      "\tCongratulations on your graduation and on following a path that is going to make such a difference in the lives of so many children. I am so proud of you and excited to see all the amazing things ahead for you.\n\n" +
      "Love,\nMrs. Joe"
  },
  /*{
    name: "[Video Test]",
    video: "./assets/videos/test.mp4",
    videoType: "video/mp4",
    videoPoster: "./assets/photos/favorite-memory.jpg"
  },*/
  { name: "Cherise Eutsler", 
    text: "Claire,\n\n" +
    "\tI have been so blessed by having you in my life! You have been a wonderful friend, babysitter, and nursery worker. I am so thankful I have gotten to know you, and you have made the world a better place with all of your sunshine!\n\n" +
    "\tCongratulations on your college graduation! I know it wasn't easy, but I am so proud of you for persevering and working so hard to make it to the end. You are going to be such an amazing teacher and the students who are going to be in your class will be so blessed by you! Don't forget that you are a precious child of God and that he has big plans for you!\n\n" +
    "\tGo get 'em, Miss Hamlett!" },
  { name: "Anna Cardon", 
    text: "Claire,\n\n" +
    "\tI am so proud of you and everything you’ve accomplished! It has been amazing to see you grow in your abilities and work hard. You are going to be such an amazing teacher, and I envy the kids in your classes! They have no idea how lucky they truly are. So thankful for you and to have you as my best friend,\n\n" +
    "\tI sure love you!" },
  { name: "Kieran Wohlford", 
    text: "CLAIRE!!\n\n" +
    "Congrats on reaching such a huge milestone and graduating college! I am so proud of you, and the hard work you put into this degree does not go unnoticed. The nights of staying up, questioning if this was the career path for you, were understandable. But it was your faith and dedication that got you here. I’m sure you will look back on those weird conversations of China and see that it was worth it. You are in a position to change lives and lead kids to the path of success in their educational careers. This feat should not be taken lightly, and I know that you will put your heart and soul into teaching all the kids that enter your classroom. This next chapter in your life is going to be so exciting and I’m looking forward to watching it unfold! Love you!\n\n" +
    "Dear Jesus-\n" +
    "\tI pray that you will stand by Claire in this new journey of teaching her very own classroom. You have given her the gifts that make her the best kind of person in this position. Lord, I ask that when the days seem stressful and the questions start to arise, you would remind Claire of the reasons why you have her where she is at. Thank you Father for giving Claire the strength to finish school, especially with the weight of all that was happening at home. Thank you Father for getting her here and I pray that she feels your presence as she walks across that stage.\n\n -Amen" },
  { name: "Kirsten Hickey", 
    text: "Claire,\n\n" +
    "\tI have watched you grow from a little dancer to the smart strong woman you are today. I especially loved all the time we spent together sitting in my car in the dance studio parking lot trying to figure out life. I also loved having you come to my class last year, you were a sweet part of our class family. It has been such a joy to be a part of your life. I’m so proud of you and of what you’ve have achieved, you’re going to be the most amazing kindergarten teacher ever!!  Your students will absolutely love you like I love you.\n\n" +
    "\tCongratulations Claire- you have worked so hard for this and it will be so special to watch you spread your teacher wings and fly.\n\n" +
    "Also, hit me up for my TPT password I love to share all my kindergarten goodies!\n\n" +
    "Love,\n" +
    "Ms. Kirsten 🩷"},

    { name: "Keean Bogle", 
    text: "Congratulations on graduating Claire!\n\n" + 
    "\tDo a wobble about never having to be in a school again! Umm wait nevermind. Congratulations for never having to be the student again. Proud of you for finishing. Now just don't worry too much about the future."},
  { name: "Daryl Nikkel", 
    text: "Claire, we are so proud of you and love you very much!" },
  { name: "Lonnie & Barbara Thiessen",
    text: "Claire -\n" + 
  "\tCongratulations on achieving this next mileston in your life. I have enjoyed working with you at the store and visiting with you on Sunday mornings. Wishing you the best as you start your teaching career. Some people questioned my sanity after teaching middle school for 42 years, but I don't think I could have handled 5-6 year olds for even one week. Keep me updated about your experiences and take an occasional sick day on a Tuesday to help with a Becky's pick-up. May God bless you!!\n\n" +
  "Lonnie & Barbara"
  },
  { name: "Jordan Vasquez", 
    text: "No manches, Claire, no es tan serio, cálmate.",
    image: "./assets/photos/jordan.gif"},
  { name: "Karen Smith", 
    text: "\tIn the short time that I've known you, you have brought a sparkle and an enthusiasm to the room. You roll with the punches with wit and a little sass.\n\n" +
"\tThough I am just getting to know you, some things I have learned and noticed is the difference you make in the lives around you. Whether it is on your mission trips, volunteer work, or work with children at church, you have the heart of a servant.  I have seen how your face lights up when you talk about your students and your interactions with them. You are going to be such a good teacher.\n\n" +
"\tBut probably the most noticeable thing that I have seen is the kindness you show to my son and the joy you bring to his life. It truly makes my heart happy seeing the two of you together.\n\n" +
"\tI am glad that I have been able to see you graduate and start off your teaching career. I look forward to seeing all that God has in store for you."
  },
  /*{ name: "[Name]", text: "Write something kind, specific, and full of Claire." },
  { name: "[Name]", text: "This can become a funny story or a heartfelt note." },
  { name: "[Name]", text: "Replace this with a message from another important person." },
  { name: "[Name]", text: "A quick note of pride, love, and celebration." },
  { name: "[Name]", text: "This letter can be as short or as detailed as you want." },
  { name: "[Name]", text: "Add words Claire will want to reread later." },
  { name: "[Name]", text: "Placeholder letter for another person in the collection." },
  { name: "[Name]", text: "Use this for a teacher, friend, sibling, parent, or mentor." },
  { name: "[Name]", text: "Final placeholder letter. Add more objects below if needed." }*/
];

const dialog = document.querySelector("#surpriseDialog");
const dialogKicker = document.querySelector("#dialogKicker");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogText = document.querySelector("#dialogText");
const dialogPhotoWrap = document.querySelector("#dialogPhotoWrap");
const dialogPhoto = document.querySelector("#dialogPhoto");
const dialogVideoWrap = document.querySelector("#dialogVideoWrap");
const dialogVideo = document.querySelector("#dialogVideo");
const dialogVideoError = document.querySelector("#dialogVideoError");
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

function openSurprise(key, photo = "", video = "", videoType = "video/mp4", videoPoster = "") {
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
  setDialogText(surprise.text);
  setDialogPhoto(video ? "" : photo, surprise.title);
  setDialogVideo(video, surprise.title, videoType, videoPoster || photo);
  dialog.showModal();

  if (key === "confetti" || key === "graduate" || key === "wish") {
    launchConfetti();
  }
}

function setDialogText(text = "") {
  dialogText.textContent = text || "";
  dialogText.hidden = !text;
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

function setDialogVideo(video = "", title = "", videoType = "video/mp4", poster = "") {
  dialogVideo.pause();
  dialogVideo.removeAttribute("src");
  dialogVideo.removeAttribute("poster");
  dialogVideo.innerHTML = "";
  dialogVideoError.hidden = true;
  dialogVideoError.textContent = "";

  if (!video) {
    dialogVideoWrap.hidden = true;
    dialogVideo.load();
    return;
  }

  const source = document.createElement("source");
  source.src = video;
  source.type = videoType;
  dialogVideo.append(source);
  dialogVideo.setAttribute("aria-label", `${title} video`);

  if (poster) {
    dialogVideo.poster = poster;
  }

  dialogVideoWrap.hidden = false;
  dialogVideo.load();
}

function openLetter(index) {
  const letter = LETTERS[index];

  if (!letter) return;

  dialogKicker.textContent = "Letter from";
  dialogTitle.textContent = letter.name;
  setDialogText(letter.text);
  setDialogPhoto(letter.image || "", letter.name);
  setDialogVideo(letter.video, letter.name, letter.videoType, letter.videoPoster);
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
    button.classList.toggle("has-video", Boolean(letter.video || letter.image));
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

  let yay = new Audio('./assets/yay.mp3');
    yay.play();

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
  button.addEventListener("click", () =>
    openSurprise(
      button.dataset.surprise,
      button.dataset.photo,
      button.dataset.video,
      button.dataset.videoType,
      button.dataset.videoPoster
    )
  );
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

dialogVideo.addEventListener("error", () => {
  dialogVideoError.textContent =
    "This video could not be played. Check that the file path starts with ./assets/ and that the video is MP4/H.264.";
  dialogVideoError.hidden = false;
});

closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener("close", () => {
  dialogVideo.pause();
});

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
  }, 4600);
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
