<template>
    <div class="project-header">
      <div class="my-container">
        <p>{{ currentProject.title }}</p>
        <a href="#!">Перейти на сайт</a>
      </div>
    </div>
    <section class="breadcrumbs my-container">
      <b-breadcrumb class="breadcrumbs-links">
        <b-breadcrumb-item class="breadcrumb-link" @click="$router.push('/')">Главная</b-breadcrumb-item> 
        <span class="breadcrumb-icon"><img src="@/assets/images/icons/chevroneBread.svg"/></span>
        <b-breadcrumb-item  active>Проекты</b-breadcrumb-item>
        <span class="breadcrumb-icon"><img src="@/assets/images/icons/chevroneBread.svg"/></span>
        <b-breadcrumb-item  active>{{ currentProject.title }}</b-breadcrumb-item>
      </b-breadcrumb>
    </section>
    <section class="project-info my-container d-flex justify-content-between gap-4">
      <div class="project-img">
        <img :src="require(`@/assets/images/projects/${currentProject.img}`)" alt="">
      </div>
      <div class="d-flex justify-content-between w-100 flex-md-row flex-column-reverse gap-4" style="max-width: 800px">
        <div class="project-monthVisits">
        <h6>Ежемесячная посещаемость</h6>
        <div class="project-visits_number">
          <img src="@/assets/images/projects/arrow.png" alt="">
          <span>{{currentProject.monthVisit}}</span>
        </div>
        <p>посетителей</p>
        <a href="#!" class="project-download">Скачать медиакит</a>
        </div>
        <div class="project-dayVisits">
        <h6>Ежедневная посещаемость</h6>
        <div class="project-visits_number">
          <img src="@/assets/images/projects/arrow.png" alt="">
          <span>{{currentProject.dayVisit}}</span>
        </div>
        <p>уникальных пользователей</p>
        </div>
      </div>
    </section>
    <div class="project-text my-container">
      <span style="margin-bottom: 50px; display: block;">Сайт имеет официальный статус электронного СМИ. Свидетельство №0965 от 17.07.2019 г.</span>
      <div class="project-paragraphOne">
        <h5>О {{currentProject.aboutProject}}</h5>
        <p v-html="currentProject.paragraphOne"></p>
      </div>
      <div class="project-paragraphTwo">
        <h5>{{currentProject.paragraphTitle}}</h5>
        <p v-html="currentProject.paragraphTwo"></p>
      </div>
    </div>
    <div class="line"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            slug: 'pc.uz',
            title: 'IT-портал PC.uz',
            img: 'pc.png',
            content: 'This is project 1 content.',
            monthVisit: '25 000',
            dayVisit: '1000',
            aboutProject: 'портале',
            paragraphOne: 'PC.uz – уникальный по своей структуре и максимально простой в обращении цифровой IT-рынок Узбекистана.<br><br>Посетив его лишь раз, вы останетесь полны впечатлений на всю оставшуюся жизнь от изобилия товаров компьютерных технологий, особенно если вы сами реализуетесь или уже реализовались в сфере ИТ!Тщательная сортировка по разделам и категориям позволит вам в считанные минуты найти среди всего этого «компьютерного Эльдорадо» именно то, что вам нужно.<br><br> И это относится не только к товарам — на сайте вы встретите также и разделы с услугами в тематической сфере и компаниями, которые, собственно, все вышеперечисленное вам и предоставляют.К слову, зарегистрировавшись на PC.uz, вы и сами сможете предложить свои услуги и товары.<br><br> Мы вложили неописуемо много усилий в создание наиболее оптимальных условий для поиска клиентов поставщикам ИТ-услуг и продавцам компьютерной техники в Узбекистане.А тем из вас, кто посетит сайт просто для того, чтобы отвести душу и отдохнуть, мы предлагаем насладиться последними новостями из мира информационных технологий, почитать о последних брендах и топах.Информация обновляется ежедневно, всегда достоверная, подробная и на максимально доступном языке.<br><br>Главный принцип наших авторов: «Меньше терминов — больше удовольствия читателю!»',
            paragraphTitle: 'It is a long established fact that a reader will be distracted',
            paragraphTwo: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.<br><br>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
          },
          {
            slug: 'stroyvitrina.uz',
            title: 'Строительный портал StroyVitrina.uz',
            img: 'vitrina.png',
            content: 'This is project 2 content.',
            monthVisit: '24 000',
            dayVisit: '1000',
            aboutProject: 'портале',
            paragraphOne: 'PC.uz – уникальный по своей структуре и максимально простой в обращении цифровой IT-рынок Узбекистана.<br><br>Посетив его лишь раз, вы останетесь полны впечатлений на всю оставшуюся жизнь от изобилия товаров компьютерных технологий, особенно если вы сами реализуетесь или уже реализовались в сфере ИТ!Тщательная сортировка по разделам и категориям позволит вам в считанные минуты найти среди всего этого «компьютерного Эльдорадо» именно то, что вам нужно.<br><br> И это относится не только к товарам — на сайте вы встретите также и разделы с услугами в тематической сфере ибы отвести душу и отдохнуть, мы предлагаем насладиться последними новостями из мира информационных технологий, почитать о последних брендах и топах.Информация обновляется ежедневно, всегда достоверная, подробная и на максимально доступном языке.<br><br>Главный принцип наших авторов: «Меньше терминов — больше удовольствия читателю!»',
            paragraphTitle: 'It is a long established fact that a reader will be distracted',
            paragraphTwo: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and weny web sites still in their infancy.<br><br>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
          },
          {
            slug: 'sprav.uz',
            title: 'Справочник Ташкента Sprav.uz',
            img: 'sprav.png',
            content: 'This is project 3 content.',
            monthVisit: '23 000',
            dayVisit: '1000',
            aboutProject: 'справочнике',
            paragraphOne: 'PC.uz – уникальный по своей структуре и максимально простой в обращении цифровой IT-рынок Узбекистана.<br><br>Посетив его лишь раз, вы останетесь полны впечатлений на всю оставшуюся жизнь от изобилия товаров компьютерных технологий, особенно если вы сами реализуетесь или уже реализовались в сфере ИТ!Тщательная сортировка по разделам и категориям позволит вам в считанные минуты найти среди всего этого «компьютерного Эльдорадо» именно то, что вам нужно.<br><br> И это относится не только к товарам — на сайте вы встретите также и разделы с услугами в тематической сфере и компаниями, которые, собственно, все вышеперечисленное вам и предоставляют.К слову, зарегистрировавшись на PC.uz, вы и сами сможете предложить свои услуги и товары.<br><br> Мы вложили неописуемо много усилий в создание наиболешу и отдохнуть, мы предлагаем насладиться последними новостями из мира информационных технологий, почитать о последних брендах и топах.Информация обновляется ежедневно, всегда достоверная, подробная и на максимально доступном языке.<br><br>Главный принцип наших авторов: «Меньше терминов — больше удовольствия читателю!»',
            paragraphTitle: 'It is a long established fact that a reader will be distracted',
            paragraphTwo: 'The ptheir default model text, and a search for lorem ipsum will uncover many web sites still фере ИТ!Тщательная сортировка по разделам и категориям позволит вам в считанные минуты найти среди всего этого «компьютерного Эльдорадо» именно то, что вам нужно.<br><br> И это относится не только к товарам — на сайте вы встретите также и разделы с услin their infancy.<br><br>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
          },
          {
            slug: 'mebelvitrina.uz',
            title: 'Мебельный портал MebelVitrina.uz',
            img: 'mebel.png',
            content: 'This is project 4 content.',
            monthVisit: '22 000',
            dayVisit: '1000',
            aboutProject: 'портале',
            paragraphOne: 'PC.uz – уникальный по своей структуре и максимально простой в обращении цифровой IT-рынок Узбекистана.<br><br>Посетив его лишь раз, вы останетесь полны впечатe point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages andletters, as opposed to using Contenлений на всю оставшуюся жизнь от изобилия товаров нформационных технологий, почитать о последних брендах и топах.Информация обновляется ежедневно, всегда достоверная, подробная и на максимально доступном языке.<br><br>Главный принцип наших авторов: «Меньше терминов — больше удовольствия читателю!»',
            paragraphTitle: 'It is a long established fact that a reader will be distracted',
            paragraphTwo: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages andletters, as opposed to using Content here, content here, making it look like readable English.'
          }
        ],
        currentProject: null,
        currentSlug: null
      }
    },
    created() {
      this.currentSlug = this.$route.params.slug
      this.currentProject = this.projects.find(
        project => project.slug === this.currentSlug
      )
    },
    watch: {
      '$route.params.slug'(newValue, oldValue) {
        this.currentSlug = newValue
        this.currentProject = this.projects.find(
          project => project.slug === this.currentSlug
        )
      },
    },
  }
  </script>

  <style scoped>
  .project-header{
    width: 100%;
    background: var(--backBlack3);
    padding: 70px 0;
  }
  .project-header p{
    font-size: 60px;
    line-height: 72px;
    margin-bottom: 40px;
    font-weight: 600;
  }
  .project-header a{
    font-size: 30px;
    line-height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--btnRed1);
    padding: 27px 40px;
    max-width: 350px;
    color: white;
    font-weight: 600;
  }
  .project-info{
    margin-bottom: 40px;
  }
  .project-img {
    padding: 108px 50px;
    border: 3px solid var(--backBlack3);
  }
  .project-img img{
    width: 100%;
  }
  .project-info h6{
    font-size: 30px;
    line-height: 42px;
    font-weight: 600;
  }
  .project-info p{
    font-size: 22px;
    line-height: 31px;
  }
  .project-monthVisits a{
    font-size: 22px;
    line-height: 31px;
    color: var(--btnRed2);
    padding: 21px;
    line-height: 30px;
    border: 1px solid var(--btnRed2);
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .project-info span{
    font-size: 60px;
    line-height: 72px;
    font-weight: 900;
    color: var(--btnRed2);
    margin-left: 20px;
  }
  .project-monthVisits,
  .project-dayVisits{
    max-width: 300px;
  }
  .project-visits_number{
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .project-paragraphOne h5{
    font-size: 60px;
    line-height: 72px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .project-paragraphTwo{
    margin-top: 70px;
  }
  .project-paragraphTwo h5{
    font-size: 44px;
    line-height: 62px;
    font-weight: 500;
    margin-bottom: 25px;
  }
  .project-text p{
    font-size: 22px;
    line-height: 31px;
    color: var(--textBlue1);
  }
  @media(max-width: 1200px){
    .project-info{
      flex-direction: column;
    }
    .project-img{
      max-width: 600px;
      margin-bottom: 30px;
    }
  }
  @media(max-width: 768px){
    .breadcrumbs{
      display: none;
    }
    .project-info{
      margin-top: 50px;
    }
  }
  @media(max-width: 576px){
    .project-header p{
      font-size: 40px;
      line-height: 50px;
    }
    .project-header a{
      font-size: 22px;
      line-height: 31px;
      padding: 20px;
    }
    .project-img{
      padding: 50px;
    }
    .project-info h6{
      font-size: 26px;
      line-height: 33px;
    }
    .project-info span{
      font-size: 45px;
      line-height: 60px;
    }
    .project-info p,
    .project-text p{
      font-size: 18px;
      line-height: 25px;
    }
    .project-paragraphOne h5{
      font-size: 40px;
      line-height: 62px;
      margin-bottom: 30px;
    }
    .project-paragraphTwo h5{
      font-size: 30px;
      line-height: 40px;
    }
  }
</style>