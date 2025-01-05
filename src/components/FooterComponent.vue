<template>
  <footer class="footer py-3">
    <div class="container text-center">
      <p>&copy; 2025 BaseX. All rights reserved.</p>
      <nav class="footer-nav">
        <ul class="d-flex justify-content-center gap-4">
          <li><a href="#privacy" class="footer-link">{{ $t('footer.privacy_policy') }}</a></li>
          <li><a href="#terms" class="footer-link">{{ $t('footer.terms_of_service') }}</a></li>
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

ul {
  list-style-type: none;
}

.footer {
  background: var(--background);
  color: var(--text-color);
  box-shadow: var(--box-shadow);
}
.footer-link {
  color: var(--secondary-color);
  text-decoration: none;
  transition: color 0.3s;
}
.footer-link:hover {
  color: var(--text-color);
}
</style>
