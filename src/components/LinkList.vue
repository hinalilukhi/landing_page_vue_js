<template>
  <div class="mt-6">
    <div 
      v-for="(link, index) in links" 
      :key="index" 
      class="bg-white p-4 rounded shadow mb-2 flex justify-between items-center"
    >
      <span class="font-poppins text-body">{{ link }}</span>
      <button @click="copyToClipboard(link)" class="bg-cyan text-white p-2 rounded">
        Copy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['links'],
  methods: {
    copyToClipboard(link) {
      navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard');
      });
    }
  }
}
</script>
