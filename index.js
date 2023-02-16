import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const itemInputEl = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const listOutputEl = document.getElementById("list-output");
const choreArrayFromStorage = JSON.parse(localStorage.getItem("choreArray"));


let choreArray = [];

if (choreArrayFromStorage) {
  choreArray = choreArrayFromStorage;
  renderArray(choreArray);
}

addBtn.addEventListener("click", function () {
  if (itemInputEl.value === "" || choreArray.includes(itemInputEl.value)) {
  } else {
    choreArray.push(itemInputEl.value);
    itemInputEl.value = "";
    localStorage.setItem("choreArray", JSON.stringify(choreArray));
    renderArray(choreArray);
    console.log(choreArray);
  }
});

clearBtn.addEventListener("click", function () {
   // Clear the localStorage data
   localStorage.clear();
   // Clear the choreArray and render an empty array
   choreArray = [];
   renderArray(choreArray);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("X")) {
    const choreId = e.target.parentNode.id;
    console.log(choreId)
    let indexOfItem = choreArray.findIndex((item) => item === e.target.parentNode.innerText);
    console.log(indexOfItem)
    choreArray.splice(indexOfItem, 1);
    localStorage.setItem("choreArray", JSON.stringify(choreArray));
    renderArray(choreArray);
  }
});

function renderArray(chores) {
  let string = "";
  for (let i = 0; i < chores.length; i++) {
    string += `
        <div class="list-item" id="${uuidv4()}">
        ${chores[i]}<img src="images/X.svg" class="X"/>
        </div>
        `;
  }
  listOutputEl.innerHTML = string;
}
