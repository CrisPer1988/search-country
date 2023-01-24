import React from 'react'

const Country = ({countries}) => {
    
console.log(countries);
  return (
    <article className='box__country'>
        <img className='flag__img' src={countries?.flags.svg} alt="" />
        <h1 className='tittle'>{countries?.name.common}</h1>
        <h3>Capital: {countries?.capital}</h3>
        <h3>Region: {countries?.region}</h3>
        <h3>Poblacion: {countries?.population}</h3>
        <h3>Zona horaria: {countries?.timezones[0]}</h3>
        <h3>Dominio de nivel superior: {countries?.tld}</h3>
        <h3><a href={countries?.maps.googleMaps} target="_blank">Mapa: Ir al mapa</a></h3>
   
    </article>

  )
}

export default Country