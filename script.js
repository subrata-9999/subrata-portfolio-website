let preLoader = document.getElementById("pre-loader");

function loading_function() {
  preLoader.style.display = "none";
}

let up_nav = document.querySelector(".navbar-toggler");

let nav = document.querySelector("nav");

// Navbar shrink/floating on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.my-nav');
  if (window.scrollY > 50) {          // start floating after 50px scroll
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


let shutter_down = document.querySelector(".shutter_down");
shutter_down.addEventListener("click", function () {
  nav.classList.remove("bg-transparent");
});


// emailjs.init("FHjQCdg0p2Dce04aZ");

    
//       document.querySelector(".btn_c").addEventListener("click", function (e) {
//         e.preventDefault(); // Prevent form submission
    
//         const name = document.getElementById("user_name").value;
//         const mail_id = document.getElementById("mail_id").value;
//         const message = document.getElementById("message_body").value;
    
//         if (name && mail_id && message) {
//           // Send confirmation email to user
//           emailjs.send("service_xyxk5uy", "template_16recw9", {
//             to_name: name,
//             from_name: "Subrata Pramanik",
//             reply_to: mail_id,
//             message: `Thanks ${name} for connecting me <3 \nI have received your email. We will get back shortly :) \nHave a nice day ☀️`,
//           }).then(
//             function(response) {
//               alert("Message Sent Successfully\nCheck your Mail (spam also)");
//             },
//             function(error) {
//               console.error("Failed to send confirmation email:", error);
//               alert("Failed to send the confirmation email. Please try again.");
//             }
//           );
    
//           // Send notification email to you
//           emailjs.send("service_xyxk5uy", "template_16recw9", {
//             to_name: "Subrat Pramanik",
//             from_name: "Your Portfolio",
//             message: message+ "\nThis is generated from your portfolio",
//             reply_to: "myprotfolio357@gmail.com",
//           }).then(
//             function(response) {
//               // alert("Message Sent Successfully\nCheck your Mail (spam also)");
//               // Clear form fields
//               console.log("Message Sent Successfully\nCheck your Mail (spam also), for owner");
          
//             },
//             function(error) {
//               // console.error("Failed to send message:", error);
//               // alert("Failed to send the message. Please try again.");
//             }
//           );

//           document.getElementById("user_name").value = "";
//           document.getElementById("mail_id").value = "";
//           document.getElementById("message_body").value = "";
    
          
//         } else {
//           if (!message) {
//             alert("Please fill the message section");
//           } else if (!mail_id) {
//             alert("Please enter your email ID");
//           } else if (!name) {
//             alert("Please enter your name");
//           } else {
//             alert("Please fill all the sections");
//           }
//         }
//       });


//  emailjs.init("FHjQCdg0p2Dce04aZ");

//   // 🔥 SELECT ALL FORMS (important)
//   const forms = document.querySelectorAll("form");
//   const button = document.querySelector(".btn_c");

//   forms.forEach((form) => {
//     form.addEventListener("submit", function (e) {
//       e.preventDefault(); // 🚫 stop native submit
//       e.stopPropagation();

//       const name = document.getElementById("user_name").value.trim();
//       const email = document.getElementById("mail_id").value.trim();
//       const message = document.getElementById("message_body").value.trim();

//       if (!name || !email || !message) {
//         alert("Please fill all fields");
//         return;
//       }

//       button.disabled = true;
//       const oldText = button.innerText;
//       button.innerText = "Sending...";

//       const userMail = emailjs.send("service_xyxk5uy", "template_16recw9", {
//         to_name: name,
//         from_name: "Subrata Pramanik",
//         reply_to: email,
//         message: `Hi ${name},

// Thanks for contacting me 😊
// I will get back to you shortly.`,
//       });

//       const ownerMail = emailjs.send("service_xyxk5uy", "template_16recw9", {
//         to_name: "Subrata Pramanik",
//         from_name: "Portfolio Website",
//         reply_to: email,
//         message: `New message from portfolio

// Name: ${name}
// Email: ${email}

// Message:
// ${message}`,
//       });

//       Promise.all([userMail, ownerMail])
//         .then(() => {
//           alert("Message sent successfully 📩");
//           form.reset();
//         })
//         .catch((err) => {
//           console.error(err);
//           alert("Failed to send message");
//         })
//         .finally(() => {
//           button.disabled = false;
//           button.innerText = oldText;
//         });
//     });
//   });