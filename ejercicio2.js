//  Hacer un programa que solicite el ingreso de un número y que luego emita un
// cartel por pantalla aclarando si el mismo es múltiplo de 5.

function Multiplo(n) {
    n % 5 === 0
      ? console.log("Es multiplo de 5")
      : console.log("No es multiplo de 5");
  }
  
  Multiplo(20);
  
  // Hacer un programa que solicite el ingreso de dos números y luego calcular:
  // a. La resta si el primero es mayor que el segundo.
  // b. La suma si son iguales.
  // c. El producto si el primero es menor.
  // Se deberá emitir un cartel por pantalla con el resultado correspondiente.
  
  function Calculin(n1, n2) {
    let result = 0;
    if (n1 > n2) {
      result = n1 - n2;
      console.log(`Resta ${result}`);
    } else if (n1 === n2) {
      result = n1 + n2;
      console.log(`Suma ${result}`);
    } else if (n1 < n2) {
      result = n1 * n2;
      console.log(`Multiplicacion ${result}`);
    }
  }
  
  Calculin(33, 33);
  
  // Hacer un programa para ingresar dos números. Si el segundo es distinto de
  // cero, calcular la división del primero por el segundo y mostrar el resultado por
  // pantalla; caso contrario, emitir un cartel aclarando que no se puede dividir por
  // cero.

  const func = () => {
    
  }
  
  // Un importante negocio de desinfectante líquido realiza descuentos
  // dependiendo de la cantidad de litros vendidos según la siguiente escala:
  // a. Si vende menos de 100 litros, no hay descuento.
  // b. Si vende entre 101 y 300 litros, el descuento es del 10%.
  // c. Si vende entre 301 y 500 litros, el descuento es del 15%.
  // d. Finalmente, si la venta es de más de 500 litros, el descuento es del 25%.
  // Hacer un programa que solicite el ingreso del importe total de la venta y la
  // cantidad de litros vendidos y calcule y emita el importe con el descuento
  // aplicado.
  
  // Hacer un programa que solicite el ingreso de las notas del primer parcial y del
  // segundo parcial de una alumna de programación. El programa deberá analizar
  // las notas y emitir la situación de la alumna según la siguiente escala:
  // a. Si tiene 8 o más en ambos parciales, emitir “aprobación directa”.
  // b. Si no tiene 8 o más en ambos pero tiene aprobados ambos parciales (se
  // aprueba con 6 o más), emitir “rinde examen final”.
  // c. Si tiene menos de 6 en alguno de los dos parciales, emitir “debe
  // recuperar”.
  // El programa debe emitir solo un cartel, el que corresponda.
  
  // Hacer un programa para ingresar por teclado la longitud de los tres lados de un
  // triángulo y que luego determine e informe con un cartel aclaratorio a qué tipo
  // de triángulo corresponde:
  // a. Equilátero: cuando los tres lados sean iguales.
  // b. Isósceles: cuando dos de los tres lados sean iguales.
  // c. Escaleno: cuando todos los lados sean distintos.
  
  // Hacer un programa para ingresar 4 números. Luego analizar e informar por
  // pantalla si los mismos se encuentran ordenados de forma decreciente.
  
  // El negocio de desinfectante antes mencionado vende además detergente
  // suelto, y los precios se aplican según la siguiente escala:
  // a. 25 ARS por litro los primeros 50 litros.
  // b. 20 ARS por litro si la venta es de 51 a 200 litros.
  // c. 15 ARS por litro si la venta es de 201 a 500 litros.
  // d. 10 ARS por litro si la venta es de más de 500 litros.
  // Además, si paga en efectivo, tiene un adicional del 10% sobre el importe final.
  // Hacer un programa que solicite la cantidad de litros vendidos y el tipo de pago
  // (ingresará 1 si paga en efectivo y 0 con cualquier otro medio de pago) y calcule
  // y emita por pantalla el monto final a abonar por el cliente.
  
  // Hacer un programa que solicite cuatro números y emitir un cartel aclaratorio si
  // son todos iguales entre sí, caso contrario, no emitir nada.
  
  //  Hacer un programa para ingresar tres números y luego mostrarlos ordenados
  // de menor a mayor.
  
  // Hacer un programa para ingresar tres números y emitir un cartel aclaratorio si
  // la suma de los dos primeros es mayor al producto del segundo con el tercero.
  
  // Una importante marca de computadoras permite elegir cierta configuración del
  // equipo a comprar. Para ello existe la siguiente escala de precios:
  
  //               i5 (1)    i7 (2)      i9 (3)
  // 8 RAM (1)   - USD 800  - USD900  - USD 1200
  // 16 RAM (2)  - USD 900  - USD1000 - USD 1400
  // 32 RAM (3)  - USD 1000 - USD1400 - USD 2000
  
  // Además, el equipo viene con un disco que permite almacenar 500 GB de
  // información y que se puede ampliar a 1 TB si así lo desea, lo cual tiene un costo
  // adicional de USD 300.
  // Hacer un programa que solicite la opción de procesador, la opción de memoria
  // RAM, y si extiende el disco o no (ingresa 1 para extender y 0 para no extender)
  // y calcule y emita por pantalla el monto de la máquina seleccionada.