// Productos
const PRODUCTOS = ["Remeras", "Camisas", "Pantalones", "Zapatillas", "Gorras"];

// Precios
const PRECIOS = [1000, 1500, 2000, 3000, 500];

// Stock
let STOCK = [5, 5, 5, 5, 5];

// Cantidad a comprar
let CANTIDAD_A_COMPRAR;

// Total a pagar
let TOTAL_A_PAGAR;

// Calcular el total a pagar [funcion]
function calcularTotal(cantidad, precio) {
    return cantidad * precio;
  }

// Mostrar stock disponible [funcion]
function mostrarStock() {
    let mensaje = "Bienvenido a la tienda de coderhouse. Este es nuestro stock disponible:\n \n";
    for (let i = 0; i < PRODUCTOS.length; i++) {
      mensaje += `- ${PRODUCTOS[i]}: ${STOCK[i]}\n`;
    }
    alert(mensaje);
  }



while (true) {
    // mostrar el stock disponible
    mostrarStock();
  
    // Seleccionar el producto
    let indiceProducto = parseInt(prompt(`Ingrese el número del producto que desea comprar (1-${PRODUCTOS.length}):\n 1- Remeras\n 2- Camisas\n 3- Pantalones\n 4- Zapatillas\n 5- Gorras`)) - 1;
  
    // validar o denegar la seleccion
    if (indiceProducto < 0 || indiceProducto >= PRODUCTOS.length) {
      alert("Producto inválido. Ingrese un número entre 1 y " + PRODUCTOS.length);
      continue;
    }
  
    // Solicitar la cantidad deseada
    CANTIDAD_A_COMPRAR = parseInt(prompt(`Ingrese la cantidad de ${PRODUCTOS[indiceProducto]} que desea comprar:`));
  
    // Validar la cantidad
    if (CANTIDAD_A_COMPRAR <= 0  || CANTIDAD_A_COMPRAR > 5) {
      alert("Cantidad inválida. Ingrese un número entre 0 y 5.");
      continue;
    }
  
    // Verificar el stock disponible
    if (CANTIDAD_A_COMPRAR > STOCK[indiceProducto]) {
      alert(`Lo sentimos, solo hay ${STOCK[indiceProducto]} ${PRODUCTOS[indiceProducto]} disponibles.`);
      continue;
    }
  
    // Calcular el total a pagar
    TOTAL_A_PAGAR = calcularTotal(CANTIDAD_A_COMPRAR, PRECIOS[indiceProducto]);
  
    // Confirmar la compra
    if (confirm(`El total a pagar por ${CANTIDAD_A_COMPRAR} ${PRODUCTOS[indiceProducto]} es $${TOTAL_A_PAGAR}. ¿Deseas confirmar la compra?`)) {
      alert("¡Compra exitosa! Gracias por su compra.");
      //Actualizamos el stock
      STOCK[indiceProducto] -= CANTIDAD_A_COMPRAR;
    } else {
      alert("Compra cancelada.");
    }
  
    // Preguntar al usuario si desea seguir comprando
    if (!confirm("¿Desea realizar otra compra?")) {
      break;
    }
  }
  
