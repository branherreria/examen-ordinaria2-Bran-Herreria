import React from 'react';
import './style.css';
import Ejercicios1Ev from './components/Ejercicios1Ev';
import Ejercicios2Ev from './components/Ejercicios2Ev';

function App() {
  return (
    <div>
      <h1>Desarrollo de Interfaces: Evaluación Ordinaria 2</h1>
      <p>
        Resuelve los ejercicios propuestos. Para ello, haz un fork de este
        repositorio desde tu cuenta de Github y sube un enlace a la tarea de
        examen. El repositorio debe tener el nombre
        examen-ordinaria2-Nombre-Apellido, donde Nombre y Apellido son los
        tuyos.
      </p>
      <Ejercicios1Ev />
      <Ejercicios2Ev />
    </div>
  );
}

export default App;
