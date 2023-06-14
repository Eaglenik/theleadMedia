<template>
    <section class="header">
      <div class="header-back my-container">
          <div class="header-text">
             <h1>{{ currentService.title }}</h1>
             <p>{{ currentService.content }}</p>
              <mainButton @click="showModal = true">{{currentService.btnText}}</mainButton>
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
    <section class="service-main my-container" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabindex="0">
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
                    <div class="subAccordion-content-list list-group" id="list-example">
                        <a v-for="category in service.categories" :key="category.id" @click.prevent="scrollToListItem(category.id)" :href="'#list-item-' + category.id" class="navigation__link">{{ category.title }}</a>
                    </div>
                  </template>
                 </accordion-item>
                 <div v-else :key="service.slug"  @click="$router.push({ name: 'Service', params: { slug: service.slug } })" v-b-scrollspy:listgroup-ex>
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
      <div class="service-content" >
        <div class="service-description" >
          <p v-html="currentService.serviceDescription"></p>
        </div>
        <div class="service-services" id="list-item-1">
          <h6 class="title" v-html="currentService.seriveServicesTitle" ></h6>
          <div class="services-service_cards d-flex justify-content-between flex-xl-row flex-column gap-xl-0 gap-sm-5 gap-3">
            <div class="services-service_card">
              <h4>{{ currentService.serviceCardTitle1 }}</h4>
              <p>{{ currentService.serviceCardDescription1 }}</p>
              <router-link :to="{ name: 'servicesService', params: { slug: currentService.serviceCardLink1 } }">Узнать больше <img src="@/assets/images/services-card/services-chevrone.svg" alt=""></router-link>
            </div>
            <div class="services-service_card"> 
              <h4>{{ currentService.serviceCardTitle2 }}</h4>
              <p>{{ currentService.serviceCardDescription2 }}</p>
              <router-link :to="{ name: 'servicesService', params: { slug: currentService.serviceCardLink2 } }">Узнать больше <img src="@/assets/images/services-card/services-chevrone.svg" alt=""></router-link>
            </div>
          </div>
          <form action="URL" class="service-form">
            <h6><span>Не знаете</span> какая услуга <span>подойдет именно вам?</span></h6>
            <h5>Свяжитесь <span>с нами. Мы предложим</span> решение!</h5>
            <div class="requestServiceForm-inpts d-flex flex-wrap justify-content-between">
              <div class="requestServiceForm-input">
                  <p>Имя*</p>
                  <input name="service-name" type="text" required> 
              </div>
              <div class="requestServiceForm-input">
                  <p>Телефон*</p>
                  <input name="service-phone" type="number" required>
              </div>
              <div class="requestServiceForm-input">
                  <p>Электронная почта</p>
                  <input name="service-mail" type="text" required>
              </div>
              <div class="requestServiceForm-input">
                  <p>Ваш проект*</p>
                  <input name="service-project" type="text" required>
              </div>
            </div>
            <div class="footer-question_footer d-flex justify-content-between align-items-xl-center align-items-start flex-xl-row flex-column gap-xl-0 gap-4 mt-5">
              <p>Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных</p>
              <div class="footer-question_btn d-flex align-items-center gap-5 flex-sm-row flex-column">
                капча
              <main-button style="padding: 20px 30px; font-size: 22px; line-height: 31px;">Отправить</main-button>
              </div>
            </div>
          </form>
        </div>
        <div class="tariff-plans" id="list-item-2">
          <h6 class="title" >Тарифные <span>планы</span></h6>
          <div class="tariff-cards">
            <div v-for="(plan, index) in currentService.plans" :key="index" class="tariff-card">
              <div class="tariff-card_header d-flex align-items-sm-center align-items-start flex-sm-row flex-column gap-2">
                <h6>{{ plan.title }}</h6>
                <p>{{ plan.titleDes }}</p>
              </div>
              <div class="tariff-card_line"></div>
              <div class="tariff-card_body d-flex justify-content-between flex-xl-row flex-lg-column flex-md-row flex-column">
                <div class="tariff-payment d-flex flex-column gap-3">
                  <div>
                    <h6>Оплата за первый месяц</h6>
                    <div style="margin-bottom: 15px;">
                      <h5>от <span>{{ plan.paymentFirstMonthPrice }}</span></h5>
                      <p>{{ plan.paymentFirstMonthDes }}</p>
                    </div>
                    <div>
                      <h5>от <span>{{ plan.paymentFirstMonthPrice2 }}</span></h5>
                      <p>{{ plan.paymentFirstMonthDes2 }}</p>
                    </div>
                  </div>
                  <div>
                    <h6>Оплата за следующие месяцы</h6>
                    <div style="margin-bottom: 15px;">
                      <h5>от <span>{{ plan.paymentNextMonthPrice }}</span></h5>
                      <p>{{ plan.paymentNextMonthDes }}</p>
                    </div>
                    <div>
                      <h5>от <span>{{ plan.paymentNextMonthPrice2 }}</span></h5>
                      <p>{{ plan.paymentNextMonthDes2 }}</p>
                    </div>
                  </div>
                </div>
                <div class="tariff-services">
                  <h6>Включенные услуги</h6>
                  <ul>
                    <li>
                      <span>{{ plan.tariffServicesListTitle1}}</span>
                      <br>
                      <p>{{ plan.tariffServicesListDes1}}</p>
                    </li>
                    <li>
                      <span>{{ plan.tariffServicesListTitle2}}</span>
                      <br>
                      <p>{{ plan.tariffServicesListDes2}}</p>
                    </li>
                    <li>
                      <span>{{ plan.tariffServicesListTitle3}}</span>
                      <br>
                      <p>{{ plan.tariffServicesListDes3}}</p>
                    </li>
                    <li>
                      <span>{{ plan.tariffServicesListTitle4}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tariff-card_line"></div>
              <div class="tariff-warning">
                <p><span>*</span>В первый месяц осуществляется настройка, запуск и поддержка. В следующие месяцы — поддержка</p>
                <p><span>*</span>Рекламный бюджет не входит в стоимость данного тарифного плана</p>
              </div>
              <div class="tariff-card_footer d-flex justify-content-between flex-xxl-row flex-column">
                <div class="tariff-budget flex-wrap gap-2 d-flex justify-content-between align-items-center">
                  <div class="tariff-budget_text">
                    <p>Рекомендуемый бюджет</p>
                    <span>(в зависимости от ниши)</span>
                  </div>
                  <p>{{ plan.tariffReccomendBudget }}</p>
                </div>
                <button @click="showModal = true">Оставить заявку</button>
              </div>
            </div>
          </div>
        </div>
        <div class="points" id="list-item-3">
          <h6 class="title" v-html="currentService.pointTitleOne" ></h6>
          <div class="d-flex justify-content-between flex-wrap gap-4">
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>1</span>
              </div>
              <h6>{{currentService.titlePointOne}}</h6>
              <p>{{currentService.descriptionPointOne}}</p>
            </div>
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>2</span>
              </div>
              <h6>{{currentService.titlePointTwo}}</h6>
              <p>{{currentService.descriptionPointTwo}}</p>
            </div>
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>3</span>
              </div>
              <h6>{{currentService.titlePointThree}}</h6>
              <p>{{currentService.descriptionPointThree}}</p>
            </div>
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>4</span>
              </div>
              <h6>{{currentService.titlePointFour}}</h6>
              <p>{{currentService.descriptionPointFour}}</p>
            </div>
          </div>
        </div>
        <div class="aboutService" id="list-item-4">
          <h6 class="title" v-html="currentService.aboutServiceTitleOne" ></h6>
          <div class="aboutService-first">
            <span>{{ currentService.aboutServiceTitleText1 }}</span>
            <p>{{ currentService.aboutServiceDescriptionText1 }}</p>
          </div>
          <div class="aboutService-first">
            <span>{{ currentService.aboutServiceTitleText2 }}</span>
            <p>{{ currentService.aboutServiceDescriptionText2 }}</p>
          </div>
          <div class="aboutService-first">
            <span>{{ currentService.aboutServiceTitleText3 }}</span>
            <p>{{ currentService.aboutServiceDescriptionText3 }}</p>
          </div>
          <div class="aboutService-first">
            <span>{{ currentService.aboutServiceTitleText4 }}</span>
            <p>{{ currentService.aboutServiceDescriptionText4 }}</p>
          </div>
          <div class="aboutService-first">
            <span>{{ currentService.aboutServiceTitleText5 }}</span>
            <p>{{ currentService.aboutServiceDescriptionText5 }}</p>
          </div>
        </div>
        <div class="aboutService" id="list-item-5">
          <h6 class="title" v-html="currentService.aboutServiceTitleTwo" ></h6>
          <ul>
            <li><span>{{ currentService.aboutServiceTitleList1 }}</span></li>
            <li><span>{{ currentService.aboutServiceTitleList2 }}</span></li>
            <li><span>{{ currentService.aboutServiceTitleList3 }}</span></li>
          </ul>
          <p v-html="currentService.aboutServiceDescriptionList1"></p>
        </div>
        <div class="servicesSlider" id="list-item-6">
          <h5 class="title" ><span>Реализованные</span> кейсы</h5>
          <cases-slider ></cases-slider>
        </div>
        <div class="points" id="list-item-7">
          <h6 class="title" v-html="currentService.pointTitleTwo" ></h6>
          <div class="d-flex justify-content-between flex-wrap gap-4">
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>1</span>
              </div>
              <h6>{{currentService.title2PointOne}}</h6>
              <p>{{currentService.description2PointOne}}</p>
            </div>
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>2</span>
              </div>
              <h6>{{currentService.title2PointTwo}}</h6>
              <p>{{currentService.description2PointTwo}}</p>
            </div>
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>3</span>
              </div>
              <h6>{{currentService.title2PointThree}}</h6>
              <p>{{currentService.description2PointThree}}</p>
            </div>
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>4</span>
              </div>
              <h6>{{currentService.title2PointFour}}</h6>
              <p>{{currentService.description2PointFour}}</p>
            </div>
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>5</span>
              </div>
              <h6>{{currentService.title2PointFive}}</h6>
              <p>{{currentService.description2PointFive}}</p>
            </div>
            <div class="service-point">
              <div class="service-point_img">
                  <img src="@/assets/images/chevrone.png" alt="">
                  <span>6</span>
              </div>
              <h6>{{currentService.title2PointSix}}</h6>
              <p>{{currentService.description2PointSix}}</p>
            </div>
          </div>
        </div>
      </div>
      <b-modal ref="modal"  v-model="showModal" id="modal-center" centered> 
                    <h6>Оставьте заявку и наш менеджер свяжется с вами в ближайшее время</h6>
                    <form action="URL" class="requestServiceForm" name="requestServiceForm">
                        <div class="requestServiceForm-inpts d-flex flex-wrap justify-content-between">
                            <div class="requestServiceForm-input">
                                <p>Имя*</p>
                                <input type="text" required> 
                            </div>
                            <div class="requestServiceForm-input">
                                <p>Телефон*</p>
                                <input type="number" required>
                            </div>
                            <div class="requestServiceForm-input">
                                <p>Электронная почта</p>
                                <input type="text">
                            </div>
                            <div class="requestServiceForm-input">
                                <p>Ваш проект*</p>
                                <input type="text" required>
                            </div>
                            <div class="requestServiceForm-input">
                                <p>Вид услуги*</p>
                                <v-select v-model="value" :options="options"/>
                            </div>
                            <div class="requestServiceForm-input">
                                <p>Комментарий к заявке*</p>
                                <textarea v-model="review" name="requestServiceFormYoursQuestion" maxlength="500" required v-on:input="autoExpand"></textarea>
                            </div>
                        </div>
                        <div class="footer-question_footer d-flex justify-content-between align-items-lg-center align-items-start flex-lg-row flex-column gap-lg-0 gap-4 mt-5">
                            <p>Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных</p>
                            <div class="footer-question_btn d-flex align-items-center gap-5 flex-sm-row flex-column">
                            капча
                                <main-button style="padding: 20px 30px; font-size: 22px; line-height: 31px;">Отправить</main-button>
                            </div>
                        </div>
                </form>
      </b-modal>
    </section>

    <div class="line"></div>
  </template>
  <script>
  import mainButton from '@/components/UI/mainButton'
  import { BBreadcrumb } from 'bootstrap-vue-3'
  import accordion from '@/components/accordion'
  import accordionItem from '@/components/accordion-item'
  import casesSlider from '@/components/casesSlider'
  import vSelect from "vue-select";
  
  export default {
    components: {
      mainButton,
      BBreadcrumb,
      accordion,
      accordionItem,
      casesSlider,
      vSelect
    },
    props: {
      serviceCardLink1: String,
      serviceCardLink2: String
    },
    data() {
      return {
        showModal: false,
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
            plans: [
              { 
                title: 'Light',
                titleDes: 'Для быстрого старта с небольшим бюджетом',
                paymentFirstMonthPrice: '2 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '3 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 200 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '1 600 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Горячее» ядро',
                tariffServicesListDes1: 'прорабатываются основные ключевые слова, ключевые слова общего характера не добавляются',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 200–300',
              },
              { 
                title: 'Optimum',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '3 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '4 500 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 600 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 000 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Широкое» ядро',
                tariffServicesListDes1: 'прорабатываются «горячие» и основные ключевые слова общего характера',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 300–600',
              },
              { 
                title: 'Full',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '4 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '6 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '2 000 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 500 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: 'Максимально «широкое» ядро',
                tariffServicesListDes1: 'прорабатываются не только «горячие», но и ключевые слова общего характера',
                tariffServicesListTitle2: '3 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffServicesListTitle4: 'Поисковая и баннерная реклама',
                tariffReccomendBudget: 'от $ 600',
              }
            ],
            serviceDescription: 'ООО «TheLead Media» предлагает услуги профессиональной разработки сайтов в Ташкенте. Над созданием интернет-магазинов, корпоративных проектов и других ресурсов работают квалифицированные специалисты с большим опытом.<br><br>Для создания сайтов в Узбекистане используются лучшие CMS (системы управления веб-содержимым) и другие программы, подбор которых осуществляется индивидуально. Персональный подход применяется и при выборе тарифных пакетов, рассчитанных на сайты разных типов и масштабов.',
            seriveServicesTitle: 'Услуги <span>по созданию WEB-сайтов</span>',
            serviceCardTitle1: 'qwe',
            serviceCardDescription1: 'qwe',
            serviceCardLink1: 'landing',
            serviceCardTitle2: 'qw2e',
            serviceCardDescription2: 'qw3e',
            serviceCardLink2: 'market',
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
            ],
            plans: [
              { 
                title: 'Light',
                titleDes: 'Для быстрого старта с небольшим бюджетом',
                paymentFirstMonthPrice: '2 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '3 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 200 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '1 600 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Горячее» ядро',
                tariffServicesListDes1: 'прорабатываются основные ключевые слова, ключевые слова общего характера не добавляются',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 200–300',
              },
              { 
                title: 'Optimum',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '3 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '4 500 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 600 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 000 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Широкое» ядро',
                tariffServicesListDes1: 'прорабатываются «горячие» и основные ключевые слова общего характера',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 300–600',
              },
              { 
                title: 'Full',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '4 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '6 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '2 000 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 500 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: 'Максимально «широкое» ядро',
                tariffServicesListDes1: 'прорабатываются не только «горячие», но и ключевые слова общего характера',
                tariffServicesListTitle2: '3 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffServicesListTitle4: 'Поисковая и баннерная реклама',
                tariffReccomendBudget: 'от $ 600',
              }
            ],
            serviceDescription: 'ООО «TheLead Media» оказывает комплекс услуг, направленный на повышение эффективности сайтов.<br><br>Одним из направлений нашей деятельности является seo-продвижение. Большой опыт и применение лучших методов позволили нам достичь солидных результатов в продвижении сайтов в Ташкенте. Ознакомьтесь с общим описанием услуги и особенностями нашего предложения.<br><br>Если вас заинтересовала перспектива заказать качественную seo-оптимизацию в Узбекистане, обратитесь к нашему консультанту по телефону +998 (99) 498-32-12.',
            seriveServicesTitle: 'Услуги <span>по SEO-продвижению</span>',
            serviceCardTitle1: 'qwe',
            serviceCardDescription1: 'qwe',
            serviceCardLink1: 'landing',
            serviceCardTitle2: 'qw2e',
            serviceCardDescription2: 'qw3e',
            serviceCardLink2: 'market',
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
                id: 4,
                title: 'Этапы настройки и ведения контекстной рекламы'
              },
              {
                id: 5,
                title: 'Результаты поддержки контекстной рекламы '
              },
              {
                id: 6,
                title: 'Реализованные кейсы'
              },
              {
                id: 7,
                title: 'Почему нам доверяют настройку рекламы?'
              },
              {
                id: 8,
                title: 'Задать вопрос'
              }
            ],
            plans: [
              { 
                title: 'Light',
                titleDes: 'Для быстрого старта с небольшим бюджетом',
                paymentFirstMonthPrice: '2 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '3 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 200 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '1 600 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Горячее» ядро',
                tariffServicesListDes1: 'прорабатываются основные ключевые слова, ключевые слова общего характера не добавляются',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 200–300',
              },
              { 
                title: 'Optimum',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '3 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '4 500 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 600 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 000 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Широкое» ядро',
                tariffServicesListDes1: 'прорабатываются «горячие» и основные ключевые слова общего характера',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 300–600',
              },
              { 
                title: 'Full',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '4 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '6 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '2 000 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 500 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: 'Максимально «широкое» ядро',
                tariffServicesListDes1: 'прорабатываются не только «горячие», но и ключевые слова общего характера',
                tariffServicesListTitle2: '3 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffServicesListTitle4: 'Поисковая и баннерная реклама',
                tariffReccomendBudget: 'от $ 600',
              }
            ],
            serviceDescription: 'ООО «TheLead Media» предлагает профессиональные услуги контекстной рекламы в Узбекистане. Работы проводятся квалифицированными специалистами.<br><br>В компании применяется дифференцированный подход к обслуживанию. Мы подбираем оптимальные тарифные пакеты в зависимости от требований и возможностей каждого клиента.',
            seriveServicesTitle: 'Услуги <span>контекстной рекламы</span>',
            serviceCardTitle1: 'Яндекс.Директ',
            serviceCardDescription1: 'Реклама в поисковой системе Яндекс и на сайтах-партнерах Яндекс',
            serviceCardLink1: 'yandex',
            serviceCardTitle2: 'Google Ads',
            serviceCardDescription2: 'Реклама для пользователей, которые принадлежат к заранее настроенной аудитории',
            serviceCardLink2: 'google',
            pointTitleOne: '<span>Как контекстная реклама</span> поможет вашему проекту?',
            pointTitleTwo: '<span>Почему нам</span> доверяют настройку рекламы?',
            titlePointOne: 'Увеличение количества заявок / звонков / продаж',
            descriptionPointOne: 'Гарантированный рост количества обращений с интернет-рекламы в течение 2-х дней',
            titlePointTwo: 'Плановое снижение цены обращения',
            descriptionPointTwo: 'Снижение стоимости обращения с интернет-рекламы на 30% в течении 60 дней',
            titlePointThree: 'Обоснованная стратегия развития проекта',
            descriptionPointThree: 'Разработка стратегии интернет-рекламы на несколько месяцев с медиапланом',
            titlePointFour: 'Прогноз заявок на основе статистики',
            descriptionPointFour: 'Прогноз заявок на несколько месяцев на основе систем веб-аналитики',
            aboutServiceTitleOne: 'Этапы настройки и ведения <span>контекстной рекламы</span>',
            aboutServiceTitleText1: 'Предварительный анализ',
            aboutServiceDescriptionText1: 'Брифинг с клиентом   /  Изучение бизнеса клиента  /  Анализ конкурентов  /  Определение KPI рекламной кампании',
            aboutServiceTitleText2: 'Настройка систем аналитики',
            aboutServiceDescriptionText2: 'Настройка систем аналитики  /  Подготовка оффера под целевые аудитории  /  Подготовка креативов для рекламных кампаний',
            aboutServiceTitleText3: 'Настройка рекламных кампаний',
            aboutServiceDescriptionText3: 'Настройка рекламных кампаний в поиске  /  Настройка рекламных кампаний в сетях  /  Настройка ретаргетинговых рекламных кампаний',
            aboutServiceTitleText4: 'Запуск рекламной кампании',
            aboutServiceDescriptionText4: 'Проверка рекламных кампаний по чек-листу перед запуском  /  Запуск рекламной кампании  /  Корректировка и оптимизация рекламных кампаний',
            aboutServiceTitleText5: 'Масштабирование рекламной кампании',
            aboutServiceDescriptionText5: 'Подготовка отчета по результатам рекламной кампании и выполненным KPI  /  Подготовка предложений по оптимизации масштабированию рекламных кампаний',
            aboutServiceTitleTwo: 'Результаты поддержки <span>контекстной рекламы</span> ',
            aboutServiceTitleList1: 'Уменьшение количества «грязного» трафика, который на этапе создания невозможно предвидеть',
            aboutServiceTitleList2: '«Очищение» ядра ключевиков (ключевые слова / фразы) от неэффективных запросов',
            aboutServiceTitleList3: 'Уменьшение стоимости действий пользователей (клика /  конверсии / целевого действия)',
            aboutServiceDescriptionList1: 'В среднем наша поддержка контекстной рекламы экономит клиентам до 25% средств из рекламного бюджета.<br><br>Специалисты нашей компании проводят обслуживанию каждого клиента по индивидуальному плану.<br><br>Виды работ, сроки, стоимость и другие особенности определяются после ознакомления с требованиями заказчика и его Интернет-ресурсом.<br><br>В зависимости от этих факторов сотрудники подбирают оптимальный тарифный пакет и другие условия обслуживания.',
            title2PointOne: 'Вовлеченность',
            description2PointOne: 'Вначале мы изучаем бизнес клиента, а уже после выстраиваем план работ',
            title2PointTwo: 'Аналитика',
            description2PointTwo: 'Создаем оптимальную систему продаж и удобные инструменты аналитики',
            title2PointThree: 'Стратегия',
            description2PointThree: 'Разрабатываем индвидуальную стратегию продвижения для каждого клиента',
            title2PointFour: 'Оптимизация',
            description2PointFour: 'Оптимизируем стоимость привлечения клиента с помощью методологии',
            title2PointFive: 'Сотрудники',
            description2PointFive: 'Опытные специалисты в сфере Интернет-рекламы, seo-продвижения, копирайтинга',
            title2PointSix: 'Прозрачность',
            description2PointSix: 'Мы ничего не скрываем от наших клиентов',
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
            ],
            plans: [
              { 
                title: 'Light',
                titleDes: 'Для быстрого старта с небольшим бюджетом',
                paymentFirstMonthPrice: '2 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '3 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 200 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '1 600 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Горячее» ядро',
                tariffServicesListDes1: 'прорабатываются основные ключевые слова, ключевые слова общего характера не добавляются',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 200–300',
              },
              { 
                title: 'Optimum',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '3 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '4 500 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 600 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 000 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Широкое» ядро',
                tariffServicesListDes1: 'прорабатываются «горячие» и основные ключевые слова общего характера',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 300–600',
              },
              { 
                title: 'Full',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '4 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '6 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '2 000 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 500 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: 'Максимально «широкое» ядро',
                tariffServicesListDes1: 'прорабатываются не только «горячие», но и ключевые слова общего характера',
                tariffServicesListTitle2: '3 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffServicesListTitle4: 'Поисковая и баннерная реклама',
                tariffReccomendBudget: 'от $ 600',
              }
            ],
            serviceDescription: 'ООО «TheLead Media» предлагает услуги по размещению на Гугл картах в Ташкенте и других городах Узбекистана. Работы проводят квалифицированные специалисты.<br><br>Для продвижения в Google My Business используются самые эффективные и многократно проверенные методы. Клиентам обеспечены приемлемые для Узбекистана расценки и индивидуальный подход в обслуживании.<br><br>Ознакомьтесь с общим описанием услуг по регистрации на Гугл картах. Также на этой странице выделены особенности сервиса от нашей компании.',
            seriveServicesTitle: 'Услуги <span>по продвижению на GoogleMaps</span>',
            serviceCardTitle1: 'qwe',
            serviceCardDescription1: 'qwe',
            serviceCardLink1: 'landing',
            serviceCardTitle2: 'qw2e',
            serviceCardDescription2: 'qw3e',
            serviceCardLink2: 'market',
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
            ],
            plans: [
              { 
                title: 'Light',
                titleDes: 'Для быстрого старта с небольшим бюджетом',
                paymentFirstMonthPrice: '2 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '3 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 200 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '1 600 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Горячее» ядро',
                tariffServicesListDes1: 'прорабатываются основные ключевые слова, ключевые слова общего характера не добавляются',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 200–300',
              },
              { 
                title: 'Optimum',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '3 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '4 500 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 600 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 000 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Широкое» ядро',
                tariffServicesListDes1: 'прорабатываются «горячие» и основные ключевые слова общего характера',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 300–600',
              },
              { 
                title: 'Full',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '4 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '6 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '2 000 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 500 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: 'Максимально «широкое» ядро',
                tariffServicesListDes1: 'прорабатываются не только «горячие», но и ключевые слова общего характера',
                tariffServicesListTitle2: '3 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffServicesListTitle4: 'Поисковая и баннерная реклама',
                tariffReccomendBudget: 'от $ 600',
              }
            ],
            serviceDescription: 'ООО «TheLead Media» предлагает услуги по размещению на Яндекс.Картах в Ташкенте и других городах Узбекистана. Все работы проводят квалифицированные специалисты с большим опытом.<br><br>Для оказания помощи в регистрации на Yandex бизнес используются максимально эффективные и проверенные методы. Клиентам обеспечена приемлемая для Узбекистана стоимость раскрутки сайта на Яндекс картах и персональный подход в обслуживании.<br><br>Ознакомьтесь с общим описанием услуги, предлагаемой на этой странице.',
            seriveServicesTitle: 'Услуги <span>по продвижению на Яндекс.Карты</span>',
            serviceCardTitle1: 'qwe',
            serviceCardDescription1: 'qwe',
            serviceCardLink1: 'landing',
            serviceCardTitle2: 'qw2e',
            serviceCardDescription2: 'qw3e',
            serviceCardLink2: 'market',
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
            ],
            plans: [
              { 
                title: 'Light',
                titleDes: 'Для быстрого старта с небольшим бюджетом',
                paymentFirstMonthPrice: '2 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '3 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 200 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '1 600 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Горячее» ядро',
                tariffServicesListDes1: 'прорабатываются основные ключевые слова, ключевые слова общего характера не добавляются',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 200–300',
              },
              { 
                title: 'Optimum',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '3 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '4 500 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '1 600 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 000 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: '«Широкое» ядро',
                tariffServicesListDes1: 'прорабатываются «горячие» и основные ключевые слова общего характера',
                tariffServicesListTitle2: '2 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffReccomendBudget: '$ 300–600',
              },
              { 
                title: 'Full',
                titleDes: 'Для полноценного запуска на длительный срок',
                paymentFirstMonthPrice: '4 000 000 сум',
                paymentFirstMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentFirstMonthPrice2: '6 000 000 сум',
                paymentFirstMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                paymentNextMonthPrice: '2 000 000 сум',
                paymentNextMonthDes: 'за одну систему: Google Ads или Яндекс.Директ',
                paymentNextMonthPrice2: '2 500 000 сум',
                paymentNextMonthDes2: 'за две системы: Google Ads и Яндекс.Директ',
                tariffServicesListTitle1: 'Максимально «широкое» ядро',
                tariffServicesListDes1: 'прорабатываются не только «горячие», но и ключевые слова общего характера',
                tariffServicesListTitle2: '3 варианта текстовых объявлений',
                tariffServicesListDes2: '',
                tariffServicesListTitle3: 'Реклама для мобильных',
                tariffServicesListDes3: 'общая, не выделяется отдельным объявлением',
                tariffServicesListTitle4: 'Поисковая и баннерная реклама',
                tariffReccomendBudget: 'от $ 600',
              }
            ],
            serviceDescription: 'ООО «TheLead Media» предлагает профессиональные услуги копирайтинга в Ташкенте и других городах Узбекистана.<br><br>Работы по написанию, корректировке и редактированию текстов проводят квалифицированные специалисты с большим опытом.<br><br>Помощь копирайтеров может предоставляться отдельно или в комплексе с другими сео-услугами компании. Качество обслуживания сочетается с приемлемой для Узбекистана стоимостью копирайтинга (от 50 тыс. сум за тысячу знаков с пробелами).<br><br>Ознакомьтесь с общим описанием услуги, предлагаемой на этой странице, основными принципами и методами нашей работы.',
            seriveServicesTitle: 'Услуги <span>копирайтинга</span>',
            serviceCardTitle1: 'qwe',
            serviceCardDescription1: 'qwe',
            serviceCardLink1: 'landing',
            serviceCardTitle2: 'qw2e',
            serviceCardDescription2: 'qw3e',
            serviceCardLink2: 'market',
          },
        ],
        currentService: null,
        currentSlug: null,
        options: [
              { value: "Создание WEB-сайтов", label: "Создание WEB-сайтов" },
              { value: "SEO-продвижение", label: "SEO-продвижение" },
              { value: "Контекстная реклама в Google и Яндекс", label: "Контекстная реклама в Google и Яндекс" },
              { value: "Продвижение на GoogleMaps", label: "Продвижение на GoogleMaps" },
              { value: "Продвижение на Яндекс.Карты", label: "Продвижение на Яндекс.Карты" },
              { value: "Услуги копирайтинга", label: "Услуги копирайтинга" },
            ],
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
      },
    },
    mounted() {
      this.$refs.serviceAccordion1.isOpen = true;
      this.$refs.serviceAccordion2.isOpen = false;
      this.$refs.serviceAccordion3.isOpen = false;
      this.$refs.innerAccordion.isOpen = true;
    },
    methods: {
    scrollToListItem(categoryId) {
      const listItem = document.querySelector(`#list-item-${categoryId}`);
      if (listItem) {
        const yOffset = -150;
        const y = listItem.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    },
    openModal() {
        this.$refs.modal.show();
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
    min-width: 310px;
    padding-right: 50px;
    border-right: 2px solid transparent;
    border-image:  linear-gradient(180deg, #0E1531 0%, #1F355E 4.27%, #1F355E 41.86%, #1F355E 95.18%, #0E1531 100%);
    border-image-slice: 1;
    position: sticky;
    top: 150px;
    left: 0;
    max-height: 2000px;
    height: 100%;
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
  .services-service_card h4{
    font-size: 44px;
    line-height: 53px;
    font-weight: 600;
    word-break: break-all;
  }
  .services-service_card{
    padding: 40px 50px 50px;
    background: var(--gradRadial1);
    border: 3px solid transparent;
    border-image:  linear-gradient(22.06deg, #1C7095 0%, #0E1531 100%);
    border-image-slice: 1;
    width: 48%;
  }
  .services-service_card p,
  .services-service_card a{
    font-size: 22px;
    line-height: 31px;
    color: var(--textBlue1);
    margin: 30px 0;
  }
  .services-service_card a{
    margin: 0;
    color: var(--textBlue2);
  }
  /* service form */
  .service-form{
    background: var(--gradRadial1);
    border: 3px solid transparent;
    border-image:  linear-gradient(22.06deg, #1C7095 0%, #0E1531 100%);
    border-image-slice: 1;
    padding: 35px 50px 50px;
    margin-top: 50px;
  }
  .service-form h6{
    font-size: 44px;
    line-height: 62px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .service-form h6 span{
    color: var(--textYellow);
    font-weight: 500;
  }
  .service-form h5{
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 40px;
  }
  .service-form h5 span{
    color: var(--btnRed2);
    font-weight: 500;
  }
  .service-content{
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  /* tariff-plans */
  .tariff-plans {
    margin-top: 110px;
  }

  /* points */
  .service-point{
    width: 47%;
  }
  .service-point_img{
    display: flex;
    align-items: center;
  }
  .service-point span{
    font-size: 60px;
    line-height: 84px;
    color: var(--btnRed2);
    margin-left: 20px;
    font-weight: 900;
  }
  .service-point h6{
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 15px;
    font-weight: 600;
  }
  .service-point p{
    font-size: 22px;
    line-height: 31px;
    color: var(--textBlue1);
  }
  /* aboutService */
  .aboutService{
    margin-top: 110px;
  }
  .aboutService span{
    font-size: 30px;
    line-height: 42px;
    font-weight: 500;
  }
  .aboutService p{
    font-size: 22px;
    line-height: 31px;
    color: var(--textBlue1);
    margin-top: 20px;
  }
  .aboutService-first{
    margin-bottom: 40px;
  }
  .aboutService li{
    list-style: disc;
  }
  .aboutService ul{
    padding-left: 20px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .servicesSlider{
    margin: 100px 0;
  }
  /* tariff cards */
  .tariff-card{
    width: 100%;
    background: var(--gradRadial1);
    padding: 35px 50px 50px;
    border: 2px solid transparent;
    border-image:  linear-gradient(22.06deg, #1C7095 0%, #0E1531 100%);
    border-image-slice: 1;
    margin-bottom: 50px;
  }
  .tariff-card_line{
    display: block;
    width: 100%;
    height: 2px;
    background: #1F355E;
    margin: 30px 0;
  }
  .tariff-services,
  .tariff-payment{
    width: 47%;
  }
  .tariff-card h6{
    color: var(--textYellow);
  }
  .tariff-card_header h6{
    font-size: 44px;
    line-height: 62px;
    font-weight: 600;
    margin-right: 35px;
  }
  .tariff-card_header p,
  .tariff-card_body h6{
    font-size: 22px;
    line-height: 31px;
  }
  .tariff-card_body h6{
    font-weight: 600;
    margin-bottom: 15px;
  }
  .tariff-payment h5,
  .tariff-services span{
    font-size: 22px;
    line-height: 31px;
    margin-bottom: 5px;
  }
  .tariff-payment h5 span{
    font-weight: 600;
  }
  .tariff-card_body p,
  .tariff-warning p{
    font-size: 18px;
    line-height: 25px;
    color: var(--textBlue1);
  }
  .tariff-services ul{
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .tariff-services li{
    list-style: disc;
  }
  .tariff-warning p:last-of-type{
    margin-top: 10px;
  }
  .tariff-warning p span{
    color: var(--btnRed2);
    margin-right: 5px;
  }
  .tariff-card_footer{
    margin-top: 30px;
    gap: 50px;
  }
  .tariff-budget{
    border: 2px solid var(--backBlack2);
    width: 100%;
    padding: 10px 20px;
  }
  .tariff-budget p{
    font-size: 30px;
    line-height: 42px;
    font-weight: 600;
    white-space: nowrap;
  }
  .tariff-budget_text p{
    font-size: 22px;
    line-height: 31px;
    font-weight: 400;
  }
  .tariff-budget_text span{
    font-size: 18px;
    line-height: 25px;
  }
  .tariff-card_footer button{
    font-size: 22px;
    line-height: 31px;
    padding: 21px 30px;
    border: 1px solid var(--btnRed2);
    color: var(--btnRed2);
    background: none;
    white-space: nowrap;
    max-width: 250px;
  }
  .subAccordion .accordion-content a.active{
  color: white;
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
    .service-navigation{
      padding-right: 30px;
    }
    .service-form .requestServiceForm-input{
      width: 100%;
    }
    .services-service_card{
      width: 100%;
    }
    .service-point{
      width: 100%;
    }
    .tariff-services,
    .tariff-payment{
      width: 100%;
    }
    .tariff-services{
      margin-top: 15px;
    }
  }
  @media (max-width:992px){
    .header{
        height: 741px;
    }
    .service-navigation{
      display: none;
    }
    .main-button{
      padding: 15px 20px;
    }
    .service-point{
      width: 48%;
    }
    .tariff-services,
    .tariff-payment{
      width: 48%;
    }
    .tariff-services{
      margin-top: unset;
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
    .service-point{
      width: 100%;
    }
    .tariff-services,
    .tariff-payment{
      width: 100%;
    }
    .tariff-services{
      margin-top: 15px;
    }
    .tariff-card{
      padding: 20px;
    }
  }
  @media (max-width:576px){
    .header{
      height: 485px;
    }
    .mainHeader,
    .mainHeaderBack{
      display: none;
    }
    .header-text p{
      margin-top: 50px;
    }
    .service-description p{
      font-size: 18px;
      margin-top: 30px;
      line-height: 25px;
    }
    .service-description{
      margin-bottom: 40px;
    }
    .breadcrumbs{
      display: none;
    }
    .services-service_card{
      padding: 20px;
    }
    .services-service_card h4,
    .service-form h6{
      font-size: 30px;
      line-height: 40px;
    }
    .services-service_card p,
    .services-service_card a{
      font-size: 18px;
      line-height: 25px;
      margin: 15px 0;
    }
    .services-service_card a{
      margin: 0;
    }
    .service-form{
      margin-top: 20px;
      padding: 20px;
    }
    .service-form h5{
      font-size: 22px;
      line-height: 31px;
    }
    .service-form .footer-question_btn{
      width: 100%;
    }
    .service-point img{
      max-width: 43px;
    }
    .service-point span{
      font-size: 38px;
      line-height: 47px;
      margin-left: 10px;
    }
    .service-point h6{
      font-size: 22px;
      line-height: 31px;
    }
    .service-point p{
      font-size: 18px;
      line-height: 25px;
    }
    .aboutService{
      margin-top: 70px;
    }
    .aboutService span{
      font-size: 22px;
      line-height: 31px;
    }
    .aboutService p{
      font-size: 18px;
      line-height: 25px;
      margin-top: 10px;
    }
    .tariff-card_header h6{
      font-size: 30px;
      line-height: 40px;
    }
    .tariff-card_header p,
    .tariff-card_body h6,
    .tariff-payment h5,
    
    .tariff-card_body p
    {
      font-size: 18px;
      line-height: 25px;
    }
    .tariff-warning p{
      font-size: 16px;
      line-height: 22px;
    }
    .tariff-services span{
      font-size: 20px;
      line-height: 28px;
    }
    .tariff-budget_text p{
      font-size: 20px;
      line-height: 28px;
      font-weight: 400;
      white-space: normal;
    }
    .tariff-budget_text span{
      font-size: 16px;
      line-height: 22px;
    }
    .tariff-budget p{
      font-size: 28px;
      line-height: 39px;
    }
    .tariff-card_footer button{
      width: 100%;
    }
  }
</style>
