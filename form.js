document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let inputs = document.querySelectorAll("#formulario input", "#formulario textarea");
    let edad = document.querySelector("input[type='number']").value; //tomamos lo que viene dentro del input numerico con query selector
    let email = document.querySelector("input[type='email']").value; //tomamos el email
    let valido = true;
    let mensaje = ''; //lo dejamos vacío

    //validar campos vacíos
    inputs.forEach(function (input) {
        if (input.value.trim() === "") {
            valido = false;
            mensaje = "Todos los campos deben estar completos";
        }
    })

    if (edad < 18) {
        valido = false
        mensaje = 'Debes tener al menos 18 años';
        console.log("-----> " + edad)
    }

    if (!email.includes("@") || !email.includes(".")) { //el ! antes de la afirmación es una negación
    // o sea, estamos diciendo que "si no incluye x"
        valido = false;
        mensaje = "correo inválido";
    }

    if (valido) {
        window.location.href = "valido.html";
    } else {
        alert(mensaje);
    }
})  
