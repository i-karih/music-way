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
} as const

export type IconName = keyof typeof iconsMap
