let num = 6;
let boxes = document.querySelectorAll('.box');
let moodBtns = document.querySelectorAll('.mood');
let colorDisplay = document.querySelector('.color_code');
let headerBg = document.querySelector('.header');
let messageDisplay = document.querySelector('#message');
let newcolorSetBtn = document.querySelector('#newcolors');
let colors = [];
let pickedColor;


init();

// Reset Game...
newcolorSetBtn.addEventListener('click', function() {
    reset();
})



// FUNCTIONS AREA
//---------------

function init(){
    moodSetup();
    setupBoxes();
    reset();
}

function moodSetup() {
    for(var i = 0; i < moodBtns.length; i++) {
        moodBtns[i].addEventListener('click', function(){
            moodBtns[0].classList.remove('active');
            moodBtns[1].classList.remove('active');
            this.classList.add('active');
            this.textContent === 'Easy' ? num = 3 : num = 6;
            reset();
        });
    }
}

function setupBoxes() {
    // Traversing boxes.
    for (var i = 0; i < boxes.length; i++) {
        // setting initial color to each box.
        boxes[i].style.backgroundColor = colors[i];

        // setting event to each boxes.
        boxes[i].addEventListener('click', function() {
            // get box color.
            let clickedColor = this.style.backgroundColor;
            // check picked and clicked colors.
            if (clickedColor === pickedColor) {
                // change header color, message winner.
                headerBg.style.backgroundColor = clickedColor;
                messageDisplay.textContent = "Correct Guess! You won.";
                changeBoxesColor(clickedColor);
                newcolorSetBtn.textContent = 'Play again'
            } else {
                // disappear the box with message.
                messageDisplay.textContent = "Not a match, try again :(";
                this.style.backgroundColor = '#232323';
            }
        })
    }
}

function reset() {
    // make new color array.
    colors = generateRandomColors(num);
    // pick up new color.
    pickedColor = pickColor();
    // update color display.
    colorDisplay.textContent = pickedColor;
    // change box colors.
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].style.display = 'block';
        } else {
            boxes[i].style.display = 'none';
        }
    }
    messageDisplay.textContent = '';
    newcolorSetBtn.textContent = 'New Color Set'
}

// boxes color changer function.
function changeBoxesColor(color) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color;
    }
}

// random color chooser.
function pickColor() {
    randomN = Math.floor(Math.random() * colors.length);
    return colors[randomN];
}

// generate random color array.
function generateRandomColors(num) {
    // make an array.
    let colorsArr = []
    // loop num times to push colors.
    for (var i = 0; i < num; i++) {
        // push random color.
        colorsArr.push(randomColor());
    }
    return colorsArr;
}

// makes random color.
function randomColor() {
    // rgb - 0-255.
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}
