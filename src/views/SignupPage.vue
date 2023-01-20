<template>
    <div class="">
        <PopupMessage message-text="Wrong email or password" :show-duration="3" background-color="#FF6683" text-color="white" v-if="false"></PopupMessage>
    </div>
</template>

<script>
import PopupMessage from '@/components/PopupMessage.vue';
export default{
    name: "SignupPage",
    components:{
        PopupMessage,
    }
}
</script>

<style lang="scss">

</style>