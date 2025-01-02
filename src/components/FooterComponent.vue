<template>
  <footer class="footer py-3">
    <div class="container text-center">
      <p class="m-0">&copy; 2025 BaseX. All rights reserved.</p>
      <nav class="footer-nav mt-2">
        <ul class="list-unstyled d-flex justify-content-center gap-3">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
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
  background: #0d1117;
  color: #ccc;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-nav a {
  color: #58a6ff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: #fff;
}
</style>