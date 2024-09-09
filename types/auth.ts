export type AuthFlow="signIn"|"signUp"

export type AuthFields= {
  email: string;
  password: string;
  confirmPassword: string;
}