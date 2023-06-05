<template>
    <footer class="footer">
        <div class="footer-question_back">
            <div class="footer-question my-container">
                <div class="footer-question_header d-flex justify-content-between align-items-center flex-md-row flex-column">
                    <div class="footer-question_header--img">
                        <img src="@/assets/images/footer-back.png" alt="">
                        <img src="@/assets/images/footer-front.png" alt="">
                    </div>
                    <div class="footer-question_header--text">
                        <h6><span>Остались</span> вопросы?</h6>
                        <h5>Напишите <span>нам!</span></h5>
                        <p>Наш менеджер свяжется с вами и ответит на все ваши вопросы</p>
                    </div>
                </div>
                <form action="URL" class="footer-question_form">
                    <div class="individual-card_inpts d-flex justify-content-between flex-wrap gap-4">
                         <div class="request-form_inpt">
                             <p>Имя*</p>
                             <input type="text" name="questionFormName" required>
                         </div>
                         <div class="request-form_inpt">
                             <p>Телефон*</p>
                             <input type="number" name="questionFormPhone" required>
                         </div>
                         <div class="request-form_inpt">
                             <p>Электронная почта*</p>
                             <input type="email" name="questionFromYoursProject" required>
                         </div>
                         <div class="request-form_inpt w-100">
                             <p>Ваш вопрос*</p>
                             <textarea v-model="review" name="questionFormYoursQuestion" maxlength="500" required v-on:input="autoExpand"></textarea>
                         </div>
                     </div>
                     <div class="footer-question_footer d-flex justify-content-between flex-lg-row flex-column gap-lg-0 gap-4">
                        <p>Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных</p>
                        <div class="footer-question_btn d-flex align-items-center gap-5 flex-sm-row flex-column">
                            капча
                            <main-button>Отправить</main-button>
                        </div>
                     </div>
                </form>
            </div>
        </div>
        <div v-if="!hideContactFooter && showFooterFooter" class="footer-footer">
            <div class="d-flex justify-content-between flex-lg-row flex-column gap-5">
                <div class="footer-conracts d-flex flex-lg-column flex-sm-row flex-column justify-content-lg-center justify-content-between gap-4">
                    <div class="footer-contact">
                        <h6>+998 99 498 32 12</h6>
                        <a href="#!">Заказать звонок</a>
                    </div>
                    <div class="footer-contact">
                        <h6>info@theleadmedia.uz</h6>
                        <a href="mailto:info@theleadmedia.uz">Написать сообщение</a>
                    </div>
                </div>
                <div class="footer-about d-flex justify-content-between flex-sm-row flex-column">
                    <div class="footer-about_list">
                        <h6>О компании</h6>
                        <div class="d-flex gap-lg-5 ga-1 flex-lg-row flex-column">
                            <ul>
                                <li><router-link to="/about" >О нас</router-link></li>
                                <li><router-link to="/" >Предоставляемые услуги</router-link></li>
                                <li><router-link to="/" >Реализованные кейсы</router-link></li>
                            </ul>
                            <ul>
                                <li><router-link to="/" >Клиенты</router-link></li>
                                <li><router-link to="/" >Отзывы</router-link></li>
                                <li><router-link to="/contact" >Контакты</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-about_list d-lg-none d-block">
                        <h6>Другие наши проекты</h6>
                        <div class="d-flex gap-lg-5 ga-1 flex-lg-row flex-column">
                            <a href="https://pc.uz/">pc.uz</a>
                            <a href="https://stroyvitrina.uz/">stroyvitrina.uz</a>
                            <a href="https://mebelvitrina.uz/">mebelvitrina.uz</a>
                            <a href="https://sprav.uz/">sprav.uz</a>
                        </div>
                    </div>
                </div>
            </div>
            <span class="footerFs d-lg-block d-none">© ООО «TheLead Media» 2021- 2023</span>
        </div>
        <div class="footer-line"></div>
        <div class="footer-projects d-flex justify-content-between">
            <div class="d-lg-none d-block">© ООО «TheLead Media» 2021- 2023</div>
            <h6 class="footerFs">Другие наши проекты</h6>
            <a href="https://pc.uz/">pc.uz</a>
            <a href="https://stroyvitrina.uz/">stroyvitrina.uz</a>
            <a href="https://mebelvitrina.uz/">mebelvitrina.uz</a>
            <a href="https://sprav.uz/">sprav.uz</a>
        </div>
    </footer>
</template>
<script>
import mainButton from './UI/mainButton.vue';
export default {
    components: {
        mainButton
    },
    data() {
        return{
            review: '',
        }
    },
    methods: {
        autoExpand(event) {
          const element = event.target;
          element.style.height = '100px';
          element.style.height = `${element.scrollHeight}px`;
        }, 
    },
    props: {
    showFooterFooter: {
      type: Boolean,
      default: true
    },
    hideContactFooter: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
    .main-button{
        font-size: 22px;
        line-height: 31px;
        padding: 21px 30px;
    }
    .footer{
        width: 100%;
    }
    .footer-question{
        padding-bottom: 120px;
    }
    .footer-question_back{
        background: var(--gradVertical);
        position: relative;
        z-index: 1;
    }
    .footer-question_header--img{
        position: relative;
        height: 600px;
        width: 50%;
    }
    .footer-question_header--img img:first-of-type{
        position: absolute;
        bottom: 0;
        mix-blend-mode: overlay;
    }
    .footer-question_header--img img:last-of-type{
        position: absolute;
        bottom: -33px;
    }
    .footer-question_header--text{
        width: 50%;
        z-index: 100;
    }
    .footer-question_header--text h6{
        font-size: 60px;
        line-height: 72px;
        font-weight: 600;
    }
    .footer-question_header--text h6 span{
        color: var(--textYellow);
        font-weight: 600;
    }
    .footer-question_header--text h5{
        font-size: 44px;
        line-height: 62px;
        font-weight: 500;
        margin: 20px 0 50px 0;
    }
    .footer-question_header--text h5 span{
        font-weight: 500;
        color: var(--btnRed2);
    }
    .footer-question_header--text p{
        font-size: 30px;
        line-height: 42px;
        font-weight: 500;
    }
    .footer-question_form{
        width: 100%;
        background: #17568D;
        padding: 50px 50px 60px;
    }
    .request-form_inpt input,
    .request-form_inpt textarea{
        border: 2px solid var(--textBlue2);
    }
    .request-form_inpt textarea{
        height: 97px;
    }
    .footer-question_footer{
        margin-top: 50px;
    }
    .footer-question_footer p{
        font-size: 18px;
        line-height: 25px;
        color: var(--textBlue1);
        max-width: 720px;
    }
    /* footer footer */
    .footer-footer{
        max-width: 1280px;
        width: 100%;
        padding: 80px 40px;
        margin: 0 auto;
    }
    .footer-projects{
        margin: 0 auto;
        padding: 20px 40px;
        width: 100%;
        max-width: 1100px;
    }
    .footer-line{
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, #0E1531 0%, #1C7095 100%);
    }
    .footer-contact h6,
    .footer-about h6{
        font-size: 30px;
        line-height: 42px;
        font-weight: 500;
    }
    .footer-footer span{
        margin-top: 60px;
        display: block;
    }
    .footer-contact a,
    .footer-about_list li a,
    .footerFs,
    .footer-projects a,
    .footer-about_list a{
        font-size: 22px;
        line-height: 31px;
    }
    .footer-about_list a{
        margin-bottom: 15px;
        color: var(--textBlue1);
    }
    .footer-contact a{
        margin-top: 10px;
        color: var(--textBlue2);
        font-weight: 400;
    }
    .footer-about_list{
        margin-top: 25px;
    }
    .footer-about_list li a{
        color: var(--textBlue1);
        font-weight: 400;
    }
    .footer-about_list li{
        margin-bottom: 15px;
    }
    .footer-projects a{
        color: var(--textBlue1);
    }
    .footer-about_list h6{
        margin-bottom: 15px;
    }
    @media (max-width:1200px){
        .footer-question_header--text h6{
            font-size: 50px;
            line-height: 60px;
        }
        .footer-question_header--text h5{
            font-size: 40px;
            line-height: 56px;
            margin: 25px 0;
        }
        .footer-question_header--text p{
            font-size: 28px;
            line-height: 39px;
        }
        .footer-question_header--img{
            height: 400px;
        }
        .footer-question_header--img img{
            max-width: 440px;
        }
        .footer-question_header--img img:last-of-type{
            bottom: -25px;
        }
    }
    @media (max-width:992px){
        .footer-question_header--text h6{
            font-size: 40px;
            line-height: 48px;
        }
        .footer-question_header--text h5{
            font-size: 30px;
            line-height: 40 px;
            margin: 25px 0;
        }
        .footer-question_header--text p{
            font-size: 22px;
            line-height: 31px;
        }
        .footer-question_header--img{
            height: 300px;
        }
        .footer-question_header--img img{
            max-width: 340px;
        }
        .footer-question_header--img img:last-of-type{
            bottom: -20px;
        }
        .footer-question_form{
            background: rgba(23, 86, 141, 0.2);
        }
        .request-form_inpt:nth-of-type(3){
            width: 100%;
        }
        .footer-projects a,
        .footer-projects h6{
            display: none;
        }
        .footer-projects div{
            font-size: 20px;
            line-height: 28px;
        }
    }
    @media (max-width:768px){
        .footer-question_header--text{
            text-align: center;
            width: 100%;
            margin-top: 40px;
            margin-bottom: 30px;
        }
        .footer-question_header--img{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .request-form_inpt{
            width: 100% !important;
        }
        .footer-contact h6,
        .footer-about h6{
            font-size: 26px;
            line-height: 31px;
        }
        .footer-contact a,
        .footer-about_list li a,
        .footerFs,
        .footer-projects a,
        .footer-about_list a{
            font-size: 20px;
            line-height: 28px;
        }
    }
    @media (max-width:576px){
        .footer-question_header--text h6,
        .footer-question_header--text h5{
            font-size: 30px;
            line-height: 40px;
        }
        .footer-question_header--text h5{
            margin: 10px 0;
        }
        .footer-question_form{
            padding: 15px;
        }
        .footer-question_footer p{
            font-size: 16px;
            line-height: 25px;
        }
        .footer-question{
            padding-bottom: 70px;
        }
        .footer-footer{
        padding: 40px 20px;
    }
        .footer-projects{
            padding: 20px 20px;
        }
    }
</style>