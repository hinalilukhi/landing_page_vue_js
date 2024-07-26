<template>
  <div class="bg-darkViolet p-6 rounded-lg shadow-md">
    <form @submit.prevent="submitUrl" class="flex flex-col md:flex-row">
      <input 
        type="text" 
        v-model="url" 
        placeholder="Enter URL" 
        class="p-2 border rounded mb-2 md:mb-0 md:mr-2 flex-1"
      />
      <button class="bg-cyan text-white p-2 rounded" type="submit">
        Submit
      </button>
      <p v-if="error" class="text-red mt-2 md:mt-0 md:ml-2">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      error: ''
    }
  },
  methods: {
    submitUrl() {
      if (!this.url) {
        this.error = 'URL cannot be empty';
      } else {
        this.$emit('add-url', this.url);
        this.url = '';
        this.error = '';
      }
    }
  }
}
</script>

<style scoped>
</style>
