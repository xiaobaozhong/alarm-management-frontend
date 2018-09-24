<template>
  <div class='nav-tab'>
    <div class='nav-btns' :style="{width: '41%',left:'0px'}">
      <router-link to='/AlarmMonitor'>报警参数监控</router-link>
      <router-link to='/AlarmMap'>报警地图</router-link>
      <router-link to='/AlarmStatis'>报警统计分析</router-link>
      <router-link to='/AlarmCategoryStatis'>报警分类统计</router-link>
    </div>
    <div class='nav-btns right-btns' :style="{width: '40%'}">
      <router-link to='/AlarmCapability'>报警性能评估</router-link>
      <router-link to='/SysAlarmJudge'>分系统报警性能评估</router-link>
      <router-link to='/KeyPointerMonitor'>关键报警点监测</router-link>
      <router-link to='/AlarmChangeManager'>报警变革管理</router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

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
  div.nav-tab{
    position: absolute;
    top: -20px;
    z-index: 99;
    width: 100%;
    height: 55px;
    div.nav-btns{
      position: absolute;
      display: inline-block;
      a{
        text-decoration: none;
        font-size: 15px;
        color: #ffffff;
        margin-right: 10px;
      }
    }
    div.right-btns{
      right: 20px;
    }
    .router-link-active{
      color: skyblue;
    }
  }

</style>
