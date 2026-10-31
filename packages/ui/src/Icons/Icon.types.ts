import {
	Mic2,
	Check,
	Music,
	Guitar,
	MailCheck,
} from 'lucide-vue-next'

export const iconsMap = {
	Mic2,
	Check,
	Music,
	Guitar,
	MailCheck,
} as const

export type IconName = keyof typeof iconsMap
