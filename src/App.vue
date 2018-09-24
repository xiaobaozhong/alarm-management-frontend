<template>
  <div id="app" :style="{backgroundImage: `url(${require('~/bgc_guangfu.png')})`}">
    <Header/>
    <div class='body' :style="{backgroundImage: `url(${require('~/pane-bottom.png')})`}">
      <NavTab/>
      <!--ul class='leftmenu'>
        <li>
          <router-link to='/AlarmMonitor'>报警参数监控</router-link>
        </li>
        <li>
          <router-link to='/AlarmMap'>报警地图</router-link>
        </li>
        <li>
          <router-link to='/AlarmStatis'>报警统计分析</router-link>
        </li>
        <li>
          <router-link to='/AlarmCategoryStatis'>报警分类统计</router-link>
        </li>
      </ul>
      <ul-- class='rightmenu'>
        <li>
          <router-link to='/AlarmCapability'>报警性能评估</router-link>
        </li>
        <li>
          <router-link to='/SysAlarmJudge'>分系统报警性能评估</router-link>
        </li>
        <li>
          <router-link to='/KeyPointerMonitor'>关键报警点监测</router-link>
        </li>
        <li>
          <router-link to='/AlarmChangeManager'>报警变革管理</router-link>
        </li>
      </ul-->
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavTab from '@/components/NavTab.vue'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    Header,
    NavTab,
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 100% 100%;

  div.body{
    position: absolute;
    width: 100%;
    height: calc(100% - 55px);
    background-position: center;
    background-size: cover;
    ul{
      list-style-type: none;
      display: flex;
      float: left;
      li{
        margin-right: 13px;
      }
      position: absolute;
      top: -35px;
      a{
        color: #ffff;
        font-size: 15px;
        text-decoration: none;
      }

    }
    ul.leftmenu {
      left: 10px;
      li{
        margin-right: 25px;
      }
    }
    ul.rightmenu{
      right: 30px;
    }
  }
}
</style>
