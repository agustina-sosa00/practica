import React, { useState } from 'react'

export const ButtonWh: React.FC = () => {
    const Carrito = [
        {
          Nombre: '1/2 kg',
          Monto: 100.0
        },
        {
          Nombre: '1/4 kg',
          Monto: 150.0
        },
        {
          Nombre: '1 kg',
          Monto: 200.0
        }
    ]; 
    const [state, setState] = useState<string>('')
    const [direccion, setDireccion] = useState<string>('')

    const handleOnClick = () => {
         function finalizarCompra(){
            const input = prompt('ingrese su direccion:');
            if (input !== null) {
            setDireccion(input);
    }
        const productosParaWsp = Carrito.map(producto => `- ${producto.Nombre} $${producto.Monto}, `); // Le añadimos un guión delante del nombre y también el monto
        const productosConFormatoAmigable = productosParaWsp.join('\n'); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
        console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
         //window.location.href = 'https://api.whatsapp.com/send?phone=333333333&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + productosConFormatoAmigable // Comento esta línea para no redirigir realmente en este ejemplo
         setState(productosConFormatoAmigable)
      }

      finalizarCompra()
    }
   
    
  return (
    <div>
        <a href={`https://wa.me/541126034427?text=Hola Ice Cream, quiero: ${state} a esta direccion: ${direccion}`}>
            <button onClick={handleOnClick}>enviar whatsapp</button>
        </a>
        
    </div>
  )
}

export default ButtonWh;