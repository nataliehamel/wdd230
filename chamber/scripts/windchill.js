function calculateWindChill() {
    var temperatureElement = document.getElementById("temperature");
    var windSpeedElement = document.getElementById("windSpeed");
    var windChillElement = document.getElementById("windChill");
  
    var temperature = parseFloat(temperatureElement.textContent);
    var windSpeed = parseFloat(windSpeedElement.textContent);
  
    if (temperature <= 10 && windSpeed > 3.0) {
      var windChill = calculateFormula(temperature, windSpeed);
      windChillElement.textContent = "Wind Chill: " + windChill.toFixed(2) + "&#176C";
    } else {
      windChillElement.textContent = "Wind Chill: N/A";
    }
  }
  
  function calculateFormula(temperature, windSpeed) {
    var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
  }
  
  calculateWindChill();