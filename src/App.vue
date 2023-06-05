<template>
    <div class="app">
        <navbar></navbar>
        <router-view></router-view>
        <footerr v-if="showFooter"></footerr>
        <scroll-to-top-button></scroll-to-top-button>
        <patternn></patternn>
    </div>
</template>
<script>
import navbar from '@/components/navbar'
import footerr from '@/components/footer'
import ScrollToTopButton from '@/components/UI/ScrollToTopButton'
import patternn from '@/components/UI/pattern.vue'
export default {
  components: { navbar, footerr, ScrollToTopButton, patternn},
  computed: {
        showFooter() {
            return !this.$route.meta.hideFooter && (this.$route.meta.showFooterFooter || !this.$route.meta.hideContactFooter);
        }
    }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Montserrat';
        font-weight: 400;
        text-decoration: none;
    }
    :root{
        --textWhite: #ffffff;
        --textBlue1: #B5E8FF;
        --textBlue2: #00C6FB;
        --textYellow: #FECA34;
        --backBlack1: #0E1531;
        --backBlack2: #1F355E;
        --backBlack3: #1C7095;
        --btnRed1: #F00037;
        --btnRed2: #EF4456;
        --btnRed3: #FD8F95;
        --borderGrad: linear-gradient(90deg, rgb(28, 112, 149), rgb(14, 21, 49));
        --gradVertical: linear-gradient(180deg, #0E1531 0%, #145381 100%);
        --gradRadial1: radial-gradient(100% 100% at 98.91% 0%, #145381 0%, #0E1531 100%);
        --gradRadial2: radial-gradient(100% 100% at 100% 0%, #1C7095 0%, #0E1531 100%);
        --borderTop: linear-gradient(90deg, #0E1531 10.42%, #EF4456 21.81%, #EF4456 49.31%, #0E1531 68.19%);
    }
    @font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/Montserrat-Light.ttf') format('truetype');
    font-weight: 300;
    }
    @font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: 400;
    }
    @font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
    }
    @font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
    }
    @font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: 700;
    }
    @font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/Montserrat-Black.ttf') format('truetype');
    font-weight: 900;
    }
    .my-container{
        max-width: 1560px;
        width: 100%;
        padding: 0 40px;
        margin: 0 auto;
    }
    
    .app{
        background: var(--backBlack1);
        color: var(--textWhite);
    }
    .line{
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, #0E1531 0%, #1C7095 100%);
        margin: 120px 0;
    }
    .title{
        font-size: 60px;
        line-height: 72px;
        font-weight: 600;
        margin-bottom: 55px;
    }
    .title span{
        font-weight: 600;
        color: var(--btnRed2);
    }
    
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
    /* breadcrumbs */
    .breadcrumb-icon{
      display: inherit;
      margin: 0 15px;
    }
    .breadcrumbs{
      margin-top: 40px;
      margin-bottom: 70px;
    }
    .breadcrumb-link a{
      color: var(--backBlack3) !important;
      font-weight: 700 !important;
      font-size: 18px;
      line-height: 25px;
    }
    .breadcrumb-item.active span{
      color: var(--backBlack3) !important;
      font-weight: 500 !important;
      font-size: 18px;
      line-height: 25px;
    }
    
    @media (max-width:1200px){
       .title{
        font-size: 50px;
        line-height: 60px;
        margin-bottom: 40px;
       }
    }
    @media (max-width:576px){
       .title{
        font-size: 38px;
        line-height: 47px;
        margin-bottom: 30px;
       }
       .line{
            margin: 50px 0;
        }
    }
</style>