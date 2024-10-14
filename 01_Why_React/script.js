// Initialize counts
const totalApple = 10
let firstBasketApples = totalApple
let secondBasketApples = totalApple - firstBasketApples

// Select elements
const firstBasketSpan = document.querySelector('.basket-1 span')
const secondBasketSpan = document.querySelector('.basket-2 span')
const leftArrow = document.querySelector('.left-arrow')
const rigtArrow = document.querySelector('.right-arrow')

// Set inner Text of elements
function updateBaskets() {
    firstBasketSpan.innerText = firstBasketApples
    secondBasketSpan.innerText = secondBasketApples
}

updateBaskets()

// Event Listeners for buttons
leftArrow.addEventListener('click', () => {
    if (firstBasketApples < totalApple) {
        firstBasketApples++
        secondBasketApples--
        updateBaskets()
    }
})

rigtArrow.addEventListener('click', () => {
    if (secondBasketApples < totalApple) {
        firstBasketApples--
        secondBasketApples++
        updateBaskets()
    }
})