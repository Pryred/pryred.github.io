<template>
  <main>
    <!-- ===== Hero ===== -->
    <section class="hero container">
      <div>
        <span class="eyebrow">Développeur full-stack — Toulouse</span>
        <h1>Construire des applications <em>utiles</em>, du front à la donnée.</h1>
        <p class="lead">
          Je suis Alexis Declippel, en <b>alternance chez Ubigreen</b> depuis septembre 2025 —
          Angular, .NET 8 et SQL Server — après y avoir effectué un stage de 3 mois et demi.
          Étudiant en BUT Informatique.
        </p>
        <div class="actions">
          <router-link to="/projets" class="btn btn-primary">Voir mes projets</router-link>
          <router-link to="/cv" class="btn btn-ghost">Mon CV</router-link>
        </div>
      </div>
      <div class="portrait">
        <img src="/images/photo_alexis.png" alt="Portrait d'Alexis Declippel" />
      </div>
    </section>

    <!-- ===== Compétences (carrousel) ===== -->
    <section class="skills container">
      <span class="eyebrow">Savoir-faire</span>
      <h2 class="section-title">Compétences techniques</h2>
      <hr class="rule" />
      <p class="hint">Le carrousel défile automatiquement — cliquez sur une compétence pour voir les projets qui l'utilisent.</p>
      <SkillsCarousel />
    </section>

    <!-- ===== À propos ===== -->
    <section class="about container">
      <span class="eyebrow">À propos</span>
      <h2 class="section-title">Qui suis-je&nbsp;?</h2>
      <hr class="rule" />
      <div class="about-grid">
        <p>Je m'appelle Alexis Declippel, j'ai 21 ans et je suis un passionné d'informatique. Étudiant en BUT Informatique et alternant chez Ubigreen, j'ai développé un intérêt pour les technologies numériques depuis mon plus jeune âge, ce qui guide aujourd'hui mon parcours.</p>
        <p>C'est l'univers de l'informatique dans sa globalité qui m'a toujours attiré, du développement logiciel à la gestion de données, en passant par l'infrastructure réseau. Chaque projet est l'occasion de découvrir de nouvelles technologies et d'approfondir mes connaissances.</p>
        <p>En dehors de mes activités académiques et professionnelles, je suis amateur de culture pop : mangas, animés et jeux vidéo font partie de mes loisirs. J'aime également beaucoup la musique, avec des styles très variés.</p>
        <p>Je pratique le volleyball en loisir, une activité qui me permet de déconnecter et d'entretenir l'esprit d'équipe. Plus largement, j'apprécie le sport sous toutes ses formes, ce qui m'aide à garder un bon équilibre.</p>
      </div>
    </section>

    <!-- ===== Projets ===== -->
    <section class="projects container">
      <span class="eyebrow">Sélection</span>
      <h2 class="section-title">Mes projets</h2>
      <hr class="rule" />
      <div class="grid">
        <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
      </div>
    </section>
  </main>
</template>

<script setup>
import SkillsCarousel from '../components/SkillsCarousel.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'
</script>

<style scoped>
.hero {
  padding-top: 5.5rem;
  padding-bottom: 3.5rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}
h1 {
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1.4rem;
}
h1 em { font-style: italic; color: var(--brass); }
.lead { color: var(--muted); font-size: 1.12rem; max-width: 32rem; margin-bottom: 2.2rem; }
.lead b { color: var(--text); font-weight: 600; }
.actions { display: flex; gap: 0.9rem; flex-wrap: wrap; }
.portrait { position: relative; max-width: 360px; justify-self: end; }
.portrait img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 200px 200px 16px 16px;
}
.portrait::after {
  content: '';
  position: absolute;
  inset: 14px -14px -14px 14px;
  border: 1px solid var(--brass);
  border-radius: 200px 200px 16px 16px;
  z-index: -1;
  opacity: 0.6;
}
.skills, .about, .projects { padding-top: 3rem; padding-bottom: 1.5rem; }
.hint { color: var(--muted); font-size: 0.92rem; margin-bottom: 1.4rem; }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem 2.2rem; }
.about-grid p {
  background: var(--surface);
  border: 1px solid var(--line);
  border-left: 2px solid var(--brass);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  color: var(--muted);
  margin: 0;
}
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.8rem; }
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; gap: 2.5rem; }
  .portrait { justify-self: center; }
  .about-grid { grid-template-columns: 1fr; }
}
@media (max-width: 576px) {
  .hero { padding-top: 3rem; }
  .actions .btn { width: 100%; justify-content: center; }
}
</style>
