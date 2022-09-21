//desestrutaracion de objetos y Arrays

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    year:number;
}

//creamos objeto

const reproductor: Reproductor={
    volumen:90,
    segundo:66,
    cancion:'Mañanitas',
    detalles:{
        autor:'vicente',
        year:1978,
    }
}

const{volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;


//imprimir
console.log(`El volumen acual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`El autor es: ${autor}`);
console.log(`La cancion actual es: ${cancion}`);

const naruto:string[]=['itachi','sasuke','madara','pain'];
console.log(`personaje 1: ${naruto[0]}`);
console.log(`personaje 2: ${naruto[1]}`);
console.log(`personaje 3: ${naruto[2]}`);
console.log(`personaje 4: ${naruto[3]}`);

//destructurar arreglos
const[a,,d]=naruto;
console.log(`personaje 1: ${a}`)
//console.log(`personaje 2: ${b}`);//
//console.log(`personaje 3: ${c}`);//
console.log(`personaje 4: ${d}`);

