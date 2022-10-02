import React, {useState} from 'react';

function Altapokemon() {

  const [values, setValues] = useState({
    name: '',
    front_default: '',
    base_experience: '',
    height: '',
    weight: ''
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // POST con los datos
    //....
    alert(`Pokemon:${values.name}. Gracias!!!`)
  }

  return (
    <section className="pokem">
    <h1>Altapokemon</h1>
    <h3>Datos del Pokemon:</h3>
      <form  id="pokem" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
       <input name="name" type="text" onChange={handleChange}></input>
        <label htmlFor="front_default">Foto</label>
        <input name="front_default" type="text" onChange={handleChange}></input>
        <br /><br />
        <label htmlFor="base_experience">Experiencia</label>
        <input name="base_experience" type="number" onChange={handleChange}></input>
        <label htmlFor="height">Height</label>
        <input name="height" type="number" onChange={handleChange}></input>
        <label htmlFor="weight">Weight</label>
        <input name="weight" type="number" onChange={handleChange}></input>
        <button id="dbutton" variant="contained">ALTA POKEMON</button>
      </form>
    </section>
  )
}

export default Altapokemon