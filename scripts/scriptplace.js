const temperatureCelsius = 5; // Example: 5°C
const windSpeedKmph = 10; // Example: 10 km/h


function calculateWindChill(temperature, windSpeed) {
    const windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChillCelsius;
}

// Call the function with static inputs
const windChillResult = calculateWindChill(temperatureCelsius, windSpeedKmph);

// Display the result (assuming you have an element with id="windChill" in your HTML)
document.getElementById("windChill").textContent = `Wind Chill: ${windChillResult.toFixed(2)}°C`;


if (temperatureCelsius <= 10 && windSpeedKmph > 4.8) {
    // Calculate and display wind chill
    // ...
} else {
    document.getElementById("windChill").textContent = "N/A";
}

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date (you can replace this with your actual date)
const lastModifiedDate = new Date('2024-06-30'); // Example date

// Format the last modified date (e.g., "June 30, 2024")
const formattedLastModified = lastModifiedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

// Display the information in the footer
document.getElementById('lastModified').textContent = `Last modified: ${formattedLastModified} | © ${currentYear}`;
