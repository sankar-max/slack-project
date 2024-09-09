import { AuthFields } from "@/types/auth";

export function authValidation<T extends AuthFields>(fields: T, isSignInPage: boolean) {
  if (!fields.email || !fields.password || !fields.confirmPassword) {
    console.error("Please fill in all fields.");
    return;
  }

  if (fields.password !== fields.confirmPassword) {
    console.error("Passwords do not match.");
    return;
  }
}
