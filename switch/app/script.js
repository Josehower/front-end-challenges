const switchContainer = document.querySelector('.switch_container');

let switchState = false;

function toggleSwitch(actualState) {
  switchState = !actualState;
  switchContainer.style.justifyContent = switchState
    ? 'flex-start'
    : 'flex-end';
  switchContainer.style.backgroundColor = switchState
    ? 'var(--color-day-bg)'
    : 'var( --color-night-bg)';
}

switchContainer.addEventListener('click', () => {
  toggleSwitch(switchState);
});
