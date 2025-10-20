/*
Mini Project — Shopping List Manager 

Goal
  Manage a list of strings with add, remove last, and clear actions; render the list and count.

Exact element ids required
  itemInput, addBtn, removeBtn, clearBtn, list, countLabel

STEP 1 — Data and selection
  Create an empty list named items.
  Select the elements by id and store them with the exact names above.
*/
let items = [];
let itemInput = document.getElementById('itemInput');
let addBtn = document.getElementById('addBtn');
let removeBtn = document.getElementById('removeBtn');
let clearBtn = document.getElementById('clearBtn');
let list = document.getElementById('list');
let countLabel = document.getElementById('countLabel');

/* 
STEP 2 — Render helper
  Create a function named renderAll that clears the list, appends one list item per string in items, and updates countLabel to show Count: a space and the number of items.
*/
function renderAll() {
    // Clear the list
    list.innerHTML = '';
    // Append one list item per string in items
    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    }
    // Update countLabel
    countLabel.textContent = `Items Count: ${items.length}`;
  }
/* 
STEP 3 — Add
  Create a function named handleAdd that reads trimmed text from itemInput.
  When the trimmed text is not empty, add it to the end of items and render.

*/
function handleAdd() {
    const newItem = itemInput.value.trim();
    if (newItem !== '') {
        items.push(newItem);
        renderAll();
        itemInput.value = ''; // Clear input after adding
    }
  } 

/*
STEP 4 — Remove Last
  Create a function named handleRemove that removes the last item from items when it exists and render.
*/
function handleRemove() {
    if (items.length > 0) {
        items.pop();
        renderAll();
    }
}
/*
STEP 5 — Clear
  Create a function named handleClear that empties items and render.

*/
function handleClear() {
    items = [];
    renderAll();
}
/*
STEP 6 — Wiring
  Wire addBtn to handleAdd, removeBtn to handleRemove, and clearBtn to handleClear.
  Call renderAll once so the page reflects the current state.
*/
addBtn.addEventListener('click', handleAdd);
removeBtn.addEventListener('click', handleRemove);
clearBtn.addEventListener('click', handleClear);
renderAll();
