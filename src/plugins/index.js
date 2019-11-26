import Vue from "vue";
Vue.mixin({

  methods: {
    toRoute(path){
      this.$router.push({ path: path});
    }
  }
})