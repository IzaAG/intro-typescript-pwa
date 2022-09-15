
//creamos interfaz//

interface alumnosDeUni{
    nombre:string;
    edad:number;
    calle:string;
    pais:string;
    estado:string;

    mostrarDireccion:()=>void;
}

const AlumnoUtl:alumnosDeUni={
        nombre:'Bruno',
        edad:23,
        calle:'campanario',
        pais:'México',
        estado:'GTO',
        
        mostrarDireccion(){

            return this.nombre+','+ this.estado+','+ this.pais;
        }

    }

    const direccion=AlumnoUtl.mostrarDireccion();
    console.log(direccion);
    
    

    

    