<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { routeImports, type RoutePath } from '../router'

const route = useRoute()
const isOpen = ref(false)

type NavLink = {
  label: string
  to: RoutePath
}

const links: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
] 

const isActive = (to: RoutePath) => route.path === to
const closeMenu = () => {
  isOpen.value = false
}

const prefetched = new Set<RoutePath>()
const prefetchRoute = (to: RoutePath) => {
  if (to === route.path) return
  const loader = routeImports[to]
  if (!loader || prefetched.has(to)) return
  prefetched.add(to)
  void loader()
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div class="container flex items-center justify-between py-4">
      <RouterLink to="/" class="text-lg font-semibold text-ink">
        radih.dev
      </RouterLink>

      <nav class="hidden items-center gap-6 md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-slate-600 transition hover:text-ink"
          :class="isActive(link.to) ? 'text-ink' : ''"
          @mouseenter="prefetchRoute(link.to)"
          @focus="prefetchRoute(link.to)"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <button
        class="md:hidden"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <div class="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200">
          <span class="sr-only">Toggle</span>
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </button>
    </div>

    <div v-if="isOpen" class="border-t border-slate-200 bg-white md:hidden">
      <div class="container flex flex-col gap-2 py-4">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink"
          :class="isActive(link.to) ? 'bg-slate-100 text-ink' : ''"
          @click="closeMenu"
          @mouseenter="prefetchRoute(link.to)"
          @focus="prefetchRoute(link.to)"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
