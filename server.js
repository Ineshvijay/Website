function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value       
    }

    emailjs.send("service_s246214","template_uct4c4y",parms).then(alert("Your message has been sent successfully!"),
    function(error){
        alert("There was an error sending your message: " + error);
    });
}
