<template>
    <div class="container">
        <!--<Header
          :title="$t('user.accountTitle')"
          :right-icon="require('../../assets/images/my_edit@2x.png')"
          :right-ev="openEdit"
          v-if="!editMode"
        />
        <Header
          :title="$t('user.accountTitle')"
          v-if="editMode"
          :left-icon="require('../../assets/images/top_off_white@2x.png')"
          :left-ev="openEdit"
        />-->
        <Header :title="$t('user.accountTitle')"/>
        <div class="account-list">
            <div class="account-item" v-for="(item, index) in account.accounts.address" :key="index">
                <i @click="selectAddress(index)" class="choose" :class="{chosen : index == addressIndex}"></i>
                <div class="item-content" @click="chooseItem(item)">
                    <div class="name">{{$t('title')}}</div>
                    <div class="address">{{item}}</div>
                </div>
            </div>

            <div class="account-import" v-if="!editMode" @click="$router.push({path: '/exportAddr'})">
                <i></i>
                {{$t('importAddress')}}
            </div>
        </div>
        <!--<div class="edit-bottom" v-show="editMode">
            <i class="choose" :class="{'chosen': isChosenAll}" @click="chooseAll"></i>
            <span>全选</span>
            <button class="delete">删除</button>
        </div>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                editMode: false,
                isChosenAll: false,
                addressIndex: 0,
            };
        },
        created (){
            this.addressIndex = this.account.accounts.addressIndex;
        },
        methods: {
            async selectAddress (index){
                if(index == this.account.accounts.addressIndex) return;
                this.account.accounts.addressIndex = index;
                this.addressIndex = index;
                await this.account.save();

            },
            openEdit() {
                this.editMode = !this.editMode;
                return true;
            },
            chooseItem(item) {
                if(!this.editMode) this.$router.push({path: '/addrDetail/' + item})
                // this.addressList.map(o => {
                //     if(o.name == item.name) o.isChosen = !item.isChosen
                //     return o;
                // })
                // this.isChosenAll = this.addressList.every(o => o.isChosen);
            },
            chooseAll() {
                this.isChosenAll = !this.isChosenAll;
                // this.addressList.map(item => (item.isChosen = this.isChosenAll));
            }
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        i.choose {
            width: 26px;
            height: 26px;
            border: 1px solid $white;
            display: inline-block;
            vertical-align: middle;
            border-radius: 50%;
            &.chosen {
                background-image: url("../../assets/images/selection@2x.png");
                border: 0;
                background-size: 100% 100%;
            }
        }
        .account-list {
            margin: 0 15px;
            padding-top: 75px;
            .account-item {
                background: $border2;
                border-radius: 10px;
                padding: 15px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                overflow: hidden;
                .item-content{
                    overflow: hidden;
                }
                i {
                    margin-right: 15px;
                }
                .name {
                    font-size: 14px;
                    color: $white;
                }
                .address {
                    color: $color1;
                    font-size: 12px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            .account-import {
                background-color: rgba(0, 194, 143, 0.1);
                color: $active;
                padding: 26px 15px;
                border-radius: 10px;
                font-size: 14px;
                i {
                    display: inline-block;
                    background-image: url("../../assets/images/copy@2x.png");
                    width: 14px;
                    height: 14px;
                    background-size: 100% 100%;
                    vertical-align: middle;
                }
            }
        }
        .edit-bottom {
            background-color: #2a2e3d;
            padding: 15px;
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: 15px;
            color: $white;
            font-size: 14px;
            i {
                margin-right: 5px;
            }
            .delete {
                background-color: $active;
                padding: 7px 20px;
                font-size: 14px;
                color: $white;
                position: absolute;
                right: 15px;
                top: 10px;
                border: 0;
                border-radius: 4px;
            }
        }
    }
</style>