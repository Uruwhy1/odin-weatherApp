/* eslint-disable no-unused-vars */
export const APIkey = '2c9441f60c944d63996153000242204';
export let tempUnit = 'temp_c';
export let currentPosition = getPosition();

// GET CURRENT POSITION
export async function getPosition() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return position.coords.latitude + ',' + position.coords.longitude;
  } catch (error) {
    // Handle errors here
    console.error('Error getting current position:', error);
    return 'Error getting current position';
  }
}

// GET CURRENT TIMEZONE
export let zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2].split('-')[0];

// Dark Mode / Light Mode Functionality
(function colorMode() {
  const colorContainer = document.querySelector('.colour-mode');
  const modeToggleDark = document.getElementById('mode-toggle-dark');
  const modeToggleLight = document.getElementById('mode-toggle-light');

  const body = document.body;

  modeToggleDark.addEventListener('click', () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');

    colorContainer.style.boxShadow = '-8px 5px 0 #ffc300';
    colorContainer.classList.remove('right-press');
    colorContainer.classList.add('left-press');

    modeToggleLight.style.stroke = 'white';
    modeToggleLight.style.fill = 'none';

    modeToggleDark.style.stroke = 'yellow';
    modeToggleDark.style.fill = 'yellow';
  });

  modeToggleLight.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');

    colorContainer.style.boxShadow = '8px 5px 0 #ffc300';
    colorContainer.classList.remove('left-press');
    colorContainer.classList.add('right-press');

    modeToggleDark.style.stroke = 'white';
    modeToggleDark.style.fill = 'none';

    modeToggleLight.style.stroke = 'yellow';
    modeToggleLight.style.fill = 'yellow';
  });
})()

/* GET MOST REPEATED VALUE */
export function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
  ).pop();
}
