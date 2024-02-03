import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Contenido from './components/contenido/contenido';
import { useState } from 'react';
import Gestor from './components/gestor/gestor';

function App() {
  const [opcion, setOpcion] = useState(0)
  return (
    <>
      <Navbar setOpcion={setOpcion}/> 
      <Gestor opcion={opcion}/>
    </>
  );
}

export default App;
