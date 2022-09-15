//funciones//

//para definir se usa function,no recibe ni da paramtros//
//si queremsos que reciba parametros se coloca adentro del parentesis//
//funcion void no regresa nada//
function sumar(a,b):void{
    console.log(a+b);
    

}
//mandamos a llamar
//se le coloca el valor numerico de ambas letras de arriba//

//sumar(4,3);//

const resultado=sumar('Izamar','Alfaro');
console.log(resultado)

function sumar2(n1:number,n2:number):number{
    return n1+n2;
}
console.log(sumar2(6,3))

//se le coloca el signo de interrogación para que sea opcional//
function multiplicar(n1:number, otronumero:number,base:number=3):number{
    let tem=n1*base;
    return tem;
}


console.log(multiplicar(3,5));

//creamos una interfaz//

interface Mascota{

    nombre:string;
    edad:number;
    //prototipo de metodo para definir pero no se desarrolla//
    mostraredad:()=>void;
}

function calcular(mascota:Mascota,edad:number):void{
      mascota.edad+=edad;
      console.log(mascota);

}


//const es para declarar una variable//
const nuevaMascota: Mascota={
    nombre:'Mufasa',
    edad:3,
    mostraredad(){
        console.log('la edad es: ',this.edad);
    },
}

calcular (nuevaMascota,3);
