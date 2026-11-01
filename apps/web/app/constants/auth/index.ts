export enum AuthStep {
	Email = 'email',
	CheckEmail = 'check-email',
}

export enum AuthCodeState {
	Idle,
	Invalid,
	Failed,
	Success,
}
