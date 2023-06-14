<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(image, index) in images" :key="index">
            <div class="review-item d-flex align-items-md-center align-items-start flex-md-row flex-column">
                <img :src="image" alt="">
                <div class="review-item_text">
                    <span>Terra Pro</span>
                    <p>Бренд Terra Pro благодарит ООО «TheLead Media» за качественно проведенную работу по настройке и запуску контекстной рекламы в сети Интернет.<br><br>
                    Благодаря грамотно проведенной работе количество заказов с сайта существенно увеличилось.<br><br>
                    Рекомендую данную компанию к сотрудничеству.</p>
                    <p>С уважением, директор Квон Ю.О.</p>
                </div>
            </div>
        </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  <script>
  import { defineComponent } from 'vue';
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  
  export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    const images = require.context('@/assets/images/reviews-partners', false, /\.png$/);
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
          itemsToShow: 1.1,
        },
        1200: {
          itemsToShow: 1.1,
        },
      },
    }),
  });
  </script>
    <style scoped>
    .review-item_text{
        text-align: start;
        margin-left: 50px;
    }
    .review-item_text span{
        font-size: 30px;
        line-height: 42px;
        margin-bottom: 25px;
        display: block;
    }
    .review-item_text p{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue1);
    }
    .carousel__slide{
        padding: 0;
    }
    .review-item_text p:last-of-type{
        margin-top: 25px;
        font-style: italic;
    }
    @media (max-width:1200px){
      
    }
    @media (max-width:992px){
        .carousel__prev,
        .carousel__next{
            display: block;
        }
    }
    @media (max-width:768px){
        .review-item_text{
        text-align: start;
        margin-left: 0;
        margin-top: 40px;
    }
    }
    @media (max-width:576px){
      .review-item_text p{
          font-size: 18px;
          line-height: 25px;
      }
      .review-item_img{
        max-width: 220px;
      }
    }
    </style>