<template>
    <div class="">
        <h2 class="title">Sign in</h2>
        <BasicForm background_color="white" :submit_button_text="submitButtonText" @submit="onSubmit">
                <InputGroup
                    :key="EmailInput.id" 
                    :id="EmailInput.id" 
                    :type="EmailInput.type" 
                    :icon="EmailInput.icon"  
                    :icon_visible="EmailInput.iconVisible" 
                    :icon_on_click="EmailInput.iconOnClick"
                    :hint="EmailInput.hint"
                    :hint_button_visible="EmailInput.hintButtonVisible"
                    :reason="EmailInput.reason"
                    :reason_text_visible="EmailInput.reasonTextVisible"
                    :label="EmailInput.label"
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
                    v-bind:reason_text_visible="PasswordInput.reasonTextVisible"
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
import store from '@/store';
import BasicForm from '@/components/BasicForm.vue';
import InputGroup from '@/components/InputGroup.vue';
const USER_AUTORIZATION_ERROR_TEXT = "Wrong email or password";
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
                    type: "text",
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
                    reasonTextVisible: false,
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
        async onSubmit(){
            const email = this.EmailInput.value;
            const IsLoggined = await this.$store.dispatch('autorization/login', email);
            if (IsLoggined) {
                store.commit('setVisible',false)
                this.$router.replace('/home');
            }
            else{
                store.dispatch('ShowPopupMessage', USER_AUTORIZATION_ERROR_TEXT, { root: true });
                this.EmailInput.reason = "Worng Email";
                this.PasswordInput.reason = "Wrong Password";
            }
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