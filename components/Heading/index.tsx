import { Text } from "@chakra-ui/react";
import React from "react";

function Heading({ text }: { text: string }) {
  return (
    <Text as="h2" fontSize="2xl" fontWeight="bold" p={2}>
      {text}
    </Text>
  );
}

export default Heading;
