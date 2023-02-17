const itemInputEl = document.getElementById("item-input");
const listOutputEl = document.getElementById("list-output");
const choreArrayFromStorage = JSON.parse(localStorage.getItem("choreArray"));
const allDoneGif = '<img class="all-done-gif" src="images/All-Done.gif">';

let choreArray = [];

if (choreArrayFromStorage) {
  choreArray = choreArrayFromStorage;
  renderArray(choreArray);
}

function addChore() {
  // Get the value from the input field
  const choreText = itemInputEl.value;
  // If the value is not empty and is not already in the array, add it to the array
  if (choreText !== "" && !choreArray.includes(choreText)) {
    choreArray.push(choreText);
    itemInputEl.value = "";
    localStorage.setItem("choreArray", JSON.stringify(choreArray));
    renderArray(choreArray);
  }
}

itemInputEl.addEventListener("keyup", function (e) {
  // Check if the key pressed is the Enter key
  if (e.keyCode === 13) {
    addChore()
  }
});

function clearAll() {
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
}

// The below function listens for clicks to determine if a chore
// should be added, removed, or if all chores be removed
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("X")) {
    const indexOfItem = e.target.dataset.choreid
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

  if (e.target.id === "add-btn") {
    addChore()
  }

  if (e.target.id === "clear-btn") {
    clearAll()
  }
});

// this function displays the updated array on the webpage
function renderArray(chores) {
  let string = "";
  for (let i = 0; i < chores.length; i++) {
    string += `
        <div class="list-item" >
        <span class="chore-text">
        ${chores[i]}</span><img src="images/X.svg" class="X" data-choreid="${[i]}"/>
        </div>
        `;
  }
  listOutputEl.innerHTML = string;
}
