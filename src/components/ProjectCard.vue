<script setup lang="ts">
import type { Project } from '../types/project'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="flex h-full flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
    <div>
      <h3 class="text-lg font-semibold text-ink">{{ project.title }}</h3>
      <p class="mt-3 text-sm text-slate-600">{{ project.description }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="badge">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap gap-3">
      <a
        v-if="project.repo"
        class="button"
        :href="project.repo"
        target="_blank"
        rel="noreferrer"
      >
        Repo
      </a>
      <a
        v-if="project.demo"
        class="button-primary"
        :href="project.demo"
        target="_blank"
        rel="noreferrer"
      >
        Live Demo
      </a>
    </div>
  </article>
</template>