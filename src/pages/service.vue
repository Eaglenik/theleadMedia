<template>
  <section class="header">
      <div class="header-back my-container">
          <div class="header-text">
             <h1>{{ currentService.title }}</h1>
             <p>{{ currentService.content }}</p>
              <mainButton>{{currentService.btnText}}</mainButton>
          </div>
      </div>
      <div class="chevrone-horizontal">
                     <img class="chevrW" src="@/assets/images/header/chevroneWhite.svg" alt="">
                     <img class="chevrR" src="@/assets/images/header/chevroneRed.svg" alt="">
                     <img class="chevrW" src="@/assets/images/header/chevroneWhite.svg" alt="">
                     <img class="chevrR" src="@/assets/images/header/chevroneRed.svg" alt="">
                     <img class="chevrW" src="@/assets/images/header/chevroneWhite.svg" alt="">
                     <img class="chevrR" src="@/assets/images/header/chevroneRed.svg" alt="">
                     <img class="chevrW" src="@/assets/images/header/chevroneWhite.svg" alt="">
                     <img class="chevrR" src="@/assets/images/header/chevroneRed.svg" alt="">
      </div>
      <img class="mainHeader" :src="require(`@/assets/images/services/${currentService.mainHeaderImage}`)" alt="">
      <img :src="require(`@/assets/images/services/${currentService.mainHeaderBackImage}`)" alt="" class="mainHeaderBack">
      <img class="topHeader" src="@/assets/images/header/topHeader.png" alt="">
    </section>
    <section class="breadcrumbs my-container">
      <b-breadcrumb class="breadcrumbs-links">
        <b-breadcrumb-item class="breadcrumb-link" @click="$router.push('/')">Главная</b-breadcrumb-item>
        <span class="breadcrumb-icon"><img src="@/assets/images/icons/chevroneBread.svg"/></span>
        <b-breadcrumb-item  active>Услуги</b-breadcrumb-item>
        <span class="breadcrumb-icon"><img src="@/assets/images/icons/chevroneBread.svg"/></span>
        <b-breadcrumb-item  active>{{ currentService.title }}</b-breadcrumb-item>
      </b-breadcrumb>
    </section>
    <section class="service-main my-container">
      <div class="service-navigation">

        <accordion>
        <accordion-item>
          <template v-slot:accordion-trigger>
            Услуги
          </template>
          <template v-slot:accordion-content>
              <accordion-item class="subAccordion">
                <template v-slot:accordion-trigger>
                  Создание WEB-сайтов
                </template>
                <template v-slot:accordion-content>
                  Lorem ipsum dolor sit amet,
                </template>
            </accordion-item>
              <accordion-item class="subAccordion">
                <template v-slot:accordion-trigger>
                  SEO-продвижение
                </template>
                <template v-slot:accordion-content>
                  Lorem ipsum dolor sit amet,
                </template>
            </accordion-item>
              <accordion-item class="subAccordion">
                <template v-slot:accordion-trigger>
                  Контекстная реклама в Google и Яндекс
                </template>
                <template v-slot:accordion-content>
                  Lorem ipsum dolor sit amet,
                </template>
            </accordion-item>
              <accordion-item class="subAccordion">
                <template v-slot:accordion-trigger>
                  Продвижение на GoogleMaps
                </template>
                <template v-slot:accordion-content>
                  Lorem ipsum dolor sit amet,
                </template>
            </accordion-item>
              <accordion-item class="subAccordion">
                <template v-slot:accordion-trigger>
                  Продвижение на Яндекс.Карты
                </template>
                <template v-slot:accordion-content>
                  Lorem ipsum dolor sit amet,
                </template>
            </accordion-item>
              <accordion-item class="subAccordion">
                <template v-slot:accordion-trigger>
                  Услуги копирайтинга
                </template>
                <template v-slot:accordion-content>
                  Lorem ipsum dolor sit amet,
                </template>
            </accordion-item>
          </template>
        </accordion-item>
        <accordion-item>
          <template v-slot:accordion-trigger>
            Все кейсы
          </template>
          <template v-slot:accordion-content>
            Lorem ipsum dolor sit
          </template>
        </accordion-item>
        <accordion-item>
          <template v-slot:accordion-trigger>
            Наши проекты
          </template>
          <template v-slot:accordion-content>
            Lorem ipsum dolor sit
          </template>
        </accordion-item>
      </accordion>
      </div>
      <div class="service-content">

      </div>
    </section>
  </template>
  <script>
  import mainButton from '@/components/UI/mainButton'
  import { BBreadcrumb } from 'bootstrap-vue-3'
  import accordion from '@/components/accordion'
  import accordionItem from '@/components/accordion-item'
  export default {
    components: {
      mainButton,
      BBreadcrumb,
      accordion,
      accordionItem
    },
    data() {
      return {
        services: [
          {
            slug: 'web',
            title: 'Создание WEB-сайтов',
            content: 'Услуги профессиональной разработки сайтов в Ташкенте',
            btnText: 'Заказать создание сайта',
            mainHeaderImage: 'web.png',
            mainHeaderBackImage: 'webBack.png' 
          },
          {
            slug: 'seo',
            title: 'SEO-продвижение',
            content: 'Комплекс услуг, направленный на повышение эффективности сайтов',
            btnText: 'Заказать SEO-продвижение',
            mainHeaderImage: 'seo.png' ,
            mainHeaderBackImage: 'seo-back.png' 
          },
          {
            slug: 'google-yandex-ads',
            title: 'Контекстная реклама в Google и Яндекс',
            content: 'Получите заявки уже на следующий день после настройки рекламы',
            btnText: 'Заказать настройку рекламы',
            mainHeaderImage: 'adsGoogleYandex.png',
            mainHeaderBackImage: 'adsGoogleYandexBack.png',
          },
          {
            slug: 'google-maps',
            title: 'Продвижение на GoogleMaps',
            content: 'Приемлемые расценки и индивидуальный подход',
            btnText: 'Заказать продвижение на GoogleMaps',
            mainHeaderImage: 'googleMaps.png' ,
            mainHeaderBackImage: 'googleMapsBack.png',
          },
          {
            slug: 'yandex-maps',
            title: 'Продвижение на Яндекс.Карты',
            content: 'Приемлемые расценки и индивидуальный подход',
            btnText: 'Заказать продвижение на Яндекс.Карты',
            mainHeaderImage: 'yandexMaps.png',
            mainHeaderBackImage: 'yandexMapsBack.png',
          },
          {
            slug: 'copywriting',
            title: 'Услуги копирайтинга',
            content: 'Профессиональные услуги копирайтинга — написание, корректировка и редактирование текстов',
            btnText: 'Заказать услуги копирайтинга',
            mainHeaderImage: 'copi.png',
            mainHeaderBackImage: 'copiBack.png',
          },
        ],
        currentService: null,
        currentSlug: null
      }
    },
    created() {
      this.currentSlug = this.$route.params.slug
      this.currentService = this.services.find(
        service => service.slug === this.currentSlug
      )
    },
    watch: {
      '$route.params.slug'(newValue, oldValue) {
        this.currentSlug = newValue
        this.currentService = this.services.find(
          service => service.slug === this.currentSlug
        )
      },
    },
  }
  </script>
  <style scoped>
  .header{
    height: 685px;
  }
  .mainHeader{
    right: 50px;
    top: 60px;
    z-index: 1;
  }
  .mainHeaderBack{
    mix-blend-mode: overlay;
    position: absolute;
    top: 30px;
    right: 190px;
  }
  .header-text{
    max-width: 720px;
  }
  /* accordion */
  .service-navigation{
    max-width: 330px;
  }

  @media (max-width:1400px){
    .header{
        height: 570px;
    }
    .mainHeader{
      top: unset;
      bottom: -70px;
    }
    .mainHeaderBack{
      max-width: 600px;
      top: unset;
      bottom: 0;
    }
  }
  @media (max-width:1200px){
    .mainHeader{
      bottom: -63px;
    }
    .mainHeaderBack{
      max-width: 500px;
    }
  }
  @media (max-width:992px){
    .header{
        height: 741px;
    }
    .mainHeader{
    }
  }
  @media (max-width:768px){
    .mainHeader{
      max-width: 500px;
    }
    .mainHeader{
      top: unset;
      bottom: -50px;
    }
  }
  @media (max-width:576px){
    .header{
      height: 400px;
    }
    .mainHeader,
    .mainHeaderBack{
      display: none;
    }
    .header-text p{
      margin-top: 50px;
    }
  }
</style>