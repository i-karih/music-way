/**
Delays calling a function until `delay` ms have passed since the last call.
@param fn Function to delay.
@param delay Delay in milliseconds.
@returns Debounced function.
*/
export function debounce<T extends (...args: unknown[]) => unknown>(
	fn: T,
	delay: number
): (...args: Parameters<T>) => void {
	let timeoutId: ReturnType<typeof setTimeout>

	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn(...args), delay)
	}
}
