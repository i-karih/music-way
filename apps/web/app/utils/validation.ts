const EMAIL_REGEX = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/

/**
Checks whether a string looks like an email address.
@param email String to check.
@returns `true` if the format is valid.
*/
export function isValidEmail(email: string): boolean {
	return EMAIL_REGEX.test(email)
}
