<template>
  <div class="navbar-header">
    <ul class="nav navbar-top-links navbar-left">
      <li class="mega-dropdown" v-for="(item,index) in itemList" :key="index">
        <a :href="item.url" class="dropdown-toggle waves-effect waves-light" @click="clickActive($event)">
          <i :class="item.icon"></i>
          {{item.name}}
        </a>
      </li>
    </ul>
    <ul class="nav navbar-top-links navbar-right pull-right">
      <li class="mega-dropdown">
        <a class="dropdown-toggle waves-effect waves-light" href="javascript:void(0);" @click="refresh">
          <i class="el-icon-refresh"></i> 刷新</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'v-header',
    methods: {},
    data() {
      return {
        itemList: [{
          name: '分析',
          icon: 'mdi mdi-view-dashboard fa-fw',
          url: '#/app/dashboard'
        }, {
          name: '实时',
          icon: 'mdi mdi-play-circle fa-fw',
          url: '#/app/liveview'
        }, {
          name: '回放',
          icon: 'mdi mdi-backup-restore fa-fw',
          url: '#/app/playback'
        }, {
          name: '截图',
          icon: 'mdi mdi-camera fa-fw',
          url: '#/app/screenshots'
        }, {
          name: '摄像机',
          icon: 'mdi mdi-camcorder fa-fw',
          url: '#/app/srcmgr'
        }]
      }
    },
    mounted() {

    },
    methods: {
      // 刷新
      refresh() {
        this.$store.state.activeDate = new Date().getTime()
      },
      // 点击切换样式
      clickActive(e) {
        $(".mega-dropdown a").removeClass("active");
        $(e.currentTarget).addClass("active");
      }
    }
  }
</script>
<style scoped>
  .navbar-header {
    position: fixed;
    z-index: 999;
    height: 40px;
  }

  .navbar-top-links > li > a {
    padding: 0 15px;
    line-height: 40px;
    min-height: 40px;
  }

  a.active {
    color: gold;
  }
</style>
