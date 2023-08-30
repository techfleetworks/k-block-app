import TokensTable from "@/components/common/tokens-table";

export default function tokens() {
  return (
    <div className="container md:px-12 px-3">
      <h1 className="my-8 text-[32px] font-bold">Tokens</h1>
      <TokensTable />
    </div>
  );
}
