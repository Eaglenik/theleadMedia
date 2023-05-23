<template>
    <div>
        <section class="header">
                 <div class="header-back my-container">
                     <div class="header-text">
                         <h1>Оказание услуг в области онлайн-маркетинга</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                         <mainButton>Обсудить проект</mainButton>
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
                 <img class="mainHeader" src="@/assets/images/header/mainHeader.png" alt="">
                 <img class="topHeader" src="@/assets/images/header/topHeader.png" alt="">
        </section>
        <section class="synopsis my-container">
                 <h5>Вас приветствует ООО «TheLead Media»</h5>
                 <p>Мы компания, объединившая несколько проектов и предлагающая широкий спектр услуг.<br><br>
                     Основными направлениями нашей деятельности являются интернет-маркетинг и продвижение сайтов в Узбекистане.<br><br>
                     Мы практикуем индивидуальный подход с применением креативных нестандартных решений. Реклама через интернет и профессиональная раскрутка сайтов, которую предлагает TheLead Media, дают максимально эффективные результаты.</p>
                 <b-row class="synopsis-statistics">
                     <b-col cols="12" sm="6" lg="3" class="synopsis-statistic">
                         <span>10 лет</span>
                         <p>опыт работы на рынке онлайн-услуг</p>
                     </b-col>
                     <b-col cols="12" sm="6" lg="3" class="synopsis-statistic">
                         <span>50+</span>
                         <p>реализованных кейсов</p>
                     </b-col>
                     <b-col cols="12" sm="6" lg="3" class="synopsis-statistic">
                         <span>50+</span>
                         <p>рекламных кампаний</p>
                     </b-col>
                     <b-col cols="12" sm="6" lg="3" class="synopsis-statistic">
                         <span>50+</span>
                         <p>клиентов среди крупного, среднего и малого бизнеса</p>
                     </b-col>
                 </b-row>
                 <h6 class="synopsis-last_p">Нам доверяют крупнейшие компании, и вы также сможете в этом убедиться, воспользовавшись нашими услугами</h6>
        </section>
        <section class="services my-container d-flex flex-wrap justify-content-between">
             <services-card
                 v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :price="card.price"
                :image="card.image"
                :description="card.description"
                :slug="card.slug"/>
        </section>
        <div class="line"></div> 
        <section class="request-back">
             <div class="my-container d-flex flex-lg-row flex-column justify-content-between gap-sm-5 gap-2">
                 <div class="request-task d-flex flex-lg-column flex-md-row-reverse flex-column align-items-center justify-content-between">
                     <div class="request-task_text">
                         <h6><span>Есть</span> задача<span>?</span></h6>
                         <p><span>Но не знаете</span> какая услуга <span>подойдет именно вам?</span></p>
                         <div class="request-form_wrapper">
                             <p class="d-lg-none d-md-block d-none">Свяжитесь <span>с нами</span></p>
                             <p class="d-lg-none d-md-block d-none"><span>Мы предложим</span> решение!</p>
                         </div>
                     </div>
                     <div class="request-task_img">
                         <img src="@/assets/images/task-front.png" alt="">
                         <img src="@/assets/images/task-back.png" alt="">
                     </div>
                 </div>
                 <div class="request-form_wrapper">
                     <p class="d-lg-block d-md-none d-block">Свяжитесь <span>с нами</span></p>
                     <p class="d-lg-block d-md-none d-block"><span>Мы предложим</span> решение!</p>
                     <form action="URL" class="request-form">
                         <div class="request-form_inpt">
                             <p>Имя*</p>
                             <input type="text" name="requestFormName" required>
                         </div>
                         <div class="request-form_inpt">
                             <p>Телефон*</p>
                             <input type="text" name="requestFormPhone" required>
                         </div>
                         <div class="request-form_inpt">
                             <p>Ваш проект*</p>
                             <input type="text" name="requestFromYoursProject" required>
                         </div>
                         <div class="request-form_inpt">
                             <p>Ваш вопрос*</p>
                             <textarea v-model="review" name="requestFormYoursQuestion" maxlength="500" required v-on:input="autoExpand"></textarea>
                         </div>
                         <p>Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных</p>
                         <div class="request-form_btns d-flex align-items-center justify-content-between flex-sm-row flex-column gap-sm-5 gap-3">
                             капча
                             <mainButton class="request-form_btn" name="request-form_btn">Отправить</mainButton>
                         </div>
                     </form>
                 </div>
             </div>
        </section>
        <section class="packages my-container">
             <h5 class="title"><span>Комплексные</span> пакеты</h5>
             <div class="packegaes-cards d-flex justify-content-between flex-wrap">
                 <package-card title="Business" price="30 000 000 сум" :items="['Создание лендинг-страницы', 'Duis aute irure dolor in reprehenderit', 'Voluptate velit esse cillum', 'Dolore eu fugiat nulla pariatur', 'Excepteur sint occaecat cupidatat', 'Nisi ut aliquip ex ea commodo consequat']"></package-card>
                 <package-card title="Optimal" price="50 000 000 сум" :items="['Создание web-сайта с уникальным дизайном', 'Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor incididunt', 'Ut labore et dolore magna aliqua', 'Ut enim ad minim veniam']"></package-card>
                 <package-card title="Premium" price="100 000 000 сум" :items="['Создание web-сайта на шаблоне', 'Sed ut perspiciatis unde', 'But who has any right', 'Nor again is there anyone', 'But who has any right', 'Sed ut perspiciatis unde']"></package-card>
                 </div>
                 <form action="URL" class="package-card package-card_form w-100">
                     <h6>Индивидуальный пакет</h6>
                     <p>Свяжитесь с нами и мы подберем для вашего проекта оптимальный набор услуг</p>
                     <div class="individual-card_inpts d-flex justify-content-between flex-wrap">
                         <div class="request-form_inpt">
                             <p>Имя*</p>
                             <input type="text" name="individualFormName" required>
                         </div>
                         <div class="request-form_inpt">
                             <p>Телефон*</p>
                             <input type="text" name="individualFormPhone" required>
                         </div>
                         <div class="request-form_inpt">
                             <p>Ваш проект*</p>
                             <input type="text" name="individualFromYoursProject" required>
                         </div>
                     </div>
                     <div class="individual-card_footer flex-lg-row flex-column-reverse d-flex justify-content-between align-items-lg-center align-items-start gap-md-0 gap-4">
                         <div>капча</div>
                         <div class="d-flex flex-md-row flex-column align-items-md-center align-items-start gap-4">
                             <p>Нажимая на кнопку «Оставить заявку», вы даете согласие на обработку персональных данных</p>
                             <button>Оставить заявку</button>
                         </div>
                     </div>
                 </form>
        </section>
        <div class="line"></div>
        <section class="projects-back">
                 <div class="projects my-container">
                     <h5 class="title"><span>Другие</span> проекты компании</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                     <div class="projects-cards d-flex justify-content-between flex-wrap">
                         <router-link to="/projects/pc.uz" class="project-card" style="background:radial-gradient(72.63% 76.45% at 78.31% 10.82%, #FFED00 0%, #FC9D03 100%);" >
                             <img src="@/assets/images/projects/projects1.png" alt="">
                             <p><span>PC.uz </span>— уникальный по структуре и максимально простой в обращении цифровой IT-рынок Узбекистана<br><br>
                             Тщательная сортировка по разделам и категориям позволит вам в считанные минуты найти именно то, что вам нужно</p>
                             <img src="@/assets/images/services-card/services-chevrone.svg" alt="">
                        </router-link >
                         <router-link to="/projects/stroyvitrina.uz" class="project-card" style="background:radial-gradient(67.44% 74.61% at 27.61% 88.39%, #FD8F95 0%, #F00037 100%);">
                             <img src="@/assets/images/projects/projects2.png" alt="">
                             <p><span>StroyVitrina.uz</span> — строительный Интернет-портал<br><br>
                             Здесь вы сможете найти в изобилии строительные товары и услуги, отсортированные по категориям для максимального удобства поиска</p>
                             <img src="@/assets/images/services-card/services-chevrone.svg" alt="">
                         </router-link>
                         <router-link to="/projects/sprav.uz" class="project-card" style="background:radial-gradient(73.58% 77.55% at 78.29% 9.73%, #B5E8FF 0%, #1C7095 100%);">
                             <img src="@/assets/images/projects/projects3.png" alt="">
                             <p><span>Sprav.uz</span> — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua<br><br>
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco tempor incididunt ut labore et dolore magna</p>
                             <img src="@/assets/images/services-card/services-chevrone.svg" alt="">
                         </router-link>
                         <router-link to="/projects/mebelvitrina.uz" class="project-card" style="background:radial-gradient(67.44% 74.61% at 27.61% 88.39%, #FD8F95 0%, #F00037 100%);">
                             <img src="@/assets/images/projects/projects4.png" alt="">
                             <p><span>MebelVitrina.uz</span> — lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua<br><br>
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco tempor incididunt ut labore et dolore magna</p>
                             <img src="@/assets/images/services-card/services-chevrone.svg" alt="">
                         </router-link>
                     </div>
                     <h5 class="title"><span>Реализованные</span> кейсы</h5>
                     <casesSlider></casesSlider>
                 </div>
        </section>
        <section class="advantages my-container">
            <h6 class="title">Преимущества</h6>
            <div class="advantages-content d-flex flex-wrap justify-content-between gap-1">
                <div class="advantages-block">
                    <div class="advantages-block_img">
                        <img src="@/assets/images/chevrone.png" alt="">
                        <span>1</span>
                    </div>
                    <h6>Широкий спектр услуг</h6>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <div class="advantages-block">
                    <div class="advantages-block_img">
                        <img src="@/assets/images/chevrone.png" alt="">
                        <span>2</span>
                    </div>
                    <h6>Персональный подход</h6>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <div class="advantages-block">
                    <div class="advantages-block_img">
                        <img src="@/assets/images/chevrone.png" alt="">
                        <span>3</span>
                    </div>
                    <h6>Опытные консультанты</h6>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <div class="advantages-block">
                    <div class="advantages-block_img">
                        <img src="@/assets/images/chevrone.png" alt="">
                        <span>4</span>
                    </div>
                    <h6>Работа с задачами любой сложности</h6>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <div class="advantages-block">
                    <div class="advantages-block_img">
                        <img src="@/assets/images/chevrone.png" alt="">
                        <span>5</span>
                    </div>
                    <h6>Полная прозрачность и легитимность</h6>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
                <div class="advantages-block">
                    <div class="advantages-block_img">
                        <img src="@/assets/images/chevrone.png" alt="">
                        <span>6</span>
                    </div>
                    <h6>Дифференцированные тарифы</h6>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
            </div>
        </section>
        <div class="line"></div>
        <section class="partners-back">
            <div class="partners my-container">
                <h6 class="title"><span>Нам</span> доверяют</h6>
                <logo-slider></logo-slider>
                <div class="partners-line"></div>
                <reviews-partners></reviews-partners>
            </div>
        </section>
    </div>
</template>

<script>
import mainButton from '@/components/UI/mainButton.vue'
import packageCard from '@/components/packageCard.vue'
import servicesCard from '@/components/servicesCard.vue'
import casesSlider from '@/components/casesSlider.vue'
import logoSlider from '@/components/logoSlider'
import reviewsPartners from '@/components/reviewsPartners'

export default {
    components: {
        mainButton,
        packageCard,
        servicesCard,
        casesSlider,
        logoSlider,
        reviewsPartners
    },
    data() {
        return{
            review: '',
            cards: [
        {
          title: '<span>Создание</span> WEB-сайтов', 
          price: '10 000 000 сум/мес', 
          description: 'Предлагаем услуги профессиональной разработки сайтов в Ташкенте. Над созданием интернет-магазинов, корпоративных проектов и других ресурсов работают квалифицированные специалисты с большим опытом.',
          image: 'services-card_img7.png',
          slug: 'web'
        },
        {
          title: 'SEO <span>-продвижение</span>', 
          price: '4 000 000 сум/мес', 
          description: 'Search Engine Optimization (поисковая оптимизация) представляет собой один из распространенных способов привлечения пользователей на сайты. Результат достигается за счет повышения позиций ресурса в выдаче поисковых систем.',
          image: 'services-card_img1.png',
          slug: 'seo'
        },
        {
          title: 'Контекстная реклама <span>в Google и Яндекс</span>', 
          price: '2 000 000 сум/мес', 
          description: 'Профессиональные услуги контекстной рекламы в Узбекистане. Работы проводят квалифицированные специалисты.',
          image: 'services-card_img2.png',
          slug: 'google-yandex-ads'
        },
        {
          title: '<span>Продвижение на</span> GoogleMaps', 
          price: '1 000 000 сум/мес', 
          description: 'Услуги по размещению на Гугл картах в Ташкенте и других городах Узбекистана. Работы проводят квалифицированные специалисты.',
          image: 'services-card_img3.png',
          slug: 'google-maps'
        },
        {
          title: '<span>Продвижение на</span> Яндекс.Карты', 
          price: '500 000 сум/мес', 
          description: 'Профессиональные услуги копирайтинга в Ташкенте и других городах Узбекистана. Работы по написанию, корректировке и редактированию текстов проводят квалифицированные специалисты с большим опытом.',
          image: 'services-card_img4.png',
          slug: 'yandex-maps'
        },
        {
          title: '<span>Услуги</span> копирайтинга', 
          price: '50 000 сум/ 1 000 знаков', 
          description: 'Предлагаем услуги профессиональной разработки сайтов в Ташкенте. Над созданием интернет-магазинов, корпоративных проектов и других ресурсов работают квалифицированные специалисты с большим опытом.',
          image: 'services-card_img5.png',
          slug: 'copywriting'
        },
      ],
        }
    },
    methods: {
    autoExpand(event) {
      const element = event.target;
      element.style.height = '75px';
      element.style.height = `${element.scrollHeight}px`;
    },
  },
}
</script>

<style>
    .header{
        background: var(--gradVertical);
        position: relative;
        height: 846px;
    }
    .header-text{
        max-width: 874px;
        position: relative;
        z-index: 10;
        margin-top: 155px;
    }
    .header-text h1{
        font-size: 60px;
        line-height: 72px;
        font-weight: 600;
    }
    .header-text p{
        font-size: 30px;
        line-height: 42px;
        color: var(--textBlue1);
        margin: 60px 0 80px 0;
    }
    .chevrone-horizontal,
    .mainHeader,
    .topHeader{
        position: absolute;
    }
    .mainHeader{
        top: 65px;
        right: 0;
    }
    .topHeader{
        top: 0;
        right: 0;
    }
    .chevrone-horizontal{
        left: -70px;
        bottom: 0;
    }
    .chevrR{
        opacity: 0.4;
    }
    .chevrW{
        opacity: 0.1;
    }
    .chevrW:hover{
        opacity: 0.5;
    }
    .chevrR:hover{
        opacity: 0.8;
    }
    /* synopsis */
    .synopsis{
        margin-top: 110px;
        margin-bottom: 50px;
    }
    .synopsis h5{
        font-size: 44px;
        line-height: 53px;
        font-weight: 600;
        margin-bottom: 40px;
    }
    .synopsis p{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue1);
        margin-bottom: 55px;
    }
    .synopsis-statistic span{
        font-size: 60px;
        line-height: 72px;
        color: var(--btnRed2);
        font-weight: 900;
    }
    .synopsis-statistics {
        margin-bottom: 80px;
        text-align: center;
        row-gap: 20px;
    }
    .synopsis-statistic p{
        margin-bottom: 0;
    }
    .synopsis h6{
        font-size: 30px;
        line-height: 42px;
        color: white;
        font-weight: 500;
    }
    /* request */
    .request-back{
        background: var(--gradVertical);
        margin-bottom: 110px;
    }
    .request-task,
    .request-form_wrapper{
        width: 48%;
    }
    .request-task span{
        color: #FECA34;
    }
    .request-task h6{
        font-size: 60px;
        line-height: 72px;
        margin-bottom: 30px;
        font-weight: 600;
    }
    .request-task p,
    .request-form_wrapper p{
        font-size: 44px;
        line-height: 62px;
        margin-bottom: 80px;
        font-weight: 500;
    }
    .request-task_text{
        max-width: 620px;
    }
    .request-task h6 span{
        font-weight: 600;
    }
    .request-task p span{
        font-weight: 500;
    }
    .request-form{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .request-form p{
        font-size: 18px;
        line-height: 25px;
        color: var(--textBlue1);
    }
    .request-form_wrapper p{
        margin-bottom: 0;
    }
    .request-form_inpt p{
        margin-left: 12px;
        margin-bottom: 5px;
    }
    .request-form_wrapper p:nth-of-type(2){
        margin-bottom: 40px;
    }
    .request-form_wrapper span{
        color: var(--btnRed2);
        font-weight: 500;
    }
    .request-form_inpt input,
    .request-form_inpt textarea{
        background: none;
        border: 2px solid var(--backBlack3);
        padding: 21px 30px;
        font-size: 22px;
        line-height: 31px;
        width: 100%;
        outline: none;
        color: white;
    }
    .request-form_inpt textarea{
        resize: none;
        overflow: hidden;
        height: 73px;
    }
    .request-task_img{
        position: relative;
        max-width: 750px;
        width: 100%;
        height: 750px;
    }
    .request-task_img img{
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    .request-task_img img:last-of-type{
        mix-blend-mode: overlay;
    }
    .request-task_img img:first-of-type{
        z-index: 10;
    }
    /* package cards */
    .package-card{
        background: var(--gradRadial2);
        padding: 30px 50px 50px;
        border: 3px solid transparent;
        border-image:  linear-gradient(22.06deg, #1C7095 0%, #0E1531 100%);
        border-image-slice: 1;
        width: 31%;
    }
    .package-card h6{
        font-size: 44px;
        line-height: 62px;
        color: var(--textYellow);
        font-weight: 600;
    }
    .package-card p,
    .package-card_list li{
        font-size: 22px;
        line-height: 31px;
        color: white;
    }
    .package-card p span{
        font-weight: 600;
        font-size: 30px;
        line-height: 42px;
        margin-left: 8px;
    }
    .package-card_line{
        display: block;
        width: 100%;
        height: 2px;
        background: var(--backBlack2);
        margin: 30px 0 35px 0;
    }
    .package-card_list li{
        color: var(--textBlue1);
        margin-bottom: 25px;
        list-style: disc;
        margin-left: 20px;
    }
    .package-card a{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue2);
        margin-bottom: 40px;
        display: block;
    }
    .package-card_form{
        margin-top: 50px;
    }
    .package-card_form p{
        font-size: 30px;
        line-height: 42px;
    }
    .package-card_form h6{
        margin-bottom: 20px;
    }
    .individual-card_inpts{
        margin-top: 20px;
    }
    .individual-card_inpts .request-form_inpt{
        width: 31%;
    }
    .individual-card_inpts p,
    .individual-card_footer p{
        font-size: 18px;
        line-height: 25px;
        color: var(--textBlue1);
        max-width: 456px;
    }
    .individual-card_footer{
        margin-top: 40px;
    }
    /* projects */
    .projects-back{
        background: var(--gradVertical);
        padding-bottom: 130px;
    }
    .project-card{
        padding: 40px 50px 50px;
        width: 31%;
    }
    .projects p{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue1);
        margin-bottom: 50px;
    }
    .project-card p{
        font-size: 22px;
        line-height: 31px;
        color: white;
        margin: 50px 0 30px 0;
    }
    .project-card p span{
        font-weight: 600;
    }
    .projects-cards{
        margin-bottom: 110px;
        row-gap: 40px;
    }
    /* advantages */
    .advantages{
        margin-top: 130px;
    }
    .advantages-block{
        width: 31%;
    }
    .advantages-block_img{
        display: flex;
        align-items: center;
    }
    .advantages-block_img span{
        font-size: 60px;
        line-height: 84px;
        color: var(--btnRed2);
        font-weight: 900;
        margin-left: 20px;
    }
    .advantages-block h6{
        font-size: 30px;
        line-height: 42px;
        margin: 15px 0;
    }
    .advantages-block p{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue1);
    }
    /* partners */
    .partners-back{
        background: var(--gradVertical);
        padding-bottom: 130px;
    }
    .partners-line{
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, rgba(28, 112, 149, 0) 17.01%, #1C7095 100%);
        margin: 50px 0;
    }

    /* media */
    @media (max-width:1400px){
        .header{
            height: 570px;
        }
        .mainHeader{
            max-width: 684px;
            top: 53px;
        }
        .topHeader{
            max-height: 280px;
        }
        .header-text{
            margin-top: 44px;
        }
        .header-text p{
            margin: 35px 0 45px 0;
        }
        .request-task_img{
        height: 650px;
        }
    }
    @media (max-width:1200px){
        .advantages-block_img span{
            font-size: 50px;
            line-height: 70px;
        }
        .advantages-block h6{
            font-size: 28px;
            line-height: 39px;
            word-break: break-all;
        }
        .advantages-block p{
            font-size: 20px;
            line-height: 28px;
        }
        .project-card{
            width: 48%;
        }
        .request-task_img{
        height: 470px;
        }
        .mainHeader{
            max-width: 620px;
            top: 103px;
        }
        .topHeader{
            max-height: 280px;
        }
        .header-text{
            margin-top: 44px;
        }
        .header-text h1{
            font-size: 48px;
            line-height: 58px;
        }
        .header-text p{
            max-width: 515px;
            font-size: 28px;
            line-height: 39px;
        }
        .chevrR,
        .chevrW{
            max-width: 77px;
        }
        .chevrone-horizontal{
            left: -160px;
        }
        .synopsis h5{
            font-size: 40px;
            line-height: 48px;
            margin-bottom: 35px;
        }
        .synopsis p{
            font-size: 20px;
            line-height: 28px;
        }
        .synopsis-statistic span{
            font-size: 50px;
            line-height: 60px;
        }
        .synopsis-statistic p{
            font-size: 20px;
            line-height: 28px;
        }
        .synopsis-statistics{
            margin-bottom: 60px;
        }
        .synopsis h6{
            font-size: 28px;
            line-height: 40px;
        }
        .request-task h6{
            font-size: 40px;
            line-height: 48px;
        }
        .request-task p, .request-form_wrapper p{
            font-size: 28px;
            line-height: 39px;
        }
        .request-form p{
            font-size: 18px;
            line-height: 25px;
        }
        .request-form_btn{
            font-size: 20px;
            line-height: 28px;
        }
        .request-form_inpt input, .request-form_inpt textarea{
            padding: 15px 20px 18px 20px;
        }
        .package-card h6{
            font-size: 40px;
            line-height: 56px;
        }
        .package-card p, .package-card_list li, .package-card a, .package-card button{
            font-size: 20px;
            line-height: 28px;
        }
        .package-card p span, .package-card_form p{
            font-size: 28px;
            line-height: 39px;
        }
        .package-card_line{
            margin: 25px 0;
        }
        .individual-card_footer p,.individual-card_inpts p{
            font-size: 16px;
            line-height: 22px;
        }
        .package-card{
            width: 48%;
        }
        .packegaes-cards{
            row-gap: 40px;
        }
    }
    @media (max-width:992px){
        .advantages-block{
            width: 48%;
        }
        .advantages{
            margin-top: 90px;
        }
        .projects p{
            font-size: 20px;
            line-height: 28px;
        }
        .header{
            height: 741px;
        }
        .mainHeader{
            max-width: 592px;
            top: 293px;
        }
        .header-text{
            margin-top: 30px;
        }
        .header-text p{
            max-width: unset;
        }
        .request-task, .request-form_wrapper{
            width: 100%;
        }
        .request-task_text,
        .request-task_img{
            width: 48%;
        }
        .package-card{
            width: 100%;
        }
        .individual-card_inpts{
            row-gap: 20px;
        }
        .individual-card_inpts .request-form_inpt{
            width: 48%;
        }
        .individual-card_inpts .request-form_inpt:last-of-type{
            width: 100%;
        }
    }
    @media (max-width:768px){
        .project-card{
            width: 100%;
        }
        .my-container{
            padding: 0 20px;
        }
        .header{
            height: 741px;
        }
        .mainHeader{
            max-width: 592px;
            top: 293px;
        }
        .header-text{
            margin-top: 30px;
        }
        .header-text h1{
            font-size: 44px;
            line-height: 53px;
        }
        .header-text p{
            font-size: 26px;
            line-height: 36px;
        }
        .request-task_text{
            width: 100%;
        }
        .request-task img{
            width: 80%;
        }
        .request-task_text{
            text-align: center;
        }
        .request-form_wrapper{
            text-align: center;
        }
        .request-form_inpt p{
            text-align: start;
        }
        .request-task_img,
        .request-task_img img{
            width: 100%;
        }
        .advantages-block{
            width: 100%;
        }
    }
    @media (max-width:576px){
        .projects-cards{
            margin-bottom: 50px;
        }
        .project-card{
            padding: 20px;
        }
        .projects p{
            font-size: 18px;
            line-height: 25px;
        }
        .header{
            height: 878px;
        }
        .header-text h1{
            font-size: 38px;
            line-height: 47px;
        }
        .header-text p{
            font-size: 22px;
            line-height: 31px;
            margin-top: 330px;
        }
        .mainHeader{
            max-width: 360px;
            top: 36vh;
        }
        .chevrR,
        .chevrW{
            max-width: 60px;
        }
        .synopsis h5{
            font-size: 30px;
            line-height: 40px;
            margin-bottom: 20px;
        }
        .synopsis p{
            font-size: 18px;
            line-height: 25px;
            margin-bottom: 30px;
        }
        .synopsis-statistics{
            text-align: start;
            margin-bottom: 40px;
        }
        .synopsis-statistic span{
            font-size: 38px;
            line-height: 47px;
        }
        .synopsis-statistic p{
            margin-bottom: 0;
        }
        .synopsis h6{
            font-size: 22px;
            line-height: 31px;
        }
        .synopsis{
            margin-top: 50px;
        }
        
        .request-task h6{
            font-size: 30px;
            line-height: 40px;
            margin-bottom: 15px;
        }
        .request-task p, .request-form_wrapper p{
            font-size: 22px;
            line-height: 31px;
        }
        .request-form_inpt p,
        .request-form p:last-of-type{
            font-size: 16px;
            line-height: 22px;
        }
        .request-form_inpt input, .request-form_inpt textarea{
            font-size: 18px;
            line-height: 25px;
        }
        .request-task_text p:first-of-type{
            margin-bottom: 30px;
        }
        .request-form_btn{
            font-size: 18px;
            line-height: 25px;
            padding: 16px 0;
            margin-bottom: 30px;
        }
        .package-card h6{
            font-size: 30px;
            line-height: 40px;
        }
        .package-card{
            padding: 15px 20px 20px;
        }
        .package-card p, .package-card_list li, .package-card a, .package-card button{
            font-size: 18px;
            line-height: 25px;
        }
        .package-card_line{
            margin: 20px 0;
        }
        .package-card p span, .package-card_form p{
            font-size: 22px;
            line-height: 31px;
        }
        .individual-card_inpts .request-form_inpt{
            width: 100%;
        }
        .individual-card_footer p, .individual-card_inpts p{
            font-size: 16px;
            line-height: 22px;
        }
        .package-card button{
            width: 100%;
        }
        .advantages{
            margin-top: 50px;
        }
        .advantages-block_img img{
            max-width: 43px;
        }
        .advantages-block_img span{
            font-size: 38px;
            line-height: 47px;
            margin-left: 10px;
        }
        .advantages-block h6{
            font-size: 22px;
            line-height: 31px;
            margin: 10px 0;
        }
        .advantages-block p{
            font-size: 18px;
            line-height: 25px;
        }
        .projects-back{
            padding-bottom: 50px;
        }
    }
</style>