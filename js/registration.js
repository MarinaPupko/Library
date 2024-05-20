const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("E-mail");
const password = document.getElementById("password");

const drop_no_auth = document.getElementById("drop_no_auth");
const drop_auth = document.getElementById("drop_auth");

const user_icon = document.getElementById("circle_btn");
const authorized_user_icon = document.getElementById("authorized_icon");

const sign_up_button = document.getElementById("sing_up_button");
const circle_btn = document.getElementById("circle_btn");

let authorization = false;

var registration_counter = 0;

function toggleMenu() {
  if (authorization == true) {
    drop_auth.classList.toggle("open");
  } else {
    drop_no_auth.classList.toggle("open");
  }
}

function registration() {
  var first_name_value = first_name.value;
  var last_name_value = last_name.value;
  var email_value = email.value;
  var password_value = password.value;

  if (
    first_name_value !== "" &&
    last_name_value !== "" &&
    email_value !== "" &&
    password_value !== ""
  ) {
    // Создаем объект с данными пользователя
    var userData = {
      first_name: first_name_value,
      last_name: last_name_value,
      email: email_value,
      password: password_value,
    };

    // Преобразуем объект в строку
    var userDataString = JSON.stringify(userData);

    // Сохраняем строку в LocalStorage под ключом 'userData'
    localStorage.setItem("userData", userDataString);

    authorization = true;
    registration_counter ++;
    modal_register.style.display = "none";
    background.classList.remove("active_blur");
    drop_no_auth.classList.toggle("open");
    user_icon.classList.toggle("authorized_icon");

    const nameLetter = first_name_value.charAt(0).toUpperCase();
    const lastNameLetter = last_name_value.charAt(0).toUpperCase();

    user_icon.textContent = nameLetter + lastNameLetter;

    amount.textContent = registration_counter;
  }
}

sign_up_button.addEventListener("click", registration);