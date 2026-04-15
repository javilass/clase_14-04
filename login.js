
document.getElementById("loginForm").addEventListener("submit",function(e){ //"escuchamos" el evento submit dentro del elemento LoginForm
    e.preventDefault(); //detenemos el proceso e (el evento de la info del formulario)
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value; 

    if (user === "admin" && pass === "1234"){
        window.location.href = "form.html";
    }else{
        document.getElementById("error").innerText = "Datos incorrectos"
    }
})