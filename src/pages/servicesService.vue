<template>
    <h1>{{ currentServicesService.title }}</h1>
  </template>
  
  <script>
  export default {
    data() {
      return {
        servicesService: [
          {
            slug: 'yandex',
            title: 'yandex',
          },
          {
            slug: 'google',
            title: 'google',
          },
          {
            slug: 'landing',
            title: 'landing',
          },
          {
            slug: 'market',
            title: 'market',
          },
        ],
        currentServicesService: null,
        currentSlug: null
      }
    },
    created() {
      this.currentSlug = this.$route.params.slug
      this.currentServicesService = this.servicesService.find(
        servicesService => servicesService.slug === this.currentSlug
      )
    },
    watch: {
      '$route.params.slug'(newValue, oldValue) {
        this.currentSlug = newValue
        this.currentServicesService = this.servicesService.find(
          servicesService => servicesService.slug === this.currentSlug
        )
      },
    },
  }
  </script>

  <style scoped>
  
  @media(max-width: 1200px){
  }
  @media(max-width: 768px){
    
  }
  @media(max-width: 576px){
    
  }
</style>