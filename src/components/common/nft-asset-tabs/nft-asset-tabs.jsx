import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Transactions from './transactions';
import Metadata from './metadata';

export default function nftAssetTabs(props) {
  return (
    <Tabs defaultValue="transactions" className="mt-12">
      <TabsList>
        <TabsTrigger value="transactions">{props.category1}</TabsTrigger>
        <TabsTrigger value="metadata">{props.category2}</TabsTrigger>
      </TabsList>
      <TabsContent value="transactions" className="rounded-tl-none">
        <Transactions title="Transactions" />
        <p className="my-10">Pagination needs to go here</p>
      </TabsContent>
      <TabsContent value="metadata">
        <Metadata title="Metadata" />
        <p className="my-10">Pagination needs to go here</p>
      </TabsContent>
    </Tabs>
  );
}
