//como llevarte funciones o interfaces a otro archivo//

//se debe poner la palabra "export" se exportara para poder usarla en otro archivo//

import{calcularIVA2, Producto} from './05-destructurar-funciones';

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:2000
    },


    {
        desc:'Telefono2',
        precio:2500
    },

    {
        desc:'Telefono3',
        precio:1000
    },

];

const [total,iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);
