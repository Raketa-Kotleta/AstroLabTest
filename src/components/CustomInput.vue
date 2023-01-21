<template>
    <div class="input">
        <input :type="type" :placeholder="placeholder" :id="id" class="input-text-field">
        <div class="input-image-wrapper" v-on:click="onClick" v-if="icon_visible">
            <img :src="icon" alt="" class="input-image">
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
            id: this.Id,
            type: this.Type,
            icon: this.Icon,
            icon_visible: this.IconVisible,
            placeholder: this.PlaceHolder,
            onClick: this.IconOnClick,
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
.input{
   
    border-radius: 50px;
    display: inline-block;
    position: relative;
    &-text-field{
        outline: none;
        background-color: $input;
        border: none;
        padding: 10px 34px 10px 18px;
        border-radius: 50px;
        @include SetFontWithParameters($inter,200,14px);
    }
    .input-image-wrapper{
        z-index: 2;
        position: absolute;
        top: 30%;
        right: 9px;
    }
}
</style>