const cards = document.querySelectorAll('.movies-container .card');
console.log(cards);
const moviesData = Array.from(cards).map(card => {
  const movieName = card.querySelector('h2').textContent.trim();
  const genre = card.querySelector('p').textContent.trim();

  return { movie: movieName, genre: genre };
});

console.log(moviesData);

const background = document.querySelector('body');
const selectContainer = document.querySelector('.select-container');
const moviesContainer = document.querySelector('.movies-container');

function movieChoice(movieGenre) {
  const movies = (movieGenre === 'all' ? moviesData : moviesData.filter(item => item.genre.toLowerCase() === movieGenre))

   // Set background once based on genre
  const bgColor = movieGenre === 'action' ? 'lightblue'
               : movieGenre === 'comedy' ? 'lightgreen'
               : movieGenre === 'horror' ? 'brown'
               : movieGenre === 'drama' ? 'lightgoldenrodyellow'
               : 'burlywood';

  background.style.background = bgColor;

  return movies.map(({ movie, genre }) => {
    return `<div class="card"><h2>${movie}</h2><p>${genre}</p></div>`;
  }).join('');
}

// Event listener
selectContainer.addEventListener('change', () => {
  moviesContainer.innerHTML = movieChoice(selectContainer.value);
});

console.log(selectContainer.value);
