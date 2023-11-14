<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generador de Enlace</title>
</head>
<body>
  <h1>Generador de Enlace</h1>

  <!-- Información para generar el enlace -->
  <label for="nombreInput">Nombre:</label>
  <input type="text" id="nombreInput" placeholder="Almendra Ortega">

  <label for="universidadInput">Universidad:</label>
  <input type="text" id="universidadInput" placeholder="PUCV">

  <!-- Nueva información (Glosario) -->
  <h2>Glosario</h2>
  <p><strong>ARRAY:</strong> Un array, en programación, es una estructura de datos que almacena una colección ordenada de elementos. La idea fundamental es que puedes almacenar varios valores bajo un mismo nombre y acceder a esos valores mediante su posición en el array.</p>

  <p><strong>INSTANCIAS:</strong> Es la creación de un objeto a partir de una clase. Una instancia puede tener o va a tener estado, comportamiento e identidad. El estado va a representar los valores de cada característica o atributo del objeto. Es como un molde.</p>

  <p><strong>ITERACIÓN:</strong> En programación, una iteración se refiere a la repetición de un conjunto de instrucciones o un bloque de código en un programa. Es una forma de ejecutar una serie de declaraciones varias veces, generalmente hasta que se cumple una condición específica.</p>

  <p><strong>TRUE:</strong> En programación, el valor true representa la afirmación de una condición o la activación de una característica.</p>

  <!-- Botón para generar el enlace -->
  <button onclick="generarEnlace()">Generar Enlace</button>

  <!-- Resultado del enlace generado -->
  <p id="resultadoEnlace"></p>

  <script>
    function generarEnlace() {
      // Obtener los valores de los campos de entrada
      var nombre = document.getElementById('nombreInput').value;
      var universidad = document.getElementById('universidadInput').value;

      // Comprobar si se ingresaron el nombre y la universidad (puedes ajustar según tus necesidades)
      if (nombre && universidad) {
        // Construir la URL del enlace con los parámetros proporcionados
        var enlaceGenerado = 'https://www.ejemplo.com/?nombre=' + encodeURIComponent(nombre) +
                             '&universidad=' + encodeURIComponent(universidad);

        // Mostrar el enlace generado
        document.getElementById('resultadoEnlace').innerHTML = '<strong>Enlace Generado:</strong> <a href="' + enlaceGenerado + '" target="_blank">' + enlaceGenerado + '</a>';
      } else {
        // Mostrar un mensaje si no se ingresaron el nombre y la universidad
        document.getElementById('resultadoEnlace').innerHTML = '<strong>Ingrese el nombre y la universidad.</strong>';
      }
    }
  </script>
</body>
</html>
