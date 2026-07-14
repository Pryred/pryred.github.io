<template>
  <header>
    <nav class="container">
      <router-link to="/" class="logo">Alexis<em>.</em>Declippel</router-link>
      <ul class="menu">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/projets">Projets</router-link></li>
        <li><router-link to="/cv">CV</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(16, 19, 25, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.15rem;
  padding-bottom: 1.15rem;
}
.logo {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--text);
}
.logo em { color: var(--brass); font-style: normal; }
.menu { display: flex; gap: 2rem; list-style: none; }
.menu a {
  font-size: 0.92rem;
  color: var(--muted);
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}
.menu a:hover { color: var(--text); border-color: var(--brass); }
.menu a.router-link-active { color: var(--text); border-color: var(--brass); }
@media (max-width: 576px) { .menu { gap: 1.1rem; } }
</style>
