const modal_buy = document.getElementById("modal_buy");

const bank_card_number = document.getElementById("bank_card_number");
const code_month = document.getElementById("code_month");
const code_year = document.getElementById("code_year");
const cvc = document.getElementById("cvc");
const cardholder_name = document.getElementById("cardholder_name");
const postal_code = document.getElementById("postal_code");
const place_code = document.getElementById("place_code");

const buy_card_button = document.getElementById("buy_card_button");

const library_card = document.getElementById("library_card");
const library_card_authorized = document.getElementById("library_card_authorized")

var bank_card_number_value = '';
var code_month_value = '';
var code_year_value = '';
var cvc_value = '';
var cardholder_name_value = '';
var postal_code_value = '';
var place_code_value = '';

function open_model_buy(){
  modal_buy.style.display = 'flex';
  background.classList.add('active_blur');
}

class BookStore {
  constructor() {
    const buttons = document.querySelectorAll("#buy_button");
  
    buttons.forEach(button => {
      button.addEventListener("click", this.buy_book);
    });
  }
  
  buy_book() {
    if (authorization) {

      open_model_buy();
      this.classList.add("own_book");
      this.textContent = "Own";

    } else {
      open_modal_log_in();
    }
  }
}

const bookstore = new BookStore();

function register_card(){
  bank_card_number_value = bank_card_number.value;
  code_month_value = code_month.value;
  code_year_value = code_year.value;
  cvc_value =  cvc.value;
  cardholder_name_value = cardholder_name.value;
  postal_code_value = postal_code.value;
  place_code_value = place_code.value;

  if(
    bank_card_number_value !== "" &&
    code_month_value !== "" &&
    code_year_value !== "" &&
    cvc_value !== "" &&
    cardholder_name_value !== "" &&
    postal_code_value !== "" &&
    place_code_value !== "")
    {
      modal_buy.style.display = 'none';
      background.classList.remove("active_blur");
      library_card.style.display ='none';
      library_card_authorized.style.display = 'flex';

  }
}

buy_card_button.addEventListener("click", register_card);