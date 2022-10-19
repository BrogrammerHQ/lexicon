import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/comfortaa";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Comfortaa', sans-serif`,
  },
});

export default theme;
