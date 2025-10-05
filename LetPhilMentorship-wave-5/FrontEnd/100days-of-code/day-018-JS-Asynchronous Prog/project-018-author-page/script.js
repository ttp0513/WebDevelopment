// Step 1. Get access to the author container and load more button

const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Step 2. Determine number of authors to fetch and display at a time
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];


// Step 3. Create a function to fetch and display authors
const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar">
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author} author page</a>
    </div>
  `;
  });
};

// Step 4. Fetch author data from the provided URL and display initial authors
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));  
  })
  .catch((err) => {
   authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
  });

// Step 5. Create a function to load more authors when button is clicked
const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = 'not-allowed'
    loadMoreBtn.textContent = 'No more data to load';
  }
};

// Step 6. Add event listener to the load more button to load more authors on click
loadMoreBtn.addEventListener('click', fetchMoreAuthors);
