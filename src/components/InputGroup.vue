<template>
    <div class="group" :style="Styling">
        <PopupHint :hint="Hint"  :hint-visible="hintTextVisible" ></PopupHint>
        <div class="group-header">
            <label :for="Id" class="label"> {{ Label }}</label>
            <img alt="" src="../assets/hint_icon.svg" class="hint-img" v-on:click="switchHintVisible" v-if="HintButtonVisible">
        </div>
        <CustomInput 
        :id="Id" 
        :icon="Icon" 
        :type="Type" 
        :icon-visible="IconVisible" 
        :reason="reason.length > 0" 
        :icon-on-click="IconOnClick" 
        :value="Value" 
        @input="$emit('input', $event.target.value)"></CustomInput>
        <div class="reason" v-show="reason_text_visible">
            <span class="reason-text">{{ reason }}</span>
        </div>
    </div>
</template>
<script>
import CustomInput from './CustomInput.vue';
import PopupHint from './PopupHint.vue';
export default{
    name: 'InputGroup',
    components:{
        CustomInput,
        PopupHint,
    },
    props: {
        Id: {
            type: String,
            default: (Math.random*1000).toString(),
        },
        Type: String,
        Icon: String,
        Value: String,
        IconVisible: Boolean,
        IconOnClick: Function,
        PlaceHolder: String,
        Hint: String,
        HintButtonVisible: Boolean,
        Label: String,
        Styling: String,
        reason: {
            type: String,
            default: "",
        },
        reason_text_visible: {
            type: Boolean,
            default: true,
        },
    },
    data(){
        return{
            hintTextVisible: false,
        }
    },
    methods:{
        switchHintVisible(){
            this.hintTextVisible = !this.hintTextVisible;
        }
    },
}

</script>
<style scoped lang="scss">
$padding-x: 18px;
.group{
    position: relative;
    &-header{
        display: flex;
        justify-content: space-between;
        padding: 0 $padding-x;
        .label{
            @include SetFontWithParameters("Inter", $normal, .75rem);
            line-height: 20px;
        }
        .hint-img{
            height: 12px;
            width: auto;
        }
    }
    .reason{
        &-text{
            color: $reason;
            @include SetFontWithParameters($inter, $thin, .625rem);
            padding: 0 $padding-x;
            line-height: 20px;
        }
    }
}
</style>