



const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('bg-primary');
    } else {
        header.classList.remove('bg-primary');
    }
});



const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.menu');
const overlay_m = document.querySelector('.overlay_menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    overlay_m.classList.toggle('is-active');
});



const modal = document.getElementById("form_request");
const btn = document.querySelectorAll('.request-btn');
const close = document.querySelector(".modal .modal-close");
const overlay = document.querySelector(".modal-overlay");


btn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('open');
    });
});

close.addEventListener("click", () => {
    modal.classList.remove("open");
});

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        modal.classList.remove("open");
    }
});



$("#scroll-bot").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 800);
});


const scrollToTopBtn = document.getElementById("top");

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




$(document).ready(function () {
    $('form').on('input', function () {
        var nameInput = $('#name');
        var emailInput = $('#email');
        var submitBtn = $('#simpleContactSubmitButton');

        if (nameInput.val() !== '' && emailInput.val() !== '' && nameInput[0].checkValidity() && emailInput[0].checkValidity()) {
            submitBtn.prop('disabled', false);
        } else {
            submitBtn.prop('disabled', true);
        }
    });
});

//   const form = document.querySelector('form'); // получить форму
//   const submitButton = form.querySelector('button[type="submit"]'); // получить кнопку отправки формы

//   form.addEventListener('submit', (event) => {
//     event.preventDefault(); // предотвратить отправку формы повторно
//     submitButton.disabled = true; // сделать кнопку отправки формы неактивной
//     form.reset(); // очистить форму
//   });


const floatingBtn = document.querySelector('.floating-btn');
const folioBlock = document.querySelector('#folio');

window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >= folioBlock.offsetTop) {
        floatingBtn.classList.add('hidden');
    } else {
        floatingBtn.classList.remove('hidden');
    }
});

// получаем ссылку на элемент "Услуги"
const servicesLink = document.querySelector(".menu__item--has-dropdown .menu__link");

// получаем элемент выпадающего меню
const dropdownMenu = document.querySelector(".menu__dropdown");

// добавляем обработчик события клика на ссылку "Услуги"
servicesLink.addEventListener("click", function (event) {
    // отменяем действие по умолчанию (переход по ссылке)
    event.preventDefault();

    // проверяем, открыто ли выпадающее меню
    if (dropdownMenu.style.display == "block") {
        // если да, скрываем его
        dropdownMenu.style.display = "none";
    } else {
        // если нет, показываем его
        dropdownMenu.style.display = "block";
    }
});

// добавляем обработчик события клика на весь документ
document.addEventListener("click", function (event) {
    // проверяем, является ли элемент, на который был произведен клик, элементом меню или выпадающего списка
    if (event.target != servicesLink && !dropdownMenu.contains(event.target)) {
        // если нет, скрываем выпадающее меню
        dropdownMenu.style.display = "none";
    }
});
