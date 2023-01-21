<template>
<div class="wrapper">
    <button class="button" :class="Enable?'.enable':'.disable'" :disabled="!Enable">{{ Text }}</button>
</div>
</template>
<script>
export default{
    name:"SubmitButton",
    props:{
        Enable: Boolean,
        Text: String,
    }
}
</script>
<style scoped lang="scss">
.button{
    background-color: $submit-btn;
    border-radius: 50px;
    padding: 14px 0;
    width: 100%;
    border:none;
    color: white;
    @include SetFontWithParameters($inter,$normal, .85rem)
}
</style>