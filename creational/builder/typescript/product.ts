export class Pizza {
	public size: string | null = null;
	public toppings: string[] | null = null;
	public crustType: string | null = null;
	public sauce: string | null = null;
	public cheese: string | null = null;

	describe(): string {
		const description: string[] = [];
		description.push(`This is a ${this.size} pizza.`);

		for (const [name, value] of Object.entries(this)) {
			if (value && name !== 'size') {
				let formattedName = name[0].toUpperCase() + name.substring(1);
				let formattedValue: string;
				if (Array.isArray(value)) {
					formattedValue = value.join(', ');
				} else {
					formattedValue = value.toString();
				}
				description.push(`${formattedName}: ${formattedValue}`);
			}
		}

		return description.join('\n');
	}
}
