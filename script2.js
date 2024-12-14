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
