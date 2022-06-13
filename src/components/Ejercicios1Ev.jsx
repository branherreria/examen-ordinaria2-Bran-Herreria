import React from 'react';
//import '../ev_1_code.js';

class Ejercicio1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej1">
        <h2>Primera Evaluación (parte práctica)</h2>
        <p>
          Resuelve los ejercicios propuestos mediante código Javascript y, en
          caso de que se indique, las modificaciones necesarias en este
          componente. Guarda las respuestas en un fichero con nombre{' '}
          <code>ev_1_code.js</code> en la carpeta /src (descomenta la línea para
          importarlo).{' '}
        </p>
        <ul>
          <li>
            Crea un formulario para insertar filas en la tabla que se muestra a
            continuación. Los campos del formulario deberán ser del tipo
            correspondiente <b>(1,5 puntos)</b>:
            <ul>
              <li>Nombre y apellidos: texto</li>
              <li>Peso y altura: numéricos</li>
              <li>Fecha de nacimiento: tipo fecha (con selector)</li>
            </ul>
            <div class="sol-div">
              <h3>SOLUCIÓN</h3>
              <table>
                <tr>
                  <th>Nombre y apellidos</th>
                  <th>Peso</th>
                  <th>Altura</th>
                  <th>Fecha de nacimiento</th>
                </tr>
              </table>
            </div>
          </li>
          <li>
            Añade un nuevo campo a la tabla con el nombre <b>Eliminar</b>{' '}
            (modificando este componente). En cada fila se mostrará como valor
            para el campo la siguiente imagen:{' '}
            <img
              width="25px"
              src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg"
            />
            . Al hacer click sobre la imagen, se borrará la fila seleccionada{' '}
            <b>(1,5 puntos)</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default Ejercicio1;
