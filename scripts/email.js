// let handleSubmit = document.getElementById("submit");
// handleSubmit.addEventListener("click", sendEmail);

let sendEmail = () => {
  console.log("entra send email");
  let params = {
    email_id: document.getElementById("email_id"),
  };

  emailjs
    .send("service_nsxmoxa", "template_i4gf8i7", params)
    .then(function (res) {
      alert(res.status);
    });
};
