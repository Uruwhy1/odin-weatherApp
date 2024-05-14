const elementsObject = {
  /* COVER */
  cover: document.querySelector('.cover'),
  search: document.querySelector('.search'),
  searchText: document.querySelector('.search input'),
  searchSVG:document.querySelector('.search svg'),

  /* TOP CARD */
  country: document.querySelector('.current .free-text'),
  image: document.querySelector('.current .weather-image'),
  city: document.querySelector('.city-name'),
  weatherCondition: document.querySelector('.weather-description'),
  weatherTemperature: document.querySelector('.weather-temperature'),

  /* TODAY CARD */
  todayImage: document.querySelector('.today .weather-image'),
  todayDescription: document.querySelector('.today .day-description'),
  todayMinTemperature: document.querySelector('.today .min'),
  todayMaxTemperature: document.querySelector('.today .max'),

  todayMorning: document.querySelector('.today .morning-weather'),
  todayAfternoon: document.querySelector('.today .afternoon-weather'),
  todayEvening: document.querySelector('.today .evening-weather'),

  /* TOMORROW CARD */
  tomorrowImage: document.querySelector('.tomorrow .weather-image'),
  tomorrowDescription: document.querySelector('.tomorrow .day-description'),
  tomorrowMinTemperature: document.querySelector('.tomorrow .min'),
  tomorrowMaxTemperature: document.querySelector('.tomorrow .max'),


  tomorrowMorning: document.querySelector('.tomorrow .morning-weather'),
  tomorrowAfternoon: document.querySelector('.tomorrow .afternoon-weather'),
  tomorrowEvening: document.querySelector('.tomorrow .evening-weather'),

  /* THIRD CARD */
  thirdTitle: document.querySelector('.third h3'),

  thirdImage: document.querySelector('.third .weather-image'),
  thirdDescription: document.querySelector('.third .day-description'),
  thirdMinTemperature: document.querySelector('.third .min'),
  thirdMaxTemperature: document.querySelector('.third .max'),

  thirdMorning: document.querySelector('.third .morning-weather'),
  thirdAfternoon: document.querySelector('.third .afternoon-weather'),
  thirdEvening: document.querySelector('.third .evening-weather'),
};

export function updateDom(current, today, tomorrow, third) {
  /* COVER */
  elementsObject.cover.style.animation = "hideCover 0.5s forwards";
  elementsObject.searchSVG.style.animation = "none"
  setTimeout(() => {
    elementsObject.cover.style.display = "none"
  }, 500);

  /* current */
  elementsObject.image.src = current.icon;

  elementsObject.country.innerHTML = current.country;
  elementsObject.city.innerHTML = current.name;
  elementsObject.weatherTemperature.innerHTML = current.temperature;
  elementsObject.weatherCondition.innerHTML = current.condition;

  /* TODAY */
  elementsObject.todayImage.src = today.icon;

  elementsObject.todayDescription.innerHTML = today.condition;
  elementsObject.todayMinTemperature.innerHTML = today.min;
  elementsObject.todayMaxTemperature.innerHTML = today.max;

  elementsObject.todayMorning.innerHTML = today.morningData;
  elementsObject.todayAfternoon.innerHTML = today.afternoonData;
  elementsObject.todayEvening.innerHTML = today.eveningData;

  /* TOMORROW */
  elementsObject.tomorrowImage.src = tomorrow.icon;


  elementsObject.tomorrowDescription.innerHTML = tomorrow.condition;
  elementsObject.tomorrowMinTemperature.innerHTML = tomorrow.min;
  elementsObject.tomorrowMaxTemperature.innerHTML = tomorrow.max;

  elementsObject.tomorrowMorning.innerHTML = tomorrow.morningData;
  elementsObject.tomorrowAfternoon.innerHTML = tomorrow.afternoonData;
  elementsObject.tomorrowEvening.innerHTML = tomorrow.eveningData;

  /* THIRD DAY */
  elementsObject.thirdTitle.innerHTML = third.date;

  elementsObject.thirdImage.src = third.icon;

  elementsObject.thirdDescription.innerHTML = third.condition;
  elementsObject.thirdMinTemperature.innerHTML = third.min;
  elementsObject.thirdMaxTemperature.innerHTML = third.max;

  elementsObject.thirdMorning.innerHTML = third.morningData;
  elementsObject.thirdAfternoon.innerHTML = third.afternoonData;
  elementsObject.thirdEvening.innerHTML = third.eveningData;
}

export function errorCatch() {
  elementsObject.searchSVG.style.animation = "none";
  elementsObject.searchText.value = "";

  elementsObject.search.style.animation = "wrong 0.3s linear forwards";
  setTimeout(() => {
    elementsObject.search.style.animation = "wrong-out 0.3s linear forwards";
  }, 1500);
}