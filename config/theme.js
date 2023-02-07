import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#d3d3d3 ",
      // ...
      900: "#1a202c",
    },
  },
})


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// const theme = extendTheme({ config });

export default theme;
