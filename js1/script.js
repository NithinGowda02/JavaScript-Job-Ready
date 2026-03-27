const employeeCount = document.getElementById("count")
const saveEl = document.getElementById("save-el")

let count = 0
window.increment = () => {
    count += 1
    employeeCount.textContent = count
}

window.save = () => {
    if (count === 0) return

    saveEl.textContent += `${count} - `
    employeeCount.textContent = 0
    count = 0
}
