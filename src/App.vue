<template>
  <LayoutHeaderTop />
  <LayoutHeader />
  <div class="wrapper">
    <router-view></router-view>
  </div>
  <LayoutFooter />
  <Transition>
    <ModalMenu v-show="isModalMenuShow" />
  </Transition>
  <Transition>
    <ModalAuth v-show="isModalAuthShow" />
  </Transition>
</template>

<script>

import LayoutHeader from '@/layout/LayoutHeader'
import LayoutFooter from '@/layout/LayoutFooter'
import LayoutHeaderTop from "@/layout/LayoutHeaderTop"
import ModalMenu from "@/components/modals/ModalMenu"
import ModalAuth from "@/components/modals/ModalAuth"

export default {
  name: 'App',
  components: {
    LayoutHeaderTop,
    LayoutFooter,
    LayoutHeader,
    ModalMenu,
    ModalAuth
  },
  mounted() {
    this.$store.dispatch('GET_MENU')
    this.$store.dispatch('GET_RESTAURANTS')
    const basket = localStorage.getItem('basket-buzzolls')
    if (basket) this.$store.commit('SET_BASKET', JSON.parse(basket))

  },
  computed: {
    isModalMenuShow() {
      return this.$store.getters.IS_MODAL_MENU_SHOW
    },
    isModalAuthShow() {
      return this.$store.getters.IS_MODAL_AUTH_SHOW
    }
  },
}
</script>

<style>

</style>
