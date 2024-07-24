// HACER UN PROGRAMA PARA INGRESAR UN NUMERO Y LUEGO SE EMITA POR PANTALLA UN CARTEL ALEATORIO SI ES 'MAYOR A 10' O NO ES "MAYOR A 10"

function Calculin2(n1) {
    return n1 > 10 ? "Es mayor a 10" : "No es mayor a 10";
  }
  
  Calculin2(22);
  
  // HACER UN PROGRAMA PARA INGRESAR 2 NUMEROS Y QUE LUEGO EMITA POR PANTALLA EL MAYOR DE ELLOS O UN CARTEL ALEATORIO QUE DIGA SON IGUALES EN EL CASO DE QUE ASI SEA.
  
  let mayor = 0;
  let menor = 0;
  let numIgual = "SON IGUALES";
  
  const CalculaMayor = (n1, n2) => {
    if (n1 > n2 && n1 != n2) {
      mayor = n1;
      console.log(mayor);
    } else if (n2 > n1 && n2 != n1) {
      mayor = n2;
      console.log(mayor);
    } else {
      console.log(numIgual);
    }
  };
  
  CalculaMayor(11, 7);
  
  // HACER UN PROGRAMA PARA INGRESAR 2 NUMEROS Y QUE LUEGO EMITA POR PANTALLA EL MENOR DE ELLOS.
  function CalculaMenor(n1, n2) {
    if (n1 < n2 && n1 != n2) {
      menor = n1;
      console.log(menor);
    } else if (n2 < n1 && n2 != n1) {
      menor = n2;
      console.log(menor);
    }
  }
  CalculaMenor(666, 777);
  
  // HACER UN PROGRAMA PARA INGRESAR UN NUMERO Y LUEGO SE EMITA UN CARTEL POR PANTALLA "POSITIVO" SI EL NUMERO ES MAYOR A CERO, "NEGATIVO" SI EL NUMERO ES MENOR A CERO O CERO SI EL NUMERO ES IGUAL A CERO.
  
  const CalcularPositivo = (n) => {
    n === 0 ? 0 : null;
  
    n > 0 ? console.log("POSITIVO") : console.log("NEGATIVO");
  };
  
  CalcularPositivo(22);
  
  // HACER UN PROGRAMA PARA INGRESAR UN NUMERO Y MOSTRAR UN CARTEL POR PANTALLA SI EL MISMO ES PAR O IMPAR.
  
  function Pares(n) {
    n % 2 === 0 ? console.log("Es Par") : console.log("No es Par");
  }
  
  Pares(100);
  
  // Una casa de videojuegos otorga un descuento dependiendo del importe de la compra realizada segun los siguientes valores: Si el importe es menor a 1000 no hay descuento, si el importe es 1000 o mayor pero menor a 5000 se aplica un descuento del 10% y si el importe es mayor a 5000 aplica un descuento del 18%
  // Hacer un programa para ingresar un importe de venta y luego muestre por pantalla el importe final con el descuento que corresponda.
  
  let des = 0;
  let importe = 0;
  
  function Descuentos(n) {
    n < 1000 ? console.log("no hay descuento") : null;
  
    if (n >= 1000 && n < 5000) {
      des = (n * 10) / 100;
      importe = n - des;
      console.log(`Su importe es de ${importe} `);
    } else if (n >= 5000) {
      des = (n * 18) / 100;
      importe = n - des;
      console.log(`Su importe es de $ ${importe} `);
    }
  }
  
  Descuentos(5000);
  
  // HACER UN PROGRAMA PARA INGRESAR 4 NUMEROS DISTINTOS Y LUEGO MOSTRAR EL MAYOR DE ELLOS.
  
  function numMayor(n1, n2, n3, n4) {
    const mayor = Math.max(n1, n2, n3, n4);
    console.log(`el mayor es ${mayor}`);
  }
  
  numMayor(2, 5, 16, 147);
  
  // HACER UN PROGRAMA PARA INGRESAR 4 NUMEROS DISTINTOS Y LUEGO MOSTRAR EL MENOR DE ELLOS.
  
  function numMenor(n1, n2, n3, n4) {
    const menor = Math.min(n1, n2, n3, n4);
    console.log(`el menor es ${menor}`);
  }
  
  numMenor(269, 5333, 1446, 122);
  
  // HACER UN PROGRAMA PARA INGRESAR 5 NUMEROS DISTINTOS Y LUEGO MOSTRAR EL MAYOR Y EL MENOR DE ELLOS.
  
  function MasGrandeMasChico(n1, n2, n3, n4, n5) {
    const mayor = Math.max(n1, n2, n3, n4, n5);
    const menor = Math.min(n1, n2, n3, n4, n5);
  
    console.log(`el menor es ${menor} y el mayor es ${mayor}`);
  }
  
  MasGrandeMasChico(22, 35, 28, 167, 232);
  
  // HACER UN PROGRAMA PARA INGRESAR 4 NUMEROS  Y LUEGO MOSTRAR CUALES SON MAYORES DE 100.
  
  function MaryoDe100(n1, n2, n3, n4) {
    const array = [];
    array.push(n1, n2, n3, n4);
  
    const mayores = array.filter((e) => {
      return e > 100;
    });
  
    console.log(mayores);
  }
  
  MaryoDe100(11, 322, 44, 122);
  
  // HACER UN PROGRAMA PARA INGRESAR 4 NUMEROS  Y LUEGO MOSTRAR CUALES SON MENORES DE 100.
  
  function MenorDe100(n1, n2, n3, n4) {
    let array = [];
  
    array.push(n1, n2, n3, n4);
  
    const menores = array.filter((e) => {
      return e < 100;
    });
  
    console.log(menores);
  }
  
  MenorDe100(11, 322, 44, 122);
  
  // HACER UN PROGRAMA PARA INGRESAR UN NUMERO QUE ESTARA EXPRESADO EN MINUTOS. SI LOS MINUTOS SUPERAN LOS 60, PASAR EL VALOR A HORAS, DE LO CONTRARIO DEJARLO EN MINUTOS. MOSTRAR EL RESULTADO ACLARANDO SI SE MUESTRAN MINUTOS U HORAS.

let min = 0;
let hs = 0;
let resul = 0;

function Reloj(n) {
  if (n > 60) {
    hs = n / 60;
    min = n % 60;

    hs = Math.round(hs);

    console.log(`${hs} Horas y ${min} Minutos`);
  } else {
    console.log(`${n} Minutos`);
  }
}

Reloj(20);