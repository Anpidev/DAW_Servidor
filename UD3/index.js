//Creacion de constantes accediendo al DOM mediante eventListener (escucha de eventos)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form"); 
    const nombre = document.querySelector("#name"); 
    const email = document.querySelector("#email"); 
    const password = document.querySelector("#password"); 
    const errorMessages = document.querySelector("#error-messages"); // Contenedor de errores

    //Evento para validar el envio del formulario
    form.addEventListener("submit", (event) => {
        //marcado para controlar la validación
        let validado = true; 
        //array para manejar los errores que aparecen
        let mensajesError = [];
//Comprobacion del que nombre no esté vacio
        if (!nombre.value.trim()) {
            validado = false;
            mensajesError.push("El campo de nombre no puede estar vacío.");
        }
//Comprobacion del email mediante funcion creada para ello
        if (!validarEmail(email.value.trim())) {
            validado = false;
            mensajesError.push("El correo electrónico no es válido.");
        }
//Comprobacion de longitud de la contraseña (minimo seis caracteres)
        if (password.value.trim().length < 6) {
            validado = false;
            mensajesError.push("La contraseña debe tener al menos 6 caracteres.");
        }
//Si no es valido , no se manda el formulario al pulsar submit
        if (!validado) {
            event.preventDefault();
            // Mostrar errores en el contenedor 
            errorMessages.innerHTML = "Errores en el formulario:<br>" + mensajesError.join("<br>");
        } else {
            alert("Formulario enviado correctamente.");
            // Limpiar los mensajes de error si el formulario es válido
            errorMessages.innerHTML = ""; 
        }
    });

    //Funcion que mediante regex generico de mail y set comprueba la validez del formato
    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});
