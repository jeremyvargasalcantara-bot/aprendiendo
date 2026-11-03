const profilaxis = 1500;
const resina = 2500;
const cantidadResina = 2;
const blanqueamiento = 12000;
const subtotal = profilaxis + resina * cantidadResina + blanqueamiento;
const itbis = blanqueamiento * 0.18;
const total = subtotal + itbis;
console.log(subtotal);
console.log(itbis);
console.log(total);
function calcularItbis(montoGravado) {
  return montoGravado * 0.18;
}
console.log(calcularItbis(12000));
console.log(calcularItbis(5000));
console.log(calcularItbis(0));
function itbisDeProcedimiento(precio, esGravado) {
  if (esGravado) {
    return precio * 0.18;
  } else {
    return 0;
  }
}
console.log(itbisDeProcedimiento(12000, true));
console.log(itbisDeProcedimiento(1500, false));
console.log(itbisDeProcedimiento(2500, false));

const blanqueamientoDental = {
  nombre: "Blanqueamiento dental",
  precio: 12000,
  cantidad: 1,
  gravado: true,
};
console.log(blanqueamientoDental.nombre);
console.log(blanqueamientoDental.precio * blanqueamientoDental.cantidad);
console.log(
  itbisDeProcedimiento(
    blanqueamientoDental.precio,
    blanqueamientoDental.gravado,
  ),
);

const procedimientos = [
  {
    nombre: "Profilaxis",
    precio: 1500,
    cantidad: 1,
    gravado: false,
  },
  {
    nombre: "Resina",
    precio: 2500,
    cantidad: 2,
    gravado: false,
  },
  {
    nombre: "Blanqueamiento",
    precio: 12000,
    cantidad: 1,
    gravado: true,
  },
];
console.log(procedimientos.length);
console.log(procedimientos[1].nombre);
console.log(procedimientos[0].precio);
console.log(procedimientos[3]);
