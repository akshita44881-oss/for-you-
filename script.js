const birthdaySong = document.getElementById("birthdaySong");

let candleBlown = false;
let envelopeOpened = false;


/* =========================================
   SCREEN CONTROL
========================================= */

function showScreen(number) {

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById("screen" + number);

    if (target) {
        target.classList.add("active");
    }
}


/* =========================================
   SCREEN 1 → SCREEN 2
========================================= */

document
    .getElementById("continueFromTime")
    .addEventListener("click", function() {

        showScreen(3);

    });


/* =========================================
   HAPPY BIRTHDAY → CAKE
========================================= */

document
    .getElementById("continueToCake")
    .addEventListener("click", function() {

        showScreen(4);

    });


/* =========================================
   CANDLE
========================================= */

document
    .getElementById("candle")
    .addEventListener("click", function() {

        if (candleBlown) {
            return;
        }

        candleBlown = true;

        const candle =
            document.getElementById("candle");

        const hint =
            document.getElementById("candleHint");

        candle.classList.add("blown");

        hint.textContent = "wish made ✦";


        setTimeout(function() {

            showScreen(5);

        }, 1500);

    });


/* =========================================
   MUSIC SCREEN → ENVELOPE
========================================= */

document
    .getElementById("continueToEnvelope")
    .addEventListener("click", function() {

        showScreen(6);

    });


/* =========================================
   ENVELOPE
========================================= */

document
    .getElementById("envelope")
    .addEventListener("click", function() {

        if (envelopeOpened) {
            return;
        }

        envelopeOpened = true;

        const envelope =
            document.getElementById("envelope");

        const hint =
            document.getElementById("envelopeHint");

        const button =
            document.getElementById("openLetterButton");


        envelope.classList.add("open");

        hint.textContent =
            "Your letter is waiting for you ♡";


        setTimeout(function() {

            button.classList.remove("hidden");

        }, 800);

    });


/* =========================================
   ENVELOPE → LETTER
========================================= */

document
    .getElementById("openLetterButton")
    .addEventListener("click", function() {

        showScreen(7);

    });


/* =========================================
   LETTER → FINAL SCREEN
========================================= */

document
    .getElementById("finishLetter")
    .addEventListener("click", function() {

        showScreen(8);

    });
