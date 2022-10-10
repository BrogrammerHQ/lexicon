import { Badge, Box, Center, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface CategoriesBoxProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  id: string;
}

function CategoriesBox({ imageUrl, imageAlt, title, id }: CategoriesBoxProps) {
  return (
    <Link href={`/app/${id}`}>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="100%"
        display={"flex"}
        flexDirection={"column"}
      >
        <Image src={imageUrl} alt={imageAlt} height={"5rem"} />

        <Box
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          noOfLines={1}
          p={2}
        >
          {title}
        </Box>
      </Box>
    </Link>
  );
}

export default CategoriesBox;
