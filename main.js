let alumnos =[
   {id:1, nombreAlumno: "Maria", notas: [8,7,9]},
   {id:2, nombreAlumno: "Juan", notas: [5,7,6]},
   {id:3, nombreAlumno: "Pablo", notas: [5,9,9]},

]

function llenarStorage(){
   if (localStorage.getItem("estudiante1") === null){
      alumnos.forEach((alumno) => {
         localStorage.setItem("estudiante"+alumno.id, JSON.stringify(alumno));
      })}
   else{
      console.log(alumnos.length)
   }
}

llenarStorage()

let cards = "";

alumnos.forEach((alumno) => {   
   const estudiante = JSON.parse(localStorage.getItem("estudiante"+alumno.id));

   let sumatoria = estudiante.notas.reduce((acumulador, elemento) => (acumulador + elemento), 0);
   let notasTotales = estudiante.notas.length;
   let promedio = (sumatoria / notasTotales);

   document.getElementById("section-card").innerHTML += `<div class='card'>
   <h2>${alumno.nombreAlumno}</h2>
   <p> El alumno tiene un promedio de: ${promedio.toFixed(2)} de un total de: ${notasTotales} de notas</p>
   <button onclick="sumarNota(this.id)" id="${alumno.id}">Sumar nota</button>
   </div>`;  

})


const nameAlumno = alumnos.find((alumno) => alumno.nombreAlumno);

function sumarNota(clicked_id){
   let nota = Swal.fire({
   title: 'Sumar nota:',
   input: 'number',
   //inputLabel: nameAlumno,
   showCancelButton: true,

   }).then(input => nota = input).then((resultado)=> {
      if (resultado.isConfirmed) {  

         const result = alumnos.find((alumno) => alumno.id == clicked_id);
         let notaFinal = parseInt(nota.value);
         console.log(alumnos);
         Swal.fire('Nota agregada! Actualiza la pagina para ver los resultados')
         const estudiante = JSON.parse(localStorage.getItem("estudiante"+result.id));
         estudiante.notas.push(notaFinal);
         localStorage.setItem("estudiante"+result.id, JSON.stringify(estudiante));
      }})
}

