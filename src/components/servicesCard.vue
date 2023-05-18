<template>
    <div class="services-card">
      <div class="services-card_img">
        <img src="../assets/images/services-card/services-card_arr.png" alt="">
        <img :src="image" alt="">
      </div>
      <h2 v-html="titleWithSpan"></h2>
      <p>от <span> {{ price }}</span></p>
      <p class="services-description">{{ description }}</p>
      <div class="services-card_links d-flex align-items-center justify-content-between w-100">
        <a href="#!">Узнать больше <img src="../assets/images/services-card/services-chevrone.svg" alt=""></a>
        <button>Оставить заявку</button>    
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesCard',
    props: {
      title: String,
      price: String,
      description: String,
      image: String
    },
    computed: {
    titleWithSpan() {
      const markedTitle = this.title.replace('[start]', '<span>').replace('[end]', '</span>');
      return markedTitle;
    }
  }
  }
  </script>