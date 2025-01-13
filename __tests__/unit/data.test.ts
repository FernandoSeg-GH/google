import { getFakeData } from "@/actions/data";

describe("Unit Test: getting data from getFakeData() function", () => {
  it("returns 40 items when no query provided", async () => {
    const data = await getFakeData();
    if (data.length !== 40) {
      console.warn("Unexpected number of items returned:", data.length);
    }

    expect(data.length).toBe(40);
  });

  it("filters results by search query", async () => {
    const query = "dog";
    const data = await getFakeData(query);

    if (data.length === 0) {
      console.warn(
        `No results found for query: "${query}".`,
        "Search with a different query..."
      );
    } else if (
      !data.every(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query)
      )
    ) {
      console.error("Some results do not match the query:", data);
    } else {
      console.log(`Results matched for query: "${query}"`);
    }

    console.warn(`Success!! Results for: "${query}":`, data);

    expect(
      data.every(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query)
      )
    ).toBe(true);
  });
});
