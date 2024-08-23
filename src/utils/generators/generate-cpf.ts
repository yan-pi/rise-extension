export function generateCPF(): string {
	const randomDigit = () => Math.floor(Math.random() * 10);

	const cpf = Array.from({ length: 9 }, randomDigit);

	let sum = 0;
	for (let i = 0; i < 9; i++) {
		sum += cpf[i] * (10 - i);
	}
	let firstVerificationDigit = 11 - (sum % 11);
	if (firstVerificationDigit >= 10) firstVerificationDigit = 0;
	cpf.push(firstVerificationDigit);

	sum = 0;
	for (let i = 0; i < 10; i++) {
		sum += cpf[i] * (11 - i);
	}
	let secondVerificationDigit = 11 - (sum % 11);
	if (secondVerificationDigit >= 10) secondVerificationDigit = 0;
	cpf.push(secondVerificationDigit);

	return cpf.join('');
}
