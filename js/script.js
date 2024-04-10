

let seconds = 30;
printTime(seconds);

const countdown = setInterval(function() {
    if (seconds != 0) {
        seconds--;
        console.log(seconds);
    } else {
        seconds = 0
        clearInterval(seconds);
    }

    printTime(seconds);
}, 1000);

function printTime(s) {
    // operatore ternario
    let sStr = s <= 9 ? "0" + s.toString() : s.toString();


    document.getElementById("second").innerText = sStr;
}