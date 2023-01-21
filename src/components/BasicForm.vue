<template>
    <div>
    <form action="" class="form" :style="'background-color:' + background_color">
        <InputGroup v-for="Field in Fields" 
        :key="Field.id" 
        :id="Field.id" 
        :type="Field.type" 
        :icon="Field.icon"  
        :icon-visible="Field.iconVisible" 
        :icon-on-click="Field.iconOnClick"
        :hint="Field.hint"
        :hint-button-visible="Field.hintButtonVisible"
        :label="Field.label"
        :styling="inputStyling"></InputGroup>
        <SubmitButton :enable="true" :text="SubmitButtonText" class="submit-btn"></SubmitButton>
    </form>
   
    
  </div>
</template>
<script>
// import InputGroup from './InputGroup.vue';
import InputGroup from '@/components/InputGroup.vue';
import SubmitButton from './SubmitButton.vue';
export default{
    name: 'BasicForm',
    components:{
        // InputGroup,
        InputGroup,
        SubmitButton
    },
    props:{
        BackgroundColor: {
            type: String,
            default: "white",
        },
        Fields: {
            type: Array,
            default:()=>[],
        },
        SubmitButtonText: String,
    },
    data(){
        return{
            inputStyling: "margin: 2px 0; ",
            background_color: this.BackgroundColor,
            fields: this.Fields,
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