//destructuracion de funciones//
export interface Producto{
    desc: string;
    precio: number;

}
const telefono: Producto={
    desc:'samsung',
    precio:3500
}

const tablet: Producto={
    desc:'ipad',
    precio:5000
}

//creamos funcion

function calcularIVA(productos:Producto[]):number{
    let total=0;
   // for(let i=0; i<2; ++i)// solo se añadira los productos seleccionados en este caso es 2
   productos.forEach ((producto)=>{ //con este código para añadir más productos//
        total+=producto.precio;

    })
    return total*0.16;

}

//creamos objeto u articulo

const articulos1=[telefono,tablet];

//creamos funcion

const iva1=calcularIVA(articulos1);
//imprimimos
console.log(`IVA: ${iva1}`);

export function calcularIVA2(productos:Producto[]):[number,number]{
let total= 0;
productos.forEach(({precio})=>{
    total+=precio;
})

return[total,total*0.16];
}

const articulo2=[telefono,tablet];
const [total,iva]=calcularIVA2(articulo2);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva1}`);
