//clases

import { NumericLiteral } from "typescript";

class Persona{
 nombre:string;
 edad: number;


   imprimir():void{
        console.log(`El nombre es: ${this.nombre} \n
        La edad es: ${this.edad}`);
   }

}

//creamos instancia

let persona1=new Persona();

//asignar nombre a la persona//
persona1.nombre='Oscar';
persona1.edad=23;
persona1.imprimir();

//pedir 3 número, creamos funciones y propiedad que permita calcular 
//Math.sqrt(3)para calcular la raiz//
//Math.pow(3,2)elevado al cuadrado//






