<template>
    <section class="advert">
        <Header :title="$t('ad')"></Header>
        <div v-for="(item,index) in adData" :key="item.title" class="advertbox" @click="$router.push('/advertDetails/' + index)">
            <div class="text">{{item.title}}</div>
            <div class="time">{{$t('ledgerVersion')}} : {{item.date}}</div>
        </div>
    </section>
</template>
<script>
    export default {
        name: "advert",
        data() {
            return {};
        },
        methods: {

        }
    };
</script>
<style lang="scss" scoped>
    // xm 2019/11/20
    .advert {
        margin: 50px 0;
        .advertbox {
            padding: 20px 15px;
            border-top: 1px solid $border2;
            border-bottom: 1px solid $border2;
            .text {
                color: $white;
                font-size: 14px;
                margin-bottom: 10px;
            }
            .time {
                color: $color1;
                font-size: 12px;
            }
        }
    }
</style>

