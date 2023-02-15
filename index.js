const itemInputEl = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const listOutputEl = document.getElementById("list-output");

let choreArray = [];

function renderList() {
  let chore = itemInputEl.value;
  let string = "";
  if (itemInputEl.value == "") {
  } else {
    choreArray.push(chore);
    for (let chore of choreArray) {
      string = `
    <div class="list-item">${chore}</div>
    `;
    console.log(string)
    }
    listOutputEl.innerHTML += string;
    itemInputEl.value = "";
    console.log(listOutputEl)
  }
}

function removeItem() {
    
}
addBtn.addEventListener("click", renderList);
