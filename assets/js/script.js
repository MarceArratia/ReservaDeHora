function validar(){
    //validar nombre
    var rut, nombre, apellidos,edad, correo, esp, especialidad,fecha, hora, ho,expresion;
    rut = document.getElementById("rut").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    esp = document.getElementById("especialidad");
    especialidad = esp.options[esp.selectedIndex].text;
    fecha = document.getElementById("fecha").value;
    ho = document.getElementById("hora");
    hora = ho.options[ho.selectedIndex].text;
    
    expresion = /\w+@\w+\.+[a-z]/;

    if (rut === "" || nombre === "" || apellidos === "" || correo === "" || edad === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (rut.length<9){
        alert("El rut debe tener mínimo 9 digitos");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellidos.length>80){
        alert("Los apellidos son muy largos");
        return false;
    }
    else if (correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if (!expresion.test(correo)){
        alert("El correo no es válido");
        return false;
    }
   
   alert("Estimado(a) " + nombre+" "+apellidos+" su hora para "+especialidad+ " ha sido reservada para el día "+fecha+" a las " +hora+" Además, se le envió un mensaje a su correo: "+correo+" con el detalle de su cita"+`<p>${"Gracias por preferirnos"}</p>`);
    
    
}
document.getElementById('sendReserv').addEventListener('click', validar);
