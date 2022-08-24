
let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
   .then( response => response.json() )
   .then( data => llenarStorage(data) )
   .then( data => tarjetas(data) )
   .then( data => agregar(data) )

   .catch( error => console.log(error) )


function tarjetas(alumnos) {         
   alumnos.forEach((alumno) => {   
   let estudiante = JSON.parse(localStorage.getItem("estudiante"+alumno.id));
   let sumatoria = estudiante.notas.reduce((acumulador, elemento) => (acumulador + elemento), 0);
   let notasTotales = estudiante.notas.length;
   let promedio = (sumatoria / notasTotales);
   
   document.getElementById("section-card").innerHTML += `<div class='card'>
   <h2>${estudiante.name}</h2>
   <p> El alumno tiene un promedio de: ${promedio.toFixed(2)}</br>de un total de: ${notasTotales} de notas</p>

   <button onclick="sumarNota(this.id)" id="${estudiante.id}">Sumar nota</button>
   </div>`;  

   })}


function llenarStorage(alumnos){
   if (localStorage.getItem("estudiante1") === null){
      alumnos.forEach((alumno) => {
         localStorage.setItem("estudiante"+alumno.id, JSON.stringify(alumno));
         let estudiante = JSON.parse(localStorage.getItem("estudiante"+alumno.id));
         estudiante.notas = [7];
         localStorage.setItem("estudiante"+alumno.id, JSON.stringify(estudiante))
      })

      tarjetas(alumnos)
   }
   else{
      console.log(alumnos.length)
      tarjetas(alumnos)
      }
}

let cards = "";

//const nameAlumno = alumnos.find((alumno) => alumno.name);


function sumarNota(clicked_id){

   let nota = Swal.fire({
   title: 'Sumar nota:',
   input: 'number',
   //inputLabel: nameAlumno,
   showCancelButton: true,
   }
   ).then(input => nota = input).then((resultado)=> {
      if (resultado.isConfirmed) {  
         let notaFinal = parseInt(nota.value);
         Swal.fire('Nota agregada! Actualiza la pagina para ver los resultados')
         const estudiante = JSON.parse(localStorage.getItem("estudiante"+clicked_id));
         estudiante.notas.push(notaFinal);
         localStorage.setItem("estudiante"+clicked_id, JSON.stringify(estudiante));
      }})
}