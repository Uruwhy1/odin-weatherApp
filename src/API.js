import { mode, zone } from './utilities';

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
    country: data.location.country,
    icon: data.current.condition.icon,
    name: data.location.name,
    condition: data.current.condition.text,
    temperature: `${data.current[tempUnit]}°${tempUnit == 'temp_c' ? 'C' : 'F'}`,
  };

  // Today (first bottom card)
  let todayObject = {
    icon: data.forecast.forecastday[0].day.condition.icon,
    condition: data.forecast.forecastday[0].day.condition.text,
    min:
      data.forecast.forecastday[0].day[`min${tempUnit}`] +
      `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,
    max:
      data.forecast.forecastday[0].day[`max${tempUnit}`] +
      `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,

    morningData: getAverageWeather(
      data.forecast.forecastday[0],
      'morning',
      tempUnit,
    ),
    afternoonData: getAverageWeather(
      data.forecast.forecastday[0],
      'afternoon',
      tempUnit,
    ),
    eveningData: getAverageWeather(
      data.forecast.forecastday[0],
      'evening',
      tempUnit,
    ),
  };

  // Tomorrow (second bottom card)
  let tomorrowObject = {
    icon: data.forecast.forecastday[1].day.condition.icon,
    condition: data.forecast.forecastday[1].day.condition.text,
    min:
      data.forecast.forecastday[1].day[`min${tempUnit}`] +
      `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,
    max:
      data.forecast.forecastday[1].day[`max${tempUnit}`] +
      `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,

    morningData: getAverageWeather(
      data.forecast.forecastday[1],
      'morning',
      tempUnit,
    ),
    afternoonData: getAverageWeather(
      data.forecast.forecastday[1],
      'afternoon',
      tempUnit,
    ),
    eveningData: getAverageWeather(
      data.forecast.forecastday[1],
      'evening',
      tempUnit,
    ),
  };

  // Third day (third bottom card)
  let thirdObject = {
    date: new Date(data.forecast.forecastday[2].date).toLocaleDateString(
      'en-US',
      { weekday: 'long', timeZone: `${zone}` },
    ),
    icon: data.forecast.forecastday[2].day.condition.icon,
    condition: data.forecast.forecastday[2].day.condition.text,
    min:
      data.forecast.forecastday[2].day[`min${tempUnit}`] +
      `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,
    max:
      data.forecast.forecastday[2].day[`max${tempUnit}`] +
      `°${tempUnit == 'temp_c' ? 'C' : 'F'}`,

    morningData: getAverageWeather(
      data.forecast.forecastday[2],
      'morning',
      tempUnit,
    ),
    afternoonData: getAverageWeather(
      data.forecast.forecastday[2],
      'afternoon',
      tempUnit,
    ),
    eveningData: getAverageWeather(
      data.forecast.forecastday[2],
      'evening',
      tempUnit,
    ),
  };

  return [currentObject, todayObject, tomorrowObject, thirdObject];
}

function getAverageWeather(dayData, timeOfDay, tempUnit) {
  let startHour,
    endHour = false;

  // Define start and end hours based on time of day
  switch (timeOfDay) {
    case 'morning':
      startHour = 6;
      endHour = 10;
      break;
    case 'afternoon':
      startHour = 13;
      endHour = 17;
      break;
    case 'evening':
      startHour = 18;
      endHour = 22;
      break;
    default:
      return null; // Handle invalid timeOfDay values
  }

  // Extract condition texts or temperature values based on time of day
  const weatherTextArray = [];
  const weatherTempArray = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    weatherTextArray.push(dayData.hour[hour].condition.text);
    weatherTempArray.push(dayData.hour[hour][tempUnit]);
  }
  return (
    mode(weatherTextArray) +
    ' | ' +
    "<span class='accent-text'>" +
    Math.floor(
      weatherTempArray.reduce((a, b) => a + b) / weatherTempArray.length,
    ) +
    `°${tempUnit == 'temp_c' ? 'C' : 'F'}` +
    '</span>'
  );
}
