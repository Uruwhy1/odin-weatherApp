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
  require.context('./images/', false, /\.(png|jpe?g|svg)$/),
);

// ------------------ ACTUAL CODE --------------------------------- //

async function doStuff() {
  let [currentArray, todayArray, tomorrowArray, thirdArray] = await getWeather(APIkey, "Montevideo", tempUnit);
  updateDom(currentArray, todayArray, tomorrowArray, thirdArray)
}

doStuff()



