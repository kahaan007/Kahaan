
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}


function reverse() {
    count = count - 1
    countEl.textContent = count
}


