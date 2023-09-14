import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Trending from "./trending";
import Upcoming from "./upcoming";
import TopNFTCollections from "./top-nft-collection";
import CustomPagination from "@/components/ui/table-custompagination";

// I could not find a better way to tag the pagination only in one place but to use it multiple times.

export default function BoardTabs(props) {
  return (
    <Tabs defaultValue="transactions" className="mt-12">
      <TabsList>
        <TabsTrigger value="transactions">{props.category1}</TabsTrigger>
        <TabsTrigger value="tokens">{props.category2}</TabsTrigger>
        <TabsTrigger value="nfts">{props.category3}</TabsTrigger>
      </TabsList>
      <TabsContent value="transactions" className="rounded-tl-none">
        <Trending title="Trending NFT Collections" />
        <CustomPagination pageIndex={1} pageCount={25} />
      </TabsContent>
      <TabsContent value="tokens">
        <Upcoming title="Upcoming Collections" />
        <CustomPagination pageIndex={1} pageCount={25} />
      </TabsContent>
      <TabsContent value="nfts">
        <TopNFTCollections title="Top NFT Collections" />
        <CustomPagination pageIndex={1} pageCount={25} />
      </TabsContent>
    </Tabs>
  );
}
