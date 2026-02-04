let noClicks = 0;
let escapeMode = false;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const floating = document.getElementById("floating");
const roseContainer = document.getElementById("rose-container");

const noMessages = [
    "Wrong button Bhavna 😆❤️",
    "No?? My heart crashed 💔😂",
    "System error 😜 try again",
    "Chocolates 🍫 + love 💖 included",
    "Catch me if you can 😆💘"
];

/* Floating hearts */
setInterval(() => {
    const el = document.createElement("div");
    el.className = "floating";
    el.innerText = "❤️";
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = (Math.random() * 4 + 4) + "s";
    floating.appendChild(el);
    setTimeout(() => el.remove(), 8000);
}, 500);

/* Rose petals */
setInterval(() => {
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.innerText = "🌹";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = (Math.random() * 3 + 5) + "s";
    roseContainer.appendChild(rose);
    setTimeout(() => rose.remove(), 9000);
}, 400);

/* NO button */
noBtn.addEventListener("click", () => {
    noClicks++;
    message.innerText = noMessages[Math.min(noClicks - 1, noMessages.length - 1)];
    if (noClicks >= 5) escapeMode = true;
});

function moveNo() {
    if (!escapeMode) return;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* YES button */
yesBtn.addEventListener("click", () => {
    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Hide question
    document.getElementById("questionText").style.display = "none";

    // Hide main title
    document.getElementById("mainTitle").style.display = "none";

    // Show ONLY one message
    message.innerText =
        "Yahhh 😍💖 I love you so much, Arjun ♾️🥰 \nWarning ⚠️ unlimited love, hugs, and drama included 😜😂  \n I promise love, care, and stealing your food 😜🍕  \nLove you, Bhavna ❤️🌹";

    // Effects
    playMusic();
    // showLoveBanner();
    startParty();
    roseBurst();
});


/* 🔊 GUARANTEED AUDIO PLAY */
function playMusic() {
    const music = document.getElementById("loveMusic");
    music.muted = true;

    music.play().then(() => {
        music.muted = false;
        music.volume = 0.9;
    }).catch(err => console.log("Audio blocked:", err));
}

/* Love banner */
function showLoveBanner() {
    const banner = document.getElementById("love-banner");
    banner.innerText = "Bhavna ❤️ Arjun";
    banner.style.display = "flex";
}

/* Party emojis */
function startParty() {
    const emojis = ["💃","🕺","🎉","🥳","❤️","💖"];
    setInterval(() => {
        const e = document.createElement("div");
        e.className = "party";
        e.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        e.style.left = Math.random() * 100 + "vw";
        e.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(e);
        setTimeout(() => e.remove(), 6000);
    }, 250);
}

/* Rose burst */
function roseBurst() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    for (let i = 0; i < 40; i++) {
        const r = document.createElement("div");
        r.className = "rose-burst";
        r.innerText = "🌹";
        r.style.left = cx + "px";
        r.style.top = cy + "px";
        r.style.setProperty("--x", (Math.random()-0.5)*500 + "px");
        r.style.setProperty("--y", (Math.random()-0.5)*300 + "px");
        document.body.appendChild(r);
        setTimeout(() => r.remove(), 2500);
    }
}
