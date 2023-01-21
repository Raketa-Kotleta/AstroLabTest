<template>
    <form action="" class="form" :style="'background-color:' + background_color">
        <InputGroup v-for="field in fields" 
        :key="field.id" 
        :id="field.id" 
        :type="field.type" 
        :icon="field.icon"  
        :icon-visible="field.iconVisible" 
        :icon-on-click="field.iconOnClick"
        :hint="field.hint"
        :hint-visible="field.hintVisible"
        :label="field.label"></InputGroup>
    </form>
</template>
<script>
// import InputGroup from './InputGroup.vue';
import InputGroup from '@/components/InputGroup.vue';
export default{
    name: 'BasicForm',
    components:{
        // InputGroup,
        InputGroup,
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
    },
    data(){
        return{
            background_color: this.BackgroundColor,
            fields: this.Fields,
        }
    }
}
</script>
<style scoped>
.form{
    padding: 18px 22px;
    margin: 20px 12px;
    border-radius: 40px;
}
</style>