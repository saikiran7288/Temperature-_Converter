function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var conversionType = document.getElementById("conversionType").value;
    var resultElement = document.getElementById("result");
    var convertedTemperature;

    if (conversionType === "celsiusToFahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultElement.innerHTML = temperatureInput + "°C = " + convertedTemperature + "°F";
    } else if (conversionType === "fahrenheitToCelsius") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultElement.innerHTML = temperatureInput + "°F = " + convertedTemperature + "°C";
    }
}
