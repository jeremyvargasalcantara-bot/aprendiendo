const profilaxis = 1500; 
const resina = 2500;
const cantidadResina = 2 ;
const blanqueamiento = 12000;
const subtotal=(profilaxis+ (resina*cantidadResina) + blanqueamiento);
const itbis =(blanqueamiento * 0.18 );
const total =(subtotal + itbis);
console.log(subtotal);
console.log(itbis);
console.log(total);
function calcularItbis(montoGravado){
    return(montoGravado);
}
function calcularItbis(montoGravado) {
  return montoGravado * 0.18;
}
let result = calcularItbis();
console.log(calcularItbis(12000));
console.log(calcularItbis(5000));
console.log(calcularItbis(0));
