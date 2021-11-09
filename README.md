# Lab Notes

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del Proyecto](#2-resumen-del-proyecto)
* [3. Feedback recibido](#3-Feedback-recibido)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Plan de acción](#5-Plan-de-acción)

***

## 1. Preámbulo

Toma Nota es una app pensada para que el usuario pueda editar, borrar y crear notas, además de tener acceso rápido a ellas. Te facilita tomar apuntes, como si fuera un bloc de notas. 

## 2. Resumen del Proyecto

Actualmente nuestros dispositivo movil forma parte de nuestro día a día, es una herramienta para realizar nuestro trabajo, matenernos conectados y organizados, tomar notas de manera remota se vuelve indispensable, ya que en muchas ocaciones nos vemos en la necesidad de guardar un dato importante y si lo hacemos de forma  fisíca solemos perderlo, por ello la creación de Toma Nota permite al usuario apuntar rápidamente ideas o guardar notas más largas, con la ventaja que las puede ver en su dispositivo movil o su computadora, Además beneficia al medio ambiente reduciendo el uso del papel.

+++


En este proyecto se creo una Web App con `react` y `Firebase`.

En ella puedes:
* Autentificarte con correo y/o Google y/o Facebook.
* Cerrar sesión.
* Crear una nueva nota.
* Ver mis notas.
* Editar mis notas.
* Borrar mis notas.
* La aplicación debe ser un _Single Page App_. Las notas serán realizadas desde
una _tablet_, pero **no debe ser una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.


### Archivos del proyecto

El proyecto contine  los siguientes archivos base de configuración.

* `README.md` es donde se encontrará la descripción del proyecto y elementos
  relevantes de tu proyecto.  
* `.editorconfig` este archivo contiene la configuración para editores de texto.
* `.gitignore`  este archivo contiene reglas para ignorar `node_modules` u otras
  carpetas que no deban incluirse en control de versiones (`git`).
* `.eslintrc` este archivo contiene reglas para formatear el código además de
  ser una buena practica tener configurado un linter.
  


## 3. Feedback recibido


 ### Foto del prototipo final.
![prototipo de Baja fidelidad](https://github.com/VictoriaTejeda/CDMX011-lab-notes/blob/main/tomanota/src/assets/images/prototipo%20figma.PNG)

Se hicierón iteraciones a través de los test de usabilidad, se colocó un modal, y se agregó más diseño a las notas dependiendo de los sugerido por los usuarios.
## 5. Plan de acción

Se realizo a través del uso de historias de Usuario, para entregar minimos viables y funcionales, en cada sprint.

### Tarea 1 de HU1. Creación de Rutas con React :

* Entregar un mínimo viable
* Dividir el proyecto en micro proyectos funcionales.
* Crear proyecto en react
* Añadir el las rutas(reactRouter)
* Crear el maquetado simple de las vistas

### Historia de Usuario 1 * YO * como usuaria de lab-notes *QUIERO* poder registrarme Y/o iniciar sesión *PARA* ingresar a mis notas
* Que se visualice el nombre de la aplicación
* Que el usuario vea que hay un botón para iniciar sesión y registro
* Que el usuario pueda apretar el botón de sign up o log in y le muestre que el esta en la pagina seleccionada
* Que el usuario pueda regresar al la pagina principal.

#### Definición de Terminado:
* Debe ser responsive( uso en tableta)
* Debe contar con los principios del diseño (jerarquización, Constarte, Proximidad y Alineación
* Debe se una SPA
* Testearon manualmente buscando errores e imperfecciones simples
* Se hicieron pruebas de usabilidad e incorporación el feedback de los usuarios como mejoras
* Al apretar el botón te lleva a la ruta seleccionada
* Debe existir una ruta para las vistas Inicio, Registro de usuario, muro de notas.
* Deben haber recibido code review de al menos una compañera de otro equipo.

### **Historia de usuario 2 ** Yo como usuaria de Toma nota quiero tomar nota para no depender de mi mala memoria y tener presente en todo momento los apuntes ó cosas importantes que antes escribía en papel.

* Visualizar un botón que me permita la crear una nota
* Aparezca un modal que me permita realizar la creación de mi nota
* Anotar un título a mi nota
* Agregar el contenido de mi nota.
* Poder visualizar mi Nota guardada
* Tener un botón que me permita salir de la aplicación

### ** Historia de usuario 3 **  *YO* como usuaria de lab-notes *QUIERO* Leer mis notas *PARA* recordar lo que escribí antes.
* Poder visualizar mis notas guardadas
* Tener un botón que me permita salir de la aplicación
* Se ve y funciona bien en una Tablet


### **Historia de usuario 4** *YO* como usuaria de Toma Nota *QUIERO* editar notas *PARA* poder modificar lo que escribí antes.
* Visualizar un botón que me permita editar una nota
* Modificar el título a mi nota
* Modificar el contenido de mi nota.
* Poder visualizar mi Nota modificada
* Tener un botón que actualice mi post
* Tener un botón que me permita salir de la aplicación
* No dejar el modal vacio.


### **Historia de usuario 5** *YO* como usuaria de Toma Nota *QUIERO* borrar una nota *PARA* no volver a verla.
* Visualizar un botón que me permita la eliminar una nota
* Tener un botón que me permita salir de la aplicación
* Quiero que al dar click en el botón me confirme si deseo eliminar la nota
* Que al confirmar la eliminación de mi nota ya no se muestre






