"use client";

import {
  fetchCharacters,
  characterQueryKey,
  SearchCharacter,
} from "@/services";
import { StarwarData } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { usePagination, dots } from "@/hooks";
import { SearchBar } from "./_components/SearchBar";

const StarwarsQueryPage = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");

  const { data, error, isLoading } = useQuery<StarwarData>({
    queryKey: characterQueryKey({ page, limit, name: search }),
    queryFn: () =>
      search ? SearchCharacter(search) : fetchCharacters({ page, limit }),
  });

  const totalPage = data?.info?.total
    ? Math.ceil(data?.info?.total / limit)
    : 1;

  const paginationRange = usePagination({
    totalPage,
    currentPage: page,
    siblingCount: 1,
  });

  if (isLoading) {
    return <div className="m-4">Loading...</div>;
  }

  if (error) {
    return <div className="m-4">Error: {error.message}</div>;
  }

  const handlePreviousPage = (): void => {
    setPage((page) => Math.max(page - 1, 1));
  };

  const handleNextPage = (): void => {
    setPage((page) => Math.min(page + 1, totalPage));
  };

  const handlePageClick = (pageNumber: number): void => {
    setPage(pageNumber);
  };

  return (
    <div className="flex flex-col m-4 gap-4">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data && data.data.length > 0 ? (
          data.data.map((character) => (
            <Card key={character._id} className="p-0 gap-0 overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={character.image}
                  alt={character.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{character.name}</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                  {character.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center">No characters found.</div>
        )}
      </div>
      <div>
        {totalPage > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem
                className={
                  page === 1
                    ? "pointer-events-none opacity-40"
                    : "cursor-pointer"
                }
              >
                <PaginationPrevious onClick={handlePreviousPage} />
              </PaginationItem>

              {paginationRange.map((pageNumber, i) => {
                if (pageNumber === dots) {
                  return (
                    <PaginationItem key={i}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }
                return (
                  <PaginationItem key={pageNumber} className="cursor-pointer">
                    <PaginationLink
                      onClick={() => handlePageClick(pageNumber as number)}
                      isActive={page === pageNumber}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem
                className={
                  page === totalPage
                    ? "pointer-events-none opacity-40"
                    : "cursor-pointer"
                }
              >
                <PaginationNext onClick={handleNextPage} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default StarwarsQueryPage;
