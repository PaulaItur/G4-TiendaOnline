document.addEventListener("DOMContentLoaded", () => {
    // Este es el contructor de las zapatillas que nos servira para crear zapatillas
    // y que se añadan de forma facil a la web
    function Zapatilla(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    // Función para cargar las zapatillas en la tabla
    function cargarTablaZapatillas() {
        let tablaZapatillas = document.getElementById("tablaZapatillas");
        // Encabezados de la tabla
        tablaZapatillas.innerHTML = `<tr><th>Nombre</th><th>Precio</th><th>Imagen</th><th>Acción</th></tr>`;
        // Bucle que mete las zapatillas del array en la tabla
        //El data-index es el te permite acceder al valor del array donde se encuentra el objeto
        //asi solo con eso abajo puedo saber que zapatilla he agregado, ya que no al no meter los valores manualmente, no tienen ids personalizados 
        //facilitando la obtencion de la zapatilla en concreto cuando pulses su boton
        zapatillas.forEach((zapatilla, index) => {
            tablaZapatillas.innerHTML += `
                <tr>
                    <td>${zapatilla.nombre}</td>
                    <td>${zapatilla.precio}€</td>
                    <td><img src="imagen/${zapatilla.imagen}" style="width: 100px;"></td>
                    <td><button class="agregar" data-index="${index}">Añadir al carrito</button></td> 
                </tr>`;
        });

        // Añadir evento a los botones de "Añadir al carrito"
        const botones = document.getElementsByClassName("agregar");
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", (event) => {
                const zapatillaIndex = event.target.getAttribute("data-index");
                const zapatillaSeleccionada = zapatillas[zapatillaIndex];
                agregarAlCarrito(zapatillaSeleccionada);
            });
        }
    }

// Función para agregar un producto al carrito, se van a guardar en localStorage
function agregarAlCarrito(zapatilla) {
  
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Verificar si la zapatilla ya está en el carrito
    let productoExistente = carrito.find(item => item.nombre === zapatilla.nombre);

    if (productoExistente) {
        // Si ya está, incrementa la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si no está, añade el producto con cantidad inicial 1
        carrito.push({ ...zapatilla, cantidad: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


    // Función para redirigir a carrito.html
    function irACarrito() {
        window.location.href = "carrito.html";
    }

    // Añadir evento al botón "Carrito" para redirigir a carrito.html
    const botonCarrito = document.getElementsByTagName("button")[0];
    botonCarrito.addEventListener("click", irACarrito);

    // Crear las zapatillas
    const AirForce1 = new Zapatilla("AirForce1", 110, "airforce1.jpg");
    const AirMax = new Zapatilla("AirMax", 130, "airmax.jpg");
    const DunkLow = new Zapatilla("Dunk Low", 120, "dunklow.jpg");
    const Jordan1 = new Zapatilla("Air Jordan 1", 150, "jordan1.jpg");
    const Pegasus40 = new Zapatilla("Pegasus 40", 130, "pegasus40.jpg");
    const BlazerMid = new Zapatilla("Blazer Mid", 110, "blazermid.jpg");
    const Vapormax = new Zapatilla("Air Vapormax", 200, "vapormax.jpg");
    const ZoomFly5 = new Zapatilla("Zoom Fly 5", 160, "zoomfly5.jpg");

    // Lista de zapatillas
    const zapatillas = [AirForce1, AirMax, DunkLow, Jordan1, Pegasus40, BlazerMid, Vapormax, ZoomFly5];

    cargarTablaZapatillas();
});
