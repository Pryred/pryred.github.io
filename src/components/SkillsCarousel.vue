<template>
  <div
    class="carousel"
    @mouseenter="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="resume"
  >
    <button class="arrow prev" aria-label="Compétences précédentes" @click="go(index - 1)">
      <i class="fas fa-arrow-left"></i>
    </button>

    <div class="viewport">
      <div class="track" :style="{ transform: `translateX(-${index * 100}%)` }">
        <div v-for="cat in skillCategories" :key="cat.num" class="slide">
          <span class="cat">{{ cat.num }} — {{ cat.title }}</span>
          <h3>{{ cat.subtitle }}</h3>
          <div class="chips">
            <template v-for="item in cat.items" :key="item.label">
              <!-- Compétence reliée à au moins un projet : cliquable -->
              <button
                v-if="countFor(item.id) > 0"
                class="chip clickable"
                :class="{ hot: item.hot }"
                :title="`Voir ${countFor(item.id)} projet(s) utilisant ${item.label}`"
                @click="goToProjects(item.id)"
              >
                {{ item.label }}
                <span class="count">{{ countFor(item.id) }}</span>
              </button>
              <!-- Compétence sans projet associé : simple étiquette -->
              <span v-else class="chip" :class="{ hot: item.hot }">{{ item.label }}</span>
            </template>
          </div>
        </div>
      </div>
    </div>

    <button class="arrow next" aria-label="Compétences suivantes" @click="go(index + 1)">
      <i class="fas fa-arrow-right"></i>
    </button>

    <div class="dots">
      <button
        v-for="(cat, k) in skillCategories"
        :key="k"
        :class="{ on: k === index }"
        :aria-label="`Aller à ${cat.title}`"
        @click="go(k)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { skillCategories } from '../data/skills.js'
import { projectsForSkill } from '../data/projects.js'

const router = useRouter()
const index = ref(0)
const n = skillCategories.length
let timer = null

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function countFor(id) {
  return id ? projectsForSkill(id).length : 0
}

function go(k) {
  index.value = ((k % n) + n) % n
  restart()
}

function tick() {
  index.value = (index.value + 1) % n
}

function restart() {
  clearInterval(timer)
  if (!reducedMotion) timer = setInterval(tick, 4000)
}

function pause() { clearInterval(timer) }
function resume() { restart() }

function goToProjects(skillId) {
  router.push({ name: 'projets', query: { tech: skillId } })
}

onMounted(restart)
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.carousel { position: relative; }
.viewport { overflow: hidden; border-radius: 18px; }
.track { display: flex; transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1); }
.slide {
  min-width: 100%;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2.6rem 3rem;
}
.cat {
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--brass);
}
h3 { font-size: 1.55rem; margin: 0.4rem 0 1.5rem; }
.chips { display: flex; flex-wrap: wrap; gap: 0.6rem; }
.chip {
  font-size: 0.9rem;
  font-weight: 500;
  font-family: var(--sans);
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  border: 1px solid var(--line);
  background: var(--surface-2);
  color: var(--text);
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.chip.clickable { cursor: pointer; }
.chip.clickable:hover { border-color: var(--brass); color: var(--brass); }
.chip.hot { border-color: rgba(212, 161, 95, 0.5); background: var(--brass-soft); color: var(--brass); }
.count {
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(233, 237, 243, 0.12);
  border-radius: 100px;
  padding: 0 0.45rem;
  line-height: 1.5;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;
}
.arrow:hover { background: var(--brass); border-color: var(--brass); color: var(--on-brass); }
.prev { left: -23px; }
.next { right: -23px; }
.dots { display: flex; justify-content: center; gap: 0.55rem; margin-top: 1.2rem; }
.dots button {
  width: 24px; height: 3px;
  border: none; border-radius: 2px;
  background: var(--line);
  cursor: pointer;
  transition: background 0.2s ease;
}
.dots button.on { background: var(--brass); }
@media (max-width: 900px) {
  .prev { left: 6px; }
  .next { right: 6px; }
  .slide { padding: 2rem 3.4rem; }
}
</style>
