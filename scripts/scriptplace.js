// Defina os valores estáticos (você pode ajustar conforme necessário)
const temperatureCelsius = 5; // Exemplo: 5°C
const windSpeedKmph = 10; // Exemplo: 10 km/h

// Função para calcular a sensação térmica (windchill)
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChillCelsius.toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

// Chame a função e exiba o resultado
const windChillResult = calculateWindChill(temperatureCelsius, windSpeedKmph);
console.log("Sensação térmica:", windChillResult);

// Exiba o resultado na sua página (assumindo que você tenha um elemento com id="windChill")
document.getElementById("windChill").textContent = `Sensação térmica: ${windChillResult}`;
