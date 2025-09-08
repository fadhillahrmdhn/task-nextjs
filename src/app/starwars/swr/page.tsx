"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarwarData, StarwarsCharacters } from "@/interfaces";
import useSWR from "swr";
import { axiosFetcher } from "@/configs";

const StarWarSWRPage = () => {
  const { data, error, isLoading } = useSWR<StarwarData>(
    "/characters",
    axiosFetcher,
  );

  if (isLoading) {
    return <div className="m-4">Loading...</div>;
  }

  if (error) {
    return <div className="m-4">Error: {error.message}</div>;
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 m4">
        Star Wars Characters
      </h1>
      {data?.data.map((character: StarwarsCharacters) => (
        <Card key={character._id} className="m-4">
          <CardHeader>
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{character.name}</CardTitle>
            <p>{character.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default StarWarSWRPage;
