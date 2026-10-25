import { Theme, THEMES } from '~/types/theme'

export const useTheme = () => {
  const colorMode = useColorMode()
  const isLoad = ref(false)

  const preference = computed((): Theme => {
    return (colorMode.preference as Theme) ?? Theme.System
  })

  const label = computed(() => {
    if (!isLoad.value) return ''
    if (preference.value === Theme.System) return 'системная'
    return preference.value === Theme.Dark ? 'тёмная' : 'светлая'
  })

  const isDark = computed(() => colorMode.value === Theme.Dark)

  const cycle = () => {
    const current = THEMES.indexOf(preference.value)
    colorMode.preference = THEMES[(current + 1) % THEMES.length] ?? Theme.System
  }

  const set = (mode: Theme) => {
    colorMode.preference = mode
  }

  onMounted(() => {
    isLoad.value = true
  })

  return {
    preference,
    label,
    isDark,
    cycle,
    set,
    Theme,
  }
}
