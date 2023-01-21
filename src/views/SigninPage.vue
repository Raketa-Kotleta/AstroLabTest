<template>
    <div class="">
        <h2 class="title">Sign in</h2>
        <BasicForm background-color="white" :fields="fields"></BasicForm>
        <PopupMessage message-text="Wrong email or password" :show-duration="3" background-color="#FF6683" text-color="white" v-if="false"></PopupMessage>
    </div>
</template>

<script>
import PopupMessage from '@/components/PopupMessage.vue';
import BasicForm from '@/components/BasicForm.vue';

export default{
    name: "SigninPage",
    components:{
        PopupMessage,
        BasicForm,
    },
    data(){
        return{
            fields:[
                {
                    id: "email_id",
                    type: "email",
                    icon: "eye_icon.svg",
                    iconVisible: false,
                    iconOnClick: ()=>{},
                    hint: "Emain for you",
                    hintVisible: true,
                    label: "Email",
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.title{
    @include SetFontWithParameters("Inter", $extra-bold, 1.375rem);
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.02em;
    margin-top: 63px;
    margin-bottom: 63px;
    color: $title;
}
</style>