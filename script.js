const birthdayTime = Date.now() + 10000;

const countdown = document.getElementById("countdown");

const birthdaySong = document.getElementById("birthdaySong");

let countdownFinished = false;
let candleBlown = false;
let envelopeOpened = false;


function showScreen(number) {
    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById("screen" + number);

    if (target) {
        target.classList.add("active");
    }
}


function formatNumber(number) {
    return String(number).padStart(2, "0");
}


function updateCountdown() {
    const difference = birthdayTime - Date.now();

    if (difference <= 0) {
        countdown.textContent = "04:24";

        if (!countdownFinished) {
            countdownFinished = true;

            setTimeout(function() {
                showScreen(2);
            }, 1500);
        }

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    if (days > 0) {
        countdown.textContent =
            days + "d " +
            formatNumber(hours) + ":" +
            formatNumber(minutes) + ":" +
            formatNumber(seconds);
    } else {
        countdown.textContent =
            formatNumber(hours) + ":" +
            formatNumber(minutes) + ":" +
            formatNumber(seconds);
    }
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* 4:24 → HAPPY BIRTHDAY */

document
    .getElementById("continueFromTime")
    .addEventListener("click", function() {
        showScreen(3);
    });


/* HAPPY BIRTHDAY → CAKE */

document
    .getElementById("continueToCake")
    .addEventListener("click", function() {
        showScreen(4);
    });


/* CANDLE */

document
    .getElementById("candle")
    .addEventListener("click", function() {

        if (candleBlown) {
            return;
        }

        candleBlown = true;

        const candle = document.getElementById("candle");
        const hint = document.getElementById("candleHint");

        candle.classList.add("blown");

        hint.textContent = "wish made ✦";

        setTimeout(function() {
            showScreen(5);
        }, 1500);
    });


/* MUSIC → ENVELOPE */

document
    .getElementById("continueToEnvelope")
    .addEventListener("click", function() {
        showScreen(6);
    });


/* ENVELOPE */

document
    .getElementById("envelope")
    .addEventListener("click", function() {

        if (envelopeOpened) {
            return;
        }

        envelopeOpened = true;

        const envelope = document.getElementById("envelope");
        const hint = document.getElementById("envelopeHint");
        const button = document.getElementById("openLetterButton");

        envelope.classList.add("open");

        hint.textContent = "Your letter is waiting for you ♡";

        setTimeout(function() {
            button.classList.remove("hidden");
        }, 800);
    });


/* ENVELOPE → LETTER */

document
    .getElementById("openLetterButton")
    .addEventListener("click", function() {
        showScreen(7);
    });


/* LETTER → FINAL */

document
    .getElementById("finishLetter")
    .addEventListener("click", function() {
        showScreen(8);
    });
