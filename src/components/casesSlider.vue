<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="(card, index) in cards" :key="index">
      <a :href="card.link" class="carousel-item">
        <img :src="card.image" alt="">
        <div class="content">
          <h6>{{card.title}}</h6>
          <p>{{card.text}}</p>
        </div>
      </a>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
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
      snapAlign: 'center',
    },
    breakpoints: {
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },
    cards: [
      {
        image: require('@/assets/images/cases/case (1).png'),
        title: 'Card 1 Title',
        text: 'Card 1 description',
        link: '/page1',
      },
      {
        image: require('@/assets/images/cases/case (1).png'),
        title: 'Card 1 Title',
        text: 'Card 1 description',
        link: '/page1',
      },
      {
        image: require('@/assets/images/cases/case (1).png'),
        title: 'Card 1 Title',
        text: 'Card 1 description',
        link: '/page1',
      },
      {
        image: require('@/assets/images/cases/case (1).png'),
        title: 'Card 1 Title',
        text: 'Card 1 description',
        link: '/page1',
      },
      {
        image: require('@/assets/images/cases/case (1).png'),
        title: 'Card 1 Title',
        text: 'Card 1 description',
        link: '/page1',
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
    align-items: center;
    margin-right: 0 !important;
  }
  .carousel__slide {
    padding: 0 25px;
  }
  .carousel__track{
    /* gap: 50px; */
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
    background-image: url(../assets/images/icons/chevroneLeft.svg);
    right: 70px;
    left: unset;
  }
  .carousel__next{
    background-image: url(../assets/images/icons/chevroneRight.svg);
  }
  </style>