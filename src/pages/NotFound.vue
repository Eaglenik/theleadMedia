<template>
    <div class="notfound">
      <div class="my-container d-flex flex-column align-items-center">
        <div class="notfound-img d-flex justify-content-center align-items-center">
          <img src="@/assets/images/notfound/front404.png" alt="">
          <img src="@/assets/images/notfound/back404.png" alt="">
        </div>
        <div class="notfound-btns">
          <main-button @click="goBack()">Вернуться</main-button>
          <router-link to="/">На главную <img src="@/assets/images/services-card/services-chevrone.svg" alt=""></router-link>
        </div>
      </div>
    </div>
  </template>
<script>
import mainButton from '@/components/UI/mainButton.vue';
export default {
    components: {
      mainButton
    },
    methods: {
      goBack() {
          history.back();
      }
    }
}
</script>
<style scoped>
    .notfound{
      height: 100vh;
      width: 100%;
      background: var(--gradVertical);
    }
    .notfound-img{
      position: relative;
      margin: 40px 0 60px 0;
      height: 575px;
      width: 100%;
    }
    .notfound-img img{
      position: absolute;
      top: 0;
      width: 100%;
    }
    .notfound-img img:first-of-type{
      z-index: 1;
      max-width: 940px;
    }
    .notfound-img img:last-of-type{
      mix-blend-mode: overlay;
      max-width: 970px;
    }
    .notfound-btns{
      position: relative;
      margin-bottom: 50px;
    }
    .notfound-btns a{
      font-size: 22px;
      line-height: 31px;
      color: var(--textBlue2);
      margin-left: 30px;
    }
    @media (max-width: 992px){
      .notfound-img{
        height: 500px;
      }
    }
    @media (max-width: 768px){
      .notfound-img{
        height: 400px;
      }
    }
    @media (max-width: 576px){
      .notfound-img{
        height: 285px;
      }
      .notfound-btns{
        text-align: center;
      }
      .notfound-btns a{
        margin: 40px 0 0 0;
        display: inline-block;
      }
    }
    @media (max-width:  450px){
      .notfound-img{
        height: 190px;
      }
    }
</style>