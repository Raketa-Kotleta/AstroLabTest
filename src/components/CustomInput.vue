<template>
    <div class="input">
        <input :type="Type" :placeholder="PlaceHolder" :id="Id" class="input-text-field">
        <div class="input-image-wrapper" v-on:click="IconOnClick" v-if="IconVisible">
            <img :src="Icon" alt="" class="input-image">
        </div>
    </div>
</template>
<script>
export default{
    name: "CustomInput",
    props:{
        Id: {
            type: String,
            default: (Math.random*1000).toString(),
        },
        Type: String,
        Icon: String,
        IconVisible:{
            type: Boolean,
            default: true,
        },
        IconOnClick: {
            type: Function,
            default: ()=>{},
        },
        PlaceHolder:{
            type: String,
            default: "",
        }
    },
    data(){
        return{
           
        }
    },
    methods:{
        setType(newType){
            this.type = newType;
        },
        SwitchTextVisible(){
            if (this.type == "password")
                this.setType("text")
            else if (this.type == "text")
                this.setType("password"); 
        }
    }
}
</script>
<style lang="scss" scoped>
$text-field-padding-left: 18px;
$text-field-padding-right: 40px;
.input{
   width: 100%;
    border-radius: 50px;
    display: inline-block;
    position: relative;
    &-text-field{
        outline: none;
        background-color: $input;
        border: none;
        width: calc(100% - $text-field-padding-left - $text-field-padding-right);
        padding: 10px $text-field-padding-right 10px $text-field-padding-left;
        border-radius: 50px;
        @include SetFontWithParameters($inter,200,14px);
    }
    .input-image-wrapper{
        z-index: 2;
        position: absolute;
        top: 30%;
        right: 15px;
    }
}
</style>