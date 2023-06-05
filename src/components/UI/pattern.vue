<template>
    <div class="pattern">
        <img class="patternRed" src="@/assets/images/pattern/patternRed.svg" alt="">
        <img class="patternWhite" src="@/assets/images/pattern/patternWhite.svg" alt="">
        <img class="patternRed" src="@/assets/images/pattern/patternRed.svg" alt="">
        <img class="patternWhite" src="@/assets/images/pattern/patternWhite.svg" alt="">
        <img class="patternRed" src="@/assets/images/pattern/patternRed.svg" alt="">
        <img class="patternWhite" src="@/assets/images/pattern/patternWhite.svg" alt="">
        <img class="patternRed" src="@/assets/images/pattern/patternRed.svg" alt="">
        <img class="patternWhite" src="@/assets/images/pattern/patternWhite.svg" alt="">
        <img class="patternRed" src="@/assets/images/pattern/patternRed.svg" alt="">
        <img class="patternWhite" src="@/assets/images/pattern/patternWhite.svg" alt="">
        <img class="patternRed" src="@/assets/images/pattern/patternRed.svg" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .pattern{
        position: fixed;
        right: 0;
        bottom: 10px;
        display: flex;
        flex-direction: column;
    }
    .patternRed{
        opacity: 0.4;
    }
    .patternWhite{
        opacity: 0.1;
    }
    .patternRed:hover{
        opacity: 0.8;
    }
    .patternWhite:hover{
        opacity: 0.6;
    }
    @media (max-width: 1400px ){
        .pattern{
            right: -20px;
        }
    }
    @media (max-width: 992px ){
        .pattern{
            display: none;
        }
    }
</style>