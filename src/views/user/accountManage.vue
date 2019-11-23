<template>
  <div class="container">
    <Header
      title="账户管理"
      :right-icon="require('../../assets/images/my_edit@2x.png')"
      :right-ev="openEdit"
      v-show="!editMode"
    />
    <Header
      title="账户管理"
      v-show="editMode"
      :left-icon="require('../../assets/images/top_off_white@2x.png')"
      :left-ev="openEdit"
    />
    <div class="account-list">
      <div
        class="account-item"
        @click="chooseItem(item)"
        v-for="(item, index) in addressList"
        :key="index"
      >
        <i v-show="editMode" class="choose" :class="{'chosen': item.isChosen}"></i>
        <div class="item-content">
          <div class="name">RCP地址</div>
          <div class="address">RKWPDQTXW3FUPZTUNVCEAUG8HEDXEX7ZWQ</div>
        </div>
      </div>

      <div class="account-import" v-if="!editMode" @click="$router.push({path: '/exportAddr'})">
        <i></i>
        导入地址
      </div>
    </div>
    <div class="edit-bottom" v-show="editMode">
      <i class="choose" :class="{'chosen': isChosenAll}" @click="chooseAll"></i>
      <span>全选</span>
      <button class="delete">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editMode: false,
      isChosenAll: false,
      // 后台返回数据，自行修改
      addressList: [
        {
          name: "RCP地址",
          address: "RKWPDQTXW3FUPZTUNVCEAUG8H",
          isChosen: false
        },
        {
          name: "RCP地址1",
          address: "RKWPDQTXW3FUPZTUNVCEAUG8H",
          isChosen: false
        },
        {
          name: "RCP地址2",
          address: "RKWPDQTXW3FUPZTUNVCEAUG",
          isChosen: false
        }
      ]
    };
  },
  methods: {
    openEdit() {
      this.editMode = !this.editMode;
      return true;
    },
    chooseItem(item) {
        this.addressList.map(o => {
            if(o.name == item.name) o.isChosen = !item.isChosen
            return o;
        })
        this.isChosenAll = this.addressList.every(o => o.isChosen);
    },
    chooseAll() {
      this.isChosenAll = !this.isChosenAll;
      this.addressList.map(item => (item.isChosen = !item.isChosen));
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  i.choose {
    min-width: 14px;
    height: 14px;
    border-radius: 7px;
    border: 1px solid #fff;

    display: inline-block;
    vertical-align: middle;
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
      background: #323645;
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
        color: #fff;
      }
      .address {
        color: #7d8398;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .account-import {
      background-color: rgba(0, 194, 143, 0.1);
      color: #00c28f;
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
    color: #fff;
    font-size: 14px;
    i {
      margin-right: 5px;
    }
    .delete {
      background-color: #00c28f;
      padding: 7px 20px;
      font-size: 14px;
      color: #fff;
      position: absolute;
      right: 15px;
      top: 10px;
      border: 0;
      border-radius: 4px;
    }
  }
}
</style>