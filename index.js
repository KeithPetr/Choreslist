const itemInputEl = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const listOutputEl = document.getElementById("list-output");

let choreArray = [];

addBtn.addEventListener("click", function () {
  if (itemInputEl.value === "") {
  } else {
    choreArray.push(itemInputEl.value);
    itemInputEl.value = "";
    renderArray(choreArray);
  }
});

removeBtn.addEventListener("click", function () {
  if (choreArray.length === 0) {
  } else {
    choreArray.pop();
    console.log(choreArray);
    itemInputEl.value = "";
    renderArray(choreArray);
  }
});

function renderArray(chores) {
  let string = "";
  for (let i = 0; i < chores.length; i++) {
    string += `
        <div class="list-item">${choreArray[i]}</div>
        `;
  }
  listOutputEl.innerHTML = string;
}
