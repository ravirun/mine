import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Client from "./Client";
import { Suspense } from "react";

export default async function Home() {

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.createAiWebsite.queryOptions({ name: "client", description: "client", keywords: ["client"], pages: [{ name: "client", content: "client" }] }))
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
<Client/>
</Suspense>
    </HydrationBoundary>
    
  );
}
