const input = document.querySelector('#input'); 
let output = document.querySelector('#output');
output.style.visibility = 'hidden';
input.addEventListener('input', (e) => {
    output.style.visibility = 'visible';
    let value = e.target.value;
    document.querySelector('#gramsOutput').innerHTML = value / 0.0022046;
    document.querySelector('#kgOutput').innerHTML = value / 2.2046;
    document.querySelector('#ozOutput').innerHTML = value * 16;
})