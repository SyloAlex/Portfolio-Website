# Micro Proyecto 1 para la materia Sistemas de Información del Diplomado de Desarrollo de Software de la UNIMET

## Uno de los requerimientos más destacados a la hora de presentarse en una entrevista de trabajo es tener una página informativa que complemente su C.V en donde quede en evidencia tu trabajo e información relevante para los reclutadores.
## Se necesita que usted desarrolle una página web de portafolio, elaborada con HTML, CSS y JS, en donde deberán resaltar 6 secciones imprescindibles:
### ● Navbar. El navbar en este caso solo debe desplazar el scroll de la pantalla hacia la sección que se seleccione, es decir, solo será un ancla hacia cada sección de la página (About me, Contact Me, Experience, etc).
### ● Hero. El hero tiene que ser un carrusel dinámico de imágenes (mínimo 3 imágenes) que ocupe el 100% de la pantalla. Recuerda que este hero es lo primero que van a ver las personas al visitar tu página, debe ser llamativo y dinámico. Las imágenes pueden ser de ti, de tus proyectos o cualquier cosa relevante que quieras mostrar.
### ● Experience. Sección en donde debe mostrar los proyectos previamente desarrollados por usted. Cada proyecto en esta sección debe tener:
○ Título
○ Tecnologías utilizadas
○ Fecha de ejecución
○ Link para visitar el sitio web en una nueva tab del navegador
○ Una imagen representativa del proyecto
### ● About Me. En esta sección deberán colocar una imagen y una pequeña descripción acerca de ustedes colocando:
○ Nombre completo
○ Foto de ti
○ Objetivos a corto
○ Objetivos a largo plazo.
○ Motivaciones, gustos, etc.
### ● Skills. En esta sección deberán colocar de manera creativa sus habilidades o destrezas referentes al área de conocimiento de programación, desarrollo y tecnología. Puede ser un gráfico de barras, barras de progreso o alguna
 manera divertida. Lo importante es que no utilices librerías para hacer el
trabajo.
### ● Contact Me. Deberá realizar un formulario donde los reclutadores puedan
colocar su nombre, email y un mensaje para comunicarse con ustedes. Además en esta sección los reclutadores deberán poder encontrar tu información de contacto como: redes sociales, correo electrónico y número telefónico. Al hacer click en las redes sociales deberán abrir una nueva ventana del navegador. Al hacer click en el número de teléfono deberá abrir WhatsApp Web para establecer una conversación directa.

## REQUERIMIENTOS FUNCIONALES
### ● Al momento de hacerle click a “enviar” en el formulario de contacto, solo deberán mostrar los datos introducidos por el usuario en la consola del explorador y mostrar una alerta que diga: “Su solicitud ha sido enviada”. En caso de que los datos no estén completos o sean erróneos (email inválido, caracteres especiales, campos vacíos, etc), no podrá ser enviado el mismo y deberá alertar que el formulario falló. La validación no será tomada en cuenta para la nota si solo se utiliza la propiedad “required” de los inputs en HTML, es decir, que debes utilizar Javascript para reforzar las validaciones del formulario.
### ● Para la sección de Skills usted deberá crear, con ayuda de Javascript, un JSON que liste todas sus habilidades y utilizarlo para crear dinámicamente el HTML desde Javascript.
### ● La sección del Hero debe ser un slider de imágenes. Podría utilizar como ejemplo la página de Amazon o de Amerant Bank para verificar su funcionalidad. DEBEN HACER USO DE JS PARA SU CREACIÓN (No se permite hacer únicamente el uso de animaciones de CSS para el slider). De no cumplir con este requisito el puntaje del mismo se verá afectado.
### ● Deben hacer uso de etiquetas, clases e IDs, para el correcto funcionamiento de los estilos e interactividad de la página web.
### ● El proyecto debe tener únicamente (Sin contar imágenes, íconos, etc) 3 archivos:
#### ○ index.html ○ styles.css ○ main.js
### ● DEBEN HACER USO DE LA HERRAMIENTA GITHUB PAGES para el Hosteo de la página web. En caso de que la página NO cumpla esta condición su nota será sobre 10 puntos.
### ● No se debe hacer uso de estilos internos en el archivo HTML, es decir,
style=””.
  
### ● No puede hacer uso de estilos embebidos en las etiquetas <style></style>. Ni tampoco colocar Javascript embebido en las etiquetas <script></script>. Utilice los archivos correspondientes anteriormente mencionados.
### ● Por cada una de las secciones descritas arriba, deberán generar una branch nueva. Al finalizar con la misma, deberán hacer MERGE con la rama master para que queden todos los cambios en esta branch. En otras palabras, deben hacer una branch por cada sección y luego lo juntan todo en master. Además deberán subir todas las ramas al repositorio para que sean evaluadas.
### ● QUEDA PROHIBIDO EL USO DE TEMPLATES DE HTML y FRAMEWORKS como Bootstrap, Materialize, Bulma, etc. En caso de usarlos tienen 0. Un template puede ser cualquier página encontrada en internet, descargada y personalizada por ustedes. Todo el diseño de este portafolio debe ser hecho únicamente por ustedes, no descargado de internet.
