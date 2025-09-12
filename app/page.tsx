"use client"

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default  function Home() {
  const trpc = useTRPC()
  const invokeInngest = useMutation(trpc.invokeInngest.mutationOptions({
    onSuccess: (data) => {
      toast.success("Inngest function invoked")
      console.log(data)
    },
    onError: (error) => {
      toast.error("Error invoking Inngest function")
      console.error(error)
    }
  }))

  return (
    <div>
      <Button onClick={() => invokeInngest.mutate({ text: "hello" })} >
        Invoke Inngest Function
      </Button>
    </div>
    
  );
}
