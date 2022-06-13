function crearFormulario() {
  document.getElementById('formulario').innerHTML = (
    <form>
      <label>
        Nombre y Apellidos
        <input type="text" id="nombreyapellidos" name="nombreyapellidos" />
      </label>
      <br />
      <label>
        Peso
        <input id="peso" type="number" name="peso" />
      </label>
      <br />
      <label>
        Altura
        <input id="altura" type="number" name="altura" />
      </label>
      <br />
      <label>
        Fecha de nacimiento
        <input
          type="date"
          id="fecha"
          name="fecha"
          min="1930-01-01"
          max="2022-06-13"
          onClick={
            (onClickItem = () => {
              var nombreyapellidos =
                document.getElementById('nombreyapellidos').value;
              var peso = document.getElementById('peso');
              var altura = document.getElementById('altura');
              var fecha = document.getElementById('fecha');

              document.getElementById('filas').innerHTML = (
                <tr>
                  <th>{nombreyapellidos}</th>
                  <th>{peso}</th>
                  <th>{altura}</th>
                  <th>{fecha}</th>
                  <th
                    onClick={
                      (onClickItem = () => {
                        var table = document.getElementById('filas');
                        var rowCount = table.rows.length;

                        table.deleteRow(rowCount - 1);
                      })
                    }
                  >
                    <img
                      width="25px"
                      src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg"
                    />
                  </th>
                </tr>
              );
            })
          }
        />
      </label>
      <br />
      <input type="submit" value="Enviar" />
    </form>
  );
}

function insertarBasura() {
  document.getElementsById('filas').insertRow(-1).innerHTML = (
    <th>
      <img
        width="25px"
        src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg"
      />
    </th>
  );
}
