<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
          <ion-back-button />
        </ion-buttons>
        <ion-title>Ionic 4 & Vue Sidemenu</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-card class="welcome-card">
        <ion-img src="/shapes.svg" />
        <ion-card-header>
          <ion-card-subtitle>Get Started</ion-card-subtitle>
          <ion-card-title>Welcome to Ionic</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>This is a sample VueJS & Ionic 4 app created as an example of the default <code>$ ionic start ionic4-vue-app-sidemenu sidemenu</code> app with Angular.</p>
          <p>This codebase surely has a variety of coding errors, so please feel free to let us know.</p>
          <p>Check out some of the resources below for next steps.</p>
        </ion-card-content>
      </ion-card>
      <ion-list lines="none">
        <ion-list-header>
          <ion-label>Resources</ion-label>
        </ion-list-header>
        <ion-item href="https://github.com/ionic-team/ionic/tree/master/vue">
          <ion-icon slot="start" color="medium" name="book"></ion-icon>
          <ion-label>Ionic Vue (beta) Github page</ion-label>
        </ion-item>
        <ion-item href="https://vuejs.org/">
          <ion-icon slot="start" color="medium" name="book"></ion-icon>
          <ion-label>Vue.js Home page</ion-label>
        </ion-item>
        <ion-item href="https://ionicframework.com/docs/">
          <ion-icon slot="start" color="medium" name="book"></ion-icon>
          <ion-label>Ionic Documentation</ion-label>
        </ion-item>
        <ion-item href="https://ionicframework.com/docs/building/scaffolding">
          <ion-icon slot="start" color="medium" name="build"></ion-icon>
          <ion-label>Scaffold Out Your App</ion-label>
        </ion-item>
        <ion-item href="https://ionicframework.com/docs/layout/structure">
          <ion-icon slot="start" color="medium" name="grid"></ion-icon>
          <ion-label>Change Your App Layout</ion-label>
        </ion-item>
        <ion-item href="https://ionicframework.com/docs/theming/basics">
          <ion-icon slot="start" color="medium" name="color-fill"></ion-icon>
          <ion-label>Theme Your App</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>

  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return { }
  }
}
</script>
