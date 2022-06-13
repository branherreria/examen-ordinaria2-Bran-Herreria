import React from 'react';

class Ejercicios2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej2">
        <h2>Segunda Evaluación</h2>
        <ul>
          <li>
            Utiliza la API REST{' '}
            <a href="https://disneyapi.dev/docs">Disney API</a> para generar una
            lista de elementos. Deberás mostrar únicamente los campos ID y name
            <b> (1 punto)</b>:
          </li>
          <li>
            Utiliza los datos que devuelve la API del ejercicio anterior para
            generar componentes de tipo{' '}
            <a href="https://react-bootstrap.github.io/components/toasts/">
              Toast
            </a>{' '}
            de React Bootstrap en los que se muestre la misma información del
            apartado anterior, aunque ahora cada elemento ha de tener una clave
            única generada con react-uuid <b>(1 punto)</b>
          </li>
          <li>
            Haz los componentes del apartado anterior clickables, de modo que al
            hacer click sobre uno de ellos se muestre en una{' '}
            <a href="https://react-bootstrap.github.io/components/modal/">
              Ventana modal
            </a>{' '}
            de React Bootstrap la siguiente información sobre el personaje
            seleccionado <b>(2 puntos)</b>:
            <ul>
              <li>Nombre</li>
              <li>Imagen</li>
              <li>Películas en las que aparece (en caso de haberlas)</li>
              <li>Juegos en los que aparece (en caso de haberlas)</li>
              <li>Series de TV en las que aparece (en caso de haberlas)</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Ejercicios2;
