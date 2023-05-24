<template>
    <button class="scroll-to-top-button" 
            :class="{ 'show': showScrollButton, 'hide': hideScrollButton }" 
            @click="scrollToTop">
      <img src="@/assets/images/icons/scrollToTop.svg" alt="">
    </button>
  </template>
  <script>
  export default {
    data() {
      return {
        showScrollButton: false,
        hideScrollButton: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (window.pageYOffset > 0) {
          this.showScrollButton = true;
          this.hideScrollButton = false;
        } else {
          this.showScrollButton = false;
          this.hideScrollButton = true;
        }
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  </script>
  <style>
  .scroll-to-top-button {
    position: fixed;
    bottom: 100px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: var(--backBlack3);
    transition: opacity 0.3s ease-in-out;
  }
  
  .scroll-to-top-button.hide {
    opacity: 0;
  }
  
  .scroll-to-top-button.show {
    opacity: 1;
  }
  @media (max-width:768px) {
    .scroll-to-top-button{
        width: 40px;
        height: 40px;
        right: 20px;
        bottom: 40px;
    }
    .scroll-to-top-button img{
        width: 18px;
    }
  }
  </style>