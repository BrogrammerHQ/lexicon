import { Badge, Box, Center, Image } from "@chakra-ui/react";
import React from "react";

interface FeaturedBoxProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
}

function FeaturedBox({
  imageUrl,
  imageAlt,
  title,
  backgroundColor,
}: FeaturedBoxProps) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      background={backgroundColor}
      height="100%"
      display={"flex"}
      flexDirection={"column"}
    >
      <Center flex={1}>
        <Image src={imageUrl} alt={imageAlt} height={"3rem"} />
      </Center>
      <Box p="2">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          noOfLines={1}
          fontSize="1.2rem"
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
}

export default FeaturedBox;
