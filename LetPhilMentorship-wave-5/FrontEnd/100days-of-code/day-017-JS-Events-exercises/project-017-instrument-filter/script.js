const instrumentData = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
]


// Create a function to filter instruments by selection
const selectContainer = document.querySelector('.select-container');
const productContainer = document.querySelector('.products-container');

function instrumentChoice(instrumentCategory) {
    const instruments = (instrumentCategory === 'all' ? instrumentData : instrumentData.filter(item => item.category === instrumentCategory))
    return instruments.map(({instrument, price}) => {
    return `<div class="card"><h2>${instrument}</h2><p>$${price}</p></div>`;
})
};

// Add event Listener Change to the select element
selectContainer.addEventListener('change', () => {
productContainer.innerHTML = instrumentChoice(selectContainer.value)});

