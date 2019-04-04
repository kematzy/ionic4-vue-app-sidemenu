<template>
  <div id="app">
    <ion-app>
      <ion-split-pane>
        <ion-menu>
          <ion-header>
            <ion-toolbar>
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-menu-toggle auto-hide="false" v-for="p of appPages" :key="p.name">
                <ion-item @click="navigate(p.url)">
                  <ion-icon slot="start" :name="p.icon" />
                  <ion-label>
                    {{p.title}}
                  </ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-vue-router main />
      </ion-split-pane>
    </ion-app>
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
      appPages: [
        {
          title: 'Home',
          url: '/',
          icon: 'home'
        },
        {
          title: 'List',
          url: '/list',
          icon: 'list'
        }
      ]
    }
  },
  methods: {
    navigate(url) {
      this.$router.push(url)
    }
  }
}
</script>
