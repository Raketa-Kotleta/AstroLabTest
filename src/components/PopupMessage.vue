<template>
<div class="container" :class="visible == true ? 'visible':'unvisible'">
    <div class="text-wrapper">
        <span class="text">{{ MessageText }}</span>
    </div>
    <div class="close-icon-wrapper" @click="ClosePopup" >
        <img alt="" class="close-icon" src="../assets/message_cancel_icon.svg"/>
    </div>
</div>
</template>
<script>
export default{
    name: 'PopupMessage',
    props:{
        MessageText: String,
        visible:{
            type: Boolean,
            default: true,
        },
        BackgroundColor: {
            type: String,
            default: 'red',
        },
    },
    data(){
        return{
           
        }
    },
    methods:{
        ClosePopup(){
            this.$emit("onupdate",false);
        }
    },
    // computed:{
    //     PropVisible:()=>{
    //         return this.props.visible;
    //     }
    // }
}
</script>
<style scoped lang="scss">
.visible{
    opacity: 1;

}
.unvisible{
    opacity: 0;
    
}
.container{
    padding: 16px 20px;
    border-radius: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 18px 14px;
    background-color: black;
    color: white;
    display: flex;
    transition: opacity .3s;

    .close-icon-wrapper, .text-wrapper{
        line-height: 1.2rem;
       
    }
    .close-icon-wrapper{
        flex: 1;
        .close-icon{
            width: 12px;
            height: 12px;
        }
    }
    .text-wrapper{
    flex: 10;
        .text{
            @include SetFontWithParameters("Inter", $normal, $default-size);
        }
    }
}
</style>