<template>
<div class="container">
    <h2 class="title">Hello, John Deer!</h2>
    <img src="../assets/home_screen_background.svg" alt="" class="screen">
</div>
</template>

<script>
export default{
    name: "MainPage",
}
</script>

<style scoped lang="scss">
.container{
    position: fixed;
    bottom: -1%;
    right: 0;
    left: 0;
    .title{
        margin: 0;
        @include SetFontWithParameters("Inter", $extra-bold, 1.375rem);
        text-align: center;
        color: $title;
    }
    .screen{
        min-width: 100%;
    }
}


</style>