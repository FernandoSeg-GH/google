import { render, screen, fireEvent, act, within } from "@testing-library/react";
import { SearchProvider } from "@/context";
import SearchResults from "@/components/search/results";
import { SearchResponse } from "@/actions/data";
import SelectedCardWrapper from "@/components/search/card";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn((param) => (param === "query" ? "dog" : "")),
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("@/actions/data", () => ({
  getFakeData: jest.fn(() =>
    Promise.resolve([
      {
        id: 1,
        type: "dog",
        url: "http://dog.com",
        title: "The amazing dog",
        description: "A dog",
        image: "http://dog.com/dog.jpg",
      },
    ] satisfies SearchResponse[])
  ),
}));

describe("Integration Test: SearchResults and SelectedCardWrapper", () => {
  it("fetches data, displays results, selects a result, and renders a card", async () => {
    const mockTitle = "The amazing dog";
    const mockDescription = "A dog";

    await act(async () => {
      render(
        <SearchProvider>
          <SearchResults />
          <SelectedCardWrapper />
        </SearchProvider>
      );
    });

    const result = await screen.findByRole("article", {
      name: `${mockTitle} - ${mockDescription}`,
    });
    expect(result).toBeInTheDocument();

    fireEvent.click(result);

    const cardContainer = screen.getByRole("dialog");
    expect(cardContainer).toBeInTheDocument();

    const cardTitle = within(cardContainer).getByRole("heading", {
      name: mockTitle,
    });
    expect(cardTitle).toBeInTheDocument();

    const cardDescription = within(cardContainer).getByText(mockDescription);
    expect(cardDescription).toBeInTheDocument();

    const cardImage = within(cardContainer).getByAltText(mockTitle);
    expect(cardImage).toBeInTheDocument();
  });
});
