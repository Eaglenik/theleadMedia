<template>
    <section class="header">
      <div class="header-back my-container d-flex justify-content-between align-items-center">
          <div class="header-text">
             <h3>О нас</h3>
          </div>
          <div class="header-imgs">
            <img src="@/assets/images/about/headerFront.png" alt="">
            <img src="@/assets/images/about/headerBack.png" alt="">
          </div>
      </div>
      <img class="topHeader" src="@/assets/images/header/topHeader.png" alt="">
    </section>
    <div class="my-container">
        <section class="breadcrumbs">
          <b-breadcrumb class="breadcrumbs-links">
            <b-breadcrumb-item class="breadcrumb-link" @click="$router.push('/')">Главная</b-breadcrumb-item>
            <span class="breadcrumb-icon"><img src="@/assets/images/icons/chevroneBread.svg"/></span>
            <b-breadcrumb-item  active>О нас</b-breadcrumb-item>
          </b-breadcrumb>
        </section>
        <section class="about-description">
            <h6 class="title">Reader will <span>be distracted</span></h6>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.<br><br> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </section>
        <section class="about-description">
            <h6 class="title">Почему <span>мы?</span></h6>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use.<br><br>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </section>
        <section class="why-we d-flex justify-content-between flex-wrap">
            <div class="why-we_container">
                <div class="why-we_text">
                    <div class="why-we_text--number d-flex align-items-center">
                        <img src="@/assets/images/chevrone.png" alt="">
                        <span>1</span>
                    </div>
                    <h5>Увеличение количества заявок / звонков / продаж</h5>
                    <p>Гарантированный рост количества обращений с интернет-рекламы в течение 2-х дней</p>
                </div>
                <div class="why-we_img">
                    <img src="@/assets/images/about/whyWeFront1.png" alt="">
                    <img src="@/assets/images/about/whyWeBack1.png" alt="">
                </div>
            </div>
            <div class="why-we_container">
                <div class="why-we_img">
                    <img src="@/assets/images/about/whyWeFront2.png" alt="">
                    <img src="@/assets/images/about/whyWeBack2.png" alt="">
                </div>
                <div class="why-we_text">
                    <div class="why-we_text--number d-flex align-items-center">
                        <img src="@/assets/images/chevrone.png" alt="">
                        <span>2</span>
                    </div>
                    <h5>Обоснованная стратегия развития проекта</h5>
                    <p>Разработка стратегии интернет-рекламы на несколько месяцев с медиапланом</p>
                </div>
            </div>
        </section>
        <section class="advantages">
            <h6 class="title"><span>Наши</span> преимущества</h6>
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
        <section class="our-team">
            <h6 class="title"><span>Наша</span> команда</h6>
            <div class="d-flex justify-content-between flex-wrap">
                <div class="our-team_container"><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<br><br>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p></div>
                <div class="our-team_container">
                    <img src="@/assets/images/about/ourTeam1.png" alt="">
                    <img src="@/assets/images/about/ourTeam2.png" alt="">
                    <img src="@/assets/images/about/ourTeam3.png" alt="">
                </div>
            </div>
        </section>
    </div>
    <div class="line"></div>
    <section class="partners-back">
        <div class="partners my-container">
            <h6 class="title"><span>Нам</span> доверяют</h6>
            <reviews-partners></reviews-partners>
        </div>
    </section>
</template>
<script>
import reviewsPartners from '@/components/reviewsPartners.vue';
export default {
    components: {
        reviewsPartners
    }
}
</script>
<style scoped>
    .header{
        height: 362px;
        padding-top: unset;
    }
    .header-imgs{
        height: 362px;
        position: relative;
    }
    .header-imgs img{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .header-imgs img:last-of-type{
        mix-blend-mode: overlay;
        bottom: -75px;
        opacity: 0.5;
    }
    .header-imgs img:first-of-type{
        z-index: 2;
    }
    .header-text h3{
        font-size: 60px;
        line-height: 72px;
        font-weight: 600;
        color: white;
    }
    .about-description{
        margin-bottom: 60px;
    }
    .about-description p,
    .why-we_text p,
    .our-team_container p{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue1);
    }
    /* why we */
    .why-we{
        margin-bottom: 110px;
    }
    .why-we_container{
        width: 47%;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .why-we_img{
        position: relative;
    }
    .why-we_img img{
        width: 100%;
    }
    .why-we_img img:last-of-type{
        position: absolute;
        top: 0;
        right: 0;
        mix-blend-mode: overlay;
    }
    .why-we_img img:first-of-type{
        position: relative;
        z-index: 2;
    }
    .why-we_text--number span{
        font-size: 60px;
        line-height: 84px;
        color: var(--btnRed2);
        margin-left: 20px;
        font-weight: 900;
    }
    .why-we_text h5{
        font-size: 30px;
        line-height: 42px;
        font-weight: 600;
        margin: 15px 0;
    }
    /* our team */
    .our-team{
        margin: 110px 0;
    }
    .our-team_container{
        position: relative;
        width: 47%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .our-team_container img{
        position: absolute;
        width: 100%;
    }
    .our-team_container img:nth-of-type(1){
        z-index: 3;
        max-width: 564px;
    }
    .our-team_container img:nth-of-type(2){
        z-index: 2;
        max-width: 461px;
        mix-blend-mode: overlay;
    }
    .our-team_container img:nth-of-type(3){
        z-index: 1;
        mix-blend-mode: overlay;
        max-width: 660px;
    }
    
    @media (max-width: 1400px){
        
    }
    @media (max-width: 1200px){
        .header-imgs img:last-of-type{
            bottom: -57px;
            max-width: 700px;
        }
        .header-imgs img:first-of-type{
            max-width: 500px;
        }
    }
    @media (max-width: 992px){
        .our-team_container{
            width: 100%;
        }
        .our-team_container:last-of-type{
            height: 500px;
        }
    }
    @media (max-width: 768px){
        .header-imgs img:last-of-type{
            bottom: -40px;
            max-width: 500px;
        }
        .header-imgs img:first-of-type{
            max-width: 400px;
        }
        .header,
        .header-imgs{
            height: 300px;
        }
        .header-text h3{
            font-size: 50px;
            line-height: 62px;
        }
        .why-we_container{
            width: 100%;
        }
        .why-we_container:last-of-type{
            flex-direction: column-reverse;
        }
        .why-we{
            gap: 50px;
        }
    }
    @media (max-width: 576px){
        .header-imgs img:last-of-type{
            bottom: -30px;
            max-width: 350px;
        }
        .header-imgs img:first-of-type{
            max-width: 300px;
        }
        .header,
        .header-imgs{
            height: 240px;
        }
        .header-text h3{
            font-size: 30px;
            line-height: 42px;
        }
        .topHeader{
            max-height: 200px;
        }
        .breadcrumbs{
            margin: 40px 0;
        }
        .about-description p,
        .why-we_text p,
        .our-team_container p{
            font-size: 18px;
            line-height: 25px;
        }
        .why-we_text h5{
            font-size: 24px;
            line-height: 34px;
        }
        .our-team_container:last-of-type{
            height: 440px;
        }
        .our-team{
            margin: 50px 0;
        }
        .why-we{
            margin-bottom: 50px;
        }
    }
</style>