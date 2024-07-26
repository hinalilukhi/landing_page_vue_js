<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <main class="container mx-auto p-4">
      <InputForm />
      <LinkList />
    </main>
    <Footer />
  </div>
</template>

<script>

import InputForm from './components/InputForm.vue'
import LinkList from './components/LinkList.vue'

export default {
  components: {
    InputForm,
    LinkList,
  }
}
</script>

<style scoped>
</style>
