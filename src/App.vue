<template>
  <div class="min-h-screen bg-gray-100">
    <main class="container mx-auto p-4">
      <InputForm />
      <LinkList />
    </main>
    <AppFooter />
  </div>
</template>

<script>

import InputForm from './components/InputForm.vue'
import LinkList from './components/LinkList.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    InputForm,
    LinkList,
    AppFooter
  }
}
</script>

<style scoped>
</style>
