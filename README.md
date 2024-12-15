# Carrito de Compras - Tienda de Zapatillas

Este proyecto es una página web simple para una tienda online de zapatillas. Los usuarios pueden explorar modelos, agregar zapatillas al carrito, eliminarlas del listado del carrito y proceder al pago.

## Características

1. **Listado de zapatillas**: Muestra una tabla con los modelos disponibles.
2. **Carrito de compras**: Los usuarios pueden agregar zapatillas al carrito y ver los detalles como cantidad, precio unitario y subtotal.
3. **Eliminación de productos**: Las zapatillas pueden ser eliminadas del carrito dinámicamente.
4. **Total dinámico**: Calcula automáticamente el total de los productos en el carrito.
5. **Navegación**: Botones para volver a la página principal y proceder al pago.

## Archivos principales

### 1. `index.html`
- Contiene el listado de zapatillas de la tienda.
- Permite a los usuarios agregar zapatillas al carrito.

### 2. `carrito.html`
- Muestra el carrito de compras con las zapatillas seleccionadas.
- Permite eliminar zapatillas y calcular el total.

### 3. `script.js`
- Maneja la lógica para agregar zapatillas al carrito desde la página principal.
- Utiliza el almacenamiento local (`localStorage`) para guardar el estado del carrito.

### 4. `script2.js`
- Gestiona la funcionalidad de la página del carrito.
- Permite cargar las zapatillas desde el almacenamiento local y eliminarlas.

### 5. `style.css`
- Define los estilos para las páginas.
- Mejora la experiencia visual del usuario.

### 6. Carpeta `images`
- Contiene imágenes de cada modelo de zapatilla, que se cargan dinámicamente en la página.

## Cómo usar

1. Abre `index.html` en tu navegador.
2. Explora los modelos de zapatillas listados.
3. Haz clic en "Añadir al carrito" para seleccionar zapatillas.
4. Usa el botón "Carrito" para ir a la página del carrito.
5. En el carrito:
   - Verifica las zapatillas seleccionadas.
   - Elimina productos si es necesario.
   - Revisa el total calculado dinámicamente.
   - Haz clic en "Proceder al Pago" para continuar.

## Requisitos

- Navegador moderno que soporte JavaScript y HTML5.

## Notas

- Los datos del carrito se almacenan en `localStorage`, por lo que se mantendrán incluso si cierras el navegador.
- Para restablecer el carrito, limpia el almacenamiento local del navegador.

## Mejoras futuras

1. Integración de un backend para guardar los datos de forma persistente.
2. Sistema de usuarios y autenticación.
3. Diseño más avanzado con frameworks CSS como Bootstrap.

¡Gracias por usar la tienda online de zapatillas! 🎉
