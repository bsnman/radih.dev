<script setup lang="ts">
import workExperience from '../content/work-experience.md?raw'
import MarkdownRenderer from '../components/MarkdownRenderer.vue'
</script>

<template>
  <div class="page">
    <section>
      <h1>Experience</h1>
      <p class="mt-3 text-lg text-slate-600">
        A timeline of recent roles, responsibilities, and impact.
      </p>
    </section>

    <section class="section">
      <MarkdownRenderer class="timeline" :source="workExperience" />
    </section>
  </div>
</template>