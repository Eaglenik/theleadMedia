<template>
    <div class="package-card d-flex flex-column">
      <div>
        <h6>{{ title }}</h6>
        <p>от <span>{{ price }}</span></p>
        <div class="package-card_line"></div>
        <ul class="package-card_list">
          <li v-for="(item, index) in items" :key="index" :class="{ packageCardHidden: index > 3 && !showAll }">{{ item }}</li>
        </ul>
        <a href="#" @click.prevent="toggleShowAll">{{ showAll ? 'Скрыть' : 'Развернуть' }} <img :class="{ packageCardChevrone: showAll }" src="../assets/images/icons/chevroneDown.svg" alt=""></a>
      </div>
      <button @click="openModal">Оставить заявку</button>
    </div>
  </template>
  
  <script>
  import { BModal } from 'bootstrap-vue-3'
  export default {
    name: 'PackageCard',
    props: {
      title: String,
      price: String,
      items: Array,
      BModal
    },
    data() {
      return {
        showAll: false,
        showModal: false,
      }
    },
    methods: {
      toggleShowAll() {
        this.showAll = !this.showAll;
      },
      openModal() {
        this.$emit('open-modal');
      }
    }
  }
  </script>
  <style>
  .packageCardHidden {
    display: none;
  }
  
  .packageCardChevrone {
    transform: rotate(180deg);
  }
  </style>