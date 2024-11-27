import img_a from './images/rey_atanagildo.png'
import ima_b from './images/rey_sisebuto.png'
import {useRef} from 'react'
import './App.css'

function App() {
  const contador = useRef()
  console.log(contador)

  function contar(e) {
    const tag = e.target
    tag.innerText = Number(tag.innerText) + 1
  }

  function convertir_moneda(e) {
    const tag = ''
  }

  return (
    <>
      <h1>Contador</h1>
      <p>Toca el número para contar</p>
      <p onClick={contar} className="contador">1</p>
      <button onClick={convertir_moneda}>Convertir moneda</button>
    </>
  )
}

export default App
