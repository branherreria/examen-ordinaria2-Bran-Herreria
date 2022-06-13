import React from 'react';
import Toast from 'react-bootstrap/Toast';
import uuid from 'react-uuid';

class Ejercicios2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personajes: [] };
    this.name = props.name;
    this.id = props._id;
  }

  async componentDidMount() {
    const res = await fetch("'https://api.disneyapi.dev/characters");
    const data = await res.json();
    this.setState({ personajes: data.data });

    this.state.personajes.map((item) => console.log('personaje: ' + item.name));
    //He intentado hacer esto para ver si se muestra por consola pero no, porque dan estos errores
    //Refused to execute script from 'https://github-7fi2fy.stackblitz.io/%E2%80%9Dhttp://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML%E2%80%9D' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
    //VM998:1 Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
    //Ahora salen 348126483462148 errores mas pero no importa
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

        {/* A partir de aqui ya no funciona ni cristo*/}

        {this.state.personajes.map((item) => {
          return (
            <tr>
              <td>ID: {item._id}</td>
              <td>nombre: {item.name}</td>
            </tr>
          );
        })}

        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          {this.state.personajes.map((item) => {
            return (
              <Toast.Body
                onClick={
                  (onClickItem = () => {
                    {
                      this.state.personajes.map((item) => {
                        return (
                          <tr>
                            <td>ID: {item._id}</td>
                            <td>nombre: {item.name}</td>
                          </tr>
                        );
                      });
                    }

                    return (
                      <Modal.Dialog>
                        <Modal.Header closeButton>
                          <Modal.Title>{item.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          <p>{item.imageUrl}</p>
                        </Modal.Body>

                        <Modal.Footer>
                          <Button variant="secondary">Close</Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    );
                  })
                }
              >
                ID: {item._id}, nombre: {item.name}
              </Toast.Body>
            );
          })}
        </Toast>
      </div>
    );
  }
}

export default Ejercicios2;
