import { useRoute, useRouter, type RouteLocationRaw } from 'vue-router'
import { routeImports, type RoutePath } from './index'

const prefetchedRoutes = new Set<RoutePath>()

export const useRoutePrefetch = () => {
  const router = useRouter()
  const route = useRoute()

  const prefetchRoute = (to: RouteLocationRaw) => {
    const path = router.resolve(to).path
    if (path === route.path) return
    if (!(path in routeImports)) return
    const routePath = path as RoutePath
    if (prefetchedRoutes.has(routePath)) return
    prefetchedRoutes.add(routePath)
    void routeImports[routePath]()
  }

  return { prefetchRoute }
}
