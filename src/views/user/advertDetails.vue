<template>
    <section class="advertDetails">
        <Header :title="$t('adDetails')"></Header>
        <div class="title">{{item.title}}</div>
        <div class="team">
            <img src="../../assets/images/my_head@2x.png" alt="" srcset="">
            <div class="tema_r">
                <div class="text">{{item.author}}</div>
                <div class="time">{{$t('ledgerVersion')}} : {{item.date}}</div>
            </div>
        </div>
        <div class="content">
            {{item.info}}
        </div>
    </section>
</template>
<script>
    export default {
        name: "advertDetails",
        props : ["index"],
        data (){
            return {
                item : {},
            }
        },
        created (){
        },
        watch : {
            adData (){
                this.item = this.adData[this.index] || {}
            }
        },
        mounted (){
            this.item = this.adData[this.index] || {}
        }
    };
</script>
<style lang="scss" scoped>
    // xm 2019/11/20
    .advertDetails {
        margin: 50px 15px;
        .title {
            font-size: 22px;
            font-weight: 600;
            padding: 20px 0;
            color: rgba(255, 255, 255, 1);
        }
        .team {
            display: flex;
            padding: 15px 0;
            align-items: center;
            margin-bottom: 15px;
            border-bottom: 1px solid $border3;
            img {
                width: 35px;
                height: 35px;
            }
            .tema_r {
                margin-left: 10px;
                color: $white;
                font-size: 14px;
                .time {
                    margin-top: 5px;
                    color: $color2;
                }
            }
        }
        .content {
            color: $white;
            div{
                margin-bottom: 20px;
            }
        }
    }
</style>
