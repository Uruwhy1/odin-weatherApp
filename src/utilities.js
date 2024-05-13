export const APIkey = '2c9441f60c944d63996153000242204';
export let tempUnit = 'temp_c';

// GET CURRENT TIMEZONE
export let zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2].split('-')[0];


/* GET MOST REPEATED VALUE */
export function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
  ).pop();
}


// Dark Mode / Light Mode Functionality
(function colorMode() {
  const colorContainer = document.querySelector('.colour-mode');
  const modeToggleDark = document.getElementById('mode-toggle-dark');
  const modeToggleLight = document.getElementById('mode-toggle-light');

  const body = document.body;

  modeToggleDark.addEventListener('click', () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');

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

    colorContainer.classList.remove('left-press');
    colorContainer.classList.add('right-press');

    modeToggleDark.style.stroke = 'white';
    modeToggleDark.style.fill = 'none';

    modeToggleLight.style.stroke = 'yellow';
    modeToggleLight.style.fill = 'yellow';
  });
})()

// Celsius Mode / Fahrenheit Mode Functionality

function temperatureToggle() {
  const tempContainer = document.querySelector('.unit');
  const celsiusToggle = document.querySelector('.celsius');
  const farenheitToggle = document.querySelector('.fahrenheit');

  tempContainer.classList.add('left-press');


  celsiusToggle.addEventListener('click', () => {
    tempUnit = 'temp_c'
    console.log(tempUnit)
    tempContainer.classList.remove('right-press');
    tempContainer.classList.add('left-press');
  })

  farenheitToggle.addEventListener('click', () => {
    tempUnit = 'temp_f'
    tempContainer.classList.remove('left-press');
    tempContainer.classList.add('right-press');
  });
};
temperatureToggle()
