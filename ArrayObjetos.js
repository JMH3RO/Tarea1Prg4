console.log("--------------Tarea1_JoseHernandez_61811120--------------")
console.log("-----arreglo de objetos con la estructura estudiante-----")
var Estudiante1={
    cuenta:'6111222',
    nombre: 'Mario Zavala',
    nota:90,
    estado:'Aprobado',  
}
var Estudiante2={
    cuenta:'6122333',
    nombre: 'Jose Mendoza',
    nota:59,
    estado:'Reprobado',
}
var Estudiante3={
    cuenta:'6123555',
    nombre: 'Javier Medina',
    nota:89,
    estado:'Aprobado',  
}
var Estudiante4={
    cuenta:'6133225',
    nombre: 'Maria Paz',
    nota:68,
    estado:'Aprobado',
}

const Estudiantes=[Estudiante1,Estudiante2,Estudiante3,Estudiante4]
const reprobados = Estudiantes.find(Estudiante=> Estudiante.estado ==='Reprobado')
console.log('La persona reprobada es:', reprobados)