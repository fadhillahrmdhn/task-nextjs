import { AxiosResponse } from "axios";
import { api } from "@/configs";
import { PaginationParams, StarwarData } from "@/interfaces";

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

export const characterQueryKey = (params: PaginationParams) => [
  "characters",
  params,
];
