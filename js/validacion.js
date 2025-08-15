function showAlertSuccess() {
    const alert = document.getElementById("alert-success");
    alert.classList.add("show")
    setTimeout(() => {
        alert.classList.remove("show")
    }, 5000);
}

function showAlertError() {
    const alert = document.getElementById("alert-danger");
    alert.classList.add("show")
    setTimeout(() => {
        alert.classList.remove("show")
    }, 5000);
}

function verificarCamposVacios () {
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const email = document.getElementById("email")
    const pass1 = document.getElementById("password1")
    const pass2 = document.getElementById("password2")

    if (!nombre || !apellido || !email || !pass1 || !pass2)
        return false
    else
        return true
};

function verificarContraValida() {
    const pass1 = document.getElementById("password1").value
    const pass2 = document.getElementById("password2").value

    if (pass1.length >= 6 && pass1 === pass2)
        return true
    else
        return false
};

const boton_registro = document.getElementById("regBtn")

boton_registro.addEventListener("click", () => {
    Sconst checkbox = document.getElementById("terminos");
    if (!checkbox.checked) {
        event.preventDefault(); // Prevent form submission
        showAlertError();
        console.log("Checkbox is not checked");
    if (verificarCamposVacios() && verificarContraValida()){
        console.log(verificarCamposVacios());
        console.log(verificarContraValida());
        showAlertSuccess();
    }
    else{
        console.log(verificarCamposVacios());
        console.log(verificarContraValida());
        showAlertError();
    }
