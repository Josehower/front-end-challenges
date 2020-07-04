const switchContainer = document.querySelector('.switch_container');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

let switchState = true;

function toggleSwitch(actualState) {
  const icon = switchState ? [sun, moon] : [moon, sun];
  icon[0].classList.add('hide');
  icon[1].classList.remove('hide');

  switchContainer.style.justifyContent = switchState
    ? 'flex-start'
    : 'flex-end';
  switchContainer.style.backgroundColor = switchState
    ? 'var(--color-night-bg)'
    : 'var( --color-day-bg)';

  switchState = !actualState;
}

switchContainer.addEventListener('click', () => {
  toggleSwitch(switchState);
});
switchContainer.addEventListener('keyup', e => {
  if (e.key === 'Enter') toggleSwitch(switchState);
});
