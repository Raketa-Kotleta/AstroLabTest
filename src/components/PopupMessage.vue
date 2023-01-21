<template>
<div class="container" :style="'background-color:' + BackgroundColor + '; color:' + text_color">
    <div class="text-wrapper">
        <span class="text">{{ message_text }}</span>
    </div>
    <div class="close-icon-wrapper">
        <img alt="" class="close-icon" src="../assets/message_cancel_icon.svg"/>
    </div>
</div>
</template>
<script>
export default{
    name: 'PopupMessage',
    props:{
        MessageText: String,
        ShowDuration: Number,
        BackgroundColor: {
            type: String,
            default: 'red',
        },
        TextColor:{
            type: String,
            default: 'white'
        }
    },
    data(){
        return{
            message_text: this.MessageText,
            show_duration: this.ShowDuration,
            background_color: this.BackgroundColor,
            text_color: this.TextColor,
        }
    },

}
</script>
<style scoped lang="scss">
.container{
    padding: 16px 20px;
    border-radius: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 18px 14px;
    display: flex;

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
            @include SetFontWithParameters("Inter", $extra-bold, $default-size);
        }
    }
}
</style>