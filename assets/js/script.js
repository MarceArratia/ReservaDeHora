function validar(){
    //validar nombre
    var nombre, apellidos, correo, usuario,pass, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    pass = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || apellidos === "" || correo === "" || usuario === ""|| pass === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
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
    else if (usuario.length>20){
        alert("El usuario debe tener 20 carácteres como máximo");
        return false;
    }
    else if (telefono.length>15){
        alert("El telefono es muy largo");
        return false;
    }
    else if (isNaN(telefono)){
        alert("Ha ingresado un  número de teléfono no válido");
        return false;
    }
   
    alert("Hola " + nombre+" "+apellidos+" tu nombre de usuario es "+usuario+ " y tu contraseña es "+pass);

}