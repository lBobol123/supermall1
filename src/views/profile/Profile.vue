<template>
  <div id="profile">
    <nav-bar class="profile_nav"><div slot="center">我的档案</div></nav-bar>
    <profile-login />
    <profile-info />
    <profile-under />

    <div class="seat"></div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import ProfileLogin from './profileComps/ProfileLogin'
import ProfileInfo from './profileComps/ProfileInfo'
import ProfileUnder from './profileComps/ProfileUnder'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileLogin,
    ProfileInfo,
    ProfileUnder
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .profile_nav {
    position: sticky;
    top: 0;
    background-color: #ff8198;
    color: #fff;
  }
  .seat {
    height: 13.06667vw;
  }
</style>
