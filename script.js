let v = document.querySelector('.card');

window.onscroll = function() {
    var scrollButton = document.querySelector('.upScroll');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

(function(){
    emailjs.init('KYdl5kqfD4ccMMruc');
})();
function sendMail() {
    var params = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value, 
        msg: document.getElementById("msg").value 
    };

    emailjs.send("service_prqrs1m", "template_erv145b", params)
        .then(function (res) {
            alert("Success! " + res.status);
        })
        .catch(function (error) {
            alert("Failure!: " + error);
        });
}



