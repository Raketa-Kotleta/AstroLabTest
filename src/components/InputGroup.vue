<template>
    <div class="group" :style="styling">
        <PopupHint :hint="Hint"  :hint_text_visible="HintTextVisible"></PopupHint>
        <div class="group-header">
            <label :for="id" class="label"> {{ label }}</label>
            <img alt="" src="../assets/hint_icon.svg" class="hint-img" v-on:click="switchHintVisible" v-if="hint_button_visible">
        </div>
        <CustomInput 
        :id="id" 
        :icon="icon" 
        :type="type" 
        :icon_visible="icon_visible" 
        :reason="reason.length > 0" 
        :icon_on_click="icon_on_click" 
        :value="value" 
        @input="$emit('input', $event.target.value)"></CustomInput>
        <div class="reason" >
            <span v-show="reason_text_visible" class="reason-text">{{ reason }}</span>
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
        id: {
            type: String,
            default: (Math.random*1000).toString(),
        },
        type: String,
        icon: String,
        value: String,
        icon_visible: Boolean,
        icon_on_click: Function,
        place_holder: String,
        hint: String,
        hint_button_visible: Boolean,
        label: String,
        styling: String,
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
            HintTextVisible: false,
            Hint: this.hint,
        }
    },
    methods:{
        switchHintVisible(){
            this.HintTextVisible = !this.HintTextVisible;
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
        min-height: 20px;
        &-text{
            color: $reason;
            @include SetFontWithParameters($inter, $thin, .625rem);
            padding: 0 $padding-x;
            line-height: 20px;
        }
    }
}
</style>