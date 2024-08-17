export function generateCPF(): string {
	// Helper function to generate a random digit
	const randomDigit = () => Math.floor(Math.random() * 10);

	// Generate the first 9 digits of the CPF
	const cpf = Array.from({ length: 9 }, randomDigit);

	// Calculate the first verification digit
	let sum = 0;
	for (let i = 0; i < 9; i++) {
		sum += cpf[i] * (10 - i);
	}
	let firstVerificationDigit = 11 - (sum % 11);
	if (firstVerificationDigit >= 10) firstVerificationDigit = 0;
	cpf.push(firstVerificationDigit);

	// Calculate the second verification digit
	sum = 0;
	for (let i = 0; i < 10; i++) {
		sum += cpf[i] * (11 - i);
	}
	let secondVerificationDigit = 11 - (sum % 11);
	if (secondVerificationDigit >= 10) secondVerificationDigit = 0;
	cpf.push(secondVerificationDigit);

	// Format the CPF as a string
	return cpf.join('');
}
