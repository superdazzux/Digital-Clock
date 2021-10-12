setInterval(function() {
    var currentTIme = new Date();
    var hours = currentTIme.getHours();
    var minutes = currentTIme.getMinutes();
    var seconds = currentTIme.getSeconds();
    var period = "AM";
    if (hours >= 12) {
        period = "PM"
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;


}, 1000);