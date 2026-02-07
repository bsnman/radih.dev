<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

type ContactDraft = {
  name: string
  email: string
  message: string
}

const formAction = 'https://formspree.io/f/xwvneobe'
const storageKey = 'contactFormDraft'
const debounceMs = 400

const name = ref('')
const email = ref('')
const message = ref('')

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref<string | null>(null)

let saveTimer: ReturnType<typeof window.setTimeout> | null = null
const handleVisibilityChange = () => {
  if (document.visibilityState === 'hidden') {
    flushPersist()
  }
}

const getStorage = () => {
  try {
    return window.sessionStorage
  } catch {
    return null
  }
}

const loadDraft = () => {
  const storage = getStorage()
  if (!storage) return

  try {
    const raw = storage.getItem(storageKey)
    if (!raw) return
    const parsed = JSON.parse(raw) as Partial<ContactDraft>
    name.value = parsed.name ?? ''
    email.value = parsed.email ?? ''
    message.value = parsed.message ?? ''
  } catch {
    // Ignore storage or parsing errors to avoid breaking the UI.
  }
}

const persistDraft = () => {
  const storage = getStorage()
  if (!storage) return

  const draft: ContactDraft = {
    name: name.value,
    email: email.value,
    message: message.value,
  }

  const isEmpty = !draft.name && !draft.email && !draft.message

  try {
    if (isEmpty) {
      storage.removeItem(storageKey)
      return
    }
    storage.setItem(storageKey, JSON.stringify(draft))
  } catch {
    // Ignore storage errors.
  }
}

const schedulePersist = () => {
  if (saveTimer) {
    window.clearTimeout(saveTimer)
  }
  saveTimer = window.setTimeout(() => {
    persistDraft()
  }, debounceMs)
}

const flushPersist = () => {
  if (saveTimer) {
    window.clearTimeout(saveTimer)
    saveTimer = null
  }
  persistDraft()
}

const clearDraft = () => {
  const storage = getStorage()
  if (!storage) return
  try {
    storage.removeItem(storageKey)
  } catch {
    // Ignore storage errors.
  }
}

const handleSubmit = async () => {
  submitSuccess.value = false
  submitError.value = null
  isSubmitting.value = true

  try {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('message', message.value)

    const response = await fetch(formAction, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    clearDraft()
    name.value = ''
    email.value = ''
    message.value = ''
    submitSuccess.value = true
  } catch {
    submitError.value = 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

watch([name, email, message], () => {
  schedulePersist()
})

onBeforeRouteLeave(() => {
  flushPersist()
})

onMounted(() => {
  loadDraft()

  window.addEventListener('beforeunload', flushPersist)
  window.addEventListener('pagehide', flushPersist)
  window.addEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
  if (saveTimer) {
    window.clearTimeout(saveTimer)
  }

  window.removeEventListener('beforeunload', flushPersist)
  window.removeEventListener('pagehide', flushPersist)
  window.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<template>
  <div class="page">
    <section>
      <h1>Contact</h1>
      <p class="mt-3 text-lg text-slate-600">
        Want to collaborate or chat? Reach out through email or the form below.
      </p>
    </section>

    <section class="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl">Direct</h2>
        <div class="mt-4 space-y-2 text-sm">
          <p>
            <span class="font-semibold text-slate-600">Email:</span>
            <a href="mailto:radihjrprgs@example.com" class="ml-2">radihjrprgs@example.com</a>
          </p>
          <p>
            <span class="font-semibold text-slate-600">GitHub:</span>
            <a href="https://github.com/bsnman" target="_blank" rel="noreferrer" class="ml-2">@bsnman</a>
          </p>
          <p>
            <span class="font-semibold text-slate-600">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/radih-jr-paraguas-b1a468154/" target="_blank" rel="noreferrer" class="ml-2">
              /in/radih-jr-paraguas-b1a468154
            </a>
          </p>
        </div>
      </div>

      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl">Send a Message</h2>
        <p class="mt-2 text-sm text-slate-500">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <form
          class="mt-4 space-y-4"
          method="POST"
          :action="formAction"
          @submit.prevent="handleSubmit"
        >
          <div>
            <label class="text-sm font-medium text-slate-600" for="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minlength="2"
              v-model="name"
              class="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label class="text-sm font-medium text-slate-600" for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              v-model="email"
              class="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label class="text-sm font-medium text-slate-600" for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              minlength="10"
              v-model="message"
              class="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            ></textarea>
          </div>
          <button class="button-primary" type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending…' : 'Send Message' }}
          </button>
          <p v-if="submitSuccess" class="text-sm text-emerald-600">Message sent. Thanks!</p>
          <p v-else-if="submitError" class="text-sm text-rose-600">
            {{ submitError }}
          </p>
        </form>
      </div>
    </section>
  </div>
</template>
