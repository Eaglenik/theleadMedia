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
    <div v-show="isOpen" class="accordion-content">
      <slot name="accordion-content" />
    </div>
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
  },
  mounted() {
    this.isOpen = true;
  }
};
</script>

<style scoped>
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
  padding: 10px 0;
  color: white;
  display: flex;
  flex-direction: column;
}
.subAccordion .accordion-header-icon{
  display: none;
}
.subAccordion .accordion-content a{
  color: rgba(181, 232, 255, 0.7);
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
}

.subAccordionTitle .accordion-header-title{
  color: white;
  font-size: 18px;
  line-height: 25px;
}


</style>