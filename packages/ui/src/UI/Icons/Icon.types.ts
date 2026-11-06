import {
	Check,
	CircleAlert,
	CircleCheck,
	ClockAlert,
	Guitar,
	Info,
	MailCheck,
	Mic2,
	Music,
	Sparkles,
	X,
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
	X,
} as const

export type IconName = keyof typeof iconsMap

export type IconSize = 'small' | 'medium' | 'large'

export type IconProps = {
	name: IconName
	size?: IconSize
}
