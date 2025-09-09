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
  const res: AxiosResponse<StarwarData> = await api.get(`/characters`, {
    params: {
      page: 1,
      limit: 952,
    },
  });

  const filteredCharacters = res.data.data.filter(
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
