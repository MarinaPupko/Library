const background = document.getElementById("background");
const modal_register = document.getElementById('modal_register');
const modal_log_in = document.getElementById('modal_log_in');
const modal_profile = document.getElementById("modal_profile");
const users_profile_name = document.getElementById("users_profile_name");
const avatar = document.getElementById("avatar");
const amount = document.getElementById("amount");
const have_account_btn = document.getElementById('have_account');
const dont_have_account_btn = document.getElementById('dont_have_account');


const log_out_btn = document.getElementById("log_out_btn");
const my_profile_btn = document.getElementById("my_profile_btn");
const register_btn = document.getElementById("register_btn");
const log_in_btn = document.getElementById("log_in_btn");

function open_my_profile(){
    modal_profile.style.display = 'flex';
    background.classList.add('active_blur');
}

function log_out_profile(){
    authorization = false;
    user_icon.classList.toggle("authorized_icon");
    drop_auth.classList.toggle("open");
    user_icon.textContent = '';
    library_card.style.display ='flex';
    library_card_authorized.style.display = 'none';
}

function open_modal_register(){
    modal_register.style.display ='flex';
    background.classList.add('active_blur');
}

function open_modal_log_in(){
    modal_log_in.style.display = 'flex';
    background.classList.add('active_blur');
}

dont_have_account_btn.addEventListener("click", open_modal_register);

have_account_btn.addEventListener("click", open_modal_log_in);

register_btn.addEventListener("click", open_modal_register);

log_in_btn.addEventListener("click", open_modal_log_in);

log_out_btn.addEventListener("click", log_out_profile);

my_profile_btn.addEventListener("click", open_my_profile);