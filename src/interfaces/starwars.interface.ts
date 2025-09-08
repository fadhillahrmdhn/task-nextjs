export interface Info {
  total: number;
  page: number;
  limit: number;
  next: string | null;
  prev: string | null;
}

export interface StarwarsCharacters {
  _id: string;
  name: string;
  description: string;
  image: string;
  __v: number;
}

export interface StarwarData {
  info: Info;
  data: StarwarsCharacters[];
}
