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
        tablaZapatillas.innerHTML = `<tr><th>Nombre</th><th>Precio</th><th>Imagen</th></tr>`; // Encabezados de la tabla

        zapatillas.forEach(zapatilla => {
            tablaZapatillas.innerHTML += `
                <tr>
                    <td>${zapatilla.nombre}</td>
                    <td>${zapatilla.precio}€</td>
                    <td><img src="imagen/${zapatilla.imagen}" style="width: 100px;"></td>
                </tr>`;
        });
    }

    // Crear las zapatillas
    const AirForce1 = new Zapatilla("AirForce1", 110, "airforce1.jpg");
    const AirMax = new Zapatilla("AirMax", 130, "airmax.jpg");

    // Lista de zapatillas
    const zapatillas = [AirForce1, AirMax];

    cargarTablaZapatillas();
});
