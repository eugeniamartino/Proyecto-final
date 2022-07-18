const nombreAlumno = prompt("ingrese nombre del alumno");
const alumno1 = [];

let numero = 0;
do{
   numero = parseInt(prompt("Ingrese nota del alumno. Cuando no tengas mas notas que cargar simplemente presiona cualquier tecla y dale enter"));
   console.log(numero);
   alumno1.push(numero);
}while(parseInt(numero));

alumno1.pop();

const sumatoria = alumno1.reduce((acumulador, elemento) => (acumulador + elemento) , 0)
const notas = alumno1.length;
const promedio = (sumatoria / notas);

console.log(alumno1)
console.log(promedio)

if (promedio>=7){
   document.write("Felicitaciones " + nombreAlumno + " tu nota final es un " + promedio);
   console.log("Felicitaciones " + nombreAlumno + " tu nota final es un " + promedio )
}
else{
    document.write("Lo lamento " + nombreAlumno + " tu nota final es un " + promedio )
    console.log("Lo lamento " + nombreAlumno + " tu nota final es un " + promedio )
}
