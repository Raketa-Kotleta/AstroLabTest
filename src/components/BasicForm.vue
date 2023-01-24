<template>
    <div>
    <form action="" class="form" :style="'background-color:' + BackgroundColor" v-on:submit.prevent="$emit('submit')">
        <slot></slot>
        <SubmitButton :disable="button_disable" :text="submit_button_text" class="submit-btn"></SubmitButton>
    </form>
   
    
  </div>
</template>
<script>
// import InputGroup from './InputGroup.vue';
import SubmitButton from './SubmitButton.vue';
export default{
    name: 'BasicForm',
    components:{
        // InputGroup,
        SubmitButton
    },
    props:{
        background_color: {
            type: String,
            default: "white",
        },
        submit_button_text: String,
        button_disable: Boolean,
    },
    data(){
        return{
            InputStyling: "margin: 2px 0; ",
            BackgroundColor: this.background_color,
        }
    }
}
</script>
<style scoped lang="scss">
.form{
    padding: 18px 22px;
    margin: 20px 12px;
    border-radius: 40px;
    
}
.submit-btn{
    margin-top: 39px;
}

</style>