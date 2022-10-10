import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";

function JargonListItem({ title }: any) {
  return (
    <Box padding={"0.2rem 0.3rem"} cursor="pointer">
      <Text fontSize={"xl"} p={1}>
        {title}
      </Text>
      <Divider />
    </Box>
  );
}

export default JargonListItem;
