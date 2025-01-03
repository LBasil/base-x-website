<template>
  <footer class="footer py-3">
    <div class="container text-center">
      <p>&copy; 2025 BaseX. All rights reserved.</p>
      <nav class="footer-nav">
        <ul class="d-flex justify-content-center gap-4">
          <li><a href="#privacy" class="footer-link">Privacy Policy</a></li>
          <li><a href="#terms" class="footer-link">Terms of Service</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background: #000000;
  color: #ffffff;
}
.footer-link {
  color: #00d9ff;
  text-decoration: none;
  transition: color 0.3s;
}
.footer-link:hover {
  color: #ffffff;
}
</style>
