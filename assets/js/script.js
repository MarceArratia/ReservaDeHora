function validar(){
    //validar nombre
    var rut,expresionRut, nombres,expresionNombre, apellidos,expresionApellido,edad, correo, esp, especialidad,fecha, hora, ho, expresionCorreo;
    rut = document.getElementById("rut").value;
    expresionRut = /^(\d{2}\d{3}\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
    nombres = document.getElementById("nombres").value;
    expresionNombre= /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    apellidos = document.getElementById("apellidos").value;
    expresionApellido= /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    expresionCorreo = /\w+@\w+\.+[a-z]/;
    esp = document.getElementById("especialidad");
    especialidad = esp.options[esp.selectedIndex].text;
    fecha = document.getElementById("fecha").value;
    ho = document.getElementById("hora");
    hora = ho.options[ho.selectedIndex].text;
    
   //Validaciones
    if (rut === "" || nombres === "" || apellidos === "" || correo === "" || edad === "" || especialidad === "" || fecha === ""|| hora === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (!expresionRut.test(rut)){
        alert("Ingrese un número de Rut válido");
        return false;
    }
    else if (!expresionNombre.test(nombres)){
        alert("Nombre inválido");
        return false;
    }
    else if (!expresionApellido.test(apellidos)){
        alert("Apellido inválido");
        return false;
    }
    else if (!expresionCorreo.test(correo)){
        alert("El correo no es válido");
        return false;
    }
   
   document.write("Estimado(a) " + nombres+" "+apellidos+" su hora para "+especialidad+ " ha sido reservada para el día "+fecha+" a las " +hora+" Además, se le envió un mensaje a su correo: "+correo+" con el detalle de su cita"+`<p><center>${"¡¡¡Gracias por preferirnos!!!"}</center></p>`);
    
    
}
document.getElementById('sendReserv').addEventListener('click', validar);
