import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

function SearchBox({ searchTerm, setSearchTerm }: any) {
  return (
    <InputGroup size="md">
      <InputLeftElement
        width="2rem"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img src="/search.svg" alt="search" />
      </InputLeftElement>
      <Input
        pr="4.5rem"
        type={true ? "text" : "password"}
        placeholder="Search Jargons"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchBox;
