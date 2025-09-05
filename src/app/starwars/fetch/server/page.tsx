import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarwarData, StarwarsCharacters } from "@/interfaces";
const baseUrl = process.env.NEXT_PUBLIC_STARWARS_API;

const getstarWars = async () => {
  const res = await fetch(`${baseUrl}/characters`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}: ${res.statusText}`);
  }
  return res.json();
};

const StarWarFetchServerPage = async () => {
  const data: StarwarData = await getstarWars();
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

export default StarWarFetchServerPage;
