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
  const res: AxiosResponse<StarwarsCharacters[]> = await api.get(
    `/characters/name/${name}`,
  );
  const characters = res.data;

  return {
    info: {
      total: characters.length,
      page: 1,
      limit: characters.length > 0 ? characters.length : 10,
      next: null,
      prev: null,
    },
    data: characters,
  };
};

export const characterQueryKey = (params: PaginationParams) => [
  "characters",
  params,
];
