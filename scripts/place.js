// Dynamic Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static Weather Values
const temperature = 10; // °C
const windSpeed = 5;    // km/h

// 1-line return wind chill formula function (Metric / Celsius)
const calculateWindChill = (temp, speed) => (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);

// Run Wind Chill Evaluation on Page Load
window.addEventListener("DOMContentLoaded", () => {
    const windChillField = document.getElementById("windchill");

    // Check conditions: Temp <= 10°C AND Wind Speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const chillFactor = calculateWindChill(temperature, windSpeed);
        windChillField.textContent = `${chillFactor}°C`;
    } else {
        windChillField.textContent = "N/A";
    }
});