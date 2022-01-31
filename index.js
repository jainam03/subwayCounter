let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
	countEl.textContent = 0
	count = 0
}

console.log("Lets count how many people entered the subway")

function display() {}

// Google:
// innerText alternative mdn
