export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error('Humidity too high');
  }
}

export function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError('Sensor is broken');
  }

  if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
}
