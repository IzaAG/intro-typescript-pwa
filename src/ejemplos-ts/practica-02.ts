//creamos una clase

class Formula {
    a: number;
    b: number;
    c: number;
    b2: number;
    operacionArribax1: number;
    operacionArribax2: number;

    //mandamos a imprimir
    imprimir(): void {
        console.log(
          `Variables a: ${this.a} \nVariables b: ${this.b}\nVariables c: ${this.c}\nVariables b elevada al cuadrado: ${this.b2}\nOperacion x1: ${this.operacionArribax1}\noperacion x2: ${this.operacionArribax2}`
        );
      }
}

//
    let resultado = new Formula();
    resultado.a = 6;
    resultado.b = -19;
    resultado.c = 7;
    resultado.b2 = resultado.b * resultado.b;

    resultado.operacionArribax1 =
    (-resultado.b + Math.sqrt(resultado.b2 - 4 * resultado.a * resultado.c)) /
    (2 * resultado.a);
    resultado.operacionArribax2 =
    (-resultado.b - Math.sqrt(resultado.b2 - 4 * resultado.a * resultado.c)) /
    (2 * resultado.a);

    resultado.imprimir();
    
    //se crea otra formula
    class FormulaGeneral {
    a: number;
    b: number;
    c: number;
    b2: number;
    operacionArribax1: number;
    operacionArribax2: number;
    imprimir(): void {
        console.log(
        `Variables a: ${this.a} \nVariables b: ${this.b}\nVariables c: ${this.c}\nVariables b elevada al cuadrado: ${this.b2}\nOperacion x1: ${this.operacionArribax1}\noperacion x2: ${this.operacionArribax2}`
        );
    }
 }
    let operacion = new Formula ();
    operacion.a = 6;
    operacion.b = -19;
    operacion.c = 7;
    operacion.b2 = operacion.b * operacion.b;
    
    operacion.operacionArribax1 =
      (-operacion.b + Math.sqrt(operacion.b2 - 4 * operacion.a * operacion.c)) /
      (2 * operacion.a);
    operacion.operacionArribax2 =
      (-operacion.b - Math.sqrt(operacion.b2 - 4 * operacion.a * operacion.c)) /
      (2 * operacion.a);
    
    operacion.imprimir();







