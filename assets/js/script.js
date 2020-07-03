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
    expresionEdad = /^([0-9])*$/;
    correo = document.getElementById("correo").value;
    expresionCorreo = /\w+@\w+\.+[a-z]/;
    esp = document.getElementById("especialidad");
    especialidad = esp.options[esp.selectedIndex].text;
    fecha = document.getElementById("fecha").value;
    expresionFecha = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
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
    else if (!expresionEdad.test(edad)){
        alert("Debe ingresar solo números");
        return false;
    }
    else if (!expresionFecha.test(fecha)){
        alert("Ingrese el formato de fecha válido (dd/mm/aaaa)");
        return false;
    }
    
   
   document.write("Estimado(a) " + nombres+" "+apellidos+" su hora para "+especialidad+ " ha sido reservada para el día "+fecha+" a las " +hora+" Además, se le envió un mensaje a su correo: "+correo+" con el detalle de su cita"+`<p><center>${"¡¡¡Gracias por preferirnos!!!"}</center></p>`);
    
    
}
document.getElementById('sendReserv').addEventListener('click', validar);
