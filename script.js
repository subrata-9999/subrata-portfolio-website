let preLoader = document.getElementById("pre-loader");

function loading_function() {
  preLoader.style.display = "none";
}

let up_nav = document.querySelector(".navbar-toggler");

let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.remove("bg-transparent");
    nav.classList.add("shadow");
    document.querySelector(".navbar").style.paddingTop = "1%";
    document.querySelector(".navbar").style.paddingBottom = "1%";
  } else {
    nav.classList.add("bg-transparent");
    nav.classList.remove("bg-dark", "shadow");
    document.querySelector(".navbar").style.paddingTop = "2%";
    document.querySelector(".navbar").style.paddingBottom = "2%";
  }
});

let shutter_down = document.querySelector(".shutter_down");
shutter_down.addEventListener("click", function () {
  nav.classList.remove("bg-transparent");
});

document.querySelector(".btn_c").addEventListener("click", function (e) {
  const name = document.getElementById("user_name").value;
  const mail_id = document.getElementById("mail_id").value;
  const message = document.getElementById("message_body").value;

  if (!(!name || !mail_id || !message)) {
    Email.send({
      SecureToken: "8a59f3ad-91a3-4f33-bc2a-0bca4f48e8a2",
      To: "pramaniksubho954@gmail.com",
      From: "myprotfolio357@gmail.com",
      Subject: name,
      Body: `NAME : ${name} <br><br> MAIL ID : ${mail_id} <br><br> ${message}`,
    })

    Email.send({
      SecureToken: "f540aa4a-8269-4442-8e3b-e8a5ef66491b",
      To: mail_id,
      From: "subrata.pramanik.subho@gmail.com",
      Subject: "subrata via portfolio",
      Body: `Thanks ${name} for connecting me <3 \nI have recieved your email. We will get back shortly :) \nHave a nice day ☀️`,
    }).then((message) => alert("Massage Sent Successfully\nCheck your Mail(spam also)"));

    document.getElementById("user_name").value = "";
    document.getElementById("mail_id").value = "";
    document.getElementById("message_body").value = "";
  } else if (!(!name || !mail_id || message)) {
    alert("Please Fill the Message section");
  } else if (!(!name || mail_id || !message)) {
    alert("Please enter Your Mail ID");
  } else if (!(name || !mail_id || message)) {
    alert("Please Enter Your Name");
  } else {
    alert("Please Fill All the Section");
  }

  e.preventDefault();
});
