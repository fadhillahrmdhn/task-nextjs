import { AxiosResponse } from "axios";
import { api } from "@/configs";
import {
  StarwarsCharacters,
  PaginationParams,
  StarwarData,
} from "@/interfaces";

export const fetchCharacters = async ({
  page = 1,
  limit = 10,
}: PaginationParams = {}): Promise<StarwarData> => {
  const res: AxiosResponse<StarwarData> = await api.get("/characters", {
    params: {
      page,
      limit,
    },
  });
  return res.data;
};

export const SearchCharacter = async (name: string): Promise<StarwarData> => {
  // Lakukan request untuk mendapatkan total karakter
  const infoRes = await api.get<StarwarData>("/characters", {
    params: { limit: 1 },
  });
  const totalCharacters = infoRes.data.info.total;

  // Gunakan total karakter sebagai limit untuk mengambil semua data
  const allCharactersRes = await api.get<StarwarData>("/characters", {
    params: { limit: totalCharacters },
  });

  // Filter hasil
  const filteredCharacters = allCharactersRes.data.data.filter(
    (character: StarwarsCharacters) =>
      character.name.toLowerCase().includes(name.toLowerCase()),
  );

  return {
    info: {
      total: filteredCharacters.length,
      page: 1,
      limit: filteredCharacters.length > 0 ? filteredCharacters.length : 10,
      next: null,
      prev: null,
    },
    data: filteredCharacters,
  };
};

export const characterQueryKey = (params: PaginationParams) => [
  "characters",
  params,
];
