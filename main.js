
const apiurl = "https://pokeapi.co/api/v2/pokemon/ditto";
const appdiv = document.getElementById("app");

fetch(apiurl)
.then(response => {
  if (!response.ok){
    throw new Error('HTTP error! Status: ${response.status}');
  }

  return response.json();
})

.then(pokemonData => {
  const pokemonInfo = document.createElement('div');
  pokemonInfo.innerHTML = `
  <h2>${pokemonData.name}</h2>
  <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" />
  <p>Height: ${pokemonData.height}</p>
  <p>Weight: ${pokemonData.weight}</p>
  `;

  appdiv.appendChild(pokemonInfo);
  
})
.catch( console => {
  console.error('Error fetching Pokemon data:'.at,error);
});

