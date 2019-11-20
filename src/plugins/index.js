import Vue from "vue";
Vue.mixin({

  methods: {
    toroute(path){
      this.$router.push({ name: path});
    }
  }
})