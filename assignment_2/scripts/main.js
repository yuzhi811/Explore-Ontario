//Menu
function showMenu() {
  document.getElementById("vertical-menu").classList.add("show");
}

function hideMenu() {
  document.getElementById("vertical-menu").classList.remove("show");
}

// Darkmode + Cookie
const darkMode = document.querySelector("#dark-button");
var currentCookie = document.cookie;
var cookieCheck = currentCookie.indexOf("Dark-mode");
const logo = document.querySelector(".logo");
const hOne = document.getElementsByTagName("h1");
const headings = document.querySelectorAll(".heading1");
const darkParagraph = document.querySelectorAll("paragraph_dm");

//If there is an existing dark-mode cookie, add class name 'active' and apply the style or remove the class
if (cookieCheck > -1) {
  darkMode.classList.add("active");
  darkTheme();
} else {
  darkMode.classList.remove("active");
}

//when the button is toggled class name 'active' will be added to the class and apply the style
darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  // if class name active is contained add dark-mode cookie
  if (darkMode.classList.contains("active")) {
    darkTheme();

    let date = new Date();
    date.setDate(date.getDate() + 1);
    console.log(date);
    let darkCookie = "";
    darkCookie += "CookieName = Dark-mode;";
    darkCookie += "expires = " + date.toUTCString();
    document.cookie = darkCookie;
  }
  //if class name active is not contained in class list remove dark-mode cookie
  else {
    lightTheme();

    let date = new Date();
    date.setDate(date.getDate() - 1);

    let darkCookie = "";
    darkCookie += "CookieName = Dark-mode;";
    darkCookie += "expires = " + date.toUTCString();

    document.cookie = darkCookie;
  }
});

// lightTheme color style
function lightTheme() {
  document.body.style.background = "transparent";
  document.documentElement.style.setProperty("--primary-color", "#ee9f46");
  document.documentElement.style.setProperty("--secondary-color", "#a32328");
  document.documentElement.style.setProperty("--background-boxes", "#f8cc73");
  document.documentElement.style.setProperty("--text-color", "#2e3238");
  document.documentElement.style.setProperty("--background-color-2", "#f9f1ab");
  document.documentElement.style.setProperty("--terciary-color", "#fa9422");
  document.documentElement.style.setProperty("--third-background", "#f5f1c7");
  document.documentElement.style.setProperty(
    "--text-with-no-bg-color",
    "#2e3238"
  );

  if (logo.classList.contains("sub_logo")) {
    logo.src = "images/logo.png";
  }
}
// darkTheme color style
function darkTheme() {
  document.body.style.background = "#1E1E24";
  document.documentElement.style.setProperty(
    "--text-with-no-bg-color",
    "white"
  );

  if (logo.classList.contains("sub_logo")) {
    logo.src =
      "images/explore-ontario-high-resolution-logo-color-on-transparent-background.png";
  }
}
