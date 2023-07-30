import { extendTheme } from "@chakra-ui/react";

export const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default theme;
