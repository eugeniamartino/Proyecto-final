let alumnos =[
   {id:1, nombreAlumno: "Maria", notas: [8,7,9]},
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

alumnos.forEach((alumno) => {
   
   const estudiante1 = JSON.parse(localStorage.getItem("estudiante1"));


   let sumatoria = estudiante1.notas.reduce((acumulador, elemento) => (acumulador + elemento) , 0)
   let notasTotales = estudiante1.notas.length;
   let promedio = (sumatoria / notasTotales);

   const idInput = `add-notas${alumno.id}`
   
   document.getElementById("section-card").innerHTML += `<div class='card'>
   <h2>${alumno.nombreAlumno}</h2>
   <p> El alumno tiene un promedio de: ${promedio.toFixed(2)} de un total de: ${notasTotales} de notas</p>
   <button onclick=>Sumar nota</button>
   </div>`;  


})

let al1 = "";


document.getElementById("seccion").innerHTML += `<div>
<form>
<input type=number id="inputInput"></input>
<button onclick="notaM(al1.notas)">Sumar nota Maria</button>

</form>
</div>`;

function notaM(notas){
   const estudiante1 = JSON.parse(localStorage.getItem("estudiante1"));
   const result = alumnos.find((alumno) => alumno.id === 1);
   let inputFinal = parseInt(document.getElementById("inputInput").value);
   result.notas.push(inputFinal);
   alumnos.forEach((alumno) => {
      localStorage.setItem("estudiante"+alumno.id, JSON.stringify(alumno));
   })
}

