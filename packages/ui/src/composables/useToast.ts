import { h } from 'vue'
import { toast } from 'vue-sonner'

import { AlertIconMap } from '../UI/Alert/Alert.constants'
import { UIIcon } from '../UI/Icons'
import { UISpinner } from '../UI/Spinner'

const icon = (name: keyof typeof AlertIconMap) => () =>
	h(UIIcon, { name: AlertIconMap[name] })

export function useToast() {
	return {
		message: (message: string) => {
			toast(message, {
				icon: icon('default'),
			})
		},
		success: (message: string) => {
			toast.success(message, {
				icon: icon('success'),
			})
		},
		error: (message: string) => {
			toast.error(message, {
				icon: icon('danger'),
			})
		},
		warning: (message: string) => {
			toast.warning(message, {
				icon: icon('warning'),
			})
		},
		info: (message: string) => {
			toast.info(message, {
				icon: icon('info'),
			})
		},
		loading: (message: string) => {
			return toast.loading(message, {
				icon: UISpinner,
			})
		},
		dismiss: toast.dismiss,
	}
}
