<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ tags: string[]; modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const options = computed(() => ['All', ...props.tags])

const select = (tag: string) => {
  emit('update:modelValue', tag)
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="tag in options"
      :key="tag"
      type="button"
      class="rounded-full border px-3 py-1 text-sm transition"
      :class="
        modelValue === tag
          ? 'border-accent bg-accent text-white'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
      "
      @click="select(tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>