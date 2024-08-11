function generatePhoneNumber(): string {
  const areaCode = Math.floor(Math.random() * 89) + 11;

  const phoneNumber = Math.floor(Math.random() * 900000000) + 100000000;

  const formattedPhoneNumber = `${areaCode}${phoneNumber}`;

  return formattedPhoneNumber;
}
