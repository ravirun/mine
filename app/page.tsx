"use client"

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default  function Home() {
  const [value, setValue] = useState("")
  const trpc = useTRPC()
  const {data:messages} = useQuery(trpc.messages.getMany.queryOptions())
  const createMessage = useMutation(trpc.messages.create.mutationOptions({
    onSuccess: () => {
      toast.success("Message created")
    },
    onError: () => {
      toast.error("Error creating message")
    }
  }))

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button 
      disabled={createMessage.isPending} 
      onClick={() => createMessage.mutate({value: value})}
      >
        Create Message
      </Button>
      {JSON.stringify(messages , null, 2)}
    </div>
    
  );
}
