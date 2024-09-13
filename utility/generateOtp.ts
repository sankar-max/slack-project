export function generateOtp(length: number) {
  const char = "0123456789abcdefghijklmnopqrstuvwxyz";
  let otp: string = "";

  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * char.length);
    otp += char[randomValue];
  }
  return otp;
}
