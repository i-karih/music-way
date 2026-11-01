export type TabProps = {
	disabled?: boolean
	value: string | number
}

export type TabContainerProps = {
	name: string
}

export type TabsProps = {
	name: string
	disabled?: boolean
	options: TabsOptions[]
}

export type TabsOptions = {
	label: string
	value: string | number
	disabled?: boolean
}

export type TabModel = string | number

export type TabContext = {
	model: Ref<string | number>
	name: Ref<string>
}
