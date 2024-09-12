"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/store/dialog-modal/use-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { wrokspace_schema } from "@/schema/workspeace";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type createWorkspaceT = z.infer<typeof wrokspace_schema>;

export const CreateWorkSpaceModal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useModal();
  const createApi = useMutation(api.workspace.create);

  const form = useForm<createWorkspaceT>({
    resolver: zodResolver(wrokspace_schema),
    defaultValues: {
      name: "",
    },
  });

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onSubmit = async (formValues: createWorkspaceT) => {
    try {
      if (formValues.name) {
        const res = await createApi({ name: formValues.name });
        debugger;
        form.reset();
        toast.success("WorkSpace is created.");
        setIsOpen(false);
        router.push(`/workspace/${res.workspace_id}`);
      }
    } catch (error) {}
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add workspace</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workspace Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Workspace name e.g "Work","Personal'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
