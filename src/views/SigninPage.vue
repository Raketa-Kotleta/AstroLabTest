<template>
    <div class="">
        <h2 class="title">Sign in</h2>
        <BasicForm background-color="white" :fields="fields" :submit-button-text="submitButtonText"></BasicForm>
        <h4 class="signup-text">
            <span>Don't have an account yet?</span>
            <br/>
            <router-link to="/signup" class="signup-text-link">Sign Up</router-link>
        </h4>
    </div>
</template>

<script>
import BasicForm from '@/components/BasicForm.vue';

export default{
    name: "SigninPage",
    errors: [],
    components:{
        BasicForm,
    },
    data(){
        return{
            submitButtonText: "Sign in",
            fields:[
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
                    hintButtonVisible: false,
                    label: "Password",
                }
            ]
        }
    },
    methods:{
        SwitchPasswordVisible(id){
            let field = this.fields.find(x=>x.id == id);
            console.log(field);
            if (field.type == "password"){
                field.type = "text";
                field.icon = "eye_close_icon.svg";
            }
            else if (field.type == "text") {
                field.type = "password"
                field.icon = "eye_open_icon.svg";
            }
        },
        EmailValidation(email){
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email)
        }
    }
}
</script>

<style scoped lang="scss">
.title{
    @include SetFontWithParameters("Inter", $extra-bold, 1.375rem);
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.02em;
    margin-top: 63px;
    margin-bottom: 20px;
    color: $title;   
}
.signup-text{
    text-align: center;
    color: $hint;
    margin: 20px 0;
    @include SetFontWithParameters($inter, $normal, .8rem);

    &-link{
        color: $hint;  
    }
}
</style>