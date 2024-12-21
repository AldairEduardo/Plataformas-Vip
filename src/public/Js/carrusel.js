const swiper = new Swiper(".mySwiper", {
    loop: true, // Carrusel infinito
    spaceBetween: 10, // Espacio más pequeño entre imágenes
    slidesPerView: 1, // Mostrar una imagen a la vez por defecto
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2, // 2 imágenes visibles en pantallas medianas
        spaceBetween: 20, // Espacio entre imágenes
      },
      768: {
        slidesPerView: 3, // 3 imágenes visibles en pantallas más grandes
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4, // 4 imágenes visibles en pantallas grandes
        spaceBetween: 40,
      },
    },
  });
  