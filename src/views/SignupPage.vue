<template>
    <div class="">
        <h2 class="title">Sign up</h2>
        <BasicForm background-color="white" :submit_button_text="submitButtonText" @submit="onSubmit" :button_disable="SubmitButtonDisable">
                <InputGroup
                    :key="NameInput.id" 
                    :id="NameInput.id" 
                    :type="NameInput.type" 
                    :icon="NameInput.icon"  
                    :icon_visible="NameInput.iconVisible" 
                    :icon_on_click="NameInput.iconOnClick"
                    :hint="NameInput.hint"
                    :hint_button_visible="NameInput.hintButtonVisible"
                    :label="NameInput.label"
                    :reason="NameInput.reason"
                    v-model="NameInput.value">
                </InputGroup>
                <InputGroup
                    :key="EmailInput.id" 
                    :id="EmailInput.id" 
                    :type="EmailInput.type" 
                    :icon="EmailInput.icon"  
                    :icon_visible="EmailInput.iconVisible" 
                    :icon_on_click="EmailInput.iconOnClick"
                    :hint="EmailInput.hint"
                    :hint_button_visible="EmailInput.hintButtonVisible"
                    :label="EmailInput.label"
                    :reason="EmailInput.reason"
                    v-model="EmailInput.value">
                </InputGroup>
                <InputGroup
                    :key="PasswordInput.id" 
                    :id="PasswordInput.id" 
                    :type="PasswordInput.type" 
                    :icon="PasswordInput.icon"  
                    :icon_visible="PasswordInput.iconVisible" 
                    :icon_on_click="PasswordInput.iconOnClick"
                    :hint="PasswordInput.hint"
                    :hint_button_visible="PasswordInput.hintButtonVisible"
                    :label="PasswordInput.label"
                    :reason="PasswordInput.reason"
                    v-model="PasswordInput.value">
                </InputGroup>
                <InputGroup
                    :key="PasswordRepeatInput.id" 
                    :id="PasswordRepeatInput.id" 
                    :type="PasswordRepeatInput.type" 
                    :icon="PasswordRepeatInput.icon"  
                    :icon_visible="PasswordRepeatInput.iconVisible" 
                    :icon_on_click="PasswordRepeatInput.iconOnClick"
                    :hint="PasswordRepeatInput.hint"
                    :hint_button_visible="PasswordRepeatInput.hintButtonVisible"
                    :label="PasswordRepeatInput.label"
                    :reason="PasswordRepeatInput.reason"
                    v-model="PasswordRepeatInput.value">
                </InputGroup>
        </BasicForm>
        <h4 class="signin-text">
            <span>Already have an account?</span>
            <br/>
            <router-link to="/signin" class="signin-text-link">Sign In</router-link>
        </h4>
    </div>
   
</template>

<script>
import BasicForm from '@/components/BasicForm.vue';
import InputGroup from '@/components/InputGroup.vue';
import User from '@/classes/User';
const POPUP_TEXT = "User with such email already exists"
export default{
    name: "SignupPage",
    components:{
      BasicForm,
      InputGroup,
    },
    data(){
        return{
            submitButtonText: "Sign up",
            SubmitButtonDisable: false,
            NameInput: {
                id: "name_id",
                type: "text",
                value: "",
                icon: "eye_icon.svg",
                iconVisible: false,
                iconOnClick: ()=>this.SwitchPasswordVisible(this.EmailInput),
                hint: "",
                hintVisible: false,
                label: "Full name",
                reason: "",
            },
            EmailInput: {
                id: "email_id",
                type: "text",
                value: "",
                icon: "eye_icon.svg",
                iconVisible: false,
                iconOnClick: ()=>this.SwitchPasswordVisible(this.EmailInput),
                hint: "",
                hintVisible: false,
                label: "Email",
                reason: "",
            },
            PasswordInput:  {
                id: "password_id",
                type: "password",
                value: "",
                icon: "eye_open_icon.svg",
                iconVisible: true,
                iconOnClick: ()=>this.SwitchPasswordVisible(this.PasswordInput),
                hint: "Password must contain 8+ symbols, 1 special and 2 capital letters",
                hintButtonVisible: true,
                label: "Password",
                reason: "",
            },
            PasswordRepeatInput:  {
                id: "password_repeat_id",
                type: "password",
                value: "",
                icon: "eye_open_icon.svg",
                iconVisible: true,
                iconOnClick: ()=>this.SwitchPasswordVisible(this.PasswordRepeatInput),
                hint: "",
                hintButtonVisible: false,
                label: "Repeat password",
                reason: "",
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
        setSubmitButtonDisable(disable){
            this.SubmitButtonDisable = disable;
        },
        isValueEmpty(){

        },
        isMatchRegex(string, regexp){
            return regexp.test(string);
        },
        isStringEmpty(string){
            return string.length > 0;
        },
        Validate(){
            let EmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let NameRegex = /[A-Za-z]/;
            let ReasonFlag = true;
            let OneSpecialSymbolRegex = /^[^\][\\/^!$.|?*+)(}{}]*[\][\\/^!$.|?*+)(}{}][^\][\\/^!$.|?*+)(}{}]*$/;
            let TwoCapitalLettersRegex = /^[^A-Z]*[A-Z][^A-Z]*[A-Z][^A-Z]*$/;
            this.NameInput.reason = "";
            this.EmailInput.reason = "";
            this.PasswordInput.reason = "";
            this.PasswordRepeatInput.reason = "";
            if (!this.isMatchRegex(this.EmailInput.value, EmailRegex)){
                ReasonFlag = false;
                if (this.isStringEmpty(this.EmailInput.value))
                    this.EmailInput.reason = "Enter valid Email";  
            }

            if (!(this.PasswordInput.value == this.PasswordRepeatInput.value)){
                ReasonFlag = false;
                this.PasswordInput.reason = this.PasswordRepeatInput.reason = "Passwords must match"
            }
            else{
                if (this.PasswordInput.value.length < 8 || !this.isMatchRegex(this.PasswordInput.value,TwoCapitalLettersRegex) || !this.isMatchRegex(this.PasswordInput.value, OneSpecialSymbolRegex)){
                    ReasonFlag = false;
                    this.PasswordInput.reason = this.PasswordRepeatInput.reason = "Enter valid password";
                }
            }

            if (!this.isMatchRegex(this.NameInput.value, NameRegex)){
                ReasonFlag = false;
                if (this.isStringEmpty(this.NameInput.value))
                    this.NameInput.reason = "Enter valid full name";
            }
            
            return ReasonFlag;
        },
        async onSubmit(){
            if (this.Validate()){
                const user = new User(
                    this.NameInput.value,
                    this.EmailInput.value,
                    this.PasswordInput.value
                );
                const MatchedUser = await this.$store.dispatch('autorization/register',user);
                if (MatchedUser){
                    this.$store.commit('setText', POPUP_TEXT);
                    this.$store.commit('setVisible', true);
                }
                else 
                    this.$router.replace('/signin');
            } 
            else{
                this.SubmitButtonDisable = true;
            }
        }
    },
    computed:{
        EmailValue:{
            get(){
                return this.EmailInput.value;
            }
        },
        NameValue:{
            get(){
                return this.NameInput.value;
            }
        },
        PasswordValue:{
            get(){
                return this.PasswordInput.value;
            }
        },
        PasswordRepeatValue:{
            get(){
                return this.PasswordRepeatInput.value;
            }
        },
    },
    watch:{
        EmailValue(){
            this.setSubmitButtonDisable(false);
        },
        NameValue(){
            this.setSubmitButtonDisable(false);
        },
        PasswordValue(){
            this.setSubmitButtonDisable(false);
        },
        PasswordRepeatValue(){
            this.setSubmitButtonDisable(false);
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