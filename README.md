# React + TypeScript + Vite + Zustand + TailwindCSS + ReactRouterDom

Curso de Zustand, un gestor de estado para React desplazando a ReduxToolKit, dictado por Fernando Herrera

Este es un cascarón de proyecto, siéntete libre de usarlo para tus proyectos.

<img src="https://github.com/Klerith/zustand-mini-curso/blob/main/public/screenshot.png?raw=true" alt="Dashboard Screenshot">

## Instalar

1. Clonar proyecto
2. Instalar dependencias `npm install`
3. Correr en desarrollo `npm run dev`

### Seccion 2: Bases de Zustand

Ejercicios con Osos

- Primer Store
- Consumir el store
- Objetos Anidados (store)
- Metodos con objetos anidados
- Metodo useShallow
- Propiedades computadas

### Seccion 3: Middleware de Zustand

Ejercicios de Personas
En esta sección vamos a trabajar con middlewares o funciones adicionales que expanden el comportamiento por defecto de Zustand. Puntualmente veremos:

- Persist Middlewares
- createJSONStore
- Guardar automáticamente en session storage
- Guardar automáticamente en Firebase
- Crear un storage personalizado
- Diferentes interfaces de Zustand
- Custom Middleware
- Redux DevTools y acciones

### Seccion 4: Tareas - Drag & Drop - Inmutablidad con Immer

En esta sección aprenderemos a trabajar con objetos anidados dentro de nuestro store, con el objetivo de apreciar claramente él benefició de utilizar la función produce o mejor aún, el middleware immer, para poder mutar el estado y generar uno nuevo basado en esa mutación.

- Drag & Drop (sin dependencias)
- Uso de Store con objetos anidados
- Middlewares
- Funciones adicionales
- UUID
- Mutaciones vs Clonaciones
- Tipado en TypeScript
- Entre otras cosas
- A la final creamos un custom hook para encapsular la logica del taskStore.

### Seccion 5:Zustand - Slice

Esta sección tiene por objetivo que aprendamos el patrón "Slices" de Zustand para poder cortar un Store en pequeñas partes fácilmente mantenibles.

El ejercicio consiste en crear pequeños tajadas (slices) para que realicen una tarea en especifico y así poder separar las responsabilidades.

Luego uniremos los slices en un único boundStore que permite aplicar los middlewares.
