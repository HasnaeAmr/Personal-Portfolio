let v = document.querySelector('.card');
window.onscroll = function() {
    let scrollValue = window.scrollY; // corrected from scrollY to window.scrollY
}
function sendMail() {
    var params = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value, // Added .value
        msg: document.getElementById("msg").value // Added .value
    };

    emailjs.send("service_prqrs1m", "template_erv145b", params)
        .then(function (res) {
            alert("Success! " + res.status);
        })
        .catch(function (error) {
            alert("Error: " + error);
        });
}
