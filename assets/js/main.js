
            // Получаем все ссылки в меню
            const menuLinks = document.querySelectorAll('.menu__link');

            // Перебираем все ссылки в меню и добавляем обработчик события "клик"
            menuLinks.forEach(menuLink => {
                menuLink.addEventListener('click', event => {
                    // Отменяем стандартное поведение ссылки
                    event.preventDefault();

                    // Получаем id секции, к которой нужно прокрутить страницу
                    const targetId = menuLink.getAttribute('href');

                    // Получаем позицию секции относительно верха страницы
                    const targetPosition = document.querySelector(targetId).offsetTop;

                    // Плавно прокручиваем страницу до нужной секции
                    window.scroll({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                });
            });




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


       
            $("#scroll-bot").click(function() {
                $('html, body').animate({
                    scrollTop: $("#about").offset().top
                }, 800);
            });



            $(document).ready(function() {
                $('form').on('input', function() {
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
            