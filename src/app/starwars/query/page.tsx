"use client";

import { characterQueryKey, fetchCharacters } from "@/configs";
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

const StarwarsQueryPage = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);

  const { data, error, isLoading } = useQuery<StarwarData>({
    queryKey: characterQueryKey({ page, limit }),
    queryFn: () => fetchCharacters({ page, limit }),
  });

  const totalPage = data?.info?.total
    ? Math.ceil(data?.info?.total / limit)
    : 1;

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
    <div>
      <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data?.map((character) => (
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
        ))}
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem
              className={
                data?.info?.page === 1
                  ? "pointer-events-none opacity-40"
                  : "cursor-pointer"
              }
            >
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>

            {Array.from({ length: 10 }, (_, i) => (
              <PaginationItem key={i} className="cursor-pointer">
                <PaginationLink
                  onClick={() => handlePageClick(i + 1)}
                  isActive={data?.info?.page === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem
              className={
                data?.info?.page === totalPage
                  ? "pointer-events-none opacity-40"
                  : "cursor-pointer"
              }
            >
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default StarwarsQueryPage;
