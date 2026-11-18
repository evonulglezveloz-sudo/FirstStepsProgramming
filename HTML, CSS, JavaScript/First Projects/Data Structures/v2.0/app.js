/* 
    Cambiar texto:
*/ 

// Tabla Hash
function cambiarIdiomaTablaHash() {
    const CAMBIO_TEXTO_HASH_TABLE = document.querySelector(".titulo-tabla-hash");
    CAMBIO_TEXTO_HASH_TABLE.innerHTML = "Hash Table";
}

// Lista (Array)
function cambiarIdiomaLista() {
    const CAMBIO_TEXTO_ARRAY = document.querySelector(".titulo-lista");
    CAMBIO_TEXTO_ARRAY.innerHTML = "Array o List";
}

// Pila
function cambiarIdiomaPila() {
    const CAMBIO_TEXTO_PILA = document.querySelector(".titulo-pila");
    CAMBIO_TEXTO_PILA.innerHTML = "Stack";
}

// Cola
function cambiarIdiomaCola() {
    const CAMBIO_TEXTO_COLA = document.querySelector(".titulo-cola");
    CAMBIO_TEXTO_COLA.innerHTML = "Queue";
}

// Lista enlazada
function cambiarIdiomaListaEnlazada() {
    const CAMBIO_TEXTO_LINKED_LIST = document.querySelector(".titulo-lista-enlazada");
    CAMBIO_TEXTO_LINKED_LIST.innerHTML = "Linked List";
}

// Árbol
function cambiarIdiomaArbol() {
    const CAMBIO_TEXTO_ARBOL = document.querySelector(".titulo-arbol");
    CAMBIO_TEXTO_ARBOL.innerHTML = "Tree";
}

// Árbol binario
function cambiarIdiomaArbolBinario() {
    const CAMBIO_TEXTO_ARBOL_BINARIO = document.querySelector(".titulo-arbol-binario");
    CAMBIO_TEXTO_ARBOL_BINARIO.innerHTML = "Binary Tree";
}

// Árbol binario de búsqueda
function cambiarIdiomaArbolBinarioBusqueda() {
    const CAMBIO_TEXTO_ARBOL_BINARIO_BUSQUEDA = document.querySelector(".titulo-arbol-binario-busqueda");
    CAMBIO_TEXTO_ARBOL_BINARIO_BUSQUEDA.innerHTML = "Binary Search Tree";
}

// Grafos
function cambiarIdiomaGrafos() {
    const CAMBIO_TEXTO_GRAFOS = document.querySelector(".titulo-grafos");
    CAMBIO_TEXTO_GRAFOS.innerHTML = "Graphs";
}

// Heap
function cambiarIdiomaMonticulo() {
    const CAMBIO_TEXTO_HEAP = document.querySelector(".titulo-monticulo");
    CAMBIO_TEXTO_HEAP.innerHTML = "Heap";
}

/* 
    Descripción de cada Estructura de Datos:
*/ 

// Estructuras de Datos
function mostrarDefinicionEstructuraDatos() {
    const ESTRUCTURAS_DATOS = document.querySelector(".definicion-estructuras-datos");
    ESTRUCTURAS_DATOS.innerHTML = "Una Estructura de Datos es una forma específica de organizar, almacenar y manipular información en una computadora para que se pueda acceder a ella y modificar de manera eficiente.";
}

// Tabla Hash
function mostrarQueEsTablaHash() {
    const DESCRIPCION_TABLA_HASH = document.querySelector(".que-es-tabla-hash");
    DESCRIPCION_TABLA_HASH.innerHTML = "Es una estructura de datos que permite guardar datos usando una clave (Key) y un valor (value).";
}

// Array
function mostrarQueEsLista() {
    const DESCRIPCION_ARRAY = document.querySelector(".que-es-lista");
    DESCRIPCION_ARRAY.innerHTML = `Una colección de elementos colocados uno tras otro. <br>
    [10, 20, 30, 40, 50]`;
}

// Pila
function mostrarQueEsPila() {
    const DESCRIPCION_PILA = document.querySelector(".que-es-pila");
    DESCRIPCION_PILA.innerHTML = `Funciona como una pila de platos:<br>
    El último plato que colocas es el primero que puedes sacar.`;
}

function mostrarExtraPila() {
    const DESCRIPCION_PILA_EXTRA = document.querySelector(".extra-pila");
    DESCRIPCION_PILA_EXTRA.innerHTML = `LIFO: Last In, First Out<br>
    Ejemplo:<br><br>
    Agregas:<br><br>
    Libro A<br>
    Libro B<br>
    Libro C<br><br>
    "Para sacar uno: Sale primero Libro C"`;
}

// Cola 
function mostrarQueEsCola() {
    const DESCRIPCION_COLA = document.querySelector(".que-es-cola");
    DESCRIPCION_COLA.innerHTML = `Como una fila del banco.<br>
    El primero que llega es el primero que sale.`;
}

function mostrarExtraCola() {
    const DESCRIPCION_COLA_EXTRA = document.querySelector(".extra-cola");
    DESCRIPCION_COLA_EXTRA.innerHTML = `FIFO: First In, First Out<br>
    Ejemplo:<br><br>
    Llegan:<br><br>
    Ana<br>
    Luis<br>
    Carlos<br><br>
    "Sale: Ana"`;
}

// Lista enlazada
function mostrarQueEsListaEnlazada() {
    const DESCRIPCION_LINKED_LIST = document.querySelector(".que-es-lista-enlazada");
    DESCRIPCION_LINKED_LIST.innerHTML = `Una lista donde cada elemento sabe dónde está el siguiente.<br>
    A→B→C→D→E`;
}

function mostrarExtraListaEnlazada() {
    const DESCRIPCION_LINKED_LIST_EXTRA = document.querySelector(".extra-lista-enlazada");
    DESCRIPCION_LINKED_LIST_EXTRA.innerHTML = `- El dato<br>
    - La dirección del siguiente nodo`;
}

// Árbol 
function mostrarQueEsArbol() {
    const DESCRIPCION_ARBOL = document.querySelector(".que-es-arbol");
    DESCRIPCION_ARBOL.innerHTML = "Una estructura que parece un árbol al revés.";
}

function mostrarExtraArbol() {
    const DESCRIPCION_ARBOL_EXTRA = document.querySelector(".extra-arbol");
    DESCRIPCION_ARBOL_EXTRA.innerHTML = `- Raíz<br>
    - Ramas<br>
    - Hojas`;
}

// Árbol binario
function mostrarQueEsArbolBinario() {
    const DESCRIPCION_ARBOL_BINARIO = document.querySelector(".que-es-arbol-binario");
    DESCRIPCION_ARBOL_BINARIO.innerHTML = "Es un árbol donde cada nodo puede tener como máximo dos hijos.";
}

// Árbol binario de búsqueda
function mostrarQueEsArbolBinarioBusqueda() {
    const DESCRIPCION_ARBOL_BINARIO_BUSQUEDA = document.querySelector(".que-es-arbol-binario-busqueda");
    DESCRIPCION_ARBOL_BINARIO_BUSQUEDA.innerHTML = "Es un árbol binario especial.";
}

function mostrarExtraArbolBinarioBusqueda() {
    const DESCRIPCION_ARBOL_BINARIO_BUSQUEDA_EXTRA = document.querySelector(".extra-arbol-binario-busqueda");
    DESCRIPCION_ARBOL_BINARIO_BUSQUEDA_EXTRA.innerHTML = `- Todo lo menor va a la izquierda.<br>
    - Todo lo mayor va a la derecha.`;
}

// Grafos
function mostrarQueEsGrafos() {
    const DESCRIPCION_GRAFOS = document.querySelector(".que-es-grafos");
    DESCRIPCION_GRAFOS.innerHTML = "Un conjunto de puntos conectados entre sí.";
}

function mostrarExtraGrafos() {
    const DESCRIPCION_GRAFOS_EXTRA = document.querySelector(".que-es-grafos");
    DESCRIPCION_GRAFOS_EXTRA.innerHTML = `- Cada punto se llama nodo<br>
    - Cada línea se llama arista`;
}

// Heap
function mostrarQueEsMonticulo() {
    const DESCRIPCION_HEAP = document.querySelector(".que-es-monticulo");
    DESCRIPCION_HEAP.innerHTML = "Es un árbol especial donde siempre hay un elemento más importante.";
}

function mostrarExtraMonticulo() {
    const DESCRIPCION_HEAP_EXTRA = document.querySelector(".extra-monticulo");
    DESCRIPCION_HEAP_EXTRA.innerHTML = `Max Heap: El mayor siempre está arriba.<br>
    Min Heap: El menor siempre está arriba.`;
}

/* 
    Cambio de imagen:
*/ 

function cambiarImagenEstructurasDatos() {
    const IMAGEN_ESTRUCTURAS_DATOS = document.querySelector(".imagen-estructuras-datos");
    IMAGEN_ESTRUCTURAS_DATOS.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGD6bMZFS6V6i5mu9vIc5_fN7anjigUJxluqAzprd8sg&s=10");
}

function cambiarImagenTablaHash() {
    const IMAGEN_TABLA_HASH = document.querySelector(".imagen-tabla-hash");
    IMAGEN_TABLA_HASH.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-18-53f4bb52-bb53-49d6-b89b-0140195a549c.png");
}

function cambiarImagenLista() {
    const IMAGEN_ARRAY = document.querySelector(".imagen-lista");
    IMAGEN_ARRAY.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-18-a18e88a6-1627-42f7-bade-a76a0296afd8.png");
}

function cambiarImagenPila() {
    const IMAGEN_PILA = document.querySelector(".imagen-pila");
    IMAGEN_PILA.setAttribute("src", "https://img.sanishtech.com/u/71056a605ce1a4f0d1bee63f45d0a3b2.png");
}

function cambiarImagenCola() {
    const IMAGEN_COLA = document.querySelector(".imagen-cola");
    IMAGEN_COLA.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-11-3d70cc7f-18b5-4f82-873c-89155e4d2658.png");
}

function cambiarImagenListaEnlazada() {
    const IMAGEN_LINKED_LIST = document.querySelector(".imagen-lista-enlazada");
    IMAGEN_LINKED_LIST.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-11-5069fa7c-244b-4db4-a246-494aae1a598b.png");
}

function cambiarImagenArbol() {
    const IMAGEN_ARBOL = document.querySelector(".imagen-arbol");
    IMAGEN_ARBOL.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-11-c16955da-17f3-4d4c-838e-c9c62d099353.png");
}

function cambiarImagenArbolBinario() {
    const IMAGEN_ARBOL_BINARIO = document.querySelector(".imagen-arbol-binario");
    IMAGEN_ARBOL_BINARIO.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-12-3330c652-2a62-4e21-9c60-b3a79c75989d.png");
}

function cambiarImagenArbolBinarioBusqueda() {
    const IMAGEN_ARBOL_BINARIO_BUSQUEDA = document.querySelector(".imagen-arbol-binario-busqueda");
    IMAGEN_ARBOL_BINARIO_BUSQUEDA.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-12-e7a63b62-ec16-4e9a-bdbe-cbe5daaee195.png");
}

function cambiarImagenGrafos() {
    const IMAGEN_GRAFOS = document.querySelector(".imagen-grafos");
    IMAGEN_GRAFOS.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-12-850c14a1-e4a7-4e72-a85b-f67d1ba76179.png");
}

function cambiarImagenMonticulo() {
    const IMAGEN_HEAP = document.querySelector(".imagen-monticulo");
    IMAGEN_HEAP.setAttribute("src", "https://cdn.phototourl.com/member/2026-11-12-7b4e9561-c667-49d9-ac70-847e699bd147.png");
}

/*
    Descripción: ¿Para qué sirve?, ¿Cuándo se utiliza?
*/

// Tabla Hash
function mostrarParaQueSirveTablaHash() {
    const SIRVE_PARA_TABLA_HASH = document.querySelector(".para-que-sirve-tabla-hash");
    SIRVE_PARA_TABLA_HASH.innerHTML = "Para buscar información de forma más rápida.";
}

function mostrarCuandoSeUtilizaTablaHash() {
    const UTILIZA_TABLA_HASH = document.querySelector(".cuando-se-utiliza-tabla-hash");
    UTILIZA_TABLA_HASH.innerHTML = `- Inicios de sesión (usuario-contraseña)<br>
    - Diccionarios<br>
    - Caché<br>
    - Bases de Datos<br>
    - Contadores de palabras`;
}

// Array
function mostrarParaQueSirveLista() {
    const SIRVE_PARA_ARRAY = document.querySelector(".para-que-sirve-lista");
    SIRVE_PARA_ARRAY.innerHTML = "Guardar muchos datos del mismo tipo.";
}

function mostrarCuandoSeUtilizaLista() {
    const UTILIZA_ARRAY = document.querySelector(".cuando-se-utiliza-lista");
    UTILIZA_ARRAY.innerHTML = `- Lista de productos<br>
    - Lista de alumnos<br>
    - Lista de canciones<br>
    - Inventarios<br><br>
    "Es probablemente la estructura de datos más utilizada en programación"`;
}

// Pila
function mostrarParaQueSirvePila() {
    const SIRVE_PARA_PILA = document.querySelector(".para-que-sirve-pila");
    SIRVE_PARA_PILA.innerHTML = "Guardar elementos temporalmente.";
}

function mostrarCuandoSeUtilizaPila() {
    const UTILIZA_PILA = document.querySelector(".cuando-se-utiliza-pila");
    UTILIZA_PILA.innerHTML = `- Botón "Deshacer"<br>
    - Historial de llamadas<br>
    - Navegador (volver atrás)<br>
    - Funciones de un programa`;
}

// Cola
function mostrarParaQueSirveCola() {
    const SIRVE_PARA_COLA = document.querySelector(".para-que-sirve-cola");
    SIRVE_PARA_COLA.innerHTML = "Procesar tareas en orden.";
}

function mostrarCuandoSeUtilizaCola() {
    const UTILIZA_COLA = document.querySelector(".cuando-se-utiliza-cola");
    UTILIZA_COLA.innerHTML = `- Impresoras<br>
    - Atención al cliente<br>
    - Descarga de archivos<br>
    - Servidores`;
}

// Lista enlazada
function mostrarParaQueSirveListaEnlazada() {
    const SIRVE_PARA_LINKED_LIST = document.querySelector(".para-que-sirve-lista-enlazada");
    SIRVE_PARA_LINKED_LIST.innerHTML = "Agregar y eliminar elementos fácilmente.";
}

function mostrarCuandoSeUtilizaListaEnlazada() {
    const UTILIZA_LINKED_LIST = document.querySelector(".cuando-se-utiliza-lista-enlazada");
    UTILIZA_LINKED_LIST.innerHTML = `- Editores de texto<br>
    - Reproductores de música<br>
    - Sistemas operativos<br><br>
    Ejemplo:<br>
    Juan→Pedro→María→Sofía<br>
    Si eliminas "Pedro":<br>
    Juan→María→Sofía`;
}

function mostrarDefinicionNodo() {
    const DESCRIPCION_NODO = document.querySelector(".cuando-se-utiliza-lista-enlazada");
    DESCRIPCION_NODO.innerHTML = "Es un elemento que almacena un dato y puede estar conectado con uno o varios nodos mediante enlaces o referencias.";
}

// Árbol 
function mostrarParaQueSirveArbol() {
    const SIRVE_PARA_ARBOL = document.querySelector(".para-que-sirve-arbol");
    SIRVE_PARA_ARBOL.innerHTML = "Organizar información de forma jerárquica.";
}

function mostrarCuandoSeUtilizaArbol() {
    const UTILIZA_ARBOL = document.querySelector(".cuando-se-utiliza-arbol");
    UTILIZA_ARBOL.innerHTML = `- Carpetas del computador<br>
    - Organigramas<br>
    - Menús<br>
    - Categorías<br>`;
}

// Árbol binario
function mostrarParaQueSirveArbolBinario() {
    const SIRVE_PARA_ARBOL_BINARIO = document.querySelector(".para-que-sirve-arbol-binario");
    SIRVE_PARA_ARBOL_BINARIO.innerHTML = "Organizar datos.";
}

function mostrarCuandoSeUtilizaArbolBinario() {
    const UTILIZA_ARBOL_BINARIO = document.querySelector(".cuando-se-utiliza-arbol-binario");
    UTILIZA_ARBOL_BINARIO.innerHTML = `- Juegos<br>
    - Inteligencia Artificial (IA)<br>
    - Compiladores`;
}

// Árbol binario búsqueda
function mostrarParaQueSirveArbolBinarioBusqueda() {
    const SIRVE_PARA_ARBOL_BINARIO_BUSQUEDA = document.querySelector(".para-que-sirve-arbol-binario-busqueda");
    SIRVE_PARA_ARBOL_BINARIO_BUSQUEDA.innerHTML = "Buscar información rápidamente.";
}

function mostrarCuandoSeUtilizaArbolBinarioBusqueda() {
    const UTILIZA_ARBOL_BINARIO_BUSQUEDA = document.querySelector(".cuando-se-utiliza-arbol-binario-busqueda");
    UTILIZA_ARBOL_BINARIO_BUSQUEDA.innerHTML = `- Bases de datos<br>
    - Motores de búsqueda<br>
    - Diccionarios<br><br>
    Buscar un número es mucho más rápido que revisar uno por uno. `;
}

// Grafos
function mostrarParaQueSirveGrafos() {
    const SIRVE_PARA_GRAFOS = document.querySelector(".para-que-sirve-grafos");
    SIRVE_PARA_GRAFOS.innerHTML = "Representar conexiones.";
}

function mostrarCuandoSeUtilizaGrafos() {
    const UTILIZA_GRAFOS = document.querySelector(".cuando-se-utiliza-grafos");
    UTILIZA_GRAFOS.innerHTML = `- Google Maps<br>
    - Redes sociales<br>
    - Internet<br>
    - Rutas de vuelos`;
}

// Heap
function mostrarParaQueSirveMonticulo() {
    const SIRVE_PARA_HEAP = document.querySelector(".para-que-sirve-monticulo");
    SIRVE_PARA_HEAP.innerHTML = "Encontrar rápidamente el mayor o menor elemento.";
}

function mostrarCuandoSeUtilizaMonticulo() {
    const UTILIZA_HEAP = document.querySelector(".cuando-se-utiliza-monticulo");
    UTILIZA_HEAP.innerHTML = `- Colas de prioridad<br>
    - Videojuegos<br>
    - Sistemas Operativos<br>
    - Algoritmos como Dijkstra`;
}