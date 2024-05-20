var winter_radio = document.getElementById('winter_radio');
var spring_radio = document.getElementById('spring_radio');
var summer_radio = document.getElementById('summer_radio');
var autum_radio = document.getElementById('autum_radio');

var books = document.querySelectorAll('.book');

const winter_books = document.querySelectorAll(".book.winter");
const spring_books = document.querySelectorAll(".book.spring");
const summer_books = document.querySelectorAll(".book.summer");
const autumn_books = document.querySelectorAll(".book.autumn");

function default_choose(){
    winter_radio.checked = true;

    books.forEach(function(book){
        book.style.display = 'none';
    });
    winter_books.forEach(function(book){
        book.style.display = 'inline-block';
    });
}

function choosing_winter_season(){
    if (winter_radio.checked){
        books.forEach(function(book){
            book.style.display = 'none';
        });
        winter_books.forEach(function(book){
            book.style.display = 'inline-block';
        });
    }
}

function choosing_spring_season(){
    if (spring_radio.checked){
        books.forEach(function(book){
            book.style.display = 'none';
        });
        spring_books.forEach(function(book){
            book.style.display = 'inline-block';
        });
    }
}

function choosing_summer_season(){
    if (summer_radio.checked){
        books.forEach(function(book){
            book.style.display = 'none';
        });
        summer_books.forEach(function(book){
            book.style.display = 'inline-block';
        });
    }
}

function choosing_autumn_season(){
    if (autum_radio.checked){
        books.forEach(function(book){
            book.style.display = 'none';
        });
        autumn_books.forEach(function(book){
            book.style.display = 'inline-block';
        });
    }
}

default_choose();

winter_radio.addEventListener("click", choosing_winter_season);

spring_radio.addEventListener("click", choosing_spring_season);

summer_radio.addEventListener("click", choosing_summer_season);

autum_radio.addEventListener("click", choosing_autumn_season);