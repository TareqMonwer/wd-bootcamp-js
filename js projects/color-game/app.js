// VARIABLE DECARATIONS
let num = 6;
let colors = generateRandomColors(num);
let pickedColor = pickColor();
// Getting tags that will be use for action
// or to show data
let boxes = document.querySelectorAll('.box');
let colorDisplay = document.querySelector('.color_code');
let headerBg = document.querySelector('.header');
let messageDisplay = document.querySelector('#message');
let easymoodBtn = document.querySelector('#easymood');
let hardmoodBtn = document.querySelector('#hardmood');
let newcolorSetBtn = document.querySelector('#newcolors');
// initial color display
colorDisplay.textContent = pickedColor;


// Reset Game...
newcolorSetBtn.addEventListener('click', function() {
    // make new color array.
    colors = generateRandomColors(num);
    // pick up new color.
    pickedColor = pickColor();
    // update color display.
    colorDisplay.textContent = pickedColor;
    // change box colors.
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[i]
    }
    messageDisplay.textContent = '';
    this.textContent = 'New Color Set'
})

// Change Game Mood to Easy...
easymoodBtn.addEventListener('click', function() {
    hardmoodBtn.classList.remove('active');
    easymoodBtn.classList.add('active');
    // generate 3 colors
    num = 3;
    colors = generateRandomColors(num);
    // pick and display color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // color 3 boxes
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.backgroundColor = colors[i];
        } else {
            // disappear 3 boxes
            boxes[i].style.display = 'none';
        }
    }
})

// Change Game Mood to Hard...
hardmoodBtn.addEventListener('click', function() {
    easymoodBtn.classList.remove('active');
    hardmoodBtn.classList.add('active');
    // generate 6 colors
    num = 6;
    colors = generateRandomColors(num);
    // pick and display color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // color boxes
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].style.display = 'block';
        }
    }
})


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

// FUNCTIONS AREA

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
