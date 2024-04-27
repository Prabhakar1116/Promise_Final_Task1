// fetching data from api and checking errors if any
fetch('https://api.imgflip.com/get_memes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  // rendering the memes
  .then(result => {
    const memes = result.data.memes;
    renderMemes(memes);
  })
  // catching errors if any
  .catch(error => console.error("Error occurred while fetching data", error));

  // Function to render the memes
function renderMemes(memes) {
  const cardContainer = document.querySelector(".cardContainer");


  // Looping through each meme and create a card for it
  memes.forEach(meme => {
    const { name, url } = meme;
    // creating a card for each meme
    const card = createCard(name, url);
    cardContainer.appendChild(card);
  });
}

// Function to create a card for a meme
function createCard(name, url) {

     // Create a div element for the card
  const card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-6", "mb-4");

    // HTML content for the card element
  const cardContent = `
    <div class="card">
      <img src="${url}" class="card-img-top" alt="${name}">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <a href="${url}" class="btn btn-primary" target="_blank">View Full Image</a>
      </div>
    </div>
  `;

   // Set the HTML content to the card element
  card.innerHTML = cardContent;
  // Return the card element
  return card;
}
