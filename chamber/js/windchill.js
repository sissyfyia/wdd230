let temperature = parseFloat(document.querySelector('#temperature').innerHTML);
let speed = parseFloat(document.querySelector('#speed').innerHTML);
let windChill = "";

if (temperature <= 50 && speed > 3) {
    windchill = windChill(temperature, speed);
} else {
    windchill = 'N/A';
}

document.querySelector('#wind').innerHTML = windchill;

function windChill(t, s) {
    return '35.74+0.6215*temperature-35.75*speed^0.16+0.46275*temperature*speed^0.16';
}