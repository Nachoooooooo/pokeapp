import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Pokes = () => {

  const [pokemons, setPokemons] = useState([]); // Para guardar los posts
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`);
        const json = res.data;

        // Guarda en el array de posts el resultado. Procesa los datos
        const results = json.results;
        var list = [];
        results.forEach((value) => {
          axios.get(value.url).then((r) => {
            list.push({
              ...value, r:r.data
            })
            setPokemons(list);
            setFilteredPokemons(list);
          })
        })
 
      } catch (e) {
        setPokemons([])
        setFilteredPokemons([]) // No pintes nada 
      }
    }

    fetchData();
  }, []); // componentDidUpdate


  const handleChange = e => {
    //e.preventDefault();
    setTimeout(() => {
      setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.includes(e.target.value)))
    }, 1500)
    // Modificando el estado de Value
  };


  return <section>
    <h1>Búsqueda por pokemon</h1>
    <form>
      <input name="pokemon" onChange={handleChange} />
    </form>

    {filteredPokemons.length !== 0 ?
      <ul className='listado'>
        {filteredPokemons.map(pokemon => (
          
          
          
          <li key={pokemon.name}>  <img src={pokemon.r.sprites.other.home.front_default} width={200} height={200} alt='pokemons'></img><br></br>NAME: {pokemon.name}<br></br> BASE EXPERIENCE: {pokemon.r.base_experience}<br></br> HEIGHT: {pokemon.r.height}</li>
        ))}
      </ul>
      : ""
    }
  </section>
};

export default Pokes;
