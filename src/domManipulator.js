 const elementsObject = {
  /* TOP CARD */
  city: document.querySelector('.city-name'),
  weatherCondition: document.querySelector('.weather-description'),
  weatherTemperature: document.querySelector('.weather-temperature'),

  /* TODAY CARD */
  todayDescription: document.querySelector('.today .day-description'),
  todayMinTemperature: document.querySelector('.today .min'),
  todayMaxTemperature: document.querySelector('.today .max'),

  /* TOMORROW CARD */
  tomorrowDescription: document.querySelector('.tomorrow .day-description'),
  tomorrowMinTemperature: document.querySelector('.tomorrow .min'),
  tomorrowMaxTemperature: document.querySelector('.tomorrow .max'),

  /* THIRD CARD */
  thirdDescription: document.querySelector('.third .day-description'),
  thirdMinTemperature: document.querySelector('.third .min'),
  thirdMaxTemperature: document.querySelector('.third .max'),
};

export function updateDom(current, today) {
  /* current */
  elementsObject.city.innerHTML = current[0];
  elementsObject.weatherTemperature.innerHTML = current[1];
  elementsObject.weatherCondition.innerHTML = current[2];

  /* TODAY */
  console.log(today)
  elementsObject.todayDescription.innerHTML = today[0];
  elementsObject.todayMinTemperature.innerHTML = today[1];
  elementsObject.todayMaxTemperature.innerHTML = today[2];
}
