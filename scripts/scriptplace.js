// Assuming Celsius (°C) for temperature
function calculateWindChill(temperature, windSpeed) {
    // Check conditions for viable wind chill calculations
    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate windchill using the formula (in Celsius)
        const windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16);
        return windChillCelsius.toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

// Example usage:
const temperatureCelsius = 5; // Example temperature in Celsius
const windSpeedKmph = 10; // Example wind speed in km/h
const windChillResult = calculateWindChill(temperatureCelsius, windSpeedKmph);
console.log("Windchill:", windChillResult);
