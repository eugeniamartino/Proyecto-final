class Alumno{
   constructor(){
      const nombreAlumno = prompt("ingrese nombre del alumno");
      const notas = [];

      let numero = 0;
      do{
         numero = parseInt(prompt("Ingrese nota del alumno. Cuando no tengas mas notas que cargar simplemente presiona cualquier tecla y dale enter"));
         console.log(numero);
         notas.push(numero);
      }while(parseInt(numero));

      notas.pop();

      let sumarNota = prompt("Quiere sumar una nota mas?");

      if(sumarNota = "si"){
         numero = parseInt(prompt("Ingrese una nueva nota"));
         console.log(numero);
         notas.push(numero);
      }
   

      const sumatoria = notas.reduce((acumulador, elemento) => (acumulador + elemento) , 0)
      const notasTotales = notas.length;
      const promedio = (sumatoria / notasTotales);

      console.log(notas)
      console.log(promedio)

      if (promedio>=7){
         document.write("Felicitaciones " + nombreAlumno + " tu nota final es un " + promedio);
         console.log("Felicitaciones " + nombreAlumno + " tu nota final es un " + promedio )
      }
      else{
         document.write("Lo lamento " + nombreAlumno + " tu nota final es un " + promedio )
         console.log("Lo lamento " + nombreAlumno + " tu nota final es un " + promedio )
      }

   }

}

const estudiante1 = new Alumno();



