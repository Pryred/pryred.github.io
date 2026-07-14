<template>
  <main class="container page">
    <span class="eyebrow">Projets — du plus récent au plus ancien</span>
    <h1>Détail des projets</h1>
    <hr class="rule" />

    <!-- Bandeau de filtre actif (arrivée depuis le carrousel de compétences) -->
    <div v-if="activeTech" class="filter-bar">
      <span>
        Projets utilisant <b>{{ skillLabel(activeTech) }}</b> — {{ filtered.length }} résultat(s)
      </span>
      <button class="btn btn-ghost small" @click="clearFilter">
        <i class="fas fa-xmark"></i> Réinitialiser le filtre
      </button>
    </div>
    <p v-else class="intro">
      Les projets sur lesquels j'ai travaillé durant ma formation, mes stages et mon alternance.
      Cliquez sur une technologie pour filtrer.
    </p>

    <div class="list">
      <article v-for="p in filtered" :key="p.id" :id="p.id" class="item">
        <div class="head">
          <h2>{{ p.title }}</h2>
          <span class="meta">{{ p.year }} · {{ p.meta }}</span>
        </div>
        <div class="content">
          <div class="visual">
            <img v-if="p.image" :src="p.image" :alt="p.title" loading="lazy" />
            <div v-else class="placeholder"><span>{{ p.title.split(' ')[0] }}</span></div>
          </div>
          <div class="details">
            <h3>Description</h3>
            <p>{{ p.description }}</p>
            <h3>Ce que j'ai réalisé</h3>
            <ul>
              <li v-for="a in p.achievements" :key="a">{{ a }}</li>
            </ul>
            <h3>Technologies utilisées</h3>
            <div class="tags">
              <span v-for="t in p.tags" :key="t.label" class="tag" :class="`t-${t.cat}`">{{ t.label }}</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <p v-if="filtered.length === 0" class="empty">
      Aucun projet ne correspond à ce filtre pour l'instant.
    </p>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects.js'
import { skillLabel } from '../data/skills.js'

const route = useRoute()
const router = useRouter()

const activeTech = computed(() => route.query.tech || null)

const filtered = computed(() =>
  activeTech.value
    ? projects.filter((p) => p.skillIds.includes(activeTech.value))
    : projects
)

function clearFilter() {
  router.replace({ query: {} })
}
</script>

<style scoped>
.page { padding-top: 4rem; }
h1 { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 1rem; }
.intro { color: var(--muted); max-width: 640px; margin-bottom: 2.5rem; }
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  background: var(--brass-soft);
  border: 1px solid rgba(212, 161, 95, 0.4);
  border-radius: 12px;
  padding: 0.9rem 1.3rem;
  margin-bottom: 2.5rem;
  color: var(--text);
}
.filter-bar b { color: var(--brass); }
.btn.small { padding: 0.5rem 1rem; font-size: 0.85rem; }
.list { display: flex; flex-direction: column; gap: 2.5rem; }
.item {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  scroll-margin-top: 90px;
}
.head {
  border-bottom: 1px solid var(--line);
  background: var(--surface-2);
  padding: 1.3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}
.head h2 { font-size: 1.35rem; margin: 0; }
.meta {
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brass);
  white-space: nowrap;
}
.content {
  padding: 2rem;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2.5rem;
  align-items: start;
}
.visual img, .visual .placeholder {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--line);
}
.placeholder {
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 20%, rgba(212, 161, 95, 0.18), var(--surface-2));
}
.placeholder span { font-family: var(--serif); font-size: 1.8rem; color: var(--brass); }
.details h3 {
  font-size: 1.05rem;
  color: var(--brass);
  margin: 1.6rem 0 0.7rem;
}
.details h3:first-child { margin-top: 0; }
.details p { color: var(--muted); }
.details ul { list-style: none; margin-bottom: 1.2rem; }
.details li { color: var(--muted); margin-bottom: 0.45rem; padding-left: 1.3rem; position: relative; }
.details li::before { content: '—'; position: absolute; left: 0; color: var(--brass); }
.empty { color: var(--muted); text-align: center; padding: 3rem 0; }
@media (max-width: 900px) { .content { grid-template-columns: 1fr; gap: 1.8rem; } }
@media (max-width: 576px) { .head, .content { padding: 1.3rem; } }
</style>
