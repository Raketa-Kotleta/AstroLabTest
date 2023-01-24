<template>
    <div class="input">
        <input :type="type" :placeholder="place_holder" :id="id" class="input-text-field" :class="reason ? 'input-reasoned':''"  :value="value" @input="$emit('input', $event)">
        <div class="input-image-wrapper" v-on:click="icon_on_click" v-if="icon_visible">
            <img :src="icon" alt="" class="input-image">
        </div>
    </div>
</template>
<script>
export default{
    name: "CustomInput",
    props:{
        id: {
            type: String,
            default: (Math.random*1000).toString(),
        },
        type: String,
        value:{
            type: String,
            default: "",
        },
        icon: String,
        icon_visible:{
            type: Boolean,
            default: true,
        },
        icon_on_click: {
            type: Function,
            default: ()=>{},
        },
        place_holder:{
            type: String,
            default: "",
        },
        reason: Boolean,
    },
    data(){
        return{
           Type: this.type,
        }
    },
    methods:{
        setType(newType){
            this.Type = newType;
        },
        SwitchTextVisible(){
            if (this.Type == "password")
                this.setType("text")
            else if (this.Type == "text")
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
    &-reasoned{
        background-color: rgba($reason,.2);
    }
    .input-image-wrapper{
        z-index: 2;
        position: absolute;
        top: 30%;
        right: 15px;
    }
}
</style>