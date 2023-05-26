const changeableTitle = document.querySelector('.templates__content-changeable-title');
const sizeMediaScreen = window.matchMedia("(min-width: 1150px)");

const changeableText = [
    'brainstorming template',
    'product requirements template',
    'flow chart template',
    'customer journey map template',
    'Instagram template',
    'product development template',
    'meeting notes template',
    'infographic template',
    'sequence diagram template',
    'development canvas template'
];

const changeableTextColors = [
    'var(--templates-changeable-text-color-1)',
    'var(--templates-changeable-text-color-3)',
    'var(--templates-changeable-text-color-4)',
    'var(--templates-changeable-text-color-5)',
    'var(--templates-changeable-text-color-6)',
    'var(--templates-changeable-text-color-7)',
    'var(--templates-changeable-text-color-8)',
    'var(--templates-changeable-text-color-9)',
    'var(--templates-changeable-text-color-10)'
]

const getRandomSelect = (arr) => {
    const randIndx = Math.floor(Math.random() * arr.length);
    return arr[randIndx];
}

function changeColorAndText() {
    if (sizeMediaScreen.matches) {
        changeableTitle.innerText = getRandomSelect(changeableText);
        changeableTitle.style.color = getRandomSelect(changeableTextColors);
    } else {
        changeableTitle.style.color = getRandomSelect(changeableTextColors);
        document.querySelector('.templates__content-changeable-title').innerText = 'favorites';
    }
}

setInterval(changeColorAndText, 1000);
changeColorAndText();
sizeMediaScreen.addEventListener(changeColorAndText);

// title.classList.add('some-class');