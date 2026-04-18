# Frontend Mentor - Solución Age Calculator App

Esta es mi solución al reto **Age Calculator App** de Frontend Mentor. Este proyecto se enfoca en construir una aplicación interactiva y responsive que calcula la edad exacta de un usuario en años, meses y días a partir de una fecha de nacimiento utilizando HTML, CSS y JavaScript puro.

El reto fue una excelente oportunidad para practicar validación de formularios, manipulación de fechas, interacción con el DOM y diseño responsive sin depender de frameworks o librerías externas.

---

## Tabla de contenidos
- [Resumen](#resumen)
- [El reto](#el-reto)
- [Diseño](#diseño)
- [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
- [Construido con](#construido-con)
- [Lo que aprendí](#lo-que-aprendí)

---

## Resumen
Este proyecto es una calculadora de edad responsive que permite a los usuarios ingresar una fecha válida (día, mes y año) y obtener su edad precisa en años, meses y días.

La interfaz incluye comportamiento en tiempo real en los inputs, mensajes de validación personalizados y actualizaciones dinámicas de los resultados calculados. La aplicación asegura un manejo correcto de fechas, incluyendo años bisiestos y diferentes cantidades de días por mes.

Todo el estilo está implementado con técnicas modernas de CSS, mientras que la lógica principal y la validación están desarrolladas con JavaScript puro mediante manipulación del DOM y programación basada en eventos.

---

## El reto
Los usuarios deben poder:

- Ver el diseño óptimo según el tamaño de la pantalla de su dispositivo.
- Ingresar su fecha de nacimiento usando los campos de día, mes y año.
- Recibir cálculos precisos de edad en años, meses y días.
- Ver errores de validación para entradas inválidas o incompletas.
- Validar que:
  - Todos los campos son obligatorios.
  - La fecha es válida (por ejemplo, no existe el 30 de febrero).
  - La fecha está en el pasado.
- Experimentar cambio automático de foco entre los inputs.
- Ver estados hover y focus en elementos interactivos.
- Disfrutar de transiciones y retroalimentación visual suave.

---

## Diseño

- Diseño de escritorio  

<img src="./design/desktop-design.jpg" alt="Vista escritorio" width="600">

- Escritorio completado  

<img src="./design/desktop-completed.jpg" alt="Vista escritorio completado" width="600">

- Estados activos  

<img src="./design/active-states.jpg" alt="Estados activos" width="600">

- Error en escritorio (campos vacíos)  

<img src="./design/desktop-error-empty.jpg" alt="Error campos vacíos" width="600">

- Error en escritorio (datos inválidos)

<img src="./design/desktop-error-invalid.jpg" alt="Error datos inválidos" width="600">

- Diseño móvil  

<img src="./design/mobile-design.jpg" alt="Vista móvil" width="200">

---

## Enlaces
- Repositorio: [GitHub Repository](https://github.com/mlopezl/age-calculator-app)
- Sitio en vivo: [Live Demo](https://mlopezl.github.io/age-calculator-app/)

---

## Mi proceso
- Estructuré el layout usando elementos semánticos de **HTML5** como `form`, `main` y `section`.
- Seguí un enfoque **mobile-first**, mejorando progresivamente el diseño con media queries.
- Construí el layout usando **Flexbox** para alineación y estructura responsive.
- Utilicé **variables CSS (custom properties)** para mantener un sistema de colores consistente.
- Apliqué la metodología **BEM** para un CSS escalable y mantenible.
- Diseñé componentes reutilizables como inputs, botones y secciones de resultados.
- Implementé lógica personalizada de validación de formularios con JavaScript.
- Creé manejo dinámico de errores mostrando/ocultando mensajes de validación.
- Usé **manipulación del DOM** para actualizar los resultados en la interfaz.
- Implementé cambio automático de foco entre inputs para mejorar la experiencia de usuario.
- Desarrollé un algoritmo personalizado para calcular la edad considerando:
  - Ajustes de meses y días
  - Años bisiestos
  - Diferencias exactas de fechas
- Evité el comportamiento por defecto del formulario para controlar la lógica de la aplicación.
- Mantuve separación de responsabilidades entre estructura (HTML), estilos (CSS) y lógica (JavaScript).

---

## Construido con
- HTML5
- CSS3
- JavaScript (ES6)
- Flexbox
- Variables CSS (custom properties)
- Metodología mobile-first
- Diseño responsive
- Metodología BEM
- Manipulación del DOM
- Event listeners
- API de fechas (Date)
- Validación de formularios
- Media queries

---

## Lo que aprendí
- Estructurar formularios interactivos usando **HTML semántico**.
- Construir layouts responsive con **Flexbox** y enfoque mobile-first.
- Organizar estilos escalables usando la metodología **BEM**.
- Crear estilos reutilizables con **variables CSS**.
- Implementar validación personalizada más allá del comportamiento nativo del navegador.
- Trabajar con la **API de fechas de JavaScript** para cálculos precisos.
- Manejar casos especiales como años bisiestos y distintos días por mes.
- Mejorar la experiencia de usuario con cambio automático de foco.
- Actualizar dinámicamente la interfaz usando **manipulación del DOM**.
- Gestionar estados de UI agregando y removiendo clases CSS.
- Escribir código frontend limpio, modular y mantenible sin frameworks.