<template>
    <div class="group">
        <div class="group-header">
            <label :for="id" class="label"> {{ label }}</label>
            <img alt="" src="../assets/hint_icon.svg" class="hint-img">
        </div>
        <CustomInput :id="id" :icon="icon" :type="input_type" :icon-visible="iconVisible" :icon-on-click="onClick"></CustomInput>
    </div>
</template>
<script>
import CustomInput from './CustomInput.vue';
export default{
    name: 'InputGroup',
    components:{
        CustomInput,
    },
    props: {
        Id: {
            type: String,
            default: (Math.random*1000).toString(),
        },
        Type: String,
        Icon: String,
        IconVisible: Boolean,
        IconOnClick: Function,
        PlaceHolder: String,
        Hint: String,
        HintVisible: Boolean,
        Label: String,
    },
    data(){
        return{
            id: this.Id,
            input_type: this.Type,
            icon: this.Icon,
            iconVisible: this.IconVisible,
            onClick: this.IconOnClick,
            hint: this.Hint,
            hint_visible: this.HintVisible,
            label: this.Label,
        }
    }
}

</script>
<style scoped lang="scss">
.group{
    &-header{
        display: flex;
        justify-content: space-between;
        padding: 0px 18px;
        .label{
            @include SetFontWithParameters("Inter", $thin, .75rem);
        }
        .hint-img{
            height: 12px;
            width: auto;
        }
    }
}
</style>