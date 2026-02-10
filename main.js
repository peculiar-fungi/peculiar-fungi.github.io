// Get the button element by its ID
const button = document.getElementById('no');

// Add a click event listener to the button
    // Set the new position using inline styles


function loopAction() {
    button.style.top = Math.random() * window.innerHeight + 'px';
    button.style.left = Math.random() * window.innerWidth + 'px';
}

function no() {
    window.location.replace("https://buffaloakg.org/sites/default/files/styles/fixed_height_medium/public/artwork/2008_046_o2.jpg?itok=fHyuX1rI");
}

function yes() {
    window.location.replace("https://i.pinimg.com/originals/4c/62/b8/4c62b8664b2aa5d5c16e080936e52a88.gif");
}
// Start the interval
const intervalId = setInterval(loopAction, 100);
