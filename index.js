let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function save () {
  let currentCount = count + " - "
  saveEl.textContent += currentCount
  countEl.textContent = 0
  count = 0
}
