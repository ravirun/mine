"use client"

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default  function Home() {
  const [text, setText] = useState("")
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
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => invokeInngest.mutate({value: text})} >
        Invoke Inngest Function
      </Button>
    </div>
    
  );
}
