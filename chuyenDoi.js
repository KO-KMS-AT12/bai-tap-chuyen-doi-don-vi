function feetToMeters(feet) {
    feet = parseFloat(feet);
    document.getElementById("outputmeters").innerHTML = 0.305 * feet;
}

function metersToFeet(meter) {
    meter = parseFloat(meter);
    document.getElementById("outputfeet").innerHTML =  3.279 * meter;
}