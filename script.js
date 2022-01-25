// by using DOM create html elements

document.body.innerHTML = `
<div id="fetchdata">  
</div>
`;


//select the element to display the results
const displayResult = document.getElementById("fetchdata");

//get data from pokemon api link by using template literal
const getData = async () => {
  try {
    let pokemondata = [];
    let result;
    for (let id = 1; id <= 50; id++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      result = await response.json(); 
      let pokeAbility = result.abilities;
      let pokeMove = result.moves;      
      displayResult.innerHTML +=`
    
      <img src="${
        result.sprites.front_default
      }" alt="pokemon front image" /><br><br>

      pokemon name:
      ${result.name}<br><br>

      Weight:  ${result.weight}<br><br>

      Abilities: ${
        pokeAbility[0] && pokeAbility[1]
          ? `${pokeAbility[0].ability.name}, ${pokeAbility[1].ability.name} `
          : "none"
      }<br><br>
      Moves: ${pokeMove[0].move.name}, ${
        pokeMove[1].move.name
      }<br><br>
      
      `
    }
    
  } catch (error) {
    console.log(error);
  }
};

getData();
