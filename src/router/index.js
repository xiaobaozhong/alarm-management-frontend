import Vue from 'vue'
import Router from 'vue-router'
import AlarmMonitor from '@/components/business/AlarmMonitor'
import AlarmCapability from '@/components/business/AlarmCapability'
import AlarmCategoryStatis from '@/components/business/AlarmCategoryStatis'
import AlarmChangeManager from '@/components/business/AlarmChangeManager'
import AlarmMap from '@/components/business/AlarmMap'
import AlarmStatis from '@/components/business/AlarmStatis'
import KeyPointerMonitor from '@/components/business/KeyPointerMonitor'
import SysAlarmJudge from '@/components/business/SysAlarmJudge'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/AlarmMonitor',
      name: 'AlarmMonitor',
      component: AlarmMonitor
    },
    {
      path: '/AlarmCapability',
      name: 'AlarmCapability',
      component: AlarmCapability
    },
    {
      path: '/AlarmCategoryStatis',
      name: 'AlarmCategoryStatis',
      component: AlarmCategoryStatis
    },
    {
      path: '/AlarmStatis',
      name: 'AlarmStatis',
      component: AlarmStatis
    },
    {
      path: '/AlarmChangeManager',
      name: 'AlarmChangeManager',
      component: AlarmChangeManager
    },
    {
      path: '/AlarmMap',
      name: 'AlarmMap',
      component: AlarmMap
    },
    {
      path: '/KeyPointerMonitor',
      name: 'KeyPointerMonitor',
      component: KeyPointerMonitor
    },
    {
      path: '/SysAlarmJudge',
      name: 'SysAlarmJudge',
      component: SysAlarmJudge
    }
  ]
})
