export async function getWeather(key, location, tempUnit) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return formatWeather(data, tempUnit);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function formatWeather(data, tempUnit) {
  // Current (top card)
  let name = data.location.name;
  let weatherName = data.current.condition.text;
  let currentTemp = `${data.current[tempUnit]}°${tempUnit == 'temp_c' ? 'C' : 'F'}`;

  let currentArray = [name, currentTemp, weatherName];

  // Today (first bottom card)
  let todayCondition = data.forecast.forecastday[0].day.condition.text;
  let todayMin = data.forecast.forecastday[0].day[`min${tempUnit}`] + `°${tempUnit == 'temp_c' ? 'C' : 'F'}`;
  let todayMax = data.forecast.forecastday[0].day[`max${tempUnit}`] + `°${tempUnit == 'temp_c' ? 'C' : 'F'}`;
  

  let todayArray = [todayCondition, todayMin, todayMax];
  return [currentArray, todayArray];
}
