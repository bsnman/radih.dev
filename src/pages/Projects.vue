<script setup lang="ts">
import { computed, ref } from 'vue'
import projectsData from '../content/projects.json'
import type { Project } from '../types/project'
import ProjectCard from '../components/ProjectCard.vue'
import TagFilter from '../components/TagFilter.vue'

const projects = projectsData as Project[]
const selectedTag = ref('All')

const tags = computed(() => {
  const set = new Set<string>()
  projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)))
  return Array.from(set).sort()
})

const filteredProjects = computed(() => {
  if (selectedTag.value === 'All') {
    return projects
  }
  return projects.filter((project) => project.tags.includes(selectedTag.value))
})
</script>

<template>
  <div class="page">
    <section>
      <h1>Projects</h1>
      <p class="mt-3 text-lg text-slate-600">
        A selection of projects spanning AI, SaaS platforms, and product-focused web apps.
      </p>
    </section>

    <section class="section">
      <TagFilter v-model="selectedTag" :tags="tags" />
      <div class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
    </section>
  </div>
</template>