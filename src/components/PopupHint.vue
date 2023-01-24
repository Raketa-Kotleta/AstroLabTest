<template >
<div class="hint"  v-if="hint_text_visible">
    <span class="hint-text" @click="()=>console.log(sss)">
        {{ hint}}
    </span>
</div>
</template>
<script>
export default{
    name: "PopupHint",
    props:{
        hint: String,
        hint_text_visible:{ 
            type:Boolean,
            default: false
        },
    },
    data(){
        return{
        }
    },
 
}
</script>

<style scoped lang="scss">
.hint{
    position: absolute;
    z-index: 10;
    border-radius: 8px;
    background-color: $hint;
    padding: 7px 11px 5px 11px;
    text-align: center;
    top: -55%;
    right: 0;
 
    @include SetFontWithParameters("Inter", $thin, .65rem);

   &::after{
        content: "";
        position: absolute;
        z-index: 104;
        top: 100%;
        right: 18px;
        width: 0; 
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid $hint;
        background-color: transparent;
    }
    &-text{
        color: white;
        text-align: center;
    }
}
</style>