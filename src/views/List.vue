<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
          <ion-back-button />
        </ion-buttons>
        <ion-title>
          List
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item button v-for="i of items" :key="i.title" @click="itemTapped(i)">
          <ion-icon :name="i.icon" slot="start" />
          {{i.title}}
          <div class="item-note" slot="end">
            {{i.note}}
          </div>
        </ion-item>
      </ion-list>
      <div v-if="selectedItem" padding>
        <h5>SELECTED ITEM</h5>
        You navigated here from <b>{{ selectedItem.title }}</b>
        <pre><code>{{ selectedItem }}</code></pre>
      </div>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'PageList',
  data() {
    return {
      selectedItem: null,
      items: [
        { icon: 'flask', title: 'Item 1', note: 'This is item #1' },
        { icon: 'wifi', title: 'Item 2', note: 'This is item #2' },
        { icon: 'beer', title: 'Item 3', note: 'This is item #3' },
        { icon: 'football', title: 'Item 4', note: 'This is item #4' },
        { icon: 'basketball', title: 'Item 5', note: 'This is item #5' },
        { icon: 'paper-plane', title: 'Item 6', note: 'This is item #6' },
        { icon: 'american-football', title: 'Item 7', note: 'This is item #7' },
        { icon: 'boat', title: 'Item 8', note: 'This is item #8' },
        { icon: 'bluetooth', title: 'Item 9', note: 'This is item #9' },
        { icon: 'build', title: 'Item 10', note: 'This is item #10' },
        { icon: 'home', title: 'Item 11', note: 'This is item #11' },
        { icon: 'building', title: 'Item 12', note: 'This is item #12' }
      ]
    }
  },
  methods: {
    itemTapped(item) {
      // console.log('clicked on item: ', item.title)
      this.$router.push({ name: 'list', params: { item: item }, query: {i: item.title.replace('Item ', '')} })

      // NOTE! when routing without a change of URL through query vars, the route is not changed.
      // this.$router.push({ name: 'list', params: { item: item } })
    },
    fetchData() {
      this.selectedItem = this.$route.params.item
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  }
}
</script>
