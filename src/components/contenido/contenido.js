import { useState } from 'react'
import  './contenido.css'

export default function Contenido(){

    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    function suma(){
        setResultado(parseInt(numero1) + parseInt(numero2))

    }
    return (
        <>
            < main id='contenedor'>
                <span>numero 1</span>
                <input onChange={(e) => setNumero1(e.target.value)} type='number'></input>
                <span>numero 2</span>
                <input onChange={(e) => setNumero2(e.target.value)} type='number'></input>
                <button onClick={suma}>sumar</button>               
                <h1> {resultado}</h1>
            </main>
        </>
    );
}