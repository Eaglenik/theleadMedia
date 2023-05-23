<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="(card, index) in cards" :key="index">
      <router-link :to="card.link" class="carousel-item">
        <img :src="card.image" alt="">
        <div class="carousel-item_text">
          <h6>{{card.title}}</h6>
          <p>{{card.text}}</p>
        </div>
      </router-link>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
  <router-link to="/cases" class="cases-btn">Все кейсы <img src="@/assets/images/services-card/services-chevrone.svg" alt=""></router-link>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: 'start',
    },
    breakpoints: {
      0: {
        itemsToShow: 1.1,
      },
      576: {
        itemsToShow: 1.4,
      },
      768: {
        itemsToShow: 2.4,
      },
      1200: {
        itemsToShow: 3,
      },
    },
    cards: [
      {
        image: require('@/assets/images/cases/case (1).png'),
        title: 'dildorakasimova',
        text: 'Разработка сайта',
        link: '/cases/dildorakasimova',
      },
      {
        image: require('@/assets/images/cases/case (2).png'),
        title: 'Gross.uz',
        text: 'SEO-продвижение',
        link: '/cases/gross',
      },
      {
        image: require('@/assets/images/cases/case (3).png'),
        title: 'TerraPro.uz',
        text: 'Контекстная реклама',
        link: '/cases/terrapro',
      },
      {
        image: require('@/assets/images/cases/case (5).png'),
        title: 'АКТИОН МЦФЭР.uz',
        text: 'Контекстная реклама',
        link: '/cases/action-mcfr',
      },
      {
        image: require('@/assets/images/cases/case (4).png'),
        title: 'mtlp.uz',
        text: 'Копирайтинг',
        link: '/cases/mtlp',
      },
      {
        image: require('@/assets/images/cases/case (6).png'),
        title: 'ziynatdesign.uz',
        text: 'Контекстная реклама',
        link: '/cases/ziynatdesign',
      },
      {
        image: require('@/assets/images/cases/case (7).png'),
        title: 'equip.uz',
        text: 'Копирайтинг',
        link: '/cases/equip',
      },
      {
        image: require('@/assets/images/cases/case (8).png'),
        title: '2work.uz',
        text: 'Копирайтинг',
        link: '/cases/2work',
      },
      {
        image: require('@/assets/images/cases/case (9).png'),
        title: 'ikarvon.uz',
        text: 'Копирайтинг',
        link: '/cases/ikarvon',
      },
      {
        image: require('@/assets/images/cases/case (10).png'),
        title: 'arton.uz',
        text: 'Контекстная реклама',
        link: '/cases/arton',
      },
      {
        image: require('@/assets/images/cases/case (11).png'),
        title: 'avatrade.uz',
        text: 'Контекстная реклама',
        link: '/cases/avatrade',
      },
      {
        image: require('@/assets/images/cases/case (12).png'),
        title: 'gorodknig.uz',
        text: 'SEO-продвижение',
        link: '/cases/gorodknig',
      },
      {
        image: require('@/assets/images/cases/case (13).png'),
        title: 'leading.uz',
        text: 'SEO-продвижение',
        link: '/cases/leading',
      },
      {
        image: require('@/assets/images/cases/case (14).png'),
        title: 'aksa.uz',
        text: 'Контекстная реклама',
        link: '/cases/aksa',
      },
    ],
  }),
});
</script>
  <style>
  .carousel-item {
    width: 100%;
    background-color: white;
    color: blue;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    margin-right: 0 !important;
    text-align: start;
  }
  .carousel__slide {
    padding: 0 25px;
  }
  .carousel__prev svg,
  .carousel__next svg{
    display: none;
  }
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    top: -80px;
    background-repeat: no-repeat;
    outline: none;
  }
  .carousel__prev{
    background-image: url(@/assets/images/icons/chevroneLeft.svg);
    right: 70px;
    left: unset;
  }
  .carousel__next{
    background-image: url(@/assets/images/icons/chevroneRight.svg);
  }
  .carousel-item img{
    width: 100%;
  }
  .carousel-item_text h6{
    font-size: 30px;
    line-height: 42px;
    font-weight: 600;
    color: var(--backBlack3);
  }
  .carousel-item_text p{
    color: var(--backBlack1) !important;
    margin-bottom: 0 !important;
  }
  .carousel-item_text{
    padding: 10px 20px;
  }
  .cases-btn{
    margin-top: 40px;
    display: block;
    font-size: 22px;
    line-height: 31px;
    color: var(--textBlue2);
  }
  @media (max-width:1200px){
    .carousel-item_text h6{
      font-size: 28px;
      line-height: 39px;
    }      
    .projects p{
      font-size: 20px;
      line-height: 28px;
    }
  }
  @media (max-width:992px){
    .carousel__slide {
      padding: 0 15px;
    }
    .carousel__prev,
    .carousel__next{
      display: none;
    }
  }
  @media (max-width:576px){
    .carousel-item_text h6{
      font-size: 24px;
      line-height: 32px;
    }
    .carousel-item_text h6{
      font-size: 24px;
      line-height: 32px;
    }
    .cases-btn{
      margin-top: 15px;
      font-size: 18px;
      line-height: 25px;
    }
  }
  </style>