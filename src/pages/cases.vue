<template>
    <section class="header d-flex align-items-center">
      <div class="my-container">
        <h3>Реализованные кейсы</h3>
      </div>
    </section>
    <div class="my-container">
        <section class="breadcrumbs">
            <b-breadcrumb class="breadcrumbs-links">
            <b-breadcrumb-item class="breadcrumb-link" @click="$router.push('/')">Главная</b-breadcrumb-item>
            <span class="breadcrumb-icon"><img src="@/assets/images/icons/chevroneBread.svg"/></span>
            <b-breadcrumb-item  active>Кейсы</b-breadcrumb-item>
            </b-breadcrumb>
        </section>
        <section class="case-cards d-flex flex-wrap">
            <div v-for="(card, index) in cards" :key="index" class="case-card">
               <router-link :to="card.link" >
                 <img :src="card.image" alt="">
                 <div class="case-text">
                   <h6>{{card.title}}</h6>
                   <p>{{card.text}}</p>
                 </div>
               </router-link>
             </div>
        </section>
    </div>
    <div class="line"></div>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        image: require('@/assets/images/cases/case (1).png'),
        title: 'dildorakasimova',
        text: 'Разработка сайта',
        link: '/cases/dildorakasimova',
      },
      {
        image: require('@/assets/images/cases/case (2).png'),
        title: 'Gross.uz',
        text: 'SEO-продвижение',
        link: '/cases/gross',
      },
      {
        image: require('@/assets/images/cases/case (3).png'),
        title: 'TerraPro.uz',
        text: 'Контекстная реклама',
        link: '/cases/terrapro',
      },
      {
        image: require('@/assets/images/cases/case (5).png'),
        title: 'АКТИОН МЦФЭР.uz',
        text: 'Контекстная реклама',
        link: '/cases/action-mcfr',
      },
      {
        image: require('@/assets/images/cases/case (4).png'),
        title: 'mtlp.uz',
        text: 'Копирайтинг',
        link: '/cases/mtlp',
      },
      {
        image: require('@/assets/images/cases/case (6).png'),
        title: 'ziynatdesign.uz',
        text: 'Контекстная реклама',
        link: '/cases/ziynatdesign',
      },
      {
        image: require('@/assets/images/cases/case (7).png'),
        title: 'equip.uz',
        text: 'Копирайтинг',
        link: '/cases/equip',
      },
      {
        image: require('@/assets/images/cases/case (8).png'),
        title: '2work.uz',
        text: 'Копирайтинг',
        link: '/cases/2work',
      },
      {
        image: require('@/assets/images/cases/case (9).png'),
        title: 'ikarvon.uz',
        text: 'Копирайтинг',
        link: '/cases/ikarvon',
      },
      {
        image: require('@/assets/images/cases/case (10).png'),
        title: 'arton.uz',
        text: 'Контекстная реклама',
        link: '/cases/arton',
      },
      {
        image: require('@/assets/images/cases/case (11).png'),
        title: 'avatrade.uz',
        text: 'Контекстная реклама',
        link: '/cases/avatrade',
      },
      {
        image: require('@/assets/images/cases/case (12).png'),
        title: 'gorodknig.uz',
        text: 'SEO-продвижение',
        link: '/cases/gorodknig',
      },
      {
        image: require('@/assets/images/cases/case (13).png'),
        title: 'leading.uz',
        text: 'SEO-продвижение',
        link: '/cases/leading',
      },
      {
        image: require('@/assets/images/cases/case (14).png'),
        title: 'aksa.uz',
        text: 'Контекстная реклама',
        link: '/cases/aksa',
      },
    ],
  }),
};
</script>
<style scoped>
    .header{
        height: 282px;
        padding-top: unset;
    }
    .header h3{
        font-size: 60px;
        line-height: 72px;
        font-weight: 600;
    }
    .case-card{
        max-width: 460px;
        background: white;
    }
    .case-cards{
        gap: 50px;
    }
    .case-text{
        padding: 11px 20px;
    }
    .case-text h6{
        font-size: 30px;
        line-height: 42px;
        color: var(--backBlack3);
        font-weight: 600;
    }
    .case-text p{
        font-size: 22px;
        line-height: 31px;
        color: var(--backBlack1);
    }
    @media (max-width: 1200px){
      
    }
    @media (max-width: 576px){
        .header h3{
            font-size: 40px;
            line-height: 50px;
        }
       .case-card{
           max-width: unset;
           width: 100%;
       }
       .case-card img{
           width: 100%;
       }
    }
</style>