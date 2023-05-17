<template>
    <button class="main-button">
        <slot></slot>
    </button>
</template>
<script>
export default {
    
}
</script>
<style>
    .main-button{
        background: var(--btnRed1);
        padding: 27px 40px;
        font-size: 30px;
        line-height: 42px;
        color: white;
        border: none;
        outline: none;
        font-weight: 600;
    }
    @media (max-width:992px){
        .main-button{
            padding: 21px 50px;
        }
    }
    @media (max-width:768px){
        .main-button{
            font-size: 22px;
            line-height: 31px;
        }
    }
    @media (max-width:576px){
        .main-button{
            width: 100%;
        }
    }
</style>
