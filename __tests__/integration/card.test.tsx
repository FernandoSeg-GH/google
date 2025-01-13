import { render, screen, fireEvent, act, within, waitFor } from "@testing-library/react";
import { SearchProvider } from "@/context";
import SearchResults from "@/components/search/results";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn((key) => (key === "query" ? "dog" : null)),
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("@/actions/data", () => ({
  getFakeData: jest.fn((query) =>
    query === "dog"
      ? Promise.resolve([
        {
          id: 1,
          type: "dog",
          url: "http://dog.com",
          title: "The amazing dog",
          description: "A dog",
          image: "http://dog.com/dog.jpg",
        },
      ])
      : Promise.resolve([])
  ),
}));

const mockTitle = "The amazing dog";
const mockDescription = "A dog";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn((key) => (key === "query" ? "dog" : null)),
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock("@/actions/data", () => ({
  getFakeData: jest.fn((query) =>
    query === "dog"
      ? Promise.resolve([
        {
          id: 1,
          type: "dog",
          url: "http://dog.com",
          title: "The amazing dog",
          description: "A dog",
          image: "http://dog.com/dog.jpg",
        },
      ])
      : Promise.resolve([])
  ),
}));

describe("Integration Test: SearchResults and SelectedCardWrapper", () => {
  it("fetches data, displays results, selects a result, and renders a card", async () => {
    await act(async () => {
      render(
        <SearchProvider>
          <SearchResults />
        </SearchProvider>
      );
    });

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });

    const result = await screen.findByRole("article", {
      name: `${mockTitle} - ${mockDescription}`,
    });
    expect(result).toBeInTheDocument();

    fireEvent.click(result);

    const dialogs = await screen.findAllByRole("dialog");
    expect(dialogs).toHaveLength(1);

    const cardContainer = dialogs[0];
    const cardTitle = within(cardContainer).getByRole("heading", {
      name: mockTitle,
    });
    expect(cardTitle).toBeInTheDocument();

    const cardDescription = within(cardContainer).getByText(mockDescription);
    expect(cardDescription).toBeInTheDocument();
  });
});
