//objeto en ts//

//interface es una clase que permite establecer los tipos de campos o de las funciones//

interface alumno{
    matricula:number;
    nombre:string;
    email:string;
}
//objeto//
const alumno:alumno={
    nombre:'Cardiel',
    matricula:12345,
    email:"cardiel@gmail.com"
}
//arreglo//
let mascotas=['perro','gato','conejo']
//asignar valor//
mascotas[1]='ashh';
mascotas.push('nuevo')

let tem:(number|string)[]=[]
tem.push('nombre');
tem.push(345);

console.log(mascotas)