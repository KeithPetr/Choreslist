import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const itemInputEl = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const listOutputEl = document.getElementById("list-output");
const choreArrayFromStorage = JSON.parse(localStorage.getItem("choreArray"));
const allDoneGif = '<img class="all-done-gif" src="images/All-Done.gif">';

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
  if (choreArray.length === 0) {
  } else {
    // Clear the localStorage data
    localStorage.clear();
    // Clear the choreArray and render an empty array
    choreArray = [];
    itemInputEl.value = "";
    listOutputEl.innerHTML = allDoneGif;
    setTimeout(function () {
      listOutputEl.innerHTML = "";
    }, 3000);
  }
});

// The below function removes a specific item from the array and
// localStorage.
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("X")) {
    const choreId = e.target.parentNode.id;
    console.log(choreId);
    let indexOfItem = choreArray.findIndex(
      (item) => item === e.target.parentNode.innerText
    );
    console.log(indexOfItem);
    choreArray.splice(indexOfItem, 1);
    localStorage.setItem("choreArray", JSON.stringify(choreArray));
    renderArray(choreArray);

    if (choreArray.length === 0) {
      listOutputEl.innerHTML = allDoneGif;
      setTimeout(function () {
        listOutputEl.innerHTML = "";
      }, 3000);
    }
  }
});

function renderArray(chores) {
  let string = "";
  for (let i = 0; i < chores.length; i++) {
    string += `
        <div class="list-item" id="${uuidv4()}">
        <span class="chore-text">${
          chores[i]
        }</span><img src="images/X.svg" class="X"/>
        </div>
        `;
  }
  listOutputEl.innerHTML = string;
}
