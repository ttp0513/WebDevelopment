// ======================================================================
// PROJECT: TaskTracker Lite — DOM + Events
// PURPOSE: Connect JavaScript to HTML (DOM) and respond to events.
//
// ✅ REQUIRED NAMES:
//    IDs:        #taskForm, #taskInput, #addBtn, #status, #taskList, #themeBtn
//    Classes:    .header, .container, .task-item, .task-text, .btn,
//                .complete, .delete, .done
//    Variables:  form, input, statusEl, list, themeBtn
//    Functions:  addTaskItem(text), setStatus(message)
// ======================================================================

// STEP 1: Select elements by id and store in variables
const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const statusEl = document.getElementById('status');
const list = document.getElementById('taskList');
const themeBtn = document.getElementById('themeBtn');


// STEP 2: Add event listeners
//   - form.submit: preventDefault, validate input, call addTaskItem or setStatus
//   - themeBtn.click: toggle body.dark and aria-pressed

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (!inputValue) {
        setStatus('Please enter a task');
    } else {
        addTaskItem(inputValue)
        setStatus('Task added successfully');
    }
})

themeBtn.addEventListener('click', () => {
   document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.querySelector('header').style.background = isDark ? '#cbc8c8' : '';
  document.querySelector('header').style.color = isDark ? '#26210d' : '';
  themeBtn.setAttribute('aria-pressed', isDark);
});


// STEP 3: Function addTaskItem(text)
//   - Create li.task-item
//   - Add span.task-text, button.btn.complete, button.btn.delete
//   - completeBtn toggles .done
//   - deleteBtn removes li and calls setStatus
function addTaskItem(text) {
    // Create list element with task-item class
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Add span element with task-text class
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = text;

    // Create complete btn
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('btn', 'complete');
    completeBtn.textContent = 'O';

    // Add event click to toggle taskItem completion
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('done');
    })

    // Add delete btn
    const delBtn = document.createElement('button');
    delBtn.classList.add('btn', 'delete');
    delBtn.textContent = 'X';
    

    // Add event click to remove li and calls setStatus
    delBtn.addEventListener('click', () => {
        taskItem.remove();
        setStatus('Task removed');
    });
    
    taskItem.append(taskText, completeBtn, delBtn);
    list.appendChild(taskItem);
};


// STEP 4: Function setStatus(message)
//   - Update statusEl.textContent
function setStatus(message, duration = 1000) {
  statusEl.textContent = message;
  statusEl.classList.remove('hidden');

  setTimeout(() => {
    statusEl.classList.add('hidden');
    setTimeout(() => {
      statusEl.textContent = '';
    }, 500); // match transition duration
  }, duration);
}
// STEP 5 (Optional): Save/load tasks with localStorage
