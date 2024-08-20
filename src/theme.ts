import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// add color theme config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// extend the theme
const theme = extendTheme({ config });

export default theme;
