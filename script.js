
class User{
    constructor(nombre, tipoCorte, fecha) {
        this.nombre = nombre;
        this.tipoCorte   = tipoCorte;
        this.fecha  = fecha;
    }
}

let users =[]
const persona1 = new User();

function getValues (){

    persona1.nombre = prompt("ingrese nombre")
    persona1.tipoCorte = prompt("que tipo de corte desea?")
    persona1.fecha = prompt("ingrese hora") 
    users.push(persona1)
    return users
    
}

function validate (dataUser){

    dataUser.map( function(element) {
        if (element.nombre.trim() === ""){
            alert(" favor ingresar datos correctos")
        }
        else if (element.tipoCorte.trim() === ""){
            alert("favor ingresar datos correctos")
        }
        else if (element.fecha.trim() ===""){
            alert("favor ingresar datos correctos")
        }       
    })

    return dataUser
}

 function userPremiun (checkdata) {
    
    if ( checkdata.find( element => element.nombre === "juan" )){
        alert("eres usuario premiun, tienes un descuento del 20%")
    }
    else
    {   
        alert("gracias por elegir Barberia Tutu")
    }
}

for (i=0; i<1; i++){

    const dataUser= getValues()
    const checkData= validate(dataUser)
    const findUser = userPremiun(checkData)    

}




