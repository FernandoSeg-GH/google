import { faker } from "@faker-js/faker";

export type SearchResponse = {
  id: number;
  type: string;
  url: string;
  title: string;
  description: string;
  image: string;
};

const getImage = () => faker.image.avatar();
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences(3);
const getTitle = (type: string) => `Discover the amazing ${type}`;

export const getFakeData = async (
  query?: string
): Promise<SearchResponse[]> => {
  const delay = new Promise((resolve) => setTimeout(resolve, 3000));

  const data = Array.from({ length: 100 }).map((_, index) => {
    const type = getType();
    return {
      id: index + 1,
      type,
      url: getUrl(),
      title: getTitle(type),
      description: getText(),
      image: getImage(),
    };
  });

  const filteredData = query
    ? data.filter((item) =>
        [item.type, item.title, item.description]
          .map((field) => field.toLowerCase())
          .some((field) => field.includes(query.toLowerCase()))
      )
    : data;

  await Promise.all([delay]);
  return filteredData;
};
