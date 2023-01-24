import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country'
function App() {
  //Estado que nos sirve para mandar la informacion de una petición asincrona
  const [countries, setCountries] = useState()
  const [url, setUrl] = useState('https://restcountries.com/v3.1/name/');
  const [country, setCountry] = useState('');
  useEffect(() => {
    setUrl(`https://restcountries.com/v3.1/name/${country}`), [country]
    axios.get(url)
      .then(res => setCountries(res.data[0]))
      .catch(err => console.log(err))
  }, [country])
  return (
    <div className="App">
      <h1>Peticiones Asincronas</h1>
      <Country countries={countries} />
      <input className='imput' placeholder='Ingrese un pais' type="text" value={country} onChange={e => setCountry(e.target.value)} />
      <p>URL: {url}</p>
    </div>
  )
}
export default App