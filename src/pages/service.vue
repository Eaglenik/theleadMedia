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
          <accordion-item ref="serviceAccordion1" class="mb-4">
            <template v-slot:accordion-trigger>
            Услуги
            </template>
            <template v-slot:accordion-content>
              <div v-for="service in services" class="subAccordion">
                 <accordion-item :key="service.slug" v-if="service.slug === currentSlug" :class="{ 'accordion-active': isOpen }" ref="innerAccordion" class="subAccordionTitle">
                  <template v-slot:accordion-trigger>
                    {{ service.title }}
                  </template>
                  <template v-slot:accordion-content>
                    <ul class="subAccordion-content-list">
                      <li v-for="category in service.categories" :key="category.id">
                        <a href="#!">{{ category.title }}</a>
                      </li>
                    </ul>
                  </template>
                 </accordion-item>
                 <div v-else :key="service.slug"  @click="$router.push({ name: 'Service', params: { slug: service.slug } })">
                  <a class="subAccordion-header-title">
                    {{ service.title }}
                  </a>
                 </div>
               </div>
            </template>
          </accordion-item>
          <accordion-item ref="serviceAccordion2" class="mb-4">
          <template v-slot:accordion-trigger>
            Все кейсы
          </template>
          <template v-slot:accordion-content>
            <router-link class="subAccordion" to="/TerraPro" >TerraPro</router-link>
            <router-link class="subAccordion" to="/Arton" >Arton</router-link>
            <router-link class="subAccordion" to="/Avatrade" >Avatrade</router-link>
            <router-link class="subAccordion" to="/Aksa" >Aksa</router-link>
            <router-link class="subAccordion" to="/Ziynatdesign" >Ziynatdesign</router-link>
            <router-link class="subAccordion" to="/АКТИОН МЦФЭР" >АКТИОН МЦФЭР</router-link>
          </template>
          </accordion-item>
          <accordion-item ref="serviceAccordion3" class="mb-4">
          <template v-slot:accordion-trigger>
            Наши проекты
          </template>
          <template v-slot:accordion-content>
            <router-link class="subAccordion" to="/projects/pc.uz" >PC.uz</router-link>
            <router-link class="subAccordion" to="/projects/stroyvitrina.uz" >StroyVitrina.uz</router-link>
            <router-link class="subAccordion" to="/projects/mebelvitrina.uz" >MebelVitrina.uz</router-link>
            <router-link class="subAccordion" to="/projects/sprav.uz" >Sprav.uz</router-link>
          </template>
          </accordion-item>
        </accordion>
      </div>
      <div class="service-content">
        <div class="service-description" >
          <p v-html="currentService.serviceDescription"></p>
        </div>
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
            mainHeaderBackImage: 'webBack.png',
            categories: [
              {
                id: 1,
                title: 'Рубрика 1.1'
              },
              {
                id: 2,
                title: 'Рубрика 1.2'
              },
              {
                id: 3,
                title: 'Рубрика 1.3'
              }
            ],
            serviceDescription: 'ООО «TheLead Media» предлагает профессиональные услуги контекстной рекламы в Узбекистане. Работы проводятся квалифицированными специалистами.<br><br>В компании применяется дифференцированный подход к обслуживанию. Мы подбираем оптимальные тарифные пакеты в зависимости от требований и возможностей каждого клиента.'
          },
          {
            slug: 'seo',
            title: 'SEO-продвижение',
            content: 'Комплекс услуг, направленный на повышение эффективности сайтов',
            btnText: 'Заказать SEO-продвижение',
            mainHeaderImage: 'seo.png' ,
            mainHeaderBackImage: 'seo-back.png',
            categories: [
              {
                id: 1,
                title: 'Рубрика 1.1'
              },
              {
                id: 2,
                title: 'Рубрика 1.2'
              },
              {
                id: 3,
                title: 'Рубрика 1.3'
              }
            ]
          },
          {
            slug: 'google-yandex-ads',
            title: 'Контекстная реклама в Google и Яндекс',
            content: 'Получите заявки уже на следующий день после настройки рекламы',
            btnText: 'Заказать настройку рекламы',
            mainHeaderImage: 'adsGoogleYandex.png',
            mainHeaderBackImage: 'adsGoogleYandexBack.png',
            categories: [
              {
                id: 1,
                title: 'Услуги контекстной рекламы'
              },
              {
                id: 2,
                title: 'Тарифные планы'
              },
              {
                id: 3,
                title: 'Как контекстная реклама поможет вашему проекту?'
              },
              {
                id: 3,
                title: 'Этапы настройки и ведения контекстной рекламы'
              },
              {
                id: 1,
                title: 'Результаты поддержки контекстной рекламы '
              },
              {
                id: 2,
                title: 'Реализованные кейсы'
              },
              {
                id: 3,
                title: 'Почему нам доверяют настройку рекламы?'
              },
              {
                id: 3,
                title: 'Задать вопрос'
              }
            ]
          },
          {
            slug: 'google-maps',
            title: 'Продвижение на GoogleMaps',
            content: 'Приемлемые расценки и индивидуальный подход',
            btnText: 'Заказать продвижение на GoogleMaps',
            mainHeaderImage: 'googleMaps.png' ,
            mainHeaderBackImage: 'googleMapsBack.png',
            categories: [
              {
                id: 1,
                title: 'Рубрика 1.1'
              },
              {
                id: 2,
                title: 'Рубрика 1.2'
              },
              {
                id: 3,
                title: 'Рубрика 1.3'
              }
            ]
          },
          {
            slug: 'yandex-maps',
            title: 'Продвижение на Яндекс.Карты',
            content: 'Приемлемые расценки и индивидуальный подход',
            btnText: 'Заказать продвижение на Яндекс.Карты',
            mainHeaderImage: 'yandexMaps.png',
            mainHeaderBackImage: 'yandexMapsBack.png',
            categories: [
              {
                id: 1,
                title: 'Рубрика 1.1'
              },
              {
                id: 2,
                title: 'Рубрика 1.2'
              },
              {
                id: 3,
                title: 'Рубрика 1.3'
              }
            ]
          },
          {
            slug: 'copywriting',
            title: 'Услуги копирайтинга',
            content: 'Профессиональные услуги копирайтинга — написание, корректировка и редактирование текстов',
            btnText: 'Заказать услуги копирайтинга',
            mainHeaderImage: 'copi.png',
            mainHeaderBackImage: 'copiBack.png',
            categories: [
              {
                id: 1,
                title: 'Рубрика 1.1'
              },
              {
                id: 2,
                title: 'Рубрика 1.2'
              },
              {
                id: 3,
                title: 'Рубрика 1.3'
              }
            ]
          },
        ],
        currentService: null,
        currentSlug: null,
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
    computed: {
      currentService() {
        return this.services.find(service => service.slug === this.currentSlug);
      },
      isCurrentServicePage() {
        return !!this.currentService;
      }
    },
    mounted() {
      this.$refs.serviceAccordion1.isOpen = true;
      this.$refs.serviceAccordion2.isOpen = false;
      this.$refs.serviceAccordion3.isOpen = false;
      this.$refs.innerAccordion.isOpen = true;
    }
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
    max-width: 310px;
    padding-right: 50px;
    border-right: 2px solid transparent;
    border-image:  linear-gradient(180deg, #0E1531 0%, #1F355E 4.27%, #1F355E 41.86%, #1F355E 95.18%, #0E1531 100%);
    border-image-slice: 1;
  }
  .subAccordion-header-title,
  .accordion-content a{
    font-size: 18px;
    line-height: 25px;
    font-weight: 600;
    color: rgba(181, 232, 255, 0.7);
    cursor: pointer;
  }
  .subAccordion{
    padding: 10px 0;
    gap: 10px;
  }
  .subAccordion-content-list{
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .subAccordion-content-list a{
    cursor: pointer;
    color: rgba(181, 232, 255, 0.7);
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
  }
  .service-main{
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }
  /* service content */
  .service-description{
    margin-bottom: 90px;
  }
  .service-description p{
    font-size: 22px;
    line-height: 31px;
    color: var(--textBlue1);
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