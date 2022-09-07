
let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
   .then( response => response.json() )
   .then( data => llenarStorage(data) )
   .then( data => agregar(data) )

   .catch( error => console.log(error) )


   
function tarjetas(i) {     
   let estudiante = JSON.parse(localStorage.getItem("estudiante"+i));
   let sumatoria = estudiante.notas.reduce((acumulador, elemento) => (acumulador + elemento), 0);
   let notasTotales = estudiante.notas.length;
   let promedio = (sumatoria / notasTotales);
   let aprueba = promedio >= 7 ? "aprobado" : "desaprobado";
   
   document.getElementById("section-card").innerHTML += `<div id='card${estudiante.id}' class='card'>
   <h2>${estudiante.name}</h2>
   <h4 id='clase${estudiante.id}'>Cursando: ${estudiante.clase}</h4>
   <p id='promedio${estudiante.id}'> El alumno tiene un promedio de: ${promedio.toFixed(2)}
   </br>de un total de: ${notasTotales} de notas
   </br>Este alumno esta ${aprueba}</p>
   <button onclick="sumarNota(this.id)" id="${estudiante.id}" class="btn-selector">Sumar nota</button>
   <button onclick="elegirClase(this.id)" id="${estudiante.id}" class="btn-selector">Elegir clase</button>
   </div>`;  

}  


function llenarStorage(alumnos){
   if (localStorage.getItem("estudiante1") === null){
      alumnos.forEach((alumno) => {
         localStorage.setItem("estudiante"+alumno.id, JSON.stringify(alumno));
         let estudiante = JSON.parse(localStorage.getItem("estudiante"+alumno.id));
         estudiante.notas = [7];
         estudiante.clase= [""];
         localStorage.setItem("estudiante"+alumno.id, JSON.stringify(estudiante))
      })

      ordenar(alumnos)
   }
   else{
         ordenar(alumnos)
      }
}

let cards = "";

function sumarNota(clicked_id){

   let nota = Swal.fire({
   title: 'Sumar nota:',
   input: 'range',
   showCancelButton: true,
   inputAttributes: {
      min: 1,
      max: 10,
      step: 1
   },
   inputValue:6

   }).then(input => nota = input).then((resultado)=> {
      if (resultado.isConfirmed) {  
         Swal.fire('Nota agregada!')
         let notasTotales = parseInt(nota.value)
         const estudiante = JSON.parse(localStorage.getItem("estudiante"+clicked_id));
         estudiante.notas.push(notasTotales);
         localStorage.setItem("estudiante"+clicked_id, JSON.stringify(estudiante));
      }}).then(() =>{
      
         const estudiante = JSON.parse(localStorage.getItem("estudiante"+clicked_id));
         let sumatoria = estudiante.notas.reduce((acumulador, elemento) => (acumulador + elemento), 0);
         let notasTotales = estudiante.notas.length;
         let promedio = (sumatoria / notasTotales);
         let aprueba = promedio >= 7 ? "aprobado" : "desaprobado";
   
         document.getElementById("promedio"+estudiante.id).innerHTML = 
         `El alumno tiene un promedio de: ${promedio.toFixed(2)}
         </br>de un total de: ${notasTotales} de notas
         </br>Este alumno esta ${aprueba}
         `
      })
}

function elegirClase(clicked_id){
   let clase = Swal.fire({
      title: 'Elegir clase:',
      input: 'select',
      inputOptions: {'Clase':{
         Ingles: 'Ingles',
         Frances: 'Frances'
      }
}}).then((input)=> {
   const estudiante = JSON.parse(localStorage.getItem("estudiante"+clicked_id));
   estudiante.clase= input.value;
   console.log(estudiante.clase);
   localStorage.setItem("estudiante"+clicked_id, JSON.stringify(estudiante));

   ordenar("")
})}


function sumarAlumno(){
   let alumno = Swal.fire({
      title: 'Nombre del nuevo alumno',
      input: 'text',
      showCancelButton: true
   }).then(input => nombre = input).then((resultado)=>{
      if (resultado.isConfirmed) { 
         let keyCount  = localStorage.length;

         const alumno ={
            id:keyCount+1,
            name: nombre.value,
            notas:[],
            clase: ""
         }
         localStorage.setItem("estudiante"+alumno.id, JSON.stringify(alumno))
         ordenar("")
      }
   })
}

function ordenar(variable){
   let keyCount  = localStorage.length;
   document.getElementById("section-card").innerHTML = ``

   console.log(variable)


   for(let i = 1; i <= keyCount; i++){
      const estudiante = JSON.parse(localStorage.getItem("estudiante"+i));
   if(variable == estudiante.clase){
      tarjetas(i)
   }if(variable == "Todos"){
      tarjetas(i)
   }
}}

