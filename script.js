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
        tablaZapatillas.innerHTML = `<tr><th>Nombre</th><th>Precio</th><th>Imagen</th></tr>`; 
        //Bucle que mete las zapatillas del array en la tabla
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
