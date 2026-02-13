<script setup lang="ts">
import { computed, onMounted } from 'vue'
import projectsData from '../content/projects.json'
import type { Project } from '../types/project'
import ProjectCard from '../components/ProjectCard.vue'
import PrefetchLink from '../components/PrefetchLink.vue'

const resumeUrl = new URL('../assets/resume/resume.pdf', import.meta.url).href

const projects = projectsData as Project[]

const featuredProjects = computed(() => {
  const picks = projects.filter((project) => project.featured)
  return (picks.length ? picks : projects).slice(0, 3)
})

const techStack = [
  'Vue 3',
  'React',
  'Nuxt.js',
  'TypeScript',
  'Django',
  'FastAPI',
  'Python',
  'PostgreSQL',
  'Docker',
  'AWS',
  'LangChain',
]

const credlyScriptId = 'credly-embed-script'
const credlyBadgeId = '721b696e-6fac-43ec-81fd-c2928a015f42'
const credlyHost = 'https://www.credly.com'

onMounted(() => {
  if (typeof document === 'undefined') return
  if (document.getElementById(credlyScriptId)) return

  const script = document.createElement('script')
  script.id = credlyScriptId
  script.async = true
  script.src = 'https://cdn.credly.com/assets/utilities/embed.js'
  document.body.appendChild(script)
})

</script>

<template>
  <div class="page">
    <section class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Portfolio</p>
        <h1 class="mt-4">Radih Jr Paraguas</h1>
        <p class="mt-4 text-lg text-slate-600">
          Full-stack software engineer building AI-powered platforms and scalable backend systems.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <PrefetchLink class="button-primary" to="/projects">View Projects</PrefetchLink>
          <a class="button" :href="resumeUrl" download>Download Resume</a>
        </div>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl">Currently</h2>
        <p class="mt-3 text-slate-600">
          Taking a Master of Information Technology at CQU Brisbane (Cybersecurity major) while
          exploring applied AI, developer tooling, and product design.
        </p>
        <div class="mt-6">
          <p class="text-sm font-semibold text-slate-500">Open for Work</p>
          <p class="mt-2 text-slate-600">Available for full-time roles and selected freelance projects.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Tech Stack</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tech in techStack" :key="tech" class="badge">
          {{ tech }}
        </span>
      </div>
    </section>

    <section class="section">
      <div class="flex items-center justify-between">
        <h2>Featured Projects</h2>
        <PrefetchLink class="text-sm font-medium" to="/projects">See all</PrefetchLink>
      </div>
      <div class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
      </div>
    </section>

    <section class="section">
      <h2>Certifications</h2>
      <div class="mt-4 flex">
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          :data-share-badge-id="credlyBadgeId"
          :data-share-badge-host="credlyHost"
        ></div>
      </div>
    </section>
  </div>
</template>
