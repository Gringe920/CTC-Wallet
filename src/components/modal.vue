<template>
    <div class="modal-bg" v-show="show">
        <div class="modal-container">
            <div class="modal-header">
                {{title}}
            </div>
            <div class="modal-content">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <button class="cancel" @click="hideModal">取消</button>
                <button class="comfirm" @click="submit">{{btnText}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            btnText: {
                type: String,
                default: '确定'
            },
        },
        methods: {
            hideModal(){
                this.$emit('on-cancel')
            },
            submit(){
                this.$emit('on-ok')
            }
        }
    }
</script>

<style lang="scss" scoped>
.active-content{
    padding: 0 15px;
}
    .modal-bg{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        z-index: 10;
        .modal-container{
            background: $white;
            width: 92%;
            top: 50%;
            left: 50%;
   
            transform: translate(-50%, -50%);
            border-radius:7px;
            padding: 0 0 15px;
            position: absolute;
            color:$white;
            .modal-header{
                text-align: center;
                padding: 30px 0;
                color: $color2;
            }
            .modal-content{
                color: $color1;
                text-align: center;
            }
            .modal-footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 25px 15px 15px;
                button{
                    font-size: 16px;
                    text-align: center;
                    appearance: none;
                    border: 0;
                    width: 45%;
                    padding: 14px 0;
                    background-color: transparent;
                }
                .cancel{
                    border:1px solid $color1;
                    color: $color1;
                }
                .comfirm{
                    color: $btnFontColor;
                    background-color: $btnDefalutBg;
                }
            }
        }
        .inp-password{
            background:$black;
            border-radius:6px;
            border:1px solid $color1;
            margin: 0 15px;
            input{
                border: 0;
                appearance: none;
                outline: none;
                font-size: 14px;
                padding: 12px;
                color: $active;
                background-color: transparent;
                width: 100%;
                &::placeholder{
                    color: $color1;
                }

            }
        }
    }
</style>