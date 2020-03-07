<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import NoteService from './api/note'

  export default {
    mounted() {
      NoteService.test().then(res=>{
        console.log(res)
      })
    }
  }
</script>
<style lang="scss">
</style>
