import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { CgSpinner } from "react-icons/cg";

export function AuthSubmitButton() {
  const res = useFormStatus();
  const isLoading = res.pending;
  return (
    <Button
      type="submit"
      size={"lg"}
      variant={"default"}
      disabled={isLoading}
      className={cn("w-full")}
    >
      {isLoading ? <CgSpinner className="animate-spin" /> : "Continue"}
    </Button>
  );
}

export function wait<T>(value: T) {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 2000);
  });
}
