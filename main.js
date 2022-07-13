for(let i = 0; i < 2; i++){
const nombreAlumno = prompt("ingrese nombre del alumno");
const nota1 = parseInt(prompt("Ingrese primer nota del alumno"));
const nota2 = parseInt(prompt("Ingrese segunda nota del alumno"));

let resultado = 0;

function sumar(primerNota, segundaNota) {
    resultado = (primerNota + segundaNota) /2
};

sumar(nota1, nota2)

console.log(resultado);


if (resultado>=7){
    document.write("Felicitaciones " + nombreAlumno + " tu nota final es un " + resultado + " ");
    console.log("Felicitaciones " + nombreAlumno + " tu nota final es un " + resultado )
}
else{
    document.write("Lo lamento " + nombreAlumno + " tu nota final es un " + resultado )
    console.log("Lo lamento " + nombreAlumno + " tu nota final es un " + resultado )
}
}