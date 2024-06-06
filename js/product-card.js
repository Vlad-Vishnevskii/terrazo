(() => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperOthers = new Swiper('.swiper--others', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    autoplay: {
      delay: 1500,
    },
    slidesOffsetBefore: 50,
    navigation: {
      nextEl: '.swiper-button-next-others',
      prevEl: '.swiper-button-prev-others',
    },
  });
})();
