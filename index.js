/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthOutput = document.getElementById("length-output");
const volumeOutput = document.getElementById("volume-output");
const massOutput = document.getElementById("mass-output");
const convertBtn = document.getElementById("convert-btn");
const inputField = document.getElementById("input-field");

lengthOutput.textContent = "";
volumeOutput.textContent = "";
massOutput.textContent = "";

convertBtn.addEventListener("click", convertUnits);

function convertUnits() {
    const inputValue = parseFloat(inputField.value);

    // Length Conversion
    const metersToFeet = (inputValue * 3.281).toFixed(3);
    const feetToMeters = (inputValue / 3.281).toFixed(3);
    lengthOutput.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;

    // Volume Conversion
    const litersToGallons = (inputValue * 0.264).toFixed(3);
    const gallonsToLiters = (inputValue / 0.264).toFixed(3);
    volumeOutput.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;

    // Mass Conversion
    const kilosToPounds = (inputValue * 2.204).toFixed(3);
    const poundsToKilos = (inputValue / 2.204).toFixed(3);
    massOutput.textContent = `${inputValue} kilograms = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilograms`;
}