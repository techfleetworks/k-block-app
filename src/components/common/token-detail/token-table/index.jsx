import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TokenTransactions from "./token-transactions";
import TokenHolders from "./token-holders";

export default function TokenTable(props) {
  return (
    <Tabs defaultValue="transactions" className="mt-12">
      <TabsList>
        <TabsTrigger value="transactions">{props.category1}</TabsTrigger>
        <TabsTrigger value="nfts">{props.category2}</TabsTrigger>
      </TabsList>
      <TabsContent value="transactions" className="rounded-tl-none">
        <TokenTransactions />
      </TabsContent>
      <TabsContent value="nfts">
        <TokenHolders />
      </TabsContent>
    </Tabs>
  );
}
