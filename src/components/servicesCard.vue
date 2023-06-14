<template>
    <div class="services-card" >
      <div class="services-card_img">
        <img src="@/assets/images/services-card/services-card_arr.png" alt="">
        <img :src="require(`@/assets/images/services-card/${image}`)" alt="">
      </div>
      <h2 v-html="titleWithSpan"></h2>
      <p>от <span> {{ price }}</span></p>
      <p class="services-description">{{ description }}</p>
      <div class="services-card_links d-flex align-items-center justify-content-between w-100">
        <router-link :to="link">Узнать больше <img src="@/assets/images/services-card/services-chevrone.svg" alt=""></router-link>
        <button @click="openModal(title)">Оставить заявку</button>
      </div>
    </div>
  </template>
<script>
import { BModal } from 'bootstrap-vue-3';
export default {
  name: 'ServicesCard',
  components: {
    BModal,
  },
  data() {
    return {
        showModal: false
    }
  },
  props: {
    title: String,
    price: String,
    description: String,
    image: String,
    slug: String,
  },
  computed: {
    titleWithSpan() {
      const markedTitle = this.title.replace('[start]', '<>').replace('[end]', '</ span>');
      return markedTitle;
    },
    link() {
      return `/services/${this.slug}`;
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal');
    }
  }
}
</script>
  <style>
    .services{
        gap: 50px;
    }
    .services-card{
        background: var(--gradRadial2);
        width: 48%;
        padding: 30px 50px 70px 50px;
        border: 3px solid transparent;
        border-image:  linear-gradient(22.06deg, #1C7095 0%, #0E1531 100%);
        border-image-slice: 1;
    }
    .services-card_img{
        position: relative;
        min-height: 350px;
        margin-bottom: 15px;
    }
    .services-card_img img{
        position: absolute;
        width: 100%;
    }
    .services-card_img img:first-of-type{
        mix-blend-mode: overlay;
        left: 0;
        top: 20px;
        max-width: 470px;
        opacity: 0.6;
    }
    .services-card_img img:last-of-type{
        right: 0;
        top: 0;
        max-width: 520px;
    }
    .services-card h2{
        font-size: 44px;
        line-height: 53px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    .services-card h2 span{
        font-weight: 600;
        color: var(--btnRed2);
    }
    .services-card p{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue1);
    }
    .services-card p span{
        font-size: 30px;
        line-height: 42px;
        font-weight: 600;
        color: white;
    }
    .services-card p:last-of-type{
        margin-top: 20px;
        margin-bottom: 40px;
    }
    .services-card_links{
        flex-wrap: wrap;
        row-gap: 40px;
    }
    .services-card_links a{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue2);
        margin-right: 20px;
    }
    .services-card_links button,
    .package-card button,
    .individual-card_footer button{
        background: none;
        font-size: 22px;
        line-height: 31px;
        color: var(--btnRed2);
        display: flex;
        justify-content: center;
        align-content: center;
        border: 1px solid var(--btnRed2);
        padding: 21px 30px;
        outline: none;
        font-weight: 600;
    }

    @media (max-width:1400px){
        .services-card_img img:first-of-type{
            max-width: 355px;
        }
        .services-card_img img:last-of-type{
            max-width: 401px;
        }
        .services-card_img{
            min-height: 250px;
        }
        .services-card{
            width: 47%;
        }
        .services{
            gap: 40px;
            position: relative;
            z-index: 1;
        }
    }
    @media (max-width:1200px){
        .services-card_img img:first-of-type{
            max-width: 272px;
        }
        .services-card_img img:last-of-type{
            max-width: 310px;
        }
        .services-card_img{
            min-height: 200px;
        }
        .services-card h2{
            font-size: 40px;
            line-height: 48px;
        }
        .services-card p{
            font-size: 20px;
            line-height: 28px;
        }
        .services-card p span{
            font-size: 28px;
            line-height: 39px;
        }
        .services-card_links a,
        .services-card_links button{
            font-size: 20px;
            line-height: 28px;
        }
    }
    @media (max-width:992px){
        .services-card{
            width: 100%;
        }
        .services-card_img img:last-of-type{
            left: 0;
            max-width: 480px;
        }
        .services-card_img img:first-of-type{
            max-width: 410px;
        }
        .services-card_img{
            min-height: 300px;
        }
    }
    @media (max-width:768px){
        .services-card_img img:last-of-type{
            left: unset;
        }
    }
    @media (max-width:576px){
        .services-card_img img:last-of-type{
            max-width: 260px;
        }
        .services-card_img img:first-of-type{
            max-width: 209px;
        }
        .services-card_img{
            min-height: 150px;
            margin-bottom: 35px;
        }
        .services-card{
            padding: 20px 10px;
        }
        .services-card h2{
            font-size: 30px;
            line-height: 40px;
            margin-bottom: 20px;
        }
        .services-card p,
        .services-card_links a, .services-card_links button{
            font-size: 18px;
            line-height: 25px;
        }
        .services-card p span{
            font-size: 22px;
            line-height: 31px;
        }
        .services-card_links button{
            width: 100%;
        }
    }
  </style>