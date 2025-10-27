// =============================================================
// Mini Project — Contact Card
// =============================================================

/*
STEP 1 — Create these DOM references (exact names):
  - const form = document.getElementById("contactForm")
  - const contactsList = document.getElementById("contacts")
  - const status = document.getElementById("status")
  - const clearBtn = document.getElementById("clearBtn")
*/
  const form = document.getElementById("contactForm");
  const contactsList = document.getElementById("contacts");
  const statusToast = document.getElementById("status");
  const clearBtn = document.getElementById("clearBtn");
/*
STEP 2 — Write a helper function named createContactCard(dataObject)
  - Function name: createContactCard
  - Parameter: an object with keys { first, last, email, phone, fav }
  - Returns: a <div> element with class "contact" (the card)

  Inside createContactCard:
    STEP 2A — Compute initials (variable name: initials)
    STEP 2B — Create the outer <div> (variable name: card)
    STEP 2C — Fill card content with these classes:
        - avatar
        - contact-body
        - name
        - meta
        - badge (only if fav is true)
    STEP 2D — return card
*/
function createContactCard({first, last, email, phone, fav}) {
  // Compute initials
  const initials = `${first[0] || ""}${last[0] || ""}`.toUpperCase();
  
  // Create the outer div
  const card = document.createElement('div');
  card.className = 'contact';

  card.innerHTML = `
    <div class="avatar">${initials}</div>
    <div class="contact=body">
      <p class="name">${first} ${last}</p>
      <p class="meta">${email}</p>
      <p class="meta">${phone}</p>
      ${fav ? '<span class="badge">Favorite</span>' : ""}
    </div>`;

  return card
}
/*
STEP 3 — Write a helper function named showToast()
  - Function name: showToast
  - Action: unhides #status, then hides it after 2000ms
*/

function showToast() {
  statusToast.hidden = false;
  setTimeout(() => {
    statusToast.hidden = true;
  }, 2000);
}
/*
STEP 4 — Write a helper function named removeEmptyState()
  - Function name: removeEmptyState
  - Action: if an element with class ".empty" exists inside #contacts, remove it
*/
function removeEmptyState() {
  const emptyState = contactsList.querySelector('.empty');
  if (emptyState) {
    emptyState.remove();
  }
};

/*
STEP 5 — Write a helper function named restoreEmptyState()
  - Function name: restoreEmptyState
  - Action: replace the innerHTML of #contacts with the default empty-state block
*/
function restoreEmptyState() {
  const emptyState = contactsList.querySelector('.empty');
  contactsList.innerHTML = `
  <div class="empty">
    <p>No contacts yet — add your first one!</p> 
  </div>`;
};

/*
STEP 6 — Add a "submit" listener on form that runs an inline function
  - Read inputs into exact variable names:
      first, last, email, phone, fav
  - Build a card with createContactCard({ first, last, email, phone, fav })
  - Call removeEmptyState(), then append the new card to contactsList
  - Call showToast(), then reset the form
*/
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const first = form.elements.firstName.value.trim();
  const last = form.elements.lastName.value.trim();
  const email = form.elements.email.value.trim();
  const phone = form.elements.phone.value.trim();
  const fav = form.elements.fav.checked;

  const card = createContactCard({first, last, email, phone, fav})

  removeEmptyState();
  contactsList.appendChild(card);
  showToast();
  form.reset();
})

/*
STEP 7 — Add a "click" listener on clearBtn
  - When clicked, call restoreEmptyState()
*/

clearBtn.addEventListener("click", () => {
  restoreEmptyState();
})