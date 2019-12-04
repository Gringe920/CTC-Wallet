<template>
    <section class="scanning">
        <!--<Header :title="$t(`wallet.scanning1`)" :righttext='$t(`wallet.scanning2`)'></Header>-->
        <Header :title="$t(`wallet.scanning1`)"></Header>
        <div class="content"></div>
        <div class="erweim">
            <div class="erbox"  @click="toRoute('/scanning')">
                <img v-if="!showshoukuan" src="../../assets/images/add_scan_white@2x(2).png" alt="" srcset="">
                <img   v-else src="../../assets/images/scan_white_prohibit.png" alt="" srcset="">
                <div :class="showshoukuan?'':'coloractive'">{{$t(`wallet.scanning1`)}}</div>
            </div>
            <div class="erbox" @click="toRoute('/shoukuan')">
                <img v-if="showshoukuan" src="../../assets/images/qr_white@2x.png" alt="" srcset="">
                <img v-else src="../../assets/images/qr_white_prohibit@2x.png" alt="" srcset="">
                <div :class="!showshoukuan?'':'coloractive'">{{$t(`wallet.scanning3`)}}</div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: "scanning",
        data(){
            return{

                showshoukuan:false
            }
        }
    };
</script>
<style lang="scss" scoped>
    body,
    html,
    #app {
        background: none !important;
    }

    .scanning {
        background: rgba(0, 0, 0, 0.01);
        padding-top: 50px;
        width: 100vw;
        height: 100vh;
        text-align: center;
        display: flex;
        justify-content: center;
        .content {
            margin-top: 30%;
            width: 70vw;
            max-width: 300px;
            height: 70vw;
            max-height: 300px;
            background: $white;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            opacity: 0.1;
            position: relative;
        }
        .coloractive{
            color: $white;
        }
        .erweim {
            position: absolute;
            bottom: 40px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            .erbox {
                color: $color1;
                font-size: 14px;
                img {
                    width: 30px;
                    height: 30px;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>

