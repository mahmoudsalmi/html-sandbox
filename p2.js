const HUE_MAX = 360;
const HUE_STEP = 3;
const SATURATION_MAX = 100;
const SATURATION_STEP = 1;

const LIGHTNESS_MAX = SATURATION_MAX;
const LIGHTNESS_STEP = SATURATION_STEP;

const hueEl = document.querySelector('.hue');
for (let hue = 0; hue <= HUE_MAX; hue += HUE_STEP) {
    let colorEl = document.createElement('p');
    colorEl.classList.add('color');
    colorEl.style.setProperty('--hue', `${hue}`);
    colorEl.style.setProperty('--saturation', `100%`);
    colorEl.style.setProperty('--lightness', `50%`);
    colorEl.onmouseenter = () => document.documentElement.style.setProperty('--current-hue', `${hue}`);
    hueEl.appendChild(colorEl);
}

const saturationEl = document.querySelector('.saturation');
for (let saturation = 0; saturation <= SATURATION_MAX; saturation += SATURATION_STEP) {
    let stepEl = document.createElement('p');
    stepEl.classList.add('color');
    stepEl.style.setProperty('--saturation', `${saturation}%`);
    stepEl.style.setProperty('--lightness', `50%`);
    stepEl.onmouseenter = () => document.documentElement.style.setProperty('--current-saturation', `${saturation}%`);
    saturationEl.appendChild(stepEl);
}

const lightnessEl = document.querySelector('.lightness');
for (let lightness = 0; lightness <= LIGHTNESS_MAX; lightness += LIGHTNESS_STEP) {
    let stepEl = document.createElement('p');
    stepEl.classList.add('color');
    stepEl.style.setProperty('--saturation', `100%`);
    stepEl.style.setProperty('--lightness', `${lightness}%`);
    stepEl.onmouseenter = () => document.documentElement.style.setProperty('--current-lightness', `${lightness}%`);
    lightnessEl.appendChild(stepEl);
}
