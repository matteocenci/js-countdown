const now = new Date();

let seconds = now.getSeconds(59);
printTime(seconds);

const countdown = setInterval(function() {
    if (seconds < 59) {
        seconds--;
    } else {
        seconds = 0
    }

    printTime(seconds);
}, 1000);

function printTime(s) {
    // operatore ternario
    let sStr = s <= 9 ? "0" + s.toString() : s.toString();


    document.getElementById("second").innerText = sStr;
}