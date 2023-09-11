import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingNFTAssets from "./nft-collection-trending";
import NFTCollectionAnalytics from "./nft-collection-analytics";
import NFTCollectionContract from "./nft-collection-contract";

export default function NFTCollectionTabs() {
  return (
    <Tabs defaultValue="trending">
      <TabsList>
        <TabsTrigger value="trending">Trending</TabsTrigger>
        <TabsTrigger value="analysis">Analytics</TabsTrigger>
        <TabsTrigger value="contract">Contract</TabsTrigger>
      </TabsList>
      <TabsContent value="trending" className="rounded-t-none">
        <TrendingNFTAssets title="Trending NFT Assets" />
      </TabsContent>
      <TabsContent value="analysis">
        <NFTCollectionAnalytics title="Collection analysis" />
      </TabsContent>
      <TabsContent value="contract">
        <NFTCollectionContract title="Smart Contract" />
      </TabsContent>
    </Tabs>
  );
}
