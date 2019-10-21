<template>
  <div class="navbar-header" style="position:fixed;z-index: 999;">
    <ul class="nav navbar-top-links navbar-left">
      <!-- .Megamenu -->
      <li class="mega-dropdown">
        <a class="dropdown-toggle waves-effect waves-light" href="#/app/dashboard">
          <i class="mdi mdi-view-dashboard fa-fw"></i>
          分析
        </a>
      </li>
      <li class="mega-dropdown">
        <a class="dropdown-toggle waves-effect waves-light" href="#/app/liveview">
          <i class="mdi mdi-play-circle fa-fw"></i>
          实时
        </a>
      </li>
      <li class="mega-dropdown">
        <a class="dropdown-toggle waves-effect waves-light" href="#/app/playback">
          <i class="mdi mdi-backup-restore fa-fw"></i>
          回放
        </a>
      </li>
      <li class="mega-dropdown">
        <a class="dropdown-toggle waves-effect waves-light" href="#/app/screenshots">
          <i class="mdi mdi-camera fa-fw"></i>
          截图
        </a>
      </li>
      <li class="mega-dropdown">
        <a class="dropdown-toggle waves-effect waves-light" href="#/app/srcmgr">
          <i class="mdi mdi-camcorder fa-fw"></i>
          摄像机
        </a>
      </li>
      <!-- /.Megamenu -->
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'v-header',
    methods: {},
    data() {
      return {}
    },
    mounted() {

    },
    methods: {}
  }
</script>

