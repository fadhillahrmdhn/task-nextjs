"use client";

import { useSearchStore } from "@/store";
import { SearchBar } from "./_components/SearchBar";

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { search, setSearch } = useSearchStore();
  return (
    <div className="flex flex-col m-4 gap-4">
      <SearchBar search={search} setSearch={setSearch} />
      {children}
    </div>
  );
}
