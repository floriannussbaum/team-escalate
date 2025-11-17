import { onMounted, onUnmounted } from 'vue'

const win = useWindowSafe()

export function useResize(callback: () => void, delay = 200, threshold = 100) {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let lastWidth = 0
  let lastHeight = 0

  const getViewport = () => {
    const { height: viewportHeight, width: viewportWidth } = useWindowSize()
    const visualViewport = win.visualViewport

    return {
      width: visualViewport?.width || viewportWidth.value,
      height: visualViewport?.height || viewportHeight.value,
    }
  }

  const onResize = () => {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      const { width, height } = getViewport()
      const deltaW = Math.abs(width - lastWidth)
      const deltaH = Math.abs(height - lastHeight)

      const significantChange = deltaW > 0 || deltaH > threshold

      if (significantChange) {
        lastWidth = width
        lastHeight = height
        callback()
      }
    }, delay)
  }

  onMounted(() => {
    const { width, height } = getViewport()
    lastWidth = width
    lastHeight = height

    win.addEventListener('resize', onResize)
    win.visualViewport?.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    win.removeEventListener('resize', onResize)
    win.visualViewport?.removeEventListener('resize', onResize)
    if (timeout) clearTimeout(timeout)
  })
}
