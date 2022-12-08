let name = localStorage.getItem("name");
let heading = document.querySelector("#messageH1");
let email = localStorage.getItem("email");
let subMessage = document.querySelector("#submissionMessage");
heading.textContent += name + "!";
subMessage.textContent +=
  'We will get back to "' + email + '" within 3 business days.';