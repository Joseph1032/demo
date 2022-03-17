const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const reset = document.getElementById("reset");
const totalNum = document.getElementById("tally_number");
let counter = 0;

addButton.addEventListener("click", () => {
    counter += 1;
    totalNum.innerHTML = counter;
});

removeButton.addEventListener("click", () => {
    counter -= 1;
    totalNum.innerHTML = counter;
});

reset.addEventListener("click", () => {
    counter = 0;
    totalNum.innerHTML = counter;
});