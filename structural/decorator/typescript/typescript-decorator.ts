export function TypescriptTimerDecorator() {
	return function (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;

		descriptor.value = async function (...args: any[]) {
			const startTime = new Date().getTime();
			const result = await originalMethod.apply(this, args);
			const endTime = new Date().getTime();
			const elapsedTime = endTime - startTime;
			console.log(
				`[Typescript Decorator] Time taken to send notification: ${elapsedTime} milliseconds`
			);
			return result;
		};

		return descriptor;
	};
}
