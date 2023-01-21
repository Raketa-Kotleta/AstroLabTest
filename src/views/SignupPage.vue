<template>
    <div class="">
        <h2 class="title">Sign up</h2>
        <BasicForm background-color="white" :fields="fields" :submit-button-text="submitButtonText"></BasicForm>
    </div>
</template>

<script>
import BasicForm from '@/components/BasicForm.vue';
export default{
    name: "SignupPage",
    components:{
      BasicForm,
    },
    data(){
        return{
            submitButtonText: "Sign up",
            fields:[
                {
                    id: "name_id",
                    type: "text",
                    icon: "eye_icon.svg",
                    iconVisible: false,
                    hint: "",
                    hintVisible: false,
                    label: "Full name",
                },
                {
                    id: "email_id",
                    type: "email",
                    icon: "eye_icon.svg",
                    iconVisible: false,
                    hint: "Emain for you blabla blalldsflsdf sdf Emain for you blabla blalldsflsdf sdf Emain for you blabla blalldsflsdf sdf Emain for you blabla blalldsflsdf sdf",
                    hintVisible: false,
                    label: "Email",
                },
                {
                    id: "password_id",
                    type: "password",
                    icon: "eye_open_icon.svg",
                    iconVisible: true,
                    iconOnClick: ()=>{
                        this.SwitchPasswordVisible("password_id")
                    },
                    hint: "Emain for you blabla blalldsflsdf sdf Emain for you blabla blalldsflsdf sdf Emain for you blabla blalldsflsdf sdf Emain for you blabla blalldsflsdf sdf",
                    hintButtonVisible: true,
                    label: "Password",
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
    margin-bottom: 20px;
    color: $title;
    
}
</style>