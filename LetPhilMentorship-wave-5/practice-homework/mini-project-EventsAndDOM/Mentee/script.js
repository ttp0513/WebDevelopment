// Goal: Practice Events & DOM by wiring up interactions in a small app.

// -----------------------------------------------------------------------
// STEP A — SELECT ELEMENTS
// - Select by id: btnIncrement, countValue
// - Select by id: btnTheme
// - Select by id: taskInput, prioritySelect, priorityLabel, btnAdd, taskList
// - Select by id: demoForm, nameInput, formMsg
// - Select by id: hoverCard
 const btnIncrement = document.getElementById('btnIncrement');
 const countValue = document.getElementById('countValue');
 const taskInput = document.getElementById('taskInput');
 const prioritySelect = document.getElementById('prioritySelect');
 const priorityLabel= document.getElementById('priorityLabel');
 const btnAdd = document.getElementById('btnAdd');
 const taskList = document.getElementById('taskList');
 const hoverCard = document.getElementById('hoverCard')

// -----------------------------------------------------------------------
// STEP B — CLICK: COUNTER
// - Add a click listener to btnIncrement
// - Read current number from countValue (parseInt)
// - Increase by 1 and put it back (textContent)

btnIncrement.addEventListener('click', () => {
    let value = parseInt(countValue.textContent);
    value++;
    countValue.textContent = value;
});
// -----------------------------------------------------------------------
// STEP C — THEME TOGGLE
// - Add a click listener to btnTheme
// - Toggle the "dark" class on <body> using classList.toggle
btnTheme.addEventListener("click", () => {
    document.body.classList.toggle('dark');
})
// -----------------------------------------------------------------------
// STEP D — INPUT + CHANGE + ENTER KEY
// - Add an input listener to taskInput (optional: show live length/preview)
// - Add a change listener to prioritySelect to update priorityLabel to "Priority: X"
// - Add a keydown listener to taskInput that checks if key === "Enter"; if so, call addTask()
taskInput.addEventListener('input', () => {
    if (taskInput.value.trim()) {
        btnAdd.disabled = false;
    } else {
        btnAdd.disabled = true;
    }
});

prioritySelect.addEventListener('change', () => {
    priorityLabel.textContent = `Priority: ${prioritySelect.value.charAt(0).toUpperCase() + prioritySelect.value.slice(1)}`
});

taskInput.addEventListener('keydown', (event) => {
    if (!taskInput.value.trim()) 
     return;
    
    if (event.key === 'Enter') {
        // Set priority if Ctrl is pressed
        if (event.ctrlKey) {
            prioritySelect.value = 'high';
        }
        addTask();
    }
});

// -----------------------------------------------------------------------
// STEP E — CREATE TASK ELEMENTS
// - Write a function addTask() that:
//   * Reads values from taskInput and prioritySelect
//   * Creates a new <li>, sets text to the task
//   * Creates a <span class="badge"> for the priority and appends it
//   * Creates a <button> "Delete" with a data-action="delete"
//   * Appends <li> to taskList
//   * Clears taskInput and focuses it again
function addTask() {
    //   * Reads values from taskInput and prioritySelect
    let taskInputValue = taskInput.value;
    let prioritySelectValue = prioritySelect.value;
    //   * Creates a new <li>, sets text to the task
    let taskItem = document.createElement('li');
    taskItem.textContent = taskInputValue;
    //   * Creates a <span class="badge"> for the priority and appends it
    let priorityBadge = document.createElement('span');
    priorityBadge.classList.add('badge');
    priorityBadge.textContent = prioritySelectValue.charAt(0).toUpperCase() + prioritySelect.value.slice(1);
    taskItem.appendChild(priorityBadge);
//   * Creates a <button> "Delete" with a data-action="delete"
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('data-action', 'delete');
    taskItem.appendChild(deleteBtn);
//   * Appends <li> to taskList
    taskList.appendChild(taskItem);
//   * Clears taskInput and focuses it again
    taskInput.value = '';
    taskInput.focus();

};
// -----------------------------------------------------------------------
// STEP F — EVENT DELEGATION FOR DELETE
// - Add one click listener to taskList (the <ul>)
// - Inside, check if event.target has data-action="delete"
// - If yes, remove the parent <li>
taskList.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'delete') {
        event.target.closest('li').remove();
    }
});

// -----------------------------------------------------------------------
// STEP G — FORM SUBMIT (PREVENT DEFAULT)
// - Add submit listener to demoForm
// - Use event.preventDefault() to stop page reload
// - Build a friendly text using nameInput.value and show it in formMsg
// - Optionally clear the input

demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMsg.textContent = `Hey ${nameInput.value}! Let's do this!`;
    nameInput.value = '';
})

// -----------------------------------------------------------------------
// STEP H — MOUSEOVER / MOUSEOUT
// - Add mouseover listener to hoverCard to add class "highlight"
// - Add mouseout listener to remove class "highlight"
hoverCard.addEventListener('mouseover', (event) => {
    hoverCard.classList.add('highlight');
});

hoverCard.addEventListener('mouseout', (event) => {
    hoverCard.classList.remove('highlight');
});

// -----------------------------------------------------------------------
// STEP I — BONUS IDEAS
// - Disable Add button when input is empty (use .disabled = true/false) - DONE!

// - Pressing Ctrl+Enter adds a task with "High" priority automatically - DONE!

// - Persist tasks to localStorage and load them on page load
