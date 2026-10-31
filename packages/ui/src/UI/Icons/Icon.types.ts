import {
	Mic2,
	Check,
	Music,
	Guitar,
	MailCheck,
	CircleCheck,
	CircleAlert,
	ClockAlert,
	Sparkles,
	Info,
} from 'lucide-vue-next'

export const iconsMap = {
	Mic2,
	Check,
	Music,
	Guitar,
	MailCheck,
	CircleCheck,
	CircleAlert,
	ClockAlert,
	Sparkles,
	Info,
} as const

export type IconName = keyof typeof iconsMap
