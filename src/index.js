import { getWeather } from './API';
import { APIkey, tempUnit } from './utilities';
import { updateDom } from './domManipulator';

import './css/reset.css';
import './css/fonts.css';
import './css/styles.css';
import './css/settings.css';


// ------------------ ACTUAL CODE --------------------------------- //

async function doStuff(location) {
  let [currentArray, todayArray, tomorrowArray, thirdArray] = await getWeather(
    APIkey,
    location,
    tempUnit,
  );
  updateDom(currentArray, todayArray, tomorrowArray, thirdArray);
}

(function addEvents() {

  const cover = document.querySelector('.cover');
  const searchForm = document.querySelector('.search');
  const searchSVG = document.querySelector('.search svg');
  const searchText = document.querySelector('.search input');

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    searchSVG.style.animation = 'rotate 0.8s linear infinite';
    doStuff(searchText.value);
  });

  document.addEventListener('DOMContentLoaded', function () {
    searchText.value = '';

  });

  document.addEventListener('keypress', (event) => {
    if (event.code === 'Space' && cover.style.display == 'none') {
      cover.style.animation = 'none';
      cover.style.display = 'flex';
      searchText.value = "";
    }
  });
})();
