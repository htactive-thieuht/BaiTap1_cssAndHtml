function showInformation() {
    const nam = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subj = document.getElementById("option").value;
    const mess = document.getElementById("message").value;
    var text = "";
    if (nam === "" || email === "" || subj == "-1" || mess === "") {
        text = "Input not valid";
    } else {
        console.log(nam, email, '????');

        document.getElementById("p1").innerHTML = nam;
        document.getElementById("p2").innerHTML = email;
        document.getElementById("p3").innerHTML = subj;
        document.getElementById("p4").innerHTML = mess;
    }
    document.getElementById("notvalid").innerHTML = text
}

function deleteData() {
    var nam = "";
    document.getElementById('name').value = nam;
    var emal = "";
    document.getElementById('email').value = emal;
    var sub = "";
    document.getElementById('subject').value = sub;
    var mess = "";
    document.getElementById('messeger').value = mess;
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";
    document.getElementById("p4").value = "";
    document.getElementById("p3").value = "";
} 