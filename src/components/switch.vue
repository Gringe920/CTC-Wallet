<template>
  <section class="i-radio-box">
    <input type="checkbox" v-model="swithc">
    <div class="i-switch">
        <div class="i-cursor"></div>
        <div class="i-label i-label-on"></div>
        <div class="i-label i-label-off"></div>
    </div>
  </section>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "change"
  },
  props: ["value"],
  computed: {
    swithc: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("change", value);
      }
    }
  },
  data(){
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
  .i-radio-box {
	position:relative;
	width:36px;
	height:20px;
}
.i-radio-box input {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	opacity:0;
	z-index:99;
}
.i-switch {
	overflow:hidden;
	position:relative;
	width:100%;
	height:100%;
	border-radius:100px;
	background:#D8D8D8;
	box-shadow:0px 0px 2px #D8D8D8 inset;
	transition:all 0.2s ease-in-out;
}
.i-radio-box input:checked~.i-switch {
	background: $fontActive;
	box-shadow:0px 0px 2px $fontActive inset;
}
.i-cursor {
	display:inline-block;
	position:absolute;
	top:2px;
	left:2px;
	width:16px;
	height:16px;
	border-radius:100%;
	background:#fff;
	box-shadow:0 1px 2px 0 rgba(0,0,0,0.2),0 3px 4px 0 rgba(0,0,0,0.1);
	z-index:10;
	-webkit-transition:all 0.2s linear;
	-ms-transition:all 0.2s linear;
	transition:all 0.2s linear;
}
.i-radio-box input:checked~.i-switch .i-cursor {
	left:18px;
}
.i-label {
	position:absolute;
	top:0;
	width:70px;
	font-size:28px;
	line-height:58px;
	color:#fff;
	text-align:center;
	-webkit-transition:all 0.2s linear;
	-ms-transition:all 0.2s linear;
	transition:all 0.2s linear;
}
.i-label-on {
	left:-18px;
	opacity:0.5;
}
.i-radio-box input:checked~.i-switch .i-label-on {
	left:3px;
	opacity:1;
}
.i-label-off {
	opacity:1;
	right:0;
}
.i-radio-box input:checked~.i-switch .i-label-off {
	opacity:0.5;
	right:-18px;
}
</style>