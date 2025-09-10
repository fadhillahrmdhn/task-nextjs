"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarwarData, StarwarsCharacters } from "@/interfaces";
import { useEffect, useState } from "react";
import { api } from "@/configs/axios.config";

const getstarWars = async () => {
  const res = await api.get<StarwarData>("/characters");
  return res.data;
};

const StarWarAxiosClientPage = () => {
  const [data, setData] = useState<StarwarData | null>(null);

  useEffect(() => {
    getstarWars().then(setData).catch(console.error);
  }, []);

  if (!data) {
    return <div className="m-4">Loading...</div>;
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

export default StarWarAxiosClientPage;
