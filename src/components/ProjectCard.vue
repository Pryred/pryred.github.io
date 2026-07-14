<template>
  <article class="card">
    <router-link :to="`/projets#${project.id}`" class="thumb">
      <img v-if="project.image" :src="project.image" :alt="project.title" loading="lazy" />
      <div v-else class="placeholder"><span>{{ initials }}</span></div>
    </router-link>
    <div class="body">
      <span class="year">{{ project.year }} — {{ project.meta }}</span>
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
      <div class="tags">
        <span v-for="t in project.tags" :key="t.label" class="tag" :class="`t-${t.cat}`">{{ t.label }}</span>
      </div>
      <router-link :to="`/projets#${project.id}`" class="more">
        Voir les détails <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ project: { type: Object, required: true } })

const initials = computed(() =>
  props.project.title.split(' ')[0].slice(0, 2).toUpperCase()
)
</script>

<style scoped>
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}
.card:hover {
  transform: translateY(-5px);
  border-color: rgba(212, 161, 95, 0.55);
  box-shadow: 0 24px 48px -24px rgba(0, 0, 0, 0.6);
}
.thumb { display: block; height: 190px; overflow: hidden; border-bottom: 1px solid var(--line); }
.thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.card:hover .thumb img { transform: scale(1.04); }
.placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 20%, rgba(212, 161, 95, 0.18), var(--surface-2));
}
.placeholder span {
  font-family: var(--serif);
  font-size: 3rem;
  color: var(--brass);
}
.body { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; flex-grow: 1; }
.year {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brass);
}
h3 { font-size: 1.25rem; margin: 0; }
p { color: var(--muted); font-size: 0.95rem; margin: 0; flex-grow: 1; }
.more {
  font-size: 0.88rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.3rem;
}
.more i { font-size: 0.72rem; transition: transform 0.2s ease; }
.more:hover i { transform: translateX(4px); }
</style>
