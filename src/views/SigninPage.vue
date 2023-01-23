<template>
    <div class="">
        <h2 class="title">Sign in</h2>
        <BasicForm background-color="white" :submit-button-text="submitButtonText" @submit="onSubmit" @input="onInput">
                <InputGroup
                    :key="EmailInput.id" 
                    :id="EmailInput.id" 
                    :type="EmailInput.type" 
                    :icon="EmailInput.icon"  
                    :icon-visible="EmailInput.iconVisible" 
                    :icon-on-click="EmailInput.iconOnClick"
                    :hint="EmailInput.hint"
                    :hint-button-visible="EmailInput.hintButtonVisible"
                    :label="EmailInput.label"
                    v-model="EmailInput.value">
                </InputGroup>
                <InputGroup
                    :key="PasswordInput.id" 
                    :id="PasswordInput.id" 
                    :type="PasswordInput.type" 
                    :icon="PasswordInput.icon"  
                    :icon-visible="PasswordInput.iconVisible" 
                    :icon-on-click="PasswordInput.iconOnClick"
                    :hint="PasswordInput.hint"
                    :hint-button-visible="PasswordInput.hintButtonVisible"
                    :label="PasswordInput.label"
                    :reason="PasswordInput.reason"
                    v-model="PasswordInput.value">
                </InputGroup>
            </BasicForm>
        <h4 class="signup-text">
            <span>Don't have an account yet?</span>
            <br/>
            <router-link to="/signup" class="signup-text-link">Sign Up</router-link>
        </h4>
    </div>
</template>

<script>
import BasicForm from '@/components/BasicForm.vue';
import InputGroup from '@/components/InputGroup.vue';
export default{
    name: "SigninPage",
    errors: [],
    components:{
        BasicForm,
        InputGroup,
    },
    data(){
        return{
            submitButtonText: "Sign in",
            EmailInput: {
                    id: "email_id",
                    type: "email",
                    value: "",
                    icon: "eye_icon.svg",
                    iconVisible: false,
                    iconOnClick: ()=>this.SwitchPasswordVisible(this.EmailInput),
                    hint: "",
                    hintVisible: false,
                    label: "Email",
                    reason: "",
                    reasonTextVisible: false,
                },
            PasswordInput:  {
                    id: "password_id",
                    type: "password",
                    value: "",
                    icon: "eye_open_icon.svg",
                    iconVisible: true,
                    iconOnClick: ()=>this.SwitchPasswordVisible(this.PasswordInput),
                    hint: "",
                    hintButtonVisible: false,
                    label: "Password",
                    reason: "",
                    reasonTextVisible: true,
                },
        }
    },
    methods:{
        SwitchPasswordVisible(input){
            if (input.type == "password"){
                input.type = "text";
                input.icon = "eye_close_icon.svg";
            }
            else if (input.type == "text") {
                input.type = "password"
                input.icon = "eye_open_icon.svg";
            }
        },
        Validation(string, regexp){
            // let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(string)
        },

        onSubmit(){
            
     
        },
        onInput(e){
            console.log(e);
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