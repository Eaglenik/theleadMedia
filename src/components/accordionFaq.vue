<template>
    <b-card no-body>
      <b-card-header ref="accordionHeader" header-class="p-1" class="border-0 d-flex justify-content-between" @click="toggleAccordion">
        <b-button block v-b-toggle="collapseId" variant="info">{{ title }}</b-button>
        <b-button v-if="!collapsed" class="float-right border-0 bg-transparent" variant="link"><img :src="leftIcon"/></b-button>
        <b-button v-if="collapsed" class="float-right border-0 bg-transparent" variant="link"><img :src="rightIcon"/></b-button>
      </b-card-header>
      <b-collapse :id="collapseId" :visible="!collapsed" @shown="closeOthers">
        <b-card-body class="p-1"><p class="accordion-faq">{{ content }}</p></b-card-body>
      </b-collapse>
    </b-card>
  </template>
  
  <script>
    export default {
      name: 'Accordion',
      props: {
        title: String,
        content: String
      },
      data() {
        return {
          collapsed: true,
          leftIcon: require('@/assets/images/icons/chevroneLeft.svg'),
          rightIcon: require('@/assets/images/icons/chevroneRight.svg')
        }
      },
      computed: {
        collapseId() {
          return `accordion-${this._uid}`;
        }
      },
      methods: {
        toggleAccordion() {
          this.collapsed = !this.collapsed;
        },
        closeOthers() {
          const accordionHeader = this.$refs.accordionHeader.$el;
          this.$nextTick(() => {
            accordionHeader.parentElement.querySelectorAll('[aria-expanded="true"]').forEach((el) => {
              if (el.id !== this.collapseId) {
                this.$root.$emit('bv::toggle::collapse', el.id);
              }
            });
          });
        }
      }
    }
  </script>
  
  <style scoped>
    .card-header img {
      width: 11px;
      height: 17px;
    }
    .accordion-faq{
        font-size: 22px;
        line-height: 31px;
        color: var(--textBlue1);
        margin: 25px;
        margin-top: 0;
    }
    .card-header{
        padding: 45px 0 25px 0 !important;
        cursor: pointer;
    }
    .card-header button{
        color: white;
        font-size: 30px;
        line-height: 42px;
        text-align: start !important;
    }
    @media (max-width:1200px){
        .card-header button{
            font-size: 28px;
            line-height: 39px;
        }
        .accordion-faq{
            font-size: 20px;
            line-height: 28px;
        }
    }
    @media (max-width:992px){
        .card-header button{
            font-size: 26px;
            line-height: 31px;
        }
    }
    @media (max-width:576px){
        .card-header button{
            font-size: 22px;
            line-height: 31px;
        }
        .accordion-faq{
            font-size: 18px;
            line-height: 25px;
            margin: 15px 0;
        }
        .card-header{
            padding: 20px 0 !important;
        }
        .card-header img {
            width: 11px;
            height: 17px;
            margin-left: 20px;
        }
    }
  </style>