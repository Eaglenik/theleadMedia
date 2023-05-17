<template>
    <nav class="navbar">
      <div class="d-sm-none d-flex justify-content-between mb-3 w-100">
        <a href="/"><img src="../../public/images/logo-mobile.png" alt=""></a>
        <div class="navbar-contact_mobile d-inline-flex gap-3">
          <a href="#!" class="active">Ру</a>
          <a href="#!">O‘z</a>
          <a href="#!">En</a>
        </div>
      </div>
      <div class="d-flex justify-content-sm-center justify-content-between align-items-center w-100">
          <a href="/" class="d-sm-block d-none"><img src="../../public/images/logo.png" alt=""></a>
          <div class="d-flex justify-content-center align-items-center">
            <div class="sidebar d-xxl-none d-flex">
              <button class="burger" @click="toggleSidebar">
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
                        <li><a href="https://pc.uz/">PC.uz</a></li>
                        <li><a href="https://stroyvitrina.uz/">StroyVitrina.uz</a></li>
                        <li><a href="https://sprav.uz/">Sprav.uz</a></li>
                        <li><a href="https://mebelvitrina.uz/">MebelVitrina.uz</a></li>
                      </ul>
                    </p>
                  </li>
                  <li><a href="#!">Кейсы</a></li>
                  <li><a href="#!">О нас</a></li> 
                  <li class="d-md-none d-block"><a href="#!" >Контакты</a></li> 
                </ul>
              </div>
            </div>
            <ul class="navbar-list d-flex">
                <li class="d-xxl-block d-none"><a href="/">Главная</a></li>
                <li>
                  <b-dropdown @shown="onShown('services')" @hidden="onHidden('services')" v-model="servicesDropdown">
                    <template #button-content>
                      <div class="d-flex flex-row-reverse align-items-center">
                        <span>Услуги</span>
                        <svg ref="servicesIcon" class="dropdownIcon" :class="{ active: activeDropdown === 'services' }" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0595 -2.15954e-07L7.50639 2.73321L4.94055 -4.39713e-07L0 -6.55671e-07L7.51024 7.99983L15 0L10.0595 -2.15954e-07Z" fill="#EF4456"/>
                        </svg>
                      </div>
                    </template>
                      <b-dropdown-item href="#">Создание WEB-сайтов</b-dropdown-item>
                      <b-dropdown-item href="#">SEO-продвижение</b-dropdown-item>
                      <b-dropdown-item href="#">Контекстная реклама в Google и Яндекс</b-dropdown-item>
                      <b-dropdown-item href="#">Продвижение на GoogleMaps</b-dropdown-item>
                      <b-dropdown-item href="#">Продвижение на Яндекс.Карты</b-dropdown-item>
                      <b-dropdown-item href="#">Услуги копирайтинга</b-dropdown-item>
                      <b-dropdown-item href="#">SMM-продвижение</b-dropdown-item>
                  </b-dropdown>
                </li>
                <li class="d-xxl-block d-none">
                  <b-dropdown @shown="onShown('projects')" @hidden="onHidden('projects')" v-model="projectsDropdown">
                    <template #button-content>
                      <div class="d-flex flex-row-reverse align-items-center">
                        <span>Проекты</span>
                        <svg ref="projectsIcon" class="dropdownIcon" :class="{ active: activeDropdown === 'projects' }" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0595 -2.15954e-07L7.50639 2.73321L4.94055 -4.39713e-07L0 -6.55671e-07L7.51024 7.99983L15 0L10.0595 -2.15954e-07Z" fill="#EF4456"/>
                        </svg>
                      </div>
                    </template>
                      <b-dropdown-item href="https://pc.uz/">PC.uz</b-dropdown-item>
                      <b-dropdown-item href="https://stroyvitrina.uz/">StroyVitrina.uz</b-dropdown-item>
                      <b-dropdown-item href="https://sprav.uz/">Sprav.uz</b-dropdown-item>
                      <b-dropdown-item href="https://mebelvitrina.uz/">MebelVitrina.uz</b-dropdown-item>
                  </b-dropdown>
                </li>
                <li class="d-xxl-block d-none"><a href="#!">Кейсы</a></li>
                <li class="d-xxl-block d-none"><a href="#!">О нас</a></li>
                <li class="d-md-block d-none"><a href="#!">Контакты</a></li>
                <li class="d-md-block d-none">
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
            </ul>
          </div>
          <div class="navbar-contact">
              <a href="tel:+998 99 498 32 12" class="d-lg-block d-none">+998 99 498 32 12</a>
              <a href="#!"><img src="../../public/images/icons/phone.svg" alt=""></a>
              <a href="#!"><img src="../../public/images/icons/telegram.svg" alt=""></a>
          </div>
      </div>
    </nav>
</template>

<script>
export default {
  components: {
  },
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
    // sidebar
    handleOutsideClick(event) {
      if (this.isOpen && !this.$refs.sidebar.contains(event.target)) {
        this.isOpen = false;
      }
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen
    }
  },
};
</script>
<style scope>
  .navbar{
    /* max-width: 1560px; */
    width: 100%;
    margin: 0 auto;
    position: sticky;
    top: 0;
    padding: 30px 40px;
    background: var(--backBlack1);
    z-index: 1100;
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
    margin-top: 50px;
    padding: 35px 45px 45px;
    position: absolute;
    top: 100%;
  }
  .dropdown-menu li a{
    color: var(--textBlue1);
    font-size: 22px;
    line-height: 31px;
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
    top: 85px;
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
    border: none;
    background: none;
    margin-left: 30px;
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
  @media (max-width:1400px){
     
  }
  @media (max-width:1200px){
     .navbar-list{
      margin: 0 30px;
     }
  }
  @media (max-width:992px){
     
  }
  @media (max-width:768px){
      .dropdown-menu li a{
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
    }
    .sidebar-list p, .sidebar-list a{
      font-size: 18px;
      line-height: 25px;
    }
  }
</style>