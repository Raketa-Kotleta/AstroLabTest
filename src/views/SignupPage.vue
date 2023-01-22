<template>
    <div class="">
        <h2 class="title">Sign up</h2>
        <BasicForm background-color="white" :fields="fields" :submit-button-text="submitButtonText"></BasicForm>
        <h4 class="signin-text">
            <span>Already have an account?</span>
            <br/>
            <router-link to="/signin" class="signin-text-link">Sign In</router-link>
        </h4>
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
                    hint: "",
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
                    hint: "Password must contain 8+ symbols, 1 special and 2 capital letters",
                    hintButtonVisible: true,
                    label: "Password",
                },
                {
                    id: "password_repeat_id",
                    type: "password",
                    icon: "eye_open_icon.svg",
                    iconVisible: true,
                    iconOnClick: ()=>{
                        this.SwitchPasswordVisible("password_repeat_id")
                    },
                    hint: "Password must contain 8+ symbols, 1 special and 2 capital letters",
                    hintButtonVisible: false,
                    label: "Repeat password",
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
.signin-text{
    text-align: center;
    color: $hint;
    margin: 20px 0;
    @include SetFontWithParameters($inter, $normal, .8rem);

    &-link{
        color: $hint;  
    }
}
</style>