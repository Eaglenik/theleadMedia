<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="carousel-logos">
        <Slide v-for="(image, index) in images" :key="index">
            <div class="carousel-item_img d-flex justifu-content-between align-items-center">
                <img :src="image" alt="">
            </div>
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
  mounted() {
    const images = require.context('@/assets/images/logo-companies', false, /\.png$/);
    const imageKeys = images.keys();
    this.images = imageKeys.map(key => images(key));
  },
    data: () => ({
      images: [],
      settings: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      breakpoints: {
        0: {
          itemsToShow: 2.1,
        },
        768: {
          itemsToShow: 2.6,
        },
        992: {
          itemsToShow: 3.1,
        },
        1200: {
          itemsToShow: 3.4,
        },
        1400: {
          itemsToShow: 4.2,
        },
      },
    }),
  });
  </script>
    <style scoped>
    .carousel-item_img{
        min-height: 100px;
        padding: 0 40px;
        border-right: 1px solid var(--textBlue1);
    }
    .carousel-item_img:first-of-type{
        padding-left: 0;
    }
    .carousel-logos {
        background: white;
        padding: 55px 70px;
    }
    @media (max-width:1200px){
        .carousel-item_img{
            padding: 0 30px;
        }
    }
    @media (max-width:992px){
        .carousel-item_img{
            padding: 0 20px;
        }
        .carousel-item_img img{
            width: 100%;
        }
        .carousel-logos {
            padding: 30px;
        }
    }
    @media (max-width:576px){
        .carousel-logos {
            padding: 10px;
        }
        .carousel-item_img{
            padding: 0 15px;
        }
    }
    </style>