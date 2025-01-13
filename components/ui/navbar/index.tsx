"use client";
import React from "react";
import { Menu } from "./menu";
import User from "./user";
import Logo from "../logo";
import Link from "next/link";
import SearchBar from "../search-bar";
import { useSearch } from "@/context";
import { useRouter } from "next/navigation";

type NavbarProps = {
      searchable?: boolean;
};

const Navbar = ({ searchable }: NavbarProps) => {
      const { state, dispatch } = useSearch();
      const router = useRouter();

      const handleQueryChange = (newQuery: string) => {
            dispatch({ type: "SET_QUERY", payload: newQuery });
      };

      const handleSearch = (newQuery: string) => {
            dispatch({ type: "SET_LOADING", payload: true });
            dispatch({ type: "SET_QUERY", payload: newQuery });
            router.push(`/search?query=${encodeURIComponent(newQuery)}`);
            dispatch({ type: "SET_LOADING", payload: false });
      };

      return (
            <nav className="w-full flex items-center justify-between p-4 shadow text-black">
                  {searchable ? (
                        <div className="flex items-center gap-6 w-full">
                              <Link href="/">
                                    <Logo width={120} />
                              </Link>
                              <SearchBar
                                    initialQuery={state.query}
                                    onQueryChange={handleQueryChange}
                                    onSearch={handleSearch}
                              />
                        </div>
                  ) : (
                        <div className="flex items-center gap-2">
                              <h1 className="font-bold">Agile Content</h1>
                              <h2>Frontend test</h2>
                        </div>
                  )}
                  <div className="flex items-center gap-4">
                        <Menu />
                        <User />
                  </div>
            </nav>
      );
};

export default Navbar;
