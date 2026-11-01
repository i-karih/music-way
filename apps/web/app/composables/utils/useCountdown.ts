import { useIntervalFn } from '@vueuse/core'

export function useCountdown(initialSeconds: number) {
	const remaining = ref(initialSeconds)

	const { pause, resume, isActive } = useIntervalFn(
		() => {
			if (remaining.value > 0) remaining.value--
			else pause()
		},
		1000,
		{ immediate: false }
	)

	const hours = computed(() => Math.floor(remaining.value / 3600))
	const minutes = computed(() => Math.floor((remaining.value % 3600) / 60))
	const seconds = computed(() => remaining.value % 60)
	const isExpired = computed(() => remaining.value <= 0)

	const formatted = {
		hours: computed(() => String(hours.value).padStart(2, '0')),
		minutes: computed(() => String(minutes.value).padStart(2, '0')),
		seconds: computed(() => String(seconds.value).padStart(2, '0')),
	}

	const reset = (newSeconds?: number) => {
		pause()
		remaining.value = newSeconds ?? initialSeconds
	}

	const restart = (newSeconds?: number) => {
		reset(newSeconds)
		resume()
	}

	return {
		hours,
		minutes,
		seconds,
		formatted,
		remaining,
		isActive,
		isExpired,
		start: resume,
		stop: pause,
		reset,
		restart,
	}
}
