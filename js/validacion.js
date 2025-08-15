function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    setTimeout(function() {
        document.getElementById("alert-success").classList.remove("show");
    }, 3000); // Hide after 3 seconds
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    setTimeout(function() {
        document.getElementById("alert-danger").classList.remove("show");
    }, 3000); // Hide after 3 seconds
}
    

document.getElementById("regBtn").addEventListener("click", function(event){
    const checkbox = document.getElementById("terminos");
    if (!checkbox.checked) {
        event.preventDefault(); // Prevent form submission
        showAlertError();
        console.log("Checkbox is not checked");
    }
});
