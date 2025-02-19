let count = 0;

const countDisplay = document.getElementById('count')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')

const updateDisplay = () =>{
    countDisplay.textContent = count;
    incrementBtn.disabled = count > 20;
    decrementBtn.disabled = count < 0;
};

incrementBtn.addEventListener('click', () => {
    if(count < 20){
        count++;
        updateDisplay();
    }
});

decrementBtn.addEventListener('click', () => {
    if(count > 0){
        count--;
        updateDisplay();
    }
});

updateDisplay();
