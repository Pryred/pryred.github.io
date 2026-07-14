<template>
  <main class="container page">
    <span class="eyebrow">Curriculum vitae</span>
    <h1>Mon CV</h1>
    <hr class="rule" />
    <p class="intro">Mon parcours académique et professionnel en un coup d'œil.</p>

    <div class="cv-frame">
      <img src="/images/cv.png" alt="CV d'Alexis Declippel" />
    </div>

    <a href="/CV_Alexis_DECLIPPEL.pdf" download class="btn btn-primary">
      <i class="fas fa-download"></i> Télécharger mon CV (PDF)
    </a>
  </main>
</template>

<style scoped>
.page { padding-top: 4rem; max-width: 900px; }
h1 { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 1rem; }
.intro { color: var(--muted); margin-bottom: 2.5rem; }
.cv-frame {
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 24px 48px -24px rgba(0, 0, 0, 0.6);
}
.cv-frame img { width: 100%; }
</style>
