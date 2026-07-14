<template>
  <footer>
    <div class="container inner">
      <p>&copy; 2026 <em>Alexis Declippel</em> — Toulouse, France</p>
      <div class="social">
        <a href="https://github.com/Pryred" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/alexis-declippel/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <span class="email">alexis.declippel2@gmail.com</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--line);
  padding: 2.2rem 0;
  margin-top: 4rem;
  color: var(--muted);
  font-size: 0.9rem;
}
.inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
p { margin: 0; }
em { font-family: var(--serif); color: var(--text); font-style: normal; }
.social { display: flex; align-items: center; gap: 1.2rem; }
.social a { color: var(--text); font-size: 1.3rem; }
.social a:hover { color: var(--brass); }
.email { color: var(--muted); }
@media (max-width: 576px) { .inner { justify-content: center; text-align: center; } }
</style>
