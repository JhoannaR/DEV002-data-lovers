/*PARA MOSTRAR LOS DATOS EN LA PANTALLA interacción con el DOM. Operaciones como creación de nodos,
 registro de manejadores de eventos (event listeners o event handlers), ....*/

//IMPORTACIÓN DE MÓDULOS
import { buscarPorInput, buscarPorTipo} from './data.js';
import { visualizarPokemones,closeModal, ordenarPokemonesPorNombre, dataGrafica} from './js/componentes.js';
import data from "../data/pokemon/pokemon.js"
const pokemones = data.pokemon;

//llamando a la funcion visualizarPokemones para mostrar todos los pokemones por defecto en mi págigit na principal
visualizarPokemones(pokemones);
//ordenarSCPokemones(pokemones);
/*const clickPokemonCard = document.querySelector('pokemon')
clickPokemonCard.addEventListener('click',(e=>{console.log(e)}))  */



//funcion cerrar modal al hacer clic en el boton
const closeModalPokemon = document.getElementById('botonCloseModal')
closeModalPokemon.addEventListener('click', closeModal) 

//funcion crear modal al hacer clic en el boton


//funcion buscar por imput de texto de nombre del pokemon
const inputSearch = document.getElementById('searchName')
inputSearch.addEventListener('input', (e)=>{
const pokemonFilterName=buscarPorInput(e.target.value, pokemones)
visualizarPokemones(pokemonFilterName);

})

//funcion buscar por imput select de tipo del pokemon
const typeSearch= document.getElementById('select-tipos')
typeSearch.addEventListener("change",(e)=>{
const pokemonFilterType=buscarPorTipo(e.target.value, pokemones)
visualizarPokemones(pokemonFilterType);
})

//funcion para ordenar alfabeticamente por nombre a las tarjetas de los pokemones
const sortTarjetas=document.getElementById('botonSort')
sortTarjetas.addEventListener('click', ordenarPokemonesPorNombre)


dataGrafica();








/*
const tiposPokemones = pokemones.map(pokemon=>pokemon.type);
//console.log(tiposPokemones)
tiposPokemones.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(tiposPokemones)
for (let i=0;i<251;i++)
{
    if(tipos.value)
    const pokemonesTipoBug=pokemones.filter(pokemon=>pokemon.type=='bug')
}
*/