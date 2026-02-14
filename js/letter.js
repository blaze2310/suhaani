// 💌 LETTER CONTENT (WITH FORMATTING)
const letterContent = `Dear Suhaanaa,

I am sorry I bit your ear that day at the metro station. I didn’t want to hurt you or annoy you.

You just seemed so incredibly adorable and cute that I felt I needed to get closer for a better view.

Guess what I realised? I have flown across the vast sky and seen tons of scenery, but none of it even held a candle to how captivated I was when I saw you smile.

So I am really sorry if I hurt you. I’ll make sure no other crow—or any other animals—ever hurt you again.

Also, don't be scared anymore to go through those stairs alone. If you still feel scared, then please contact my homie – Rinki.

Call him anytime on +91 9899405974 and he'll bring the luxury service of taking you to FORE as a passenger princess.

Also again, I am really sorry for hurting you that day, and please tell that bitch Rinki to never contact me ever again. He threatened me for my life if I didn't apologise and explain myself properly, so I have attached a cute mail for your Valentine's to apologise properly.

Your simp,
Crow 🐦‍⬛


`;

// ELEMENTS
const btnLetter = document.getElementById("btn__letter");
const boxLetter = document.querySelector(".box__letter");
const letterBorder = document.querySelector(".letter__border");
const textLetter = document.querySelector(".text__letter p");
const titleLetter = document.querySelector(".title__letter");
const closeBtn = document.querySelector(".close");

let index = 0;
let typingInterval;

// 🖋️ TYPEWRITER FUNCTION
function startTyping() {
    textLetter.innerHTML = "";
    index = 0;

    typingInterval = setInterval(() => {
        if (index < letterContent.length) {
            const char = letterContent[index];

            if (char === "\n") {
                textLetter.innerHTML += "<br>";
            } else {
                textLetter.innerHTML += char;
            }

            // Auto-scroll while typing
            textLetter.parentElement.scrollTop = 
            textLetter.parentElement.scrollHeight;

            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 30);
}

// 💌 OPEN LETTER
let letterOpen = false;
let gifsAnimated = false;
btnLetter.addEventListener("click", () => {
    if (letterOpen) return; // Prevent double opening
    letterOpen = true;
    gifsAnimated = false; // Reset for new opening
    
    boxLetter.style.display = "block";

    setTimeout(() => {
        letterBorder.style.display = "block";
    }, 600);

    // TITLE TYPE
    titleLetter.innerHTML = "To You 💌";
    let tIndex = 0;

    // HEART + GIF ANIMATIONS (only once)
    setTimeout(() => {
        if (!gifsAnimated) {
            gifsAnimated = true;
            document.getElementById("heart__letter")?.classList.add("animationOp");
            document.querySelectorAll(".left-gif")?.forEach(img => 
                img.classList.add("animationOp")
            );
        }
    }, 1200);

    // START TYPING
    setTimeout(startTyping, 4500);
});

// ❌ CLOSE LETTER
closeBtn.addEventListener("click", () => {
    clearInterval(typingInterval);

    textLetter.innerHTML = "";
    titleLetter.innerHTML = "";

    document.getElementById("heart__letter")?.classList.remove("animationOp");
    document.querySelectorAll(".left-gif")?.forEach(img => 
        img.classList.remove("animationOp")
    );

    letterBorder.style.display = "none";
    boxLetter.style.display = "none";
    
    letterOpen = false; // Allow opening again
});
