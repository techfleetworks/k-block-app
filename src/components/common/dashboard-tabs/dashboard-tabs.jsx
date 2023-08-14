import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardTabs() {
  return (
    <div className="px-12 xl:px-0 lg:px-0 md:px-0">
      <Tabs defaultValue="transactions" className="mt-12 px-3 md:px-12 ">
        <TabsList>
          <TabsTrigger value="transactions">Trending</TabsTrigger>
          <TabsTrigger value="tokens">Upcoming</TabsTrigger>
          <TabsTrigger value="nfts">Top</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">Trending NFT Collections</TabsContent>
        <TabsContent value="tokens">Upcoming NFTs</TabsContent>
        <TabsContent value="nfts">Top NFT Collections</TabsContent>
      </Tabs>
    </div>
  );
}
