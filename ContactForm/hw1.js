function sendmail() {
    var tempparams = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        mailid: document.getElementById("mailid").value,
        phno: document.getElementById("phno").value,
        msg: document.getElementById("msg").value,
    };
    emailjs.send('service_w9xvqvg', 'template_ltqi765', tempparams)
        .then(function (res) {
            console.log("success", res.status);
        })
    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
}