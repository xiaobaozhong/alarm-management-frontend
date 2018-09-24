<template>
  <div class='header' :style="headerStyle">
  </div>
</template>

<script>

  export default {
    name:'Header',
    props:[''],
    data () {
      return {
        headerStyle: {
          backgroundImage: `url(${require('~/pane-top.png')})`
        },
        bkg: require('~/pane-top.png')
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
  div.header{
    width: 100%;
    height: 55px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    ul{
      list-style: none;
      display: flex;
      li{
        margin-right: 10px;
      }
    }
    ul.leftmenu {
      position: absolute;
      left: 5px;
    }

    ul.rightmenu{
      position: absolute;
      right: 5px;
    }
  }
</style>
