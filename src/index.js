import { getWeather } from './API';
import { APIkey, tempUnit, currentPosition } from './utilities';
import { updateDom } from './domManipulator';
import './css/reset.css';
import './css/fonts.css';
import './css/styles.css';
function importAllImages(r) {
  return r.keys().map(r);
}
// eslint-disable-next-line no-unused-vars
const images = importAllImages(
  // eslint-disable-next-line no-undef
  require.context('./images/', false, /\.(png|jpe?g|svg)$/),
);

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
  const searchSVG = document.querySelector('.search svg');
  const searchText = document.querySelector('.search input');
  
  searchSVG.addEventListener('click', function () {
    searchSVG.style.animation = "rotate 0.8s linear infinite"
    doStuff(searchText.value);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    searchText.value = "";
  })
})()
