const user_email = document.getElementById("user_email");
const user_password = document.getElementById("user_password");
const log_in_button = document.getElementById("log_in_button");

function user_log_in() {
  var user_email_value = user_email.value;
  var user_password_value = user_password.value;

  // Получаем данные пользователя из LocalStorage
  var userDataString = localStorage.getItem("userData");
  var userData = JSON.parse(userDataString);

  var email_value = userData.email;
  var password_value = userData.password;

  if (
    user_email_value === email_value &&
    user_password_value === password_value
  ) {
    authorization = true;
    registration_counter ++;
    modal_log_in.style.display = "none";
    drop_no_auth.classList.toggle("open");
    user_icon.classList.toggle("authorized_icon");
    background.classList.remove("active_blur");

    const nameLetter = userData.first_name.charAt(0).toUpperCase();
    const lastNameLetter = userData.last_name.charAt(0).toUpperCase();

    user_icon.textContent = nameLetter + lastNameLetter;
    amount.textContent = registration_counter;
  }
}

log_in_button.addEventListener("click", user_log_in);

