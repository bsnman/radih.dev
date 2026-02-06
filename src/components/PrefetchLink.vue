<script setup lang="ts">
import { computed } from 'vue'
import { type RouterLinkProps } from 'vue-router'
import { useRoutePrefetch } from '../router/prefetch'

type PrefetchLinkProps = RouterLinkProps & {
  prefetch?: boolean
}

const props = withDefaults(defineProps<PrefetchLinkProps>(), {
  prefetch: true,
})

const { prefetchRoute } = useRoutePrefetch()

const routerLinkProps = computed(() => {
  const { prefetch, ...rest } = props
  return rest
})

const prefetchLink = () => {
  if (!props.prefetch) return
  prefetchRoute(props.to)
}
</script>

<template>
  <RouterLink
    v-bind="routerLinkProps"
    @mouseenter="prefetchLink"
    @focus="prefetchLink"
  >
    <slot />
  </RouterLink>
</template>
