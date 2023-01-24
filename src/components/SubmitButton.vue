<template>
<div class="wrapper">
    <button class="button" :class="!disable? 'enabled':'disabled'" :disabled="disable">{{ Text }}</button>
</div>
</template>
<script>
export default{
    name:"SubmitButton",
    props:{
        disable: Boolean,
        Text: String,
    }
}
</script>
<style scoped lang="scss">
.button{
    
    border-radius: 50px;
    padding: 14px 0;
    width: 100%;
    border:none;
    color: white;
    @include SetFontWithParameters($inter,$normal, .85rem);

}
.enabled{
    background-color: $submit-btn;
}
.disabled{
    background-color: rgba($submit-btn,.3) !important;
}
</style>