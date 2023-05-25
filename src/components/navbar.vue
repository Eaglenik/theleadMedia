<template>
    <div class="navbar-back">
      <nav class="navbar">
        <div class="d-sm-none d-flex justify-content-between mb-3 w-100">
          <img @click="$router.push('/')" src="@/assets/images/logo-mobile.png" alt="">
          <div class="navbar-contact_mobile d-inline-flex gap-3">
            <a href="#!" class="active">Ру</a>
            <a href="#!">O‘z</a>
            <a href="#!">En</a>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="d-flex align-items-center">
            <img class="d-sm-block d-none" @click="$router.push('/')" src="@/assets/images/logo.png" alt="">
              <div class="d-flex justify-content-center align-items-center">
                <div class="sidebar d-xxl-none d-flex">
                  <button class="burger" @click="toggleSidebar" :class="{ 'open': isOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div class="custom-sidebar" :class="{ 'open': isOpen }" ref="sidebar">
                    <ul class="sidebar-list d-flex flex-column">
                      <li class="mobile-sidebar_phone d-lg-none d-block"><a href="tel:+998 99 498 32 12" >+998 99 498 32 12</a></li>
                      <li>
                        <p>Проекты
                          <ul class="sidebar-list_projects">
                            <li><router-link to="/projects/pc.uz">PC.uz</router-link></li>
                            <li><router-link to="/projects/stroyvitrina.uz">StroyVitrina.uz</router-link></li>
                            <li><router-link to="/projects/sprav.uz">Sprav.uz</router-link></li>
                            <li><router-link to="/projects/mebelvitrina.uz">MebelVitrina.uz</router-link></li>
                          </ul>
                        </p>
                      </li>
                      <li><a href="#!">Кейсы</a></li>
                      <li><a href="#!">О нас</a></li> 
                      <li class="d-md-none d-block"><a href="#!" >Контакты</a></li> 
                    </ul>
                  </div>
                </div>
                <ul class="navbar-list d-flex align-items-center">
                 <li class="navbarLi d-xxl-block d-none">
          <router-link to="/">Главная</router-link>
                 </li>
                 <li class="navbarLi" :class="{ active: activeDropdown === 'services' }">
          <b-dropdown @shown="onShown('services')" @hidden="onHidden('services')" v-model="servicesDropdown">
            <template #button-content>
              <div class="d-flex flex-row-reverse align-items-center">
                <span>Услуги</span>
                <svg ref="servicesIcon" class="dropdownIcon" :class="{ active: activeDropdown === 'services' }" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0595 -2.15954e-07L7.50639 2.73321L4.94055 -4.39713e-07L0 -6.55671e-07L7.51024 7.99983L15 0L10.0595 -2.15954e-07Z" fill="#EF4456"/>
                </svg>
              </div>
            </template>
            <b-dropdown-item @click="$router.push('/services/web')">Создание WEB-сайтов</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/services/seo')">SEO-продвижение</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/services/google-yandex-ads')">Контекстная реклама в Google и Яндекс</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/services/google-maps')">Продвижение на GoogleMaps</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/services/yandex-maps')">Продвижение на Яндекс.Карты</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/services/copywriting')">Услуги копирайтинга</b-dropdown-item>
          </b-dropdown>
                 </li>
                 <li class="navbarLi d-xxl-block d-none" :class="{ active: activeDropdown === 'projects' }">
          <b-dropdown @shown="onShown('projects')" @hidden="onHidden('projects')" v-model="projectsDropdown">
            <template #button-content>
              <div class="d-flex flex-row-reverse align-items-center">
                <span>Проекты</span>
                <svg ref="projectsIcon" class="dropdownIcon" :class="{ active: activeDropdown === 'projects' }" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0595 -2.15954e-07L7.50639 2.73321L4.94055 -4.39713e-07L0 -6.55671e-07L7.51024 7.99983L15 0L10.0595 -2.15954e-07Z" fill="#EF4456"/>
                </svg>
              </div>
            </template>
            <b-dropdown-item @click="$router.push('/projects/pc.uz')">PC.uz</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/projects/stroyvitrina.uz')">StroyVitrina.uz</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/projects/sprav.uz')">Sprav.uz</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/projects/mebelvitrina.uz')">MebelVitrina.uz</b-dropdown-item>
          </b-dropdown>
                 </li>
                 <li class="navbarLi d-xxl-block d-none"><a href="#!" :class="{ active: activeDropdown === null && !isOpen }">Кейсы</a></li>
                 <li class="navbarLi d-xxl-block d-none"><a href="#!" :class="{ active: activeDropdown === null && !isOpen }">О нас</a></li>
                 <li class="navbarLi d-md-block d-none"><a href="#!">Контакты</a></li>
                 <li class="navbarLi d-md-block d-none" :class="{ active: activeDropdown === 'lang' }">
          <b-dropdown @shown="onShown('lang')" @hidden="onHidden('lang')" v-model="langDropdown">
            <template #button-content>
              <div class="d-flex flex-row-reverse align-items-center">
                <span>Ру</span>
                <svg ref="langIcon" class="dropdownIcon" :class="{ active: activeDropdown === 'lang' }" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0595 -2.15954e-07L7.50639 2.73321L4.94055 -4.39713e-07L0 -6.55671e-07L7.51024 7.99983L15 0L10.0595 -2.15954e-07Z" fill="#EF4456"/>
                </svg>
              </div>
            </template>
            <b-dropdown-item href="#">O‘z</b-dropdown-item>
            <b-dropdown-item href="#">En</b-dropdown-item>
          </b-dropdown>
                 </li>
                 <li class="navbarLi" @click="toggleSidebar">
          <div class="burgerIcon" :class="{ active: isOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
                 </li>
               </ul>
              </div>
          </div>
            <div class="navbar-contact">
                <a href="tel:+998 99 498 32 12" class="d-lg-block d-none">+998 99 498 32 12</a>
                <a href="#!"><img src="../assets/images/icons/phone.svg" alt=""></a>
                <a href="#!"><img src="../assets/images/icons/telegram.svg" alt=""></a>
            </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      servicesDropdown: null,
      projectsDropdown: null,
      langDropdown: null,
      activeDropdown: null,
      isOpen: false,
    };
  },
  methods: {
    onShown(dropdownName) {
      const vm = this;
      vm.activeDropdown = dropdownName;
      const iconRef = vm.$refs[dropdownName + 'Icon'];
      if (iconRef && iconRef.$el) {
        iconRef.$el.classList.add('active');
      }
    },
    onHidden(dropdownName) {
      const vm = this;
      vm.activeDropdown = null;
      const iconRef = vm.$refs[dropdownName + 'Icon'];
      if (iconRef && iconRef.$el) {
        iconRef.$el.classList.remove('active');
      }
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    }
  },
};
</script>
  <style>
  .navbar-back{
    width: 100%;
    background: var(--backBlack1);
    position: sticky;
    top: -1px;
    z-index: 1000;
  }
  .navbar{
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
    max-height: 133px;
  }
  .navbar img{
    cursor: pointer;
  }
  .dropdownIcon{
    transform: rotate(0deg);
    transition: 0.2s;
    margin-right: 8px;
  }
  .dropdownIcon.active{
    transform: rotate(180deg);
    transition: 0.2s;
  }
  .navbar-list{
    margin: 0 70px;
    gap: 40px;
  }
  .navbarLi{
    padding: 51px 0;
    position: relative;
  }
  .navbar-list li a,
  .navbar-list button{
    color: white;
    font-size: 22px;
    line-height: 31px;
    display: inline-flex;
  }
  .dropdown-menu{
    background: var(--gradVertical);
    border: 2px solid var(--backBlack1);
    padding: 35px 45px 45px;
    position: absolute;
    margin-top: 50px;
    top: 100%;
  }
  .dropdown-menu li button{
    color: var(--textBlue1);
    font-size: 22px;
    line-height: 31px;
  }
  .dropdown-item a{
    color: var(--textBlue1);
  }
  .navbar-contact{
     display: flex;
     gap: 40px;
  }
  .navbar-contact a:nth-of-type(1){
    font-size: 22px;
    line-height: 31px;
    color: var(--textBlue2);
    font-weight: 600;
  }
  /* sidebar */
  .sidebar{
    position: relative;
  }
  .custom-sidebar {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    right: auto;
    min-width: 100px;
    min-height: 100px;
    z-index: 100;
    opacity: 0;
    background: var(--gradVertical);
    border: 2px solid var(--backBlack1);
    padding: 35px 45px 45px;
    display: block;
    visibility: hidden;
  }
  .custom-sidebar.open {
    transition: opacity 0.3s ease;
    opacity: 1;
    visibility: visible;
  }
  .burger {
    display: inline-flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: none;
    background: none;
    margin-left: 30px;
    padding: 48px 0;
  }
  .burger::before,
  .navbarLi::before{
    content: '';
    position: absolute; 
    bottom: 0; 
    left: 0;
    width: 100%;
    height: 0;
    border-bottom: 3px solid transparent; 
    transition: border-bottom-color 0.3s ease;
  }
  .burger.open::before,
  .navbarLi.active::before{
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(90deg, #0E1531 0%, #EF4456 38.02%, #EF4456 71.87%, #0E1531 100%);
    border-image-slice: 1;
  }
  .burger span {
    display: block;
    width: 35px;
    height: 2px;
    background: white;
    margin: 5px;
    transition: all 0.3s ease;
  }
  .sidebar-list{
    gap: 30px;
  }
  .sidebar-list p,
  .sidebar-list a{
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    color: white;
    white-space: nowrap;
  }
  .sidebar-list_projects{
    margin: 10px 0 20px 10px;
  }
  .sidebar-list_projects a{
    color: var(--textBlue1);
  }
  .sidebar-list_projects li{
    margin: 20px 0;
  }
  .mobile-sidebar_phone a{
    font-size: 28px;
    line-height: 39px;
  }
  .navbar-contact_mobile a{
    font-size: 14px;
    line-height: 20px;
    color: var(--btnRed2);
    font-weight: 600;
  }
  .navbar-contact_mobile a.active{
    color: white;
  }

  @media (max-width:1600px){
       .navbar-list{
        gap: 25px;
        margin: 0 45px;
       }
       .navbar-contact{
        gap: 30px;
       }
  }
  @media (max-width:1200px){
     .navbar-list{
      margin: 0 30px;
     }
  }
  @media (max-width:768px){
      .dropdown-menu li button{
        font-size: 18px;
        line-height: 25px;
      }
      .dropdown-menu{
        position: fixed;
        top: 67px;
      }
      .navbar{
        padding: 20px;
      }
  }
  @media (max-width:576px){
    .navbar-list li a, .navbar-list button{
     font-size: 20px;
     line-height: 28px;
    }
    .navbar-list li a{
      white-space: normal;
      font-size: 18px;
      line-height: 25px;
    }
    .navbar-contact img{
     width: 20px;
    }
    .custom-sidebar{
      padding: 35px 20px;
    }
    .dropdown-menu{
      width: 100%;
      height: 100%;
      padding: 30px 20px;
    }
    .custom-sidebar{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 117px;
    }
    .burger{
      margin-left: 0;
      padding: 13px 0;
    }
    .sidebar-list p, .sidebar-list a{
      font-size: 18px;
      line-height: 25px;
    }
    .navbarLi {
      padding: 17px 0;
    }
    .dropdown-item{
      white-space: normal !important;
    }
  }
</style>