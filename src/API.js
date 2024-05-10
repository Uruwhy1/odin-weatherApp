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
  let currentObject = {
    name: data.location.name,
    condition: data.current.condition.text,
    temperature: `${data.current[tempUnit]}°${tempUnit == 'temp_c' ? 'C' : 'F'}`,
  }

  // Today (first bottom card)
  let todayObject = {
    condition: data.forecast.forecastday[0].day.condition.text,
    min: data.forecast.forecastday[0].day[`min${tempUnit}`] + `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,
    max: data.forecast.forecastday[0].day[`max${tempUnit}`] + `°${tempUnit == 'temp_c' ? 'C' : 'F'}`
  };

  // Tomorrow (second bottom card)
  let tomorrowObject = {
    condition: data.forecast.forecastday[1].day.condition.text,
    min: data.forecast.forecastday[1].day[`min${tempUnit}`] + `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,
    max: data.forecast.forecastday[1].day[`max${tempUnit}`] + `°${tempUnit == 'temp_c' ? 'C' : 'F'}`
  };

  // Third day (third bottom card)
  let thirdObject = {
    date: new Date(data.forecast.forecastday[2].date).toLocaleDateString('en-US', {weekday: 'long'}),
    condition: data.forecast.forecastday[2].day.condition.text,
    min: data.forecast.forecastday[2].day[`min${tempUnit}`] + `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,
    max: data.forecast.forecastday[2].day[`max${tempUnit}`] + `°${tempUnit == 'temp_c' ? 'C' : 'F'}`
  };

  return [currentObject, todayObject, tomorrowObject, thirdObject]
}
