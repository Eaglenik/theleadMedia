<template>
    <section class="header d-flex align-items-center">
      <div class="my-container">
        <h3>Контакты</h3>
      </div>
    </section>
    <div class="my-container">
        <section class="breadcrumbs">
            <b-breadcrumb class="breadcrumbs-links">
            <b-breadcrumb-item class="breadcrumb-link" @click="$router.push('/')">Главная</b-breadcrumb-item>
            <span class="breadcrumb-icon"><img src="@/assets/images/icons/chevroneBread.svg"/></span>
            <b-breadcrumb-item  active>Контакты</b-breadcrumb-item>
            </b-breadcrumb>
        </section>
        <section class="contact d-flex justify-content-between flex-xl-row flex-column gap-5">
            <div class="contact-text">
                <p>г. Ташкент, ул. Таллимаржон, 1/1</p>
                <div class="contact-number">
                    <p>+998 99 498 32 12</p>
                    <a href="#!">Заказать звонок</a>
                    <div class="contact-soc d-flex gap-5">
                        <a href="https://wa.me/998994983212">WhatsApp</a>
                        <a href="https://t.me/+998994983212">Telegram</a>
                    </div>
                </div>
                <div class="contact-number">
                    <p>info@theleadmedia.uz</p>
                    <a href="mailto:info@theleadmedia.uz">Написать сообщение</a>
                </div>
            </div>
            <div class="contact-map">
                <div style="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a><a href="https://yandex.uz/maps/10335/tashkent/house/YkAYdQdlQUUBQFprfX52eXprYQ==/?ll=69.305806%2C41.278685&utm_medium=mapframe&utm_source=maps&z=17.09" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Таллимаржон, 1/1 — Яндекс Карты</a><iframe src="https://yandex.uz/map-widget/v1/?ll=69.305806%2C41.278685&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNTExNTAxEjJPyrt6YmVraXN0b24sIFRvc2hrZW50LCBUYWxsaW1hcmpvbiBrb8q7Y2hhc2ksIDEvMSIKDZKcikIVXx0lQg%2C%2C&z=17.09" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
            </div>
        </section>
    </div>
    <div class="line"></div>
</template>
<script>
export default {
    
}
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
    .contact-text{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
    .contact-map{
        width: 58%;
    }
    .contact-map iframe{
        width: 100%;
        height: 550px;
    }
    .contact-text p{
        font-size: 44px;
        line-height: 62px;
        font-weight: 500;
        margin-bottom: 15px;
        word-break: break-all;
    }
    .contact-text a{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue2);
        margin-bottom: 10px;
        display: block;
    }
    @media (max-width: 1200px){
        .contact-text,
        .contact-map{
            width: 100%;
        }
    }
    @media (max-width: 576px){
        .header h3{
            font-size: 45px;
            line-height: 55px;
        }
        .contact-text{
            gap: 25px;
        }
        .contact-text p{
            font-size: 30px;
            line-height: 40px;
        }
        .contact-text a{
            font-size: 17px;
            line-height: 22px;
        }
        .contact-map iframe{
            height: 500px;
        }
    }
</style>