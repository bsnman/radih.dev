<script setup lang="ts">
import { onMounted, ref } from 'vue'

const resumeDocUrl = new URL('/assets/resume/resume.docx', import.meta.env.BASE_URL).toString()
const resumePdfUrl = new URL('/assets/resume/resume.pdf', import.meta.env.BASE_URL).toString()

const hasPdf = ref(false)
const checked = ref(false)

onMounted(async () => {
  try {
    const response = await fetch(resumePdfUrl, { method: 'HEAD' })
    hasPdf.value = response.ok
  } catch {
    hasPdf.value = false
  } finally {
    checked.value = true
  }
})
</script>

<template>
  <div class="page">
    <section>
      <h1>Resume</h1>
      <p class="mt-3 text-lg text-slate-600">
        Download the latest resume or preview the PDF version when available.
      </p>
      <div class="mt-6">
        <a class="button-primary" :href="resumeDocUrl" download>Download Resume</a>
      </div>
    </section>

    <section v-if="checked" class="section">
      <div v-if="hasPdf" class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <iframe
          class="h-[70vh] w-full rounded-lg"
          :src="resumePdfUrl"
          title="Resume preview"
        />
      </div>
      <p v-else class="text-sm text-slate-500">
        PDF preview not found. Add `public/assets/resume/resume.pdf` to enable the embedded preview.
      </p>
    </section>
  </div>
</template>