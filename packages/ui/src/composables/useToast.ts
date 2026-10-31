import { toast } from 'vue-sonner'
import { UISpinner } from '../UI/Spinner'
import { UIIcon } from '../UI/Icons'
import { h } from 'vue'

const defaultIcon = h(UIIcon, { name: 'Info' })
const successIcon = h(UIIcon, { name: 'CircleCheck' })
const errorIcon = h(UIIcon, { name: 'CircleAlert' })
const warningIcon = h(UIIcon, { name: 'ClockAlert' })
const infoIcon = h(UIIcon, { name: 'Sparkles' })

export function useNotifications() {
	return {
		message: (message: string) => {
			toast(message, {
				icon: defaultIcon
			})
		},
		success: (message: string) => {
			toast.success(message, {
				icon: successIcon,
			})
		},
		error: (message: string) => {
			toast.error(message, {
				icon: errorIcon,
			})
		},
		warning: (message: string) => {
			toast.warning(message, {
				icon: warningIcon,
			})
		},
		info: (message: string) => {
			toast.info(message, {
				icon: infoIcon,
			})
		},

		loading: (message: string) => {
			return toast.loading(message, {
				icon: UISpinner,
			})
		},

		promise: <T>(
			promise: Promise<T>,
			messages: {
				loading: string
				success: string
				error: string
			}
		) => {
			const toastId = toast.loading(messages.loading, { icon: UISpinner })

			promise
				.then(() => {
					toast.success(messages.success, {
						id: toastId,
						icon: successIcon
					})
				})
				.catch(() => {
					toast.error(messages.error, {
						id: toastId,
						icon: errorIcon
					})
				})

			return promise
		},

		dismiss: toast.dismiss,
	}
}
