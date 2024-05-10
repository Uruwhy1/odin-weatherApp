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
  thirdTitle: document.querySelector('.third h3'),
  thirdDescription: document.querySelector('.third .day-description'),
  thirdMinTemperature: document.querySelector('.third .min'),
  thirdMaxTemperature: document.querySelector('.third .max'),
};

export function updateDom(current, today, tomorrow, third) {
  /* current */
  elementsObject.city.innerHTML = current.name;
  elementsObject.weatherTemperature.innerHTML = current.temperature;
  elementsObject.weatherCondition.innerHTML = current.condition;

  /* TODAY */
  elementsObject.todayDescription.innerHTML = today.condition;
  elementsObject.todayMinTemperature.innerHTML = today.min;
  elementsObject.todayMaxTemperature.innerHTML = today.max;

  /* TOMORROW */ 
  elementsObject.tomorrowDescription.innerHTML = tomorrow.condition;
  elementsObject.tomorrowMinTemperature.innerHTML = tomorrow.min;
  elementsObject.tomorrowMaxTemperature.innerHTML = tomorrow.max;

  /* THIRD DAY */
  elementsObject.thirdTitle.innerHTML = third.date;
  
  elementsObject.thirdDescription.innerHTML = third.condition;
  elementsObject.thirdMinTemperature.innerHTML = third.min;
  elementsObject.thirdMaxTemperature.innerHTML = third.max;
}
