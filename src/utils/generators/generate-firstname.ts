export function generateFirstName(): string {
	const names = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Diana'];
	return names[Math.floor(Math.random() * names.length)];
}
