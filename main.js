/*class Alumno{
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

const estudiante1 = new Alumno();*/


const alumnos =[
   {id:1, nombreAlumno: "Maria", notas: [8,7,9]},
   {id:2, nombreAlumno: "Juan", notas: [5,7,4]},
   {id:3, nombreAlumno: "Pablo", notas: [9,6,9]},
]



function sumarNota(alumnos){
   let numero = parseInt(prompt("Ingrese una nueva nota"));
   alumnos.notas.push(numero);
}

let cards = "";

alumnos.forEach((alumno) => {
   const idButton = `add-notas${alumno.id}`
   document.getElementById("section-card").innerHTML += `<div class='card'>
   <h2>${alumno.nombreAlumno}</h2>
   <p> EL alumno tiene un promedio de: ${alumno.promedio} de un total de: ${alumno.cantidad} de notas</p>

   <button id="${idButton}">Sumar Nota</button>
   </div>`; 
    
   })

   alumnos.forEach((alumno) => {
      const idButton = `add-notas${alumno.id}`
      document.getElementById(idButton).addEventListener("click", () => {
         sumarNota();
      })
   })

   
//document.getElementById("section-card").innerHTML = cards; 