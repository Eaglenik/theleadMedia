<template>
  <div class="accordion-item" :class="{ 'accordion-active': isOpen }">
    <div class="accordion-header" @click="toggleOpen">
      <div class="accordion-header-icon">
        <img src="@/assets/images/icons/chevroneDown.svg" v-show="!isOpen" />
        <img src="@/assets/images/icons/chevroneTop.svg" v-show="isOpen" />
      </div>
      <h6 class="accordion-header-title">
        <slot name="accordion-trigger" />
      </h6>
    </div>
    <p v-show="isOpen" class="accordion-content">
      <slot name="accordion-content" />
    </p>
  </div>
</template>

<script>
export default {
  
  name: "AccordionItem",
  components: {},
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.accordion-item {
  margin-bottom: 20px;
}
.accordion-header {
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
}
.accordion-header-title{
  line-height: 31px;
  font-size: 22px;
  color: var(--textBlue2);
  font-weight: 600;
}

.accordion-header-icon {
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.accordion-header-icon img {
  width: 100%;
  height: auto;
}

.accordion-content {
  padding: 20px 0;
  color: white;
}
.subAccordion .accordion-header-title{
  color: white;
  font-size: 18px;
  line-height: 25px;
  font-weight: 600;
  color: var(--textBlue1);
}
.subAccordion .accordion-header-icon{
  display: none;
}

</style>