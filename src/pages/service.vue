<template>
    <div>
      <h1>{{ currentService.title }}</h1>
      <p>{{ currentService.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          {
            slug: 'web',
            title: 'Создание WEB-сайтов',
            content: 'Hi'
          },
          {
            slug: 'seo',
            title: 'SEO-продвижение',
            content: 'Hi'
          },
          {
            slug: 'google-yandex-ads',
            title: 'Контекстная реклама в Google и Яндекс',
            content: 'Hi'
          },
          {
            slug: 'google-maps',
            title: 'Продвижение на GoogleMaps',
            content: 'Hi'
          },
          {
            slug: 'yandex-maps',
            title: 'Продвижение на Яндекс.Карты',
            content: 'Hi'
          },
          {
            slug: 'copywriting',
            title: 'Услуги копирайтинга',
            content: 'Hi'
          },
        ],
        currentService: null,
        currentSlug: null
      }
    },
    created() {
      this.currentSlug = this.$route.params.slug
      this.currentService = this.services.find(
        service => service.slug === this.currentSlug
      )
    },
    watch: {
      '$route.params.slug'(newValue, oldValue) {
        this.currentSlug = newValue
        this.currentService = this.services.find(
          service => service.slug === this.currentSlug
        )
      },
    },
  }
  </script>