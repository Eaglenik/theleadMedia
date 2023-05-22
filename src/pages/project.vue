<template>
    <div>
      <h1>{{ currentProject.title }}</h1>
      <p>{{ currentProject.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            slug: 'pc.uz',
            title: 'IT-портал PC.uz',
            content: 'This is project 1 content.'
          },
          {
            slug: 'stroyvitrina.uz',
            title: 'Строительный портал StroyVitrina.uz',
            content: 'This is project 2 content.'
          },
          {
            slug: 'sprav.uz',
            title: 'Справочник Ташкента Sprav.uz',
            content: 'This is project 3 content.'
          },
          {
            slug: 'mebelvitrina.uz',
            title: 'Мебельный портал MebelVitrina.uz',
            content: 'This is project 4 content.'
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