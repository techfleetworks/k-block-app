import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Transactions from './transactions';
import Metadata from './metadata';
import CustomPagination from '@/components/ui/table-custompagination';
import SurprisedApe from '@/assets/surprised-ape.svg';

export default function NftAssetTabs(props) {
  const [table, setTable] = useState({
    pageSize: 10,
    pageIndex: 0,
  });

  const data = [
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:a44d...5afc',
      to: 'k:6d87fd...bb89',
      txnHash: 'k:0x186...dbb13',
      time: '2 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      assetIDNr: '6',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:0x186...ebb13',
      to: 'k:a44d...5afc',
      txnHash: 'k:0x186...ebb13',
      time: '6 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:7858...57a0',
      to: 'k:0x186...ebb13',
      txnHash: 'k:0x186...bbb13',
      time: '6 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'radio0...bank',
      to: 'k:7858...57a0',
      txnHash: 'k:0x186...l2b13',
      time: '8 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:0x186...ebb13',
      to: 'radio0...bank',
      txnHash: 'k:0x186...obb13',
      time: '8 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:6d87f...vbb89',
      to: 'k:0x186...ebb13',
      txnHash: 'O-qwN_...vW7E',
      time: '12 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:97b8e...2db09',
      to: 'k:6d87f...vbb89',
      txnHash: 'O-qwN_...eqW7E',
      time: '1 day ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:71b1g...7b78a',
      to: 'k:97b8e...2db09',
      txnHash: 'q2L0-B...sMMo',
      time: '2 days ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:e7f7c...4e9f3',
      to: 'k:71b1g...7b78a',
      txnHash: 'Sssgx...TtCrk',
      time: '2 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:09sdx...2e231',
      to: 'k:e7f7c...4e9f3',
      txnHash: 'R7O3W...h3yhE',
      time: '2 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:97b8e...2db09',
      to: 'k:6d87f...vbb89',
      txnHash: 'O-qwN_...eqW7E',
      time: '1 day ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:71b1g...7b78a',
      to: 'k:97b8e...2db09',
      txnHash: 'q2L0-B...sMMo',
      time: '2 days ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:a44d...5afc',
      to: 'k:6d87fd...bb89',
      txnHash: 'k:0x186...dbb13',
      time: '2 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      assetIDNr: '6',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:0x186...ebb13',
      to: 'k:a44d...5afc',
      txnHash: 'k:0x186...ebb13',
      time: '6 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:7858...57a0',
      to: 'k:0x186...ebb13',
      txnHash: 'k:0x186...bbb13',
      time: '6 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'radio0...bank',
      to: 'k:7858...57a0',
      txnHash: 'k:0x186...l2b13',
      time: '8 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:0x186...ebb13',
      to: 'radio0...bank',
      txnHash: 'k:0x186...obb13',
      time: '8 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:6d87f...vbb89',
      to: 'k:0x186...ebb13',
      txnHash: 'O-qwN_...vW7E',
      time: '12 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:97b8e...2db09',
      to: 'k:6d87f...vbb89',
      txnHash: 'O-qwN_...eqW7E',
      time: '1 day ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:71b1g...7b78a',
      to: 'k:97b8e...2db09',
      txnHash: 'q2L0-B...sMMo',
      time: '2 days ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:e7f7c...4e9f3',
      to: 'k:71b1g...7b78a',
      txnHash: 'Sssgx...TtCrk',
      time: '2 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Transfer',
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: 'k:09sdx...2e231',
      to: 'k:e7f7c...4e9f3',
      txnHash: 'R7O3W...h3yhE',
      time: '2 hours ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:97b8e...2db09',
      to: 'k:6d87f...vbb89',
      txnHash: 'O-qwN_...eqW7E',
      time: '1 day ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: '6',
      action: 'Sale',
      priceTradedOn: '7.2 KDA',
      priceTradedOnUSD: '4.10 USD',
      from: 'k:71b1g...7b78a',
      to: 'k:97b8e...2db09',
      txnHash: 'q2L0-B...sMMo',
      time: '2 days ago',
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Sale",
      priceTradedOn: "7.2 KDA",
      priceTradedOnUSD: "4.10 USD",
      from: "k:a44d...5afc",
      to: "k:6d87fd...bb89",
      txnHash: "k:0x186...dbb13",
      time: "2 hours ago",
    },
    {
      assetID: SurprisedApe,
      assetIDNr: "6",
      action: "Transfer",
      assetIDNr: "6",
      priceTradedOn: undefined,
      priceTradedOnUSD: undefined,
      from: "k:0x186...ebb13",
      to: "k:a44d...5afc",
      txnHash: "k:0x186...ebb13",
      time: "6 hours ago",
    },
  ];
  const pageCount = Math.ceil(data.length / table.pageSize);

  return (
    <Tabs defaultValue="transactions" className="mt-12">
      <TabsList>
        <TabsTrigger value="transactions">{props.category1}</TabsTrigger>
        <TabsTrigger value="metadata">{props.category2}</TabsTrigger>
      </TabsList>
      <TabsContent value="transactions" className="rounded-tl-none">
        <Transactions
          title="Transactions"
          pageSize={table.pageSize}
          pageIndex={table.pageIndex}
          onPageChange={(newPageIndex) => {
            setTable((prevTable) => ({
              ...prevTable,
              pageIndex: newPageIndex,
            }));
          }}
          onPageSizeChange={(newPageSize) => {
            setTable({ ...table, pageSize: newPageSize, pageIndex: 0 });
          }}
          data={data}
        />
        <CustomPagination
          pageSize={table.pageSize}
          pageIndex={table.pageIndex}
          pageCount={pageCount} // You need to provide pageCount here
          onPageChange={(newPageIndex) => {
            setTable((prevTable) => ({
              ...prevTable,
              pageIndex: newPageIndex,
            }));
          }}
          onPageSizeChange={(newPageSize) => {
            setTable({ ...table, pageSize: newPageSize, pageIndex: 0 });
          }}
        />
      </TabsContent>
      <TabsContent value="metadata">
        <Metadata
          title="Metadata"
          subtitle="Retrieved from token’s URI:"
          subtitleLink="https://variationapes.com/collection/6.json"
        />
      </TabsContent>
    </Tabs>
  );
}
