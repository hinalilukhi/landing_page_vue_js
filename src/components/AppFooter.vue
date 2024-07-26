<!-- AppFooter.vue -->
<template>
  <footer class="bg-veryDarkViolet text-white p-4 mt-auto">
    <div class="flex justify-center space-x-4">
      <a href="#" class="text-white"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
      <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
    </div>
    <p class="text-center font-poppins mt-4">© 2024 Your Company</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.bg-veryDarkViolet {
  background-color: #2e004f; /* Adjust the color code as needed */
}

.font-poppins {
  font-family: 'Poppins', sans-serif; /* Ensure Poppins font is imported in your project */
}
</style>
