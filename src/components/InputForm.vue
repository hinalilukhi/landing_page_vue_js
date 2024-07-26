<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <form @submit.prevent="submitUrl">
      <div class="flex flex-col">
        <input 
          type="text" 
          v-model="url" 
          placeholder="Enter URL" 
          class="p-2 border rounded mb-2"
        />
        <button class="bg-blue-500 text-white p-2 rounded" type="submit">
          Submit
        </button>
        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
      </div>
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
