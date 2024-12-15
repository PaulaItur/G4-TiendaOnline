document.addEventListener("DOMContentLoaded", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) ;
    const tablaCarrito = document.querySelector("table");

    let total = 0;
    //Bucle que carga todos los productos de carrito a la tabla del carrito.html y de paso va sumando el total
    carrito.forEach((producto) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        tablaCarrito.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}€</td>
                <td>${subtotal}€</td>
                <td><button class="eliminar" data-nombre="${producto.nombre}">Eliminar</button></td>
            </tr>`;
    });
    document.getElementsByTagName("strong")[0].textContent = "Total: "+total+"€";

    //creo una funcion para eliminar productos del carrito y recargar la pagina con los datos nuevos como el total
    function eliminarDelCarrito(nombreProducto) {
        //comparo el nombre producto para poder eliminar el producto correcto
        const carritoActualizado = carrito.filter(producto => producto.nombre !== nombreProducto);
        localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
        location.reload();
    }
    //añado los eventos eliminar para que la recarga funcione bien
    function asignarEventosEliminar() {
        const botonesEliminar = document.querySelectorAll(".eliminar");
        botonesEliminar.forEach((boton) => {
            boton.addEventListener("click", (event) => {
                const nombreProducto = event.target.getAttribute("data-nombre");
                eliminarDelCarrito(nombreProducto);
            });
        });
    }
//llamo a la funcion para añadir el evento eliminar
    asignarEventosEliminar();


            </tr>`;
    });
    document.getElementsByTagName("strong")[0].textContent = "Total: "+total+"€";
    function irAIndex() {
        window.location.href = "index.html";
    }

    // Añadir evento al botón "Carrito" para redirigir a index.html
    const botonCarrito = document.getElementById("atras");
    botonCarrito.addEventListener("click", irAIndex);
});
