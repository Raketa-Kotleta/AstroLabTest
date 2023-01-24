<template>
    <div>
    <form action="" class="form" :style="'background-color:' + background_color" v-on:submit.prevent="$emit('submit')">
        <slot></slot>
        <SubmitButton :disable="button_disable" :text="SubmitButtonText" class="submit-btn"></SubmitButton>
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
        BackgroundColor: {
            type: String,
            default: "white",
        },
        SubmitButtonText: String,
        button_disable: Boolean,
    },
    data(){
        return{
            inputStyling: "margin: 2px 0; ",
            background_color: this.BackgroundColor,
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