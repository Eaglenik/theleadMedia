<template>
    <div>
      <h1>{{ currentCase.title }}</h1>
      <p>{{ currentCase.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cases: [
          {
            slug: 'dildorakasimova',
            title: 'dildorakasimova.com',
            content: 'This is project 1 content.'
          },
          {
            slug: 'gross',
            title: 'Gross.uz',
            content: 'This is project 2 content.'
          },
          {
            slug: 'terrapro',
            title: 'TerraPro.uz',
            content: 'This is project 3 content.'
          },
          {
            slug: 'action-mcfr',
            title: 'АКТИОН МЦФЭР',
            content: 'This is project 3 content.'
          },
          {
            slug: 'mtlp',
            title: 'mtlp.uz',
            content: 'This is project 1 content.'
          },
          {
            slug: 'ziynatdesign',
            title: 'ziynatdesign.uz',
            content: 'This is project 2 content.'
          },
          {
            slug: 'equip',
            title: 'equip.uz',
            content: 'This is project 3 content.'
          },
          {
            slug: '2work',
            title: '2work.uz',
            content: 'This is project 3 content.'
          },
          {
            slug: 'ikarvon',
            title: 'ikarvon.uz',
            content: 'This is project 1 content.'
          },
          {
            slug: 'arton',
            title: 'arton.uz',
            content: 'This is project 2 content.'
          },
          {
            slug: 'avatrade',
            title: 'avatrade.uz',
            content: 'This is project 3 content.'
          },
          {
            slug: 'gorodknig',
            title: 'gorodknig.uz',
            content: 'This is project 3 content.'
          },
          {
            slug: 'leading',
            title: 'leading.uz',
            content: 'This is project 3 content.'
          },
          {
            slug: 'aksa',
            title: 'aksa.uz',
            content: 'This is project 3 content.'
          },
        ],
        currentCase: null,
        currentSlug: null
      }
    },
    created() {
      this.currentSlug = this.$route.params.slug
      this.currentCase = this.cases.find(
        project => project.slug === this.currentSlug
      )
    },
    watch: {
      '$route.params.slug'(newValue, oldValue) {
        this.currentSlug = newValue
        this.currentCase = this.cases.find(
          project => project.slug === this.currentSlug
        )
      },
    },
  }
  </script>