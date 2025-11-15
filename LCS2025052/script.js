const button = document.getElementById('colorButton');


function changeBackgroundColor() {
    const body = document.body
    const colors = ['#794f46ff', '#59725dff', '#3357FF', '#ac8d9dff', '#33FFF6'];

    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    body.style.backgroundColor = randomColor;

    
}

button.addEventListener('click', changeBackgroundColor);