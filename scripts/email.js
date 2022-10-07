let sendEmail = () => {
  let params = {
    from_name: document.getElementById("NameInput").value,
    email_id: document.getElementById("email_id").value,
    time: document.getElementById("time").value,
  };

  emailjs.send("service_nsxmoxa", "template_i4gf8i7", params).then(
    function (res) {
      console.log(res.status);
    },
    (err) => {
      btn.value = "Send Email";
      console.log(JSON.stringify(err));
    }
  );
};
