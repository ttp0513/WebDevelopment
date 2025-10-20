// ===================== MENTEE — INSTRUCTIONAL STEPS =====================
// Goal: Practice different types of loops by generating a to-do list.

// STEP 1 — Create an array with 5 tasks (strings).
let tasks = [
    "Learn JavaScript",
    "Practice coding challenges",
    "Build a portfolio website",
    "Plan a lv2 project: Let's Build an App",
    "Update resume and LinkedIn profile"
];

// STEP 2 — Select button (#btnGenerate), ul (#taskList), and p (#taskCount).
const btnGenerate = document.getElementById('btnGenerate');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// STEP 3 — Add click event listener to button.
btnGenerate.addEventListener('click', function() {
    // Clear the list
    taskList.innerHTML = '';
    // Using a for loop to add tasks with prefix "(for)" 
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement('li');
        li.textContent = `(for) ${tasks[i]}`;
        taskList.appendChild(li);
    }
    // Using a while loop to add tasks with prefix "(while)"
    let j = 0;
    while (j < tasks.length) {
        const li = document.createElement('li');
        li.textContent = `(while) ${tasks[j]}`;
        taskList.appendChild(li);
        j++;
    }

    // Using for...of to add tasks with prefix "(for...of)"
    for (const task of tasks) {
        const li = document.createElement('li');
        li.textContent = `(for...of) ${task}`;
        taskList.appendChild(li);
    }
    // Using forEach to add tasks with prefix "(forEach)"
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = `(forEach) ${task}`;
        taskList.appendChild(li);
    }
    );

// STEP 4 — Inside the event:
//   - Clear the list.
//   - Use a for loop to add tasks with prefix "(for)".
//   - Use a while loop to add tasks with prefix "(while)".
//   - Use for...of to add tasks with prefix "(for...of)".
//   - Use forEach to add tasks with prefix "(forEach)".
// STEP 5 — Show total task count in #taskCount.
    taskCount.textContent = `Total Tasks: ${tasks.length}`;
});