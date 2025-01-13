import { reducer, initialState } from "@/context";
import type { SearchResponse } from "@/actions/data";

const sampleResult: SearchResponse = {
  id: 1,
  type: "dog",
  url: "http://dog.com",
  title: "The amazing dog",
  description: "A dog",
  image: "http://dog.com/dog.jpg",
};

describe("Unit Test: testing context reducers", () => {
  it("handles SELECT_RESULT", () => {
    const newState = reducer(initialState, {
      type: "SELECT_RESULT",
      payload: sampleResult,
    });
    console.log("SELECT_RESULT:", newState);
    expect(newState.selectedResult).toEqual(sampleResult);
  });

  it("handles CLEAR_SELECTED", () => {
    const stateWithSelected = { ...initialState, selectedResult: sampleResult };
    const newState = reducer(stateWithSelected, { type: "CLEAR_SELECTED" });
    console.log("CLEAR_SELECTED:", newState);
    expect(newState.selectedResult).toBeNull();
  });

  it("handles SET_LOADING", () => {
    const newState = reducer(initialState, {
      type: "SET_LOADING",
      payload: false,
    });
    console.log("SET_LOADING:", newState);
    expect(newState.loading).toBe(false);
  });

  it("handles SET_QUERY", () => {
    const newQuery = "cat";
    const newState = reducer(initialState, {
      type: "SET_QUERY",
      payload: newQuery,
    });
    console.log("SET_QUERY:", newState);
    expect(newState.query).toBe(newQuery);
  });
});
