const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('seconds');
const amOrPm = document.getElementById('AmOrPm');

function getAmPm(hours) {
    return hours >= 12 ? 'PM' : 'AM';
}

function formatTimeUnit(unit) {
    return unit.toString().padStart(2, '0');
}

setInterval(function() {
    let x = new Date();
    let hours = x.getHours();
    let minutes = x.getMinutes();
    let seconds = x.getSeconds();
    let ampm = getAmPm(hours);
    hours = hours % 12 || 12;

    hour.innerText = formatTimeUnit(hours);
    minute.innerText = formatTimeUnit(minutes);
    second.innerText = formatTimeUnit(seconds);
    amOrPm.innerText = ampm;
}, 1000);
