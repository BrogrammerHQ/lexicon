import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";

function JargonListItem({ id, title }: any) {
  return (
    <Box padding={"0.2rem 0.3rem"}>
      <Text fontSize={"xl"} p={1}>
        {title}
      </Text>
      <Divider />
    </Box>
  );
}

export default JargonListItem;
